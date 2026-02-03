// ==========================================
// LOCALIZATION SYSTEM
// ==========================================

// ===== IVENTS SYSTEM =====
const IVENTS_FILE = 'ivents.json';
let currentIvent = null;

// Фолбэк события для локального использования
const FALLBACK_IVENTS = [
  {
    "id": "valentine2025",
    "name": "День святого Валентина",
    "description": "Забирайте награды каждый день в течение 7 дней и получите эксклюзивный скин!",
    "startDate": "2025-02-14T00:00:00+02:00",
    "endDate": "2025-02-20T23:59:59+02:00",
    "type": "calendar",
    "days": 7,
    "rewards": [
      { "day": 1, "type": "capsule", "name": "Бесплатная капсула" },
      { "day": 2, "type": "noobBox", "name": "Нуб Бокс" },
      { "day": 3, "type": "noobBox", "name": "Нуб Бокс" },
      { "day": 4, "type": "capsule", "name": "Капсула" },
      { "day": 5, "type": "noobBox", "name": "2 Нуб Бокса", "count": 2 },
      { "day": 6, "type": "capsule", "name": "Капсула + Нуб Бокс" },
      { "day": 7, "type": "goldCapsule", "name": "Золотая капсула" }
    ],
    "finalReward": {
      "type": "skin",
      "id": "crypto_heart",
      "name": "Crypto-heart",
      "description": "Эксклюзивный скин ко Дню святого Валентина"
    }
  }
];

// Загрузить события из файла
async function loadIvents() {
  const container = document.getElementById('iventContainer');
  if (!container) return;

  try {
    // Пытаемся загрузить из файла (работает на сервере)
    const response = await fetch(IVENTS_FILE);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const events = await response.json();
    currentIvent = events[0] || FALLBACK_IVENTS[0];
  } catch (error) {
    console.warn('Ошибка загрузки событий, используем fallback:', error);
    // Используем fallback для локального тестирования
    currentIvent = null;
  }

  if (!currentIvent) {
    container.innerHTML = '<div class="ivent-info">' + t('ivent_no_events') + '</div>';
    return;
  }

  renderIvent(currentIvent);
}

const translations = {
  en: {
    // Main UI
    'main_menu': 'Main Menu',
    'market': 'Market',
    'back': 'Back',
    'buy': 'Buy',
    'sell': 'Sell',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'select': 'Select',
    'max': 'MAX',
    'apply': 'Apply',
    'upgrade': 'Upgrade',
    'owned': 'Owned',
    'locked': 'Locked',
    'price': 'Price',
    'default': 'Default',
    'exclusive': 'Exclusive',
    'capsule_exclusive': 'Capsule Exclusive',
    'preview': 'Play 15s',
    
    // Settings
    'settings': 'Settings',
    'choose_category': 'Choose a category',
    'vibration_sound': 'Vibration & Sound',
    'animation': 'Animation',
    'backgrounds': 'Backgrounds',
    'language': 'Language',
    'vibration': 'Vibration',
    'haptic_feedback': 'Haptic Feedback',
    'off': 'Off',
    'low': 'Low',
    'medium': 'Med',
    'strong': 'Strong',
    'tap_vibration': 'Tap vibration',
    'tap_vibration_desc': 'Default: ON - Vibration for coin taps',
    'button_vibration': 'Other buttons vibration',
    'button_vibration_desc': 'Default: ON - Vibration for UI buttons',
    'music': 'Music',
    'game_soundtrack': 'Game Soundtrack',
    'disable_music': 'Disable Music',
    'animation_settings': 'Animation Settings',
    'control_animation': 'Control animation effects',
    'skins_animation': 'Skins animation',
    'skins_animation_desc': 'Default: ON - Controls skin tap/cycle animations',
    'ui_transitions': 'UI transition animation',
    'ui_transitions_desc': 'Default: ON - Controls smooth page transitions',
    'language_settings': 'Language Settings',
    'choose_language': 'Choose your preferred language',
    'english_desc': 'Default language',
    'russian_desc': 'Russian language',
    '3d_effect': '3D Coin Effect',
    '3d_effect_desc': 'Tilt the coin with mouse/finger',
    
    // Backgrounds
    'customize_menu': 'Customize your main menu',
    'default_dark': 'Default Dark',
    'classic_style': 'Classic KSPT style',
    'forest_vibe': 'Forest Vibe',
    'nature_look': 'Nature look',
    'space_view': 'Space View',
    'space_skin': 'Included in Space Edition Skin',
    'heaven': 'Heaven',
    'capsule_drop': 'Rare Capsule Drop',
    'rich_edition': 'KSPT: Rich Edition',
    'for_elite': 'For the elite',
    'dead_pixel': 'Dead Pixel',
    'pixel_bonus': 'Bonus with Pixel Coin Skin',
    'chrispy_candle': 'Chrispy Candle',
    'chrispy_desc': 'The crispiest cookies in the world.',
    'locked_buy': 'Locked (Buy Space Skin)',
    'selected': 'Selected',
    'locked_buy_cookie': 'Locked (Buy Crypto Cookie Skin)',
    'chrispy_bg_unlocked': 'Chrispy Candle background unlocked!',
    'bg_equipped': 'Background equipped: {0}',
    'bonus_bg_pixel': 'Dead Pixel background unlocked!',
    
    // Skins
    'default_coin': 'Default Coin',
    'standard_income': 'Standard (+0 KSPT/h)',
    'price_income': 'Price: {0} KSPT (+{1} KSPT/h)',
    'skin_animation': 'Skin + animation',
    'additional_skin': 'Skin + additional skin',
    'skin_bg_animation': 'Skin + animation + background',
    'toggle_animation': 'Toggle animation + visual style',
    'expensive_skin': 'Most expensive skin + animation',
    'locked_complete': 'LOCKED (Complete Puzzle)',
    'locked_find': 'LOCKED (Find in Capsule)',
    'locked_promo': 'LOCKED (Use Promo)',
    'special_win': 'Special: Win x10 Bet (+3 KSPT/h)',
    'special_skin_limit': 'Special: Limited to {0} players (+3 KSPT/h)',
    'active': 'Active',
    'owned_var': 'Owned (Variant {0})',
    'active_var': 'Active (Variant {0})',
    'locked_win': 'LOCKED (Win x10 Bet)',
    'sold_out': 'SOLD OUT',
    'gold_kspt': 'Gold KSPT',
    'cyber_android': 'KSPT: Cyber Android',
    'gold_skin_unlocked': 'Gold KSPT skin unlocked!',
    'cyber_skin_unlocked': 'KSPT: Cyber Android skin unlocked!',
    'brb_skin': 'Big Red Button',
    'brb_skin_desc': 'Price: 5,000,000 KSPT (+500 KSPT/h)',
    
    // Cards
    'company': 'Company',
    'sport': 'Sport',
    'board_games': 'Board & Games',
    'personal_manager': 'Personal Manager',
    'investors': 'Investors',
    'office': 'Office',
    'security': 'Security',
    'it_equipment': 'IT Equipment',
    'football': 'Football',
    'basketball': 'Basketball',
    'volleyball': 'Volleyball',
    'hockey': 'Hockey',
    'handball': 'Handball',
    'chess': 'Chess',
    'billiards': 'Billiards',
    'bowling': 'Bowling',
    'level': 'Level {0}',
    'level_max': 'MAX Level',
    'not_owned': 'Not Owned',
    'unlock_condition': 'Unlock: {0}',
    'current_upgrade': 'Current: +{0}/h → Upgrade: +{1}/h',
    
    // Tech
    'permanent_x2': 'Permanent x2 (Price 5 KSPT)',
    'temporary_overdrive': 'Temporary Overdrive',
    'overdrive_desc': 'x10-x20 Taps for 25+ Seconds',
    'upgrade_energy': 'Upgrade Energy',
    'max_energy': 'Max: 10,000 | +500 Energy',
    'energy_regeneration': 'Energy regeneration multiplier',
    'bet': 'Bet',
    'enter_promo': 'Enter promo code',
    'multiplier': 'x{0} ({1}%)',
    'cooldown_ready': 'Cooldown: Ready',
    'cooldown_minutes': 'Cooldown: {0}m',
    'cooldown_hours': 'Cooldown: {0}h {1}m',
    'active_seconds': 'Active: {0}s left',
    'maxed': 'MAXED',
    'max_energy': 'Maximum energy reached',
    'max_regen': 'Maximum reached',
    'current_max': 'Current Max: {0}',
    'current_regen': 'Current: {0}',
    'upgrade_to': 'Upgrade to {0} ({1} KSPT)',
    'buy_upgrade': 'Buy (+500) {0} KSPT',
     'back_to_main': 'Back to Main',
     'loading': 'Loading...',
    
    // Capsule
    'ancient_puzzle': 'Ancient Puzzle',
    'puzzle_desc': 'Collect all 9 pieces to unlock Hamster Piece Skin!',
    'owned_progress': 'Owned: {0}/9',
    'owned_simple': 'Owned',
    'place_pieces': 'Place Available Pieces',
    'puzzle_completed': 'A new puzzle will appear soon!',
    'mystery_capsule': 'Mystery Capsule',
    'ready': 'Ready to open!',
    'open': 'OPEN!',
    'first_open_free': 'First open is free!',
    'wait': 'Wait',
    'cat_puzzle': 'Cat Puzzle',
    'cat_puzzle_desc': 'Collect all 9 pieces to unlock the Cat: KSPT skin!',
    'puzzle_completed2': 'Puzzle complete! Cat: KSPT skin unlocked!',
    'gold_capsule_obtained': 'Secret Gold Capsule obtained!',
    'gold_capsule_name': 'Secret Gold Capsule',
    'gold_capsule_desc': 'Exclusive one-time capsule. Unlock rare items!',
    'lol_song': "LOL Song",
    'bg_hell': 'Hell',
    'bg_math': 'Crazy Math',
    'gold_skin_unlocked': 'Gold KSPT unlocked!',
    'cyber_skin_unlocked': 'KSPT: Cyber Android unlocked!',
    'cat_skin_unlocked': 'Cat: KSPT skin unlocked!',
    'cat_music_unlocked': 'Cat\'s Yarn music unlocked!',
    'ivent_title': 'Temporary Events',
    'ivent_desc': 'Get rewards every day!',
    'ivent_no_events': 'No events are active right now. Check back later.',
    'ivent_error': 'Error loading events',

    // Noob Box
     'noob_box': 'Noob Box',
     'noob_box_desc': 'A special box for beginners (+skin)',
     'noob_box_obtained': 'Noob Box obtained!',
     
    // Market
    'balance': 'Balance: ',
    'offline_rate': 'Offline: {0} KSPT/h',
    'portfolio_value': 'Portfolio Value',
    'available_tokens': 'Available Tokens',
    'personal_token': 'Personal Token',
    'create_token_desc': 'Create your own token with custom icon',
    'create_token': 'Create Token',
    'delete_token': 'Delete Token',
    'delete_warning': 'Warning: Deleting token will sell your holdings at current price',
    'enter_market': 'Enter Market',
    'market_desc': 'Trade tokens, track prices, and grow your portfolio',
    'edit': 'Edit',
    'enter_name': 'Enter your name:',
    'enter_desc': 'Enter description (5-80 chars):',
    'desc_length': 'Description must be 5-80 characters',
    'your_holdings': 'Your Holdings',
    'value': 'Value',
    'live_price': 'Live Price',
    'drag_to_pan': 'Drag chart to pan',
    'show_last_trades': 'Show last trades',
    'buy_at': 'Buy at',
    'sell_at': 'Sell at',
    'sell_token': 'Sell ({0})',
    'amount': 'Amount',
    'buy_limit': 'Buy limit: {0} KSPT',
    'sell_cooldown': 'Sell cooldown: 40s',
    'buy_cooldown': 'Buy cooldown: {0}s',
    'buy_cooldown_ready': 'Buy cooldown: Ready',
    'wait_buy': 'Wait {0}s before next buy',
    'wait_sell': 'Wait {0}s before selling',
    'amount_range': 'Amount must be {0}-{1} KSPT',
    'not_enough_kspt': 'Not enough KSPT',
    'not_enough_tokens': 'Not enough tokens',
    'enter_valid': 'Enter valid amount',
    'bought_tokens': 'Bought {0} {1}',
    'sold_tokens': 'Sold {0} tokens for {1} KSPT',
    'delete_wait': 'Wait {0} more hours before deleting',
    'delete_warning_msg': 'Are you sure you want to delete your personal token?',
    'delete_sell_warning': 'You own {0} tokens worth {1} KSPT. They will be sold.',
    'delete_final_warning': ' This action cannot be undone.',
    'token_created': 'Personal token created!',
    'token_deleted': 'Personal token deleted',
    'token_details': 'Token Details',
    'ticker_label': 'Ticker (3-5 characters):',
    'name_label': 'Token Name:',
    'desc_label': 'Description:',
    'supply_label': 'Total Supply:',
    'token_icon': 'Token Icon:',
    'upload_image': 'Upload Image',
    'default_icon': 'Default icon will be used if none selected',
    'creation_cost': 'Creation Cost',
    'confirm_token': 'Create token {0} ({1}) with supply {2}? Initial price: {3} KSPT. Cost: {4} KSPT.',
    'need_kspt': 'Need {0} KSPT to create token',
    'ticker_error': 'Ticker must be 3-5 characters',
    'name_error': 'Name must be 1-20 characters',
    'desc_error': 'Description must be 10-250 characters',
    'supply_error': 'Supply must be 100-99999',
    'image_cropped': 'Image cropped successfully',
    'invalid_image': 'Please select a valid image',
    'my_token': 'My Token',
    'token_desc': 'Describe your token...',
    
    // Promo codes
    'promo_skipfuse': 'Capsule cooldown skipped!',
    'promo_already_used': 'Promo already used',

    // Promo codes
    'promo_fuse': 'Capsule cooldown skipped!',

    // Cards Limited
'limited_tab': 'Limited',
'card_yes_title': 'Yes',
'card_no_title': 'No',
'card_stick_title': 'Stick',
'card_backpack_title': 'Backpack',
'card_journey_title': 'Journey',
'card_challenge_title': 'Challenge',
'card_bought': 'Bought',
'card_purchase_expired': 'Purchase Time Expired',
'card_limited_time': 'Limited Time! {0}',
'card_income_per_hour': '+{0} KSPT/h',
'card_buy': 'Buy {0} KSPT',

// EK Shop
'ek_shop_title': 'EK Shop',
'close': 'Close',
'not_enough_ek': 'Not enough EK',
'already_owned': 'Already owned',
'price_ek': '{0} EK',

// Mini-games / Tickets (english)
'games_arcade': 'Games Arcade',
'play_mini_games_desc': 'Play mini-games to earn KSPT!',
'tickets_label': '🎫 Tickets:',
'tickets_left_today': 'You have {0} tickets left today',
'next_ticket_in': 'Next ticket in: {0}',
'available_games': 'Available games',
'ticket_session_note': '1 ticket = 1 play session',
'resume': 'Resume',

// Events / Valentine
'valentine_event_name': "Valentine's Day",
'valentine_event_desc': 'Collect daily rewards for 7 days and earn an exclusive skin!',
'free_capsule': 'Free capsule',
'noob_box': 'Noob Box',
'gold_capsule': 'Gold Capsule',
'crypto_heart': 'Crypto-heart',
'games': 'Games',
    
    // General
    'purchase_success': 'Purchase successful',
    'offline_earnings': 'Offline earnings: {0} KSPT',
    'offline_bonus': '+25% offline bonus applied',
    'account_reset': 'Account reset due to cheating',
    'ban_removed': 'Ban removed',
    'invalid_key': 'Invalid key',
    'music_unlocked': 'Music unlocked!',
    'bonus_bg': 'Bonus background unlocked!',
    'puzzle_complete': 'Puzzle complete! Hamster Piece skin unlocked!'
  },
  ru: {
    // Main UI
    'main_menu': 'Главное меню',
    'market': 'Биржа',
    'back': 'Назад',
    'buy': 'Купить',
    'sell': 'Продать',
    'confirm': 'Подтвердить',
    'cancel': 'Отмена',
    'select': 'Выбрать',
    'max': 'МАКС',
    'apply': 'Применить',
    'upgrade': 'Улучшить',
    'owned': 'Куплено',
    'locked': 'Заблокировано',
    'price': 'Цена',
    'default': 'По умолчанию',
    'exclusive': 'Эксклюзив',
    'capsule_exclusive': 'Эксклюзив капсулы',
    'preview': 'Превью 15с',
    
    // Settings
    'settings': 'Настройки',
    'choose_category': 'Выберите категорию',
    'vibration_sound': 'Вибрация и звук',
    'animation': 'Анимация',
    'backgrounds': 'Фоны',
    'language': 'Язык',
    'vibration': 'Вибрация',
    'haptic_feedback': 'Тактильная отдача',
    'off': 'Выкл',
    'low': 'Низкая',
    'medium': 'Средняя',
    'strong': 'Сильная',
    'tap_vibration': 'Вибрация при тапах',
    'tap_vibration_desc': 'По умолчанию: ВКЛ - Вибрация при тапах по монете',
    'button_vibration': 'Вибрация кнопок',
    'button_vibration_desc': 'По умолчанию: ВКЛ - Вибрация UI кнопок',
    'music': 'Музыка',
    'game_soundtrack': 'Саундтрек игры',
    'disable_music': 'Выключить музыку',
    'animation_settings': 'Настройки анимации',
    'control_animation': 'Управление анимацией',
    'skins_animation': 'Анимация скинов',
    'skins_animation_desc': 'По умолчанию: ВКЛ - Анимация тапов/циклов скинов',
    'ui_transitions': 'Анимация переходов UI',
    'ui_transitions_desc': 'По умолчанию: ВКЛ - Плавные переходы страниц',
    'language_settings': 'Настройки языка',
    'choose_language': 'Выберите предпочитаемый язык',
    'english_desc': 'Английский язык',
    'russian_desc': 'Русский язык',
    '3d_effect': '3D эффект монеты',
    '3d_effect_desc': 'Наклоняйте монету мышкой/пальцем',
    
    // Backgrounds
    'customize_menu': 'Настройте главное меню',
    'default_dark': 'Тёмный по умолчанию',
    'classic_style': 'Классический стиль KSPT',
    'forest_vibe': 'Лесная атмосфера',
    'nature_look': 'Природный вид',
    'space_view': 'Космический вид',
    'space_skin': 'Входит в Space Edition скин',
    'heaven': 'Небеса',
    'capsule_drop': 'Редкая дроп из капсулы',
    'rich_edition': 'KSPT: Rich Edition',
    'for_elite': 'Для элиты',
    'dead_pixel': 'Мёртвый пиксель',
    'pixel_bonus': 'Бонус к Pixel Coin скину',
    'chrispy_candle': 'Хрустящая свеча',
    'chrispy_desc': 'Самые хрустящие печеньки в мире.',
    'locked_buy': 'Заблокировано (купи Space скин)',
    'selected': 'Выбрано',
    'locked_buy_cookie': 'Заблокировано (купи Crypto Cookie скин)',
    'chrispy_bg_unlocked': 'Фон Chrispy Candle разблокирован!',
    'bg_equipped': 'Фон установлен: {0}',
    'bonus_bg_pixel': 'Фон Dead Pixel разблокирован!',
    
    // Skins
    'default_coin': 'Стандартная монета',
    'standard_income': 'Стандарт (+0 KSPT/ч)',
    'price_income': 'Цена: {0} KSPT (+{1} KSPT/ч)',
    'skin_animation': 'Скин + анимация',
    'additional_skin': 'Скин + дополнительный скин',
    'skin_bg_animation': 'Скин + анимация + фон',
    'toggle_animation': 'Переключение анимации + стиль',
    'expensive_skin': 'Самый дорогой скин + анимация',
    'locked_complete': 'ЗАБЛОКИРОВАНО (Завершите пазл)',
    'locked_find': 'ЗАБЛОКИРОВАНО (Найдите в капсуле)',
    'locked_promo': 'ЗАБЛОКИРОВАНО (Используйте промо)',
    'special_win': 'Особый: Выиграйте x10 ставку (+3 KSPT/ч)',
    'special_skin_limit': 'Особый: Ограничено {0} игроками (+3 KSPT/ч)',
    'active': 'Активен',
    'owned_var': 'Куплен (Вариант {0})',
    'active_var': 'Активен (Вариант {0})',
    'locked_win': 'ЗАБЛОКИРОВАНО (Выиграйте x10 ставку)',
    'sold_out': 'РАСПРОДАНО',
    'gold_kspt': 'Золотой KSPT',
    'cyber_android': 'KSPT: Кибер Андроид',
    'gold_skin_unlocked': 'Скин Золотой KSPT разблокирован!',
    'cyber_skin_unlocked': 'Скин KSPT: Кибер Андроид разблокирован!',
    'brb_skin': 'Большая Красная Кнопка',
    'brb_skin_desc': 'Цена: 5,000,000 KSPT (+500 KSPT/ч)',
    
    // Cards
    'company': 'Компания',
    'sport': 'Спорт',
    'board_games': 'Настолки и игры',
    'personal_manager': 'Персональный менеджер',
    'investors': 'Инвесторы',
    'office': 'Офис',
    'security': 'Безопасность',
    'it_equipment': 'IT оборудование',
    'football': 'Футбол',
    'basketball': 'Баскетбол',
    'volleyball': 'Волейбол',
    'hockey': 'Хоккей',
    'handball': 'Гандбол',
    'chess': 'Шахматы',
    'billiards': 'Бильярд',
    'bowling': 'Боулинг',
    'level': 'Уровень {0}',
    'level_max': 'МАКС Уровень',
    'not_owned': 'Не куплено',
    'unlock_condition': 'Разблокировка: {0}',
    'current_upgrade': 'Текущий: +{0}/ч → Улучшить: +{1}/ч',
    
    // Tech
    'permanent_x2': 'Постоянное x2 (Цена 5 КСПТ)',
    'temporary_overdrive': 'Временный овердрайв',
    'overdrive_desc': 'x10-x20 тапов на 25+ секунд',
    'upgrade_energy': 'Улучшить энергию',
    'max_energy': 'Макс: 10,000 | +500 энергии',
    'energy_regeneration': 'Множитель регенерации энергии',
    'bet': 'Ставка',
    'enter_promo': 'Введите промокод',
    'multiplier': 'x{0} ({1}%)',
    'cooldown_ready': 'Перезарядка: Готово',
    'cooldown_minutes': 'Перезарядка: {0}м',
    'cooldown_hours': 'Перезарядка: {0}ч {1}м',
    'active_seconds': 'Активно: {0}с осталось',
    'maxed': 'МАКСИМУМ',
    'max_energy': 'Максимальная энергия достигнута',
    'max_regen': 'Максимум достигнут',
    'current_max': 'Текущий максимум: {0}',
    'current_regen': 'Текущий: {0}',
    'upgrade_to': 'Улучшить до {0} ({1} KSPT)',
    'buy_upgrade': 'Купить (+500) {0} KSPT',
    'back_to_main': 'Вернуться в меню',
    'loading': 'Загрузка...',
    
    // Capsule
    'ancient_puzzle': 'Древний пазл',
    'puzzle_desc': 'Соберите все 9 частей чтобы разблокировать скин «Hamster Piece»!',
    'owned': 'Получено: {0}/9',
    'place_pieces': 'Разместить доступные части',
    'puzzle_completed': 'Скоро появится новый пазл!',
    'mystery_capsule': 'Таинственная капсула',
    'ready': 'Готово к открытию!',
    'open': 'ОТКРЫТЬ!',
    'first_open_free': 'Первое открытие бесплатно! :3',
    'wait': 'Ожидайте...',
    'cat_puzzle': 'Кошачий пазл',
    'cat_puzzle_desc': 'Соберите все 9 частей, чтобы разблокировать скин «Cat: KSPT»!',
    'puzzle_completed2': 'Пазл завершен! Скин «Cat: KSPT» разблокирован!',
    'gold_capsule_obtained': 'Золотая капсула получена!',
    'gold_capsule_name': 'Золотая капсула (Secret Gold)',
    'gold_capsule_desc': 'Эксклюзивная одноразовая капсула. Открой редкие предметы!',
    'lol_song': 'РОФЛ Песня',
    'bg_hell': 'Ад',
    'bg_math': 'Сумасшедшая математика',
    'gold_skin_unlocked': 'Скин Gold KSPT разблокирован!',
    'cyber_skin_unlocked': 'Скин KSPT: Кибер Андроид разблокирован!',
    'cat_skin_unlocked': 'Скин Cat: KSPT разблокирован!',
    'cat_music_unlocked': 'Музыка Cat\'s Yarn разблокирована!',
     'ivent_title': 'Временные события',
    'ivent_desc': 'Получайте награды каждый день!',
    'ivent_no_events': 'В данный момент нет активных событий',
    'ivent_error': 'Ошибка загрузки событий',

    // Noob Box
    'noob_box': 'Нуб Кейс',
    'noob_box_desc': 'Особый ящик для новичков (+скин)',
    'noob_box_obtained': 'Нуб Кейс получен!',
    
    // Market
    'balance': 'Баланс: ',
    'offline_rate': 'Оффлайн: {0} KSPT/ч',
    'portfolio_value': 'Стоимость портфеля',
    'available_tokens': 'Доступные токены',
    'personal_token': 'Персональный токен',
    'create_token_desc': 'Создайте свой токен с кастомной иконкой',
    'create_token': 'Создать токен',
    'delete_token': 'Удалить токен',
    'delete_warning': 'Внимание: Удаление токена продаст ваши holdings по текущей цене',
    'enter_market': 'Войти на рынок',
    'market_desc': 'Торгуйте токенами, отслеживайте цены и увеличивайте портфель',
    'edit': 'Изменить',
    'enter_name': 'Введите ваше имя:',
    'enter_desc': 'Введите описание (5-80 символов):',
    'desc_length': 'Описание должно быть 5-80 символов',
    'your_holdings': 'Ваши холдинги',
    'value': 'Стоимость',
    'live_price': 'Текущая цена',
    'drag_to_pan': 'Перетаскивайте график для навигации',
    'show_last_trades': 'Показать последние сделки',
    'buy_at': 'Купил по',
    'sell_at': 'Продал по',
    'sell_token': 'Продать ({0})',
    'amount': 'Количество',
    'buy_limit': 'Лимит покупки: {0} KSPT',
    'sell_cooldown': 'Перезарядка продажи: 40с',
    'buy_cooldown': 'Перезарядка покупки: {0}с',
    'buy_cooldown_ready': 'Перезарядка покупки: Готово',
    'wait_buy': 'Подождите {0}с до следующей покупки',
    'wait_sell': 'Подождите {0}с до продажи',
    'amount_range': 'Количество должно быть {0}-{1} KSPT',
    'not_enough_kspt': 'Недостаточно KSPT',
    'not_enough_tokens': 'Недостаточно токенов',
    'enter_valid': 'Введите корректное количество',
    'bought_tokens': 'Куплено {0} {1}',
    'sold_tokens': 'Продано {0} токенов за {1} KSPT',
    'delete_wait': 'Подождите еще {0} часов перед удалением',
    'delete_warning_msg': 'Вы уверены, что хотите удалить свой персональный токен?',
    'delete_sell_warning': 'У вас есть {0} токенов на сумму {1} KSPT. Они будут проданы.',
    'delete_final_warning': ' Это действие нельзя отменить.',
    'token_created': 'Персональный токен создан!',
    'token_deleted': 'Персональный токен удален',
    'token_details': 'Детали токена',
    'ticker_label': 'Тикер (3-5 символов):',
    'name_label': 'Название токена:',
    'desc_label': 'Описание:',
    'supply_label': 'Общее предложение:',
    'token_icon': 'Иконка токена:',
    'upload_image': 'Загрузить изображение',
    'default_icon': 'Будет использована стандартная иконка если не выбрана',
    'creation_cost': 'Стоимость создания',
    'confirm_token': 'Создать токен {0} ({1}) с предложением {2}? Начальная цена: {3} KSPT. Стоимость: {4} KSPT.',
    'need_kspt': 'Нужно {0} KSPT для создания токена',
    'ticker_error': 'Тикер должен быть 3-5 символов',
    'name_error': 'Название должно быть 1-20 символов',
    'desc_error': 'Описание должно быть 10-250 символов',
    'supply_error': 'Предложение должно быть 100-99999',
    'image_cropped': 'Изображение обрезано успешно',
    'invalid_image': 'Пожалуйста, выберите валидное изображение',
    'my_token': 'Мой Токен',
    'token_desc': 'Опишите ваш токен...',

    // Mini-Games
'games_arcade': 'Игровая аркада',
'play_mini_games_desc': 'Играйте в мини-игры и зарабатывайте KSPT!',
'tickets_label': '🎫 Билеты:',
'tickets_left_today': 'У вас осталось {0} билетов сегодня',
'next_ticket_in': 'Следующий билет через: {0}',
'available_games': 'Доступные игры',
'ticket_session_note': '1 билет = 1 игровой сеанс',

// Имена игр / описания
'snake_game_title': 'Змейка',
'snake_game_desc': 'Ешь яблоки, становись длиннее, зарабатывай KSPT!',

'pingpong_title': 'Пинг-понг',
'pingpong_desc': 'Защищайте ворота, набирайте очки, зарабатывайте KSPT!',

'blocksfast_title': 'BlocksFast',
'blocksfast_desc': 'Быстрая игра с блоками — как BlockBlast. Уничтожайте линии, собирайте комбо, зарабатывайте KSPT!',

'slither_title': 'Slither — режим KSPT',
'slither_desc': 'Классический slither.io-стиль — растите, поедая шарики, избегайте других, зарабатывайте KSPT!',
'games': 'Игры',

'back': 'Назад',

// Общие кнопки / подсказки
'pause': 'Пауза',
'restart': 'Перезапустить',
'exit': 'Выйти',
'game_over': 'Игра окончена!',
'play_again': 'Играть снова',
'exit_to_menu': 'Выйти в меню',

// Сообщения
'not_enough_tickets': 'Недостаточно билетов!',
'preview_15s': 'Превью 15с',

// Cards Limited 
'limited_tab': 'Лимитированные',
'card_yes_title': 'Да',
'card_no_title': 'Нет',
'card_stick_title': 'Стик',
'card_backpack_title': 'Рюкзак',
'card_journey_title': 'Путешествие',
'card_challenge_title': 'Испытание',
'card_bought': 'Куплено',
'card_purchase_expired': 'Время покупки истекло',
'card_limited_time': 'Ограничено! {0}',
'card_income_per_hour': '+{0} KSPT/ч',
'card_buy': 'Купить за {0} KSPT',

// EK Shop
'ek_shop_title': 'Магазин EK',
'close': 'Закрыть',
'not_enough_ek': 'Недостаточно EK',
'already_owned': 'Уже куплено',
'price_ek': '{0} EK',

// Mini-games / Tickets (russian)
'games_arcade': 'Игровая аркада',
'play_mini_games_desc': 'Играйте в мини-игры и зарабатывайте KSPT!',
'tickets_label': '🎫 Билеты:',
'tickets_left_today': 'У вас осталось {0} билетов сегодня',
'next_ticket_in': 'Следующий билет через: {0}',
'available_games': 'Доступные игры',
'ticket_session_note': '1 билет = 1 игровой сеанс',
'resume': 'Продолжить',

// Events / Valentine
'valentine_event_name': 'День святого Валентина',
'valentine_event_desc': 'Забирайте награды каждый день в течение 7 дней и получите эксклюзивный скин!',
'free_capsule': 'Бесплатная капсула',
'noob_box': 'Нуб Бокс',
'gold_capsule': 'Золотая капсула',
'crypto_heart': 'Crypto-heart',

// Статусы/метки в играх
'player_label': 'Игрок',
'ai_label': 'Компьютер',
'speed_label': 'Скорость',
'score_label': 'Счёт',
'length_label': 'Длина',
'lines_label': 'Линии',
'level_label': 'Уровень',
'combo_label': 'Комбо',
    
    // Promo codes
    'promo_skipfuse': 'Перезарядка капсулы пропущена!',
    'promo_already_used': 'Промо уже использовано',
    
    // General
    'purchase_success': 'Покупка успешна',
    'offline_earnings': 'Оффлайн доход: {0} KSPT',
    'offline_bonus': '+25% оффлайн бонус применен',
    'account_reset': 'Аккаунт сброшен из-за читерства',
    'ban_removed': 'Бан снят',
    'invalid_key': 'Неверный ключ',
    'music_unlocked': 'Музыка разблокирована!',
    'bonus_bg': 'Бонусный фон разблокирован!',
    'puzzle_complete': 'Пазл завершен! Скин Hamster Piece разблокирован!'
  }
};

let currentLang = localStorage.getItem('kspt_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kspt_lang', lang);
  updateAllTexts();
  showToast(lang === 'en' ? 'Language changed to English' : 'Язык изменен на Русский');
}

// Template formatter function
function formatTemplate(str, values) {
  return str.replace(/\{(\d+)\}/g, (m, i) =>
    typeof values[i] !== 'undefined' ? values[i] : m
  );
}

function t(key, ...args) {
  let text = translations[currentLang][key] || translations['en'][key] || key;
  if (args.length > 0) {
    args.forEach((arg, i) => {
      text = text.replace(`{${i}}`, arg);
    });
  }
  return text;
}

// Helper function for number formatting
function formatNumber(value, decimals = 2) {
  if (currentLang === 'ru') {
    return value.toFixed(decimals).replace('.', ',');
  }
  return value.toFixed(decimals);
}

