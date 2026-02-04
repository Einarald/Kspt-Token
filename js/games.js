// ==========================================
// GAMES SYSTEM - games.js
// ==========================================

let currentGame = null;
let gameActive = false;
let gameInterval = null;
let gameTicketPending = false;
let gameOverActive = false;
let parentBlockActive = false;
let gameTickets = {
  max: 10,
  current: 10,
  lastRefill: Date.now(),
  nextRefill: 0
};

// --- restart + game over control ---
let gameOver = false;

function isInGameOver() {
  return !!gameOver;
}

// --- SAFE EXIT: убирает overlay и возвращает в меню ---
function clearOverlayAndExit() {
  try {
    const overlay = document.getElementById('kspt_game_block_overlay');
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  } catch (e) {}

  parentBlockActive = false;

  try {
    exitGame(); // возвращает в games меню
  } catch (e) {}
}

function setGameOver(flag) {
  gameOver = !!flag;
  gameOverActive = !!flag; 

  // Блокируем кнопки в родительском UI (как было)
  const restartBtn = document.getElementById('restartBtn');
  if (restartBtn) restartBtn.disabled = !!flag;

  const controls = document.querySelectorAll('#gameControls button');
  controls.forEach(btn => {
    if (btn.id === 'playAgainBtn' || btn.id === 'exitToMenuBtn') {
      btn.disabled = false;
    } else {
      btn.disabled = !!flag;
    }
  });

  // --- Overlay: блокирует все клики поверх iframe/gameContainer ---
  const overlayId = 'kspt_game_block_overlay';
  const gameContainer = document.getElementById('gameContainer');
  let overlay = document.getElementById(overlayId);

  if (flag) {
    // создаём overlay если ещё нет
    if (!overlay && gameContainer) {
      // убедимся, что контейнер позиционирован относительно для overlay
      if (getComputedStyle(gameContainer).position === 'static') {
        gameContainer.style.position = 'relative';
      }
      overlay = document.createElement('div');
      overlay.id = overlayId;
      Object.assign(overlay.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        background: 'rgba(0,0,0,0.5)', // Изменить на полупрозрачный
        pointerEvents: 'auto' // ловим клики
      });
      gameContainer.appendChild(overlay);
    }
  } else {
    // удаляем overlay при выходе из Game Over
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }

  // Уведомляем iframe (если он слушает) чтобы оно могло обновить своё UI (опционально)
  try {
    const frameContainer = document.getElementById('gameFrameContainer');
    const iframe = frameContainer ? frameContainer.querySelector('iframe') : null;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ 
        type: 'kspt_parent_set_game_over', 
        flag: !!flag,
        blockButtons: true // Добавить этот флаг
      }, '*');
    }
  } catch (e) { /* silent */ }
}

function confirmRestartFromParent() {
  // Если в Game Over - блокируем рестарт
  if (isInGameOver()) {
    showToast("Restart is disabled during Game Over");
    return;
  }

  // Проверяем билеты
    if (gameTickets.current <= 0) {
    // Закрываем игру вместо ручного удаления overlay
    clearOverlayAndExit();
    showToast("Not enough tickets to restart");
    return;
  }

  // Показываем confirm окно
  const confirmed = window.confirm("Are you sure? Cost: 1 Ticket.");
  if (!confirmed) return;

  // Списываем билет
  gameTicketPending = true;
  consumeTicketForCurrentGame();

  // Отправляем команду рестарта в игру
  try {
    const frameContainer = document.getElementById('gameFrameContainer');
    const iframe = frameContainer ? frameContainer.querySelector('iframe') : null;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ 
        type: 'kspt_do_restart',
        fromParent: true 
      }, '*');
    }
  } catch(e) {
    console.warn('Restart message failed', e);
  }
}

// Загружаем
function saveTickets() {
  localStorage.setItem('kspt_tickets', JSON.stringify(gameTickets));
}

// ===== NEW TICKET SYSTEM =====
const REFILL_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 часа