function updateAllTexts() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (key) {
            const text = t(key);
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Обновляем состояние 3D чекбокса
    const toggle3DEffectCheckbox = document.getElementById('toggle3DEffect');
    if (toggle3DEffectCheckbox && d.settings && d.settings.animation) {
        toggle3DEffectCheckbox.checked = d.settings.animation.coin3d !== false;
    }
  
  // Update skin texts with correct prices and incomes
  updateSkinTexts();
  
  // Update market texts
  updateMarketTexts();
  
  // Update card texts
  updateCardTexts();
  updateCardUI();
  
  // Update bet button texts
  updateBetButtonsText();
}

// NEW FUNCTION: Update bet buttons text
function updateBetButtonsText() {
  const betButtons = [
    {id: 'betButton1', mult: 1.5, chance: 30},
    {id: 'betButton2', mult: 3, chance: 17},
    {id: 'betButton3', mult: 5, chance: 8},
    {id: 'betButton4', mult: 10, chance: 3},
    {id: 'betButton5', mult: 50, chance: 1.1}
  ];

  betButtons.forEach(btn => {
    const element = document.getElementById(btn.id);
    if (element) {
      element.textContent = `x${btn.mult} (${btn.chance}%)`;
    }
  });
}

// NEW FUNCTION: Update skin shop texts with correct prices and incomes
function updateSkinTexts() {
  const skinPrice = {
    'what': 1,
    'burger': 10,
    'joost': 30,
    'dog': 80,
    'diam': 100,
    'tung': 240,
    'euro': 780,
    'space': 1210,
    'pixe': 3215,
    'onion': 10110,
    'cookie': 40780,
    'ruka': 172080,
    'banditx': 542123,
    'goldcoin': 1120000,
    'brb': 5000000 
  };
  
  for (let skinId in skinPrice) {
    const element = document.getElementById('skin-sub-' + skinId);
    if (element) {
      let price = skinPrice[skinId];
      // Check for discounts
      if (d.bonuses.discounts && d.bonuses.discounts[skinId] && Date.now() < d.bonuses.discounts[skinId]) {
        price = Math.floor(price * 0.85);
      }
      const income = SKIN_INCOME[skinId] || 0;
      element.textContent = formatTemplate(t('price_income'), [price, income.toFixed(1)]);
    }
  }
  
  // Update limited skin text
  const limitedSkinSub = document.getElementById('limitedSkinSub');
  if (limitedSkinSub) {
    limitedSkinSub.textContent = formatTemplate(t('special_skin_limit'), [globalSkinLimit]);
  }
  
  // Update default skin text
  const defaultSkinSub = document.getElementById('skin-sub-default');
  if (defaultSkinSub) {
    defaultSkinSub.textContent = t('standard_income');
  }
  
  // Update variant buttons visibility
  const euroVariantBtn = document.getElementById('variant-euro');
  const artemVariantBtn = document.getElementById('variant-artem');
  
  if (euroVariantBtn) {
    euroVariantBtn.style.display = d.skins && d.skins['euro'] ? 'block' : 'none';
  }
  
  if (artemVariantBtn) {
    artemVariantBtn.style.display = d.skins && d.skins['artem'] ? 'block' : 'none';
  }
}

// NEW FUNCTION: Update market texts with placeholders
function updateMarketTexts() {
  // Update offline rate
  const offlineElem = document.getElementById("offlineRateMain");
  if (offlineElem) {
    let rate = getHourlyRate();
    offlineElem.textContent = formatTemplate(t('offline_rate'), [rate.toFixed(1)]);
  }
  
  // Update balance texts with placeholders
  const elements = {
    "balanceMain": d.tokens.toFixed(2) + " KSPT",
    "balanceSkins": t('balance') + d.tokens.toFixed(2) + " KSPT",
    "balanceTech": t('balance') + d.tokens.toFixed(2) + " KSPT",
    "balanceOffline": t('balance') + d.tokens.toFixed(2) + " KSPT",
    "balanceSettings": t('balance') + d.tokens.toFixed(2) + " KSPT",
    "balanceCapsule": t('balance') + d.tokens.toFixed(2) + " KSPT"
  };
  
  for (const [id, text] of Object.entries(elements)) {
    const elem = document.getElementById(id);
    if (elem) elem.textContent = text;
  }
}

// NEW FUNCTION: Update card texts with placeholders
function updateCardTexts() {
  // Company cards
  for (let i = 1; i <= 5; i++) {
    const key = "c" + i;
    const rawLvl = d.cards ? d.cards[key] : undefined;
    let lvl = Number(rawLvl);
    if (isNaN(lvl)) lvl = -1;
    const data = CARDS[i].levels;
    
    const txtLvl = document.getElementById("c" + i + "_lvl");
    const txtInc = document.getElementById("c" + i + "_income");
    
    if (!txtLvl || !txtInc) continue;
    
    if (lvl === 5) {
      txtLvl.textContent = t('level_max');
      txtInc.textContent = "+" + data[5].income.toFixed(1) + " KSPT/h";
    } else if (lvl === -1) {
      txtLvl.textContent = t('not_owned');
      txtInc.textContent = "+" + data[0].income.toFixed(1) + " KSPT/h";
    } else {
      txtLvl.textContent = formatTemplate(t('level'), [lvl + 1]);
      txtInc.textContent = formatTemplate(t('current_upgrade'), [data[lvl].income.toFixed(1), data[lvl + 1].income.toFixed(1)]);
    }
  }
  
  // Sport cards
  for (let i = 1; i <= 5; i++) {
    const key = "s" + i;
    const lvl = d.cards[key];
    const data = CARDS[key].levels;
    
    const txtLvl = document.getElementById("s" + i + "_lvl");
    const txtInc = document.getElementById("s" + i + "_income");
    
    if (!txtLvl || !txtInc) continue;
    
    if (lvl === 5) {
      txtLvl.textContent = t('level_max');
      txtInc.textContent = "+" + data[5].income.toFixed(1) + " KSPT/h";
    } else if (lvl === -1) {
      txtLvl.textContent = t('not_owned');
      txtInc.textContent = "+" + data[0].income.toFixed(1) + " KSPT/h";
    } else {
      txtLvl.textContent = formatTemplate(t('level'), [lvl + 1]);
      txtInc.textContent = formatTemplate(t('current_upgrade'), [data[lvl].income.toFixed(1), data[lvl + 1].income.toFixed(1)]);
    }
  }
  
  // Game cards
  for (let i = 1; i <= 3; i++) {
    const key = "g" + i;
    const lvl = d.cards[key];
    const data = CARDS[key].levels;
    
    const txtLvl = document.getElementById("g" + i + "_lvl");
    const txtInc = document.getElementById("g" + i + "_income");
    
    if (!txtLvl || !txtInc) continue;
    
    if (lvl === 5) {
      txtLvl.textContent = t('level_max');
      txtInc.textContent = "+" + data[5].income.toFixed(1) + " KSPT/h";
    } else if (lvl === -1) {
      txtLvl.textContent = t('not_owned');
      txtInc.textContent = "+" + data[0].income.toFixed(1) + " KSPT/h";
    } else {
      txtLvl.textContent = formatTemplate(t('level'), [lvl + 1]);
      txtInc.textContent = formatTemplate(t('current_upgrade'), [data[lvl].income.toFixed(1), data[lvl + 1].income.toFixed(1)]);
    }
  }
}

console.debug('KSPT: Initializing with all requested fixes');

if (window.Telegram?.WebApp){
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();
}

// BUG FIX 1: Music autoplay - Create persistent audio element with proper initialization
window.appMusic = window.appMusic || new Audio();
window.appMusic.loop = true;
window.appMusic.preload = 'auto';
window.appMusic.volume = 0.6;

function ensureMusicPlays() {
  try {
    const audioFile = musicMap[d.music] || musicMap['mistic'];
    if (window.appMusic.src.indexOf(audioFile) === -1) window.appMusic.src = audioFile;
    if (!d.musicMuted) {
      window.appMusic.play().catch(() => {
        // user gesture required — resume on first tap/click
        const resume = () => {
          window.appMusic.play().catch(()=>{});
          document.removeEventListener('click', resume);
          document.removeEventListener('touchstart', resume);
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('touchstart', resume, { once: true });
      });
    }
  } catch(e) { console.warn('ensureMusicPlays:', e); }
}

// NEW: Separate audio object for previews
window.previewAudio = new Audio();
window.previewAudio.loop = false;
window.previewAudio.volume = 0.5;

// Music file mapping
const musicMap = {
  'mistic': 'mistic.mp3',
  'gabber': 'gabber.mp3',
  'onion': 'onion.mp3',
  'calm': 'calm.mp3',
  'siulai': 'siulai.mp3',
  'funny': 'funny.mp3'
};

// Global variables
let d; // Main data object
let pendingBet = null;
let lastTapTime = 0;
let previewTimeout = null;
let capsuleTaps = 0;
let globalSkinLimit = parseInt(localStorage.getItem("kspt_global_priz_count")) || 46;
let clickTimes = [];
let cheatStage = parseInt(localStorage.getItem("kspt_cheat_stage")) || 0;
let isWarningActive = false;
let currentMarketView = 'main';
let selectedToken = null;
let marketUpdateInterval = null;
let lastMarketBuyTime = 0;
let tradeInputValue = '';
let chartOffset = 0;
let showLastTrades = false;
let focusedInput = null;
let chartIsDragging = false;
let chartDragStartX = 0;
let chartDragStartOffset = 0;

// ===== 3D COIN GLOBAL HANDLERS =====
let threeDHandlers = {
  mouseEnter: null,
  mouseLeave: null,
  mouseMove: null,
  touchStart: null,
  touchMove: null,
  touchEnd: null
};

// Capsule opening guard
let capsuleOpening = false;

// Market DOM references
let marketDOMRefs = {
  priceKSPT: null,
  priceBANX: null,
  pricePersonal: null,
  priceJVM: null,
  portfolioValue: null,
  chartCanvas: null,
  chartCtx: null,
  tradeAmount: null,
  priceContainer: null,
  priceArrow: null
};

// Crop data
let cropData = {
  image: null,
  scale: 100,
  x: 0,
  y: 0
};

// Token image cache
let tokenImageCache = localStorage.getItem('kspt_token_image_cache') || null;
let currentKeyboardInput = null;

// ==========================================
// CAPSULE TAP ANIMATION FIXES - ADDED DEBOUNCE AND NAMED HANDLER
// ==========================================
let lastCapsuleTapTime = 0;

// Named handler for capsule taps with debounce
function capsuleTapHandler(e) {
  const now = Date.now();
  if (now - lastCapsuleTapTime < 150) return; // ignore taps faster than 150ms
  lastCapsuleTapTime = now;

  capsuleTaps++;
  const capsuleImg = document.getElementById('capsuleBreakImg');
  const hint = document.getElementById('capsuleHint');
  
  capsuleImg.classList.add('tap-anim');
  setTimeout(() => capsuleImg.classList.remove('tap-anim'), 220); // match CSS animation duration

  // Update capsule image based on tap count
  if (capsuleTaps >= 30) {
    capsuleImg.src = "capsule5.png";
    hint.textContent = "One more tap!";
    // disable further taps immediately
    capsuleImg.removeEventListener('click', capsuleTapHandler);
    setTimeout(() => openCapsule(), 100);
  } else if (capsuleTaps >= 20) {
    capsuleImg.src = "capsule4.png";
    hint.textContent = "Keep going!";
  } else if (capsuleTaps >= 13) {
    capsuleImg.src = "capsule3.png";
    hint.textContent = "Almost there!";
  } else if (capsuleTaps >= 8) {
    capsuleImg.src = "capsule2.png";
    hint.textContent = "It's cracking!";
  } else if (capsuleTaps >= 3) {
    capsuleImg.src = "capsule1.png";
    hint.textContent = "Good!";
  } else {
    capsuleImg.src = "capsule.png";
    hint.textContent = "Tap to open!";
  }
}

// Capsule reward pool with updated weights
const capsuleRewards = [
  { type: 'kspt', value: 3, weight: 19, name: '+3 KSPT', img: 'kspt.png' },
  { type: 'kspt', value: 5, weight: 15, name: '+5 KSPT', img: 'kspt.png' },
  { type: 'kspt', value: 10, weight: 15, name: '+10 KSPT', img: 'kspt.png' },
  { type: 'kspt', value: 20, weight: 5, name: '+20 KSPT', img: 'kspt.png' },
  { type: 'discount', weight: 16, name: '-15% Skin Discount (24h)', img: 'what.png' },
  { type: 'offline25', weight: 5, name: '+25% Offline Income (one-time)', img: 'k.png' },
  { type: 'tap2x', duration: 120, weight: 3, name: 'Tap x2 for 2 minutes', img: 't.png' },
  { type: 'puzzle', weight: 10, name: 'Puzzle Piece', img: 'puz.png' },
  { type: 'background', id: 'heaven', weight: 2, name: 'Background: Heaven', img: 'heaven.png' },
  { type: 'skin', id: 'capsule', weight: 1, name: 'Skin: Capsule Master', img: 'capskine.png' },
  { type: 'music', id: 'calm', weight: 5, name: 'Music: Calm + Hush', img: 'calm.png' }
];

// Helper function to get weighted random reward
function getWeightedRandomReward() {
  const totalWeight = capsuleRewards.reduce((sum, reward) => sum + reward.weight, 0);
  let random = Math.random() * totalWeight;
  let cumulativeWeight = 0;
  
  for (const reward of capsuleRewards) {
    cumulativeWeight += reward.weight;
    if (random < cumulativeWeight) {
      return reward;
    }
  }
  
  // Fallback to first reward
  return capsuleRewards[0];
}

// Проверка на перманентный бан при загрузке
if(cheatStage >= 3) {
  document.getElementById("redScreen").style.display = "flex";
}

const noobBoxRewards = [
  { type: 'kspt', value: 1, weight: 40, name: '+1 KSPT', img: 'kspt.png' },
  { type: 'banx', value: 5500, weight: 30, name: '+5500 BANX', img: 'bandit.png' },
  { type: 'jvm', value: 6.7, weight: 15, name: '+6.7 JVM', img: 'jvm.png' },
  { type: 'puzzle', weight: 5, name: 'Random Puzzle Piece', img: 'puz.png' },
  { type: 'capsuleSkip', weight: 5, name: 'Capsule Timer Skip', img: 'iks.png' },
  { type: 'skin', id: 'dirty', weight: 5, name: 'Skin: Dirty Fingers', img: 'dirty.png' }
];

function getWeightedNoobBoxReward() {
  const totalWeight = noobBoxRewards.reduce((sum, reward) => sum + reward.weight, 0);
  let random = Math.random() * totalWeight;
  let cumulativeWeight = 0;
  
  for (const reward of noobBoxRewards) {
    cumulativeWeight += reward.weight;
    if (random < cumulativeWeight) {
      return reward;
    }
  }
  return noobBoxRewards[0];
}

// ==========================================
// ИНИЦИАЛИЗАЦИЯ ДАННЫХ
// ==========================================
const defaultData = {
  tokens: 0,
  skin: "default",
  skins: {default: 1},

 // NEW: Добавляем инициализацию limitedCards
  limitedCards: {
    yes: { owned: false, bought: false },
    no: { owned: false, bought: false },
    stick: { owned: false, bought: false, appearedAt: 0, boughtAt: 0 },
    backpack: { owned: false, bought: false, appearedAt: 0, boughtAt: 0 },
    journey: { owned: false, level: -1 },
    challenge: { owned: false }
  },

  x2: false,
  lastLogin: Date.now(),
  wonX10: false,
  cards: { 
    c1: -1, c2: -1, c3: -1, c4: -1, c5: -1,
    s1: -1, s2: -1, s3: -1, s4: -1, s5: -1,
    g1: -1, g2: -1, g3: -1
  },
  energy: 2500,
  maxEnergy: 2500,
  usedCodes: [],
  bg: "default",
  ownedBgs: ["default"],
  boost: { active: false, end: 0, cdEnd: 0 },
  euroVar: 1,
  artemVar: 0,
  regenMult: 1,
  vibration: 'medium',
  puzzles: [0,0,0,0,0,0,0,0,0],
  puzzleDone: false,
  puzzles2: [0,0,0,0,0,0,0,0,0],
  puzzle2Done: false,
  puzzleDoneTime: 0,
  unbanUsed: false,
  capsule: { lastOpen: 0, firstOpen: true },
  bonuses: { 
    offline25: false, 
    tap2x: { active: false, end: 0 }, 
    discounts: {},
    usedBezBags: false,
    usedSkipFuse: false,
    usedFuse: false
  },
  noobBox: {
  obtained: false,
  opened: false,
  taps: 0,
  lastOpen: 0
},
  goldCapsule: {
  obtained: false,   // true после ввода промокода
  opened: false,     // true после открытия
  taps: 0,           // сколько тапов уже сделано (для продолжения сессии)
  lastOpen: 0        // время получения/открытия (если нужно)
  },
  music: "mistic",
  ownedMusic: ["mistic"],
  musicMuted: false,
  settings: {
    animation: {
      skins: true,
      transitions: true,
      coin3d: true
    },
    vibration: {
      tapsEnabled: true,
      buttonsEnabled: true
    }
  },

  market: {
    introSeen: false,
    account: { name: "Trader", desc: "Crypto enthusiast" },
    ksptToken: {
      owned: 0,
      lastBuyTime: 0,
      lastUserBuyPrice: null,
      lastUserSellPrice: null,
      price: 0.50,
      history: [0.50, 0.50, 0.50, 0.50, 0.50],
      lastUpdate: Date.now(),
      chartOffset: 0
    },
    banxToken: {
      owned: 0,
      lastBuyTime: 0,
      lastUserBuyPrice: null,
      lastUserSellPrice: null,
      price: 0.0021,
      history: [0.0021, 0.0021, 0.0021, 0.0021, 0.0021],
      lastUpdate: Date.now(),
      chartOffset: 0
    },
    jvmToken: {
      owned: 0,
      lastBuyTime: 0,
      lastUserBuyPrice: null,
      lastUserSellPrice: null,
      price: 4.25,
      history: [4.25, 4.25, 4.25, 4.25, 4.25],
      lastUpdate: Date.now(),
      chartOffset: 0
    },
    personalToken: null
  },

  ivents: {},

  lang: 'en'
};

// Загрузка данных
try {
  const savedData = localStorage.getItem("kspt");
  if (savedData) {
    d = JSON.parse(savedData);
    d = migrateData(d, defaultData);
  } else {
    d = JSON.parse(JSON.stringify(defaultData));
  }
} catch(e) {
  console.error("Error loading data:", e);
  d = JSON.parse(JSON.stringify(defaultData));
}

// Загрузка данных из EK Shop
function loadEkshopData() {
  try {
    const ekshopSelected = localStorage.getItem('ekshop_selected');
    const ekshopOwned = localStorage.getItem('ekshop_owned');
    
    if (ekshopSelected) {
      const selected = JSON.parse(ekshopSelected);
      if (selected.skin) {
        d.ekshopSkin = selected.skin;
      }
      if (selected.bg) {
        d.ekshopBg = selected.bg;
      }
    }
    
    if (typeof d !== 'undefined') {
      if (d.ekshop_selected?.skin) {
        d.ekshopSkin = d.ekshop_selected.skin;
        d.skin = 'default';
      }

      if (d.ekshop_selected?.bg) {
        d.ekshopBg = d.ekshop_selected.bg;
        d.bg = 'default';
      }
    }
  } catch(e) {
    console.warn('Error loading EK Shop data:', e);
  }
}

// Вызов функции после загрузки d
loadEkshopData();

// Load user tokens from localStorage
try {
  const savedUserTokens = localStorage.getItem('kspt_user_tokens');
  if (savedUserTokens && !d.market.personalToken) {
    const userTokenData = JSON.parse(savedUserTokens);
    if (userTokenData) {
      d.market.personalToken = userTokenData;
    }
  }
} catch(e) {
  console.error("Error loading user tokens:", e);
}

// FIXED FUNCTION: Corrected spread operator syntax
function migrateData(oldData, defaultData) {
  // Создаём глубокую копию defaultData как базу
  const merged = JSON.parse(JSON.stringify(defaultData || {}));

  // Если oldData отсутствует или не объект — возвращаем базу
  if (!oldData || typeof oldData !== 'object') return merged;

  // Рекурсивный безопасный merge (source поверх target)
  function deepMerge(target, source) {
    for (const key in source) {
      if (!Object.prototype.hasOwnProperty.call(source, key)) continue;
      const sv = source[key];
      const tv = target[key];

      if (sv && typeof sv === 'object' && !Array.isArray(sv) && tv && typeof tv === 'object' && !Array.isArray(tv)) {
        // оба — объекты -> рекурсивно мержим
        deepMerge(tv, sv);
      } else {
        // иначе просто перезаписываем
        target[key] = sv;
      }
    }
  }

  deepMerge(merged, oldData);

  // Дополнительные гарантии и инициализации (как было в оригинале)
  if (!merged.skins) merged.skins = { default: 1 };
  if (!merged.skins.default) merged.skins.default = 1;

  if (!merged.bonuses) merged.bonuses = defaultData.bonuses;
  if (!merged.market) merged.market = defaultData.market;
  if (!merged.settings) merged.settings = defaultData.settings;
  if (!merged.cards) merged.cards = {};

  // Инициализируем все карты, если они не существуют
  const allCards = ['c1','c2','c3','c4','c5','s1','s2','s3','s4','s5','g1','g2','g3'];
  allCards.forEach(cardKey => {
    if (merged.cards[cardKey] === undefined) merged.cards[cardKey] = -1;
  });

  if (!merged.lang) merged.lang = 'en';

  if (!merged.market.ksptToken) merged.market.ksptToken = defaultData.market.ksptToken;
  if (merged.market.ksptToken && !merged.market.ksptToken.lastUserBuyPrice) {
    merged.market.ksptToken.lastUserBuyPrice = null;
    merged.market.ksptToken.lastUserSellPrice = null;
    merged.market.ksptToken.chartOffset = 0;
  }

  if (!merged.market.banxToken) merged.market.banxToken = defaultData.market.banxToken;
  if (merged.market.banxToken && !merged.market.banxToken.lastUserBuyPrice) {
    merged.market.banxToken.lastUserBuyPrice = null;
    merged.market.banxToken.lastUserSellPrice = null;
    merged.market.banxToken.chartOffset = 0;
  }

  if (!merged.market.jvmToken) merged.market.jvmToken = defaultData.market.jvmToken;

  if (!merged.noobBox) merged.noobBox = defaultData.noobBox;

  return merged;
}

const save = () => {
  console.debug('save: called at', Date.now());
  try {
    localStorage.setItem("kspt", JSON.stringify(d));
    
    // Save user tokens separately for persistence
    if (d.market.personalToken) {
      localStorage.setItem('kspt_user_tokens', JSON.stringify(d.market.personalToken));
    }
  } catch(e) {
    console.error("Error saving data:", e);
  }
};

// Данные о доходах от скинов
const SKIN_INCOME = {
  default: 0,
  what: 1,
  burger: 2.2,
  joost: 4,
  dog: 6.7,
  diam: 10,
  tung: 15,
  priz: 3,
  euro: 27,
  space: 40,
  kostia: 3,
  pixe: 88,    
  onion: 120,
  cookie: 140,
  metka: 5,
  seri: 5,
  mystic: 15,
  capsule: 10,
  artem: 5,
  ruka: 170,
  banditx: 210,
  goldcoin: 250,
  gkspt: 10,           
  cyber_android: 15, 
  siulai: 20,
  dirty: 10,
  crypto_heart: 14,
  tetris: 40,
  joystick: 55,        
  snake: 108,
  brb: 500
  };

// Card data - UPDATED WITH EXACT VALUES
const CARDS = {
  1: { type: 'company', levels: [{ price: 25, income: 1.0 }, { price: 32, income: 2.1 }, { price: 40, income: 2.8 }, { price: 51, income: 4.4 }, { price: 65, income: 5.1 }, { price: 80, income: 6.5 }] },
  2: { type: 'company', levels: [{ price: 100, income: 2.5 }, { price: 130, income: 3.8 }, { price: 170, income: 5.1 }, { price: 190, income: 6.7 }, { price: 250, income: 8.0 }, { price: 315, income: 10.0 }] },
  3: { type: 'company', levels: [{ price: 310, income: 10.2 }, { price: 390, income: 14.1 }, { price: 480, income: 21 }, { price: 540, income: 28.6 }, { price: 610, income: 35.8 }, { price: 760, income: 50.3 }] },
  4: { type: 'company', levels: [{ price: 910, income: 16.9 }, { price: 1110, income: 27.1 }, { price: 1280, income: 35.7 }, { price: 1410, income: 48.0 }, { price: 1670, income: 59.3 }, { price: 1860, income: 74.2 }] },
  5: { type: 'company', levels: [{ price: 1470, income: 50.1 }, { price: 1970, income: 73.4 }, { price: 2510, income: 86.7 }, { price: 3120, income: 108.5 }, { price: 3510, income: 138.3 }, { price: 4080, income: 215.4 }] },
  
  // Sport cards - EXACT VALUES
  s1: { type: 'sport', levels: [{ price: 80, income: 1.5 }, { price: 130, income: 3.8 }, { price: 170, income: 6.1 }, { price: 190, income: 9.4 }, { price: 230, income: 12.7 }, { price: 270, income: 14.8 }] },
  s2: { type: 'sport', levels: [{ price: 210, income: 3.0 }, { price: 280, income: 5.8 }, { price: 340, income: 8.1 }, { price: 410, income: 12.7 }, { price: 440, income: 16.2 }, { price: 520, income: 20.4 }] },
  s3: { type: 'sport', levels: [{ price: 40, income: 1.1 }, { price: 65, income: 2.7 }, { price: 80, income: 4.7 }, { price: 110, income: 7.5 }, { price: 140, income: 11.6 }, { price: 170, income: 13.7 }] },
  s4: { type: 'sport', levels: [{ price: 110, income: 5.4 }, { price: 140, income: 8.9 }, { price: 160, income: 11.4 }, { price: 205, income: 14.2 }, { price: 235, income: 17.9 }, { price: 260, income: 19.4 }] },
  s5: { type: 'sport', levels: [{ price: 15, income: 0.8 }, { price: 25, income: 1.7 }, { price: 35, income: 3.1 }, { price: 50, income: 4.8 }, { price: 65, income: 6.3 }, { price: 80, income: 8.1 }] },
  
  // Game cards - EXACT VALUES
  g1: { type: 'game', levels: [{ price: 240, income: 5.8 }, { price: 255, income: 7.2 }, { price: 275, income: 10.0 }, { price: 335, income: 13.1 }, { price: 360, income: 15.8 }, { price: 405, income: 18.1 }] },
  g2: { type: 'game', levels: [{ price: 70, income: 2.2 }, { price: 85, income: 3.7 }, { price: 110, income: 5.9 }, { price: 125, income: 7.4 }, { price: 140, income: 8.8 }, { price: 165, income: 9.7 }] },
  g3: { type: 'game', levels: [{ price: 140, income: 5.1 }, { price: 155, income: 7.2 }, { price: 160, income: 8.9 }, { price: 175, income: 11.1 }, { price: 195, income: 14.4 }, { price: 215, income: 17.5 }] }
};

// ==========================================
// ОСНОВНЫЕ ФУНКЦИИ
// ==========================================

function processOfflineIncome() {
  try {
    const now = Date.now();
    const diffMs = now - d.lastLogin;
    const minutes = diffMs / (1000 * 60);
    const hours = diffMs / (1000 * 60 * 60);
    let rate = getHourlyRate();
    
    if (rate > 0 && hours >= 1) {
      let effectiveHours = hours;
      if (effectiveHours > 8) effectiveHours = 8;
      
      let earnings = rate * effectiveHours;
      if (d.bonuses && d.bonuses.offline25) {
        earnings *= 1.25;
        d.bonuses.offline25 = false;
        showToast(t('offline_bonus'));
      }

      if (earnings > 0.01) {
        d.tokens += earnings;
        showToast(t('offline_earnings', earnings.toFixed(2)));
      }
    }

    let energyPercent = 0;
    if (minutes >= 5 && minutes < 10) {
      energyPercent = 0.10;
    } else if (minutes >= 10 && minutes < 25) {
      energyPercent = 0.25;
    } else if (minutes >= 25 && minutes < 40) {
      energyPercent = 0.50;
    } else if (minutes >= 40 && minutes < 70) {
      energyPercent = 0.75;
    } else if (minutes >= 70) {
      energyPercent = 1.0;
    }

    if (energyPercent > 0) {
      let add = d.maxEnergy * energyPercent;
      d.energy = Math.min(d.energy + add, d.maxEnergy);
    }

    processOfflineMarket(minutes);

      // NEW: Проверяем появление Backpack через 7 дней после Stick
    if (d.limitedCards && d.limitedCards.stick.appearedAt > 0 && !d.limitedCards.backpack.appearedAt) {
      const stickAppearedTime = d.limitedCards.stick.appearedAt;
      if (now - stickAppearedTime >= 7 * 24 * 60 * 60 * 1000) {
        d.limitedCards.backpack.appearedAt = now;
      }
    }

    d.lastLogin = now;
    save();
    
    // BUG FIX 1: Use ensureMusicPlays instead of direct play
    ensureMusicPlays();
  } catch(e) {
    console.error("Offline Process Error", e);
  }
}

function processOfflineMarket(minutes) {
  if(!d.market || !d.market.ksptToken) return;
  
  // KSPT Token
  let range = 0;
  if(minutes >= 0 && minutes < 10) range = 1;
  else if(minutes >= 10 && minutes < 30) range = 2;
  else if(minutes >= 30) range = 3;
  
  if(range > 0) {
    let change = 0;
    let sign = Math.random() < 0.5 ? -1 : 1;
    
    if(range === 1) change = (Math.random() * 0.04) + 0.03;
    else if(range === 2) change = (Math.random() * 0.05) + 0.10;
    else if(range === 3) change = (Math.random() * 0.25) + 0.15;
    
    let newPrice = d.market.ksptToken.price + (change * sign);
    if(newPrice < 0.40) newPrice = 0.40;
    if(newPrice > 3.10) newPrice = 3.10;
    
    d.market.ksptToken.price = newPrice;
    d.market.ksptToken.history.push(newPrice);
    if(d.market.ksptToken.history.length > 20) d.market.ksptToken.history.shift();
  }
  
  // BANX Token
  if(d.market.banxToken) {
    let banxRange = 0;
    if(minutes >= 0 && minutes < 10) banxRange = 1;
    else if(minutes >= 10 && minutes < 30) banxRange = 2;
    else if(minutes >= 30) banxRange = 3;
    
    if(banxRange > 0) {
      let banxChange = 0;
      let banxSign = Math.random() < 0.5 ? -1 : 1;
      
      if(banxRange === 1) banxChange = (Math.random() * 0.0001) + 0.0002;
      else if(banxRange === 2) banxChange = (Math.random() * 0.0002) + 0.0005;
      else if(banxRange === 3) banxChange = (Math.random() * 0.0003) + 0.0006;
      
      let newBanxPrice = d.market.banxToken.price + (banxChange * banxSign);
      if(newBanxPrice < 0.00010) newBanxPrice = 0.00010;
      if(newBanxPrice > 0.01) newBanxPrice = 0.01;
      
      d.market.banxToken.price = newBanxPrice;
      d.market.banxToken.history.push(newBanxPrice);
      if(d.market.banxToken.history.length > 20) d.market.banxToken.history.shift();
    }
  }
  
  // JVM Token
  if(d.market.jvmToken) {
    let jvmRange = 0;
    if(minutes >= 0 && minutes < 10) jvmRange = 1;
    else if(minutes >= 10 && minutes < 25) jvmRange = 2;
    else if(minutes >= 25 && minutes < 50) jvmRange = 3;
    else if(minutes >= 50) jvmRange = 4;
    
    if(jvmRange > 0) {
      let jvmChange = 0;
      let jvmSign = Math.random() < 0.5 ? -1 : 1;
      
      if(jvmRange === 1) jvmChange = (Math.random() * 0.03) + 0.05;
      else if(jvmRange === 2) jvmChange = (Math.random() * 0.07) + 0.10;
      else if(jvmRange === 3) jvmChange = (Math.random() * 0.06) + 0.18;
      else if(jvmRange === 4) jvmChange = (Math.random() * 0.10) + 0.20;
      
      let newJvmPrice = d.market.jvmToken.price + (jvmChange * jvmSign);
      if(newJvmPrice < 2.80) newJvmPrice = 2.80;
      if(newJvmPrice > 12.10) newJvmPrice = 12.10;
      
      d.market.jvmToken.price = newJvmPrice;
      d.market.jvmToken.history.push(newJvmPrice);
      if(d.market.jvmToken.history.length > 20) d.market.jvmToken.history.shift();
    }
  }
  
  // Personal Token
  if(d.market.personalToken) {
    let personalRange = 0;
    if(minutes >= 0 && minutes < 10) personalRange = 1;
    else if(minutes >= 10 && minutes < 30) personalRange = 2;
    else if(minutes >= 30) personalRange = 3;
    
    if(personalRange > 0) {
      let personalChangePercent = 0;
      let personalSign = Math.random() < 0.5 ? -1 : 1;
      
      if(personalRange === 1) personalChangePercent = (Math.random() * 0.03) + 0.06;
      else if(personalRange === 2) personalChangePercent = (Math.random() * 0.06) + 0.10;
      else if(personalRange === 3) personalChangePercent = (Math.random() * 0.06) + 0.15;
      
      let changeAmount = d.market.personalToken.price * personalChangePercent;
      let newPersonalPrice = d.market.personalToken.price + (changeAmount * personalSign);
      
      if(newPersonalPrice < 0.001) newPersonalPrice = 0.001;
      if(newPersonalPrice > 10) newPersonalPrice = 10;
      
      d.market.personalToken.price = newPersonalPrice;
      d.market.personalToken.history.push(newPersonalPrice);
      if(d.market.personalToken.history.length > 20) d.market.personalToken.history.shift();
    }
  }
}

function getHourlyRate() {
  let rate = 0;
  
  // Company cards
  if(d.cards.c1 >= 0) rate += CARDS[1].levels[d.cards.c1].income;
  if(d.cards.c2 >= 0) rate += CARDS[2].levels[d.cards.c2].income;
  if(d.cards.c3 >= 0) rate += CARDS[3].levels[d.cards.c3].income;
  if(d.cards.c4 >= 0) rate += CARDS[4].levels[d.cards.c4].income;
  if(d.cards.c5 >= 0) rate += CARDS[5].levels[d.cards.c5].income;
  
  // Sport cards
  if(d.cards.s1 >= 0) rate += CARDS.s1.levels[d.cards.s1].income;
  if(d.cards.s2 >= 0) rate += CARDS.s2.levels[d.cards.s2].income;
  if(d.cards.s3 >= 0) rate += CARDS.s3.levels[d.cards.s3].income;
  if(d.cards.s4 >= 0) rate += CARDS.s4.levels[d.cards.s4].income;
  if(d.cards.s5 >= 0) rate += CARDS.s5.levels[d.cards.s5].income;
  
  // Game cards
  if(d.cards.g1 >= 0) rate += CARDS.g1.levels[d.cards.g1].income;
  if(d.cards.g2 >= 0) rate += CARDS.g2.levels[d.cards.g2].income;
  if(d.cards.g3 >= 0) rate += CARDS.g3.levels[d.cards.g3].income;

  rate += SKIN_INCOME.default;
  
  if(d.skins) {
    for(let s in d.skins) {
      if(d.skins[s] && SKIN_INCOME[s]) {
        rate += SKIN_INCOME[s];
      }
    }
  }
  if(d.wonX10) rate += SKIN_INCOME.priz;

/* ===== EK SHOP INCOME START ===== */
try {
  // если используем localStorage
  const ownedRaw = localStorage.getItem('ekshop_owned');
  if (ownedRaw) {
    const owned = JSON.parse(ownedRaw);

    if (owned.skin_tetris) rate += 40;
    if (owned.skin_joystick) rate += 55;
    if (owned.skin_snake) rate += 108;
  }
} catch(e){}
/* ===== EK SHOP INCOME END ===== */

// NEW: Добавляем доход от лимитированных карточек
if (d.limitedCards) {
  if (d.limitedCards.yes.bought) rate += 10;
  if (d.limitedCards.no.bought) rate += 10;
  if (d.limitedCards.stick.bought) rate += 21;
  if (d.limitedCards.backpack.bought) rate += 31;
  if (d.limitedCards.journey.level >= 0) {
    const journeyIncome = [71, 104, 163, 183, 268, 310];
    rate += journeyIncome[d.limitedCards.journey.level];
  }
  if (d.limitedCards.challenge.owned) rate += 80;
}

return rate;
}

// ==========================================
// UI ФУНКЦИИ
// ==========================================

function safeDOMUpdate(callback) {
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(() => {
      callback();
    });
  } else {
    setTimeout(callback, 0);
  }
}

function ui() {
  if(!d) return;
  
  safeDOMUpdate(() => {
    const elements = {
      "balanceMain": d.tokens.toFixed(2) + " KSPT",
      "balanceSkins": t('balance') + d.tokens.toFixed(2) + " KSPT",
      "balanceTech": t('balance') + d.tokens.toFixed(2) + " KSPT",
      "balanceOffline": t('balance') + d.tokens.toFixed(2) + " KSPT",
      "balanceSettings": t('balance') + d.tokens.toFixed(2) + " KSPT",
      "balanceCapsule": t('balance') + d.tokens.toFixed(2) + " KSPT"
    };
    
    for (const [id, text] of Object.entries(elements)) {
      const elem = document.getElementById(id);
      if (elem) elem.textContent = text;
    }
    
    let rate = getHourlyRate();
    const offlineElem = document.getElementById("offlineRateMain");
    if (offlineElem) offlineElem.textContent = formatTemplate(t('offline_rate'), [rate.toFixed(1)]);
    
    const skinSubElem = document.getElementById("limitedSkinSub");
    if (skinSubElem) skinSubElem.textContent = formatTemplate(t('special_skin_limit'), [globalSkinLimit, '3']);
    
    const energyElem = document.getElementById("energyDisplay");
    if (energyElem) energyElem.textContent = `${Math.floor(d.energy)} / ${d.maxEnergy}`;
    
    const energyInfoElem = document.getElementById("energyInfoText");
    if (energyInfoElem) energyInfoElem.textContent = formatTemplate(t('current_max'), [d.maxEnergy]);
  });
  
  updateAllTexts();
  updateBackground();
  updateTempBoostUI();
  updateCapsuleUI();
  updateSkinImage();
  updateSkinButtons();
  updateSettingsUI();
  updateRegenUI();
  updateCardUI();
  updatePuzzleUI();
  updateSecondPuzzleUI();
  updateSkinPreviews();
  
  if (!document.getElementById("market")?.classList.contains("active")) {
    updateMarketUI();
  }
  
  updateMaxedButtons();
}

function updateMaxedButtons() {
  const x2Btn = document.getElementById("btnX2");
  if (x2Btn) {
    if (d.x2) {
      x2Btn.textContent = t('maxed');
      x2Btn.className = "owned";
      x2Btn.onclick = null;
    } else {
      x2Btn.textContent = t('buy');
      x2Btn.className = "";
      x2Btn.onclick = buyX2;
    }
  }
  
  const energyBtn = document.getElementById("btnEnergyUpgrade");
  if (energyBtn) {
    if (d.maxEnergy >= 10000) {
      energyBtn.textContent = t('maxed');
      energyBtn.className = "owned";
      energyBtn.onclick = null;
    } else {
      let cost = 15;
      if (d.maxEnergy >= 8000) {
        cost = 100;
      }
      energyBtn.textContent = formatTemplate(t('buy_upgrade'), [cost]);
      energyBtn.className = "";
      energyBtn.onclick = buyEnergyLimit;
    }
  }
  
  const regenBtn = document.getElementById("btnRegen");
  if (regenBtn) {
    if (d.regenMult === 3) {
      regenBtn.textContent = t('maxed');
      regenBtn.className = "owned";
      regenBtn.onclick = null;
    }
  }
}

// NEW FUNCTION: Enhanced skin system
function getSkinImage(skinId, euroVar = 1, artemVar = 0) {
  const skinImages = {
    'default': 'kspt.png',
    'what': 'what.png',
    'burger': 'burger.png',
    'joost': 'joost.png',
    'dog': 'dog.png',
    'diam': 'diam.png',
    'tung': 'tung.png',
    'priz': 'priz.png',
    'euro': euroVar === 2 ? 'e2.png' : 'e1.png',
    'space': 'sun.png',
    'kostia': 'kostia.png',
    'pixe': 'pixe.png',
    'onion': 'onion.png',
    'cookie': 'cook.png',
    'metka': 'metka.png',
    'seri': 'seri.png',
    'capsule': 'capskine.png',
    'mystic': 'piece.png',
    'artem': artemVar === 1 ? 'artem1.png' : 'artem.png',
    // NEW SKINS IMAGES
    'ruka': 'ruka.png',
    'banditx': 'banditx.png',
    'goldcoin': 'def.png',
    'gkspt': 'gkspt.png',                    
    'cyber_android': 'robotic.png', 
    'siulai': 'siulai.png',   
    'dirty': 'dirty.png',
    'crypto_heart': 'heart.png',
    'brb': 'knopka.png'
  };
  return skinImages[skinId] || 'kspt.png';
}

function updateSkinImage() {
  const coin = document.getElementById("coin");
  if (!coin) return;

  let imgName;
  let currentSkinId = d.skin; // по умолчанию основной скин
  
  // ПРОВЕРЯЕМ: есть ли активный скин из EK Shop?
  try {
    const ekshopSelected = JSON.parse(localStorage.getItem('ekshop_selected') || '{}');
    const ekshopOwned = JSON.parse(localStorage.getItem('ekshop_owned') || '{}');
    
    // Если в EK Shop выбран скин И он куплен
    if (ekshopSelected.skin && ekshopOwned[ekshopSelected.skin]) {
      currentSkinId = ekshopSelected.skin; // используем ID из EK Shop
      // ОЧЕНЬ ВАЖНО: сохраняем, что скин из EK Shop активен
      d.ekshopSkinActive = true;
    } else {
      d.ekshopSkinActive = false;
    }
  } catch(e) {
    console.warn('EK Shop skin check failed:', e);
    d.ekshopSkinActive = false;
  }

  // Определяем картинку в зависимости от источника
  if (currentSkinId.startsWith('skin_')) {
    // Это скин из EK Shop
    const ekshopSkinMap = {
      'skin_tetris': 'tetrisik.png',
      'skin_joystick': 'dzoi.png',
      'skin_snake': 'zmej.png'
    };
    imgName = ekshopSkinMap[currentSkinId] || getSkinImage(d.skin, d.euroVar, d.artemVar);
  } else {
    // Это обычный скин
    imgName = getSkinImage(d.skin, d.euroVar, d.artemVar);
  }

  if (coin.dataset.currentSkin !== currentSkinId) {
    coin.src = imgName;
    coin.dataset.currentSkin = currentSkinId;
    coin.dataset.toggle = "0";
    coin.dataset.stage = "0";
    coin.dataset.mystic = "0";
    coin.dataset.cookStage = "0";
    coin.dataset.cyberStage = "0";
  }
}

function applySkin(skinId, variant = null) {
  console.log('applySkin called:', skinId, variant);

  // Если это НЕ скин из EK Shop (не начинается с 'skin_'), 
  // то сбрасываем выбор скина в EK Shop
  if (!skinId.startsWith('skin_')) {
    try {
      const ekshopSelected = JSON.parse(localStorage.getItem('ekshop_selected') || '{}');
      if (ekshopSelected.skin) {
        ekshopSelected.skin = null;
        localStorage.setItem('ekshop_selected', JSON.stringify(ekshopSelected));
        d.ekshopSkinActive = false; // Добавлено: отмечаем, что скин EK Shop не активен
      }
    } catch(e) {
      console.warn('Failed to clear EK Shop skin selection:', e); // Добавлено: логирование ошибок
    }
  }
  
  // Stop any skin animation timers
  if (window.skinAnimationTimer) {
    clearInterval(window.skinAnimationTimer);
    window.skinAnimationTimer = null;
  }
  
  // Check if skin is owned
  if (skinId !== 'default' && !d.skins[skinId]) {
    // Особые скины из золотой капсулы (не покупаются)
    if (skinId === 'gkspt' || skinId === 'cyber_android' || skinId === 'dirty') {
      showToast(t('locked'));
      return;
    }
    // ==========================================
    // Skin not owned, try to buy it
    const prices = {what:1, burger:10, joost:30, dog:80, diam:100, tung:240, euro:780, space:1210, kostia:0, pixe:3215, onion:10110, cookie:40780, metka:0, seri:0, mystic:0, capsule:0, artem:0, ruka:172080, banditx:542123, goldcoin:1120000};
    const price = prices[skinId] || 0;
    
    if (price > 0 && d.tokens >= price) {
      buySkin(skinId, price);
    } else if (skinId === 'priz' && d.wonX10 && globalSkinLimit > 0) {
      // Special handling for prize skin
      d.skins['priz'] = 1;
      d.skin = 'priz';
      globalSkinLimit--;
      localStorage.setItem("kspt_global_priz_count", globalSkinLimit);
      showToast(t('purchase_success'));
      save();
      ui();
    } else {
      showToast(t('locked'));
    }
    return;
  }
  
  // Handle skin variants
  if (skinId === 'euro') {
    d.euroVar = variant || d.euroVar || 1;
  } else if (skinId === 'artem') {
    d.artemVar = variant || d.artemVar || 0;
  }
  
  d.skin = skinId;
  
  // Update coin image immediately
  const coin = document.getElementById('coin');
  if (coin) {
    let imgName = getSkinImage(skinId, d.euroVar, d.artemVar);
    coin.src = imgName;
    coin.dataset.currentSkin = skinId;
    coin.dataset.toggle = "0";
    coin.dataset.stage = "0";
    coin.dataset.mystic = "0";
    coin.dataset.cookStage = "0";
  }
  
    // Очистить и при включённых анимациях — перезапустить таймер анимации
if (window.skinAnimationTimer) {
  clearInterval(window.skinAnimationTimer);
  window.skinAnimationTimer = null;
}
// УДАЛЕНО для фикса проблемы с тапами
// if (d.settings && d.settings.animation && d.settings.animation.skins) {
//   window.skinAnimationTimer = setInterval(handleSkinAnimation, 800);
// }

  // Auto-unlock backgrounds for certain skins
  if (skinId === 'cookie' && !d.ownedBgs.includes('chrisp')) {
    d.ownedBgs.push('chrisp');
    d.bg = 'chrisp';
    showToast(t('chrispy_bg_unlocked'));
  }
  if (skinId === 'space' && !d.ownedBgs.includes('space')) {
    d.ownedBgs.push('space');
  }
  if (skinId === 'pixe' && !d.ownedBgs.includes('bug')) {
    d.ownedBgs.push('bug');
  }
  
  // FIX 4: Auto-unlock xfone background for banditx skin
  if (skinId === 'banditx' && !d.ownedBgs.includes('xfone')) {
    d.ownedBgs.push('xfone');
    showToast('xfone.png background unlocked!');
  }
  
  save();
  ui();
}

// NEW FUNCTION: Switch variant for multi-variant skins
function switchVariant(skinId) {
  if (skinId === 'euro') {
    d.euroVar = d.euroVar === 1 ? 2 : 1;
    applySkin('euro', d.euroVar);
    // FIX 2: Removed toast message
  } else if (skinId === 'artem') {
    d.artemVar = d.artemVar === 0 ? 1 : 0;
    applySkin('artem', d.artemVar);
    // FIX 2: Removed toast message
  }
  save();
  ui();
}

function handleTapSkinAnimation() {
  if (d.settings && d.settings.animation && !d.settings.animation.skins) {
    return;
  }
  
  const coin = document.getElementById('coin');
  if (!coin) return;

  const currentSkin = coin.dataset.currentSkin || d.skin;
  
  switch(currentSkin) {
    case "tung":
      coin.src = coin.src.includes("tung1.png") ? "tung.png" : "tung1.png";
      break;
    case "space":
      coin.src = coin.src.includes("sun.png") ? "moon.png" : "sun.png";
      break;
    case "pixe":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "pixe1.png" : "pixe.png";
      break;
    case "onion":
      let stage = parseInt(coin.dataset.stage || "0", 10);
      stage = (stage + 1) % 3;
      coin.dataset.stage = stage;
      if (stage === 0) coin.src = "onion.png";
      if (stage === 1) coin.src = "onion1.png";
      if (stage === 2) coin.src = "onion2.png";
      break;
    case "seri":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "seri1.png" : "seri.png";
      break;
    case "mystic":
      let mysticStage = parseInt(coin.dataset.mystic || "0", 10);
      mysticStage = (mysticStage + 1) % 4;
      coin.dataset.mystic = mysticStage;
      if (mysticStage === 0) coin.src = "piece1.png";
      if (mysticStage === 1) coin.src = "piece2.png";
      if (mysticStage === 2) coin.src = "piece3.png";
      if (mysticStage === 3) coin.src = "piece.png";
      break;
    case "capsule":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "capskine1.png" : "capskine.png";
      break;
    case "cookie":
      let cstage = parseInt(coin.dataset.cookStage || "0", 10);
      cstage = (cstage + 1) % 3;
      coin.dataset.cookStage = cstage;
      if (cstage === 0) coin.src = "cook.png";
      else if (cstage === 1) coin.src = "cook1.png";
      else if (cstage === 2) coin.src = "cook2.png";
      break;
    case "artem":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "artem1.png" : "artem.png";
      break;
    case "euro":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "e2.png" : "e1.png";
      break;
    case "ruka":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "ruka1.png" : "ruka.png";
      break;
    case "banditx":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "banditx1.png" : "banditx.png";
      break;
    case "gkspt":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "gkspt1.png" : "gkspt.png";
      break;
    case "cyber_android":
      let cyberStage = parseInt(coin.dataset.cyberStage || "0", 10);
      cyberStage = (cyberStage + 1) % 4;
      coin.dataset.cyberStage = cyberStage;
      if (cyberStage === 0) coin.src = "robotic.png";
      else if (cyberStage === 1) coin.src = "robotic1.png";
      else if (cyberStage === 2) coin.src = "robotic2.png";
      else coin.src = "robotic3.png";
      break;
    case "dirty":
      let dirtyStage = parseInt(coin.dataset.dirtyStage || "0", 10);
      dirtyStage = (dirtyStage + 1) % 3;
      coin.dataset.dirtyStage = dirtyStage;
      if (dirtyStage === 0) coin.src = "dirty.png";
      else if (dirtyStage === 1) coin.src = "dirty1.png";
      else coin.src = "dirty2.png";
      break;
    case "siulai":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "siulai1.png" : "siulai.png";
      break;
    case "crypto_heart":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "heart1.png" : "heart.png";
      break;
    case "tetris":
    case "skin_tetris":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "tetrisik1.png" : "tetrisik.png";
      break;
    case "joystick":
    case "skin_joystick":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "dzoi1.png" : "dzoi.png";
      break;
    case "snake":
    case "skin_snake":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "zmej1.png" : "zmej.png";
      break;
    case "brb":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "knopka1.png" : "knopka.png";
      break;
    default:
      break;
  }  
}

function handleSkinAnimation() {
  if (d.settings && d.settings.animation && !d.settings.animation.skins) {
    return;
  }
  
  const coin = document.getElementById('coin');
  if (!coin) return;

  switch(d.skin) {
    case "tung":
      coin.src = coin.src.includes("tung1.png") ? "tung.png" : "tung1.png";
      break;
    case "space":
      coin.src = coin.src.includes("sun.png") ? "moon.png" : "sun.png";
      break;
    case "pixe":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "pixe1.png" : "pixe.png";
      break;
    case "onion":
      let stage = parseInt(coin.dataset.stage || "0", 10);
      stage = (stage + 1) % 3;
      coin.dataset.stage = stage;
      if (stage === 0) coin.src = "onion.png";
      if (stage === 1) coin.src = "onion1.png";
      if (stage === 2) coin.src = "onion2.png";
      break;
    case "seri":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "seri1.png" : "seri.png";
      break;
    case "mystic":
      let mysticStage = parseInt(coin.dataset.mystic || "0", 10);
      mysticStage = (mysticStage + 1) % 4;
      coin.dataset.mystic = mysticStage;
      if (mysticStage === 0) coin.src = "piece1.png";
      if (mysticStage === 1) coin.src = "piece2.png";
      if (mysticStage === 2) coin.src = "piece3.png";
      if (mysticStage === 3) coin.src = "piece.png";
      break;
    case "capsule":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "capskine1.png" : "capskine.png";
      break;
    case "cookie":
      let cstage = parseInt(coin.dataset.cookStage || "0", 10);
      cstage = (cstage + 1) % 3;
      coin.dataset.cookStage = cstage;
      if (cstage === 0) coin.src = "cook.png";
      else if (cstage === 1) coin.src = "cook1.png";
      else if (cstage === 2) coin.src = "cook2.png";
      break;
    // BUG FIX 2: Add cases for euro and artem
    case "artem":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "artem1.png" : "artem.png";
      break;
    case "euro":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "e2.png" : "e1.png";
      break;
    // NEW SKINS ANIMATIONS
    case "ruka":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "ruka1.png" : "ruka.png";
      break;
    case "banditx":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "banditx1.png" : "banditx.png";
      break;
    case "gkspt":
  coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
  coin.src = coin.dataset.toggle === "1" ? "gkspt1.png" : "gkspt.png";
  break;
case "cyber_android":
  let cyberStage = parseInt(coin.dataset.cyberStage || "0", 10);
  cyberStage = (cyberStage + 1) % 4;
  coin.dataset.cyberStage = cyberStage;
  if (cyberStage === 0) coin.src = "robotic.png";
  else if (cyberStage === 1) coin.src = "robotic1.png";
  else if (cyberStage === 2) coin.src = "robotic2.png";
  else coin.src = "robotic3.png";
  break;
  case "dirty":
  let dirtyStage = parseInt(coin.dataset.dirtyStage || "0", 10);
  dirtyStage = (dirtyStage + 1) % 3;
  coin.dataset.dirtyStage = dirtyStage;
  if (dirtyStage === 0) coin.src = "dirty.png";
  else if (dirtyStage === 1) coin.src = "dirty1.png";
  else coin.src = "dirty2.png";
  break;
  case "siulai":
    coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
    coin.src = coin.dataset.toggle === "1" ? "siulai1.png" : "siulai.png";
    break;
  case "crypto_heart":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "heart1.png" : "heart.png";
      break;
  case "tetris":
  case "skin_tetris":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "tetrisik1.png" : "tetrisik.png";
      break;
    case "joystick":
    case "skin_joystick":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "dzoi1.png" : "dzoi.png";
      break;
    case "snake":
    case "skin_snake":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "zmej1.png" : "zmej.png";
      break;
   case "brb":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "knopka1.png" : "knopka.png";
      break;

  default:
  break;
  }  
}

function updateSkinButtons() {
  const secretSkins = {
    "kostiaSkinCard": 'kostia',
    "metkaSkinCard": 'metka',
    "seriSkinCard": 'seri',
    "artemSkinCard": 'artem',
    "skinCardMystic": 'mystic',
    "skinCardCapsule": 'capsule',
    "skinCardSiulai": 'siulai',
    "skinCardGkspt": 'gkspt',
    "skinCardCyberAndroid": 'cyber_android',
    "skinCardDirty": 'dirty',
    "skinCardCryptoHeart": 'crypto_heart'
  };
  
  for (const [cardId, skinKey] of Object.entries(secretSkins)) {
    const card = document.getElementById(cardId);
    if (card) {
      card.style.display = d.skins && d.skins[skinKey] ? "block" : "none";
    }
  }
  
  const skins = ["default", "what", "burger", "joost", "dog", "diam", "tung", "priz", "euro", "space", "kostia", "pixe", "onion", "cookie", "metka", "seri", "mystic", "capsule", "siulai", "artem", "ruka", "banditx", "dirty", "goldcoin", "gkspt", "cyber_android",  "brb"];
  
  skins.forEach(s => {
    const button = document.getElementById("skin-" + s);
    if (!button) return;
    
    if (s === "priz") {
      if (d.skin === "priz") {
        button.textContent = t('active');
        button.className = "active";
        return;
      }
      if (d.wonX10 && globalSkinLimit > 0) {
        button.textContent = t('owned');
        button.className = "owned";
        button.onclick = () => applySkin('priz');
      } else {
        button.textContent = globalSkinLimit <= 0 ? t('sold_out') : t('locked_win');
        button.className = "owned";
        button.onclick = null;
      }
      return;
    }
    
    if (d.skin === s) {
      if (s === "euro") {
        button.textContent = formatTemplate(t('active_var'), [d.euroVar]);
      } else if (s === "artem") {
        button.textContent = formatTemplate(t('active_var'), [d.artemVar + 1]);
      } else {
        button.textContent = t('active');
      }
      button.className = "active";
    } else if (s === "default" || d.skins[s]) {
      if (s === "euro") {
        button.textContent = formatTemplate(t('owned_var'), [d.euroVar]);
      } else if (s === "artem") {
        button.textContent = formatTemplate(t('owned_var'), [d.artemVar + 1]);
      } else {
        button.textContent = t('select');
      }
      button.className = "";
      button.onclick = () => applySkin(s);
    } else {
      const prices = {what:1, burger:10, joost:30, dog:80, diam:100, tung:240, euro:780, space:1210, kostia:0, pixe:3215, onion:10110, cookie:40780, metka:0, seri:0, mystic:0, capsule:0, artem:0, ruka:172080, banditx:542123, goldcoin:1120000, brb: 5000000};
      
      if (s === "mystic") {
    button.textContent = d.puzzleDone ? t('select') : t('locked_complete');
    button.className = d.puzzleDone ? "" : "owned";
    button.onclick = d.puzzleDone ? () => applySkin('mystic') : null;
} else if (s === "crypto_heart") {
    button.textContent = d.skins[s] ? (d.skin === s ? t('active') : t('select')) : t('locked');
    button.className = d.skins[s] ? (d.skin === s ? "active" : "") : "owned";
    button.onclick = d.skins[s] ? () => applySkin('crypto_heart') : null;
} else if (s === "gkspt" || s === "cyber_android") {
    button.textContent = d.skins[s] ? t('select') : t('locked');
    button.className = d.skins[s] ? "" : "owned";
    button.onclick = d.skins[s] ? () => applySkin(s) : null;
} else if (s === "capsule") {
    button.textContent = d.skins['capsule'] ? t('select') : t('locked_find');
    button.className = d.skins['capsule'] ? "" : "owned";
    button.onclick = d.skins['capsule'] ? () => applySkin('capsule') : null;
} else if (s === "artem" || s === "kostia" || s === "metka" || s === "seri") {
    button.textContent = d.skins[s] ? t('select') : t('locked_promo');
    button.className = d.skins[s] ? "" : "owned";
    button.onclick = d.skins[s] ? () => applySkin(s) : null;
} else if (s === "siulai") {
    button.textContent = d.skins[s] ? t('select') : t('locked');
    button.className = d.skins[s] ? "" : "owned";
    button.onclick = d.skins[s] ? () => applySkin('siulai') : null;
  } else if (s === "crypto_heart") {
    if (d.skin === s) {
      button.textContent = t('active');
      button.className = "active";
    } else if (d.skins && d.skins[s]) {
      button.textContent = t('select');
      button.className = "";
      button.onclick = () => applySkin(s);
    } else {
      button.textContent = t('locked');
      button.className = "owned";
      button.onclick = null;
    }
    return;

} else if (s !== "kostia" && s !== "metka" && s !== "seri") {
    let cost = prices[s];
    if (d.bonuses.discounts && d.bonuses.discounts[s] && Date.now() < d.bonuses.discounts[s]) {
        let discounted = Math.floor(cost * 0.85);
        button.innerHTML = `<span style="text-decoration:line-through; color:red; font-size:11px;">${cost}</span> ${t('buy')} ${discounted} KSPT`;
    } else {
        button.textContent = t('buy') + ` ${cost} KSPT`;
    }
    button.className = "";
    button.onclick = () => buySkin(s, cost);

} else {
    button.textContent = t('locked_promo');
    button.className = "owned";
    button.onclick = null;
}
}
});
}

function updateSkinPreviews() {
  const skinImageMap = {
    'default': 'kspt.png',
    'what': 'what.png',
    'burger': 'burger.png',
    'joost': 'joost.png',
    'dog': 'dog.png',
    'diam': 'diam.png',
    'tung': 'tung.png',
    'euro': 'e1.png',
    'space': 'sun.png',
    'pixe': 'pixe.png',
    'onion': 'onion.png',
    'cookie': 'cook.png',
    'mystic': 'piece.png',
    'capsule': 'capskine.png',
    'kostia': 'kostia.png',
    'metka': 'metka.png',
    'seri': 'seri.png',
    'artem': 'artem.png',
    // NEW SKINS PREVIEWS
    'ruka': 'ruka.png',
    'banditx': 'banditx.png',
    'goldcoin': 'goldcoin.png',
    'gkspt': 'gkspt.png',                
    'cyber_android': 'robotic.png',
    'dirty': 'dirty.png',
    'siulai': 'siulai.png',
    'crypto_heart': 'heart.png',
    'tetris': 'tetrisik.png',
    'joystick': 'dzoi.png',
    'snake': 'zmej.png',
    'brb': 'knopka.png'  
  };
  
   for (const [skin, img] of Object.entries(skinImageMap)) {
    const imgElement = document.getElementById(`skin-img-${skin}`);
    if (imgElement) {
      let isOwned = false;
      
      // Особые проверки для разных типов скинов
      if (skin === 'mystic') {
        isOwned = d.puzzleDone;
      } else if (skin === 'capsule') {
        isOwned = d.skins['capsule'];
      } else if (skin === 'gkspt' || skin === 'cyber_android') {
        isOwned = d.skins[skin] || false;  // Скины из капсулы
      } else if (skin === 'artem' || skin === 'kostia' || skin === 'metka' || skin === 'seri') {
        isOwned = d.skins[skin] || false;
      } else if (skin === 'dirty') {
      isOwned = d.skins[skin] || false;
      } else if (skin === 'siulai') {
  isOwned = d.skins && d.skins['siulai'] || d.puzzle2Done;  // Проверяем и владение, и завершение пазла ёпта
      } else {
        isOwned = d.skins[skin] || (skin === 'default');
      }
      
      if (isOwned) {
        imgElement.src = img;
      } else {
        imgElement.src = skin === 'gkspt' || skin === 'cyber_android' ? 'knowdont.png' : 'dontwhat.png';
      }
    }
  }
}

function updateBackground() {
  const now = Date.now();
  const body = document.body;
  
  if (!body) return;
  
  if (d.bonuses.tap2x.active && now < d.bonuses.tap2x.end) {
    body.style.backgroundImage = "url('fire.png')";
    body.style.backgroundColor = "transparent";
    return;
  } else if (d.bonuses.tap2x.active && now >= d.bonuses.tap2x.end) {
    d.bonuses.tap2x.active = false;
  }
  
  if (d.boost.active && now < d.boost.end) {
    body.style.backgroundImage = "url('ogon.png')";
    body.style.backgroundColor = "#220000";
  } else {
    if (d.boost.active && now >= d.boost.end) {
      d.boost.active = false;
    }

    // Проверяем фон из EK Shop (только если не выбран основной фон)
    try {
      const ekshopSelected = JSON.parse(localStorage.getItem('ekshop_selected') || '{}');
      const ekshopOwned = JSON.parse(localStorage.getItem('ekshop_owned') || '{}');

      // Если выбран основной фон (не default), то используем его
      const userHasOwnBg = !!(d && d.bg && d.bg !== 'default');
      
      // Если выбран скин из EK Shop, то НЕ применяем фон из EK Shop, даже если он выбран
      // если только пользователь явно не выбрал фон в EK Shop
      const hasEkshopSkinSelected = ekshopSelected.skin && ekshopOwned[ekshopSelected.skin];
      const hasEkshopBgSelected = ekshopSelected.bg && ekshopOwned[ekshopSelected.bg];
      
      // Применяем фон из EK Shop только если:
      // 1. Пользователь не выбрал основной фон (d.bg === 'default')
      // 2. В EK Shop явно выбран фон (hasEkshopBgSelected)
      // 3. В EK Shop НЕ выбран скин (или выбран, но также явно выбран фон)
      if (!userHasOwnBg && hasEkshopBgSelected && ekshopSelected.bg === 'bg_club') {
        body.style.backgroundImage = "url('cosmops.png')";
        body.style.backgroundColor = "transparent";
        return;
      }
    } catch(e) {
      console.warn('EK Shop background check failed:', e);
    }
    
    // Используем основной фон
    switch(d.bg) {
      case "default":
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#0b0b0b";
        break;
      case "forest":
        body.style.backgroundImage = "url('forest.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "space":
        body.style.backgroundImage = "url('star.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "ric":
        body.style.backgroundImage = "url('ric.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "heaven":
        body.style.backgroundImage = "url('heaven.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "bug":
        body.style.backgroundImage = "url('bug.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "chrisp":
        body.style.backgroundImage = "url('chrisp.png')";
        body.style.backgroundColor = "transparent";
        break;
      case 'hell':
        document.body.style.backgroundImage = "url('hell.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        break;
      case 'math':
        document.body.style.backgroundImage = "url('math.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        break;
      case "xfone":
        body.style.backgroundImage = "url('xfone.png')";
        body.style.backgroundColor = "transparent";
        break;
      default:
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#0b0b0b";
    }
  }
}

function updateTempBoostUI() {
  const btn = document.getElementById("btnTempBoost");
  const txt = document.getElementById("tempBoostTimer");
  if (!btn || !txt) return;
  
  const now = Date.now();
  if (d.boost.active && now < d.boost.end) {
    let secLeft = Math.ceil((d.boost.end - now) / 1000);
    txt.textContent = formatTemplate(t('active_seconds'), [secLeft]);
    txt.style.color = "#ff0000";
    btn.textContent = t('active');
    btn.className = "active";
    btn.onclick = null;
  } else if (now < d.boost.cdEnd) {
    let minLeft = Math.ceil((d.boost.cdEnd - now) / 60000);
    txt.textContent = formatTemplate(t('cooldown_minutes'), [minLeft]);
    txt.style.color = "#aaa";
    btn.textContent = t('cooldown');
    btn.className = "owned";
    btn.onclick = null;
  } else {
    txt.textContent = t('cooldown_ready');
    txt.style.color = "#2e7d32";
    btn.textContent = t('buy') + " 15 KSPT";
    btn.className = "";
    btn.onclick = buyTempBoost;
  }
}