function loadTickets() {
  const saved = localStorage.getItem('kspt_tickets');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      gameTickets = {
        max: Number(data.max) || 10,
        current: Number(data.current) || 0,
        lastRefill: Number(data.lastRefill) || Date.now(),
        nextRefill: Number(data.nextRefill) || 0
      };
    } catch(e) {
      console.warn('ticket parse error');
    }
  }

  applyRefillOnLoad();
}

// new behavior: when refill moment arrives, if tickets < max => set to max (not +1)
function applyRefillOnLoad() {
  if (!gameTickets.nextRefill) return;

  const now = Date.now();
  if (now >= gameTickets.nextRefill) {
    // если у игрока меньше максимума — ставим ровно max
    if (gameTickets.current < gameTickets.max) {
      gameTickets.current = gameTickets.max;
    }
    // очистим nextRefill — дальше пополнение начнётся заново при списании билетов
    gameTickets.nextRefill = 0;
    saveTickets();
  }
}

function updateTicketsUI() {
  const now = Date.now();

  if (gameTickets.current < gameTickets.max) {
    // если не запланирован refill — запланировать через 24ч (обычная логика)
    if (!gameTickets.nextRefill) {
      gameTickets.nextRefill = now + REFILL_INTERVAL_MS;
      saveTickets();
    }

    // если время настало — НЕ прибавляем +1, а делаем current = max
    if (now >= gameTickets.nextRefill) {
      if (gameTickets.current < gameTickets.max) {
        gameTickets.current = gameTickets.max;
      }
      gameTickets.nextRefill = 0;
      saveTickets();
    }
  }

  // --- DOM update (без изменений) ---
  const ticketCountElem = document.getElementById('ticketCount');
  const ticketsLeftElem = document.getElementById('ticketsLeft');
  if (ticketCountElem) ticketCountElem.textContent = gameTickets.current;
  if (ticketsLeftElem) ticketsLeftElem.textContent = gameTickets.current;

  const timer = document.getElementById('ticketTimer');
  const timerText = document.getElementById('ticketTimerText');

  if (gameTickets.current < gameTickets.max && gameTickets.nextRefill) {
    const left = gameTickets.nextRefill - now;
    const h = Math.floor(left / 3600000);
    const m = Math.floor((left % 3600000)/60000);
    const s = Math.floor((left % 60000)/1000);

    if (timerText) timerText.textContent = `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    if (timer) timer.style.display = 'block';
  } else {
    if (timer) timer.style.display = 'none';
  }
}

function consumeTicketForCurrentGame() {
  if (gameTickets.current <= 0) return;

  gameTickets.current--;
  gameTicketPending = false;

  if (!gameTickets.nextRefill) {
    gameTickets.nextRefill = Date.now() + REFILL_INTERVAL_MS;
  }

  saveTickets();
  updateTicketsUI();
}

// ==========================================
// ОБЩИЕ ИГРОВЫЕ ФУНКЦИИ
// ==========================================

// ------------------------
// Mobile game mode helpers
// Paste this ABOVE function startGame(...) in js/games.js
// ------------------------
function enableMobileGameMode(iframe) {
  try {
    // Lock scroll / prevent overscroll
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // add a class to body so CSS can adjust if needed
    document.body.classList.add('kspt-mobile-game');

    // compute a reasonable bottom-safe shrink in px (12% of height, clamped)
    const shrink = Math.min(120, Math.max(64, Math.round(window.innerHeight * 0.12)));
    const frameHolder = document.getElementById('gameFrameContainer') || iframe.parentElement;

    if (frameHolder) {
      frameHolder.style.paddingBottom = shrink + 'px';
      // force iframe to fit into visible area
      iframe.style.height = `calc(100vh - ${shrink}px)`;
      iframe.style.display = 'block';
      iframe.style.width = '100%';
      iframe.style.maxHeight = '100%';
    }
    // small delay to ensure layout settles on iOS
    setTimeout(() => window.scrollTo(0,0), 50);
  } catch (e) {
    console.warn('enableMobileGameMode failed', e);
  }
}

function disableMobileGameMode() {
  try {
    document.documentElement.style.overscrollBehavior = '';
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    document.body.classList.remove('kspt-mobile-game');

    const frameHolder = document.getElementById('gameFrameContainer');
    if (frameHolder) {
      frameHolder.style.paddingBottom = '';
      const iframe = frameHolder.querySelector('iframe');
      if (iframe) {
        iframe.style.height = '';
        iframe.style.width = '';
        iframe.style.maxHeight = '';
      }
    }
  } catch (e) {
    console.warn('disableMobileGameMode failed', e);
  }
}

function startGame(gameType) {
  if (gameTickets.current <= 0) {
    showToast("Not enough tickets!");
    return;
  }

  currentGame = gameType;

  // списываем билет сразу
  gameTicketPending = true;
  consumeTicketForCurrentGame();

  // UI переключение
  document.getElementById('games').classList.remove('active');

  const gameContainer = document.getElementById('gameContainer');
  gameContainer.style.display = 'block';
  gameContainer.classList.add('active');

  const balanceGame = document.getElementById('balanceGame');
  if (balanceGame && typeof d !== 'undefined') {
    const balEl = document.getElementById('balanceGames');
    if (balEl) balEl.textContent = `${d.tokens.toFixed(2)} KSPT  •  ${Number(d.ek||0)} EK`;
  }

  // iframe
const container = document.getElementById('gameFrameContainer');
container.innerHTML = `<iframe class="game-frame" src="games/${gameType}.html" allow="autoplay"></iframe>`;
const iframe = container.querySelector('iframe');

iframe.addEventListener('load', () => {
  try {
    const hourly = (typeof getHourlyRate === 'function') ? getHourlyRate() : 0;
    iframe.contentWindow.postMessage({ type: 'kspt_init', hourly }, '*');
  } catch(e) {
    console.warn('iframe init postMessage failed', e);
  }

  try { enableMobileGameMode(iframe); } catch(e){}

  if (window.__kspt_hourly_updater) clearInterval(window.__kspt_hourly_updater);

  window.__kspt_hourly_updater = setInterval(() => {
    try {
      const hourly = (typeof getHourlyRate === 'function') ? getHourlyRate() : 0;
      iframe.contentWindow.postMessage({ type: 'kspt_hourly_update', hourly }, '*');
    } catch(e){}
  }, 5000);
});

  gameActive = true;
  startGameLoop();
}

function exitGame() {

  try { disableMobileGameMode(); } catch(e){}

  try {
    // Останавливаем игровой флаг и главный цикл
    gameActive = false;
    if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
    }

    // Очищаем отправку hourly-обновлений (если была)
    if (window.__kspt_hourly_updater) {
      clearInterval(window.__kspt_hourly_updater);
      window.__kspt_hourly_updater = null;
    }

    // Очищаем любые другие внутренние апдейтеры (защитно)
    if (window.__kspt_game_updater) {
      clearInterval(window.__kspt_game_updater);
      window.__kspt_game_updater = null;
    }

    // Попробуем уведомить iframe, что родитель закрывает игру
    const frameContainer = document.getElementById('gameFrameContainer');
    const iframe = frameContainer ? frameContainer.querySelector('iframe') : null;
    try {
      if (iframe && iframe.contentWindow && iframe.contentWindow.postMessage) {
        iframe.contentWindow.postMessage({ type: 'kspt_parent_exit' }, '*');
      }
    } catch (e) {
      console.warn('notify iframe failed', e);
    }

    // Удаляем iframe из DOM (освобождает память)
    if (frameContainer) {
      frameContainer.innerHTML = '';
    }

    // --- SYNC localStorage.d WITH current d (so EK Shop has latest data) ---
try {
  if (typeof d !== 'undefined') {
    // Получаем текущий d из localStorage.d, если он есть, чтобы не потерять другие поля, которые мог изменить EK Shop
    const raw = localStorage.getItem('d');
    let existingD = raw ? JSON.parse(raw) : {};
    // Обновляем только нужные поля: tokens, ek, ekshop_owned, ekshop_selected
    existingD.tokens = d.tokens;
    existingD.ek = d.ek;
    existingD.ekshop_owned = d.ekshop_owned || existingD.ekshop_owned || {};
    existingD.ekshop_selected = d.ekshop_selected || existingD.ekshop_selected || {};
    // Сохраняем обратно в localStorage.d
    localStorage.setItem('d', JSON.stringify(existingD));
  }
} catch(e) { console.warn('exitGame sync to localStorage.d failed', e); }
// --- END SYNC ---

   // Скрываем игровой контейнер и снимаем active-класс
    const gameContainer = document.getElementById('gameContainer');
    if (gameContainer) {
      gameContainer.style.display = 'none';
      gameContainer.classList.remove('active');
    }

    // Сбрасываем локальные переменные состояния игры
    currentGame = null;
    gameTicketPending = false;
    gameActive = false;

    // Возвращаемся к списку игр (если есть функция openScreen)
    if (typeof openScreen === 'function') {
      openScreen('games');
    } else {
      // fallback: покажем элемент games если openScreen нет
      const gamesScreen = document.getElementById('games');
      if (gamesScreen) {
        gamesScreen.classList.add('active');
      }
    }

    // Небольшой UI-апдейт баланса, если есть данные
    try {
      const balEl = document.getElementById('balanceGames');
      if (typeof d !== 'undefined' && balEl) {
        balEl.textContent = `${d.tokens.toFixed(2)} KSPT  •  ${Number(d.ek||0)} EK`;
      }
    } catch (e) { /* ignore */ }

  } catch (err) {
    console.error('exitGame error', err);
  }
}

function startGameLoop() {
  // Основной игровой цикл для связи с играми
  gameInterval = setInterval(() => {
    if (!gameActive) {
      clearInterval(gameInterval);
      return;
    }
    
    // Обновляем UI
    document.getElementById('balanceGame').textContent = `${d.tokens.toFixed(2)} KSPT  •  ${Number(d.ek || 0)} EK`;
  }, 100);
}

// ==========================================
// СИСТЕМА НАГРАД
// ==========================================

function addGameReward(amount, x, y) {
  const reward = document.createElement('div');
  reward.className = 'floating-reward';
  reward.textContent = `+${amount.toFixed(2)}`;
  reward.style.left = x + 'px';
  reward.style.top = y + 'px';
  
  const container = document.getElementById('gameContainer');
  if (container) {
    container.appendChild(reward);
  }
  
  // Добавляем KSPT к балансу
  d.tokens += amount;
  
  // Показываем тост
  showToast(`+${amount.toFixed(2)} KSPT`);
  
  // Сохраняем и обновляем UI
  save();
  ui();
  
  // Удаляем элемент через 1 секунду
  setTimeout(() => {
    if (reward.parentNode) {
      reward.parentNode.removeChild(reward);
    }
  }, 1000);
}

// --- EK currency ---

// добавить в games.js (после addGameReward)
window.awardGameReward = function(amount, x, y){
  try { addGameReward(Number(amount)||0, x||0, y||0); } catch(e){ console.warn('awardGameReward wrapper failed', e); }
};

// простой getOfflinePercent (пример — используй свою логику getHourlyRate если есть)
window.getOfflinePercent = function(percent){
  try {
    if (typeof getHourlyRate === 'function') {
      // getHourlyRate() — ожидаем доход в час; percent — 1.3 (значение из игр) или 2.5 и т.д.
      const hourly = getHourlyRate();
      return Math.round((hourly * (percent/100)) * 100) / 100;
    }
  } catch(e){ console.warn('getOfflinePercent wrapper failed', e); }
  return 0;
};

// --- START: EK currency support ---
// убедиться, что d.ek инициализирован при загрузке (добавьте сразу после загрузки/инициализации d)
if (typeof d !== 'undefined') {
  d.ek = Number(d.ek) || 0;
}

// Общая функция для добавления "плавающей" награды и учета валюты
function addGameCurrencyReward(amount, type = 'kspt', x = 0, y = 0) {
  const container = document.getElementById('gameContainer');
  // визуальный блок
  const reward = document.createElement('div');
  reward.className = 'floating-reward';
  // для EK показываем целое число, для KSPT — с 2 знаками
  reward.textContent = type === 'ek' ? `+${Number(amount)}` : `+${Number(amount).toFixed(2)}`;
  reward.style.left = x + 'px';
  reward.style.top = y + 'px';
  if (container) container.appendChild(reward);

  // учёт баланса
  if (type === 'ek') {
    d.ek = (Number(d.ek) || 0) + Number(amount || 0);
    showToast(`+${Number(amount)} EK`);
  } else {
    d.tokens = (Number(d.tokens) || 0) + Number(amount || 0);
    showToast(`+${Number(amount).toFixed(2)} KSPT`);
  }

  // сохранить и обновить UI
  save();
  ui(); // ваша функция ui() обновит баланс на экране

  setTimeout(()=>{ if (reward.parentNode) reward.parentNode.removeChild(reward); }, 1000);
}

// --- Guarded awardGameEK: игнорирует быстрые дубли одинаковой награды ---
(function(){
  const DEBOUNCE_MS = 300; // если тот же amount придёт в течение 300ms — игнорируем
  let _last = { time: 0, amount: 0 };

  window.awardGameEK = function(amount, x = 0, y = 0) {
    try {
      amount = Number(amount) || 0;
      const now = Date.now();

      // если два одинаковых вызова происходят слишком быстро — считаем дублем
      if (amount > 0 && _last.amount === amount && (now - _last.time) < DEBOUNCE_MS) {
        console.warn('awardGameEK: duplicate ignored', amount, x, y);
        return;
      }

      _last.time = now;
      _last.amount = amount;

      if (typeof addGameCurrencyReward === 'function') {
        addGameCurrencyReward(amount, 'ek', x || 0, y || 0);
      } else if (typeof addGameEK === 'function') {
        addGameEK(amount, x || 0, y || 0);
      } else {
        // fallback: прямое изменение d.ek
        if (typeof d !== 'undefined') {
          d.ek = (Number(d.ek) || 0) + amount;
          if (typeof ui === 'function') try { ui(); } catch(e){}
          if (typeof save === 'function') try { save(); } catch(e){}
        }
      }
    } catch (e) {
      console.warn('awardGameEK failed', e);
    }
  };
})();

// --- END: EK currency support ---

// ===== EK SHOP SYNC START =====
(function syncEkShopOwnedIntoD(){
  try {
    if (typeof d !== 'undefined') {

      const raw = localStorage.getItem('ekshop_owned');

      if (raw) {
        d.ekshop_owned = Object.assign(
          {},
          JSON.parse(raw),
          d.ekshop_owned || {}
        );
      } else {
        d.ekshop_owned = d.ekshop_owned || {};
      }

    }
  } catch(e){}
})();
// ===== EK SHOP SYNC END =====

// Открыть EK Shop в том же контейнере (без списывания билета)
function openEKShop() {
  try {
    currentGame = 'ekshop';
    // Показываем экран gameContainer (тот же, что и для игр)
    const gamesScreen = document.getElementById('games');
    if (gamesScreen) gamesScreen.classList.remove('active');

    const gameContainer = document.getElementById('gameContainer');
    if (gameContainer) {
      gameContainer.style.display = 'block';
      gameContainer.classList.add('active');
    }

    // Обновим верхний баланс в gameContainer (если есть)
    const balEl = document.getElementById('balanceGame');
    if (typeof d !== 'undefined' && balEl) {
      balEl.textContent = `${d.tokens.toFixed(2)} KSPT  •  ${Number(d.ek||0)} EK`;
    }

    // Вставляем iframe с магазином (в той же папке / корне)
    const container = document.getElementById('gameFrameContainer');
    if (!container) return;
    container.innerHTML = `<iframe class="game-frame" src="ekshop.html" allow="autoplay"></iframe>`;
    const iframe = container.querySelector('iframe');

    // как и в startGame, шлём начальные данные, когда iframe загрузится
    iframe.addEventListener('load', () => {
  try {
    const hourly = (typeof getHourlyRate === 'function') ? getHourlyRate() : 0;

    // ВАЖНО — теперь передаем ещё и d
    iframe.contentWindow.postMessage({
      type: 'kspt_init',
      hourly,
      d // ← вот это главное
    }, '*');

  } catch (e) {
    console.warn('ekshop init postMessage failed', e);
  }
});

    // ставим флаг игрового режима и запускаем обновлялку баланса (startGameLoop уже делает обновления)
    gameActive = true;
    startGameLoop();
  } catch (err) {
    console.error('openEKShop failed', err);
  }
}

// ==========================================
// ЗВУКОВЫЕ ЭФФЕКТЫ (САМОГЕНЕРИРУЕМЫЕ)
// ==========================================

// Создаем звуки с помощью Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function createSound(frequency, duration, type = 'sine') {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  // Плавное нарастание и затухание
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
}

const gameSounds = {
  apple: () => createSound(800, 0.1, 'square'),
  bounce: () => createSound(400, 0.05, 'sine'),
  lose: () => {
    createSound(200, 0.5, 'sawtooth');
    createSound(150, 0.5, 'sawtooth');
  },
  win: () => {
    createSound(600, 0.1, 'sine');
    createSound(800, 0.1, 'sine');
    createSound(1000, 0.1, 'sine');
  },
  ai_goal: () => createSound(300, 0.3, 'sawtooth'),
  player_goal: () => {
    createSound(1000, 0.1, 'sine');
    createSound(1200, 0.1, 'sine');
    createSound(1400, 0.1, 'sine');
  }
};

function playSound(soundName) {
  if (d.musicMuted) return;
  
  const sound = gameSounds[soundName];
  if (sound) {
    // Если аудиоконтекст приостановлен (например, из-за политики автовоспроизведения), возобновляем
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    sound();
  }
}

// ==========================================
// ВИБРАЦИЯ В ИГРАХ
// ==========================================

function gameVibrate(pattern) {
  if (!d.settings || !d.settings.vibration || !d.settings.vibration.tapsEnabled) return;
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// ==========================================
// ИНИЦИАЛИЗАЦИЯ ИГР
// ==========================================

function initGames() {
  loadTickets();
  updateTicketsUI();
  
  // Обновляем таймер билетов каждую секунду
  setInterval(updateTicketsUI, 1000);
}

window.addEventListener('message', (ev) => {
  const msg = ev.data;
  if (!msg || typeof msg !== 'object') return;

  if (msg.type === 'kspt_new_round') {
    // === ИГНОРИРУЕМ если уже в Game Over ===
    if (gameOverActive) {
      console.log('Ignoring new_round - already in Game Over');
      return;
    }

    // === ОБЫЧНЫЙ новый раунд (Restart из игры) ===
    if (gameTickets.current <= 0) {
      try {
        const frameContainer = document.getElementById('gameFrameContainer');
        const iframe = frameContainer ? frameContainer.querySelector('iframe') : null;
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage({ 
            type: 'kspt_no_tickets',
            reason: 'new_round_no_tickets'
          }, '*');
        }
      } catch(e){}

      clearOverlayAndExit();
      showToast("Not enough tickets for new round");
      return;
    }

    // ТОЛЬКО если не в Game Over и есть билеты - списываем
    gameTicketPending = true;
    consumeTicketForCurrentGame();
    return;
  }

  // restart request из игры
  if (msg.type === 'kspt_request_restart') {
    confirmRestartFromParent();
    return;
  }

  // игра сообщает что сейчас Game Over экран
  if (msg.type === 'kspt_set_game_over') {
    setGameOver(!!msg.value);
    return;
  }

  // iframe через postMessage просит списать билет (fallback)
  if (msg.type === 'kspt_consume_ticket') {
    if (gameTickets.current <= 0) {
      return;
    }
    gameTicketPending = true;
    consumeTicketForCurrentGame();
    return;
  }

  // if (msg.type === 'ek_award') {
  //   awardGameEK(Number(msg.amount)||0, msg.x||0, msg.y||0);
  // }
});