function updateRegenUI() {
  const btn = document.getElementById("btnRegen");
  const info = document.getElementById("regenInfo");
  if (!btn || !info) return;
  
  let m = d.regenMult;
  if (m === 1) {
    info.textContent = formatTemplate(t('current_regen'), ['1x']);
    btn.textContent = formatTemplate(t('upgrade_to'), ['1.5x', '40 KSPT']);
    btn.onclick = buyRegenMult;
  } else if (m === 1.5) {
    info.textContent = formatTemplate(t('current_regen'), ['1.5x']);
    btn.textContent = formatTemplate(t('upgrade_to'), ['2x', '70 KSPT']);
    btn.onclick = buyRegenMult;
  } else if (m === 2) {
    info.textContent = formatTemplate(t('current_regen'), ['2x']);
    btn.textContent = formatTemplate(t('upgrade_to'), ['2.5x', '140 KSPT']);
    btn.onclick = buyRegenMult;
  } else if (m === 2.5) {
    info.textContent = formatTemplate(t('current_regen'), ['2.5x']);
    btn.textContent = formatTemplate(t('upgrade_to'), ['3x', '140 KSPT']);
    btn.onclick = buyRegenMult;
  } else {
    info.textContent = formatTemplate(t('current_regen'), ['3x (MAX)']);
    btn.textContent = t('maxed');
    btn.className = "owned";
    btn.onclick = null;
    return;
  }
  btn.className = "";
}

// NEW FUNCTION: Render cards tab
function renderCardsTab(tab) {
  const container = document.getElementById('cards-content');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (tab === 'company') {
    container.innerHTML = `
      <div class="cards-grid">
        <div class="card-item">
          <img src="per.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="personal_manager">Personal Manager</div>
          <div class="card-lvl" id="c1_lvl">Not Owned</div>
          <div class="card-sub" id="c1_income">+1.0 KSPT/h</div>
          <button id="btn_c1" onclick="buyCard(1, 'company')" class="card-item-button">Buy 25 KSPT</button>
        </div>

        <div class="card-item" id="card2_container">
          <img src="inv.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="investors">Investors</div>
          <div class="card-lvl" id="c2_lvl">Locked</div>
          <div class="card-sub" id="c2_income">+2.5 KSPT/h</div>
          <button id="btn_c2" onclick="buyCard(2, 'company')" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="card3_container">
          <img src="offi.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="office">Office</div>
          <div class="card-lvl" id="c3_lvl">Locked</div>
          <div class="card-sub" id="c3_income">+10.2 KSPT/h</div>
          <button id="btn_c3" onclick="buyCard(3, 'company')" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="card4_container">
          <img src="secu.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="security">Security</div>
          <div class="card-lvl" id="c4_lvl">Not Owned</div>
          <div class="card-sub" id="c4_income">+16.9 KSPT/h</div>
          <button id="btn_c4" onclick="buyCard(4, 'company')" class="card-item-button">Buy 910 KSPT</button>
        </div>

        <div class="card-item" id="card5_container">
          <img src="ite.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="it_equipment">IT Equipment</div>
          <div class="card-lvl" id="c5_lvl">Locked</div>
          <div class="card-sub" id="c5_income">+50.1 KSPT/h</div>
          <button id="btn_c5" onclick="buyCard(5, 'company')" class="card-item-button">Locked</button>
        </div>
      </div>
    `;
  } else if (tab === 'sport') {
    container.innerHTML = `
      <div class="cards-grid">
        <div class="card-item" id="sport1_container">
          <img src="futb.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="football">Football</div>
          <div class="card-lvl" id="s1_lvl">Not Owned</div>
          <div class="card-sub" id="s1_income">+1.5 KSPT/h</div>
          <button id="btn_s1" onclick="buySportCard(1)" class="card-item-button">Buy 80 KSPT</button>
        </div>

        <div class="card-item" id="sport2_container">
          <img src="basket.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="basketball">Basketball</div>
          <div class="card-lvl" id="s2_lvl">Not Owned</div>
          <div class="card-sub" id="s2_income">+3.0 KSPT/h</div>
          <button id="btn_s2" onclick="buySportCard(2)" class="card-item-button">Buy 210 KSPT</button>
        </div>

        <div class="card-item" id="sport3_container">
          <img src="voleyb.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="volleyball">Volleyball</div>
          <div class="card-lvl" id="s3_lvl">Not Owned</div>
          <div class="card-sub" id="s3_income">+1.1 KSPT/h</div>
          <button id="btn_s3" onclick="buySportCard(3)" class="card-item-button">Buy 40 KSPT</button>
        </div>

        <div class="card-item" id="sport4_container">
          <img src="hockey.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-title" data-lang-key="hockey">Hockey</div>
          <div class="card-lvl" id="s4_lvl">Locked</div>
          <div class="card-sub" id="s4_income">+5.4 KSPT/h</div>
          <button id="btn_s4" onclick="buySportCard(4)" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="sport5_container">
          <img src="handb.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="handball">Handball</div>
          <div class="card-lvl" id="s5_lvl">Locked</div>
          <div class="card-sub" id="s5_income">+0.8 KSPT/h</div>
          <button id="btn_s5" onclick="buySportCard(5)" class="card-item-button">Locked</button>
        </div>
      </div>
    `;
  } else if (tab === 'games') {
    container.innerHTML = `
      <div class="cards-grid">
        <div class="card-item" id="game1_container">
          <img src="chess.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="chess">Chess</div>
          <div class="card-lvl" id="g1_lvl">Not Owned</div>
          <div class="card-sub" id="g1_income">+5.8 KSPT/h</div>
          <button id="btn_g1" onclick="buyGameCard(1)" class="card-item-button">Buy 240 KSPT</button>
        </div>

        <div class="card-item" id="game2_container">
          <img src="bilia.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="billiards">Billiards</div>
          <div class="card-lvl" id="g2_lvl">Locked</div>
          <div class="card-sub" id="g2_income">+2.2 KSPT/h</div>
          <button id="btn_g2" onclick="buyGameCard(2)" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="game3_container">
          <img src="bouling.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="bowling">Bowling</div>
          <div class="card-lvl" id="g3_lvl">Not Owned</div>
          <div class="card-sub" id="g3_income">+5.1 KSPT/h</div>
          <button id="btn_g3" onclick="buyGameCard(3)" class="card-item-button">Buy 140 KSPT</button>
        </div>
      </div>
    `;
  }
  
  // Update texts in the rendered tab
  updateCardTexts();
}

// NEW: Render Limited tab
function renderLimitedTab() {
  const container = document.getElementById('cards-content');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Проверяем состояние limited карточек
  const l = d.limitedCards || {
    yes: { owned: false, bought: false },
    no: { owned: false, bought: false },
    stick: { owned: false, bought: false, appearedAt: 0, boughtAt: 0 },
    backpack: { owned: false, bought: false, appearedAt: 0, boughtAt: 0 },
    journey: { owned: false, level: -1 },
    challenge: { owned: false }
  };
  
  const now = Date.now();
  
  // Определяем, какая из Yes/No куплена
  const yesNoBought = l.yes.bought || l.no.bought;
  
  // Проверяем, появилась ли Stick (должна появиться после покупки Yes или No)
  const stickAppeared = yesNoBought || l.stick.appearedAt > 0;
  const stickTimeLeft = stickAppeared && l.stick.appearedAt > 0 ? 
    (l.stick.appearedAt + 7 * 24 * 60 * 60 * 1000) - now : 0;
  const stickAvailable = stickAppeared && stickTimeLeft > 0 && !l.stick.bought;
  
  // Проверяем, появилась ли Backpack (через 7 дней после появления Stick)
  const backpackAppeared = l.backpack.appearedAt > 0;
  const backpackTimeLeft = backpackAppeared ? 
    (l.backpack.appearedAt + 7 * 24 * 60 * 60 * 1000) - now : 0;
  const backpackAvailable = backpackAppeared && backpackTimeLeft > 0 && !l.backpack.bought;
  
  // Journey доступна только если куплена Stick
  const journeyAvailable = l.stick.bought && l.journey.level < 5;
  const journeyData = [
    { price: 14000, income: 71 },
    { price: 21000, income: 104 },
    { price: 36000, income: 163 },
    { price: 51000, income: 183 },
    { price: 72000, income: 268 },
    { price: 108000, income: 310 }
  ];
  const journeyLevel = l.journey.level >= 0 ? l.journey.level : 0;
  
  // Challenge доступна только если journey.level >= 5
  const challengeAvailable = l.journey.level >= 5;
  
  let html = '<div class="cards-grid">';
  
  // Карточка Yes
  html += `
    <div class="card-item ${l.yes.bought ? 'owned' : (l.no.bought ? 'disabled' : '')}">
      <img src="yes.png" class="card-item-image" onerror="this.src='dontwhat.png'">
      <div class="card-item-title">Yes</div>
      <div class="card-sub">+10 KSPT/h</div>
      ${l.yes.bought ? 
        '<button class="card-item-button active" disabled>Bought</button>' :
        (l.no.bought ?
          '<button class="card-item-button owned" disabled>Purchase Time Expired</button>' :
          '<button class="card-item-button" onclick="buyLimitedCard(\'yes\', 10000)">Buy 10000 KSPT</button>'
        )
      }
    </div>
  `;
  
  // Карточка No
  html += `
    <div class="card-item ${l.no.bought ? 'owned' : (l.yes.bought ? 'disabled' : '')}">
      <img src="no.png" class="card-item-image" onerror="this.src='dontwhat.png'">
      <div class="card-item-title">No</div>
      <div class="card-sub">+10 KSPT/h</div>
      ${l.no.bought ? 
        '<button class="card-item-button active" disabled>Bought</button>' :
        (l.yes.bought ?
          '<button class="card-item-button owned" disabled>Purchase Time Expired</button>' :
          '<button class="card-item-button" onclick="buyLimitedCard(\'no\', 10000)">Buy 10000 KSPT</button>'
        )
      }
    </div>
  `;
  
  // Карточка Stick (появляется после покупки Yes или No)
  if (stickAppeared) {
    html += `
      <div class="card-item ${l.stick.bought ? 'owned' : (!stickAvailable ? 'disabled' : '')}">
        <img src="stick.png" class="card-item-image" onerror="this.src='dontwhat.png'">
        <div class="card-item-title">Stick</div>
        <div class="card-sub">+21 KSPT/h</div>
        ${l.stick.bought ? 
          '<button class="card-item-button active" disabled>Bought</button>' :
          (stickAvailable ?
            `<button class="card-item-button" onclick="buyLimitedCard('stick', 22000)">Buy 22000 KSPT</button>
             <div class="card-sub" style="color:#ff9800; margin-top:5px;">Limited Time! ${formatTime(stickTimeLeft)}</div>` :
            '<button class="card-item-button owned" disabled>Purchase Time Expired</button>'
          )
        }
      </div>
    `;
  }
  
  // Карточка Backpack (появляется через 7 дней после Stick)
  if (backpackAppeared) {
    html += `
      <div class="card-item ${l.backpack.bought ? 'owned' : (!backpackAvailable ? 'disabled' : '')}">
        <img src="backpack.png" class="card-item-image" onerror="this.src='dontwhat.png'">
        <div class="card-item-title">Backpack</div>
        <div class="card-sub">+31 KSPT/h</div>
        ${l.backpack.bought ? 
          '<button class="card-item-button active" disabled>Bought</button>' :
          (backpackAvailable ?
            `<button class="card-item-button" onclick="buyLimitedCard('backpack', 31000)">Buy 31000 KSPT</button>
             <div class="card-sub" style="color:#ff9800; margin-top:5px;">Limited Time! ${formatTime(backpackTimeLeft)}</div>` :
            '<button class="card-item-button owned" disabled>Purchase Time Expired</button>'
          )
        }
      </div>
    `;
  }
  
  // Карточка Journey (доступна только если есть Stick)
  if (l.stick.bought) {
    html += `
      <div class="card-item">
        <img src="journey.png" class="card-item-image" onerror="this.src='dontwhat.png'">
        <div class="card-item-title">Journey</div>
        <div class="card-sub">Level ${journeyLevel + 1}/6</div>
        <div class="card-sub">+${journeyData[journeyLevel].income} KSPT/h</div>
        ${journeyAvailable ? 
          `<button class="card-item-button" onclick="buyJourneyLevel(${journeyLevel})">Upgrade ${journeyData[journeyLevel].price} KSPT</button>` :
          '<button class="card-item-button active" disabled>Max Level</button>'
        }
      </div>
    `;
  }
  
  // Карточка Challenge (автоматически выдается при 5 уровне Journey)
  if (challengeAvailable) {
    html += `
      <div class="card-item">
        <img src="records.png" class="card-item-image" onerror="this.src='dontwhat.png'">
        <div class="card-item-title">Challenge</div>
        <div class="card-sub">+80 KSPT/h</div>
        <button class="card-item-button active" disabled>Acquired</button>
      </div>
    `;
  }
  
  html += '</div>';
  container.innerHTML = html;
}

// Вспомогательная функция для форматирования времени
function formatTime(ms) {
  if (ms <= 0) return "Expired";
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}m`;
}

// NEW: Функция покупки лимитированных карточек
function buyLimitedCard(type, price) {
  if (!d.limitedCards) {
    d.limitedCards = {
      yes: { owned: false, bought: false },
      no: { owned: false, bought: false },
      stick: { owned: false, bought: false, appearedAt: 0, boughtAt: 0 },
      backpack: { owned: false, bought: false, appearedAt: 0, boughtAt: 0 },
      journey: { owned: false, level: -1 },
      challenge: { owned: false }
    };
  }
  
  const now = Date.now();
  
  // Проверяем, достаточно ли KSPT
  if (d.tokens < price) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  // Обработка покупки в зависимости от типа
  switch(type) {
    case 'yes':
      if (d.limitedCards.yes.bought || d.limitedCards.no.bought) return;
      d.tokens -= price;
      d.limitedCards.yes = { owned: true, bought: true };
      
      // Появляется Stick
      if (!d.limitedCards.stick.appearedAt) {
        d.limitedCards.stick.appearedAt = now;
      }
      break;
      
    case 'no':
      if (d.limitedCards.yes.bought || d.limitedCards.no.bought) return;
      d.tokens -= price;
      d.limitedCards.no = { owned: true, bought: true };
      
      // Появляется Stick
      if (!d.limitedCards.stick.appearedAt) {
        d.limitedCards.stick.appearedAt = now;
      }
      break;
      
    case 'stick':
      // Проверяем, доступна ли для покупки
      if (!d.limitedCards.stick.appearedAt || d.limitedCards.stick.bought) return;
      
      const stickTimeLeft = (d.limitedCards.stick.appearedAt + 7 * 24 * 60 * 60 * 1000) - now;
      if (stickTimeLeft <= 0) {
        showToast("Purchase Time Expired");
        return;
      }
      
      d.tokens -= price;
      d.limitedCards.stick = {
        owned: true,
        bought: true,
        appearedAt: d.limitedCards.stick.appearedAt,
        boughtAt: now
      };
      
      // Появляется Backpack через 7 дней
      setTimeout(() => {
        if (!d.limitedCards.backpack.appearedAt) {
          d.limitedCards.backpack.appearedAt = Date.now();
          save();
          if (document.getElementById('offlineShop')?.classList.contains('active')) {
            renderLimitedTab();
          }
        }
      }, 7 * 24 * 60 * 60 * 1000);
      break;
      
    case 'backpack':
      // Проверяем, доступна ли для покупки
      if (!d.limitedCards.backpack.appearedAt || d.limitedCards.backpack.bought) return;
      
      const backpackTimeLeft = (d.limitedCards.backpack.appearedAt + 7 * 24 * 60 * 60 * 1000) - now;
      if (backpackTimeLeft <= 0) {
        showToast("Purchase Time Expired");
        return;
      }
      
      d.tokens -= price;
      d.limitedCards.backpack = {
        owned: true,
        bought: true,
        appearedAt: d.limitedCards.backpack.appearedAt,
        boughtAt: now
      };
      break;
  }
  
  showToast(t('purchase_success'));
  save();
  
  // Обновляем UI
  if (document.getElementById('offlineShop')?.classList.contains('active')) {
    renderLimitedTab();
  }
  ui();
}

// NEW: Функция прокачки Journey
function buyJourneyLevel(currentLevel) {
  if (!d.limitedCards || !d.limitedCards.stick.bought) return;
  
  const journeyData = [
    { price: 14000, income: 71 },
    { price: 21000, income: 104 },
    { price: 36000, income: 163 },
    { price: 51000, income: 183 },
    { price: 72000, income: 268 },
    { price: 108000, income: 310 }
  ];
  
  const nextLevel = currentLevel + 1;
  if (nextLevel >= journeyData.length) return;
  
  const price = journeyData[nextLevel].price;
  
  if (d.tokens < price) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= price;
  d.limitedCards.journey.level = nextLevel;
  
  // Проверяем, достигнут ли 5 уровень
  if (nextLevel >= 5) {
    // Выдаем золотую капсулу
    if (!d.goldCapsule) d.goldCapsule = { obtained: false, opened: false, taps: 0, lastOpen: 0 };
    d.goldCapsule.obtained = true;
    d.goldCapsule.opened = false;
    d.goldCapsule.taps = 0;
    
    // Выдаем карточку Challenge
    d.limitedCards.challenge.owned = true;
    
    // Показываем сообщение
    showToast("Quest completed! This is your reward.");
    
    // Автоматически открываем золотую капсулу
    setTimeout(() => {
      startGoldCapsuleSequence();
    }, 1000);
  }
  
  showToast(t('purchase_success'));
  save();
  
  // Обновляем UI
  if (document.getElementById('offlineShop')?.classList.contains('active')) {
    renderLimitedTab();
  }
  ui();
}

// NEW FUNCTION: Show card tab
function showCardTab(tab) {
  // Update active tab
  document.querySelectorAll('.cardik-tabs button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`tab-${tab}`).classList.add('active');
  
  // Update header image
  const headerImg = document.getElementById('cardikHeader');
  if (tab === 'company') headerImg.src = 'cardik.png';
  else if (tab === 'sport') headerImg.src = 'cardik1.png';
  else if (tab === 'games') headerImg.src = 'cardik2.png';
  else if (tab === 'limited') headerImg.src = 'cardik3.png';
  
  // Render cards for this tab
  if (tab === 'limited') {
    renderLimitedTab();
  } else {
    renderCardsTab(tab);
  }
  
  updateCardTexts();
  updateCardUI();
}

function updateCardUI() {
  // Company cards
  for (let i = 1; i <= 5; i++) {
    const key = "c" + i;
    const rawLvl = d.cards ? d.cards[key] : undefined;
    let lvl = Number(rawLvl);
    if (isNaN(lvl)) lvl = -1;
    const data = CARDS[i].levels;
    const btn = document.getElementById("btn_c" + i);
    const txtLvl = document.getElementById("c" + i + "_lvl");
    const txtInc = document.getElementById("c" + i + "_income");
    
    if (!btn || !txtLvl || !txtInc) continue;
    
    if (lvl === 5) {
      txtLvl.textContent = t('level_max');
      txtInc.textContent = "+" + data[5].income + " KSPT/h";
      btn.textContent = t('maxed');
      btn.className = "owned";
      btn.onclick = null;
    } else {
      let nextLvl = lvl + 1;
      let cost = data[nextLvl].price;
      let nextInc = data[nextLvl].income;
      
      if (lvl === -1) {
        txtLvl.textContent = t('not_owned');
        txtInc.textContent = "+" + nextInc + " KSPT/h";
        btn.textContent = t('buy') + ` ${cost} KSPT`;
      } else {
        txtLvl.textContent = formatTemplate(t('level'), [lvl + 1]);
        txtInc.textContent = formatTemplate(t('current_upgrade'), [data[lvl].income, nextInc]);
        btn.textContent = t('upgrade') + ` ${cost} KSPT`;
      }
      btn.className = "";
      btn.onclick = () => buyCard(i, 'company');
    }
  }
  
  // Sport cards
  for (let i = 1; i <= 5; i++) {
    const key = "s" + i;
    const lvl = d.cards[key];
    const data = CARDS[key].levels;
    const btn = document.getElementById("btn_s" + i);
    const txtLvl = document.getElementById("s" + i + "_lvl");
    const txtInc = document.getElementById("s" + i + "_income");
    
    if (!btn || !txtLvl || !txtInc) continue;
    
    if (lvl === 5) {
      txtLvl.textContent = t('level_max');
      txtInc.textContent = "+" + data[5].income + " KSPT/h";
      btn.textContent = t('maxed');
      btn.className = "owned";
      btn.onclick = null;
    } else {
      let nextLvl = lvl + 1;
      let cost = data[nextLvl].price;
      let nextInc = data[nextLvl].income;
      
      if (lvl === -1) {
        txtLvl.textContent = t('not_owned');
        txtInc.textContent = "+" + nextInc + " KSPT/h";
        btn.textContent = t('buy') + ` ${cost} KSPT`;
      } else {
        txtLvl.textContent = formatTemplate(t('level'), [lvl + 1]);
        txtInc.textContent = formatTemplate(t('current_upgrade'), [data[lvl].income, nextInc]);
        btn.textContent = t('upgrade') + ` ${cost} KSPT`;
      }
      btn.className = "";
      btn.onclick = () => buySportCard(i);
    }
  }
  
  // Game cards
  for (let i = 1; i <= 3; i++) {
    const key = "g" + i;
    const lvl = d.cards[key];
    const data = CARDS[key].levels;
    const btn = document.getElementById("btn_g" + i);
    const txtLvl = document.getElementById("g" + i + "_lvl");
    const txtInc = document.getElementById("g" + i + "_income");
    
    if (!btn || !txtLvl || !txtInc) continue;
    
    if (lvl === 5) {
      txtLvl.textContent = t('level_max');
      txtInc.textContent = "+" + data[5].income + " KSPT/h";
      btn.textContent = t('maxed');
      btn.className = "owned";
      btn.onclick = null;
    } else {
      let nextLvl = lvl + 1;
      let cost = data[nextLvl].price;
      let nextInc = data[nextLvl].income;
      
      if (lvl === -1) {
        txtLvl.textContent = t('not_owned');
        txtInc.textContent = "+" + nextInc + " KSPT/h";
        btn.textContent = t('buy') + ` ${cost} KSPT`;
      } else {
        txtLvl.textContent = formatTemplate(t('level'), [lvl + 1]);
        txtInc.textContent = formatTemplate(t('current_upgrade'), [data[lvl].income, nextInc]);
        btn.textContent = t('upgrade') + ` ${cost} KSPT`;
      }
      btn.className = "";
      btn.onclick = () => buyGameCard(i);
    }
  }
  
  // Unlock conditions
  const c2Div = document.getElementById("card2_container");
  if (c2Div) {
    if (d.cards.c1 >= 3) {
      c2Div.style.filter = "none";
      const btn = document.getElementById("btn_c2");
      if (btn) btn.disabled = false;
    } else {
      c2Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_c2");
      if (btn) {
        btn.textContent = formatTemplate(t('unlock_condition'), ['Personal Manager Level 3']);
        btn.disabled = true;
      }
    }
  }
  
  const c3Div = document.getElementById("card3_container");
  if (c3Div) {
    if (d.cards.c2 >= 1) {
      c3Div.style.filter = "none";
      const btn = document.getElementById("btn_c3");
      if (btn) btn.disabled = false;
    } else {
      c3Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_c3");
      if (btn) {
        btn.textContent = formatTemplate(t('unlock_condition'), ['Investors Level 2']);
        btn.disabled = true;
      }
    }
  }
  
  const c5Div = document.getElementById("card5_container");
  if (c5Div) {
    if (d.cards.c4 >= 3) {
      c5Div.style.filter = "none";
      const btn = document.getElementById("btn_c5");
      if (btn) btn.disabled = false;
    } else {
      c5Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_c5");
      if (btn) {
        btn.textContent = formatTemplate(t('unlock_condition'), ['Security Level 4']);
        btn.disabled = true;
      }
    }
  }
  
  // Sport unlock conditions
  const s4Div = document.getElementById("sport4_container");
  if (s4Div) {
    if (d.cards.s2 >= 4) {
      s4Div.style.filter = "none";
      const btn = document.getElementById("btn_s4");
      if (btn) btn.disabled = false;
    } else {
      s4Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_s4");
      if (btn) {
        btn.textContent = formatTemplate(t('unlock_condition'), ['Basketball Level 4']);
        btn.disabled = true;
      }
    }
  }
  
  const s5Div = document.getElementById("sport5_container");
  if (s5Div) {
    if (d.cards.s3 >= 3) {
      s5Div.style.filter = "none";
      const btn = document.getElementById("btn_s5");
      if (btn) btn.disabled = false;
    } else {
      s5Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_s5");
      if (btn) {
        btn.textContent = formatTemplate(t('unlock_condition'), ['Volleyball Level 3']);
        btn.disabled = true;
      }
    }
  }
  
  // Game unlock conditions
  const g2Div = document.getElementById("game2_container");
  if (g2Div) {
    if (d.cards.g1 >= 2) {
      g2Div.style.filter = "none";
      const btn = document.getElementById("btn_g2");
      if (btn) btn.disabled = false;
    } else {
      g2Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_g2");
      if (btn) {
        btn.textContent = formatTemplate(t('unlock_condition'), ['Chess Level 2']);
        btn.disabled = true;
      }
    }
  }
}

function updatePuzzleUI() {
  let ownedCount = 0;
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById("pz" + (i + 1));
    if (cell) {
      if (d.puzzles[i] === 1) {
        cell.classList.add("filled");
        ownedCount++;
      } else {
        cell.classList.remove("filled");
      }
    }
  }
  
  const statusElem = document.getElementById("puzzleStatus");
  if (statusElem) statusElem.textContent = formatTemplate(t('owned_progress'), [ownedCount]);

  const fullImg = document.getElementById("puzzleFull");
  const completedText = document.getElementById("puzzleCompletedText");
  const placeBtn = document.getElementById("btnPlacePiece");
  
  if (ownedCount === 9 && !d.puzzleDone) {
    d.puzzleDone = true;
    d.puzzleDoneTime = Date.now();
    if (!d.skins['mystic']) {
      d.skins['mystic'] = 1;
      showToast(t('puzzle_complete'));
    }
  }
  
  if (d.puzzleDone) {
    if (fullImg) fullImg.style.display = "block";
    if (completedText) completedText.style.display = "block";
    if (placeBtn) placeBtn.style.display = "none";
  } else {
    if (fullImg) fullImg.style.display = "none";
    if (completedText) completedText.style.display = "none";
    if (placeBtn) placeBtn.style.display = ownedCount > 0 ? "block" : "none";
  }
}

function checkSecondPuzzleCompletion() {
  if (d.puzzle2Done) return;
  
  let allCollected = true;
  for (let i = 0; i < 9; i++) {
    if (d.puzzles2[i] !== 1) {
      allCollected = false;
      break;
    }
  }
  
  if (allCollected) {
    d.puzzle2Done = true;
    
    // Разблокируем скин siulai
    if (!d.skins) d.skins = {};
    if (!d.skins['siulai']) {
      d.skins['siulai'] = 1;
      showToast("Cat: KSPT skin unlocked!");
    }
    
    // Разблокируем музыку siulai
    if (!d.ownedMusic) d.ownedMusic = [];
    if (!d.ownedMusic.includes('siulai')) {
      d.ownedMusic.push('siulai');
      showToast("Cat's Yarn music unlocked!");
    }
    
    // Показываем карточку скина
    const skinCard = document.getElementById('skinCardSiulai');
    if (skinCard) {
      skinCard.style.display = "block";
    }
    
    save();
    updateSkinButtons();
    updateSkinPreviews();
    updateMusicUI();
  }
}

function updateSecondPuzzleUI() {
  const card = document.getElementById("secondPuzzleCard");
  const statusElem = document.getElementById("puzzleStatus2");
  const fullImg = document.getElementById("puzzleFull2");
  const completedText = document.getElementById("puzzleCompletedText2");
  const placeBtn = document.getElementById("btnPlacePiece2");
  const now = Date.now();

  if (!d.puzzleDone) {
    if (card) card.style.display = "none";
    return;
  }

  const delay = 24 * 60 * 60 * 1000;
  const unlockTime = (d.puzzleDoneTime || 0) + delay;

  if (now < unlockTime) {
    let timer = document.getElementById("puzzleTimer");
    if (!timer) {
      timer = document.createElement('div');
      timer.id = "puzzleTimer";
      timer.style.cssText = "color:#ff9800; font-weight:bold; margin-top:10px;";
      const controls = document.querySelector("#pz1")?.closest(".puzzle-controls");
      if (controls) controls.appendChild(timer);
    }
    const remaining = unlockTime - now;
    const h = String(Math.floor(remaining / 3600000)).padStart(2,'0');
    const m = String(Math.floor((remaining % 3600000) / 60000)).padStart(2,'0');
    const s = String(Math.floor((remaining % 60000) / 1000)).padStart(2,'0');
    timer.textContent = `Next puzzle in ${h}:${m}:${s}`;
    timer.style.display = "block";
    if (card) card.style.display = "none";
    return;
  }

  if (card) card.style.display = "block";
  const timerElem = document.getElementById("puzzleTimer");
  if (timerElem) timerElem.style.display = "none";

  let ownedCount2 = 0;
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById("pz2_" + (i + 1));
    if (cell) {
      if (d.puzzles2[i] === 1) {
        cell.classList.add("filled");
        ownedCount2++;
      } else {
        cell.classList.remove("filled");
      }
    }
  }
  
  if (statusElem) statusElem.textContent = `Owned: ${ownedCount2}/9`;

  // ИСПРАВЛЕНИЕ: Добавляем проверку на завершение пазла
  if (ownedCount2 === 9 && !d.puzzle2Done) {
    d.puzzle2Done = true;
    
    // Инициализируем объекты, если их нет
    if (!d.skins) d.skins = {};
    if (!d.ownedMusic) d.ownedMusic = [];
    
    // Разблокируем скин siulai
    if (!d.skins['siulai']) {
      d.skins['siulai'] = 1;
      showToast("Cat: KSPT skin unlocked!");
    }
    
    // Разблокируем музыку siulai
    if (!d.ownedMusic.includes('siulai')) {
      d.ownedMusic.push('siulai');
      showToast("Cat's Yarn music unlocked!");
    }
    
    // Сохраняем изменения
    save();
    
    // Обновляем UI
    updateSkinButtons();
    updateSkinPreviews();
    updateMusicUI();
  }

  if (d.puzzle2Done) {
    if (fullImg) fullImg.style.display = "block";
    if (completedText) completedText.style.display = "block";
    if (placeBtn) placeBtn.style.display = "none";
    if (statusElem) statusElem.textContent = "Complete!";
  } else {
    if (fullImg) fullImg.style.display = "none";
    if (completedText) completedText.style.display = "none";
    if (placeBtn) placeBtn.style.display = ownedCount2 > 0 ? "inline-block" : "none";
  }
}

function updateCapsuleUI() {
  const btn = document.getElementById("btnOpenCapsule");
  const txt = document.getElementById("capsuleTimer");
  if (!btn || !txt) return;
  
  const now = Date.now();
  const cooldownTime = 23 * 60 * 60 * 1000;
  
  if (d.capsule.firstOpen) {
    txt.textContent = t('first_open_free');
    btn.style.background = "#ff9800";
    btn.textContent = t('open');
    btn.onclick = startCapsuleSequence;
    return;
  }
  
  let diff = now - d.capsule.lastOpen;
  if (diff >= cooldownTime) {
    txt.textContent = t('ready');
    btn.style.background = "#ff9800";
    btn.textContent = t('open');
    btn.className = "";
    btn.onclick = startCapsuleSequence;
  } else {
    let wait = cooldownTime - diff;
    let h = Math.floor(wait / (1000 * 60 * 60));
    let m = Math.floor((wait % (1000 * 60 * 60)) / (1000 * 60));
    txt.textContent = formatTemplate(t('cooldown_hours'), [h, m]);
    btn.style.background = "#333";
    btn.textContent = t('wait');
    btn.className = "owned";
    btn.onclick = null;
  }
}

function updateSettingsUI() {
  if (!document.getElementById('settings')?.classList.contains('active')) return;
  
  const skinsAnimToggle = document.getElementById('toggleSkinsAnim');
  const transitionsToggle = document.getElementById('toggleTransitions');
  const tapVibToggle = document.getElementById('toggleTapVib');
  const buttonVibToggle = document.getElementById('toggleButtonVib');
  
  if (skinsAnimToggle && d.settings && d.settings.animation) {
    skinsAnimToggle.checked = d.settings.animation.skins;
  }
  if (transitionsToggle && d.settings && d.settings.animation) {
    transitionsToggle.checked = d.settings.animation.transitions;
  }
  if (tapVibToggle && d.settings && d.settings.vibration) {
    tapVibToggle.checked = d.settings.vibration.tapsEnabled;
  }
  if (buttonVibToggle && d.settings && d.settings.vibration) {
    buttonVibToggle.checked = d.settings.vibration.buttonsEnabled;
  }
  
  // FIX 4: Added xfone to bgButtons array
  const bgButtons = [
    {id: 'bg-btn-default', key: 'default', price: 0},
    {id: 'bg-btn-forest', key: 'forest', price: 320},
    {id: 'bg-btn-space', key: 'space', price: 0},
    {id: 'bg-btn-ric', key: 'ric', price: 5120},
    {id: 'bg-btn-heaven', key: 'heaven', price: 0},
    {id: 'bg-btn-bug', key: 'bug', price: 0},
    {id: 'bg-btn-chrisp', key: 'chrisp', price: 0},
    {id: 'bg-btn-xfone', key: 'xfone', price: 0},
    {id: 'bg-btn-hell', key: 'hell', price: 0},
    {id: 'bg-btn-math', key: 'math', price: 0}
  ];
  
  bgButtons.forEach(bg => {
    const btn = document.getElementById(bg.id);
    if (!btn) return;
    
    if (d.bg === bg.key) {
      btn.textContent = t('selected');
      btn.className = "active";
      btn.onclick = null;
    } else if (d.ownedBgs.includes(bg.key)) {
      btn.textContent = t('select');
      btn.className = "";
      btn.onclick = () => equipBackground(bg.key);
    } else {
      if (bg.key === 'space') {
        btn.textContent = t('locked_buy');
        btn.className = "owned";
        btn.onclick = null;
      } else if (bg.key === 'heaven') {
        btn.textContent = t('locked');
        btn.className = "owned";
        btn.onclick = null;
      } else if (bg.key === 'bug') {
        btn.textContent = t('locked');
        btn.className = "owned";
        btn.onclick = null;
      } else if (bg.key === 'chrisp') {
        if (d.skins && d.skins['cookie']) {
          if (d.bg === 'chrisp') {
            btn.textContent = t('selected');
            btn.className = "active";
            btn.onclick = null;
          } else {
            btn.textContent = t('select');
            btn.className = "";
            btn.onclick = () => equipBackground('chrisp');
          }
        } else {
          btn.textContent = t('locked_buy_cookie');
          btn.className = "owned";
          btn.onclick = null;
        }
      } else if (bg.key === 'xfone') {
        if (d.skins && d.skins['banditx']) {
          if (d.bg === 'xfone') {
            btn.textContent = t('selected');
            btn.className = "active";
            btn.onclick = null;
          } else {
            btn.textContent = t('select');
            btn.className = "";
            btn.onclick = () => equipBackground('xfone');
          }
        } else {
          btn.textContent = 'Locked (Buy Bandit X Skin)';
          btn.className = "owned";
          btn.onclick = null;
        }
      } else {
        // ИЗМЕНИТЕ ЭТОТ БЛОК:
        if (bg.price === 0 && bg.key !== 'default') {
          btn.textContent = t('locked');
          btn.className = "owned";
          btn.onclick = null;
        } else {
          btn.textContent = t('buy') + ` ${bg.price} KSPT`;
          btn.className = "";
          btn.onclick = () => buyBackground(bg.key, bg.price);
        }
      }
    } // закрытие else
  }); // закрытие forEach

  const vibButtons = [
    {id: "vib-off", level: "off"},
    {id: "vib-low", level: "low"},
    {id: "vib-med", level: "medium"},
    {id: "vib-str", level: "strong"}
  ];
  
  vibButtons.forEach(vib => {
    const btn = document.getElementById(vib.id);
    if (btn) {
      if (d.vibration === vib.level) {
        btn.classList.add("active");
        btn.style.background = "#2e7d32";
      } else {
        btn.classList.remove("active");
        btn.style.background = "#262626";
      }
      btn.onclick = () => setVibration(vib.level);
    }
  });
  
  updateMusicUI();

 const toggle3DEffectCheckbox = document.getElementById('toggle3DEffect');
    if (toggle3DEffectCheckbox && d.settings && d.settings.animation) {
        // Используем правильное значение
        toggle3DEffectCheckbox.checked = d.settings.animation.coin3d !== false;
    }
}

function updateMusicUI() {
  const misticBtn = document.getElementById("btn-music-mistic");
  if (misticBtn) {
    if (d.music === "mistic" && !d.musicMuted) {
      misticBtn.textContent = t('active');
      misticBtn.className = "active";
      misticBtn.onclick = null;
    } else {
      misticBtn.textContent = t('select');
      misticBtn.className = "";
      misticBtn.onclick = () => setMusic('mistic');
    }
  }
  
  const gabberBtn = document.getElementById("btn-music-gabber");
  if (gabberBtn) {
    if (d.music === "gabber" && !d.musicMuted) {
      gabberBtn.textContent = t('active');
      gabberBtn.className = "active";
      gabberBtn.onclick = () => setMusic('gabber');
    } else if (d.ownedMusic.includes("gabber")) {
      gabberBtn.textContent = t('select');
      gabberBtn.className = "";
      gabberBtn.onclick = () => setMusic('gabber');
    } else {
      gabberBtn.textContent = t('buy') + " 210 KSPT";
      gabberBtn.className = "";
      gabberBtn.onclick = () => buyMusic('gabber', 210);
    }
  }
  
  const onionRow = document.getElementById("music-onion-row");
  if (onionRow) onionRow.style.display = "flex";
  
  const onionBtn = document.getElementById("btn-music-onion");
  if (onionBtn) {
    if (d.skins["onion"]) {
      if (d.music === "onion" && !d.musicMuted) {
        onionBtn.textContent = t('active');
        onionBtn.className = "active";
        onionBtn.onclick = () => setMusic('onion');
      } else {
        onionBtn.textContent = t('select');
        onionBtn.className = "";
        onionBtn.onclick = () => setMusic('onion');
      }
    } else {
      onionBtn.textContent = t('locked');
      onionBtn.className = "owned";
      onionBtn.onclick = null;
    }
  }
  
  const calmBtn = document.getElementById("btn-music-calm");
  if (calmBtn) {
    if (d.ownedMusic.includes("calm")) {
      if (d.music === "calm" && !d.musicMuted) {
        calmBtn.textContent = t('active');
        calmBtn.className = "active";
        calmBtn.onclick = () => setMusic('calm');
      } else {
        calmBtn.textContent = t('select');
        calmBtn.className = "";
        calmBtn.onclick = () => setMusic('calm');
      }
    } else {
      calmBtn.textContent = t('locked');
      calmBtn.className = "owned";
      calmBtn.onclick = null;
    }
  }

  const siulaiBtn = document.getElementById("btn-music-siulai");
if (siulaiBtn) {
  // Проверяем, есть ли скин siulai у игрока
  if (d.skins && d.skins['siulai']) {
    // Если скин есть, разблокируем музыку (если еще не разблокирована)
    if (!d.ownedMusic.includes('siulai')) {
      d.ownedMusic.push('siulai');
      showToast(t('cat_music_unlocked'));
      save();
    }
    
    if (d.music === "siulai" && !d.musicMuted) {
      siulaiBtn.textContent = t('active');
      siulaiBtn.className = "active";
      siulaiBtn.onclick = null;
    } else {
      siulaiBtn.textContent = t('select');
      siulaiBtn.className = "";
      siulaiBtn.onclick = () => setMusic('siulai');
    }
  } else {
    siulaiBtn.textContent = t('locked');
    siulaiBtn.className = "owned";
    siulaiBtn.onclick = null;
  }
}
  
  const funnyBtn = document.getElementById('btn-music-funny');
if (funnyBtn) {
    if (d.ownedMusic && d.ownedMusic.includes('funny')) {
        if (d.music === 'funny' && !d.musicMuted) {
            funnyBtn.textContent = t('active');
            funnyBtn.className = "active";
            funnyBtn.onclick = null;
        } else {
            funnyBtn.textContent = t('select');
            funnyBtn.className = "";
            funnyBtn.onclick = () => setMusic('funny');
        }
     } else {
        funnyBtn.textContent = t('locked');
        funnyBtn.className = "owned";
        funnyBtn.onclick = null;
    }
}
}

function toggle3DEffect(enabled) {
  if (!d.settings) d.settings = {};
  if (!d.settings.animation) d.settings.animation = {};
  
  d.settings.animation.coin3d = enabled;
  save();
  
  if (enabled) {
    init3DCoin();
  } else {
    disable3DEffect();
  }
  
  updateSettingsUI();
}

// ==========================================
// MARKET FUNCTIONS
// ==========================================

let marketInitialized = false;
let lastMarketUpdate = 0;

function initMarketReferences() {
  marketDOMRefs.priceKSPT = document.getElementById('price-ksptToken-value');
  marketDOMRefs.priceBANX = document.getElementById('price-banxToken-value');
  marketDOMRefs.pricePersonal = document.getElementById('price-personalToken-value');
  marketDOMRefs.priceJVM = document.getElementById('price-jvmToken-value');
  marketDOMRefs.portfolioValue = document.getElementById('market-portfolio-value');
  marketDOMRefs.chartCanvas = document.getElementById('priceChart');

  if (marketDOMRefs.chartCanvas) {
    marketDOMRefs.chartCtx = marketDOMRefs.chartCanvas.getContext('2d');
  }

  const now = Date.now();
  if (now - lastMarketUpdate < 1000) {
    return;
  }
  lastMarketUpdate = now;
}
  
  // Save focused input state if any
  let focused = null;
  let selectionStart = 0;
  let selectionEnd = 0;
  let inputValue = '';
  
  if (focusedInput) {
    focused = focusedInput;
    selectionStart = focused.selectionStart;
    selectionEnd = focused.selectionEnd;
    inputValue = focused.value;
  }
  
  if (currentMarketView === 'main') {
    marketTicker();
    
    // Update only text nodes, not entire DOM
    if (marketDOMRefs.priceKSPT) {
      marketDOMRefs.priceKSPT.textContent = formatNumber(d.market.ksptToken.price, 2);
    }
    
    if (marketDOMRefs.priceBANX) {
      marketDOMRefs.priceBANX.textContent = formatNumber(d.market.banxToken.price, 5);
    }
    
    if (marketDOMRefs.priceJVM) {
      marketDOMRefs.priceJVM.textContent = formatNumber(d.market.jvmToken.price, 2);
    }
    
    if (marketDOMRefs.pricePersonal && d.market.personalToken) {
      marketDOMRefs.pricePersonal.textContent = formatNumber(d.market.personalToken.price, 4);
    }
    
    if (marketDOMRefs.portfolioValue) {
      let totalValue = (d.market.ksptToken.owned * d.market.ksptToken.price);
      if (d.market.banxToken) {
        totalValue += (d.market.banxToken.owned * d.market.banxToken.price);
      }
      if (d.market.jvmToken) {
        totalValue += (d.market.jvmToken.owned * d.market.jvmToken.price);
      }
      if (d.market.personalToken) {
        totalValue += (d.market.personalToken.owned * d.market.personalToken.price);
      }
      marketDOMRefs.portfolioValue.textContent = formatNumber(totalValue, 2) + " KSPT";
    }
  } else if (currentMarketView === 'trade' && selectedToken) {
    marketTicker();
    
    let tokenData;
    if (selectedToken === 'ksptToken') tokenData = d.market.ksptToken;
    else if (selectedToken === 'banxToken') tokenData = d.market.banxToken;
    else if (selectedToken === 'jvmToken') tokenData = d.market.jvmToken;
    else if (selectedToken === 'personalToken') tokenData = d.market.personalToken;
    
    if (tokenData && marketDOMRefs.priceContainer && marketDOMRefs.priceArrow) {
      const lastPrice = tokenData.history[tokenData.history.length - 2] || tokenData.price;
      const diff = tokenData.price - lastPrice;
      const colorClass = diff >= 0 ? "price-up" : "price-down";
      const arrow = diff >= 0 ? "▲" : "▼";
      
      const priceValueElem = document.getElementById('trade-price-value');
      if (priceValueElem) {
        if (selectedToken === 'ksptToken' || selectedToken === 'jvmToken') {
          priceValueElem.textContent = formatNumber(tokenData.price, 2);
        } else if (selectedToken === 'banxToken') {
          priceValueElem.textContent = formatNumber(tokenData.price, 5);
        } else {
          priceValueElem.textContent = formatNumber(tokenData.price, 4);
        }
      }
      
      marketDOMRefs.priceContainer.className = colorClass;
      marketDOMRefs.priceArrow.textContent = arrow;
    }
    
    if (now % 3000 < 100) {
      drawChart();
    }
  }
  
  // Restore focused input state
  if (focused) {
    focused.value = inputValue;
    focused.setSelectionRange(selectionStart, selectionEnd);
    focused.focus();
  }
  
  updateBuyCooldownInfo();

function updateMarketPrices() {
  if (!document.getElementById("market")?.classList.contains("active")) {
    return;
  }
  
  const now = Date.now();
  if (now - lastMarketUpdate < 1000) {
    return;
  }
  lastMarketUpdate = now;
  
  // Save focused input state if any
  let focused = null;
  let selectionStart = 0;
  let selectionEnd = 0;
  let inputValue = '';
  
  if (focusedInput) {
    focused = focusedInput;
    selectionStart = focused.selectionStart;
    selectionEnd = focused.selectionEnd;
    inputValue = focused.value;
  }
  
  if (currentMarketView === 'main') {
    marketTicker();
    
    // Update only text nodes, not entire DOM
    if (marketDOMRefs.priceKSPT) {
      marketDOMRefs.priceKSPT.textContent = formatNumber(d.market.ksptToken.price, 2);
    }
    
    if (marketDOMRefs.priceBANX) {
      marketDOMRefs.priceBANX.textContent = formatNumber(d.market.banxToken.price, 5);
    }
    
    if (marketDOMRefs.priceJVM) {
      marketDOMRefs.priceJVM.textContent = formatNumber(d.market.jvmToken.price, 2);
    }
    
    if (marketDOMRefs.pricePersonal && d.market.personalToken) {
      marketDOMRefs.pricePersonal.textContent = formatNumber(d.market.personalToken.price, 4);
    }
    
    if (marketDOMRefs.portfolioValue) {
      let totalValue = (d.market.ksptToken.owned * d.market.ksptToken.price);
      if (d.market.banxToken) {
        totalValue += (d.market.banxToken.owned * d.market.banxToken.price);
      }
      if (d.market.jvmToken) {
        totalValue += (d.market.jvmToken.owned * d.market.jvmToken.price);
      }
      if (d.market.personalToken) {
        totalValue += (d.market.personalToken.owned * d.market.personalToken.price);
      }
      marketDOMRefs.portfolioValue.textContent = formatNumber(totalValue, 2) + " KSPT";
    }
  } else if (currentMarketView === 'trade' && selectedToken) {
    marketTicker();
    
    let tokenData;
    if (selectedToken === 'ksptToken') tokenData = d.market.ksptToken;
    else if (selectedToken === 'banxToken') tokenData = d.market.banxToken;
    else if (selectedToken === 'jvmToken') tokenData = d.market.jvmToken;
    else if (selectedToken === 'personalToken') tokenData = d.market.personalToken;
    
    if (tokenData && marketDOMRefs.priceContainer && marketDOMRefs.priceArrow) {
      const lastPrice = tokenData.history[tokenData.history.length - 2] || tokenData.price;
      const diff = tokenData.price - lastPrice;
      const colorClass = diff >= 0 ? "price-up" : "price-down";
      const arrow = diff >= 0 ? "▲" : "▼";
      
      const priceValueElem = document.getElementById('trade-price-value');
      if (priceValueElem) {
        if (selectedToken === 'ksptToken' || selectedToken === 'jvmToken') {
          priceValueElem.textContent = formatNumber(tokenData.price, 2);
        } else if (selectedToken === 'banxToken') {
          priceValueElem.textContent = formatNumber(tokenData.price, 5);
        } else {
          priceValueElem.textContent = formatNumber(tokenData.price, 4);
        }
      }
      
      marketDOMRefs.priceContainer.className = colorClass;
      marketDOMRefs.priceArrow.textContent = arrow;
    }
    
    if (now % 3000 < 100) {
      drawChart();
    }
  }
  
  // Restore focused input state
  if (focused) {
    focused.value = inputValue;
    focused.setSelectionRange(selectionStart, selectionEnd);
    focused.focus();
  }
  
  updateBuyCooldownInfo();
}

// ==========================================
// 3D COIN ROTATION EFFECT
// ==========================================

function init3DCoin() {
  const coinContainer = document.getElementById('coin3dContainer');
  const coin3d = document.getElementById('coin3d');
  
  if (!coinContainer || !coin3d) return;
  
  // Сначала отключаем старые обработчики
  disable3DEffect();
  
  // Добавляем класс для активации 3D эффекта
  coinContainer.classList.add('three-d-enabled');
  
  let mouseX = 0;
  let mouseY = 0;
  let rotateX = 0;
  let rotateY = 0;
  let isHovering = false;
  let isTouching = false;
  let lastTouchX = 0;
  let lastTouchY = 0;
  const sensitivity = 0.2;
  
  // Функции-обработчики
  const mouseEnterHandler = () => {
    if (!coinContainer.classList.contains('three-d-enabled')) return;
    isHovering = true;
  };
  
  const mouseLeaveHandler = () => {
    if (!coinContainer.classList.contains('three-d-enabled')) return;
    isHovering = false;
    
    // Плавный возврат в исходное положение
    coin3d.style.transition = 'transform 0.5s ease';
    coin3d.style.transform = 'rotateY(0deg) rotateX(0deg)';
    
    setTimeout(() => {
      coin3d.style.transition = 'transform 0.1s ease-out';
    }, 500);
  };
  
  const mouseMoveHandler = (e) => {
    if (!coinContainer.classList.contains('three-d-enabled') || !isHovering) return;
    
    const rect = coinContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX = e.clientX - centerX;
    mouseY = e.clientY - centerY;
    
    rotateY = mouseX * sensitivity;
    rotateX = -mouseY * sensitivity;
    
    coin3d.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };
  
  // ВАЖНОЕ ИСПРАВЛЕНИЕ: Добавляем обработчик pointerdown для пропуска событий
  const pointerDownHandler = (e) => {
    // Разрешаем событию пройти дальше (не блокируем)
    if (e.cancelable) {
      e.stopPropagation(); // Останавливаем всплытие, но не блокируем
    }
  };
  
  const touchStartHandler = (e) => {
    if (!coinContainer.classList.contains('three-d-enabled')) return;
    // ВАЖНО: не вызываем e.preventDefault() - это позволяет событию пройти дальше
    isTouching = true;
    
    const touch = e.touches[0];
    const rect = coinContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    lastTouchX = touch.clientX;
    lastTouchY = touch.clientY;
    
    mouseX = touch.clientX - centerX;
    mouseY = touch.clientY - centerY;
    
    rotateY = mouseX * sensitivity;
    rotateX = -mouseY * sensitivity;
    
    coin3d.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };
  
  const touchMoveHandler = (e) => {
    if (!coinContainer.classList.contains('three-d-enabled') || !isTouching) return;
    
    const touch = e.touches[0];
    const rect = coinContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = touch.clientX - lastTouchX;
    const deltaY = touch.clientY - lastTouchY;
    
    rotateY += deltaX * sensitivity;
    rotateX -= deltaY * sensitivity;
    
    rotateX = Math.max(-30, Math.min(30, rotateX));
    rotateY = Math.max(-30, Math.min(30, rotateY));
    
    coin3d.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    
    lastTouchX = touch.clientX;
    lastTouchY = touch.clientY;
  };
  
  const touchEndHandler = (e) => {
    if (!coinContainer.classList.contains('three-d-enabled') || !isTouching) return;
    isTouching = false;
    
    coin3d.style.transition = 'transform 0.5s ease';
    coin3d.style.transform = 'rotateY(0deg) rotateX(0deg)';
    
    setTimeout(() => {
      coin3d.style.transition = 'transform 0.1s ease-out';
    }, 500);
  };
  
  // Сохраняем ссылки на обработчики
  threeDHandlers.mouseEnter = mouseEnterHandler;
  threeDHandlers.mouseLeave = mouseLeaveHandler;
  threeDHandlers.mouseMove = mouseMoveHandler;
  threeDHandlers.pointerDown = pointerDownHandler; // Новый обработчик
  threeDHandlers.touchStart = touchStartHandler;
  threeDHandlers.touchMove = touchMoveHandler;
  threeDHandlers.touchEnd = touchEndHandler;
  
  // Добавляем обработчики
  coinContainer.addEventListener('mouseenter', mouseEnterHandler);
  coinContainer.addEventListener('mouseleave', mouseLeaveHandler);
  document.addEventListener('mousemove', mouseMoveHandler);
  
  // ВАЖНО: Добавляем pointerdown с passive:true чтобы не блокировать клики
  coinContainer.addEventListener('pointerdown', pointerDownHandler, { passive: true });
  coinContainer.addEventListener('touchstart', touchStartHandler, { passive: true }); // passive: true разрешает прокрутку
  document.addEventListener('touchmove', touchMoveHandler, { passive: true });
  document.addEventListener('touchend', touchEndHandler);
}

function disable3DEffect() {
  const coinContainer = document.getElementById('coin3dContainer');
  const coin3d = document.getElementById('coin3d');
  
  if (!coinContainer || !coin3d) return;
  
  // Удаляем все обработчики
  if (threeDHandlers.mouseEnter) {
    coinContainer.removeEventListener('mouseenter', threeDHandlers.mouseEnter);
  }
  if (threeDHandlers.mouseLeave) {
    coinContainer.removeEventListener('mouseleave', threeDHandlers.mouseLeave);
  }
  if (threeDHandlers.mouseMove) {
    document.removeEventListener('mousemove', threeDHandlers.mouseMove);
  }
  if (threeDHandlers.touchStart) {
    coinContainer.removeEventListener('touchstart', threeDHandlers.touchStart);
  }
  if (threeDHandlers.touchMove) {
    document.removeEventListener('touchmove', threeDHandlers.touchMove);
  }
  if (threeDHandlers.touchEnd) {
    document.removeEventListener('touchend', threeDHandlers.touchEnd);
  }
  
  // Сбрасываем трансформацию
  coin3d.style.transition = 'transform 0.5s ease';
  coin3d.style.transform = 'none';
  
  // Удаляем класс
  coinContainer.classList.remove('three-d-enabled');
  
  // Сбрасываем обработчики
  threeDHandlers = {
    mouseEnter: null,
    mouseLeave: null,
    mouseMove: null,
    touchStart: null,
    touchMove: null,
    touchEnd: null
  };
}

// ===== АКТИВАЦИЯ 3D ЭФФЕКТА ПРИ ЗАГРУЗКЕ =====
// В функции initGame() добавьте вызов init3DCoin после инициализации настроек:
function initGame() {
  console.log('initGame called');

 // Инициализация вкладок событий
  showIventTab('puzzle'); // По умолчанию показываем пазлы
}
  
    // 3D эффект монеты - ИСПРАВЛЕННАЯ ЛОГИКА
  const coin3dEnabled = d.settings && d.settings.animation && d.settings.animation.coin3d !== false;
  
  // Обновляем UI переключателя
const toggle3DEffectCheckbox = document.getElementById('toggle3DEffect');
if (toggle3DEffectCheckbox) {
  toggle3DEffectCheckbox.checked = coin3dEnabled;
}

// Контейнер монеты
const coinContainer = document.getElementById('coin3dContainer');

// Инициализируем / отключаем 3D эффект
if (coin3dEnabled) {
  if (coinContainer) {
    coinContainer.classList.add('three-d-enabled');
  }

  // Инициализируем с небольшой задержкой
  setTimeout(() => {
    init3DCoin();
  }, 100);

} else {
  disable3DEffect();

  if (coinContainer) {
    coinContainer.classList.remove('three-d-enabled');
  }

   if (document.getElementById('capsuleScreen')?.classList.contains('active')) {
    showIventTab('puzzle');
  }

   // Сброс трансформации
    const coin3d = document.getElementById('coin3d');
    if (coin3d) {
      coin3d.style.transform = 'none';
    }
  }


function updateBuyCooldownInfo() {
  const now = Date.now();
  const timeSinceLastBuy = now - lastMarketBuyTime;
  const cooldownRemaining = 40000 - timeSinceLastBuy;
  
  const cooldownElem = document.getElementById("buyCooldownInfo");
  if (cooldownElem) {
    if (cooldownRemaining > 0) {
      cooldownElem.textContent = formatTemplate(t('buy_cooldown'), [(cooldownRemaining/1000).toFixed(1)]);
      cooldownElem.style.color = "#d32f2f";
    } else {
      cooldownElem.textContent = t('buy_cooldown_ready');
      cooldownElem.style.color = "#2e7d32";
    }
  }
}

function setupCustomKeyboard() {
  const keyboard = document.getElementById('customKeyboard');
  const keys = keyboard.querySelectorAll('.keyboard-key');
  
  // Удалить старые обработчики чтобы избежать дублирования
  keys.forEach(key => {
    key.replaceWith(key.cloneNode(true));
  });
  
  // Получить новые элементы после клонирования
  const newKeys = keyboard.querySelectorAll('.keyboard-key');
  
  newKeys.forEach(key => {
    key.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const keyValue = this.getAttribute('data-key');
      const input = currentKeyboardInput;
      
      if (!input) return;
      
      if (keyValue === 'backspace') {
        input.value = input.value.slice(0, -1);
      } else if (keyValue === 'done') {
        hideCustomKeyboard();
      } else if (keyValue === '.') {
        if (!input.value.includes('.')) {
          input.value += '.';
        }
      } else {
        // Добавляем только один символ
        input.value += keyValue;
      }
      
      // Инициируем событие input только один раз
      setTimeout(() => {
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }, 10);
    }, { once: false });
  });
}

function showCustomKeyboard(inputElement) {
  currentKeyboardInput = inputElement;
  focusedInput = inputElement;
  const keyboard = document.getElementById('customKeyboard');
  keyboard.classList.add('active');
  
  inputElement.blur();
  inputElement.readOnly = true;
  
  keyboard.style.bottom = '65px';
}

function hideCustomKeyboard() {
  const keyboard = document.getElementById('customKeyboard');
  keyboard.classList.remove('active');
  
  if (currentKeyboardInput) {
    currentKeyboardInput.readOnly = false;
    currentKeyboardInput = null;
  }
  focusedInput = null;
}

function handleTokenImageSelection(file) {
  if (!file || !file.type.match('image.*')) {
    showToast(t('invalid_image'));
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      cropData.image = img;
      cropData.scale = 100;
      cropData.x = 0;
      cropData.y = 0;
      
      const cropModal = document.getElementById('cropModal');
      const cropImage = document.getElementById('cropImage');
      const cropZoom = document.getElementById('cropZoom');
      
      cropImage.src = e.target.result;
      cropZoom.value = 100;
      
      cropModal.classList.add('active');
      
      setupCropInteractions();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function setupCropInteractions() {
  const cropImage = document.getElementById('cropImage');
  const cropZoom = document.getElementById('cropZoom');
  
  cropZoom.oninput = function() {
    cropData.scale = parseInt(this.value);
    updateCropImage();
  };
  
  let isDragging = false;
  let startX, startY;
  
  cropImage.addEventListener('mousedown', startDrag);
  cropImage.addEventListener('touchstart', function(e) {
    e.preventDefault();
    const touch = e.touches[0];
    startDrag({ clientX: touch.clientX, clientY: touch.clientY });
  });
  
  function startDrag(e) {
    isDragging = true;
    startX = e.clientX - cropData.x;
    startY = e.clientY - cropData.y;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', function(e) {
      e.preventDefault();
      const touch = e.touches[0];
      drag({ clientX: touch.clientX, clientY: touch.clientY });
    });
    
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
  }
  
  function drag(e) {
    if (!isDragging) return;
    cropData.x = e.clientX - startX;
    cropData.y = e.clientY - startY;
    updateCropImage();
  }
  
  function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  }
  
  updateCropImage();
}

function updateCropImage() {
  const cropImage = document.getElementById('cropImage');
  if (!cropImage) return;
  
  const scale = cropData.scale / 100;
  cropImage.style.transform = `translate(${cropData.x}px, ${cropData.y}px) scale(${scale})`;
}

function cancelCrop() {
  const cropModal = document.getElementById('cropModal');
  cropModal.classList.remove('active');
  cropData.image = null;
}

function applyCrop() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 200;
  canvas.height = 200;
  
  ctx.save();
  ctx.beginPath();
  ctx.arc(100, 100, 100, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  
  const img = cropData.image;
  const scale = cropData.scale / 100;
  const containerSize = 300;
  
  const srcX = -cropData.x / scale;
  const srcY = -cropData.y / scale;
  const srcSize = containerSize / scale;
  
  ctx.drawImage(img, srcX, srcY, srcSize, srcSize, 0, 0, 200, 200);
  
  ctx.restore();
  
  const dataURL = canvas.toDataURL('image/png');
  
  tokenImageCache = dataURL;
  localStorage.setItem('kspt_token_image_cache', dataURL);
  
  const preview = document.getElementById('tokenImagePreview');
  if (preview) {
    preview.style.backgroundImage = `url('${dataURL}')`;
    preview.dataset.imageData = dataURL;
  }
  
  cancelCrop();
  showToast(t('image_cropped'));
}

function renderTradeView() {
  const container = document.getElementById("marketContainer");
  if (!container) return;
  
  let tokenData, tokenName, tokenIcon, sellButtonText, priceFormat;
  
  if (selectedToken === 'ksptToken') {
    tokenData = d.market.ksptToken;
    tokenName = "KSP TOKEN";
    tokenIcon = "kspt.png";
    sellButtonText = formatTemplate(t('sell_token'), ['KSP']);
    priceFormat = 2;
  } else if (selectedToken === 'banxToken') {
    tokenData = d.market.banxToken;
    tokenName = "BANX";
    tokenIcon = "bandit.png";
    sellButtonText = formatTemplate(t('sell_token'), ['BSNX']);
    priceFormat = 5;
  } else if (selectedToken === 'jvmToken') {
    tokenData = d.market.jvmToken;
    tokenName = "JVM";
    tokenIcon = "jvm.png";
    sellButtonText = formatTemplate(t('sell_token'), ['JVM']);
    priceFormat = 2;
  } else if (selectedToken === 'personalToken') {
    tokenData = d.market.personalToken;
    tokenName = tokenData.ticker || 'PERS';
    tokenIcon = tokenData.icon || 'what.png';
    sellButtonText = formatTemplate(t('sell_token'), [tokenData.ticker || 'PERS']);
    priceFormat = 4;
  } else {
    return;
  }
  
  const lastPrice = tokenData.history[tokenData.history.length - 2] || tokenData.price;
  const diff = tokenData.price - lastPrice;
  const colorClass = diff >= 0 ? "price-up" : "price-down";
  const arrow = diff >= 0 ? "▲" : "▼";
  
  container.innerHTML = `
    <div class="top-bar">
      ${tokenIcon.startsWith('data:') ? 
        `<img src="${tokenIcon}" style="width:32px;height:32px;border-radius:50%;" onerror="this.src='kspt.png'">` :
        `<img src="${tokenIcon}" onerror="this.src='kspt.png'">`
      }
      <span style="font-weight:bold">${tokenName}</span>
      <img src="iks.png" class="close-x" onclick="closeTrade()">
    </div>
    
    <div class="card">
      <div id="trade-price-container" style="font-size: 32px; font-weight:bold; text-align:center; margin-bottom:5px;" class="${colorClass}">
        <span id="trade-price-value">${priceFormat === 2 ? formatNumber(tokenData.price, 2) : priceFormat === 5 ? formatNumber(tokenData.price, 5) : formatNumber(tokenData.price, 4)}</span> KSPT 
        <span id="trade-price-arrow" style="font-size:16px">${arrow}</span>
      </div>
      <div style="text-align:center; color:#666; font-size:12px; margin-bottom:15px;">${t('live_price')}</div>
      
      <div class="chart-container" id="chartBox">
        <div class="chart-label">
          <label style="font-size:12px; color:#aaa;">
            <input type="checkbox" id="toggleLastTrades" ${showLastTrades ? 'checked' : ''} onchange="toggleLastTrades(this.checked)">
            ${t('show_last_trades')}
          </label>
        </div>
        <canvas id="priceChart" class="chart-canvas"></canvas>
        <div id="chartTooltip" class="price-tooltip"></div>
      </div>
      <div style="text-align:center; font-size:11px; color:#666; margin-top:5px;">${t('drag_to_pan')}</div>
    </div>
    
    <div class="card">
      <div class="card-title">${t('your_holdings')}</div>
      <div class="button-row" style="margin-bottom:10px; border-bottom:1px solid #333; padding-bottom:10px;">
        <div>${t('owned_simple')}: <span style="color:#ff9800">${tokenData.owned.toFixed(2)}</span></div>
        <div>${t('value')}: ${(tokenData.owned * tokenData.price).toFixed(2)} KSPT</div>
      </div>
      
      <div class="input-group">
        <input type="text" id="tradeAmount" placeholder="${t('amount')}" readonly onfocus="showCustomKeyboard(this)">
      </div>
      
      <div class="button-row">
        <button style="background:#2e7d32" onclick="buyToken()">${t('buy')} (KSPT)</button>
        <button style="background:#d32f2f" onclick="sellToken()">${sellButtonText}</button>
      </div>
      <div style="text-align:center; font-size:11px; color:#666; margin-top:5px;">
        ${formatTemplate(t('buy_limit'), [selectedToken === 'ksptToken' ? '5 - 200' : selectedToken === 'banxToken' ? '0.01 - 50' : selectedToken === 'jvmToken' ? '5 - 250' : '0.1 - 100'])} | ${t('sell_cooldown')}
      </div>
      <div id="buyCooldownInfo" style="text-align:center; font-size:11px; color:#666; margin-top:5px;"></div>
    </div>
  `;
  
  setTimeout(() => {
    initMarketReferences();
    setupChartDrag();
    drawChart();
  }, 50);
  
  updateBuyCooldownInfo();
}

function setupChartDrag() {
  const canvas = document.getElementById('priceChart');
  if (!canvas) return;
  
  canvas.addEventListener('mousedown', startChartDrag);
  canvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    const touch = e.touches[0];
    startChartDrag({ clientX: touch.clientX, clientY: touch.clientY });
  });
  
  function startChartDrag(e) {
    chartIsDragging = true;
    chartDragStartX = e.clientX;
    chartDragStartOffset = getTokenData().chartOffset || 0;
    
    document.addEventListener('mousemove', chartDrag);
    document.addEventListener('touchmove', function(e) {
      e.preventDefault();
      const touch = e.touches[0];
      chartDrag({ clientX: touch.clientX, clientY: touch.clientY });
    });
    
    document.addEventListener('mouseup', stopChartDrag);
    document.addEventListener('touchend', stopChartDrag);
  }
  
  function chartDrag(e) {
    if (!chartIsDragging) return;
    
    const tokenData = getTokenData();
    if (!tokenData) return;
    
    const deltaX = e.clientX - chartDragStartX;
    const pixelsPerOffset = 10;
    const offsetDelta = Math.round(deltaX / pixelsPerOffset);
    
    tokenData.chartOffset = Math.max(0, Math.min(tokenData.history.length - 5, chartDragStartOffset + offsetDelta));
    drawChart();
  }
  
  function stopChartDrag() {
    chartIsDragging = false;
    document.removeEventListener('mousemove', chartDrag);
    document.removeEventListener('mouseup', stopChartDrag);
  }
}

function getTokenData() {
  if (!selectedToken) return null;
  
  if (selectedToken === 'ksptToken') return d.market.ksptToken;
  else if (selectedToken === 'banxToken') return d.market.banxToken;
  else if (selectedToken === 'jvmToken') return d.market.jvmToken;
  else if (selectedToken === 'personalToken') return d.market.personalToken;
  return null;
}

function toggleLastTrades(checked) {
  showLastTrades = checked;
  drawChart();
}

function initMarketUI() {
  if (marketInitialized) return;
  
  const container = document.getElementById("marketContainer");
  if (!container) return;
  
  if (!d.market.introSeen) {
    container.innerHTML = `
      <div class="market-intro">
        <h1>${t('market')}</h1>
        <p>${t('market_desc')}</p>
        <button onclick="enterMarket()" style="background:#ff9800; color:#000; padding:12px 24px; border-radius:12px; margin-top:20px;">${t('enter_market')}</button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <div class="top-bar">
      <img src="kspt.png">
      <span>${t('market')}</span>
      <img src="iks.png" class="close-x" onclick="openScreen('main')">
    </div>
    
    <div class="account-box">
      <div class="acc-header">
        <div>
          <div class="acc-name">${d.market.account.name}</div>
          <div class="acc-desc">${d.market.account.desc}</div>
        </div>
        <button class="acc-edit-btn" onclick="editAccount()">${t('edit')}</button>
      </div>
      
      <div class="portfolio-row">
        <span>${t('portfolio_value')}:</span>
        <span id="market-portfolio-value" style="color:#ff9800">0.00 KSPT</span>
      </div>
    </div>
    
    <div class="card">
      <div class="card-title">${t('available_tokens')}</div>
      <div class="market-list-item" onclick="openTrade('ksptToken')">
        <img src="kspt.png" class="token-icon">
        <div class="token-info">
          <div class="token-name">KSP TOKEN</div>
          <div class="token-price">${t('price')}: <span id="price-ksptToken-value">${formatNumber(d.market.ksptToken.price, 2)}</span> KSPT</div>
        </div>
      </div>
      
      <div class="market-list-item" onclick="openTrade('banxToken')">
        <img src="bandit.png" class="token-icon" onerror="this.src='kspt.png'">
        <div class="token-info">
          <div class="token-name">BANX</div>
          <div class="token-price">${t('price')}: <span id="price-banxToken-value">${formatNumber(d.market.banxToken.price, 5)}</span> KSPT</div>
        </div>
      </div>
      
      <div class="market-list-item" onclick="openTrade('jvmToken')">
        <img src="jvm.png" class="token-icon" onerror="this.src='kspt.png'">
        <div class="token-info">
          <div class="token-name">JVM</div>
          <div class="token-price">${t('price')}: <span id="price-jvmToken-value">${formatNumber(d.market.jvmToken.price, 2)}</span> KSPT</div>
        </div>
      </div>
      
      ${d.market.personalToken ? `
        <div class="market-list-item" onclick="openTrade('personalToken')">
          ${d.market.personalToken.icon.startsWith('data:') ? 
            `<img src="${d.market.personalToken.icon}" class="token-icon" style="object-fit:cover;" onerror="this.src='kspt.png'">` :
            `<img src="${d.market.personalToken.icon}" class="token-icon" onerror="this.src='kspt.png'">`
          }
          <div class="token-info">
            <div class="token-name">${d.market.personalToken.ticker}</div>
            <div class="token-price">${t('price')}: <span id="price-personalToken-value">${formatNumber(d.market.personalToken.price, 4)}</span> KSPT</div>
          </div>
        </div>
      ` : ''}
    </div>
    
    <div class="card">
      <div class="card-title">${t('personal_token')}</div>
      <div class="card-sub">${t('create_token_desc')}</div>
      <button onclick="createPersonalToken()" style="background:#ff9800; color:#000; margin-bottom:10px;">${t('create_token')} (899 KSPT)</button>
      ${d.market.personalToken ? `
        <button onclick="deletePersonalToken()" style="background:#d32f2f;">${t('delete_token')}</button>
        <div style="font-size:11px; color:#666; margin-top:5px;">${t('delete_warning')}</div>
      ` : ''}
    </div>
  `;
  
  marketInitialized = true;
  initMarketReferences();
}

function updateMarketUI() {
  if (!document.getElementById("market")?.classList.contains("active")) {
    return;
  }
  
  if (currentMarketView === 'main') {
    if (!marketInitialized) {
      initMarketUI();
    }
    // Обновляем цены при каждом вызове
    updateMarketPrices();
  } else if (currentMarketView === 'trade') {
    renderTradeView();
  } else if (currentMarketView === 'createToken') {
    renderTokenCreationForm();
  }
}

function drawChart() {
  const canvas = document.getElementById("priceChart");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  const container = document.getElementById("chartBox");
  if (!container) return;
  
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  
  let history = [];
  let tokenData = getTokenData();
  if (!tokenData) return;
  
  history = tokenData.history;
  if (history.length < 2) return;
  
  const offset = tokenData.chartOffset || 0;
  const windowSize = Math.min(10, history.length);
  const startIdx = Math.max(0, history.length - windowSize - offset);
  const endIdx = history.length - offset;
  const displayHistory = history.slice(startIdx, endIdx);
  
  if (displayHistory.length < 2) return;
  
  let min = Math.min(...displayHistory);
  let max = Math.max(...displayHistory);
  let range = max - min;
  if (range === 0) range = 1;
  
  let padding = 20;
  let w = canvas.width;
  let h = canvas.height;
  
  ctx.clearRect(0, 0, w, h);
  
  // Draw grid lines
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 1;
  
  // Horizontal grid lines
  for (let i = 0; i <= 5; i++) {
    const y = padding + (i * (h - 2 * padding) / 5);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(w - padding, y);
    ctx.stroke();
    
    // Price labels
    const price = max - (i * range / 5);
    ctx.fillStyle = "#666";
    ctx.font = "10px Arial";
    const priceText = selectedToken === 'banxToken' ? formatNumber(price, 5) : 
                     selectedToken === 'ksptToken' || selectedToken === 'jvmToken' ? formatNumber(price, 2) : 
                     formatNumber(price, 4);
    ctx.fillText(priceText, 5, y + 3);
  }
  
  // Draw last trade lines if enabled
  if (showLastTrades) {
    // Last buy line (green)
    if (tokenData.lastUserBuyPrice !== null && tokenData.lastUserBuyPrice !== undefined) {
      const buyY = h - ((tokenData.lastUserBuyPrice - min) / range) * (h - 2 * padding) - padding;
      if (buyY >= padding && buyY <= h - padding) {
        ctx.beginPath();
        ctx.strokeStyle = "#2e7d32";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, buyY);
        ctx.lineTo(w - padding, buyY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = "#2e7d32";
        ctx.font = "bold 10px Arial";
        const buyPriceText = selectedToken === 'banxToken' ? formatNumber(tokenData.lastUserBuyPrice, 5) : 
                           selectedToken === 'ksptToken' || selectedToken === 'jvmToken' ? formatNumber(tokenData.lastUserBuyPrice, 2) : 
                           formatNumber(tokenData.lastUserBuyPrice, 4);
        ctx.fillText(`${t('buy_at')} ${buyPriceText}`, padding + 5, buyY - 5);
      }
    }
    
    // Last sell line (red)
    if (tokenData.lastUserSellPrice !== null && tokenData.lastUserSellPrice !== undefined) {
      const sellY = h - ((tokenData.lastUserSellPrice - min) / range) * (h - 2 * padding) - padding;
      if (sellY >= padding && sellY <= h - padding) {
        ctx.beginPath();
        ctx.strokeStyle = "#d32f2f";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, sellY);
        ctx.lineTo(w - padding, sellY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = "#d32f2f";
        ctx.font = "bold 10px Arial";
        const sellPriceText = selectedToken === 'banxToken' ? formatNumber(tokenData.lastUserSellPrice, 5) : 
                            selectedToken === 'ksptToken' || selectedToken === 'jvmToken' ? formatNumber(tokenData.lastUserSellPrice, 2) : 
                            formatNumber(tokenData.lastUserSellPrice, 4);
        ctx.fillText(`${t('sell_at')} ${sellPriceText}`, padding + 5, sellY + 15);
      }
    }
  }
  
  // Draw price line
  ctx.beginPath();
  ctx.strokeStyle = "#aaa";
  ctx.lineWidth = 2;
  
  let points = [];
  for (let i = 0; i < displayHistory.length; i++) {
    let x = (i / (displayHistory.length - 1)) * (w - 2 * padding) + padding;
    let y = h - ((displayHistory[i] - min) / range) * (h - 2 * padding) - padding;
    points.push({x, y, val: displayHistory[i], prev: displayHistory[Math.max(0, i - 1)]});
    
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  
  // Draw data points
  points.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  
  canvas.onclick = function(e) {
    let rect = canvas.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    
    let closest = points.reduce((prev, curr) => {
      return (Math.abs(curr.x - clickX) < Math.abs(prev.x - clickX) ? curr : prev);
    });
    
    let change = closest.val - closest.prev;
    let sign = change >= 0 ? "+" : "";
    const priceText = selectedToken === 'banxToken' ? formatNumber(closest.val, 5) : 
                     selectedToken === 'ksptToken' || selectedToken === 'jvmToken' ? formatNumber(closest.val, 2) : 
                     formatNumber(closest.val, 4);
    const changeText = selectedToken === 'banxToken' ? formatNumber(change, 5) : 
                      selectedToken === 'ksptToken' || selectedToken === 'jvmToken' ? formatNumber(change, 2) : 
                      formatNumber(change, 4);
    let txt = `${t('price')}: ${priceText} (${sign}${changeText})`;
    
    let tooltip = document.getElementById("chartTooltip");
    if (tooltip) {
      tooltip.style.display = "block";
      tooltip.style.left = (closest.x - 40) + "px";
      tooltip.style.top = (closest.y - 30) + "px";
      tooltip.textContent = txt;
      
      setTimeout(() => tooltip.style.display = "none", 2000);
    }
  };
}

function renderTokenCreationForm() {
  const container = document.getElementById("marketContainer");
  if (!container) return;
  
  let imagePreview = tokenImageCache || 'what.png';
  
  container.innerHTML = `
    <div class="top-bar">
      <img src="what.png">
      <span style="font-weight:bold">${t('create_token')}</span>
      <img src="iks.png" class="close-x" onclick="closeTokenCreation()">
    </div>
    
    <div class="card">
      <div class="card-title">${t('token_details')}</div>
      <div class="card-sub">${t('create_token_desc')}</div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('ticker_label')}</div>
        <input type="text" id="tokenTicker" placeholder="PERS" maxlength="5">
      </div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('name_label')}</div>
        <input type="text" id="tokenName" placeholder="${t('my_token')}" maxlength="20">
      </div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('desc_label')}</div>
        <input type="text" id="tokenDesc" placeholder="${t('token_desc')}">
      </div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('supply_label')}</div>
        <input type="number" id="tokenSupply" placeholder="1000" min="100" max="99999">
      </div>
      
      <div style="margin-bottom: 15px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('token_icon')}</div>
        <div id="tokenImagePreview" style="width: 60px; height: 60px; background: #222; border-radius: 50%; margin-bottom: 10px; background-size: cover; background-position: center; background-image: url('${imagePreview}');"></div>
        <input type="file" id="tokenImageUpload" accept="image/*" style="display: none;">
        <button onclick="document.getElementById('tokenImageUpload').click()" style="width: auto; padding: 8px 15px; background: #444; margin-bottom: 10px;">${t('upload_image')}</button>
        <div style="font-size: 11px; color: #666;">${t('default_icon')}</div>
      </div>
      
      <div style="border-top: 1px solid #333; padding-top: 15px; margin-top: 15px;">
        <div style="font-size: 13px; margin-bottom: 10px; color: #aaa;">${t('creation_cost')}: <span style="color: #ff9800;">899 KSPT</span></div>
        <button onclick="confirmTokenCreation()" style="background: #ff9800; color: #000; font-weight: bold;">${t('create_token')}</button>
        <button onclick="closeTokenCreation()" style="margin-top: 8px; background: #444;">${t('cancel')}</button>
      </div>
    </div>
  `;
  
  const fileInput = document.getElementById('tokenImageUpload');
  if (fileInput) {
    fileInput.onchange = function(e) {
      const file = e.target.files[0];
      if (file) {
        handleTokenImageSelection(file);
      }
    };
  }
  
  const preview = document.getElementById('tokenImagePreview');
  if (preview && tokenImageCache) {
    preview.dataset.imageData = tokenImageCache;
  }
}

function closeTokenCreation() {
  currentMarketView = 'main';
  marketInitialized = false;
  updateMarketUI();
}

function confirmTokenCreation() {
  const ticker = document.getElementById('tokenTicker')?.value.trim().toUpperCase();
  const name = document.getElementById('tokenName')?.value.trim();
  const description = document.getElementById('tokenDesc')?.value.trim();
  const supply = parseInt(document.getElementById('tokenSupply')?.value);
  
  if (!ticker || ticker.length < 3 || ticker.length > 5) {
    showToast(t('ticker_error'));
    return;
  }
  
  if (!name || name.length > 20) {
    showToast(t('name_error'));
    return;
  }
  
  if (!description || description.length < 10 || description.length > 250) {
    showToast(t('desc_error'));
    return;
  }
  
  if (!supply || supply < 100 || supply > 99999) {
    showToast(t('supply_error'));
    return;
  }
  
  if (d.tokens < 899) {
    showToast(formatTemplate(t('need_kspt'), [899]));
    return;
  }
  
  let icon = 'what.png';
  const preview = document.getElementById('tokenImagePreview');
  if (preview && preview.dataset.imageData) {
    icon = preview.dataset.imageData;
  }
  
  const initialPrice = 899 / supply;
  
  if (confirm(formatTemplate(t('confirm_token'), [ticker, name, supply, initialPrice.toFixed(4), 899]))) {
    d.tokens -= 899;
    d.market.personalToken = {
      ticker: ticker,
      name: name,
      description: description,
      creatorName: d.market.account.name,
      supply: supply,
      owned: 0,
      lastBuyTime: 0,
      lastUserBuyPrice: null,
      lastUserSellPrice: null,
      price: initialPrice,
      history: Array(20).fill(initialPrice),
      lastUpdate: Date.now(),
      icon: icon,
      createdAt: Date.now(),
      chartOffset: 0
    };
    
    // Save to localStorage for persistence
    localStorage.setItem('kspt_user_tokens', JSON.stringify(d.market.personalToken));
    
    tokenImageCache = null;
    localStorage.removeItem('kspt_token_image_cache');
    
    showToast(t('token_created'));
    save();
    currentMarketView = 'main';
    marketInitialized = false;
    updateMarketUI();
    ui();
  }
}

function enterMarket() {
  d.market.introSeen = true;
  save();
  marketInitialized = false;
  updateMarketUI();
}

function editAccount() {
  let newName = prompt(t('enter_name'), d.market.account.name);
  if (!newName) return;
  
  let newDesc = prompt(t('enter_desc'), d.market.account.desc);
  if (!newDesc || newDesc.length < 5 || newDesc.length > 80) {
    showToast(t('desc_length'));
    return;
  }
  
  d.market.account.name = newName;
  d.market.account.desc = newDesc;
  save();
  marketInitialized = false;
  updateMarketUI();
}

function createPersonalToken() {
  currentMarketView = 'createToken';
  updateMarketUI();
}

function deletePersonalToken() {
  if (!d.market.personalToken) return;
  
  const now = Date.now();
  const created = d.market.personalToken.createdAt;
  const hoursPassed = (now - created) / (1000 * 60 * 60);
  
  if (hoursPassed < 24) {
    showToast(formatTemplate(t('delete_wait'), [Math.ceil(24 - hoursPassed)]));
    return;
  }
  
  let warningMsg = t('delete_warning_msg');
  if (d.market.personalToken.owned > 0) {
    warningMsg += formatTemplate(t('delete_sell_warning'), [d.market.personalToken.owned.toFixed(2), d.market.personalToken.price.toFixed(4)]);
  }
  warningMsg += t('delete_final_warning');
  
  if (confirm(warningMsg)) {
    if (d.market.personalToken.owned > 0) {
      let earned = d.market.personalToken.owned * d.market.personalToken.price;
      d.tokens += earned;
      showToast(formatTemplate(t('sold_tokens'), [d.market.personalToken.owned.toFixed(2), earned.toFixed(2)]));
    }
    
    d.market.personalToken = null;
    localStorage.removeItem('kspt_user_tokens');
    
    showToast(t('token_deleted'));
    save();
    marketInitialized = false;
    updateMarketUI();
    ui();
  }
}

function openTrade(token) {
  selectedToken = token;
  currentMarketView = 'trade';
  showLastTrades = false;
  updateMarketUI();
}

function closeTrade() {
  currentMarketView = 'main';
  selectedToken = null;
  tradeInputValue = '';
  showLastTrades = false;
  hideCustomKeyboard();
  marketInitialized = false;
  updateMarketUI();
}

function buyToken() {
  const now = Date.now();
  const timeSinceLastBuy = now - lastMarketBuyTime;
  
  if (timeSinceLastBuy < 40000) {
    showToast(formatTemplate(t('wait_buy'), [(40 - timeSinceLastBuy/1000).toFixed(1)]));
    updateBuyCooldownInfo();
    return;
  }
  
  const input = document.getElementById("tradeAmount");
  if (!input) return;
  
  let amountKSPT = parseFloat(input.value);
  
  let tokenData, minBuy, maxBuy;
  if (selectedToken === 'ksptToken') {
    tokenData = d.market.ksptToken;
    minBuy = 5;
    maxBuy = 200;
  } else if (selectedToken === 'banxToken') {
    tokenData = d.market.banxToken;
    minBuy = 0.01;
    maxBuy = 50;
  } else if (selectedToken === 'jvmToken') {
    tokenData = d.market.jvmToken;
    minBuy = 5;
    maxBuy = 250;
  } else if (selectedToken === 'personalToken') {
    tokenData = d.market.personalToken;
    minBuy = 0.1;
    maxBuy = 100;
  } else {
    return;
  }
  
  if (isNaN(amountKSPT) || amountKSPT < minBuy || amountKSPT > maxBuy) {
    showToast(formatTemplate(t('amount_range'), [minBuy, maxBuy]));
    return;
  }
  
  if (d.tokens < amountKSPT) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= amountKSPT;
  let tokensBought = amountKSPT / tokenData.price;
  tokenData.owned += tokensBought;
  tokenData.lastBuyTime = now;
  tokenData.lastUserBuyPrice = tokenData.price;
  lastMarketBuyTime = now;
  
  let tokenName = selectedToken === 'ksptToken' ? 'KSP Tokens' : 
                  selectedToken === 'banxToken' ? 'BANX' : 
                  selectedToken === 'jvmToken' ? 'JVM' : 
                  d.market.personalToken.ticker;
  showToast(formatTemplate(t('bought_tokens'), [tokensBought.toFixed(2), tokenName]));
  
  save();
  ui();
  updateMarketUI();
  drawChart();
}

function sellToken() {
  const now = Date.now();
  // FIX 6: Changed from 2 minutes (120000) to 40 seconds (40000)
  const cooldown = 40000;
  
  let tokenData = getTokenData();
  if (!tokenData) return;
  
  if (now - tokenData.lastBuyTime < cooldown) {
    let left = Math.ceil((cooldown - (now - tokenData.lastBuyTime)) / 1000);
    showToast(formatTemplate(t('wait_sell'), [left]));
    return;
  }
  
  const input = document.getElementById("tradeAmount");
  if (!input) return;
  
  let amountTokens = parseFloat(input.value);
  if (isNaN(amountTokens) || amountTokens <= 0) {
    showToast(t('enter_valid'));
    return;
  }
  
  if (tokenData.owned < amountTokens) {
    showToast(t('not_enough_tokens'));
    return;
  }
  
  tokenData.owned -= amountTokens;
  let earnedKSPT = amountTokens * tokenData.price;
  d.tokens += earnedKSPT;
  tokenData.lastUserSellPrice = tokenData.price;
  save();
  ui();
  updateMarketUI();
  drawChart();
}

function marketTicker() {
  console.debug('marketTicker: updating all tokens');
  if (!d.market) return;
  const now = Date.now();
  
  // KSP Token
  if (now - d.market.ksptToken.lastUpdate >= 30000) {
    d.market.ksptToken.lastUpdate = now;
    let change = 0;
    let isSpike = Math.random() < 0.05;
    let sign = Math.random() < 0.5 ? -1 : 1;
    
    if (isSpike) {
      change = (Math.random() * 0.15) + 0.15;
    } else {
      change = (Math.random() * 0.04) + 0.01;
    }
    
    let newPrice = d.market.ksptToken.price + (change * sign);
    if (newPrice < 0.40) newPrice = 0.40;
    if (newPrice > 3.10) newPrice = 3.10;
    
    d.market.ksptToken.price = newPrice;
    d.market.ksptToken.history.push(newPrice);
    if (d.market.ksptToken.history.length > 20) d.market.ksptToken.history.shift();
  }
  
  // BANX Token
  if (d.market.banxToken && now - d.market.banxToken.lastUpdate >= 20000) {
    d.market.banxToken.lastUpdate = now;
    let banxChange = 0;
    let banxIsSpike = Math.random() < 0.05;
    let banxSign = Math.random() < 0.5 ? -1 : 1;
    
    if (banxIsSpike) {
      banxChange = (Math.random() * 0.0002) + 0.0006;
    } else {
      banxChange = (Math.random() * 0.0002) + 0.0002;
    }
    
    let newBanxPrice = d.market.banxToken.price + (banxChange * banxSign);
    if (newBanxPrice < 0.00010) newBanxPrice = 0.00010;
    if (newBanxPrice > 0.01) newBanxPrice = 0.01;
    
    d.market.banxToken.price = newBanxPrice;
    d.market.banxToken.history.push(newBanxPrice);
    if (d.market.banxToken.history.length > 20) d.market.banxToken.history.shift();
  }
  
  // JVM Token
  if (d.market.jvmToken && now - d.market.jvmToken.lastUpdate >= 23000) {
    d.market.jvmToken.lastUpdate = now;
    let jvmChange = 0;
    let jvmIsSpike = Math.random() < 0.05;
    let jvmSign = Math.random() < 0.5 ? -1 : 1;
    
    if (jvmIsSpike) {
      jvmChange = (Math.random() * 0.10) + 0.10;
    } else {
      jvmChange = (Math.random() * 0.04) + 0.03;
    }
    
    let newJvmPrice = d.market.jvmToken.price + (jvmChange * jvmSign);
    if (newJvmPrice < 2.80) newJvmPrice = 2.80;
    if (newJvmPrice > 12.10) newJvmPrice = 12.10;
    
    d.market.jvmToken.price = newJvmPrice;
    d.market.jvmToken.history.push(newJvmPrice);
    if (d.market.jvmToken.history.length > 20) d.market.jvmToken.history.shift();
  }
  
  // Personal Token
  if (d.market.personalToken && now - d.market.personalToken.lastUpdate >= (15000 + Math.random() * 10000)) {
    d.market.personalToken.lastUpdate = now;
    let personalChangePercent = 0;
    let personalIsSpike = Math.random() < 0.05;
    let personalSign = Math.random() < 0.5 ? -1 : 1;
    
    if (personalIsSpike) {
      personalChangePercent = (Math.random() * 0.05) + 0.10;
    } else {
      personalChangePercent = (Math.random() * 0.05) + 0.03;
    }
    
    let changeAmount = d.market.personalToken.price * personalChangePercent;
    let newPersonalPrice = d.market.personalToken.price + (changeAmount * personalSign);
    
    if (newPersonalPrice < 0.001) newPersonalPrice = 0.001;
    if (newPersonalPrice > 10) newPersonalPrice = 10;
    
    d.market.personalToken.price = newPersonalPrice;
    d.market.personalToken.history.push(newPersonalPrice);
    if (d.market.personalToken.history.length > 20) d.market.personalToken.history.shift();
  }
}

// ==========================================
// ОСНОВНЫЕ ФУНКЦИОНАЛЬНЫЕ ФУНКЦИИ
// ==========================================

function openScreen(id) {
  if (d.settings && d.settings.animation && !d.settings.animation.transitions) {
    document.querySelectorAll(".screen").forEach(s => {
      s.classList.remove("active");
      s.style.animation = "none";
    });
    document.getElementById(id)?.classList.add("active");
  } else {
    document.querySelectorAll(".screen").forEach(s => {
      s.classList.remove("active");
      s.style.animation = "";
    });
    document.getElementById(id)?.classList.add("active");
  }
  
  if (id === 'settings') {
    showSettingsSub('main');
  }

  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  if (id === 'main') {
    document.getElementById('navMain')?.classList.add("active");
    if (marketUpdateInterval) {
      clearInterval(marketUpdateInterval);
      marketUpdateInterval = null;
      console.debug('market: interval stopped');
    }
    hideCustomKeyboard();
    marketInitialized = false;
    } else if (id === 'games') {
    // подсветить Games в навигации
    document.getElementById('navGames')?.classList.add("active");

    // если был запущен интервал обновления рынка — остановим его
    if (marketUpdateInterval) {
      clearInterval(marketUpdateInterval);
      marketUpdateInterval = null;
      console.debug('market: interval stopped (from games)');
    }

    // убрать кастомную клавиатуру (как в других ветках)
    hideCustomKeyboard();
    marketInitialized = false;

    // при необходимости инициализировать список игр (если есть функция)
    if (typeof initGames === 'function') {
      try { initGames(); } catch(e){ console.warn('initGames error', e); }
    }
  } else if (id === 'market') {
  document.getElementById('navMarket')?.classList.add("active");
  if (!marketUpdateInterval) {
    marketUpdateInterval = setInterval(updateMarketPrices, 1000);
    console.debug('market: interval started');
  }
  setTimeout(() => {
    updateMarketUI();
  }, 100);
  } else if (id === 'offlineShop') {
    // Initialize cards tab on first open
    if (!document.getElementById('cards-content').innerHTML) {
      showCardTab('company');
    }
  } else {
    hideCustomKeyboard();
    if (marketUpdateInterval) {
      clearInterval(marketUpdateInterval);
      marketUpdateInterval = null;
      console.debug('market: interval stopped');
    }
    marketInitialized = false;
  }
  
  ui();
  d.lastLogin = Date.now();
  save();
}

function showSettingsSub(sub) {
  const subs = ["settings-main", "settings-animation", "settings-sound", "settings-bg", "settings-language"];
  subs.forEach(s => {
    const elem = document.getElementById(s);
    if (elem) elem.style.display = "none";
  });
  
  const target = document.getElementById("settings-" + sub);
  if (target) target.style.display = "block";
}

function toggleAnimationSetting(setting, value) {
  if (!d.settings) d.settings = {};
  if (!d.settings.animation) d.settings.animation = {};

  d.settings.animation[setting] = value;
  save();

  // Если меняем именно анимацию скинов — старт/стоп таймера
  // Если меняем именно анимацию скинов — старт/стоп таймера
// УДАЛЕНО для фикса проблемы с тапами
// if (setting === 'skins') {
//    if (value) {
//      if (!window.skinAnimationTimer) {
//        window.skinAnimationTimer = setInterval(handleSkinAnimation, 800);
//        console.debug('skinAnimationTimer started (toggle)');
//      }
//    } else {
//      if (window.skinAnimationTimer) {
//        clearInterval(window.skinAnimationTimer);
//        window.skinAnimationTimer = null;
//        console.debug('skinAnimationTimer stopped (toggle)');
//      }
//    }
// }

} // <--- ВОТ ЭТУ СКОБКУ НУЖНО ДОБАВИТЬ

function toggleVibrationSetting(setting, value) {
  if (!d.settings) d.settings = {};
  if (!d.settings.vibration) d.settings.vibration = {};
   
  d.settings.vibration[setting] = value;
  save();
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

// ==========================================
// ОБРАБОТКА КЛИКОВ И ГЕЙМПЛЕЙ
// ==========================================

document.getElementById('coin')?.addEventListener('touchstart', function(e) {
  if (e.touches.length > 2) {
    e.preventDefault();
    return false;
  }
}, {passive: false});

const coin = document.getElementById('coin');
if (coin) {
  // FIX 2 & 3: Remove/disable variant switching on main coin
  // remove/disable variant switching on main coin
  // coin.addEventListener('click', () => {
  //   if (d.skin === 'euro') switchVariant('euro');
  //   else if (d.skin === 'artem') switchVariant('artem');
  // });
  
  coin.addEventListener("touchstart", () => {
    if (d.vibration === "off") return;
    if (d.settings && d.settings.vibration && !d.settings.vibration.tapsEnabled) return;
    
    let dur = 30;
    if (d.vibration === 'low') dur = 10;
    if (d.vibration === 'strong') dur = 50;
    
    if (navigator.vibrate) {
      navigator.vibrate(dur);
    }
  }, { passive: true });
  
  coin.onclick = function(e) {
    if (cheatStage >= 3) return;
    
    let m = d.x2 ? 2 : 1;
    const now = Date.now();
    
    if (d.boost.active && now < d.boost.end) {
      m *= 10;
    } else if (d.bonuses.tap2x.active && now < d.bonuses.tap2x.end) {
      m *= 2;
    }
    
    // Energy consumption based on multiplier
    let cost = 1;
    if (m === 2) {
      cost = 2;
    } else if (m >= 10) {
      cost = 3;
    }
    
    if (d.energy < cost) return;
    
    lastTapTime = now;
    
    if (isWarningActive) return;
    
    clickTimes.push(now);
    clickTimes = clickTimes.filter(t => now - t <= 6500);
    if (clickTimes.length > 100) {
      handleCheatDetection();
      return;
    }
    
    d.energy -= cost;
    let earned = 0.01 * m;
    d.tokens += earned;
    
    showTapFloat(e, earned);
    
    // Handle skin animation only on tap if enabled
if (d.settings && d.settings.animation && d.settings.animation.skins) {
  handleTapSkinAnimation();
}
    
    coin.classList.add('anim');
    setTimeout(() => coin.classList.remove('anim'), 80);
    
    d.lastLogin = now;
    save();
    ui();
  };
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('keyboard-key')) {
    if (d.vibration === "off") return;
    if (d.settings && d.settings.vibration && !d.settings.vibration.buttonsEnabled) return;
    
    let dur = 10;
    if (d.vibration === 'low') dur = 5;
    if (d.vibration === 'strong') dur = 20;
    
    if (navigator.vibrate) {
      navigator.vibrate(dur);
    }
  }
});

function showTapFloat(e, amount) {
  let el = document.createElement("div");
  el.className = "tap-text";
  el.textContent = "+" + amount.toFixed(2);
  
  let x, y;
  if (e && e.clientX) {
    x = e.clientX;
    y = e.clientY;
  } else {
    let rect = coin.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  }
  
  el.style.left = (x - 20) + "px";
  el.style.top = (y - 40) + "px";
  
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 500);
}

function handleCheatDetection() {
  if (cheatStage === 0) {
    document.getElementById("cheatWarningModal").style.display = "flex";
    isWarningActive = true;
    clickTimes = [];
  } else if (cheatStage === 1) {
    d = JSON.parse(JSON.stringify(defaultData));
    d.market = {
      introSeen: false,
      account: { name: "Trader", desc: "Crypto enthusiast" },
      ksptToken: { 
        owned: 0, 
        lastBuyTime: 0, 
        lastUserBuyPrice: null,
        lastUserSellPrice: null,
        price: 0.50, 
        history: [0.5, 0.5, 0.5, 0.5, 0.5], 
        lastUpdate: Date.now(),
        chartOffset: 0
      },
      banxToken: { 
        owned: 0, 
        lastBuyTime: 0, 
        lastUserBuyPrice: null,
        lastUserSellPrice: null,
        price: 0.0021, 
        history: [0.0021, 0.0021, 0.0021, 0.0021, 0.0021], 
        lastUpdate: Date.now(),
        chartOffset: 0
      },
      jvmToken: { 
        owned: 0, 
        lastBuyTime: 0, 
        lastUserBuyPrice: null,
        lastUserSellPrice: null,
        price: 4.25, 
        history: [4.25, 4.25, 4.25, 4.25, 4.25], 
        lastUpdate: Date.now(),
        chartOffset: 0
      },
      personalToken: null
    };
    cheatStage = 2;
    localStorage.setItem("kspt_cheat_stage", cheatStage);
    showToast(t('account_reset'));
    save();
    ui();
  } else if (cheatStage === 2) {
    document.getElementById("redScreen").style.display = "flex";
    cheatStage = 3;
    localStorage.setItem("kspt_cheat_stage", cheatStage);
  }
}

function dismissWarning() {
  document.getElementById("cheatWarningModal").style.display = "none";
  isWarningActive = false;
  cheatStage = 1;
  localStorage.setItem("kspt_cheat_stage", cheatStage);
  clickTimes = [];
}

function attemptUnban() {
  const input = document.getElementById("unbanInput");
  if (!input) return;

  const key = input.value.trim();
  if (key === "greenstupid" && !d.unbanUsed) {
    cheatStage = 0;
    localStorage.setItem("kspt_cheat_stage", 0);
    document.getElementById("redScreen").style.display = "none";
    d.unbanUsed = true;
    save();
    showToast(t('ban_removed'));
  } else if (key === "greenstupid" && d.unbanUsed) {
    showToast(t('promo_already_used'));
  } else {
    showToast(t('invalid_key'));
  }
  input.value = "";
}

// ==========================================
// SKIN FUNCTIONS
// ==========================================

function buySkin(s, cost) {
  if (d.tokens < cost) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  // SPECIAL HANDLING FOR BANDITX SKIN
  if (s === 'banditx') {
    const banxOwned = d.market?.banxToken?.owned || 0;
    if (banxOwned < 10000) {
      showToast("You need at least 10,000 BANX to buy this skin");
      return;
    }
  }
  
  // Handle discounts
  let actualCost = cost;
  if (d.bonuses.discounts && d.bonuses.discounts[s] && Date.now() < d.bonuses.discounts[s]) {
    actualCost = Math.floor(cost * 0.85);
  }
  
  d.tokens -= actualCost;
  d.skins[s] = 1;
  d.skin = s;
  
  // Special handling for variant skins
  if (s === 'euro') {
    d.euroVar = 1;
  } else if (s === 'artem') {
    d.artemVar = 0;
  }
  
  // Auto-unlock backgrounds for certain skins
  if (s === 'cookie' && !d.ownedBgs.includes('chrisp')) {
    d.ownedBgs.push('chrisp');
    d.bg = 'chrisp';
    showToast(t('chrispy_bg_unlocked'));
  }
  if (s === 'space' && !d.ownedBgs.includes('space')) {
    d.ownedBgs.push('space');
  }
  if (s === 'pixe' && !d.ownedBgs.includes('bug')) {
    d.ownedBgs.push('bug');
    showToast(t('bonus_bg_pixel'));
  }
  // FIX 4: Auto-unlock xfone background for banditx skin
  if (s === 'banditx' && !d.ownedBgs.includes('xfone')) {
    d.ownedBgs.push('xfone');
    showToast('xfone.png background unlocked!');
  }
  
  showToast(t('purchase_success'));
  save();
  ui();
}

// ==========================================
// CARD FUNCTIONS
// ==========================================

function buyCard(index, type) {
  const key = "c" + index;
  const lvl = d.cards[key];
  const data = CARDS[index].levels;
  
  if (lvl === 5) return; // Already maxed
  
  let nextLvl = lvl + 1;
  let cost = data[nextLvl].price;
  
  if (d.tokens < cost) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  // Check unlock conditions
  if (index === 2 && d.cards.c1 < 3) {
    showToast(formatTemplate(t('unlock_condition'), ['Personal Manager Level 3']));
    return;
  }
  if (index === 3 && d.cards.c2 < 1) {
    showToast(formatTemplate(t('unlock_condition'), ['Investors Level 2']));
    return;
  }
  if (index === 5 && d.cards.c4 < 3) {
    showToast(formatTemplate(t('unlock_condition'), ['Security Level 4']));
    return;
  }
  
  d.tokens -= cost;
  d.cards[key] = nextLvl;
  
  showToast(t('purchase_success'));
  save();
  ui();
}

function buySportCard(index) {
  const key = "s" + index;
  const lvl = d.cards[key];
  const data = CARDS[key].levels;
  
  if (lvl === 5) return; // Already maxed
  
  let nextLvl = lvl + 1;
  let cost = data[nextLvl].price;
  
  if (d.tokens < cost) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  // Check unlock conditions
  if (index === 4 && d.cards.s2 < 4) {
    showToast(formatTemplate(t('unlock_condition'), ['Basketball Level 4']));
    return;
  }
  if (index === 5 && d.cards.s3 < 3) {
    showToast(formatTemplate(t('unlock_condition'), ['Volleyball Level 3']));
    return;
  }
  
  d.tokens -= cost;
  d.cards[key] = nextLvl;
  
  showToast(t('purchase_success'));
  save();
  ui();
}

// FIX 7: Fixed buyGameCard function parameter issue
function buyGameCard(index) {
  const key = "g" + index; // Fixed: use index parameter instead of undefined variable i
  const lvl = d.cards[key];
  const data = CARDS[key].levels;
  
  if (lvl === 5) return; // Already maxed
  
  let nextLvl = lvl + 1;
  let cost = data[nextLvl].price;
  
  if (d.tokens < cost) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  // Check unlock conditions
  if (index === 2 && d.cards.g1 < 2) {
    showToast(formatTemplate(t('unlock_condition'), ['Chess Level 2']));
    return;
  }
  
  d.tokens -= cost;
  d.cards[key] = nextLvl;
  
  showToast(t('purchase_success'));
  save();
  ui();
}

// ==========================================
// TECH FUNCTIONS
// ==========================================

function buyX2() {
  if (d.x2) return;
  if (d.tokens < 5) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= 5;
  d.x2 = true;
  
  showToast(t('purchase_success'));
  save();
  ui();
}

function buyTempBoost() {
  const now = Date.now();
  if (d.boost.active && now < d.boost.end) return;
  if (now < d.boost.cdEnd) return;
  
  if (d.tokens < 15) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= 15;
  d.boost.active = true;
  d.boost.end = now + (25 + Math.floor(Math.random() * 10)) * 1000;
  d.boost.cdEnd = now + 10 * 60 * 1000;
  
  showToast(t('purchase_success'));
  save();
  ui();
}

function buyEnergyLimit() {
  if (d.maxEnergy >= 10000) return;
  
  let cost = 15;
  if (d.maxEnergy >= 8000) {
    cost = 100;
  }
  
  if (d.tokens < cost) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= cost;
  d.maxEnergy += 500;
  d.energy = Math.min(d.energy + 500, d.maxEnergy);
  
  showToast(t('purchase_success'));
  save();
  ui();
}

function buyRegenMult() {
  let cost = 0;
  let newMult = d.regenMult;
  
  if (d.regenMult === 1) {
    cost = 40;
    newMult = 1.5;
  } else if (d.regenMult === 1.5) {
    cost = 70;
    newMult = 2;
  } else if (d.regenMult === 2) {
    cost = 140;
    newMult = 2.5;
  } else if (d.regenMult === 2.5) {
    cost = 140;
    newMult = 3;
  } else {
    return; // Already maxed
  }
  
  if (d.tokens < cost) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= cost;
  d.regenMult = newMult;
  
  showToast(t('purchase_success'));
  save();
  ui();
}

// ==========================================
// BET FUNCTIONS
// ==========================================

function prepareBet(mult, chance) {
  const input = document.getElementById("betAmount");
  if (!input) return;
  
  let amount = parseFloat(input.value);
  if (isNaN(amount) || amount < 1 || amount > 30) {
    showToast("Enter amount 1-30 KSPT");
    return;
  }
  
  if (d.tokens < amount) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  pendingBet = { amount: amount, mult: mult, chance: chance };
  
  const betText = document.getElementById("betText");
  if (betText) {
    betText.textContent = `Bet ${amount} KSPT for x${mult} (${chance}% chance)`;
  }
  
  document.getElementById("betConfirm").style.display = "block";
}

function setMaxBet() {
  const input = document.getElementById("betAmount");
  if (!input) return;
  
  let maxBet = Math.min(30, Math.floor(d.tokens));
  input.value = maxBet;
}

function confirmBet() {
  if (!pendingBet) return;
  
  const { amount, mult, chance } = pendingBet;
  
  if (d.tokens < amount) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= amount;
  
  const win = Math.random() * 100 < chance;
  if (win) {
    const won = amount * mult;
    d.tokens += won;
    
    if (mult === 10 && !d.wonX10) {
      d.wonX10 = true;
      showToast(`WON x${mult} BET! ${won} KSPT! Prize skin unlocked!`);
    } else {
      showToast(`WON x${mult} BET! +${won} KSPT`);
    }
  } else {
    showToast(`Lost ${amount} KSPT`);
  }
  
  // Hide bet confirmation
  document.getElementById("betConfirm").style.display = "none";
  pendingBet = null;
  
  save();
  ui();
}

function cancelBet() {
  document.getElementById("betConfirm").style.display = "none";
  pendingBet = null;
}

// ==========================================
// PROMO CODE FUNCTIONS
// ==========================================

function checkPromo() {
  const input = document.getElementById("promoInput");
  if (!input) return;

  const code = input.value.trim().toLowerCase();

  // защита от отсутствия массивов/объектов
  if (!d.usedCodes) d.usedCodes = [];
  if (!d.bonuses) d.bonuses = {};
  if (!d.skins) d.skins = {};
  if (!d.capsule) d.capsule = {};

  if (d.usedCodes.includes(code)) {
    showToast(t('promo_already_used'));
    input.value = "";
    return;
  }

  let reward = 0;
  let message = "";

  if (code === "einarald") {
    if (d.bonuses.usedEinarald) {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }
    reward = 10;
    d.bonuses.usedEinarald = true;
    message = `+${reward} KSPT!`;

  } else if (code === "skipfuse") {
    if (d.bonuses.usedSkipFuse) {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }
    d.capsule.lastOpen = 0;
    d.bonuses.usedSkipFuse = true;
    message = t('promo_skipfuse');

  } else if (code === "fuse") {
    if (d.bonuses.usedFuse) {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }
    d.capsule.lastOpen = 0;
    d.bonuses.usedFuse = true;
    message = t('promo_skipfuse');

  } else if (code === "kostia") {
    if (!d.skins.kostia) {
      d.skins.kostia = 1;
      message = "Kostia skin unlocked!";
    } else {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }

   } else if (code === "dirtynoob") {
  if (!d.noobBox) d.noobBox = defaultData.noobBox;
  if (d.noobBox.obtained) {
    showToast(t('promo_already_used'));
    input.value = "";
    return;
  }
  d.noobBox.obtained = true;
  message = "Noob Box obtained!";
  // Запускаем открытие сразу
  startNoobBoxSequence();
  return;

  } else if (code === "metka") {
    if (!d.skins.metka) {
      d.skins.metka = 1;
      message = "Metka skin unlocked!";
    } else {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }

  } else if (code === "seri") {
    if (!d.skins.seri) {
      d.skins.seri = 1;
      message = "Seri skin unlocked!";
    } else {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }

  } else if (code === "artem" || code === "arteshaurm" || code === "arteshaurm2025" || code === "artes") {
    if (!d.skins.artem) {
      d.skins.artem = 1;
      message = "Artem skin unlocked!";
    } else {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }

  } else if (code === "25off") {
    d.bonuses.offline25 = true;
    message = "+25% next offline bonus!";

  } else if (code === "discount15") {
    const skins = ["what", "burger"];
    if (!d.bonuses.discounts) d.bonuses.discounts = {};
    skins.forEach(s => {
      d.bonuses.discounts[s] = Date.now() + 24 * 60 * 60 * 1000;
    });
    message = "15% discount on all skins for 24h!";

  } else if (code === "energyx2") {
    d.bonuses.tap2x = { active: true, end: Date.now() + 2 * 60 * 60 * 1000 };
    message = "x2 tap boost for 2 hours!";

// Вставить в блок обработки промокодов (рядом с другими else if)
} else if (code === "secretgold") {
  // Не даём использовать код повторно
  if (!d.usedCodes) d.usedCodes = [];
  if (d.usedCodes.includes("secretgold")) {
    showToast(t('promo_already_used'));
    input.value = "";
    return;
  }

  // Отмечаем код использованным и выдаём золотую капсулу (и сразу запускаем открытие)
  d.usedCodes.push("secretgold");
  d.goldCapsule = d.goldCapsule || {};
  d.goldCapsule.obtained = true;
  d.goldCapsule.opened = false;
  d.goldCapsule.taps = 0;
  d.goldCapsule.lastOpen = Date.now();

    save();
  showToast(t('gold_capsule_obtained'));
  input.value = "";

  // Запускаем интерфейс открытия золотой капсулы
  startGoldCapsuleSequence();
  return;

  } else if (code === "tap2x") {
    d.bonuses.tap2x = { active: true, end: Date.now() + 30 * 60 * 1000 };
    message = "x2 tap boost for 30 minutes!";

  } else {
    showToast("Invalid code");
    input.value = "";
    return;
  }

  // apply reward if any
  if (reward && typeof reward === "number" && reward > 0) {
    d.tokens = (d.tokens || 0) + reward;
  }

  d.usedCodes.push(code);

  showToast(message);
  input.value = "";
  save();
  ui();
}

 // ==========================================
// CAPSULE FUNCTIONS - UPDATED WITH FIXES
// ==========================================

// ---- Noob Box ----
let noobBoxOpening = false;
let noobBoxTaps = 0;

function startNoobBoxSequence() {
  if (noobBoxOpening) return;
  if (!d.noobBox || !d.noobBox.obtained) {
    showToast(t('locked'));
    return;
  }

  noobBoxOpening = true;
  noobBoxTaps = d.noobBox.taps || 0;

  const modal = document.getElementById("noobBoxModal");
  const boxImg = document.getElementById("noobBoxImg");
  const hint = document.getElementById("noobBoxHint");

  if (modal && boxImg) {
    modal.classList.add("active");
    boxImg.src = "noob.png";
    boxImg.classList.remove("tap-anim", "zoomed");
    hint.textContent = `Tap to open! (${noobBoxTaps}/10)`;
    
    // attach handler
    boxImg.removeEventListener('click', noobBoxTapHandler);
    boxImg.addEventListener('click', noobBoxTapHandler);
  }
}

function noobBoxTapHandler(e) {
  const now = Date.now();
  if (lastCapsuleTapTime && now - lastCapsuleTapTime < 120) return;
  lastCapsuleTapTime = now;

  noobBoxTaps++;
  d.noobBox.taps = noobBoxTaps;
  const boxImg = document.getElementById('noobBoxImg');
  const hint = document.getElementById('noobBoxHint');

  // tap animation
  boxImg.classList.add('tap-anim');
  setTimeout(() => boxImg.classList.remove('tap-anim'), 220);

  // Update taps counter
  hint.textContent = `Tap to open! (${noobBoxTaps}/10)`;

  // At 10 taps, change image and open
  if (noobBoxTaps >= 10) {
    boxImg.src = "noob1.png";
    hint.textContent = "Opening...";
    
    // disable further taps
    boxImg.removeEventListener('click', noobBoxTapHandler);
    setTimeout(() => openNoobBox(), 300);
  }

  // persist progress
  save();
}

function openNoobBox() {
  const modal = document.getElementById("noobBoxModal");
  const boxImg = document.getElementById("noobBoxImg");
  const hint = document.getElementById("noobBoxHint");
  const whiteFade = document.getElementById("whiteFade");

  if (!modal || !boxImg) return;

  // White flash effect
  if (whiteFade) {
    whiteFade.classList.add("active");
    setTimeout(() => whiteFade.classList.remove("active"), 250);
  }

  // vibration if enabled
  if (navigator.vibrate && d.settings && d.settings.vibration && d.settings.vibration.tapsEnabled) {
    navigator.vibrate(30);
  }

  setTimeout(() => {
    // Get random reward
    const reward = getWeightedNoobBoxReward();
    let rewardText = "";
    let rewardImg = reward.img || "kspt.png";

    switch (reward.type) {
      case 'kspt':
        d.tokens += reward.value;
        rewardText = `${reward.name}!`;
        break;

      case 'banx':
        if (!d.market.banxToken) d.market.banxToken = defaultData.market.banxToken;
        d.market.banxToken.owned += reward.value;
        rewardText = `${reward.name}!`;
        break;

      case 'jvm':
        if (!d.market.jvmToken) d.market.jvmToken = defaultData.market.jvmToken;
        d.market.jvmToken.owned += reward.value;
        rewardText = `${reward.name}!`;
        break;

      case 'puzzle':
        const now = Date.now();
        const delay = 24 * 60 * 60 * 1000;
        if (!d.puzzleDone) {
          // First puzzle
          const missing1 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles[i] === 0) missing1.push(i);
          if (missing1.length > 0) {
            const idx = missing1[Math.floor(Math.random() * missing1.length)];
            d.puzzles[idx] = 1;
            rewardText = `Puzzle Piece ${idx+1} obtained!`;
            rewardImg = `pazl${idx+1}.png`;
          } else {
            d.tokens += 5;
            rewardText = "+5 KSPT (All puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else if (now < (d.puzzleDoneTime || 0) + delay) {
          d.tokens += 5;
          rewardText = "+5 KSPT (Next puzzle not ready)!";
          rewardImg = "kspt.png";
        } else {
          // Second puzzle
          const missing2 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
          if (missing2.length > 0) {
            const idx = missing2[Math.floor(Math.random() * missing2.length)];
            d.puzzles2[idx] = 1;
            rewardText = `Puzzle Piece ${idx+11} obtained!`;
            rewardImg = `pazl${idx+11}.png`;
          } else {
            d.tokens += 5;
            rewardText = "+5 KSPT (All puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        }
        break;

      case 'capsuleSkip':
        d.capsule.lastOpen = 0;
        rewardText = "Capsule timer skipped!";
        rewardImg = "iks.png";
        break;

      case 'skin':
        if (!d.skins) d.skins = {};
        if (!d.skins[reward.id]) {
          d.skins[reward.id] = 1;
          rewardText = `${reward.name} unlocked!`;
          
          // Show skin card
          const card = document.getElementById("skinCardDirty");
          if (card) card.style.display = "block";
        } else {
          d.tokens += 15;
          rewardText = "+15 KSPT (Skin already owned)!";
          rewardImg = "kspt.png";
        }
        break;
    }

    // Mark box as opened
    d.noobBox.opened = true;
    d.noobBox.taps = 0;
    d.noobBox.lastOpen = Date.now();

    // Save and show reward
    save();
    showReward(rewardText, rewardImg);

    // Close modal and cleanup
    modal.classList.remove("active");
    noobBoxOpening = false;
    noobBoxTaps = 0;

    // Cleanup listener
    boxImg.removeEventListener('click', noobBoxTapHandler);

    // Update UI
    ui();
    updatePuzzleUI();
    if (updateSecondPuzzleUI) updateSecondPuzzleUI();

  }, 300);
}

function startCapsuleSequence() {
  if (capsuleOpening) return;
  
  const now = Date.now();
  const cooldownTime = 23 * 60 * 60 * 1000;
  
  if (!d.capsule.firstOpen) {
    let diff = now - d.capsule.lastOpen;
    if (diff < cooldownTime) {
      updateCapsuleUI();
      return;
    }
  }
  
  // Set capsule opening flag
  capsuleOpening = true;
  
  // Reset capsule taps and timing
  capsuleTaps = 0;
  lastCapsuleTapTime = 0;
  
  // Show capsule modal
  const modal = document.getElementById("capsuleBreakModal");
  const capsuleImg = document.getElementById("capsuleBreakImg");
  const hint = document.getElementById("capsuleHint");
  
  if (modal && capsuleImg) {
    modal.classList.add("active");
    capsuleImg.src = "capsule.png";
    capsuleImg.classList.remove("tap-anim");
    capsuleImg.classList.remove("zoomed");
    hint.textContent = "Tap to open!";
    
    // Remove any existing handler and attach the new one
    capsuleImg.removeEventListener('click', capsuleTapHandler);
    capsuleImg.addEventListener('click', capsuleTapHandler);
  }
}

// UPDATED: Open capsule with proper animation and cleanup
function openCapsule() {
  const modal = document.getElementById("capsuleBreakModal");
  const capsuleImg = document.getElementById("capsuleBreakImg");
  const hint = document.getElementById("capsuleHint");
  
  if (!modal || !capsuleImg) return;
  
  // Zoom animation
  capsuleImg.classList.add("zoomed");
  hint.textContent = "Opening...";
  
  // Break moment vibration
  if (navigator.vibrate && d.settings.vibration.tapsEnabled) {
    navigator.vibrate(25);
  }
  
  setTimeout(() => {
    // White fade effect
    const whiteFade = document.getElementById("whiteFade");
    if (whiteFade) {
      whiteFade.classList.add("active");
      setTimeout(() => whiteFade.classList.remove("active"), 250);
    }
    
    setTimeout(() => {
      // Select reward based on weighted probability
      const reward = getWeightedRandomReward();
      let rewardText = "";
      let rewardImg = reward.img || "kspt.png";
      
      // Apply reward based on type
      switch(reward.type) {
        case 'kspt':
          d.tokens += reward.value;
          rewardText = `${reward.name}!`;
          break;
          
        case 'discount':
          const skins = ["what", "burger", "joost", "dog", "diam", "tung", "euro", "space", "pixe", "onion", "cookie", "ruka", "banditx", "goldcoin", "brb"];
          skins.forEach(s => {
            d.bonuses.discounts[s] = Date.now() + 24 * 60 * 60 * 1000;
          });
          rewardText = "15% discount on all skins for 24h!";
          break;
          
        case 'offline25':
          d.bonuses.offline25 = true;
          rewardText = reward.name;
          break;
          
        case 'tap2x':
          d.bonuses.tap2x = { active: true, end: Date.now() + reward.duration * 1000 };
          rewardText = reward.name;
          break;
          
        case 'puzzle':
  const now = Date.now();
  const delay = 24 * 60 * 60 * 1000;
  if (!d.puzzleDone) {
    const missing1 = [];
    for (let i = 0; i < 9; i++) if (d.puzzles[i] === 0) missing1.push(i);
    if (missing1.length > 0) {
      const idx = missing1[Math.floor(Math.random() * missing1.length)];
      d.puzzles[idx] = 1;
      rewardText = `Puzzle Piece ${idx+1} obtained!`;
      rewardImg = `pazl${idx+1}.png`;
      showReward(rewardText, rewardImg);
    } else {
      d.tokens += 10;
      rewardText = "+10 KSPT (All puzzle pieces owned)!";
      rewardImg = "kspt.png";
    }
  } else if (now < (d.puzzleDoneTime || 0) + delay) {
    d.tokens += 10;
    rewardText = "+10 KSPT (Next puzzle not ready)!";
    rewardImg = "kspt.png";
  } else {
    const missing2 = [];
    for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
    if (missing2.length > 0) {
      const idx = missing2[Math.floor(Math.random() * missing2.length)];
      d.puzzles2[idx] = 1;
      rewardText = `Puzzle Piece ${idx+11} obtained!`;
      rewardImg = `pazl${idx+11}.png`;
      showReward(rewardText, rewardImg);
    } else {
      d.tokens += 10;
      rewardText = "+10 KSPT (All second puzzle pieces owned)!";
      rewardImg = "kspt.png";
    }
  }
  break;
          
        case 'background':
          if (!d.ownedBgs.includes(reward.id)) {
            d.ownedBgs.push(reward.id);
            rewardText = `${reward.name} unlocked!`;
          } else {
            // Already owned, give KSPT instead
            d.tokens += 50;
            rewardText = "+50 KSPT (Background already owned)!";
            rewardImg = "kspt.png";
          }
          break;
          
        case 'skin':
          if (!d.skins[reward.id]) {
            d.skins[reward.id] = 1;
            rewardText = `${reward.name} unlocked!`;
          } else {
            // Already owned, give KSPT instead
            d.tokens += 50;
            rewardText = "+50 KSPT (Skin already owned)!";
            rewardImg = "kspt.png";
          }
          break;
          
        case 'music':
          if (!d.ownedMusic.includes(reward.id)) {
            d.ownedMusic.push(reward.id);
            rewardText = `${reward.name} unlocked!`;
          } else {
            // Already owned, give KSPT instead
            d.tokens += 25;
            rewardText = "+25 KSPT (Music already owned)!";
            rewardImg = "kspt.png";
          }
          break;
      }

const siulaiOwned = d.ownedMusic && d.ownedMusic.includes('siulai');
const siulaiTopBtn = document.getElementById('btn-music-siulai-top'); // пример id
if (siulaiTopBtn) {
  if (siulaiOwned) {
    siulaiTopBtn.textContent = t('select');
    siulaiTopBtn.onclick = () => setMusic('siulai');
  } else {
    siulaiTopBtn.textContent = t('locked');
    siulaiTopBtn.onclick = null;
  }
}
      
      // Rarity change vibration
      if (navigator.vibrate && d.settings.vibration.tapsEnabled) {
        navigator.vibrate(150);
      }
      
      // Update capsule state
      d.capsule.lastOpen = Date.now();
      if (d.capsule.firstOpen) {
        d.capsule.firstOpen = false;
      }
      
      // Show reward
      showReward(rewardText, rewardImg);
      
      // Hide capsule modal
      modal.classList.remove("active");
      
      save();
      ui();
      updatePuzzleUI();
      
      // Reset capsule opening flag and cleanup
      setTimeout(() => {
        capsuleOpening = false;
        // Remove the handler and reset capsuleTaps
        const capsuleImg = document.getElementById("capsuleBreakImg");
        if (capsuleImg) {
          capsuleImg.removeEventListener('click', capsuleTapHandler);
        }
        capsuleTaps = 0;
      }, 3000);
      
    }, 1500);
    
  }, 500);
}

// ---- Gold Capsule (Secret Gold) ----
let goldCapsuleOpening = false;
let goldCapsuleTaps = 0;

function startGoldCapsuleSequence() {
  if (goldCapsuleOpening) return;
  if (!d.goldCapsule || !d.goldCapsule.obtained) {
    showToast(t('locked'));
    return;
  }

  goldCapsuleOpening = true;
  goldCapsuleTaps = d.goldCapsule.taps || 0;

  const modal = document.getElementById("capsuleBreakModal");
  const capsuleImg = document.getElementById("capsuleBreakImg");
  const hint = document.getElementById("capsuleHint");

  if (modal && capsuleImg) {
    modal.classList.add("active");
    capsuleImg.src = "cagold.png";
    capsuleImg.classList.remove("tap-anim","zoomed");
    // Добавляем класс для золотой капсулы
    capsuleImg.classList.add("gold-capsule");
    hint.textContent = `${goldCapsuleTaps}/45`;
    // attach handler
    capsuleImg.removeEventListener('click', goldCapsuleTapHandler);
    capsuleImg.addEventListener('click', goldCapsuleTapHandler);
  }
}

// handler for taps for gold capsule (45 taps total with stages)
function goldCapsuleTapHandler(e) {
  const now = Date.now();
  // simple debounce if you want (uses same lastCapsuleTapTime if available)
  if (typeof lastCapsuleTapTime !== 'undefined' && now - lastCapsuleTapTime < 120) return;
  lastCapsuleTapTime = now;

  goldCapsuleTaps++;
  d.goldCapsule.taps = goldCapsuleTaps;
  const capsuleImg = document.getElementById('capsuleBreakImg');
  const hint = document.getElementById('capsuleHint');

  // quick tap animation (re-uses same class)
  capsuleImg.classList.add('tap-anim');
  setTimeout(() => capsuleImg.classList.remove('tap-anim'), 220);

  // stages:
  // 0-9: cagold.png
  // 10-19: cagold1.png
  // 20-29: cagold2.png
  // 30-44: cagold3.png
  // 45: cagold4.png -> then open
  if (goldCapsuleTaps >= 45) {
    capsuleImg.src = "cagold4.png";
    hint.textContent = `${goldCapsuleTaps}/45`;
    // disable further taps
    capsuleImg.removeEventListener('click', goldCapsuleTapHandler);
    setTimeout(() => openGoldCapsule(), 120);
  } else if (goldCapsuleTaps >= 30) {
    capsuleImg.src = "cagold3.png";
    hint.textContent = `${goldCapsuleTaps}/45`;
  } else if (goldCapsuleTaps >= 20) {
    capsuleImg.src = "cagold2.png";
    hint.textContent = `${goldCapsuleTaps}/45`;
  } else if (goldCapsuleTaps >= 10) {
    capsuleImg.src = "cagold1.png";
    hint.textContent = `${goldCapsuleTaps}/45`;
  } else {
    capsuleImg.src = "cagold.png";
    hint.textContent = `${goldCapsuleTaps}/45`;
  }

  // persist progress
  save();
}

function openGoldCapsule() {
  const modal = document.getElementById("capsuleBreakModal");
  const capsuleImg = document.getElementById("capsuleBreakImg");
  const hint = document.getElementById("capsuleHint");
  const whiteFade = document.getElementById("whiteFade");

  if (!modal || !capsuleImg) return;

  capsuleImg.classList.add("zoomed");
  hint.textContent = "Opening...";

  // small vibration if enabled
  if (navigator.vibrate && d.settings && d.settings.vibration && d.settings.vibration.tapsEnabled) {
    navigator.vibrate(30);
  }

  // show white flash (reuse existing white fade element if present)
  if (whiteFade) {
    whiteFade.classList.add("active");
    setTimeout(() => whiteFade.classList.remove("active"), 300);
  }

  setTimeout(() => {
    // compute reward (special gold pool)
    const reward = getWeightedGoldReward();
    let rewardText = "";
    let rewardImg = reward.img || "kspt.png";

    switch (reward.type) {
      case 'puzzle':
        // follow same rules as main capsule:
        const now = Date.now();
        const delay = 24 * 60 * 60 * 1000;
        if (!d.puzzleDone) {
          // first puzzle logic
          const missing1 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles[i] === 0) missing1.push(i);
          if (missing1.length > 0) {
            const idx = missing1[Math.floor(Math.random() * missing1.length)];
            d.puzzles[idx] = 1;
            rewardText = `Puzzle Piece ${idx+1} obtained!`;
            rewardImg = `pazl${idx+1}.png`;
          } else {
            d.tokens += 20;
            rewardText = "+20 KSPT (All puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else if (now < (d.puzzleDoneTime || 0) + delay) {
          d.tokens += 10;
          rewardText = "+10 KSPT (Next puzzle not ready)!";
          rewardImg = "kspt.png";
        } else {
          const missing2 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
          if (missing2.length > 0) {
            const idx = missing2[Math.floor(Math.random() * missing2.length)];
            d.puzzles2[idx] = 1;
            rewardText = `Puzzle Piece ${idx+11} obtained!`;
            rewardImg = `pazl${idx+11}.png`;
          } else {
            d.tokens += 40;
            rewardText = "+40 KSPT (All second puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        }
        break;

      case 'music':
        if (!d.ownedMusic) d.ownedMusic = [];
        if (!d.ownedMusic.includes(reward.id)) {
          d.ownedMusic.push(reward.id);
          rewardText = `${reward.name} unlocked!`;
        } else {
          d.tokens += 25;
          rewardText = "+25 KSPT (Music already owned)!";
          rewardImg = "kspt.png";
        }
        break;

      case 'background':
        if (!d.ownedBgs) d.ownedBgs = [];
        if (!d.ownedBgs.includes(reward.id)) {
          d.ownedBgs.push(reward.id);
          rewardText = `${reward.name} unlocked!`;
        } else {
          d.tokens += 50;
          rewardText = "+50 KSPT (Background already owned)!";
          rewardImg = "kspt.png";
        }
        break;

      case 'skin':
        if (!d.skins[reward.id]) {
          d.skins[reward.id] = 1;
          rewardText = `${reward.name} unlocked!`;
          
          // Показать карточку скина в каталоге
          const cardId = "skinCard" + (reward.id === 'gkspt' ? 'Gkspt' : 'CyberAndroid');
          const card = document.getElementById(cardId);
          if (card) {
            card.style.display = "block";
          }
          
          // Обновить UI скинов
          updateSkinButtons();
          updateSkinPreviews();
        } else {
          d.tokens += 100;
          rewardText = "+100 KSPT (Skin already owned)!";
          rewardImg = "kspt.png";
        }
        break;

      case 'skin':
        if (!d.skins) d.skins = {};
        if (!d.skins[reward.id]) {
          d.skins[reward.id] = 1;
          rewardText = `${reward.name} unlocked!`;
          // if skin gives offline income, add to income map later (see note)
        } else {
          d.tokens += 100;
          rewardText = "+100 KSPT (Skin already owned)!";
          rewardImg = "kspt.png";
        }
        break;

      default:
        d.tokens += 50;
        rewardText = "+50 KSPT";
        rewardImg = "kspt.png";
    }

    // Mark gold capsule opened once
    d.goldCapsule.opened = true;
    d.goldCapsule.taps = 0;
    d.goldCapsule.lastOpen = Date.now();

    // persist and show reward
    save();
    showReward(rewardText, rewardImg);

    // close modal and cleanup
    modal.classList.remove("active");
    goldCapsuleOpening = false;
    goldCapsuleTaps = 0;

    // cleanup listener (just in case)
    capsuleImg.removeEventListener('click', goldCapsuleTapHandler);

    // Update UI and puzzle states
    ui();
    updatePuzzleUI();
    updateSecondPuzzleUI && updateSecondPuzzleUI();

  }, 700);
}

// Weighted pool for gold capsule (50% puzzle, 10% music, 10% bg Hell, 10% bg Math, 15% gkspt, 5% cyber)
function getWeightedGoldReward() {
  const pool = [
    { type: 'puzzle', weight: 50, name: 'Puzzle Piece', img: 'puz.png' },
    { type: 'music', id: 'funny', weight: 10, name: 'LOL song', img: 'funny.png' },
    { type: 'background', id: 'hell', weight: 10, name: 'Hell', img: 'hell.png' },
    { type: 'background', id: 'math', weight: 10, name: 'Crazy Math', img: 'math.png' },
    { type: 'skin', id: 'gkspt', weight: 15, name: 'Gold KSPT', img: 'gkspt.png' },
    { type: 'skin', id: 'cyber_android', weight: 5, name: 'KSPT: Cyber Android', img: 'robotic.png' }
  ];

  const total = pool.reduce((s, r) => s + r.weight, 0);
  let r = Math.random() * total;
  for (const item of pool) {
    r -= item.weight;
    if (r <= 0) return item;
  }
  return pool[0];
}

function showReward(text, img) {
  const popup = document.getElementById("rewardPopup");
  const rewardImg = document.getElementById("rewardImg");
  const rewardText = document.getElementById("rewardText");
  
  if (popup && rewardImg && rewardText) {
    rewardText.textContent = text;
    rewardImg.src = img;
    popup.style.display = "block";
  }
}

function closeReward() {
  const popup = document.getElementById("rewardPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

function placePuzzlePieces() {
  let placed = false;
  for (let i = 0; i < 9; i++) {
    if (d.puzzles[i] === 1) {
      // Find the cell and fill it
      const cell = document.getElementById("pz" + (i + 1));
      if (cell) {
        cell.classList.add("filled");
      }
      placed = true;
    }
  }
  
  if (placed) {
    showToast("Puzzle pieces placed!");
  }
  
  updatePuzzleUI();
}

function placePuzzlePieces2() {
  let placed = false;
  for (let i = 0; i < 9; i++) {
    if (d.puzzles2[i] === 1) {
      const cell = document.getElementById("pz2_" + (i + 1));
      if (cell) cell.classList.add("filled");
      placed = true;
    }
  }
  if (placed) {
    showToast("Puzzle pieces placed!");
      save();
  checkSecondPuzzleCompletion();
  updateSecondPuzzleUI();
  ui();
  }
}

// Это для игр
// вставь в kspt/js/games.js (в конце или рядом с другими функциями экранов)
function startGame(name){
  const container = document.getElementById('gameContainer');
  const frameHolder = document.getElementById('gameFrameContainer');
  if(!container || !frameHolder) return console.error('gameContainer/gameFrameContainer not found');

  // очистить старый iframe (если был)
  frameHolder.innerHTML = '';

  // создать iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'gameIframe';
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100vh - 64px)'; // подогнать под высоту шапки; при желании поменяй
  iframe.style.border = '0';
  iframe.allow = 'fullscreen'; // если нужно

  // выбрать путь к игре (путь относительно index.html)
  if(name === 'snake') iframe.src = 'games/snake.html';
  else if(name === 'pingpong' || name === 'pong') iframe.src = 'games/pingpong.html';
  else {
    console.warn('Unknown game:', name);
    iframe.src = 'about:blank';
  }

  frameHolder.appendChild(iframe);

iframe.addEventListener('load', () => {
  try { enableMobileGameMode(iframe); } catch(e){}
});

// показать экран игры
if (typeof openScreen === 'function') { openScreen('gameContainer'); }
else { container.style.display = 'block'; }

  // (опционально) фокус на iframe
  setTimeout(()=> iframe.contentWindow && iframe.contentWindow.focus(), 300);
}

function exitGame(){
  try { disableMobileGameMode(); } catch(e){}

  const frameHolder = document.getElementById('gameFrameContainer');
  const container = document.getElementById('gameContainer');
  if(frameHolder) frameHolder.innerHTML = ''; // удаляем iframe
  if(typeof openScreen === 'function'){ openScreen('games'); } // вернуться в список игр, если есть
  else if(container) container.style.display = 'none';
}

// ==========================================
// SETTINGS FUNCTIONS
// ==========================================

function setVibration(level) {
  d.vibration = level;
  save();
  updateSettingsUI();
  
  // Test vibration
  if (level !== 'off' && navigator.vibrate) {
    let dur = 30;
    if (level === 'low') dur = 10;
    if (level === 'strong') dur = 50;
    navigator.vibrate(dur);
  }
}

// NEW FUNCTION: Improved music preview with stop capability
function previewMusic(track) {
  // Stop any existing preview
  if (window.previewAudio) {
    window.previewAudio.pause();
    window.previewAudio.currentTime = 0;
  }
  
  // Clear any existing timeout
  if (previewTimeout) {
    clearTimeout(previewTimeout);
    previewTimeout = null;
  }
  
  // Set up new preview
  const audioFile = musicMap[track];
  if (!audioFile) return;
  
  window.previewAudio.src = audioFile;
  window.previewAudio.play();
  
  // Auto-stop after 15 seconds
  previewTimeout = setTimeout(() => {
    if (window.previewAudio) {
      window.previewAudio.pause();
      window.previewAudio.currentTime = 0;
    }
    previewTimeout = null;
  }, 15000);
}

// NEW FUNCTION: Stop music preview
function stopPreviewMusic() {
  if (window.previewAudio) {
    window.previewAudio.pause();
    window.previewAudio.currentTime = 0;
  }
  
  if (previewTimeout) {
    clearTimeout(previewTimeout);
    previewTimeout = null;
  }
}

function setMusic(track) {
  if (d.musicMuted) {
    d.musicMuted = false;
  }
  
  d.music = track;
  
  // Stop preview if playing
  stopPreviewMusic();
  
  // Play music if not muted
  if (!d.musicMuted) {
    const audioFile = musicMap[track];
    if (audioFile) {
      window.appMusic.src = audioFile;
      window.appMusic.play().catch(e => console.log("Audio play failed:", e));
    }
  }
  
  save();
  updateMusicUI();
}

function buyMusic(track, price) {
  if (d.ownedMusic.includes(track)) {
    setMusic(track);
    return;
  }
  
  if (d.tokens < price) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= price;
  d.ownedMusic.push(track);
  d.music = track;
  
  const audioFile = musicMap[track];
  if (audioFile && !d.musicMuted) {
    window.appMusic.src = audioFile;
    window.appMusic.play().catch(e => console.log("Audio play failed:", e));
  }
  
    showToast(t('music_unlocked'));
  save();
  updateMusicUI();
  ui();
}

function stopMusic() {
  d.musicMuted = true;
  window.appMusic.pause();
  
  // Also stop any preview
  stopPreviewMusic();
  
  save();
  updateMusicUI();
}

function equipBackground(bg) {
  if (!d.ownedBgs.includes(bg)) return;

  // Если это НЕ фон из EK Shop, сбрасываем выбор фона в EK Shop
  if (bg !== 'bg_club') {
    try {
      const ekshopSelected = JSON.parse(localStorage.getItem('ekshop_selected') || '{}');
      if (ekshopSelected.bg) {
        ekshopSelected.bg = null;
        localStorage.setItem('ekshop_selected', JSON.stringify(ekshopSelected));
      }
    } catch(e) {
      console.warn('Failed to clear EK Shop background selection:', e);
    }
  }
  
  d.bg = bg;
  showToast(formatTemplate(t('bg_equipped'), [bg]));
  save();
  updateSettingsUI();
  updateBackground();
}

function buyBackground(bg, price) {
  if (d.ownedBgs.includes(bg)) {
    equipBackground(bg);
    return;
  }
  
  if (d.tokens < price) {
    showToast(t('not_enough_kspt'));
    return;
  }
  
  d.tokens -= price;
  d.ownedBgs.push(bg);
  d.bg = bg;
  
  showToast(t('purchase_success'));
  save();
  updateSettingsUI();
  updateBackground();
  ui();
}

// ==========================================
// INITIALIZATION
// ==========================================

function initGame() {
    console.log('initGame called');
    // Process offline income on load
    processOfflineIncome();

    // Initial UI update
    ui();

    // Инициализация 3D эффекта монеты
    const coin3dEnabled = d.settings && d.settings.animation && d.settings.animation.coin3d !== false;
    const coinContainer = document.getElementById('coin3dContainer');
    
    if (coinContainer) {
        if (coin3dEnabled) {
            coinContainer.classList.add('three-d-enabled');
            init3DCoin();
        } else {
            coinContainer.classList.remove('three-d-enabled');
        }
    }

    // Set up custom keyboard
    setupCustomKeyboard();

    // Add error handlers for images
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            console.warn('Image failed to load:', this.src);
            if (!this.src.includes('dontwhat.png') && !this.src.includes('knowdont.png')) {
                this.src = 'dontwhat.png';
            }
        };
    });

    // Initialize cards tab on first load
    if (document.getElementById('offlineShop')?.classList.contains('active')) {
        showCardTab('company');
    }

    // Установите состояние чекбокса
    const toggle3DEffectCheckbox = document.getElementById('toggle3DEffect');
    if (toggle3DEffectCheckbox && d.settings && d.settings.animation) {
        toggle3DEffectCheckbox.checked = coin3dEnabled;
    }

    // Делегирование: кнопка закрытия капсулы / магазина
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('#capsuleCloseBtn');
        if (!btn) return;

        e.preventDefault();

        // закрываем все экраны
        document.querySelectorAll('.screen').forEach(s =>
            s.classList.remove('active')
        );

        // открываем главное меню
        const main = document.getElementById('mainMenu');
        if (main) main.classList.add('active');

        ui();
    });

    // BUG FIX 1: Use ensureMusicPlays instead of direct play
    if (!d.musicMuted && d.music) {
        ensureMusicPlays();
    }

      // Запускать авто-анимацию скинов при старте (если включено в настройках)
// УДАЛЕНО для фикса проблемы с тапами
// if (d.settings && d.settings.animation && d.settings.animation.skins) {
//   if (!window.skinAnimationTimer) {
//     window.skinAnimationTimer = setInterval(handleSkinAnimation, 800);
//     console.debug('skinAnimationTimer started (init)');
//   }
// }

    // Auto-save every 10 seconds
    setInterval(save, 10000);

    // Auto-update energy based on regeneration multiplier
    setInterval(() => {
        if (d.energy < d.maxEnergy) {
            const regenRate = 0.7 * d.regenMult; // Base 0.7 per second * multiplier
            d.energy = Math.min(d.maxEnergy, d.energy + regenRate);
            ui();
        }
    }, 1000);
}

// ==========================================
// IVENTS SYSTEM FUNCTIONS
// ==========================================

// Показать вкладку (пазлы или события)
function showIventTab(tab) {
  const puzzleTab = document.getElementById('puzzleTab');
  const iventTab = document.getElementById('iventTab');
  
  const tabPuzzle = document.getElementById('tabPuzzle');
  const tabIvent = document.getElementById('tabIvent');
  
  // Обновляем кнопки
  if (tabPuzzle) tabPuzzle.style.background = tab === 'puzzle' ? '#2e7d32' : '#444';
  if (tabIvent) tabIvent.style.background = tab === 'ivent' ? '#2e7d32' : '#444';
  
  if (tab === 'puzzle') {
    if (puzzleTab) puzzleTab.style.display = 'block';
    if (iventTab) iventTab.style.display = 'none';
  } else {
    if (puzzleTab) puzzleTab.style.display = 'none';
    if (iventTab) iventTab.style.display = 'block';
    
    // Загружаем события напрямую без fetch
    loadIventsDirect(); // Убедитесь, что эта функция существует
  }
}

function loadIventsDirect() {
  const container = document.getElementById('iventContainer');
  if (!container) return;

  // Используем FALLBACK_IVENTS напрямую
  currentIvent = null;

  if (!currentIvent) {
    container.innerHTML = '<div class="ivent-info">' + t('ivent_no_events') + '</div>';
    return;
  }

  renderIvent(currentIvent);
}

// Загрузить события из файла
async function loadIvents() {
  const container = document.getElementById('iventContainer');
  if (!container) return;

  try {
    const response = await fetch(IVENTS_FILE);
    if (!response.ok) throw new Error('Network response was not ok');

    const events = await response.json();
    currentIvent = events[0] || FALLBACK_IVENTS[0];
  } catch (error) {
    console.warn('Ошибка загрузки событий, используем fallback:', error);
    currentIvent = null;
  }

  if (!currentIvent) {
    container.innerHTML = '<div class="ivent-info">' + t('ivent_no_events') + '</div>';
    return;
  }

  renderIvent(currentIvent);
}

// Отобразить событие
function renderIvent(ivent) {
  const container = document.getElementById('iventContainer');
  if (!container) return;

  const progress = d.ivents && d.ivents[ivent.id] ? d.ivents[ivent.id] : { claimedDays: [], lastClaimDate: null };
  const currentDay = getCurrentIventDay(ivent);

  // изображения по типам
  const rewardImages = {
    'capsule': 'capsule.png',
    'noobBox': 'noob.png',
    'goldCapsule': 'cagold.png',
    'skin': 'heart.png'
  };

  // строим HTML дней (calendarHtml) — ВАЖНО: сначала calendarHtml, затем вставляем в шаблон
  let calendarHtml = '';
  for (let day = 1; day <= ivent.days; day++) {
    const reward = (ivent.rewards || []).find(r => r.day === day) || {};
    const isClaimed = progress.claimedDays && progress.claimedDays.includes(day);
    const isCurrent = day === currentDay && !isClaimed;
    const isMissed = day < currentDay && !isClaimed;
    const isFuture = day > currentDay;

    // картинка: если будущее — показываем knowdont.png (чтобы не знать), если пропущен/получен — показываем реальную награду
    let dayImage = 'knowdont.png';
    if (isClaimed || isMissed || isCurrent) {
      dayImage = rewardImages[reward.type] || 'question.png';
      // если 7-й — гарантируем heart
      if (day === 7 && reward.type === 'skin') dayImage = 'heart.png';
    }

    // классы и кнопка
    let cls = 'ivent-day';
    if (isClaimed) cls += ' redeemed';
    else if (isMissed) cls += ' missed';
    else if (isCurrent) cls += ' current';
    else if (isFuture) cls += ' future';

    const buttonHtml = isClaimed
      ? '<div style="color:#2e7d32; font-weight:bold;">✅</div>'
      : (isCurrent
         ? `<button onclick="claimIventReward(${day})" style="margin-top:6px;background:#ff9800;border:none;padding:6px 10px;border-radius:6px;color:#000;font-weight:bold;">Открыть</button>`
         : '');

    calendarHtml += `
      <div class="${cls}" style="min-width:72px; text-align:center; margin-right:8px;">
        <div style="font-weight:bold; margin-bottom:6px;">${day}</div>
        <img src="${dayImage}" style="width:58px;height:58px;object-fit:contain;border-radius:8px;">
        <div style="font-size:11px; margin-top:6px; color:#aaa;">
          ${isClaimed ? 'Открыт' : (isMissed ? 'Пропущен' : (isCurrent ? 'Текущий' : 'Скоро'))}
        </div>
        ${buttonHtml}
      </div>
    `;
  }

  // основной шаблон с прокруткой
  let html = `
    <div class="ivent-info">
      <div style="font-weight:bold; margin-bottom:5px;">${ivent.name}</div>
      <div style="opacity:0.7; font-size:12px;">${ivent.description}</div>
      <div style="font-size:11px; color:#ff9800; margin-top:5px;">
        День ${Math.min(currentDay, ivent.days)} из ${ivent.days}
      </div>
    </div>

    <div class="ivent-scroll">
      <div class="ivent-calendar">
        ${calendarHtml}
      </div>
    </div>
  `;

  // если все дни получены и нет пропусков — показываем финальное окно со "золотой рамкой"
  const allClaimed = ivent.days === (progress.claimedDays ? progress.claimedDays.length : 0);
  const noMissed = checkNoMissedDays(progress, ivent.days);
  if (allClaimed && noMissed && ivent.finalReward) {
    const skinId = ivent.finalReward.id || 'crypto_heart';
    const got = d.skins && d.skins[skinId];
    html += `
      <div class="ivent-skin-reward">
        <div class="gold-frame">
          <img src="${rewardImages['skin'] || 'heart.png'}" alt="${ivent.finalReward.name}" style="width:110px; height:110px; border-radius:14px;">
        </div>
        <div style="font-weight:bold; color:#ffb74d; font-size:18px; margin-top:10px;">${ivent.finalReward.name}</div>
        <div style="font-size:12px; opacity:0.8; margin-top:6px;">${ivent.finalReward.description || ''}</div>
        ${!got ? `<button onclick="claimFinalReward('${skinId}')" style="margin-top:12px;background:#ff9800;color:#000;padding:10px 18px;border-radius:10px;border:none;font-weight:bold;">🎁 Получить скин</button>` :
                `<div style="margin-top:12px;color:#2e7d32;font-weight:bold;">✅ Скин уже получен!</div>`}
      </div>
    `;
  }

html += `<div class="ivent-countdown" id="iventCountdownWrapper" style="display:none; margin-top:10px; font-size:13px; color:#ffb74d;">
  Скоро? <span id="iventCountdown">00:00:00</span>
</div>`;

    container.innerHTML = html;

  // Запустить/обновить таймер до следующей доступной награды (если нужно)
  startIventCountdown(ivent);
}

let __iventCountdownInterval = null;

function startIventCountdown(ivent) {
  // Очистка предыдущего интервала
  if (__iventCountdownInterval) {
    clearInterval(__iventCountdownInterval);
    __iventCountdownInterval = null;
  }

  if (!ivent) return;
  const progress = d.ivents && d.ivents[ivent.id] ? d.ivents[ivent.id] : { claimedDays: [], lastClaimDate: null };
  if (!progress.lastClaimDate) {
    // нет даты — ничего не показываем
    const wrap = document.getElementById('iventCountdownWrapper');
    if (wrap) wrap.style.display = 'none';
    return;
  }

  const ms24 = 24 * 60 * 60 * 1000;
  function updateOnce() {
    const now = Date.now();
    const elapsed = now - progress.lastClaimDate;
    const remaining = ms24 - elapsed;

    // Если время вышло — остановить таймер и перерендерить событие
    if (remaining <= 0) {
      const wrap = document.getElementById('iventCountdownWrapper');
      if (wrap) wrap.style.display = 'none';
      clearInterval(__iventCountdownInterval);
      __iventCountdownInterval = null;
       renderIvent(ivent);
      // перерисуем — теперь станет доступен следующий день
      return;
    }

    // Формат HH:MM:SS
    const hrs = Math.floor(remaining / (1000 * 60 * 60));
    const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remaining % (1000 * 60)) / 1000);
    const fmt = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

    let el = document.getElementById('iventCountdown');
    let wrap = document.getElementById('iventCountdownWrapper');
    if (!wrap) {
      // создать контейнер если его нет
      const container = document.getElementById('iventContainer');
      if (container) {
        const html = `<div class="ivent-countdown" id="iventCountdownWrapper" style="margin-top:10px; font-size:13px; color:#ffb74d;">
          Скоро? <span id="iventCountdown">${fmt}</span>
        </div>`;
        container.insertAdjacentHTML('beforeend', html);
        wrap = document.getElementById('iventCountdownWrapper');
        el = document.getElementById('iventCountdown');
      }
    }
    if (wrap) wrap.style.display = 'block';
    if (el) el.textContent = fmt;
  }

  // Первый вызов сразу
  updateOnce();
  // Обновлять каждую секунду
  __iventCountdownInterval = setInterval(updateOnce, 1000);
}

// Получить текущий день события
function getCurrentIventDay(ivent) {
  const progress = d.ivents[ivent.id] || { claimedDays: [], lastClaimDate: null };

  // Если сегодня уже получали награду, возвращаем тот же день
  const today = new Date().toDateString();
  if (progress.lastClaimDate && new Date(progress.lastClaimDate).toDateString() === today) {
    // Ищем последний полученный день (без ошибки)
    const lastClaimed = Math.max(...(progress.claimedDays && progress.claimedDays.length ? progress.claimedDays : [0]));
    return lastClaimed || 1;
  }

  // Если это первый вход, начинаем с 1
  if (!progress.claimedDays || progress.claimedDays.length === 0) {
    return 1;
  }

  // Возвращаем следующий день после последнего полученного
  const lastClaimed = Math.max(...(progress.claimedDays));
  return Math.min(lastClaimed + 1, ivent.days);
}

// ДОБАВЬТЕ эту функцию для проверки, можно ли получить награду:
function canClaimIventReward(day) {
  if (!currentIvent) return false;
  const progress = d.ivents && d.ivents[currentIvent.id] ? d.ivents[currentIvent.id] : { claimedDays: [], lastClaimDate: null };

  // Уже взяли?
  if (progress.claimedDays && progress.claimedDays.includes(day)) return false;

  // Разрешено только по порядку: можно брать только следующий день
  const lastClaimed = (progress.claimedDays && progress.claimedDays.length) ? Math.max(...progress.claimedDays) : 0;
  if (day !== lastClaimed + 1) return false;

  // Проверка 24 часов от последнего получения:
  const ms24 = 24 * 60 * 60 * 1000;
  if (!progress.lastClaimDate) return true; // ничё не брали — можно
  const now = Date.now();
  return (now - progress.lastClaimDate) >= ms24;
}

// Получить награду за день
// ОБНОВИТЕ функцию claimIventReward:

function claimIventReward(day) {
  if (!currentIvent) return;
  if (!d.ivents) d.ivents = {};
  if (!d.ivents[currentIvent.id]) d.ivents[currentIvent.id] = { claimedDays: [], lastClaimDate: null };
  const progress = d.ivents[currentIvent.id];

  // уже взяли?
  if (progress.claimedDays && progress.claimedDays.includes(day)) {
    showToast('Уже получено');
    return;
  }

  // Проверяем 24-часовое правило и порядок
  if (!canClaimIventReward(day)) {
    showToast('Ещё не доступно');
    return;
  }

  // проверка текущего дня
  const currentDay = getCurrentIventDay(currentIvent);
  if (day !== currentDay) {
    // если пользователь хочет получить более ранний день — запрещаем
    if (day > currentDay) { showToast('Ещё не доступно'); return; }
    // если это прошедший день, можно пометить как пропущенный — но не выдаём
  }

  // пометить как полученный
  progress.claimedDays.push(day);
  progress.lastClaimDate = Date.now();

  // найти награду
  const reward = (currentIvent.rewards || []).find(r => r.day === day) || {};

  // сразу выдаём содержимое в зависимости от типа (auto-open)
  switch ((reward.type || '').toString()) {
   case 'capsule':
  // НЕ добавляем в счетчик, а сразу открываем
  d.capsule.lastOpen = 0; // Сбрасываем таймер
  d.capsule.firstOpen = false;
  save();
  showToast('Капсула получена!');
  // Запускаем открытие сразу
  setTimeout(() => startCapsuleSequence(), 500);
  break;

    case 'noobBox':
  // Устанавливаем флаг, что бокс получен
  if (!d.noobBox) d.noobBox = { obtained: false, opened: false, taps: 0, lastOpen: 0 };
  d.noobBox.obtained = true;
  d.noobBox.opened = false;
  d.noobBox.taps = 0;
  save();
  showToast('Noob Box получен!');
  // Запускаем открытие сразу
  setTimeout(() => startNoobBoxSequence(), 500);
  break;

    case 'goldCapsule':
  // Устанавливаем флаг, что золотая капсула получена
  if (!d.goldCapsule) d.goldCapsule = { obtained: false, opened: false, taps: 0, lastOpen: 0 };
  d.goldCapsule.obtained = true;
  d.goldCapsule.opened = false;
  d.goldCapsule.taps = 0;
  save();
  showToast('Золотая капсула получена!');
  // Запускаем открытие сразу
  setTimeout(() => startGoldCapsuleSequence(), 500);
  break;

    case 'skin':
      // Если день даёт скин — добавим сразу в d.skins
      if (!d.skins) d.skins = {};
      const skinId = reward.id || (currentIvent.finalReward && currentIvent.finalReward.id);
      if (skinId) {
        d.skins[skinId] = 1;
        // обновляем превью и интерфейс
        if (typeof updateSkinPreviews === 'function') updateSkinPreviews();
        if (typeof updateSkinButtons === 'function') updateSkinButtons();
        showToast(`Скин ${reward.name || skinId} получен`);
      } else {
        showToast('Скин получен');
      }
      save();
      break;

    default:
      // другие типы — например токены
      if (reward.type === 'kspt' || reward.type === 'tokens') {
        const v = reward.value || 0;
        d.tokens = (d.tokens || 0) + v;
        save();
        showToast(`+${v} KSPT`);
      } else {
        showToast('Награда получена');
        save();
      }
      break;
  }

  // сохраняем прогресс события и обновляем интерфейс
  save();
  renderIvent(currentIvent);
  updateSkinPreviews && updateSkinPreviews();
  ui && ui();
}

function claimFinalReward() {
  if (!currentIvent) return;
  if (!currentIvent.finalReward) return;
  const skinId = currentIvent.finalReward.id;
  if (!d.skins) d.skins = {};
  if (d.skins[skinId]) {
    showToast('Скин уже получен!');
    return;
  }

  // Пометить в данных
  d.skins[skinId] = 1;

  // Обновить магазин — создаём карточку, если нужно
  const skinsScreen = document.getElementById('skins');
  if (skinsScreen) {
    const skinCard = document.createElement('div');
    skinCard.className = 'card skin-card';
    skinCard.id = 'skinCard_' + skinId;
    skinCard.innerHTML = `
      <div class="card-img"><img id="skin-img-${skinId}" src="heart.png" /></div>
      <div class="card-title">${currentIvent.finalReward.name}</div>
      <div class="card-desc">${currentIvent.finalReward.description}</div>
      <button onclick="selectSkin('${skinId}')" class="btn-select">${t('select')}</button>
    `;
    const lastCard = skinsScreen.querySelector('.card:last-of-type');
    if (lastCard) skinsScreen.insertBefore(skinCard, lastCard.nextSibling);
    else skinsScreen.appendChild(skinCard);
  }

  // Сохраняем и обновляем UI
  save();
  updateSkinButtons && updateSkinButtons();
  updateSkinPreviews && updateSkinPreviews();
  ui && ui();

  showToast('🎉 Скин получен!');
}

// Обновить анимацию скина (добавьте в функцию handleSkinAnimation)
// Найдите функцию handleSkinAnimation и добавьте:
function handleSkinAnimation() {
  if (d.settings && d.settings.animation && !d.settings.animation.skins) {
    return;
  }
  
  const coin = document.getElementById('coin');
  if (!coin) return;

  const currentSkin =
  coin.dataset.currentSkin ||
  d.ekshopSkin ||
  d.skin;

  // Добавляем анимацию для скинов из EK Shop
  switch(currentSkin) {
    // ... существующие скины ...
    
    case "skin_tetris":
    case "tetris":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "tetrisik1.png" : "tetrisik.png";
      break;
      
    case "skin_joystick":
    case "joystick":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "dzoi1.png" : "dzoi.png";
      break;
      
    case "skin_snake":
    case "snake":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "zmej1.png" : "zmej.png";
      break;
    
    // case "crypto_heart":
     // coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
     // coin.src = coin.dataset.toggle === "1" ? "heart1.png" : "heart.png";
     // break;
      
    // ... остальные скины ...
  }
}

function checkNoMissedDays(progress, totalDays) {
  if (!progress.claimedDays || progress.claimedDays.length !== totalDays) {
    return false;
  }
  
  // Проверяем, что все дни от 1 до totalDays присутствуют
  for (let day = 1; day <= totalDays; day++) {
    if (!progress.claimedDays.includes(day)) {
      return false;
    }
  }
  
  return true;
}

// ===============================
// MINI GAMES (Snake / Pong)
// ===============================

function startGame(gameName) {
  const gameContainer = document.getElementById('gameContainer');
  const frameContainer = document.getElementById('gameFrameContainer');

  if (!gameContainer || !frameContainer) {
    console.error('Game containers not found');
    return;
  }

  // очистить старую игру
  frameContainer.innerHTML = '';

  // создать iframe
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';

  if (gameName === 'snake') {
    iframe.src = 'games/snake.html';
  } else if (gameName === 'pong' || gameName === 'pingpong') {
    iframe.src = 'games/pingpong.html';
  } else {
    console.warn('Unknown game:', gameName);
    return;
  }

  frameContainer.appendChild(iframe);

  // показать экран с игрой
  gameContainer.style.display = 'block';
}

// вызывается ИЗ ИГРЫ
function exitGame() {
  const frameContainer = document.getElementById('gameFrameContainer');
  const gameContainer = document.getElementById('gameContainer');

  if (frameContainer) frameContainer.innerHTML = '';
  if (gameContainer) gameContainer.style.display = 'none';
}

// ===== EKSHOP MESSAGE FORCE SYNC =====
window.addEventListener('message', function(ev) {
  const data = ev.data;
  if (!data || typeof data !== 'object') return;
    // ===== KS: game control messages from iframe =====
  try {
    // mark game-over state (iframe should send when showing its Game Over UI)
    if (data.type === 'kspt_game_over') {
      gameOverActive = true;
      // optional: remember which iframe/window sent it
      window.__kspt_last_sender = ev.source;
      return;
    }

    // iframe cleared game-over (e.g. returned to playing state)
    if (data.type === 'kspt_clear_game_over') {
      gameOverActive = false;
      return;
    }

    // iframe requests a restart (user pressed "Restart" inside the iframe UI)
    if (data.type === 'kspt_request_restart') {
      // If parent thinks we're currently in Game Over screen — disallow restart button behavior
      if (gameOverActive) {
        showToast('Use Play Again or Exit To Menu'); // or t('...') if you prefer localization
        // notify iframe so it can block its own restart flow if needed
        try { ev.source.postMessage({ type: 'kspt_restart_denied', reason: 'game_over_active' }, '*'); } catch(e){}
        return;
      }

      // check tickets
      if (!gameTickets || gameTickets.current < 1) {
        showToast('Not enough tickets to restart');
        try { ev.source.postMessage({ type: 'kspt_restart_denied', reason: 'no_tickets' }, '*'); } catch(e){}
        return;
      }

      // confirm with user (parent UI)
      const ok = confirm('Are you sure? Cost: 1 Ticket.');
      if (!ok) {
        try { ev.source.postMessage({ type: 'kspt_restart_canceled' }, '*'); } catch(e){}
        return;
      }

      // consume 1 ticket and notify iframe to actually restart
      gameTickets.current = Math.max(0, Number(gameTickets.current) - 1);
      if (!gameTickets.nextRefill) gameTickets.nextRefill = Date.now() + REFILL_INTERVAL_MS;
      saveTickets();
      updateTicketsUI();

      try { ev.source.postMessage({ type: 'kspt_restart_confirmed' }, '*'); } catch(e){}
      return;
    }

    // iframe requests "Play Again" from Game Over tab (separate flow from restart)
    if (data.type === 'kspt_request_play_again') {
      // when in gameOverActive, Play Again is allowed only if tickets >= 1
      if (!gameTickets || gameTickets.current < 1) {
        showToast('Not enough tickets to play again');
        try { ev.source.postMessage({ type: 'kspt_play_denied', reason: 'no_tickets' }, '*'); } catch(e){}
        return;
      }

      // consume ticket and notify iframe it's allowed to start a fresh run
      gameTickets.current = Math.max(0, Number(gameTickets.current) - 1);
      if (!gameTickets.nextRefill) gameTickets.nextRefill = Date.now() + REFILL_INTERVAL_MS;
      saveTickets();
      updateTicketsUI();

      try { ev.source.postMessage({ type: 'kspt_play_confirmed' }, '*'); } catch(e){}
      // clear gameOver flag — iframe will set it again when it reaches Game Over next time
      gameOverActive = false;
      return;
    }
  } catch (e) {
    console.warn('kspt message handler failed', e);
  }
  // ===== end KS messages =====

  if (data.type === 'ekshop_update') {
    try {
      if (data.owned) {
        localStorage.setItem('ekshop_owned', JSON.stringify(data.owned));
      }

      if (data.selected) {
        localStorage.setItem('ekshop_selected', JSON.stringify(data.selected));

        if (typeof d !== 'undefined') {
          d.ekshop_selected = data.selected;
          d.ekshop_owned = data.owned || {};

          if (data.selected.skin) {
            d.ekshopSkin = data.selected.skin;
            d.skin = 'default';
          }

          if (data.selected.bg) {
            d.ekshopBg = data.selected.bg;
            d.bg = 'default';
          }

          try { save(); } catch(e){}
        }

        try { ui(); } catch(e){}
        try { updateBackground(); } catch(e){}
      }
    } catch(err) {
      console.warn('ekshop_update handler failed', err);
    }
  }
});

// Запуск игры
initGame();