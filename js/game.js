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
    'east_shop_tab_skins': 'Skins',
    'east_shop_tab_easter': 'Easter',
    'east_shop_title': '🐣 Easter Shop',
    'east_currency': 'Eggs',
    'east_egg_collect': 'Collect!',
    'east_egg_tap': 'Tap the egg!',
    'east_shop_open_egg': '🥚 Open Egg',
    'east_shop_open_egg_desc': 'Scratch open a bonus egg',
    'east_shop_open_egg_price': '20 eggs',
    'east_shop_open_egg_cooldown': 'Cooldown: 5 min',
    'east_shop_skin': '🐣 Easter Egg Skin',
    'east_shop_skin_desc': 'Egg Coin!',
    'east_shop_skin_price': '90 eggs',
    'east_shop_already_owned': 'Already owned',
    'east_shop_buy': 'Buy',
    'east_shop_cooldown_left': 'Cooldown: {0}s',
    'east_balance_label': '🥚 Eggs: {0}',
    'east_event_started': '🐣 Easter Event is live!',
    'east_event_ended': 'Easter Event has ended.',
    'east_admin_started': '🐣 Easter Event started!',
    'east_admin_stopped': 'Easter Event stopped.',
    
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
    'spanish_desc': 'Spanish language',
    'chinese_desc': 'Chinese language',
    '3d_effect': '3D Coin Effect',
    '3d_effect_desc': 'Tilt the coin with mouse/finger',
    'settings_profile': 'Profile Settings',
    'settings_profile_desc': 'Customize your profile experience',
    'profile_tab_location': 'Profile tab location',
    'profile_tab_bottom': 'Bottom bar (default)',
    'profile_tab_settings': 'In Settings (below Records)',
    'privacy_add_friends': 'Who can add me as a friend?',
    'privacy_send_reactions': 'Who can send me reactions?',
    'privacy_view_info': 'Who can view my account info?',
    'privacy_view_avatar': 'Who can view my avatar?',
    'privacy_everyone': 'Everyone',
    'privacy_friends': 'Friends only',
    'privacy_nobody': 'Nobody',
    'maintenance_reason_technical': 'Technical issues',
    'maintenance_reason_update': 'System update',
    'maintenance_reason_database': 'Database maintenance',
    'maintenance_reason_security': 'Security patch',
    'profile_total_taps': 'Total Taps',
    'profile_diamond_capsule': 'Next 💎',
    'diamond_capsule': 'Diamond Capsule',
    'diamond_capsule_sub': 'Every 7th regular capsule',
    'diamond_key': '💎 Diamond Key',
    'diamond_key_obtained': 'Diamond Key obtained!',
    'diamond_bg': 'Diamond Background',
    'diamond_bg_unlocked': 'Diamond Background unlocked!',
    'skin_diamond_kspt': 'Diamond KSPT',
    'skin_precious_coin': 'Precious Coin',
    'music_diamond': 'Diamond Melody',
    'mili_box': 'Cuteness Box',
    'mili_box_sub': 'A box full of cuteness',
    'skin_mops': 'Pug',
    'skin_bulldog': 'Bulldog',
    'bg_zoo': 'Zoo',
    'bg_zoo_unlocked': 'Zoo background unlocked!',
    'tap_emote': 'Tap Emote',
    'tap_emote_desc': 'Floating emote on coin tap',
    'tap_emote_section': 'Tap Animation',
    'emote_heart': 'Emote With Heart',
    'tap_emote_none': 'None',
    'fuse_tab': 'Fuse',
    'fuse_title': '⚗️ Fuse Machine',
    'fuse_sub': 'Combine 2 skins to get a new one',
    'fuse_slot_left': 'Skin 1',
    'fuse_slot_right': 'Skin 2',
    'fuse_select_skin': 'Select skin',
    'fuse_possible': 'Possible outcome',
    'fuse_pay_kspt': 'Pay KSPT',
    'fuse_pay_ek': 'Pay EK',
    'fuse_fusing': 'Fusing...',
    'fuse_ready': 'Ready!',
    'fuse_cooldown': 'Cooldown: {0}h',
    'fuse_result': '✨ Fusion Complete!',
    'fuse_frozen': 'Skin is in Fuse',
    'fuse_need_2': 'Select 2 different skins',
    'fuse_collection': 'Fuse Collection',
    'fuse_bg_reward': '🔬 Lab background unlocked!',
    'fuse_all_collected': '🎉 All 20 Fuse skins! Lab unlocked!',
    'rarity_fuse_common': 'Common',
    'rarity_fuse_rare': 'Rare',
    'rarity_fuse_champion': 'Champion',
    'rarity_fuse_secret': 'Secret',
    'rarity_fuse_god': 'Secret God',
    'dkey_milicuteness': 'Cuteness Box x2',
    'dkey_tokens': '+20 Tokens',
    
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
    'boxing': 'Boxing',
    'golf': 'Golf',
    'checkers': 'Checkers',
    'jenga': 'Jenga',
    'card_games': 'Card Games',
    'domino': 'Domino',
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
    'bet': 'Plinko',
    'plinko_title': 'Plinko Drop',
    'plinko_desc': 'Drop the ball — win big or lose it all',
    'plinko_amount': 'Stake (1–50 KSPT):',
    'plinko_pick_color': 'Pick your color:',
    'plinko_pick_mult': 'Pick multiplier:',
    'plinko_play': 'DROP BALL 🔮',
    'plinko_win': '🎉 WIN! +{0} KSPT',
    'plinko_lose': '💀 Lost {0} KSPT',
    'plinko_tries': '{0}/5 tries left',
    'plinko_cooldown': 'Next try in {0}',
    'plinko_no_tries': 'No tries left',
    'plinko_full_cd': 'Full refill in {0}',
    'plinko_not_enough': 'Not enough KSPT',
    'plinko_invalid': 'Enter 1–50 KSPT',
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

    //Egg
    'easter_egg_box': 'Easter Egg',
    'skin_eggi_name': 'Easter Egg',
    'skin_viking_name': 'Vikings',
    'skin_wheel_name': 'Wheel',
    'skin_target_name': 'Target',
    'skin_bird_name': 'Bird from Flappy',
    'target_quest_title': 'Quest Master: complete 50 daily/weekly quests',
    'target_quest_unlocked': '🎯 Target skin unlocked!',
    'easter_egg_desc': 'Swipe to scratch open!',
    'easter_egg_obtained': '🥚 Easter Egg obtained!',
    
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
    'zneton_label': 'Tokens',
    'ivent_error': 'Error loading events',

    // Noob and Bomb Box
    'noob_box': 'Noob Box',
    'noob_box_desc': 'A special box for beginners (+skin)',
    'noob_box_obtained': 'Noob Box obtained!',
    'bomb_box_hold': 'Hold to detonate...',
    'bomb_box_obtained': '💣 Bomb obtained!',
    'bomb_box_bg': '💧 Bomb In The Water background unlocked!',
     
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
    'ticker_label': 'Ticker (3-8 characters):',
    'name_label': 'Token Name:',
    'desc_label': 'Description:',
    'supply_label': 'Total Supply:',
    'token_icon': 'Token Icon:',
    'upload_image': 'Upload Image',
    'default_icon': 'Default icon will be used if none selected',
    'creation_cost': 'Creation Cost',
    'confirm_token': 'Create token {0} ({1}) with supply {2}? Initial price: {3} KSPT. Cost: {4} KSPT.',
    'need_kspt': 'Need {0} KSPT to create token',
    'ticker_error': 'Ticker must be 3-8 characters',
    'name_error': 'Name must be 1-20 characters',
    'desc_error': 'Description must be 10-250 characters',
    'supply_error': 'Supply must be 1-999999',
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
'next_ticket_in': 'Next tickets in:',
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

// Keys And GlitchBox
'all_puzzles_owned': 'All puzzle pieces owned!',
    'puzzle_next_wait': 'Next puzzle not ready yet!',
    'glitch_box_ready': 'Glitch Box ready to open!',
    'glitch_box_cooldown': 'Wait {0}h more!',
    'open_glitch_first': 'Open Glitch Box first',
    'open_capsule_first': 'Open Capsule first',
    'key_obtained': '{0} key obtained!',
    'max_keys': 'Max {0} keys!',
    'capsule_skipped': 'Capsule cooldown skipped!',
    'temp_reward': 'Temporary Reward',
    'hurry_reward': 'Hurry Reward!',
    'bg_code': 'Code Matrix',
    'locked_glitch': 'Locked',
    'music_glitch': 'Glitch / Hack Tune',
    'locked_glitch': 'Locked',
'skin_corrupted': 'Corrupted Skin',
'skin_failed': 'System Failure Skin',
    
    // General
    'purchase_success': 'Purchase successful',
    'offline_earnings': 'Offline earnings: {0} KSPT',
    'offline_bonus': '+25% offline bonus applied',
    'account_reset': 'Account reset due to cheating',
    'ban_removed': 'Ban removed',
    'invalid_key': 'Invalid key',
    'music_unlocked': 'Music unlocked!',
    'bonus_bg': 'Bonus background unlocked!',
    'puzzle_complete': 'Puzzle complete! Hamster Piece skin unlocked!',

// Leaderboard
    'leaderboard': 'Leaderboard',
    'leaderboard_desc': 'Top players by offline income',
    'leaderboard_your_rank': 'Your Rank',
    'leaderboard_no_players': 'No players yet',
    'leaderboard_updated': 'Updated: ',
    'leaderboard_you': 'you',
    'leaderboard_loading': 'Loading...',
    'records': 'Records',

    // Notifications settings
    'notifications_title': 'Themes & Features',
    'notifications_sub': 'Red dot badges on tabs when something needs your attention',
    'notifications_enable': 'Enable badges',
    'btn_theme': 'Button Style',
    'btn_theme_desc': 'Choose the style of main menu buttons',
    'btn_theme_default': 'Default',
    'btn_theme_stone': 'Stone',
    'notifications_sub_title': 'Notifications',
    'rarity_fuse': 'Fuse',
    'notifications_default': 'Default: OFF',

    // Fortune Wheel
    'fortune_wheel': 'Fortune Wheel',
    'spin_wheel': 'Spin the Wheel',
    'wheel_spin_cost': 'Cost: {0} KSPT',
    'wheel_cooldown': 'Cooldown: {0}h {1}m',
    'wheel_spins_left': 'Spins left: {0}/1',
    'wheel_cooldown_active': 'Wheel on cooldown',
    'wheel_requires_rate': 'Requires 400+ KSPT/h',
    'wheel_try_again': 'No luck! Try again.',
    'wheel_income_reward': '💰 +{0} KSPT!',
    'wheel_noob_box': '📦 Noob Box obtained!',
    'wheel_key_box': '🗝️ Key Box obtained!',
    'wheel_glitch_box': '⚡ Glitch Box ready!',
    'wheel_gold_capsule': '🌟 Gold Capsule obtained!',
    'wheel_blue_key': '🔑 Blue Key obtained!',
    'wheel_doge_skin': '🐶 KSPT: DogeToken skin unlocked!',
    'wheel_free_spin': '🎡 Free spin!',
    'wheel_spent': '-{0} KSPT spent on spin',
    'wheel_need_kspt': 'Need {0} KSPT to spin!',
    'wheel_odds_title': 'Prize Odds',

    // Key Box
    'key_box': 'Key Box',
    'key_box_tap': 'Tap to open!',
    'key_box_reward': 'Key obtained!',
    'black_key': 'Black Key (Joker)',
    'black_key_desc': 'Works in all shops!',

    // Notifications (settings)
    'notifications': 'Notifications',
    'notifications_desc': 'Red dot badges on tabs',
    'enable_badges': 'Enable badges',
    'badges_default_off': 'Default: OFF',

    // Promo new
    'promo_free_spin': '🎡 Free Fortune Wheel spin!',
    'promo_key_box': '🗝️ Key Box unlocked!',
    'promo_adminek': '✅ EK balance set to 10',

    // Admin Panel
    'admin_panel': '🛡 Admin Panel',
    'admin_global': 'Global',
    'admin_moderation': 'Moderation',
    'admin_broadcast': 'Broadcast Message',
    'admin_broadcast_send': 'Send to All',
    'admin_event_start': 'Start Tap Event',
    'admin_event_stop': 'Stop Event',
    'admin_give_opening': 'Give Opening to All',
    'admin_skip_cooldown': 'Skip Cooldown for All',
    'admin_give_tickets': 'Give Tickets to All',
    'admin_temp_skin': 'Temp Skin for All',
    'admin_select_player': 'Select Player',
    'admin_give_kspt': 'Give / Set KSPT',
    'admin_give_ek': 'Give / Set EK',
    'admin_ban': 'Ban Player',
    'admin_unban': 'Unban Player',
    'admin_personal_msg': 'Personal Message',
    'admin_give_capsule': 'Give Capsule',
    'admin_give_gold': 'Give Gold Capsule',
    'admin_give_noob': 'Give Noob Box',
    'admin_give_glitch': 'Give Glitch Box',
    'admin_give_key': 'Give Key Box',
    'admin_give_wheel': 'Give Fortune Spin',
    'admin_done': 'Done ✓',
    'admin_sending': 'Sending…',

    // Leaderboard online status
    'lb_online': '🟢 Online',
    'lb_less_hour': 'less than an hour ago',
    'lb_hours_ago': '{0}h ago',
    'lb_day_ago': 'a day ago',
    'lb_days_ago': '{0} days ago',
    'lb_week_ago': 'a week ago',
    'lb_weeks_ago': '{0} weeks ago',
    'lb_month_ago': 'a month ago',
    'lb_long_ago': 'more than a month ago',

    // Profile
    'profile': 'Profile',
    'profile_tab_profile': 'Profile',
    'profile_tab_friends': 'Friends',
    'profile_bio': 'Bio',
    'profile_bio_placeholder': 'Tell something about yourself...',
    'profile_fav_skin': 'Favourite Skin',
    'profile_fav_game': 'Favourite Game',
    'profile_copy_id': 'Copy ID',
    'profile_copied': 'ID copied!',
    'profile_save': 'Save',
    'profile_edit': 'Edit Profile',
    'profile_skins_owned': 'Skins owned',
    'profile_tokens_created': 'Tokens created',
    'profile_income': 'Income/h',
    'profile_playtime': 'Playtime',
    'profile_member_since': 'Member since',
    'profile_online': 'Online',
    'profile_offline': 'Last seen',
    'friends_add': 'Add Friend',
    'friends_search': 'Search by nickname...',
    'friends_enter_id': 'Enter player ID...',
    'friends_none': 'No friends yet',
    'friends_send_reaction': 'Send reaction',
    'friends_remove': 'Remove',
    'friends_not_found': 'Player not found',
    'friends_added': 'Friend added!',
    'friends_already': 'Already in friends',
    'friends_self': 'That\'s you!',
    'friends_request_sent': 'Friend request sent!',
    'friends_request_from': 'Friend request from',
    'friends_accept': 'Accept',
    'friends_decline': 'Decline',
    'friends_declined': 'Request declined',
    'profile_tickets_spent': 'Tickets spent',
    'profile_change_name': 'Change Name',
    'profile_change_avatar': 'Change Avatar',
    'profile_name_placeholder': 'Your name...',
    'profile_avatar_url': 'Avatar URL (or leave empty)',
    'rarity_common': 'Common',
    'rarity_rare': 'Rare',
    'rarity_epic_rare': 'Super Rare',
    'rarity_epic': 'Epic',
    'rarity_mythic': 'Mythic',
    'rarity_legendary': 'Legendary',
    'rarity_ultra': 'Ultra Legendary',
    'rarity_secret': 'Secret',
    'profile_reset_avatar': 'Reset avatar',
    'profile_reset_name': 'Name reset to Telegram name',
    'gift_box': 'Gift Box',
    'gift_box_desc': 'A gift from a friend!',
    'gift_box_obtained': '🎁 You received a gift!',
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

    // Egg
    'easter_egg_box': 'Пасхальное яйцо',
    'east_shop_tab_skins': 'Скины',
    'east_shop_tab_easter': 'Пасха',
    'east_shop_title': '🐣 Пасхальный магазин',
    'east_currency': 'Яйца',
    'east_egg_collect': 'Собрать!',
    'east_egg_tap': 'Нажми на яйцо!',
    'east_shop_open_egg': '🥚 Открыть яйцо',
    'east_shop_open_egg_desc': 'Поскретчи бонусное яйцо',
    'east_shop_open_egg_price': '20 яиц',
    'east_shop_open_egg_cooldown': 'Кулдаун: 5 мин',
    'east_shop_skin': '🐣 Скин Пасхальное яйцо',
    'east_shop_skin_desc': 'Монетка-яйцо!',
    'east_shop_skin_price': '90 яиц',
    'east_shop_already_owned': 'Уже куплено',
    'east_shop_buy': 'Купить',
    'east_shop_cooldown_left': 'Кулдаун: {0}с',
    'east_balance_label': '🥚 Яйца: {0}',
    'east_event_started': '🐣 Пасхальный ивент запущен!',
    'east_event_ended': 'Пасхальный ивент завершён.',
    'east_admin_started': '🐣 Пасхальный ивент запущен!',
    'east_admin_stopped': 'Пасхальный ивент остановлен.',
    'skin_eggi_name': 'Пасхальное яйцо',
    'skin_viking_name': 'Викинги',
    'skin_wheel_name': 'Колесо',
    'skin_target_name': 'Мишень',
    'skin_bird_name': 'Птица из Flappy',
    'target_quest_title': 'Мастер квестов: выполни 50 квестов',
    'target_quest_unlocked': '🎯 Скин Target разблокирован!',
    'easter_egg_desc': 'Свайпайте чтобы открыть!',
    'easter_egg_obtained': '🥚 Пасхальное яйцо получено!',
    
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
    'spanish_desc': 'Испанский язык',
    'chinese_desc': 'Китайский язык',
    '3d_effect': '3D эффект монеты',
    '3d_effect_desc': 'Наклоняйте монету мышью/пальцем',
    'settings_profile': 'Настройки профиля',
    'settings_profile_desc': 'Настройте отображение профиля',
    'profile_tab_location': 'Расположение вкладки профиля',
    'profile_tab_bottom': 'Нижняя панель (по умолч.)',
    'profile_tab_settings': 'В настройках (ниже рекордов)',
    'privacy_add_friends': 'Кто может добавлять меня в друзья?',
    'privacy_send_reactions': 'Кто может отправлять мне эмоции?',
    'privacy_view_info': 'Кто может видеть мою информацию?',
    'privacy_view_avatar': 'Кто может видеть мою аватарку?',
    'privacy_everyone': 'Все',
    'privacy_friends': 'Только друзья',
    'privacy_nobody': 'Никто',
    'maintenance_reason_technical': 'Технические неполадки',
    'maintenance_reason_update': 'Обновление системы',
    'maintenance_reason_database': 'Обслуживание базы данных',
    'maintenance_reason_security': 'Патч безопасности',
    'profile_total_taps': 'Всего тапов',
    'profile_diamond_capsule': 'След. 💎',
    'diamond_capsule': 'Алмазная капсула',
    'diamond_capsule_sub': 'Каждая 7-я обычная капсула',
    'diamond_key': '💎 Алмазный ключ',
    'diamond_key_obtained': 'Алмазный ключ получен!',
    'diamond_bg': 'Алмазный фон',
    'diamond_bg_unlocked': 'Алмазный фон разблокирован!',
    'skin_diamond_kspt': 'Алмазный KSPT',
    'skin_precious_coin': 'Драгоценная монета',
    'music_diamond': 'Алмазная мелодия',
    'mili_box': 'Сундук Милоты',
    'mili_box_sub': 'Сундук, полный милоты',
    'skin_mops': 'Мопс',
    'skin_bulldog': 'Бульдог',
    'bg_zoo': 'Зоопарк',
    'bg_zoo_unlocked': 'Фон «Зоопарк» разблокирован!',
    'tap_emote': 'Эмоут при тапе',
    'tap_emote_desc': 'Летящий эмоут при нажатии на монету',
    'tap_emote_section': 'Анимация Тапа',
    'emote_heart': 'Эмоут с сердечком',
    'tap_emote_none': 'Нет',
    'fuse_tab': 'Слияние',
    'fuse_title': '⚗️ Машина Слияния',
    'fuse_sub': 'Объедини 2 скина и получи новый',
    'fuse_slot_left': 'Скин 1',
    'fuse_slot_right': 'Скин 2',
    'fuse_select_skin': 'Выбрать скин',
    'fuse_possible': 'Возможный результат',
    'fuse_pay_kspt': 'Заплатить KSPT',
    'fuse_pay_ek': 'Заплатить EK',
    'fuse_fusing': 'Слияние...',
    'fuse_ready': 'Готово!',
    'fuse_cooldown': 'Кулдаун: {0}ч',
    'fuse_result': '✨ Слияние завершено!',
    'fuse_frozen': 'Скин в машине Fuse',
    'fuse_need_2': 'Выберите 2 разных скина',
    'fuse_collection': 'Коллекция Fuse',
    'fuse_bg_reward': '🔬 Фон «Лаборатория» разблокирован!',
    'fuse_all_collected': '🎉 Все 20 Fuse скинов! Лаборатория разблокирована!',
    'rarity_fuse_common': 'Обычный',
    'rarity_fuse_rare': 'Редкий',
    'rarity_fuse_champion': 'Чемпионский',
    'rarity_fuse_secret': 'Секретный',
    'rarity_fuse_god': 'Секретный бог',
    'dkey_milicuteness': 'Сундук Милоты x2',
    'dkey_tokens': '+20 жетонов',
    
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

    // Keys And GlitchBox
    'all_puzzles_owned': 'Все пазлы уже собраны!',
    'puzzle_next_wait': 'Следующий пазл еще не готов!',
    'glitch_box_ready': 'Глитч Бокс готов к открытию!',
    'glitch_box_cooldown': 'Подождите еще {0}ч!',
    'open_glitch_first': 'Сначала откройте Глитч Бокс',
    'open_capsule_first': 'Сначала откройте Капсулу',
    'key_obtained': 'Получен {0} ключ!',
    'max_keys': 'Максимум {0} ключей!',
    'capsule_skipped': 'Таймер капсулы сброшен!',
    
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
    'boxing': 'Бокс',
    'golf': 'Гольф',
    'checkers': 'Шашки',
    'jenga': 'Дженга',
    'card_games': 'Карточные игры',
    'domino': 'Домино',
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
    'bet': 'Плинко',
    'plinko_title': 'Ставки Плинко',
    'plinko_desc': 'Брось шарик — выиграй или потеряй всё',
    'plinko_amount': 'Ставка (1–50 КСПТ):',
    'plinko_pick_color': 'Выбери цвет:',
    'plinko_pick_mult': 'Выбери множитель:',
    'plinko_play': 'БРОСИТЬ ШАР 🔮',
    'plinko_win': '🎉 ПОБЕДА! +{0} КСПТ',
    'plinko_lose': '💀 Потеряно {0} КСПТ',
    'plinko_tries': 'Попыток: {0}/5',
    'plinko_cooldown': 'Следующая через {0}',
    'plinko_no_tries': 'Нет попыток',
    'plinko_full_cd': 'Полное восстановление через {0}',
    'plinko_not_enough': 'Недостаточно КСПТ',
    'plinko_invalid': 'Введите 1–50 КСПТ',
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
    'zneton_label': 'Жетоны',
    'ivent_error': 'Ошибка загрузки событий',

    // Noob and Bomb Box
    'noob_box': 'Нуб Кейс',
    'noob_box_desc': 'Особый ящик для новичков (+скин)',
    'noob_box_obtained': 'Нуб Кейс получен!',
    'bomb_box_hold': 'Удерживай для детонации...',
    'bomb_box_obtained': '💣 Бомба получена!',
    'bomb_box_bg': '💧 Фон Bomb In The Water разблокирован!',
    
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
    'ticker_label': 'Тикер (3-8 символов):',
    'name_label': 'Название токена:',
    'desc_label': 'Описание:',
    'supply_label': 'Общее предложение:',
    'token_icon': 'Иконка токена:',
    'upload_image': 'Загрузить изображение',
    'default_icon': 'Будет использована стандартная иконка если не выбрана',
    'creation_cost': 'Стоимость создания',
    'confirm_token': 'Создать токен {0} ({1}) с предложением {2}? Начальная цена: {3} KSPT. Стоимость: {4} KSPT.',
    'need_kspt': 'Нужно {0} KSPT для создания токена',
    'ticker_error': 'Тикер должен быть 3-8 символов',
    'name_error': 'Название должно быть 1-20 символов',
    'desc_error': 'Описание должно быть 10-250 символов',
    'supply_error': 'Предложение должно быть 1-999999',
    'image_cropped': 'Изображение обрезано успешно',
    'invalid_image': 'Пожалуйста, выберите валидное изображение',
    'my_token': 'Мой Токен',
    'token_desc': 'Опишите ваш токен...',

// GlitchBox
'temp_reward': 'Временная награда',
    'hurry_reward': 'Срочная награда!',
    'bg_code': 'Матрица Кода',
    'locked_glitch': 'Заблокировано',
    'music_glitch': 'Глитч Мелодия',
'skin_corrupted': 'Скин: Поврежденный',
'skin_failed': 'Скин: Системный сбой',

    // Mini-Games
'games_arcade': 'Игровая аркада',
'play_mini_games_desc': 'Играйте в мини-игры и зарабатывайте KSPT!',
'tickets_label': '🎫 Билеты:',
'tickets_left_today': 'У вас осталось {0} билетов сегодня',
'next_ticket_in': 'Следующие билеты через:',
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
'next_ticket_in': 'Следующий билет через:',
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
    'puzzle_complete': 'Пазл завершен! Скин Hamster Piece разблокирован!',

// Leaderboard
    'leaderboard': 'Таблица лидеров',
    'leaderboard_desc': 'Топ игроков по оффлайн доходу',
    'leaderboard_your_rank': 'Ваше место',
    'leaderboard_no_players': 'Пока нет игроков',
    'leaderboard_updated': 'Обновлено: ',
    'leaderboard_you': 'вы',
    'leaderboard_loading': 'Загрузка...',
    'records': 'Рекорды',

    // Notifications settings
    'notifications_title': 'Темы и Функции',
    'notifications_sub': 'Красные значки на вкладках когда есть что-то новое',
    'notifications_enable': 'Включить значки',
    'btn_theme': 'Стиль кнопок',
    'btn_theme_desc': 'Выберите стиль кнопок главного меню',
    'btn_theme_default': 'Обычный',
    'btn_theme_stone': 'Каменный',
    'notifications_sub_title': 'Уведомления',
    'rarity_fuse': 'Слияние',
    'notifications_default': 'По умолчанию: ВЫКЛ',

    // Fortune Wheel
    'fortune_wheel': 'Колесо Фортуны',
    'spin_wheel': 'Крутить колесо',
    'wheel_spin_cost': 'Стоимость: {0} KSPT',
    'wheel_cooldown': 'Перезарядка: {0}ч {1}м',
    'wheel_spins_left': 'Спинов осталось: {0}/1',
    'wheel_cooldown_active': 'Колесо на перезарядке',
    'wheel_requires_rate': 'Требуется 400+ KSPT/ч',
    'wheel_try_again': 'Не повезло! Попробуй снова.',
    'wheel_income_reward': '💰 +{0} KSPT!',
    'wheel_noob_box': '📦 Нуб Бокс получен!',
    'wheel_key_box': '🗝️ Ключ Бокс получен!',
    'wheel_glitch_box': '⚡ Глитч Бокс готов!',
    'wheel_gold_capsule': '🌟 Золотая Капсула получена!',
    'wheel_blue_key': '🔑 Синий ключ получен!',
    'wheel_doge_skin': '🐶 Скин KSPT: DogeToken разблокирован!',
    'wheel_free_spin': '🎡 Бесплатный спин!',
    'wheel_spent': '-{0} KSPT потрачено на спин',
    'wheel_need_kspt': 'Нужно {0} KSPT для спина!',
    'wheel_odds_title': 'Шансы призов',

    // Key Box
    'key_box': 'Ключ Бокс',
    'key_box_tap': 'Тапай чтобы открыть!',
    'key_box_reward': 'Ключ получен!',
    'black_key': 'Чёрный ключ (Джокер)',
    'black_key_desc': 'Работает во всех магазинах!',

    // Notifications (settings)
    'notifications': 'Уведомления',
    'notifications_desc': 'Красные значки на вкладках',
    'enable_badges': 'Включить значки',
    'badges_default_off': 'По умолчанию: ВЫКЛ',

    // Promo new
    'promo_free_spin': '🎡 Бесплатный спин на Колесе Фортуны!',
    'promo_key_box': '🗝️ Ключ Бокс разблокирован!',
    'promo_adminek': '✅ Баланс EK установлен на 10',

    // Admin Panel (RU)
    'admin_panel': '🛡 Панель Администратора',
    'admin_global': 'Глобальные',
    'admin_moderation': 'Модерация',
    'admin_broadcast': 'Сообщение всем',
    'admin_broadcast_send': 'Отправить всем',
    'admin_event_start': 'Запустить тап-ивент',
    'admin_event_stop': 'Остановить ивент',
    'admin_give_opening': 'Выдать открытие всем',
    'admin_skip_cooldown': 'Пропустить кулдаун всем',
    'admin_give_tickets': 'Выдать билеты всем',
    'admin_temp_skin': 'Временный скин всем',
    'admin_select_player': 'Выбрать игрока',
    'admin_give_kspt': 'Выдать / Задать KSPT',
    'admin_give_ek': 'Выдать / Задать EK',
    'admin_ban': 'Забанить',
    'admin_unban': 'Разбанить',
    'admin_personal_msg': 'Личное сообщение',
    'admin_give_capsule': 'Выдать Капсулу',
    'admin_give_gold': 'Выдать Золотую Капсулу',
    'admin_give_noob': 'Выдать Нуб Бокс',
    'admin_give_glitch': 'Выдать Глитч Бокс',
    'admin_give_key': 'Выдать Ключ Бокс',
    'admin_give_wheel': 'Выдать спин Колеса',
    'admin_done': 'Готово ✓',
    'admin_sending': 'Отправка…',

    // Leaderboard online status
    'lb_online': '🟢 Онлайн',
    'lb_less_hour': 'менее часа назад',
    'lb_hours_ago': '{0} ч назад',
    'lb_day_ago': 'день назад',
    'lb_days_ago': '{0} дн назад',
    'lb_week_ago': 'неделю назад',
    'lb_weeks_ago': '{0} нед назад',
    'lb_month_ago': 'месяц назад',
    'lb_long_ago': 'более месяца назад',

    // Owned/progress
    'owned_progress': 'Получено: {0}/9',
    'owned_simple': 'Получено',

   // Profile
    'profile': 'Профиль',
    'profile_tab_profile': 'Профиль',
    'profile_tab_friends': 'Друзья',
    'profile_bio': 'О себе',
    'profile_bio_placeholder': 'Расскажи о себе...',
    'profile_fav_skin': 'Любимый скин',
    'profile_fav_game': 'Любимая игра',
    'profile_copy_id': 'Скопировать ID',
    'profile_copied': 'ID скопирован!',
    'profile_save': 'Сохранить',
    'profile_edit': 'Редактировать',
    'profile_skins_owned': 'Скинов',
    'profile_tokens_created': 'Токенов создано',
    'profile_income': 'Доход/ч',
    'profile_playtime': 'Время в игре',
    'profile_member_since': 'В игре с',
    'profile_online': 'В сети',
    'profile_offline': 'Был в сети',
    'friends_add': 'Добавить друга',
    'friends_search': 'Поиск по нику...',
    'friends_enter_id': 'Введите ID игрока...',
    'friends_none': 'Нет друзей',
    'friends_send_reaction': 'Отправить реакцию',
    'friends_remove': 'Удалить',
    'friends_not_found': 'Игрок не найден',
    'friends_added': 'Друг добавлен!',
    'friends_already': 'Уже в друзьях',
    'friends_self': 'Это вы!',
    'friends_request_sent': 'Запрос дружбы отправлен!',
    'friends_request_from': 'Запрос дружбы от',
    'friends_accept': 'Принять',
    'friends_decline': 'Отклонить',
    'friends_declined': 'Запрос отклонён',
    'profile_tickets_spent': 'Потрачено билетов',
    'profile_change_name': 'Изменить ник',
    'profile_change_avatar': 'Изменить аватарку',
    'profile_name_placeholder': 'Ваш ник...',
    'profile_avatar_url': 'URL аватарки (или оставь пустым)',
    'rarity_common': 'Обычный',
    'rarity_rare': 'Редкий',
    'rarity_epic_rare': 'Сверхредкий',
    'rarity_epic': 'Эпический',
    'rarity_mythic': 'Мифический',
    'rarity_legendary': 'Легендарный',
    'rarity_ultra': 'Ультра Легендарный',
    'rarity_secret': 'Секретный',
    'profile_reset_avatar': 'Сбросить аватарку',
    'profile_reset_name': 'Имя сброшено на имя Telegram',
    'gift_box': 'Подарок',
    'gift_box_desc': 'Подарок от друга!',
    'gift_box_obtained': '🎁 Вы получили подарок!',
  },
es: {
    // Main UI
    'main_menu': 'Menú Principal',
    'market': 'Mercado',
    'back': 'Atrás',
    'buy': 'Comprar',
    'sell': 'Vender',
    'confirm': 'Confirmar',
    'cancel': 'Cancelar',
    'select': 'Seleccionar',
    'max': 'MÁX',
    'apply': 'Aplicar',
    'upgrade': 'Mejorar',
    'owned': 'Adquirido',
    'locked': 'Bloqueado',
    'price': 'Precio',
    'default': 'Predeterminado',
    'exclusive': 'Exclusivo',
    'capsule_exclusive': 'Exclusivo de Cápsula',
    'preview': 'Jugar 15s',
    'east_shop_tab_skins': 'Skins',
    'east_shop_tab_easter': 'Pascua',
    'east_shop_title': '🐣 Tienda de Pascua',
    'east_currency': 'Huevos',
    'east_egg_collect': '¡Recoger!',
    'east_egg_tap': '¡Toca el huevo!',
    'east_shop_open_egg': '🥚 Abrir Huevo',
    'east_shop_open_egg_desc': 'Rasca para abrir un huevo extra',
    'east_shop_open_egg_price': '20 huevos',
    'east_shop_open_egg_cooldown': 'Tiempo de espera: 5 min',
    'east_shop_skin': '🐣 Skin de Huevo de Pascua',
    'east_shop_skin_desc': '¡Moneda Huevo!',
    'east_shop_skin_price': '90 huevos',
    'east_shop_already_owned': 'Ya adquirido',
    'east_shop_buy': 'Comprar',
    'east_shop_cooldown_left': 'Tiempo de espera: {0}s',
    'east_balance_label': '🥚 Huevos: {0}',
    'east_event_started': '🐣 ¡El Evento de Pascua está en vivo!',
    'east_event_ended': 'El Evento de Pascua ha terminado.',
    'east_admin_started': '🐣 ¡Evento de Pascua iniciado!',
    'east_admin_stopped': 'Evento de Pascua detenido.',
    
    // Settings
    'settings': 'Ajustes',
    'choose_category': 'Elige una categoría',
    'vibration_sound': 'Vibración y Sonido',
    'animation': 'Animación',
    'backgrounds': 'Fondos',
    'language': 'Idioma',
    'vibration': 'Vibración',
    'haptic_feedback': 'Respuesta Háptica',
    'off': 'Desactivado',
    'low': 'Bajo',
    'medium': 'Medio',
    'strong': 'Fuerte',
    'tap_vibration': 'Vibración al tocar',
    'tap_vibration_desc': 'Por defecto: ENCENDIDO - Vibración al tocar la moneda',
    'button_vibration': 'Vibración de otros botones',
    'button_vibration_desc': 'Por defecto: ENCENDIDO - Vibración para botones de la interfaz',
    'music': 'Música',
    'game_soundtrack': 'Banda Sonora del Juego',
    'disable_music': 'Desactivar Música',
    'animation_settings': 'Ajustes de Animación',
    'control_animation': 'Controlar efectos de animación',
    'skins_animation': 'Animación de skins',
    'skins_animation_desc': 'Por defecto: ENCENDIDO - Controla animaciones de toque/ciclo de skins',
    'ui_transitions': 'Animación de transición de UI',
    'ui_transitions_desc': 'Por defecto: ENCENDIDO - Transiciones de página suaves',
    'language_settings': 'Ajustes de Idioma',
    'choose_language': 'Elige tu idioma preferido',
    'english_desc': 'Idioma predeterminado',
    'russian_desc': 'Idioma ruso',
    'spanish_desc': 'Idioma español',
    'chinese_desc': 'Idioma chino',
    '3d_effect': 'Efecto de Moneda 3D',
    '3d_effect_desc': 'Inclina la moneda con el ratón/dedo',
    'settings_profile': 'Ajustes de Perfil',
    'settings_profile_desc': 'Personaliza tu experiencia de perfil',
    'profile_tab_location': 'Ubicación de la pestaña de perfil',
    'profile_tab_bottom': 'Barra inferior (por defecto)',
    'profile_tab_settings': 'En Ajustes (debajo de Récords)',
    'privacy_add_friends': '¿Quién puede añadirme como amigo?',
    'privacy_send_reactions': '¿Quién puede enviarme reacciones?',
    'privacy_view_info': '¿Quién puede ver la información de mi cuenta?',
    'privacy_view_avatar': '¿Quién puede ver mi avatar?',
    'privacy_everyone': 'Todos',
    'privacy_friends': 'Solo amigos',
    'privacy_nobody': 'Nadie',
    'maintenance_reason_technical': 'Problemas técnicos',
    'maintenance_reason_update': 'Actualización del sistema',
    'maintenance_reason_database': 'Mantenimiento de la base de datos',
    'maintenance_reason_security': 'Parche de seguridad',
    'profile_total_taps': 'Toques Totales',
    'profile_diamond_capsule': 'Siguiente 💎',
    'diamond_capsule': 'Cápsula de Diamante',
    'diamond_capsule_sub': 'Cada 7ª cápsula regular',
    'diamond_key': '💎 Llave de Diamante',
    'diamond_key_obtained': '¡Llave de Diamante obtenida!',
    'diamond_bg': 'Fondo de Diamante',
    'diamond_bg_unlocked': '¡Fondo de Diamante desbloqueado!',
    'skin_diamond_kspt': 'KSPT de Diamante',
    'skin_precious_coin': 'Moneda Preciosa',
    'music_diamond': 'Melodía de Diamante',
    'mili_box': 'Caja de Ternura',
    'mili_box_sub': 'Una caja llena de ternura',
    'skin_mops': 'Pug',
    'skin_bulldog': 'Bulldog',
    'bg_zoo': 'Zoológico',
    'bg_zoo_unlocked': '¡Fondo Zoológico desbloqueado!',
    'tap_emote': 'Emote al Tocar',
    'tap_emote_desc': 'Emote flotante al tocar la moneda',
    'tap_emote_section': 'Animación de Toque',
    'emote_heart': 'Emote Con Corazón',
    'tap_emote_none': 'Ninguno',
    'fuse_tab': 'Fusionar',
    'fuse_title': '⚗️ Máquina de Fusión',
    'fuse_sub': 'Combina 2 skins para obtener una nueva',
    'fuse_slot_left': 'Skin 1',
    'fuse_slot_right': 'Skin 2',
    'fuse_select_skin': 'Seleccionar skin',
    'fuse_possible': 'Resultado posible',
    'fuse_pay_kspt': 'Pagar KSPT',
    'fuse_pay_ek': 'Pagar EK',
    'fuse_fusing': 'Fusionando...',
    'fuse_ready': '¡Listo!',
    'fuse_cooldown': 'Tiempo de espera: {0}h',
    'fuse_result': '✨ ¡Fusión Completada!',
    'fuse_frozen': 'La skin está en Fusión',
    'fuse_need_2': 'Selecciona 2 skins diferentes',
    'fuse_collection': 'Colección de Fusión',
    'fuse_bg_reward': '🔬 ¡Fondo de Laboratorio desbloqueado!',
    'fuse_all_collected': '🎉 ¡Las 20 skins de Fusión! ¡Laboratorio desbloqueado!',
    'rarity_fuse_common': 'Común',
    'rarity_fuse_rare': 'Raro',
    'rarity_fuse_champion': 'Campeón',
    'rarity_fuse_secret': 'Secreto',
    'rarity_fuse_god': 'Dios Secreto',
    'dkey_milicuteness': 'Caja de Ternura x2',
    'dkey_tokens': '+20 Tokens',
    
    // Backgrounds
    'customize_menu': 'Personaliza tu menú principal',
    'default_dark': 'Oscuro Predeterminado',
    'classic_style': 'Estilo clásico KSPT',
    'forest_vibe': 'Ambiente Forestal',
    'nature_look': 'Aspecto natural',
    'space_view': 'Vista Espacial',
    'space_skin': 'Incluido en la Skin Edición Espacial',
    'heaven': 'Cielo',
    'capsule_drop': 'Recompensa de Cápsula Rara',
    'rich_edition': 'KSPT: Edición Rica',
    'for_elite': 'Para la élite',
    'dead_pixel': 'Píxel Muerto',
    'pixel_bonus': 'Bono con la Skin Pixel Coin',
    'chrispy_candle': 'Vela Crujiente',
    'chrispy_desc': 'Las galletas más crujientes del mundo.',
    'locked_buy': 'Bloqueado (Comprar Skin Espacial)',
    'selected': 'Seleccionado',
    'locked_buy_cookie': 'Bloqueado (Comprar Skin Crypto Cookie)',
    'chrispy_bg_unlocked': '¡Fondo Vela Crujiente desbloqueado!',
    'bg_equipped': 'Fondo equipado: {0}',
    'bonus_bg_pixel': '¡Fondo Píxel Muerto desbloqueado!',
    
    // Skins
    'default_coin': 'Moneda Predeterminada',
    'standard_income': 'Estándar (+0 KSPT/h)',
    'price_income': 'Precio: {0} KSPT (+{1} KSPT/h)',
    'skin_animation': 'Skin + animación',
    'additional_skin': 'Skin + skin adicional',
    'skin_bg_animation': 'Skin + animación + fondo',
    'toggle_animation': 'Alternar animación + estilo visual',
    'expensive_skin': 'Skin más cara + animación',
    'locked_complete': 'BLOQUEADO (Completar Rompecabezas)',
    'locked_find': 'BLOQUEADO (Encontrar en Cápsula)',
    'locked_promo': 'BLOQUEADO (Usar Promo)',
    'special_win': 'Especial: Ganar apuesta x10 (+3 KSPT/h)',
    'special_skin_limit': 'Especial: Limitado a {0} jugadores (+3 KSPT/h)',
    'active': 'Activo',
    'owned_var': 'Adquirido (Variante {0})',
    'active_var': 'Activo (Variante {0})',
    'locked_win': 'BLOQUEADO (Ganar apuesta x10)',
    'sold_out': 'AGOTADO',
    'gold_kspt': 'KSPT de Oro',
    'cyber_android': 'KSPT: Androide Cibernético',
    'gold_skin_unlocked': '¡Skin KSPT de Oro desbloqueada!',
    'cyber_skin_unlocked': '¡Skin KSPT: Androide Cibernético desbloqueada!',
    'brb_skin': 'Gran Botón Rojo',
    'brb_skin_desc': 'Precio: 5,000,000 KSPT (+500 KSPT/h)',
    
    // Cards
    'company': 'Empresa',
    'sport': 'Deporte',
    'board_games': 'Juegos de Mesa',
    'personal_manager': 'Mánager Personal',
    'investors': 'Inversores',
    'office': 'Oficina',
    'security': 'Seguridad',
    'it_equipment': 'Equipamiento TI',
    'football': 'Fútbol',
    'basketball': 'Baloncesto',
    'volleyball': 'Voleibol',
    'hockey': 'Hockey',
    'handball': 'Balonmano',
    'boxing': 'Boxeo',
    'golf': 'Golf',
    'checkers': 'Damas',
    'jenga': 'Jenga',
    'card_games': 'Juegos de Cartas',
    'domino': 'Dominó',
    'chess': 'Ajedrez',
    'billiards': 'Billar',
    'bowling': 'Bolos',
    'level': 'Nivel {0}',
    'level_max': 'Nivel MÁX',
    'not_owned': 'No Adquirido',
    'unlock_condition': 'Desbloqueo: {0}',
    'current_upgrade': 'Actual: +{0}/h → Mejora: +{1}/h',
    
    // Tech
    'permanent_x2': 'x2 Permanente (Precio 5 KSPT)',
    'temporary_overdrive': 'Sobremarcha Temporal',
    'overdrive_desc': 'x10-x20 Toques por 25+ Segundos',
    'upgrade_energy': 'Mejorar Energía',
    'max_energy': 'Máx: 10,000 | +500 Energía',
    'energy_regeneration': 'Multiplicador de regeneración de energía',
    'bet': 'Plinko',
    'plinko_title': 'Caída Plinko',
    'plinko_desc': 'Suelta la bola — gana en grande o piérdelo todo',
    'plinko_amount': 'Apuesta (1–50 KSPT):',
    'plinko_pick_color': 'Elige tu color:',
    'plinko_pick_mult': 'Elige el multiplicador:',
    'plinko_play': 'SOLTAR BOLA 🔮',
    'plinko_win': '🎉 ¡GANA! +{0} KSPT',
    'plinko_lose': '💀 Perdiste {0} KSPT',
    'plinko_tries': 'Quedan {0}/5 intentos',
    'plinko_cooldown': 'Próximo intento en {0}',
    'plinko_no_tries': 'No quedan intentos',
    'plinko_full_cd': 'Recarga completa en {0}',
    'plinko_not_enough': 'No hay suficiente KSPT',
    'plinko_invalid': 'Ingresa 1–50 KSPT',
    'enter_promo': 'Ingresa código promocional',
    'multiplier': 'x{0} ({1}%)',
    'cooldown_ready': 'Tiempo de espera: Listo',
    'cooldown_minutes': 'Tiempo de espera: {0}m',
    'cooldown_hours': 'Tiempo de espera: {0}h {1}m',
    'active_seconds': 'Activo: quedan {0}s',
    'maxed': 'AL MÁXIMO',
    'max_energy': 'Energía máxima alcanzada',
    'max_regen': 'Máximo alcanzado',
    'current_max': 'Máx Actual: {0}',
    'current_regen': 'Actual: {0}',
    'upgrade_to': 'Mejorar a {0} ({1} KSPT)',
    'buy_upgrade': 'Comprar (+500) {0} KSPT',
    'back_to_main': 'Volver al Menú',
    'loading': 'Cargando...',

    // Egg
    'easter_egg_box': 'Huevo de Pascua',
    'skin_eggi_name': 'Huevo de Pascua',
    'skin_viking_name': 'Vikingos',
    'skin_wheel_name': 'Rueda',
    'skin_target_name': 'Objetivo',
    'skin_bird_name': 'Pájaro de Flappy',
    'target_quest_title': 'Maestro de Misiones: completa 50 misiones',
    'target_quest_unlocked': '🎯 ¡Skin Objetivo desbloqueada!',
    'easter_egg_desc': '¡Desliza para rascar y abrir!',
    'easter_egg_obtained': '🥚 ¡Huevo de Pascua obtenido!',
    
    // Capsule
    'ancient_puzzle': 'Rompecabezas Antiguo',
    'puzzle_desc': '¡Colecciona las 9 piezas para desbloquear la Skin Hamster Piece!',
    'owned_progress': 'Adquirido: {0}/9',
    'owned_simple': 'Adquirido',
    'place_pieces': 'Colocar Piezas Disponibles',
    'puzzle_completed': '¡Pronto aparecerá un nuevo rompecabezas!',
    'mystery_capsule': 'Cápsula Misteriosa',
    'ready': '¡Lista para abrir!',
    'open': '¡ABRIR!',
    'first_open_free': '¡La primera apertura es gratis!',
    'wait': 'Esperar',
    'cat_puzzle': 'Rompecabezas de Gato',
    'cat_puzzle_desc': '¡Colecciona las 9 piezas para desbloquear la skin Cat: KSPT!',
    'puzzle_completed2': '¡Rompecabezas completo! ¡Skin Cat: KSPT desbloqueada!',
    'gold_capsule_obtained': '¡Cápsula de Oro Secreta obtenida!',
    'gold_capsule_name': 'Cápsula de Oro Secreta',
    'gold_capsule_desc': 'Cápsula exclusiva de un solo uso. ¡Desbloquea objetos raros!',
    'lol_song': "Canción LOL",
    'bg_hell': 'Infierno',
    'bg_math': 'Matemáticas Locas',
    'gold_skin_unlocked': '¡KSPT de Oro desbloqueado!',
    'cyber_skin_unlocked': '¡KSPT: Androide Cibernético desbloqueado!',
    'cat_skin_unlocked': '¡Skin Cat: KSPT desbloqueada!',
    'cat_music_unlocked': '¡Música Cat\'s Yarn desbloqueada!',
    'ivent_title': 'Eventos Temporales',
    'ivent_desc': '¡Consigue recompensas todos los días!',
    'ivent_no_events': 'No hay eventos activos en este momento. Vuelve más tarde.',
    'zneton_label': 'Tokens',
    'ivent_error': 'Error al cargar eventos',

    // Noob and Bomb Box
    'noob_box': 'Caja Noob',
    'noob_box_desc': 'Una caja especial para principiantes (+skin)',
    'noob_box_obtained': '¡Caja Noob obtenida!',
    'bomb_box_hold': 'Mantén para detonar...',
    'bomb_box_obtained': '💣 ¡Bomba obtenida!',
    'bomb_box_bg': '💧 ¡Fondo Bomba En El Agua desbloqueado!',
     
    // Market
    'balance': 'Saldo: ',
    'offline_rate': 'Desconectado: {0} KSPT/h',
    'portfolio_value': 'Valor del Portafolio',
    'available_tokens': 'Tokens Disponibles',
    'personal_token': 'Token Personal',
    'create_token_desc': 'Crea tu propio token con icono personalizado',
    'create_token': 'Crear Token',
    'delete_token': 'Eliminar Token',
    'delete_warning': 'Advertencia: Eliminar el token venderá tus tenencias al precio actual',
    'enter_market': 'Entrar al Mercado',
    'market_desc': 'Opera tokens, rastrea precios y haz crecer tu portafolio',
    'edit': 'Editar',
    'enter_name': 'Ingresa tu nombre:',
    'enter_desc': 'Ingresa descripción (5-80 chars):',
    'desc_length': 'La descripción debe tener entre 5-80 caracteres',
    'your_holdings': 'Tus Tenencias',
    'value': 'Valor',
    'live_price': 'Precio en Vivo',
    'drag_to_pan': 'Arrastra el gráfico para desplazarte',
    'show_last_trades': 'Mostrar últimas operaciones',
    'buy_at': 'Comprar a',
    'sell_at': 'Vender a',
    'sell_token': 'Vender ({0})',
    'amount': 'Cantidad',
    'buy_limit': 'Límite de compra: {0} KSPT',
    'sell_cooldown': 'Tiempo de espera para vender: 40s',
    'buy_cooldown': 'Tiempo de espera para comprar: {0}s',
    'buy_cooldown_ready': 'Tiempo de espera para comprar: Listo',
    'wait_buy': 'Espera {0}s antes de la próxima compra',
    'wait_sell': 'Espera {0}s antes de vender',
    'amount_range': 'La cantidad debe ser {0}-{1} KSPT',
    'not_enough_kspt': 'No hay suficiente KSPT',
    'not_enough_tokens': 'No hay suficientes tokens',
    'enter_valid': 'Ingresa una cantidad válida',
    'bought_tokens': 'Compraste {0} {1}',
    'sold_tokens': 'Vendiste {0} tokens por {1} KSPT',
    'delete_wait': 'Espera {0} horas más antes de eliminar',
    'delete_warning_msg': '¿Estás seguro de que quieres eliminar tu token personal?',
    'delete_sell_warning': 'Posees {0} tokens por valor de {1} KSPT. Serán vendidos.',
    'delete_final_warning': ' Esta acción no se puede deshacer.',
    'token_created': '¡Token personal creado!',
    'token_deleted': 'Token personal eliminado',
    'token_details': 'Detalles del Token',
    'ticker_label': 'Ticker (3-8 caracteres):',
    'name_label': 'Nombre del Token:',
    'desc_label': 'Descripción:',
    'supply_label': 'Suministro Total:',
    'token_icon': 'Icono del Token:',
    'upload_image': 'Subir Imagen',
    'default_icon': 'Se usará el icono predeterminado si no se selecciona',
    'creation_cost': 'Costo de Creación',
    'confirm_token': '¿Crear token {0} ({1}) con suministro {2}? Precio inicial: {3} KSPT. Costo: {4} KSPT.',
    'need_kspt': 'Necesitas {0} KSPT para crear el token',
    'ticker_error': 'El Ticker debe tener de 3-8 caracteres',
    'name_error': 'El nombre debe tener de 1-20 caracteres',
    'desc_error': 'La descripción debe tener de 10-250 caracteres',
    'supply_error': 'El suministro debe ser de 1-999999',
    'image_cropped': 'Imagen recortada con éxito',
    'invalid_image': 'Por favor, selecciona una imagen válida',
    'my_token': 'Mi Token',
    'token_desc': 'Describe tu token...',
    
    // Promo codes
    'promo_skipfuse': '¡Tiempo de espera de cápsula omitido!',
    'promo_already_used': 'Promo ya utilizada',

    // Promo codes
    'promo_fuse': '¡Tiempo de espera de cápsula omitido!',

    // Cards Limited
    'limited_tab': 'Limitado',
    'card_yes_title': 'Sí',
    'card_no_title': 'No',
    'card_stick_title': 'Palo',
    'card_backpack_title': 'Mochila',
    'card_journey_title': 'Viaje',
    'card_challenge_title': 'Desafío',
    'card_bought': 'Comprado',
    'card_purchase_expired': 'Tiempo de Compra Expirado',
    'card_limited_time': '¡Tiempo Limitado! {0}',
    'card_income_per_hour': '+{0} KSPT/h',
    'card_buy': 'Comprar {0} KSPT',

    // EK Shop
    'ek_shop_title': 'Tienda EK',
    'close': 'Cerrar',
    'not_enough_ek': 'No hay suficiente EK',
    'already_owned': 'Ya adquirido',
    'price_ek': '{0} EK',

    // Mini-games / Tickets (english)
    'games_arcade': 'Arcade de Juegos',
    'play_mini_games_desc': '¡Juega minijuegos para ganar KSPT!',
    'tickets_label': '🎫 Entradas:',
    'tickets_left_today': 'Te quedan {0} entradas hoy',
    'next_ticket_in': 'Próximas entradas en:',
    'available_games': 'Juegos disponibles',
    'ticket_session_note': '1 entrada = 1 sesión de juego',
    'resume': 'Reanudar',

    // Events / Valentine
    'valentine_event_name': "Día de San Valentín",
    'valentine_event_desc': '¡Recoge recompensas diarias durante 7 días y gana una skin exclusiva!',
    'free_capsule': 'Cápsula gratis',
    'noob_box': 'Caja Noob',
    'gold_capsule': 'Cápsula de Oro',
    'crypto_heart': 'Cripto-corazón',
    'games': 'Juegos',

    // Keys And GlitchBox
    'all_puzzles_owned': '¡Todas las piezas del rompecabezas adquiridas!',
    'puzzle_next_wait': '¡El próximo rompecabezas aún no está listo!',
    'glitch_box_ready': '¡Glitch Box lista para abrir!',
    'glitch_box_cooldown': '¡Espera {0}h más!',
    'open_glitch_first': 'Abre la Glitch Box primero',
    'open_capsule_first': 'Abre la Cápsula primero',
    'key_obtained': '¡{0} llave obtenida!',
    'max_keys': '¡Máximo {0} llaves!',
    'capsule_skipped': '¡Tiempo de espera de cápsula omitido!',
    'temp_reward': 'Recompensa Temporal',
    'hurry_reward': '¡Recompensa Rápida!',
    'bg_code': 'Matriz de Código',
    'locked_glitch': 'Bloqueado',
    'music_glitch': 'Melodía Glitch / Hack',
    'locked_glitch': 'Bloqueado',
    'skin_corrupted': 'Skin Corrupta',
    'skin_failed': 'Skin de Fallo del Sistema',
    
    // General
    'purchase_success': 'Compra exitosa',
    'offline_earnings': 'Ganancias desconectado: {0} KSPT',
    'offline_bonus': 'Bono desconectado de +25% aplicado',
    'account_reset': 'Cuenta restablecida por trampa',
    'ban_removed': 'Ban removido',
    'invalid_key': 'Llave inválida',
    'music_unlocked': '¡Música desbloqueada!',
    'bonus_bg': '¡Fondo de bonificación desbloqueado!',
    'puzzle_complete': '¡Rompecabezas completo! ¡Skin Hamster Piece desbloqueada!',

    // Leaderboard
    'leaderboard': 'Tabla de Clasificación',
    'leaderboard_desc': 'Mejores jugadores por ingresos desconectado',
    'leaderboard_your_rank': 'Tu Rango',
    'leaderboard_no_players': 'No hay jugadores aún',
    'leaderboard_updated': 'Actualizado: ',
    'leaderboard_you': 'tú',
    'leaderboard_loading': 'Cargando...',
    'records': 'Récords',

    // Notifications settings
    'notifications_title': 'Temas y Funciones',
    'notifications_sub': 'Insignias de puntos rojos en las pestañas cuando algo necesita tu atención',
    'notifications_enable': 'Habilitar insignias',
    'btn_theme': 'Estilo de Botón',
    'btn_theme_desc': 'Elige el estilo de los botones del menú principal',
    'btn_theme_default': 'Predeterminado',
    'btn_theme_stone': 'Piedra',
    'notifications_sub_title': 'Notificaciones',
    'rarity_fuse': 'Fusión',
    'notifications_default': 'Por defecto: APAGADO',

    // Fortune Wheel
    'fortune_wheel': 'Rueda de la Fortuna',
    'spin_wheel': 'Girar la Rueda',
    'wheel_spin_cost': 'Costo: {0} KSPT',
    'wheel_cooldown': 'Tiempo de espera: {0}h {1}m',
    'wheel_spins_left': 'Giros restantes: {0}/1',
    'wheel_cooldown_active': 'Rueda en tiempo de espera',
    'wheel_requires_rate': 'Requiere más de 400 KSPT/h',
    'wheel_try_again': '¡Sin suerte! Inténtalo de nuevo.',
    'wheel_income_reward': '💰 ¡+{0} KSPT!',
    'wheel_noob_box': '📦 ¡Caja Noob obtenida!',
    'wheel_key_box': '🗝️ ¡Caja de Llaves obtenida!',
    'wheel_glitch_box': '⚡ ¡Glitch Box lista!',
    'wheel_gold_capsule': '🌟 ¡Cápsula de Oro obtenida!',
    'wheel_blue_key': '🔑 ¡Llave Azul obtenida!',
    'wheel_doge_skin': '🐶 ¡Skin KSPT: DogeToken desbloqueada!',
    'wheel_free_spin': '🎡 ¡Giro gratis!',
    'wheel_spent': '-{0} KSPT gastados en el giro',
    'wheel_need_kspt': '¡Necesitas {0} KSPT para girar!',
    'wheel_odds_title': 'Probabilidades de Premio',

    // Key Box
    'key_box': 'Caja de Llaves',
    'key_box_tap': '¡Toca para abrir!',
    'key_box_reward': '¡Llave obtenida!',
    'black_key': 'Llave Negra (Joker)',
    'black_key_desc': '¡Funciona en todas las tiendas!',

    // Notifications (settings)
    'notifications': 'Notificaciones',
    'notifications_desc': 'Insignias de puntos rojos en las pestañas',
    'enable_badges': 'Habilitar insignias',
    'badges_default_off': 'Por defecto: APAGADO',

    // Promo new
    'promo_free_spin': '🎡 ¡Giro gratis en la Rueda de la Fortuna!',
    'promo_key_box': '🗝️ ¡Caja de Llaves desbloqueada!',
    'promo_adminek': '✅ Saldo de EK establecido en 10',

    // Admin Panel
    'admin_panel': '🛡 Panel de Administración',
    'admin_global': 'Global',
    'admin_moderation': 'Moderación',
    'admin_broadcast': 'Mensaje de Difusión',
    'admin_broadcast_send': 'Enviar a Todos',
    'admin_event_start': 'Iniciar Evento de Toque',
    'admin_event_stop': 'Detener Evento',
    'admin_give_opening': 'Dar Apertura a Todos',
    'admin_skip_cooldown': 'Omitir Tiempo de Espera para Todos',
    'admin_give_tickets': 'Dar Entradas a Todos',
    'admin_temp_skin': 'Skin Temporal para Todos',
    'admin_select_player': 'Seleccionar Jugador',
    'admin_give_kspt': 'Dar / Establecer KSPT',
    'admin_give_ek': 'Dar / Establecer EK',
    'admin_ban': 'Banear Jugador',
    'admin_unban': 'Desbanear Jugador',
    'admin_personal_msg': 'Mensaje Personal',
    'admin_give_capsule': 'Dar Cápsula',
    'admin_give_gold': 'Dar Cápsula de Oro',
    'admin_give_noob': 'Dar Caja Noob',
    'admin_give_glitch': 'Dar Glitch Box',
    'admin_give_key': 'Dar Caja de Llaves',
    'admin_give_wheel': 'Dar Giro de Fortuna',
    'admin_done': 'Hecho ✓',
    'admin_sending': 'Enviando…',

    // Leaderboard online status
    'lb_online': '🟢 En línea',
    'lb_less_hour': 'hace menos de una hora',
    'lb_hours_ago': 'hace {0}h',
    'lb_day_ago': 'hace un día',
    'lb_days_ago': 'hace {0} días',
    'lb_week_ago': 'hace una semana',
    'lb_weeks_ago': 'hace {0} semanas',
    'lb_month_ago': 'hace un mes',
    'lb_long_ago': 'hace más de un mes',

    // Profile
    'profile': 'Perfil',
    'profile_tab_profile': 'Perfil',
    'profile_tab_friends': 'Amigos',
    'profile_bio': 'Biografía',
    'profile_bio_placeholder': 'Cuenta algo sobre ti...',
    'profile_fav_skin': 'Skin Favorita',
    'profile_fav_game': 'Juego Favorito',
    'profile_copy_id': 'Copiar ID',
    'profile_copied': '¡ID copiado!',
    'profile_save': 'Guardar',
    'profile_edit': 'Editar Perfil',
    'profile_skins_owned': 'Skins adquiridas',
    'profile_tokens_created': 'Tokens creados',
    'profile_income': 'Ingresos/h',
    'profile_playtime': 'Tiempo de juego',
    'profile_member_since': 'Miembro desde',
    'profile_online': 'En línea',
    'profile_offline': 'Visto por última vez',
    'friends_add': 'Añadir Amigo',
    'friends_search': 'Buscar por apodo...',
    'friends_enter_id': 'Ingresa el ID del jugador...',
    'friends_none': 'Aún no hay amigos',
    'friends_send_reaction': 'Enviar reacción',
    'friends_remove': 'Eliminar',
    'friends_not_found': 'Jugador no encontrado',
    'friends_added': '¡Amigo añadido!',
    'friends_already': 'Ya está en amigos',
    'friends_self': '¡Ese eres tú!',
    'friends_request_sent': '¡Solicitud de amistad enviada!',
    'friends_request_from': 'Solicitud de amistad de',
    'friends_accept': 'Aceptar',
    'friends_decline': 'Rechazar',
    'friends_declined': 'Solicitud rechazada',
    'profile_tickets_spent': 'Entradas gastadas',
    'profile_change_name': 'Cambiar Nombre',
    'profile_change_avatar': 'Cambiar Avatar',
    'profile_name_placeholder': 'Tu nombre...',
    'profile_avatar_url': 'URL del avatar (o dejar vacío)',
    'rarity_common': 'Común',
    'rarity_rare': 'Raro',
    'rarity_epic_rare': 'Súper Raro',
    'rarity_epic': 'Épico',
    'rarity_mythic': 'Mítico',
    'rarity_legendary': 'Legendario',
    'rarity_ultra': 'Ultra Legendario',
    'rarity_secret': 'Secreto',
    'profile_reset_avatar': 'Restablecer avatar',
    'profile_reset_name': 'Nombre restablecido al nombre de Telegram',
    'gift_box': 'Caja de Regalo',
    'gift_box_desc': '¡Un regalo de un amigo!',
    'gift_box_obtained': '🎁 ¡Recibiste un regalo!'
  },
  zh: {
    // Main UI
    'main_menu': '主菜单',
    'market': '市场',
    'back': '返回',
    'buy': '购买',
    'sell': '出售',
    'confirm': '确认',
    'cancel': '取消',
    'select': '选择',
    'max': '最大',
    'apply': '应用',
    'upgrade': '升级',
    'owned': '已拥有',
    'locked': '已锁定',
    'price': '价格',
    'default': '默认',
    'exclusive': '专属',
    'capsule_exclusive': '盲盒专属',
    'preview': '试玩 15秒',
    'east_shop_tab_skins': '皮肤',
    'east_shop_tab_easter': '复活节',
    'east_shop_title': '🐣 复活节商店',
    'east_currency': '蛋',
    'east_egg_collect': '收集！',
    'east_egg_tap': '点击蛋！',
    'east_shop_open_egg': '🥚 打开蛋',
    'east_shop_open_egg_desc': '刮开一个奖励蛋',
    'east_shop_open_egg_price': '20 蛋',
    'east_shop_open_egg_cooldown': '冷却时间: 5 分钟',
    'east_shop_skin': '🐣 复活节蛋皮肤',
    'east_shop_skin_desc': '硬币蛋！',
    'east_shop_skin_price': '90 蛋',
    'east_shop_already_owned': '已拥有',
    'east_shop_buy': '购买',
    'east_shop_cooldown_left': '冷却时间: {0}秒',
    'east_balance_label': '🥚 蛋: {0}',
    'east_event_started': '🐣 复活节活动已开启！',
    'east_event_ended': '复活节活动已结束。',
    'east_admin_started': '🐣 复活节活动开始！',
    'east_admin_stopped': '复活节活动停止。',
    
    // Settings
    'settings': '设置',
    'choose_category': '选择一个类别',
    'vibration_sound': '振动与声音',
    'animation': '动画',
    'backgrounds': '背景',
    'language': '语言',
    'vibration': '振动',
    'haptic_feedback': '触觉反馈',
    'off': '关闭',
    'low': '低',
    'medium': '中',
    'strong': '强',
    'tap_vibration': '点击振动',
    'tap_vibration_desc': '默认：开启 - 点击硬币时的振动',
    'button_vibration': '其他按钮振动',
    'button_vibration_desc': '默认：开启 - 界面按钮振动',
    'music': '音乐',
    'game_soundtrack': '游戏原声',
    'disable_music': '禁用音乐',
    'animation_settings': '动画设置',
    'control_animation': '控制动画效果',
    'skins_animation': '皮肤动画',
    'skins_animation_desc': '默认：开启 - 控制皮肤点击/循环动画',
    'ui_transitions': '界面过渡动画',
    'ui_transitions_desc': '默认：开启 - 控制流畅的页面过渡',
    'language_settings': '语言设置',
    'choose_language': '选择您的首选语言',
    'english_desc': '默认语言',
    'russian_desc': '俄语',
    '3d_effect': '3D硬币效果',
    '3d_effect_desc': '用鼠标/手指倾斜硬币',
    'settings_profile': '个人资料设置',
    'settings_profile_desc': '自定义您的个人资料体验',
    'profile_tab_location': '个人资料选项卡位置',
    'profile_tab_bottom': '底部栏（默认）',
    'profile_tab_settings': '在设置中（记录下方）',
    'privacy_add_friends': '谁可以加我为好友？',
    'privacy_send_reactions': '谁可以给我发送回应？',
    'privacy_view_info': '谁可以查看我的帐户信息？',
    'privacy_view_avatar': '谁可以查看我的头像？',
    'privacy_everyone': '所有人',
    'privacy_friends': '仅限好友',
    'privacy_nobody': '没有人',
    'maintenance_reason_technical': '技术问题',
    'maintenance_reason_update': '系统更新',
    'maintenance_reason_database': '数据库维护',
    'maintenance_reason_security': '安全补丁',
    'profile_total_taps': '总点击数',
    'profile_diamond_capsule': '下一个 💎',
    'diamond_capsule': '钻石盲盒',
    'diamond_capsule_sub': '每第7个常规盲盒',
    'diamond_key': '💎 钻石钥匙',
    'diamond_key_obtained': '获得钻石钥匙！',
    'diamond_bg': '钻石背景',
    'diamond_bg_unlocked': '钻石背景已解锁！',
    'skin_diamond_kspt': '钻石 KSPT',
    'skin_precious_coin': '珍贵硬币',
    'music_diamond': '钻石旋律',
    'mili_box': '可爱盒子',
    'mili_box_sub': '一个充满可爱的盒子',
    'skin_mops': '八哥犬',
    'skin_bulldog': '斗牛犬',
    'bg_zoo': '动物园',
    'bg_zoo_unlocked': '动物园背景已解锁！',
    'tap_emote': '点击表情',
    'tap_emote_desc': '点击硬币时漂浮的表情',
    'tap_emote_section': '点击动画',
    'emote_heart': '比心表情',
    'tap_emote_none': '无',
    'fuse_tab': '融合',
    'fuse_title': '⚗️ 融合机',
    'fuse_sub': '结合 2 个皮肤获得一个新皮肤',
    'fuse_slot_left': '皮肤 1',
    'fuse_slot_right': '皮肤 2',
    'fuse_select_skin': '选择皮肤',
    'fuse_possible': '可能的结果',
    'fuse_pay_kspt': '支付 KSPT',
    'fuse_pay_ek': '支付 EK',
    'fuse_fusing': '融合中...',
    'fuse_ready': '准备就绪！',
    'fuse_cooldown': '冷却时间: {0}小时',
    'fuse_result': '✨ 融合完成！',
    'fuse_frozen': '皮肤正在融合中',
    'fuse_need_2': '选择 2 个不同的皮肤',
    'fuse_collection': '融合收藏',
    'fuse_bg_reward': '🔬 实验室背景已解锁！',
    'fuse_all_collected': '🎉 集齐所有 20 个融合皮肤！实验室已解锁！',
    'rarity_fuse_common': '普通',
    'rarity_fuse_rare': '稀有',
    'rarity_fuse_champion': '冠军',
    'rarity_fuse_secret': '秘密',
    'rarity_fuse_god': '秘密之神',
    'dkey_milicuteness': '可爱盒子 x2',
    'dkey_tokens': '+20 代币',
    
    // Backgrounds
    'customize_menu': '自定义主菜单',
    'default_dark': '默认暗色',
    'classic_style': '经典 KSPT 风格',
    'forest_vibe': '森林氛围',
    'nature_look': '自然外观',
    'space_view': '太空视角',
    'space_skin': '包含在太空版皮肤中',
    'heaven': '天堂',
    'capsule_drop': '稀有盲盒掉落',
    'rich_edition': 'KSPT：土豪版',
    'for_elite': '精英专属',
    'dead_pixel': '坏点',
    'pixel_bonus': '像素硬币皮肤奖励',
    'chrispy_candle': '酥脆蜡烛',
    'chrispy_desc': '世界上最酥脆的饼干。',
    'locked_buy': '已锁定（购买太空皮肤）',
    'selected': '已选择',
    'locked_buy_cookie': '已锁定（购买加密饼干皮肤）',
    'chrispy_bg_unlocked': '酥脆蜡烛背景已解锁！',
    'bg_equipped': '已装备背景: {0}',
    'bonus_bg_pixel': '坏点背景已解锁！',
    
    // Skins
    'default_coin': '默认硬币',
    'standard_income': '标准 (+0 KSPT/小时)',
    'price_income': '价格: {0} KSPT (+{1} KSPT/小时)',
    'skin_animation': '皮肤 + 动画',
    'additional_skin': '皮肤 + 附加皮肤',
    'skin_bg_animation': '皮肤 + 动画 + 背景',
    'toggle_animation': '切换动画 + 视觉风格',
    'expensive_skin': '最贵皮肤 + 动画',
    'locked_complete': '已锁定（完成拼图）',
    'locked_find': '已锁定（在盲盒中找到）',
    'locked_promo': '已锁定（使用兑换码）',
    'special_win': '特殊：赢得 x10 投注 (+3 KSPT/小时)',
    'special_skin_limit': '特殊：限量 {0} 名玩家 (+3 KSPT/小时)',
    'active': '使用中',
    'owned_var': '已拥有（变体 {0}）',
    'active_var': '使用中（变体 {0}）',
    'locked_win': '已锁定（赢得 x10 投注）',
    'sold_out': '已售罄',
    'gold_kspt': '黄金 KSPT',
    'cyber_android': 'KSPT：赛博安卓',
    'gold_skin_unlocked': '黄金 KSPT 皮肤已解锁！',
    'cyber_skin_unlocked': 'KSPT：赛博安卓皮肤已解锁！',
    'brb_skin': '红色大按钮',
    'brb_skin_desc': '价格: 5,000,000 KSPT (+500 KSPT/小时)',
    
    // Cards
    'company': '公司',
    'sport': '体育',
    'board_games': '桌游',
    'personal_manager': '私人经理',
    'investors': '投资者',
    'office': '办公室',
    'security': '安保',
    'it_equipment': 'IT 设备',
    'football': '足球',
    'basketball': '篮球',
    'volleyball': '排球',
    'hockey': '冰球',
    'handball': '手球',
    'boxing': '拳击',
    'golf': '高尔夫',
    'checkers': '跳棋',
    'jenga': '层层叠',
    'card_games': '纸牌游戏',
    'domino': '多米诺骨牌',
    'chess': '国际象棋',
    'billiards': '台球',
    'bowling': '保龄球',
    'level': '等级 {0}',
    'level_max': '满级',
    'not_owned': '未拥有',
    'unlock_condition': '解锁条件: {0}',
    'current_upgrade': '当前: +{0}/小时 → 升级: +{1}/小时',
    
    // Tech
    'permanent_x2': '永久 x2 (价格 5 KSPT)',
    'temporary_overdrive': '临时超载',
    'overdrive_desc': 'x10-x20 点击，持续 25+ 秒',
    'upgrade_energy': '升级能量',
    'max_energy': '上限: 10,000 | +500 能量',
    'energy_regeneration': '能量恢复倍数',
    'bet': 'Plinko',
    'plinko_title': 'Plinko 弹球',
    'plinko_desc': '落下小球 —— 赢得大奖或失去一切',
    'plinko_amount': '下注 (1–50 KSPT):',
    'plinko_pick_color': '选择颜色:',
    'plinko_pick_mult': '选择倍数:',
    'plinko_play': '落下小球 🔮',
    'plinko_win': '🎉 赢了！ +{0} KSPT',
    'plinko_lose': '💀 输了 {0} KSPT',
    'plinko_tries': '剩余 {0}/5 次',
    'plinko_cooldown': '下次机会在 {0}',
    'plinko_no_tries': '没有次数了',
    'plinko_full_cd': '完全恢复在 {0}',
    'plinko_not_enough': 'KSPT 不足',
    'plinko_invalid': '输入 1–50 KSPT',
    'enter_promo': '输入兑换码',
    'multiplier': 'x{0} ({1}%)',
    'cooldown_ready': '冷却: 已就绪',
    'cooldown_minutes': '冷却: {0}分钟',
    'cooldown_hours': '冷却: {0}小时 {1}分钟',
    'active_seconds': '激活: 剩余 {0}秒',
    'maxed': '已满级',
    'max_energy': '能量已达上限',
    'max_regen': '已达最大值',
    'current_max': '当前上限: {0}',
    'current_regen': '当前: {0}',
    'upgrade_to': '升级到 {0} ({1} KSPT)',
    'buy_upgrade': '购买 (+500) {0} KSPT',
    'back_to_main': '返回主菜单',
    'loading': '加载中...',

    // Egg
    'easter_egg_box': '复活节彩蛋',
    'skin_eggi_name': '复活节彩蛋',
    'skin_viking_name': '维京人',
    'skin_wheel_name': '轮盘',
    'skin_target_name': '靶心',
    'skin_bird_name': '飞扬的鸟',
    'target_quest_title': '任务大师：完成 50 个每日/每周任务',
    'target_quest_unlocked': '🎯 靶心皮肤已解锁！',
    'easter_egg_desc': '滑动刮开！',
    'easter_egg_obtained': '🥚 获得复活节彩蛋！',
    
    // Capsule
    'ancient_puzzle': '古老拼图',
    'puzzle_desc': '集齐所有 9 块拼图以解锁仓鼠碎片皮肤！',
    'owned_progress': '已拥有: {0}/9',
    'owned_simple': '已拥有',
    'place_pieces': '放置可用碎片',
    'puzzle_completed': '新拼图即将出现！',
    'mystery_capsule': '神秘盲盒',
    'ready': '准备好打开了！',
    'open': '打开！',
    'first_open_free': '首次免费打开！',
    'wait': '等待',
    'cat_puzzle': '猫咪拼图',
    'cat_puzzle_desc': '集齐所有 9 块拼图以解锁猫咪：KSPT 皮肤！',
    'puzzle_completed2': '拼图完成！猫咪：KSPT 皮肤已解锁！',
    'gold_capsule_obtained': '获得神秘黄金盲盒！',
    'gold_capsule_name': '神秘黄金盲盒',
    'gold_capsule_desc': '一次性专属盲盒。解锁稀有物品！',
    'lol_song': "搞笑神曲",
    'bg_hell': '地狱',
    'bg_math': '疯狂数学',
    'gold_skin_unlocked': '黄金 KSPT 已解锁！',
    'cyber_skin_unlocked': 'KSPT：赛博安卓已解锁！',
    'cat_skin_unlocked': '猫咪：KSPT 皮肤已解锁！',
    'cat_music_unlocked': '猫咪纱线音乐已解锁！',
    'ivent_title': '限时活动',
    'ivent_desc': '每天获取奖励！',
    'ivent_no_events': '目前没有正在进行的活动。请稍后再来。',
    'zneton_label': '代币',
    'ivent_error': '加载活动出错',

    // Noob and Bomb Box
    'noob_box': '新手盒子',
    'noob_box_desc': '新手专属盒子（+皮肤）',
    'noob_box_obtained': '获得新手盒子！',
    'bomb_box_hold': '按住引爆...',
    'bomb_box_obtained': '💣 获得炸弹！',
    'bomb_box_bg': '💧 水中炸弹背景已解锁！',
     
    // Market
    'balance': '余额：',
    'offline_rate': '离线: {0} KSPT/小时',
    'portfolio_value': '投资组合价值',
    'available_tokens': '可用代币',
    'personal_token': '个人代币',
    'create_token_desc': '创建带有自定义图标的专属代币',
    'create_token': '创建代币',
    'delete_token': '删除代币',
    'delete_warning': '警告：删除代币将按当前价格出售您持有的份额',
    'enter_market': '进入市场',
    'market_desc': '交易代币，追踪价格并增加您的投资组合',
    'edit': '编辑',
    'enter_name': '输入您的名字:',
    'enter_desc': '输入描述 (5-80 字符):',
    'desc_length': '描述必须在 5-80 个字符之间',
    'your_holdings': '您的持有量',
    'value': '价值',
    'live_price': '实时价格',
    'drag_to_pan': '拖动图表以平移',
    'show_last_trades': '显示最新交易',
    'buy_at': '买入价',
    'sell_at': '卖出价',
    'sell_token': '卖出 ({0})',
    'amount': '数量',
    'buy_limit': '买入限制: {0} KSPT',
    'sell_cooldown': '卖出冷却: 40秒',
    'buy_cooldown': '买入冷却: {0}秒',
    'buy_cooldown_ready': '买入冷却: 已就绪',
    'wait_buy': '等待 {0}秒后再次买入',
    'wait_sell': '等待 {0}秒后再卖出',
    'amount_range': '数量必须在 {0}-{1} KSPT 之间',
    'not_enough_kspt': 'KSPT 不足',
    'not_enough_tokens': '代币不足',
    'enter_valid': '输入有效数量',
    'bought_tokens': '买入了 {0} {1}',
    'sold_tokens': '卖出 {0} 代币，获得 {1} KSPT',
    'delete_wait': '再等待 {0} 小时后才能删除',
    'delete_warning_msg': '您确定要删除个人代币吗？',
    'delete_sell_warning': '您拥有 {0} 个代币，价值 {1} KSPT。它们将被出售。',
    'delete_final_warning': ' 此操作无法撤销。',
    'token_created': '个人代币创建成功！',
    'token_deleted': '个人代币已删除',
    'token_details': '代币详情',
    'ticker_label': '代码 (3-8 字符):',
    'name_label': '代币名称:',
    'desc_label': '描述:',
    'supply_label': '总供应量:',
    'token_icon': '代币图标:',
    'upload_image': '上传图片',
    'default_icon': '如果未选择，将使用默认图标',
    'creation_cost': '创建成本',
    'confirm_token': '创建代币 {0} ({1})，供应量 {2}？初始价格: {3} KSPT。成本: {4} KSPT。',
    'need_kspt': '需要 {0} KSPT 来创建代币',
    'ticker_error': '代码必须在 3-8 个字符之间',
    'name_error': '名称必须在 1-20 个字符之间',
    'desc_error': '描述必须在 10-250 个字符之间',
    'supply_error': '供应量必须在 1-999999 之间',
    'image_cropped': '图片裁剪成功',
    'invalid_image': '请选择有效的图片',
    'my_token': '我的代币',
    'token_desc': '描述您的代币...',
    
    // Promo codes
    'promo_skipfuse': '盲盒冷却时间已跳过！',
    'promo_already_used': '兑换码已使用',

    // Promo codes
    'promo_fuse': '盲盒冷却时间已跳过！',

    // Cards Limited
    'limited_tab': '限定',
    'card_yes_title': '是',
    'card_no_title': '否',
    'card_stick_title': '树枝',
    'card_backpack_title': '背包',
    'card_journey_title': '旅程',
    'card_challenge_title': '挑战',
    'card_bought': '已购买',
    'card_purchase_expired': '购买时间已过期',
    'card_limited_time': '限时！ {0}',
    'card_income_per_hour': '+{0} KSPT/小时',
    'card_buy': '花费 {0} KSPT 购买',

    // EK Shop
    'ek_shop_title': 'EK 商店',
    'close': '关闭',
    'not_enough_ek': 'EK 不足',
    'already_owned': '已拥有',
    'price_ek': '{0} EK',

    // Mini-games / Tickets (english)
    'games_arcade': '游戏街机',
    'play_mini_games_desc': '玩迷你游戏赚取 KSPT！',
    'tickets_label': '🎫 门票:',
    'tickets_left_today': '您今天还剩 {0} 张门票',
    'next_ticket_in': '下一张门票在:',
    'available_games': '可用游戏',
    'ticket_session_note': '1 张门票 = 1 次游戏会话',
    'resume': '继续',

    // Events / Valentine
    'valentine_event_name': "情人节",
    'valentine_event_desc': '连续 7 天领取每日奖励，赢取专属皮肤！',
    'free_capsule': '免费盲盒',
    'noob_box': '新手盒子',
    'gold_capsule': '黄金盲盒',
    'crypto_heart': '加密红心',
    'games': '游戏',

    // Keys And GlitchBox
    'all_puzzles_owned': '已拥有所有拼图碎片！',
    'puzzle_next_wait': '下一个拼图还没准备好！',
    'glitch_box_ready': '故障盒子准备好打开了！',
    'glitch_box_cooldown': '再等 {0}小时！',
    'open_glitch_first': '先打开故障盒子',
    'open_capsule_first': '先打开常规盲盒',
    'key_obtained': '获得 {0} 钥匙！',
    'max_keys': '最多 {0} 把钥匙！',
    'capsule_skipped': '盲盒冷却时间已跳过！',
    'temp_reward': '临时奖励',
    'hurry_reward': '加急奖励！',
    'bg_code': '代码矩阵',
    'locked_glitch': '已锁定',
    'music_glitch': '故障 / 黑客旋律',
    'locked_glitch': '已锁定',
    'skin_corrupted': '损坏的皮肤',
    'skin_failed': '系统故障皮肤',
    
    // General
    'purchase_success': '购买成功',
    'offline_earnings': '离线收益: {0} KSPT',
    'offline_bonus': '已应用 +25% 离线奖励',
    'account_reset': '因作弊账号已重置',
    'ban_removed': '封禁已解除',
    'invalid_key': '无效的钥匙',
    'music_unlocked': '音乐已解锁！',
    'bonus_bg': '奖励背景已解锁！',
    'puzzle_complete': '拼图完成！仓鼠碎片皮肤已解锁！',

    // Leaderboard
    'leaderboard': '排行榜',
    'leaderboard_desc': '按离线收入排名的顶尖玩家',
    'leaderboard_your_rank': '您的排名',
    'leaderboard_no_players': '暂无玩家',
    'leaderboard_updated': '已更新: ',
    'leaderboard_you': '您',
    'leaderboard_loading': '加载中...',
    'records': '记录',

    // Notifications settings
    'notifications_title': '主题与功能',
    'notifications_sub': '当有新内容时在选项卡上显示红点提示',
    'notifications_enable': '启用红点',
    'btn_theme': '按钮样式',
    'btn_theme_desc': '选择主菜单按钮的样式',
    'btn_theme_default': '默认',
    'btn_theme_stone': '石头',
    'notifications_sub_title': '通知',
    'rarity_fuse': '融合',
    'notifications_default': '默认：关闭',

    // Fortune Wheel
    'fortune_wheel': '幸运轮盘',
    'spin_wheel': '转动轮盘',
    'wheel_spin_cost': '费用: {0} KSPT',
    'wheel_cooldown': '冷却时间: {0}小时 {1}分钟',
    'wheel_spins_left': '剩余次数: {0}/1',
    'wheel_cooldown_active': '轮盘冷却中',
    'wheel_requires_rate': '需要 400+ KSPT/小时',
    'wheel_try_again': '运气不佳！再试一次。',
    'wheel_income_reward': '💰 +{0} KSPT！',
    'wheel_noob_box': '📦 获得新手盒子！',
    'wheel_key_box': '🗝️ 获得钥匙盒子！',
    'wheel_glitch_box': '⚡ 故障盒子就绪！',
    'wheel_gold_capsule': '🌟 获得黄金盲盒！',
    'wheel_blue_key': '🔑 获得蓝色钥匙！',
    'wheel_doge_skin': '🐶 KSPT：DogeToken 皮肤已解锁！',
    'wheel_free_spin': '🎡 免费旋转！',
    'wheel_spent': '转动花费了 -{0} KSPT',
    'wheel_need_kspt': '需要 {0} KSPT 才能转动！',
    'wheel_odds_title': '奖品概率',

    // Key Box
    'key_box': '钥匙盒子',
    'key_box_tap': '点击打开！',
    'key_box_reward': '获得钥匙！',
    'black_key': '黑色钥匙（万能）',
    'black_key_desc': '在所有商店通用！',

    // Notifications (settings)
    'notifications': '通知',
    'notifications_desc': '选项卡上的红点提示',
    'enable_badges': '启用红点',
    'badges_default_off': '默认：关闭',

    // Promo new
    'promo_free_spin': '🎡 免费幸运轮盘旋转一次！',
    'promo_key_box': '🗝️ 钥匙盒子已解锁！',
    'promo_adminek': '✅ EK 余额已设置为 10',

    // Admin Panel
    'admin_panel': '🛡 管理员面板',
    'admin_global': '全局',
    'admin_moderation': '审核',
    'admin_broadcast': '广播消息',
    'admin_broadcast_send': '发送给所有人',
    'admin_event_start': '开始点击活动',
    'admin_event_stop': '停止活动',
    'admin_give_opening': '给所有人盲盒次数',
    'admin_skip_cooldown': '跳过所有人的冷却',
    'admin_give_tickets': '给所有人门票',
    'admin_temp_skin': '给所有人临时皮肤',
    'admin_select_player': '选择玩家',
    'admin_give_kspt': '给予 / 设置 KSPT',
    'admin_give_ek': '给予 / 设置 EK',
    'admin_ban': '封禁玩家',
    'admin_unban': '解封玩家',
    'admin_personal_msg': '个人消息',
    'admin_give_capsule': '给予盲盒',
    'admin_give_gold': '给予黄金盲盒',
    'admin_give_noob': '给予新手盒子',
    'admin_give_glitch': '给予故障盒子',
    'admin_give_key': '给予钥匙盒子',
    'admin_give_wheel': '给予轮盘次数',
    'admin_done': '完成 ✓',
    'admin_sending': '发送中…',

    // Leaderboard online status
    'lb_online': '🟢 在线',
    'lb_less_hour': '不到一小时前',
    'lb_hours_ago': '{0}小时前',
    'lb_day_ago': '一天前',
    'lb_days_ago': '{0} 天前',
    'lb_week_ago': '一周前',
    'lb_weeks_ago': '{0} 周前',
    'lb_month_ago': '一个月前',
    'lb_long_ago': '一个多月前',

    // Profile
    'profile': '个人资料',
    'profile_tab_profile': '个人资料',
    'profile_tab_friends': '好友',
    'profile_bio': '简介',
    'profile_bio_placeholder': '说点关于你的事情...',
    'profile_fav_skin': '最爱皮肤',
    'profile_fav_game': '最爱游戏',
    'profile_copy_id': '复制 ID',
    'profile_copied': 'ID 已复制！',
    'profile_save': '保存',
    'profile_edit': '编辑资料',
    'profile_skins_owned': '拥有皮肤',
    'profile_tokens_created': '创建的代币',
    'profile_income': '收入/小时',
    'profile_playtime': '游戏时长',
    'profile_member_since': '加入时间',
    'profile_online': '在线',
    'profile_offline': '最后上线',
    'friends_add': '添加好友',
    'friends_search': '按昵称搜索...',
    'friends_enter_id': '输入玩家 ID...',
    'friends_none': '还没有好友',
    'friends_send_reaction': '发送回应',
    'friends_remove': '移除',
    'friends_not_found': '未找到玩家',
    'friends_added': '已添加好友！',
    'friends_already': '已经是好友了',
    'friends_self': '那就是你！',
    'friends_request_sent': '好友请求已发送！',
    'friends_request_from': '好友请求来自',
    'friends_accept': '接受',
    'friends_decline': '拒绝',
    'friends_declined': '请求已拒绝',
    'profile_tickets_spent': '花费门票',
    'profile_change_name': '更改名称',
    'profile_change_avatar': '更改头像',
    'profile_name_placeholder': '你的名字...',
    'profile_avatar_url': '头像 URL（或留空）',
    'rarity_common': '普通',
    'rarity_rare': '稀有',
    'rarity_epic_rare': '超稀有',
    'rarity_epic': '史诗',
    'rarity_mythic': '神话',
    'rarity_legendary': '传说',
    'rarity_ultra': '终极传说',
    'rarity_secret': '秘密',
    'profile_reset_avatar': '重置头像',
    'profile_reset_name': '名称已重置为 Telegram 名称',
    'gift_box': '礼物盒',
    'gift_box_desc': '来自好友的礼物！',
    'gift_box_obtained': '🎁 您收到了一份礼物！',
    'english_desc': '默认语言',
    'russian_desc': '俄语',
    'spanish_desc': '西班牙语',
    'chinese_desc': '中文'
  }
};

let currentLang = localStorage.getItem('kspt_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kspt_lang', lang);
  updateAllTexts();
  const toasts = { en: 'Language changed to English', ru: 'Язык изменён на русский', es: 'Idioma cambiado a español', zh: '语言已更改为中文' };
  showToast(toasts[lang] || 'Language changed');
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
  // Проверяем, что value это число
  if (value === undefined || value === null || isNaN(value)) {
    return '0';
  }
  
  // Преобразуем в число, если это строка
  const numValue = Number(value);
  
  if (currentLang === 'ru') {
    return numValue.toFixed(decimals).replace('.', ',');
  }
  return numValue.toFixed(decimals);
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
const notifToggle = document.getElementById('toggleNotifications');
  if (notifToggle && d.settings && d.settings.notifications) {
    notifToggle.checked = d.settings.notifications.enabled !== false;
  }
  
  // Update skin texts with correct prices and incomes
  updateSkinTexts();
  
  // Update market texts
  updateMarketTexts();
  
  // Update card texts
  updateCardTexts();
  window.updateCardUI();
  
  // Update bet button texts
  updateBetButtonsText();
}

// NEW FUNCTION: Update bet buttons text
function updateBetButtonsText() {
  // replaced by plinko
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
  const artemVariantBtn = document.getElementById('variant-artem');
  if (false) {
    // euro variant button removed — animation on tap instead
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
  for (let i = 1; i <= 7; i++) {
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
  for (let i = 1; i <= 7; i++) {
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
  'funny': 'funny.mp3',
  'code': 'code.mp3',
  'diamond': 'diamond.mp3'
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
  { type: 'skin', id: 'angel',   weight: 1, name: 'Skin: Angel', img: 'angel.png', requireSkin: 'capsule' },
  { type: 'music', id: 'calm', weight: 5, name: 'Music: Calm + Hush', img: 'calm.png' },
  { type: 'glitchFragment', weight: 4, name: 'Glitch Fragment', img: 'glitchbox.png' }
];

// Helper function to get weighted random reward
function getWeightedRandomReward() {
  const eligible = capsuleRewards.filter(r => {
    if (r.requireSkin) return d.skins && d.skins[r.requireSkin];
    return true;
  });
  const totalWeight = eligible.reduce((sum, r) => sum + r.weight, 0);
  let random = Math.random() * totalWeight;
  for (const reward of eligible) {
    random -= reward.weight;
    if (random <= 0) return reward;
  }
  return eligible[0];
}

// Проверка на перманентный бан при загрузке
if(cheatStage >= 3) {
  document.getElementById("redScreen").style.display = "flex";
}

// ===== DIAMOND CAPSULE =====
const diamondCapsuleRewards = [
  { type: 'kspt_hours', hours: 2.5, chance: 20, name: '+2.5h Income',        img: 'kspt.png' },
  { type: 'kspt_hours', hours: 4.0, chance: 16, name: '+4.0h Income',        img: 'kspt.png' },
  { type: 'kspt_hours', hours: 6.0, chance: 12, name: '+6.0h Income',        img: 'kspt.png' },
  { type: 'puzzle',               chance: 11, name: 'Puzzle Piece',          img: 'puz.png' },
  { type: 'key', color: 'yellow', chance: 6,  name: '🟡 Yellow Key',         img: 'yellow.png' },
  { type: 'key', color: 'red',    chance: 5,  name: '🔴 Red Key',            img: 'red.png' },
  { type: 'key', color: 'green',  chance: 3,  name: '🟢 Green Key',          img: 'green.png' },
  { type: 'key', color: 'blue',   chance: 2,  name: '🔵 Blue Key',           img: 'blue.png' },
  { type: 'key', color: 'diamond',chance: 1,  name: '💎 Diamond Key',        img: 'dkey.png' },
  { type: 'glitchFragment',       chance: 8,  name: '🌀 Glitch Fragment',    img: 'glitchbox.png' },
  { type: 'bg', id: 'diamond',    chance: 2,  name: t('diamond_bg'),         img: 'diamf.png' },
  { type: 'music', id: 'diamond', chance: 3,  name: t('music_diamond'),      img: 'songdi.png' },
  { type: 'skin', id: 'diamond_kspt',   chance: 4, name: t('skin_diamond_kspt'),  img: 'ksd.png' },
  { type: 'skin', id: 'precious_coin',  chance: 3, name: t('skin_precious_coin'), img: 'codiam.png' },
];

function getDiamondCapsuleReward() {
  const total = diamondCapsuleRewards.reduce((s, r) => s + r.chance, 0);
  let rand = Math.random() * total;
  for (const r of diamondCapsuleRewards) { rand -= r.chance; if (rand <= 0) return r; }
  return diamondCapsuleRewards[0];
}

let diamondCapsuleTaps = 0;
let diamondCapsuleOpening = false;

function startDiamondCapsuleSequence() {
  if (diamondCapsuleOpening) return;
  if (!d.diamondCapsule || !d.diamondCapsule.obtained) { return; }
  diamondCapsuleOpening = true;
  diamondCapsuleTaps = d.diamondCapsule.taps || 0;
  const modal = document.getElementById('diamondCapsuleModal');
  const img   = document.getElementById('diamondCapsuleImg');
  const hint  = document.getElementById('diamondCapsuleHint');
  if (!modal || !img) { diamondCapsuleOpening = false; return; }
  img.src = 'cd.png';
  hint.textContent = `Tap to open! (${diamondCapsuleTaps}/20)`;
  modal.classList.add('active');
  img.removeEventListener('click', _diamondCapsuleTapHandler);
  img.addEventListener('click', _diamondCapsuleTapHandler);
}

function _diamondCapsuleTapHandler() {
  const now = Date.now();
  if (lastCapsuleTapTime && now - lastCapsuleTapTime < 120) return;
  lastCapsuleTapTime = now;
  diamondCapsuleTaps++;
  d.diamondCapsule.taps = diamondCapsuleTaps;
  const img  = document.getElementById('diamondCapsuleImg');
  const hint = document.getElementById('diamondCapsuleHint');
  img.classList.add('tap-anim');
  setTimeout(() => img.classList.remove('tap-anim'), 220);
  // спрайт меняется каждые 5 тапов: cd → cd1 → cd2 → cd3 → cd4
  const stage = Math.min(4, Math.floor(diamondCapsuleTaps / 5));
  img.src = stage === 0 ? 'cd.png' : `cd${stage}.png`;
  hint.textContent = `Tap to open! (${diamondCapsuleTaps}/20)`;
  if (diamondCapsuleTaps >= 20) {
    img.removeEventListener('click', _diamondCapsuleTapHandler);
    hint.textContent = 'Opening...';
    setTimeout(() => _openDiamondCapsule(), 350);
  }
  save();
}

function _openDiamondCapsule() {
  const modal = document.getElementById('diamondCapsuleModal');
  if (modal) modal.classList.remove('active');
  d.diamondCapsule.obtained = false;
  d.diamondCapsule.taps = 0;
  diamondCapsuleOpening = false;
  diamondCapsuleTaps = 0;
  d.capsuleOpenCount = (d.capsuleOpenCount || 0) + 1;
  d.capsule.lastOpen = Date.now(); // кулдаун после алмазной как после обычной
  d.capsule.firstOpen = false;
  const reward = getDiamondCapsuleReward();
  let rewardText = reward.name;
  let rewardImg  = reward.img;
  switch (reward.type) {
    case 'kspt_hours':
      const val = Math.floor(getHourlyRate() * reward.hours / 100) * 100;
      d.tokens += val;
      rewardText = `+${formatNumber(val)} KSPT (${reward.hours}h)`;
      break;
    case 'puzzle':
      giveRandomPuzzlePiece();
      break;
    case 'key':
      if (!d.keys) d.keys = {};
      if (reward.color === 'diamond') {
        d.keys.diamond = Math.min(1, (d.keys.diamond || 0) + 1);
      } else {
        d.keys[reward.color] = (d.keys[reward.color] || 0) + 1;
      }
      rewardText = reward.name + ' obtained!';
      break;
    case 'glitchFragment':
      _giveGlitchFragment();
      rewardImg = `oblom${_lastGlitchFragmentIdx + 1}.png`;
      break;
    case 'bg':
      if (!d.ownedBgs) d.ownedBgs = ['default'];
      if (!d.ownedBgs.includes(reward.id)) {
        d.ownedBgs.push(reward.id);
        rewardText = t('diamond_bg_unlocked');
      } else {
        d.tokens += Math.floor(getHourlyRate() * 3);
        rewardText = '+3h KSPT (bg duplicate)';
        rewardImg = 'kspt.png';
      }
      break;
    case 'music':
      if (!d.ownedMusic) d.ownedMusic = [];
      if (!d.ownedMusic.includes(reward.id)) {
        d.ownedMusic.push(reward.id);
      } else {
        d.tokens += Math.floor(getHourlyRate() * 3);
        rewardText = '+3h KSPT (music duplicate)';
        rewardImg = 'kspt.png';
      }
      break;
    case 'skin':
      if (!d.skins) d.skins = {};
      if (!d.skins[reward.id]) {
        d.skins[reward.id] = 1;
        if (typeof updateSkinButtons === 'function') updateSkinButtons();
      } else {
        d.tokens += Math.floor(getHourlyRate() * 5);
        rewardText = '+5h KSPT (skin duplicate)';
        rewardImg = 'kspt.png';
      }
      break;
  }
  save();
  showReward(rewardText, rewardImg);
  ui();
  if (typeof updateKeysUI === 'function') updateKeysUI();
}
// ===== /DIAMOND CAPSULE =====

// ===== MILI BOX (Cuteness Box) =====
const miliBoxRewards = [
  { type: 'kspt_hours', hours: 2.5, chance: 17, name: '+2.5h Income',   img: 'kspt.png' },
  { type: 'kspt_hours', hours: 4.5, chance: 15, name: '+4.5h Income',   img: 'kspt.png' },
  { type: 'tokens',     value: 5,   chance: 15, name: '+5 Tokens',      img: 'zneton.png' },
  { type: 'tickets',    value: 8,   chance: 15, name: '+8 Tickets',     img: 'ticket.png' },
  { type: 'ek',         value: 10,  chance: 10, name: '+10 EK',         img: 'ek.png' },
  { type: 'puzzle',               chance: 10, name: 'Puzzle Piece',    img: 'puz.png' },
  { type: 'key', color:'yellow',  chance: 5,  name: '🟡 Yellow Key',   img: 'yellow.png' },
  { type: 'key', color:'green',   chance: 7,  name: '🟢 Green Key',    img: 'green.png' },
  { type: 'skin', id:'mops',      chance: 3,  name: 'Skin: Pug',       img: 'mops.png' },
  { type: 'skin', id:'bulldog',   chance: 3,  name: 'Skin: Bulldog',   img: 'bul.png' },
  { type: 'bg',   id:'zoo',       chance: 3,  name: 'Background: Zoo', img: 'zoo.png' },
  { type: 'tapEmote', id:'milo',  chance: 2,  name: 'Emote With Heart',img: 'milo.png' },
];

function getMiliBoxReward() {
  const total = miliBoxRewards.reduce((s, r) => s + r.chance, 0);
  let rand = Math.random() * total;
  for (const r of miliBoxRewards) { rand -= r.chance; if (rand <= 0) return r; }
  return miliBoxRewards[0];
}

let miliBoxTaps = 0;
let miliBoxOpening = false;

function startMiliBoxSequence() {
  if (miliBoxOpening) return;
  if (!d.miliBox || !d.miliBox.obtained) { return; }
  miliBoxOpening = true;
  miliBoxTaps = d.miliBox.taps || 0;
  const modal = document.getElementById('miliBoxModal');
  const img   = document.getElementById('miliBoxImg');
  const hint  = document.getElementById('miliBoxHint');
  if (!modal || !img) { miliBoxOpening = false; return; }
  img.src = 'mili.png';
  hint.textContent = `Tap to open! (${miliBoxTaps}/15)`;
  modal.classList.add('active');
  img.removeEventListener('click', _miliBoxTapHandler);
  img.addEventListener('click', _miliBoxTapHandler);
}

function _miliBoxTapHandler() {
  const now = Date.now();
  if (lastCapsuleTapTime && now - lastCapsuleTapTime < 120) return;
  lastCapsuleTapTime = now;
  miliBoxTaps++;
  d.miliBox.taps = miliBoxTaps;
  const img  = document.getElementById('miliBoxImg');
  const hint = document.getElementById('miliBoxHint');
  img.classList.add('tap-anim');
  setTimeout(() => img.classList.remove('tap-anim'), 220);
  hint.textContent = `Tap to open! (${miliBoxTaps}/15)`;
  if (miliBoxTaps >= 15) {
    img.src = 'mili1.png';
    img.removeEventListener('click', _miliBoxTapHandler);
    hint.textContent = 'Opening...';
    setTimeout(() => _openMiliBox(), 350);
  }
  save();
}

function _openMiliBox() {
  const modal = document.getElementById('miliBoxModal');
  if (modal) modal.classList.remove('active');
  d.miliBox.pending = Math.max(0, (d.miliBox.pending || 1) - 1);
  d.miliBox.obtained = d.miliBox.pending > 0;
  d.miliBox.taps = 0;
  miliBoxOpening = false;
  miliBoxTaps = 0;
  if (d.miliBox.obtained) setTimeout(() => startMiliBoxSequence(), 800);
  const reward = getMiliBoxReward();
  let rewardText = reward.name;
  let rewardImg  = reward.img;
  switch (reward.type) {
    case 'kspt_hours':
      const val = Math.floor(getHourlyRate() * reward.hours / 100) * 100;
      d.tokens += val;
      rewardText = `+${formatNumber(val)} KSPT (${reward.hours}h)`;
      break;
    case 'tokens':
      if (!d.quests) d.quests = {};
      d.quests.znetons = (d.quests.znetons || 0) + reward.value;
      rewardText = `+${reward.value} Tokens!`;
      break;
    case 'tickets':
      if (typeof gameTickets !== 'undefined') {
        gameTickets.current = (gameTickets.current || 0) + reward.value;
        if (typeof saveTickets === 'function') saveTickets();
      } else {
        d.tickets = (d.tickets || 0) + reward.value;
      }
      rewardText = `+${reward.value} Tickets!`;
      break;
    case 'ek':
      d.ek = (d.ek || 0) + reward.value;
      d.ekLifetime = (d.ekLifetime || 0) + reward.value;
      rewardText = `+${reward.value} EK!`;
      break;
    case 'puzzle':
      giveRandomPuzzlePiece();
      break;
    case 'key':
      if (!d.keys) d.keys = {};
      d.keys[reward.color] = (d.keys[reward.color] || 0) + 1;
      rewardText = reward.name + ' obtained!';
      break;
    case 'skin':
      if (!d.skins) d.skins = {};
      if (!d.skins[reward.id]) {
        d.skins[reward.id] = 1;
        if (typeof updateSkinButtons === 'function') updateSkinButtons();
      } else {
        d.tokens += Math.floor(getHourlyRate() * 3);
        rewardText = '+3h KSPT (skin duplicate)';
        rewardImg = 'kspt.png';
      }
      break;
    case 'bg':
      if (!d.ownedBgs) d.ownedBgs = ['default'];
      if (!d.ownedBgs.includes(reward.id)) {
        d.ownedBgs.push(reward.id);
        rewardText = t('bg_zoo_unlocked');
      } else {
        d.tokens += Math.floor(getHourlyRate() * 3);
        rewardText = '+3h KSPT (bg duplicate)';
        rewardImg = 'kspt.png';
      }
      break;
    case 'tapEmote':
      if (!d.tapEmote) d.tapEmote = { enabled: false, emote: 'milo' };
      d.tapEmote.emote = reward.id;
      if (!d.unlockedEmotes) d.unlockedEmotes = [];
      if (!d.unlockedEmotes.includes(reward.id)) d.unlockedEmotes.push(reward.id);
      rewardText = reward.name + ' unlocked!';
      break;
  }
  save();
  showReward(rewardText, rewardImg);
  ui();
}
// ===== /MILI BOX =====

// =============================================
// ===== FUSE MACHINE =====
// =============================================

const FUSE_SKIN_NAMES = {
  iabloko:'Apple Coin', mak:'Macadamia Nut', conf:'K-Candy', gir:'Kettlebell', eka:'EK Coin',
  mil:'Soap Token', tel:'Old TV', dvd:'DVD KSPT', pop:'Popcorn', zem:'Earth Coin',
  zam:'Hidden Lock', shar:'Air Balloon', ogo:'Surprise', kak:'Mexican Cactus', sve:'Wax Candle',
  glaz:'Surveillance Eye', roz:'Rose', ras:'Potted Mutation', mat:'Game Matter',
  tro:'Trojan Horse'
};

function _fuseGetOwnedSelectableSkins() {
  const frozen = [d.fuse?.slot1, d.fuse?.slot2].filter(Boolean);
  const result = [];
  const all = Object.keys(SKIN_INCOME).filter(id => id !== 'default');
  const ekOwned = JSON.parse(localStorage.getItem('ekshop_owned') || '{}');
  all.forEach(id => {
    if (frozen.includes(id)) return;
    // Fuse-скины нельзя класть в машину
    if (FUSE_SKIN_IDS.includes(id)) return;
    const owned = (d.skins && d.skins[id]) ||
                  (d.secretSkins && d.secretSkins[id]) ||
                  (d.wonX10 && id === 'priz') ||
                  ekOwned[id];
    if (owned) result.push(id);
  });
  return result;
}

function _fuseTierForSlot(slot) {
  // Определяем tier по выбранному варианту оплаты (хранится в d.fuse.tier)
  return d.fuse?.tier || 1;
}

function _fuseGetPool(tier) {
  const cfg = FUSE_TIER_POOLS[tier];
  if (!cfg) return [];
  const notOwned = (arr) => arr.filter(id => !(d.fuseSkins && d.fuseSkins[id]));
  const mainSkins = FUSE_SKIN_IDS.filter(id => FUSE_RARITY[id] === cfg.main);
  const bonusSkins = FUSE_SKIN_IDS.filter(id => FUSE_RARITY[id] === cfg.bonus);
  const mainPool = notOwned(mainSkins); // только неполученные
  const bonusPool = notOwned(bonusSkins);
  // если все main скины получены — тир недоступен (вернём пустой массив)
  if (mainPool.length === 0) return [];
  // Фиксируем 3 конкретных main скина детерминированно (по индексу, не рандом)
  const seed = (d.fuse?.slot1 || '').length + (d.fuse?.slot2 || '').length + tier;
  const shuffled = [...mainPool].sort((a, b) => {
    const ha = (a + seed).split('').reduce((s,c) => s + c.charCodeAt(0), 0);
    const hb = (b + seed).split('').reduce((s,c) => s + c.charCodeAt(0), 0);
    return ha - hb;
  });
  const picked = shuffled.slice(0, 3);
  if (bonusPool.length > 0) {
    const bi = (seed * 7 + tier) % bonusPool.length;
    picked.push(bonusPool[bi]);
  }
  return picked;
}

function _fuseGetWeights(pool, slot1, slot2) {
  if (!pool || !pool.length) return [];
  const hasBonus = pool.length === 4;

  function _slotRarityBoost(id) {
    // Fuse-скин в слоте всегда считается как эпик (3)
    if (FUSE_SKIN_IDS.includes(id)) return 3;
    const fuseRar = FUSE_RARITY[id];
    if (fuseRar) {
      const fuseMap = { common:0, rare:1, champion:2, secret:5, god:6 };
      return fuseMap[fuseRar] || 0;
    }
    // Обычные скины по доходу:
    // обычный(≤10)=0, редкий(≤30)=1, эпический(≤50)=2, мифический(≤80)=3,
    // секретный(≤130)=4, легендарный(≤200)=5, ультралегендарный(>200)=6
    const inc = SKIN_INCOME[id] || 0;
    if (inc <= 10)  return 0;
    if (inc <= 30)  return 1;
    if (inc <= 50)  return 2;
    if (inc <= 80)  return 3;
    if (inc <= 130) return 4;
    if (inc <= 200) return 5;
    return 6;
}

  const luckBoost = (window._fuseLuckActive && window._fuseLuckEnd > Date.now()) ? 10 : 0;

  // Бонусный шанс строго в диапазоне [8, 15] без удачи, [8, 25] с удачей
  // Каждый суммарный буст шага = 1% (два слота суммируются, макс boost = 6+6 = 12 → но зажимаем в 7)
  let bonusBase = 0;
  if (hasBonus) {
    const rawBoost = _slotRarityBoost(slot1) + _slotRarityBoost(slot2);
    // Нормируем: 0 boost → 8%, макс boost (12) → 15%, шаг ≈ 0.583% за единицу
    const bonusFromSkins = Math.round(rawBoost * 7 / 12); // 0..7
    bonusBase = Math.min(15, 8 + bonusFromSkins) + luckBoost;
    bonusBase = Math.min(25, bonusBase);
  }

  const mainTotal = 100 - bonusBase;
  const mainCount = hasBonus ? 3 : pool.length;
  const baseMain = mainTotal / mainCount;

  // Детерминированный косметический сдвиг ±1.5% между main-слотами (не влияет на бонус)
  const seed = (slot1||'').charCodeAt(0) + (slot2||'').charCodeAt(0);
  const rawWeights = pool.map((id, i) => {
    if (hasBonus && i === pool.length - 1) return bonusBase; // бонус — точное значение
    const shift = ((seed + i * 17) % 4) - 1.5; // сдвиг -1.5..+1.5
    return Math.max(1, baseMain + shift);
  });

  // Нормализуем так, чтобы бонусный % остался точным, а main-слоты добили до 100
  if (hasBonus) {
    const mainSum = rawWeights.slice(0, 3).reduce((a, b) => a + b, 0);
    const scale = (100 - bonusBase) / mainSum;
    const result = rawWeights.slice(0, 3).map(w => parseFloat((w * scale).toFixed(1)));
    result.push(parseFloat(bonusBase.toFixed(1)));
    return result;
  }
  const sum = rawWeights.reduce((a, b) => a + b, 0);
  return rawWeights.map(w => parseFloat((w / sum * 100).toFixed(1)));
}

function _fuseRollResult(pool, slot1, slot2) {
  if (!pool || pool.length === 0) return null;
  const weights = _fuseGetWeights(pool, slot1, slot2);
  let r = Math.random() * 100;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[0];
}

function _fuseCalcKSPT(tier) {
  const h = FUSE_TIER_POOLS[tier]?.kspt_h || 15;
  const raw = getHourlyRate() * h;
  return Math.round(raw / 1000) * 1000 || 1000;
}

function renderFuseMachine() {
  const el = document.getElementById('fuseMachineContent');
  if (!el) return;
  const _fuseMinRate = 500;
  if (getHourlyRate() < _fuseMinRate) {
    el.innerHTML = `
      <div style="text-align:center;padding:30px 16px;">
        <img src="fuse.png" style="width:100px;height:100px;object-fit:contain;filter:grayscale(1) brightness(0.4);margin-bottom:16px;">
        <div style="font-size:15px;font-weight:bold;color:#555;margin-bottom:8px;">⚗️ Fuse Machine</div>
        <div style="font-size:13px;color:#444;margin-bottom:6px;">Reach <span style="color:#c084fc;font-weight:bold;">500 KSPT/h</span> to unlock</div>
        <div style="font-size:12px;color:#333;">Current: ${Math.round(getHourlyRate())} KSPT/h</div>
      </div>`;
    return;
  }
  const now = Date.now();
  const fuse = d.fuse || {};
  const _fuseAllDone = FUSE_SKIN_IDS.every(id => d.fuseSkins && d.fuseSkins[id]);
  if (_fuseAllDone) {
    el.innerHTML = `
      <div style="text-align:center;padding:30px 16px;">
        <img src="fuseak.png" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 0 20px #c084fc);margin-bottom:16px;">
        <div style="font-size:20px;font-weight:bold;color:#c084fc;margin-bottom:8px;">⚗️ Fuse Complete!</div>
        <div style="font-size:13px;color:#888;margin-bottom:16px;">You have collected all 20 Fuse skins!</div>
        <div style="font-size:12px;color:#555;">The Lab background has been unlocked.</div>
      </div>` + _fuseRenderCollection();
    return;
  }
  const isFusing = fuse.active && fuse.fusingEnd > now;
  const isCooldown = false; // кулдаун отключён
  const tier = fuse.tier || 1;
  // Восстанавливаем locked pool из d если window потерял при перезаходе
  if (!window._fuseCurrentPool && d.fuse?._lockedPool?.length) {
    window._fuseCurrentPool = d.fuse._lockedPool;
    window._fuseCurrentWeights = d.fuse._lockedWeights;
  }
  const pool = window._fuseCurrentPool || [];

  // Header
  let html = `
    <div style="text-align:center;margin-bottom:14px;">
      <img src="${isFusing ? 'fuseak.png' : 'fuse.png'}" style="width:140px;height:140px;object-fit:contain;filter:${isFusing?'drop-shadow(0 0 20px #7c3aed)':'drop-shadow(0 0 6px #7c3aed44)'};">
      <div style="font-size:18px;font-weight:bold;color:#c084fc;margin-top:6px;">${t('fuse_title')}</div>
      <div style="font-size:12px;color:#888;">${t('fuse_sub')}</div>
    </div>`;

  if (isFusing) {
    // Показываем таймер слияния
    const left = fuse.fusingEnd - now;
    const h = Math.floor(left/3600000), m = Math.floor((left%3600000)/60000);
    html += `
      <div style="background:#1a0a2e;border:2px solid #7c3aed;border-radius:14px;padding:16px;text-align:center;margin-bottom:12px;">
        <div style="font-size:13px;color:#c084fc;margin-bottom:6px;">⚗️ ${t('fuse_fusing')}</div>
        <div style="font-size:26px;font-weight:bold;color:#fff;">${h}h ${m}m</div>
        <div style="font-size:11px;color:#555;margin-top:4px;">
          ${fuse.slot1 ? `🔒 ${FUSE_SKIN_NAMES[fuse.slot1]||fuse.slot1}` : ''} 
          + ${fuse.slot2 ? `${FUSE_SKIN_NAMES[fuse.slot2]||fuse.slot2}` : ''}
        </div>
      </div>`;
    el.innerHTML = html + _fuseRenderCollection();
    return;
  }

  if (isCooldown) {
    const left = fuse.cooldownEnd - now;
    const h = Math.floor(left/3600000);
    html += `<div style="background:#111;border:1px solid #333;border-radius:12px;padding:12px;text-align:center;margin-bottom:12px;color:#ff9800;">
      ⏳ ${formatTemplate(t('fuse_cooldown'),[h])}
    </div>`;
  }

  // Слоты
  const slot1 = fuse.slot1, slot2 = fuse.slot2;
  html += `<div style="display:flex;gap:10px;margin-bottom:12px;">`;
  [1,2].forEach(n => {
    const slotId = n === 1 ? slot1 : slot2;
    const img = slotId ? getSkinImage(slotId) : null;
    html += `<div onclick="_fuseOpenSlotPicker(${n})" style="flex:1;background:#0d0d1a;border:2px dashed ${slotId?'#7c3aed':'#333'};border-radius:12px;padding:10px;text-align:center;cursor:pointer;min-height:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.2s;">
      ${slotId
        ? `<img src="${img}" style="width:52px;height:52px;object-fit:contain;"><div style="font-size:10px;color:#c084fc;margin-top:4px;">${FUSE_SKIN_NAMES[slotId]||slotId}</div>`
        : `<div style="font-size:28px;color:#333;">+</div><div style="font-size:11px;color:#555;">${t('fuse_slot_'+['left','right'][n-1])}</div>`
      }
    </div>`;
  });
  html += `</div>`;

  // Возможные варианты
  if (slot1 && slot2 && pool.length > 0) {
    // Используем зафиксированные веса, не пересчитываем
    const displayWeights = window._fuseCurrentWeights || d.fuse?._lockedWeights || _fuseGetWeights(pool, slot1, slot2);
    const sorted = pool.map((id, i) => ({ id, pct: displayWeights[i] }))
                       .sort((a, b) => b.pct - a.pct);
    html += `<div style="margin-bottom:12px;">
      <div style="font-size:11px;color:#888;margin-bottom:6px;">${t('fuse_possible')}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">`;
    sorted.forEach(({ id, pct }) => {
      const col = FUSE_RARITY_COLOR[FUSE_RARITY[id]] || '#888';
      html += `<div style="flex:1;min-width:60px;background:#111;border:2px solid ${col};border-radius:10px;padding:6px;text-align:center;">
        <img src="${getSkinImage(id)}" style="width:40px;height:40px;object-fit:contain;">
        <div style="font-size:9px;color:${col};margin-top:2px;">${FUSE_SKIN_NAMES[id]||id}</div>
        <div style="font-size:10px;color:#fff;font-weight:bold;">${pct}%</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  // Кнопки оплаты (только если оба слота заполнены)
  if (slot1 && slot2 && !isCooldown) {
    html += `<div style="margin-bottom:10px;">
      <div style="font-size:11px;color:#888;margin-bottom:6px;">Choose tier:</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">`;
    [1,2,3,4].forEach(tr => {
      const cfg = FUSE_TIER_POOLS[tr];
      const ksptCost = _fuseCalcKSPT(tr);
      const isSelected = tier === tr;
      const tierPool = _fuseGetPool(tr);
      const tierLocked = tierPool.length === 0;
      if (tierLocked) {
        html += `<div style="background:#0a0a0a;border:2px solid #222;border-radius:10px;padding:8px;text-align:center;opacity:0.4;">
          <div style="font-size:11px;color:#555;font-weight:bold;">Tier ${tr}</div>
          <div style="font-size:9px;color:#333;margin-top:4px;">All collected ✓</div>
        </div>`;
      } else {
        html += `<div onclick="_fuseSelectTier(${tr})" style="background:${isSelected?'#1a0a2e':'#111'};border:2px solid ${isSelected?'#7c3aed':'#333'};border-radius:10px;padding:8px;cursor:pointer;text-align:center;transition:.2s;">
          <div style="font-size:11px;color:#c084fc;font-weight:bold;">Tier ${tr}</div>
          <div style="font-size:10px;color:#aaa;">${formatNumber(ksptCost,0)} KSPT</div>
          <div style="font-size:10px;color:#00e5ff;">/ ${cfg.ek} EK</div>
          <div style="font-size:9px;color:#555;">${cfg.wait[0]}-${cfg.wait[1]}h wait</div>
        </div>`;
      }
    });
    html += `</div></div>
      <div style="display:flex;gap:8px;">
        <button onclick="_fuseStart('kspt')" style="flex:1;padding:12px;background:linear-gradient(135deg,#7c3aed,#c084fc);color:#fff;font-weight:bold;border:none;border-radius:12px;cursor:pointer;font-size:14px;">
          ${t('fuse_pay_kspt')}: ${formatNumber(_fuseCalcKSPT(tier),0)}
        </button>
        <button onclick="_fuseStart('ek')" style="flex:1;padding:12px;background:linear-gradient(135deg,#0077cc,#00e5ff);color:#fff;font-weight:bold;border:none;border-radius:12px;cursor:pointer;font-size:14px;">
          ${t('fuse_pay_ek')}: ${FUSE_TIER_POOLS[tier]?.ek} EK
        </button>
      </div>`;
  } else if (!slot1 || !slot2) {
    html += `<div style="text-align:center;color:#555;font-size:12px;padding:8px;">${t('fuse_need_2')}</div>`;
  }

  el.innerHTML = html + _fuseRenderCollection();

  // Запускаем таймер обновления если идёт слияние
  _fuseStartTimer();
}

function _fuseRenderCollection() {
  const rows = [
    { rarity:'common',   ids:['iabloko','mak','conf','gir','eka'] },
    { rarity:'rare',     ids:['mil','tel','dvd','pop','zem'] },
    { rarity:'champion', ids:['zam','shar','ogo','kak','sve'] },
    { rarity:'secret',   ids:['glaz','roz','ras','mat'] },
    { rarity:'god',      ids:['tro'] }
  ];
  const allCollected = FUSE_SKIN_IDS.every(id => d.fuseSkins && d.fuseSkins[id]);

  let html = `<div style="margin-top:16px;">
    <div style="font-weight:bold;font-size:14px;margin-bottom:8px;color:#c084fc;">${t('fuse_collection')}</div>`;

  rows.forEach(row => {
    const col = FUSE_RARITY_COLOR[row.rarity];
    const label = t(FUSE_RARITY_LABEL[row.rarity]);
    html += `<div style="margin-bottom:10px;">
      <div style="font-size:10px;color:${col};margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;">${label}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">`;
    row.ids.forEach(id => {
      const owned = d.fuseSkins && d.fuseSkins[id];
      const isActive = d.skin === id;
      html += `<div onclick="${owned ? `_fuseSelectActiveSkin('${id}')` : ''}"
        style="width:56px;background:#0d0d1a;border:2px solid ${owned?col:'#222'};border-radius:10px;padding:5px;text-align:center;cursor:${owned?'pointer':'default'};
        box-shadow:${owned?`0 0 8px ${col}44`:''};transition:.2s;position:relative;">
        <img src="${owned ? getSkinImage(id) : 'knowdont.png'}" style="width:36px;height:36px;object-fit:contain;">
        ${isActive ? '<div style="position:absolute;top:2px;right:2px;width:8px;height:8px;border-radius:50%;background:#00e676;"></div>' : ''}
        <div style="font-size:8px;color:${owned?col:'#333'};margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${owned?(FUSE_SKIN_NAMES[id]||id):'???'}</div>
      </div>`;
    });
    html += `</div></div>`;
  });

  // Фон-награда
  const labOwned = d.ownedBgs && d.ownedBgs.includes('lab');
  html += `<div style="background:#0d0d1a;border:1px solid ${labOwned?'#c084fc':'#222'};border-radius:10px;padding:10px;margin-top:8px;text-align:center;">
    <img src="lab.png" style="width:50px;height:50px;object-fit:contain;border-radius:6px;${labOwned?'':'filter:grayscale(1) brightness(0.3);'}">
    <div style="font-size:11px;color:${labOwned?'#c084fc':'#555'};margin-top:4px;">Lab Background</div>
    <div style="font-size:10px;color:#444;">Collect all 20 Fuse skins</div>
  </div>`;

  html += `</div>`;
  return html;
}

function _fuseSelectActiveSkin(id) {
  if (!d.fuseSkins || !d.fuseSkins[id]) return;
  d.skin = id;
  save();
  if (typeof updateSkinImage === 'function') updateSkinImage();
  if (typeof ui === 'function') ui();
  renderFuseMachine();
  showToast('✅ ' + (FUSE_SKIN_NAMES[id]||id) + ' active!');
}

function _fuseSelectTier(tier) {
  if (!d.fuse) d.fuse = {};
  d.fuse.tier = tier;
  // Пересчитываем пул и веса при смене тира (если оба слота заполнены)
  if (d.fuse.slot1 && d.fuse.slot2) {
    window._fuseCurrentPool = _fuseGetPool(tier);
    window._fuseCurrentWeights = _fuseGetWeights(window._fuseCurrentPool, d.fuse.slot1, d.fuse.slot2);
    d.fuse._lockedPool = window._fuseCurrentPool.slice();
    d.fuse._lockedWeights = window._fuseCurrentWeights.slice();
    save();
  }
  renderFuseMachine();
}

function _fuseOpenSlotPicker(slotNum) {
  if (d.fuse?.active && d.fuse?.fusingEnd > Date.now()) return;
  const skins = _fuseGetOwnedSelectableSkins();
  if (skins.length === 0) { showToast('No skins available!'); return; }

  // Убираем уже выбранный в другом слоте
  const other = slotNum === 1 ? d.fuse?.slot2 : d.fuse?.slot1;
  const filtered = skins.filter(id => id !== other);

  let modal = document.getElementById('fusePickerModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'fusePickerModal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:20000;background:rgba(0,0,0,0.9);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:20px;overflow-y:auto;box-sizing:border-box;';
    modal.onclick = e => { if(e.target===modal) modal.style.display='none'; };
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div style="width:100%;max-width:380px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div style="font-size:16px;font-weight:bold;color:#c084fc;">${t('fuse_select_skin')} (Slot ${slotNum})</div>
        <button onclick="document.getElementById('fusePickerModal').style.display='none'" style="background:#333;border:none;color:#fff;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:16px;">✕</button>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${filtered.map(id => {
          const isFuse = FUSE_SKIN_IDS.includes(id);
          const col = isFuse ? (FUSE_RARITY_COLOR[FUSE_RARITY[id]]||'#888') : '#555';
          return `<div onclick="_fusePickSkin(${slotNum},'${id}')" style="width:64px;background:#111;border:2px solid ${col};border-radius:10px;padding:6px;text-align:center;cursor:pointer;">
            <img src="${getSkinImage(id)}" style="width:40px;height:40px;object-fit:contain;">
            <div style="font-size:8px;color:${col};margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${FUSE_SKIN_NAMES[id]||id.charAt(0).toUpperCase()+id.slice(1)}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  modal.style.display = 'flex';
}

function _fusePickSkin(slotNum, id) {
  if (!d.fuse) d.fuse = {};
  if (slotNum === 1) d.fuse.slot1 = id;
  else d.fuse.slot2 = id;
  const modal = document.getElementById('fusePickerModal');
  if (modal) modal.style.display = 'none';
  // Если положили активный скин — переключаемся на default
  if (d.skin === id) {
    d.skin = 'default';
    if (typeof updateSkinImage === 'function') updateSkinImage();
    if (typeof ui === 'function') ui();
  }
  // Фиксируем пул и веса один раз когда оба слота заполнены
  if (d.fuse.slot1 && d.fuse.slot2) {
    window._fuseCurrentPool = _fuseGetPool(d.fuse.tier || 1);
    // Веса зависят от слотов — фиксируем сразу
    window._fuseCurrentWeights = _fuseGetWeights(window._fuseCurrentPool, d.fuse.slot1, d.fuse.slot2);
    // Сохраняем в d чтобы не пересчитывались при перезаходе
    d.fuse._lockedPool = window._fuseCurrentPool.slice();
    d.fuse._lockedWeights = window._fuseCurrentWeights.slice();
  }
  save();
  renderFuseMachine();
}

function _fuseStart(currency) {
  if (!d.fuse?.slot1 || !d.fuse?.slot2) { showToast(t('fuse_need_2')); return; }
  if (d.fuse?.active && d.fuse?.fusingEnd > Date.now()) return;
  if (d.fuse?.cooldownEnd > Date.now()) { showToast('Fuse on cooldown!'); return; }

  const tier = d.fuse.tier || 1;
  const cfg = FUSE_TIER_POOLS[tier];
  if (!cfg) return;

  if (currency === 'kspt') {
    const cost = _fuseCalcKSPT(tier);
    if (d.tokens < cost) { showToast('Not enough KSPT!'); return; }
    d.tokens -= cost;
  } else {
    const cost = cfg.ek;
    if ((d.ek || 0) < cost) { showToast('Not enough EK!'); return; }
    d.ek -= cost;
    localStorage.setItem('ekshop_ek_cache', String(d.ek));
  }

  // Рассчитываем время ожидания
  const waitH = cfg.wait[0] + Math.random() * (cfg.wait[1] - cfg.wait[0]);
  d.fuse.fusingEnd = Date.now() + Math.round(waitH * 3600000);
  d.fuse.active = true;
  // Сохраняем пул результата
  d.fuse._pool = d.fuse._lockedPool || window._fuseCurrentPool || _fuseGetPool(tier);

  save();
  ui();
  renderFuseMachine();
  _fuseStartTimer();
}

let _fuseTimerInterval = null;
function _fuseStartTimer() {
  if (_fuseTimerInterval) clearInterval(_fuseTimerInterval);
  if (!d.fuse?.active || d.fuse?.fusingEnd <= Date.now()) {
    _fuseCheckComplete();
    return;
  }
  _fuseTimerInterval = setInterval(() => {
    if (Date.now() >= d.fuse.fusingEnd) {
      clearInterval(_fuseTimerInterval);
      _fuseTimerInterval = null;
      _fuseComplete();
    } else {
      // Обновить только таймер без полного ре-рендера
      renderFuseMachine();
    }
  }, 60000);
}

function _fuseCheckComplete() {
  if (d.fuse?.active && d.fuse?.fusingEnd <= Date.now()) {
    _fuseComplete();
  }
}

function _fuseComplete() {
  if (!d.fuse?.active) return;
  const pool = d.fuse._pool || _fuseGetPool(d.fuse.tier || 1);
  const result = _fuseRollResult(pool, d.fuse.slot1, d.fuse.slot2);

  // Возвращаем слоты (они не теряются)
  const s1 = d.fuse.slot1, s2 = d.fuse.slot2;
  d.fuse.slot1 = null;
  d.fuse.slot2 = null;
  d.fuse.active = false;
  d.fuse.fusingEnd = 0;
  d.fuse.cooldownEnd = 0; // кулдаун убран
  d.fuse._pool = null;
  d.fuse._lockedPool = null;
  d.fuse._lockedWeights = null;
  window._fuseCurrentPool = null;
  window._fuseCurrentWeights = null;

  // Выдаём скин
  if (result) {
    if (!d.fuseSkins) d.fuseSkins = {};
    const alreadyHad = !!d.fuseSkins[result];
    d.fuseSkins[result] = true;

    // Проверяем фон-награду
    const allDone = FUSE_SKIN_IDS.every(id => d.fuseSkins && d.fuseSkins[id]);
    if (allDone) {
      if (!d.ownedBgs) d.ownedBgs = ['default'];
      if (!d.ownedBgs.includes('lab')) {
        d.ownedBgs.push('lab');
        if (typeof updateSettingsUI === 'function') updateSettingsUI();
        setTimeout(() => showToast(t('fuse_all_collected')), 2000);
      }
    }
  }

  save();
  ui();
  renderFuseMachine();

  // Показываем результат
  if (result) {
    const col = FUSE_RARITY_COLOR[FUSE_RARITY[result]] || '#c084fc';
    _fuseShowResult(result, col, s1, s2);
  }
}

function _fuseShowResult(resultId, col, s1, s2) {
  let modal = document.getElementById('fuseResultModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'fuseResultModal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:21000;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div style="background:#0d0d1a;border:2px solid ${col};border-radius:20px;padding:28px 24px;text-align:center;max-width:320px;width:90%;box-shadow:0 0 40px ${col}66;">
      <div style="font-size:22px;font-weight:bold;color:${col};margin-bottom:4px;">${t('fuse_result')}</div>
      <div style="font-size:12px;color:#555;margin-bottom:16px;">${FUSE_SKIN_NAMES[s1]||s1} + ${FUSE_SKIN_NAMES[s2]||s2}</div>
      <img src="${getSkinImage(resultId)}" style="width:90px;height:90px;object-fit:contain;filter:drop-shadow(0 0 16px ${col});margin-bottom:12px;">
      <div style="font-size:18px;font-weight:bold;color:#fff;margin-bottom:4px;">${FUSE_SKIN_NAMES[resultId]||resultId}</div>
      <div style="font-size:12px;color:${col};margin-bottom:16px;">${t(FUSE_RARITY_LABEL[FUSE_RARITY[resultId]]||'rarity_fuse_common')} · +${SKIN_INCOME[resultId]||0} KSPT/h</div>
      <button onclick="document.getElementById('fuseResultModal').style.display='none'" style="background:linear-gradient(135deg,#7c3aed,#c084fc);color:#fff;font-weight:bold;border:none;border-radius:12px;padding:12px 28px;cursor:pointer;font-size:15px;">
        ✨ Collect!
      </button>
    </div>`;
  modal.style.display = 'flex';
}

// При загрузке — проверяем завершилось ли слияние
setTimeout(() => {
  if (typeof _fuseCheckComplete === 'function') _fuseCheckComplete();
  if (typeof _fuseStartTimer === 'function') _fuseStartTimer();
}, 2000);

// ===== /FUSE MACHINE =====

const easterEggRewards = [
  { type: 'kspt3h',    weight: 30, name: '3h Offline Income',  img: 'kspt.png' },
  { type: 'znetons',   weight: 20, name: '+3 Tokens',          img: 'zneton.png' },
  { type: 'capsule',   weight: 20, name: 'Free Capsule',       img: 'capsule.png' },
  { type: 'yellowKey', weight: 10, name: '🟡 Yellow Key',      img: 'yellow.png' },
  { type: 'puzzle',    weight: 7,  name: 'Puzzle Piece',       img: 'puz.png' },
  { type: 'redKey',    weight: 5,  name: '🔴 Red Key',         img: 'red.png' },
  { type: 'greenKey',  weight: 3,  name: '🟢 Green Key',       img: 'green.png' },
  { type: 'bg_bunny',  weight: 2,  name: 'Background: Easter Bunny', img: 'bunn.png' }
];

function getWeightedEasterEggReward() {
  const total = easterEggRewards.reduce((s, r) => s + r.weight, 0);
  let rand = Math.random() * total;
  for (const r of easterEggRewards) { rand -= r.weight; if (rand < 0) return r; }
  return easterEggRewards[0];
}

const noobBoxRewards = [
  { type: 'kspt', value: 1, weight: 40, name: '+1 KSPT', img: 'kspt.png' },
  { type: 'banx', value: 5500, weight: 30, name: '+5500 BANX', img: 'bandit.png' },
  { type: 'jvm', value: 6.7, weight: 15, name: '+6.7 JVM', img: 'jvm.png' },
  { type: 'puzzle', weight: 5, name: 'Random Puzzle Piece', img: 'puz.png' },
  { type: 'capsuleSkip', weight: 5, name: 'Capsule Timer Skip', img: 'capsule5.png' },
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
  playtimeMs: 0,

profile: {
    bio: '',
    favSkin: '',
    favGame: '',
    createdAt: Date.now()
  },
  friends: {},
  pendingReactions: [],
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
  streak: {
    days: 0,
    lastClaimDay: 0,
    lastClaimTs: 0,
    restoresLeft: 3,
    pendingClaim: false
  },
  wonX10: false,
  cards: { 
    c1: -1, c2: -1, c3: -1, c4: -1, c5: -1,
    s1: -1, s2: -1, s3: -1, s4: -1, s5: -1, s6: -1, s7: -1,
    g1: -1, g2: -1, g3: -1, g4: -1, g5: -1, g6: -1, g7: -1
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
  puzzles3: [0,0,0,0,0,0,0,0,0],
  puzzle3Done: false,
  puzzles4: [0,0,0,0,0,0,0,0,0],
  puzzle4Done: false,
  puzzles5: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  puzzle5Done: false,
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
keys: {
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
    black: 0,
    admin: 0
  },
  keyBox: {
    taps: 0
  },
  bombBox: {
    obtained: false
  },
  fortuneWheel: {
    spinsUsed: 0,
    lastResetTime: 0
  },
  glitchBox: {
    firstOpen: true,
    lastOpen: 0,
    cooldownDays: 20,
    taps: 0,
    doubled: 1, // 1, 2 или 4
    duplicates: 0 // сколько раз удваивалось в текущей сессии
  },
  glitchRewards: [], // полученные награды из текущей сессии
  glitchFragments: [false, false, false],
  fuseSkins: {},
  fuse: { slot1: null, slot2: null, fusingEnd: 0, cooldownEnd: 0, tier: 0, active: false },
  diamondCapsule: { obtained: false, taps: 0 },
  capsuleOpenCount: 0,
  miliBox: { obtained: false, taps: 0 },
  keys: { yellow: 0, red: 0, green: 0, blue: 0, black: 0, admin: 0, diamond: 0 },
  tapEmote: { enabled: false, emote: 'milo' },
  // Таймеры бустов
  tapBoostEnd: 0, // время окончания tap boost
  offlineMultiplierEnd: 0, // время окончания x2 offline буста
  // Новые фоны и музыка
  ownedBgs: ["default"], // добавьте "scripting" и другие
  ownedMusic: ["mistic"], // добавьте "wasted_time" и другие
  // Секретные скины
  secretSkins: {
    corrupted: false,
    failed: false,
    greatjoost: false,
    angel: false,
    demon: false
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
    },
    notifications: {
      enabled: false
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
    personalToken: null,
    myTokens: []
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
        // Don't overwrite d.skin — updateSkinImage handles ekshop priority
      }

      if (d.ekshop_selected?.bg) {
        d.ekshopBg = d.ekshop_selected.bg;
        // Don't overwrite d.bg
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
  if (!merged.easterEgg) merged.easterEgg = { obtained: false, swipes: 0 };

  return merged;
}

// ПОСЛЕ (заменили merged на d)
if (!d.keys) {
  d.keys = defaultData.keys;
}

if (!d.keyBox) d.keyBox = { taps: 0 };
if (!d.bombBox) d.bombBox = { obtained: false };
if (!d.easterEgg) d.easterEgg = { obtained: false, swipes: 0 };
if (!d.giftBox) d.giftBox = { obtained: false };
if (!d.giftSentLog) d.giftSentLog = {};
if (!d.plinko) d.plinko = { tries: 5, lastTryTs: 0 };
if (!d.fortuneWheel) d.fortuneWheel = { spinsUsed: 0, lastResetTime: 0 };
// Admin ban check — runs every load
if (d.adminBanned) {
  document.body.innerHTML = `
    <div id="adminBanScreen" style="display:flex;flex-direction:column;align-items:center;
      justify-content:center;height:100vh;background:#0b0b0b;color:red;
      font-size:22px;font-weight:bold;text-align:center;padding:20px;">
      🚫 You have been banned by an admin.
    </div>`;
}
if (typeof d.keys.black === 'undefined') d.keys.black = 0;
if (typeof d.keys.admin === 'undefined') d.keys.admin = 0;

if (!d.puzzles3) d.puzzles3 = [0,0,0,0,0,0,0,0,0];
if (typeof d.puzzle3Done === 'undefined') d.puzzle3Done = false;
if (!d.puzzles4) d.puzzles4 = [0,0,0,0,0,0,0,0,0];
if (typeof d.puzzle4Done === 'undefined') d.puzzle4Done = false;
if (!d.puzzles5) d.puzzles5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
if (!d.playtimeMs) d.playtimeMs = 0;
if (typeof d.puzzle5Done === 'undefined') d.puzzle5Done = false;

if (!d.glitchFragments) d.glitchFragments = [false, false, false];

if (!d.fuseSkins) d.fuseSkins = {};
// Применяем тему кнопок при загрузке
setTimeout(() => _applyBtnTheme(d.settings?.btnTheme || 'default'), 300);
if (!d.fuse) d.fuse = { slot1: null, slot2: null, fusingEnd: 0, cooldownEnd: 0, tier: 0, active: false };

// Чистим зависшие temp скины при загрузке
if (d.skins) {
  Object.keys(d.skins).forEach(k => {
    if (d.skins[k] === '_temp') delete d.skins[k];
  });
  if (d._adminTempSkinOrigSkin) {
    d.skin = d._adminTempSkinOrigSkin;
    delete d._adminTempSkinOrigSkin;
  }
}

if (!d.diamondCapsule) d.diamondCapsule = { obtained: false, taps: 0 };
if (typeof d.capsuleOpenCount === 'undefined') d.capsuleOpenCount = 0;
if (!d.miliBox) d.miliBox = { obtained: false, taps: 0 };
if (typeof d.keys.diamond === 'undefined') d.keys.diamond = 0;
if (!d.tapEmote) d.tapEmote = { enabled: false, emote: 'milo' };

if (!d.tapBoostEnd) d.tapBoostEnd = 0;
if (!d.offlineMultiplierEnd) d.offlineMultiplierEnd = 0;

if (!d.secretSkins) {
  d.secretSkins = defaultData.secretSkins;
}

const save = () => {
  console.debug('save: called at', Date.now());
  try {
    d._savedAt = Date.now();
    localStorage.setItem("kspt", JSON.stringify(d));
    if (d.market.personalToken) {
      localStorage.setItem('kspt_user_tokens', JSON.stringify(d.market.personalToken));
    }
  } catch(e) {
    console.error("Error saving data:", e);
  }
};

// ===== FIREBASE CLOUD SAVE =====
function getCloudSaveUid() {
  return String(window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '');
}

function saveToFirebase() {
  if (!window._firebaseReady) return;
  const uid = getCloudSaveUid();
  if (!uid || uid === 'local' || uid === '') return;
  try {
    const snapshot = JSON.parse(JSON.stringify(d));
    snapshot._savedAt = Date.now();
    try { snapshot._ekshop = JSON.parse(localStorage.getItem('ekshop_owned') || '{}'); } catch(e) { snapshot._ekshop = {}; }
    // Don't save market history to save space
    if (snapshot.market) {
      ['ksptToken','banxToken','jvmToken'].forEach(k => {
        if (snapshot.market[k]) snapshot.market[k].history = snapshot.market[k].history?.slice(-10) || [];
      });
    }
    window._firebaseRef(window._firebaseDB, 'cloudSave/' + uid).set(snapshot);
    console.debug('cloud save: ok');
  } catch(e) {
    console.warn('cloud save error:', e);
  }
}

function loadFromFirebase(onDone) {
  if (!window._firebaseReady) { if (onDone) onDone(null); return; }
  const uid = getCloudSaveUid();
  if (!uid || uid === '') { if (onDone) onDone(null); return; }
  window._firebaseRef(window._firebaseDB, 'cloudSave/' + uid).once('value', function(snapshot) {
    const data = snapshot.val();
    if (onDone) onDone(data);
  }, function() {
    if (onDone) onDone(null);
  });
}

function tryRestoreFromCloud() {
  const localRaw = localStorage.getItem('kspt');
  loadFromFirebase(function(cloudData) {
    if (!cloudData) return;
    const cloudTime = cloudData._savedAt || 0;
    let localTime = 0;
    try {
      const localParsed = localRaw ? JSON.parse(localRaw) : null;
      localTime = localParsed?._savedAt || localParsed?.lastLogin || 0;
    } catch(e) {}

    if (cloudTime > localTime) {
      console.log('cloud save is newer — restoring');
      try {
        if (cloudData._ekshop && typeof cloudData._ekshop === 'object') {
          localStorage.setItem('ekshop_owned', JSON.stringify(cloudData._ekshop));
        }
        delete cloudData._savedAt;
        delete cloudData._ekshop;
        d = migrateData(cloudData, defaultData);
        localStorage.setItem('kspt', JSON.stringify(d));
        loadEkshopData();
        ui();
        showToast('☁️ Progress restored from cloud!');
      } catch(e) {
        console.warn('cloud restore error:', e);
      }
    } else {
      console.debug('local save is up to date');
    }
  });
}

// ===== FIREBASE CLEANUP =====
function _cleanupOldFirebaseData() {
  if (!window._firebaseReady || !window._firebaseDB) return;
  const myUid = getMyUid();
  if (!myUid || myUid === 'local') return;
  const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;

  // Чистим старые friendRequests (старше 7 дней)
  window._firebaseRef(window._firebaseDB, `friendRequests/${myUid}`).once('value', snap => {
    const data = snap?.val();
    if (!data) return;
    Object.entries(data).forEach(([key, val]) => {
      if (val.ts && val.ts < weekAgo) {
        window._firebaseRef(window._firebaseDB, `friendRequests/${myUid}/${key}`).remove();
      }
    });
  });

  // Чистим свои старые реакции если вдруг не удалились
  window._firebaseRef(window._firebaseDB, `reactions/${myUid}`).once('value', snap => {
    if (snap?.val()) {
      window._firebaseRef(window._firebaseDB, `reactions/${myUid}`).remove();
    }
  });
}

// Запускаем чистку через 10 сек после загрузки (чтобы не мешать старту)
setTimeout(_cleanupOldFirebaseData, 10000);
// ===== /FIREBASE CLEANUP =====

// Auto-save to Firebase every 30 seconds
setInterval(() => {
  if (window._firebaseReady) saveToFirebase();
}, 30000);

// On load — try to restore if local is empty or older
window.addEventListener('load', () => {
  setTimeout(tryRestoreFromCloud, 2000); // wait for firebase to init
});

// Данные о доходах от скинов
const SKIN_INCOME = {
  default: 0,
  what: 1,
  burger: 2.2,
  joost: 4,
  dog: 6.7,
  diam: 10,
  tung: 15,
  priz: 10,
  euro: 27,
  space: 40,
  kostia: 5,
  pixe: 80,    
  onion: 120,
  cookie: 160,
  metka: 5,
  seri: 5,
  mystic: 15,
  capsule: 30,
  artem: 5,
  ruka: 170,
  banditx: 210,
  goldcoin: 250,
  gkspt: 10,           
  cyber_android: 15, 
  siulai: 50,
  dirty: 10,
  crypto_heart: 14,
  tetris: 10,
  joystick: 15,        
  snake: 30,
  skin_8bit_coin: 5,
  skin_zombie_train: 40,
  brb: 500,
  goldensafe: 100,
  corrupted: 20,
  failed: 35,
  doge: 50,
  bhole: 100,
  toilet: 0,
  capsulememe: 0,
  ufo: 120,
  dragon: 250,
  eggi: 25,
  viking: 5,
  wheel: 15,
  target: 30,
  bird: 30,
  greatjoost: 5,
  angel: 25,
  diamond_kspt: 15,
  precious_coin: 25,
  mops: 20,
  bulldog: 15,
  demon: 25,
  // Fuse Common (5/h)
  iabloko: 5, mak: 5, conf: 5, gir: 5, eka: 5,
  // Fuse Rare (15/h)
  mil: 15, tel: 15, dvd: 15, pop: 15, zem: 15,
  // Fuse Champion (25/h)
  zam: 25, shar: 25, ogo: 25, kak: 25, sve: 25,
  // Fuse Secret (40/h)
  glaz: 40, roz: 40, ras: 40, mat: 40,
  // Fuse God (50/h)
  tro: 50
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
  s6: { type: 'sport', levels: [{ price: 14810, income: 25 }, { price: 17200, income: 37 }, { price: 21480, income: 54 }, { price: 22000, income: 71 }, { price: 24995, income: 104 }, { price: 31005, income: 138 }] },
  s7: { type: 'sport', levels: [{ price: 51220, income: 100 }, { price: 66600, income: 175 }, { price: 77800, income: 240 }, { price: 121000, income: 310 }, { price: 156050, income: 360 }, { price: 200000, income: 480 }] },
  
  // Game cards - EXACT VALUES
  g1: { type: 'game', levels: [{ price: 240, income: 5.8 }, { price: 255, income: 7.2 }, { price: 275, income: 10.0 }, { price: 335, income: 13.1 }, { price: 360, income: 15.8 }, { price: 405, income: 18.1 }] },
  g2: { type: 'game', levels: [{ price: 70, income: 2.2 }, { price: 85, income: 3.7 }, { price: 110, income: 5.9 }, { price: 125, income: 7.4 }, { price: 140, income: 8.8 }, { price: 165, income: 9.7 }] },
  g3: { type: 'game', levels: [{ price: 140, income: 5.1 }, { price: 155, income: 7.2 }, { price: 160, income: 8.9 }, { price: 175, income: 11.1 }, { price: 195, income: 14.4 }, { price: 215, income: 17.5 }] },
  g4: { type: 'game', levels: [{ price: 1100, income: 4 }, { price: 1480, income: 7 }, { price: 2100, income: 14 }, { price: 3700, income: 21 }, { price: 5400, income: 28 }, { price: 7050, income: 34 }] },
  g5: { type: 'game', levels: [{ price: 5480, income: 14 }, { price: 7410, income: 21 }, { price: 8900, income: 29 }, { price: 11000, income: 38 }, { price: 14100, income: 51 }, { price: 19250, income: 64 }] },
  g6: { type: 'game', levels: [{ price: 81000, income: 70 }, { price: 89000, income: 120 }, { price: 94000, income: 140 }, { price: 98000, income: 190 }, { price: 108000, income: 271 }, { price: 136000, income: 315 }] },
  g7: { type: 'game', levels: [{ price: 110, income: 10 }, { price: 1400, income: 21 }, { price: 3800, income: 34 }, { price: 11500, income: 41 }, { price: 47200, income: 78 }, { price: 111000, income: 133 }] },
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
    if (d.offlineMultiplierEnd > now) {
  rate *= 2;
}
    
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
    if(newPrice < 0.30) newPrice = 0.30;
    if(newPrice > 3.02) newPrice = 3.02;
    
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
      if(newBanxPrice < 0.0009) newBanxPrice = 0.0009;
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
      if(newJvmPrice > 14.10) newJvmPrice = 14.10;
      
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
      
      const _ptFloor = d.market.personalToken.initialPrice ? d.market.personalToken.initialPrice * 0.01 : 0.00001;
      const _ptCeil  = d.market.personalToken.initialPrice ? d.market.personalToken.initialPrice * 100  : 999999;
      if(newPersonalPrice < _ptFloor) newPersonalPrice = _ptFloor;
      if(newPersonalPrice > _ptCeil)  newPersonalPrice = _ptCeil;
      
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
  if(d.cards.s6 >= 0) rate += CARDS.s6.levels[d.cards.s6].income;
  if(d.cards.s7 >= 0) rate += CARDS.s7.levels[d.cards.s7].income;
  
  // Game cards
  if(d.cards.g1 >= 0) rate += CARDS.g1.levels[d.cards.g1].income;
  if(d.cards.g2 >= 0) rate += CARDS.g2.levels[d.cards.g2].income;
  if(d.cards.g3 >= 0) rate += CARDS.g3.levels[d.cards.g3].income;
  if(d.cards.g4 >= 0) rate += CARDS.g4.levels[d.cards.g4].income;
  if(d.cards.g5 >= 0) rate += CARDS.g5.levels[d.cards.g5].income;
  if(d.cards.g6 >= 0) rate += CARDS.g6.levels[d.cards.g6].income;
  if(d.cards.g7 >= 0) rate += CARDS.g7.levels[d.cards.g7].income;

  rate += SKIN_INCOME.default;
  
  if(d.skins) {
    for(let s in d.skins) {
      if(d.skins[s] && SKIN_INCOME[s]) {
        rate += SKIN_INCOME[s];
      }
    }
  }
  if(d.wonX10) rate += SKIN_INCOME.priz;

 // Secret skins income
if (d.secretSkins) {
  if (d.secretSkins.greatjoost) rate += SKIN_INCOME.greatjoost;
  if (d.secretSkins.angel) rate += SKIN_INCOME.angel;
  if (d.secretSkins.demon) rate += SKIN_INCOME.demon;
}

// Fuse skins income
if (d.fuseSkins) {
  Object.keys(d.fuseSkins).forEach(id => {
    if (d.fuseSkins[id] && SKIN_INCOME[id]) {
      rate += SKIN_INCOME[id];
    }
  });
}

/* ===== EK SHOP INCOME START ===== */
try {
  const ownedRaw = localStorage.getItem('ekshop_owned');
  if (ownedRaw) {
    const owned = JSON.parse(ownedRaw);

    if (owned.skin_tetris) rate += 10;
    if (owned.skin_joystick) rate += 15;
    if (owned.skin_snake) rate += 30;

    if (owned.skin_8bit_coin) rate += 5;
    if (owned.skin_zombie_train) rate += 40;
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

     if (document.getElementById('keysTab')?.style.display !== 'none') {
      updateKeysUI();
      updateGlitchBoxUI();
    }

updateBoostTimers();

  });
  
  updateAllTexts();
  updateBackground();
  updateTempBoostUI();
  updateCapsuleUI();
  updateSkinImage();
  updateSkinButtons();
  updateSettingsUI();
  updateRegenUI();
  window.updateCardUI();
  updatePuzzleUI();
  updateSecondPuzzleUI();
  updateThirdPuzzleUI();
  if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
  if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();
  updateSkinPreviews();
  
  if (!document.getElementById("market")?.classList.contains("active")) {
    updateMarketUI();
  }
  
  updateMaxedButtons();
  updateNotificationBadges();
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
    'goldensafe': 'sgold.png',                   
    'cyber_android': 'robotic.png', 
    'siulai': 'siulai.png',   
    'dirty': 'dirty.png',
    'crypto_heart': 'heart.png',
    'brb': 'knopka.png',
    'corrupted': 'corr.png',
    'failed': 'fail.png',
    'doge': 'doge.png',
    'bhole': 'bhole.png',
    'toilet': 'toilet.png',
    'capsulememe': 'capsule.png',
    'ufo': 'ufo.png',
    'dragon': 'dragon.png',
    'tetris': 'tetrisik.png',
    'joystick': 'dzoi.png',
    'snake': 'zmej.png',
    'skin_8bit_coin': 'bit.png',
    'skin_zombie_train': 'zomb.png',
    'eggi': 'eggi.png',
    'viking': 'vikikng.png',
    'wheel': 'wheel.png',
    'target': 'target.png',
    'bird': 'bird.png',
    'greatjoost': 'just.png',
    'angel': 'angel.png',
    'diamond_kspt': 'ksd.png',
    'precious_coin': 'codiam.png',
    'mops': 'mops.png',
    'bulldog': 'bul.png',
    'demon': 'demon.png',
    // Fuse Common
    'iabloko': 'iabloko.png', 'mak': 'mak.png', 'conf': 'conf.png', 'gir': 'gir.png', 'eka': 'eka.png',
    // Fuse Rare
    'mil': 'mil.png', 'tel': 'tel.png', 'dvd': 'dvd.png', 'pop': 'pop.png', 'zem': 'zem.png',
    // Fuse Champion
    'zam': 'zam.png', 'shar': 'shar.png', 'ogo': 'ogo.png', 'kak': 'kak.png', 'sve': 'sve.png',
    // Fuse Secret
    'glaz': 'glaz.png', 'roz': 'roz.png', 'ras': 'ras.png', 'mat': 'mat.png',
    // Fuse God
    'tro': 'tro.png'
  };
  return skinImages[skinId] || 'kspt.png';
}

function updateSkinImage() {
if (d.skin === 'dragon') {
    if (!document.getElementById('dragonFireCanvas') && typeof _dragonStart === 'function') {
      setTimeout(_dragonStart, 200);
    }
  } else {
    if (typeof _dragonStop === 'function') _dragonStop();
  }
  const coin = document.getElementById("coin");
  if (!coin) return;

// Black Hole particles
  const existingParticles = document.getElementById('bholeParticles');
  if (d.skin === 'bhole') {
    if (!existingParticles) {
      const container = document.createElement('div');
      container.id = 'bholeParticles';
      container.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;';
      coin.parentNode.style.position = 'relative';
      coin.parentNode.appendChild(container);
      for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        const isKspt = i < 3;
        const angle = (i / 8) * 360;
        p.style.cssText = `
          position:absolute; width:${isKspt?18:6}px; height:${isKspt?18:6}px;
          border-radius:50%; top:50%; left:50%;
          background:${isKspt?'transparent':'#1a1a2e'};
          border:${isKspt?'none':'2px solid #333'};
          animation: bholeOrbit${i} ${2+i*0.3}s linear infinite;
          transform-origin: ${40+i*8}px 0;
        `;
        if (isKspt) {
          const img = document.createElement('img');
          img.src = 'kspt.png';
          img.style.cssText = 'width:100%;height:100%;border-radius:50%;';
          p.appendChild(img);
        }
        container.appendChild(p);
      }
      // inject keyframes
      if (!document.getElementById('bholeStyle')) {
        const style = document.createElement('style');
        style.id = 'bholeStyle';
        let kf = '';
        for (let i = 0; i < 8; i++) {
          kf += `@keyframes bholeOrbit${i} { from { transform: rotate(${i*45}deg) translateX(${50+i*7}px); } to { transform: rotate(${i*45+360}deg) translateX(${50+i*7}px); } }`;
        }
        style.textContent = kf;
        document.head.appendChild(style);
      }
    }
  } else {
    if (existingParticles) existingParticles.remove();
  }

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
      'skin_snake': 'zmej.png',
      'skin_8bit_coin': 'bit.png',
      'skin_zombie_train': 'zomb.png',
      'bird': 'bird.png'
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
  coin.style.animation = (currentSkinId === 'ufo') ? 'ufo-float 2.8s ease-in-out infinite' : '';
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
  
  // Заморожен в Fuse?
  if (d.fuse?.active && (d.fuse?.slot1 === skinId || d.fuse?.slot2 === skinId)) {
    showToast(t('fuse_frozen'));
    return;
  }
  // Check if skin is owned (включая secretSkins и fuseSkins)
  const _skinOwnedViaSecret = d.secretSkins && d.secretSkins[skinId];
  const _skinOwnedViaFuse = d.fuseSkins && d.fuseSkins[skinId];
  if (skinId !== 'default' && !d.skins[skinId] && !_skinOwnedViaSecret && !_skinOwnedViaFuse) {
    // Особые скины из боксов (не покупаются)
    if (skinId === 'gkspt' || skinId === 'cyber_android' || skinId === 'dirty' || skinId === 'doge') {
      showToast(t('locked'));
      return;
    }
    if (skinId === 'bhole' && !d.puzzle3Done) { showToast(t('locked')); return; }
    if (skinId === 'ufo' && !d.puzzle4Done) { showToast(t('locked')); return; }
    if (skinId === 'dragon' && !d.puzzle5Done) { showToast(t('locked')); return; }
    if ((skinId === 'toilet' || skinId === 'capsulememe') && !(d.secretSkins && d.secretSkins[skinId])) {
      showToast(t('locked')); return;
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
  
  // Dragon fire particles
  if (typeof _dragonStop === 'function') _dragonStop();
  if (skinId === 'dragon' && typeof _dragonStart === 'function') {
    setTimeout(_dragonStart, 100);
  }

  // UFO float animation on coin
  const _coinEl = document.getElementById('coin');
  if (_coinEl) {
    if (skinId === 'ufo') {
      _coinEl.style.animation = 'ufo-float 2.8s ease-in-out infinite';
    } else {
      _coinEl.style.animation = '';
    }
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
    case "doge":
  let dogeStage = parseInt(coin.dataset.dogeStage || "0", 10);
  dogeStage = (dogeStage + 1) % 3;
  coin.dataset.dogeStage = dogeStage;
  if (dogeStage === 0) coin.src = "doge.png";
  else if (dogeStage === 1) coin.src = "doge1.png";
  else coin.src = "doge2.png";
  break;
    case "goldensafe":
  coin.dataset.gsToggle = coin.dataset.gsToggle === '1' ? '0' : '1';
  coin.src = coin.dataset.gsToggle === '1' ? 'sgold1.png' : 'sgold.png';
  break;
   case "bhole":
  let bholeStage = parseInt(coin.dataset.bholeStage || "0", 10);
  bholeStage = (bholeStage + 1) % 3;
  coin.dataset.bholeStage = bholeStage;
  if (bholeStage === 0) coin.src = "bhole.png";
  else if (bholeStage === 1) coin.src = "bhole1.png";
  else coin.src = "bhole2.png";
  break;
    case "toilet":
  coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
  coin.src = coin.dataset.toggle === "1" ? "toilet1.png" : "toilet.png";
  break;
    case "capsulememe": {
  let cmStage = parseInt(coin.dataset.cmStage || "0", 10);
  cmStage = (cmStage + 1) % 6;
  coin.dataset.cmStage = cmStage;
  const cmFrames = ["capsule.png","capsule1.png","capsule2.png","capsule3.png","capsule4.png","capsule5.png"];
  coin.src = cmFrames[cmStage];
  break;
    }
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
    case "skin_8bit_coin":
  coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
  coin.src = coin.dataset.toggle === "1" ? "bit1.png" : "bit.png";
  break;
  case "skin_zombie_train":
  let zStage = parseInt(coin.dataset.zStage || "0", 10);
  zStage = (zStage + 1) % 3; // 0,1,2
  coin.dataset.zStage = zStage;

  if (zStage === 0) coin.src = "zomb.png";
  else if (zStage === 1) coin.src = "zomb1.png";
  else coin.src = "zomb2.png";
  break;
    case "corrupted":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "corr1.png" : "corr.png";
      break;
    case "failed":
      let fStage = parseInt(coin.dataset.failStage || "0", 10);
      fStage = (fStage + 1) % 4; // Цикл 0, 1, 2, 3
      coin.dataset.failStage = fStage;
      if (fStage === 0) coin.src = "fail.png";
      else if (fStage === 1) coin.src = "fail1.png";
      else if (fStage === 2) coin.src = "fail2.png";
      else coin.src = "fail3.png";
      break;
    case "brb":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "knopka1.png" : "knopka.png";
      break;
    case "ufo":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "ufo1.png" : "ufo.png";
      break;
    case "dragon": {
      const wasStage = coin.dataset.dragonStage || "0";
      coin.dataset.dragonStage = wasStage === "0" ? "1" : "0";
      coin.src = coin.dataset.dragonStage === "1" ? "dragon1.png" : "dragon.png";
      // Обновляем интенсивность частиц
      if (typeof _dragonUpdateParticles === 'function') _dragonUpdateParticles(coin.dataset.dragonStage === "1");
      break;
    }
    case "eggi": {
      let eStage = parseInt(coin.dataset.eggiStage || "0", 10);
      eStage = (eStage + 1) % 4;
      coin.dataset.eggiStage = eStage;
      const eggFrames = ['eggi.png','egii1.png','eggi2.png','eggi3.png'];
      coin.src = eggFrames[eStage];
      break;
    }
    case "viking": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "viking1.png" : "vikikng.png";
      break;
    }
    case "wheel": {
      // 360° оборот за 0.5с
      coin.style.transition = 'transform 0.5s ease';
      const cur = parseInt(coin.dataset.wheelRot || "0", 10) + 360;
      coin.dataset.wheelRot = cur;
      coin.style.transform = `rotate(${cur}deg)`;
      break;
    }
    case "target": {
      // Лёгкое дёргание
      coin.style.transition = 'transform 0.05s ease';
      coin.style.transform = `translate(${(Math.random()-0.5)*4}px,${(Math.random()-0.5)*4}px)`;
      setTimeout(() => { coin.style.transform = 'translate(0,0)'; }, 80);
      let tStage = parseInt(coin.dataset.targetStage || "0", 10);
      tStage = (tStage + 1) % 4;
      coin.dataset.targetStage = tStage;
      const tFrames = ['target.png','target1.png','target2.png','target3.png'];
      coin.src = tFrames[tStage];
      break;
    }
    case "bird": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "bird1.png" : "bird.png";
      break;
    }
    case "greatjoost": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "just1.png" : "just.png";
      break;
    }
    case "angel": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "angel1.png" : "angel.png";
      break;
    }
    case "diamond_kspt": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "ksd1.png" : "ksd.png";
      break;
    }
    case "precious_coin": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "codiam1.png" : "codiam.png";
      break;
    }
    case "mops": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "mops1.png" : "mops.png";
      break;
    }
    case "bulldog": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "bul1.png" : "bul.png";
      break;
    }
    case "demon": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "demon1.png" : "demon.png";
      break;
    }
    // Fuse Rare — toggle
    case "mil": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"mil1.png":"mil.png"; break; }
    case "tel": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"tel1.png":"tel.png"; break; }
    case "dvd": {
      // DVD: полный оборот как wheel
      coin.style.transition = 'transform 0.5s ease';
      const dvdRot = parseInt(coin.dataset.dvdRot || "0", 10) + 360;
      coin.dataset.dvdRot = dvdRot;
      coin.style.transform = `rotate(${dvdRot}deg)`;
      break;
    }
    case "pop": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"pop1.png":"pop.png"; break; }
    case "zem": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"zem1.png":"zem.png"; break; }
    // Fuse Champion — toggle
    case "zam": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"zam1.png":"zam.png"; break; }
    case "shar": {
      // Воздушный шар: вверх/вниз
      const sharUp = coin.dataset.sharUp !== "1";
      coin.dataset.sharUp = sharUp ? "1" : "0";
      coin.style.transition = 'transform 0.6s ease';
      coin.style.transform = sharUp ? 'translateY(-18px)' : 'translateY(0)';
      break;
    }
    case "ogo": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"ogo1.png":"ogo.png"; break; }
    case "kak": {
      // Кактус — звук
      try { const a = new Audio('gi.mp3'); a.volume = 0.5; a.play(); } catch(e){}
      break;
    }
    case "sve": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"sve1.png":"sve.png"; break; }
    // Fuse Secret — toggle
    case "glaz": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"glaz1.png":"glaz.png"; break; }
    case "roz": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"roz1.png":"roz.png"; break; }
    case "ras": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"ras1.png":"ras.png"; break; }
    case "mat": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"mat1.png":"mat.png"; break; }
    // Fuse God
    case "tro": { coin.dataset.toggle = coin.dataset.toggle==="1"?"0":"1"; coin.src = coin.dataset.toggle==="1"?"tro1.png":"tro.png"; break; }
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

case "skin_8bit_coin":
  coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
  coin.src = coin.dataset.toggle === "1" ? "bit1.png" : "bit.png";
  break;

case "skin_zombie_train":
  let zStage = parseInt(coin.dataset.zStage || "0", 10);
  zStage = (zStage + 1) % 3;
  coin.dataset.zStage = zStage;

  if (zStage === 0) coin.src = "zomb.png";
  else if (zStage === 1) coin.src = "zomb1.png";
  else coin.src = "zomb2.png";
  break;

case "brb":
  coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
  coin.src = coin.dataset.toggle === "1" ? "knopka1.png" : "knopka.png";
  break;

  case "eggi": {
      let eS = parseInt(coin.dataset.eggiStage || "0", 10);
      eS = (eS + 1) % 4;
      coin.dataset.eggiStage = eS;
      const ef = ['eggi.png','egii1.png','eggi2.png','eggi3.png'];
      coin.src = ef[eS];
      break;
    }
    case "bird": {
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "bird1.png" : "bird.png";
      break;
    }
    case "target": {
      let tS = parseInt(coin.dataset.targetStage || "0", 10);
      tS = (tS + 1) % 4;
      coin.dataset.targetStage = tS;
      const tf = ['target.png','target1.png','target2.png','target3.png'];
      coin.src = tf[tS];
      break;
    }
    case "diamond_kspt":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "ksd1.png" : "ksd.png";
      break;
    case "precious_coin":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "codiam1.png" : "codiam.png";
      break;
    case "mops":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "mops1.png" : "mops.png";
      break;
    case "bulldog":
      coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
      coin.src = coin.dataset.toggle === "1" ? "bul1.png" : "bul.png";
      break;
    default:
      break;
  }
}

function updateSkinButtons() {
  const secretSkins = {
    "skinCardDoge": 'doge',
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
    "skinCardCryptoHeart": 'crypto_heart',
    "skinCardCorrupted": 'corrupted',
    "skinCardFailed": 'failed',
    "skinCardGoldenSafe": 'goldensafe',
    "skinCardBlackHole": 'bhole',
    "skinCardToilet": 'toilet',
    "skinCardCapsuleMeme": 'capsulememe',
    "skinCardUFO": 'ufo',
    "skinCardDragon": 'dragon',
    "skinCardEggi": 'eggi',
    "skinCardViking": 'viking',
    "skinCardTarget": 'target',
    "skinCardGreatJoost": 'greatjoost',
    "skinCardAngel": 'angel',
    "skinCardDiamondKspt": 'diamond_kspt',
    "skinCardPreciousCoin": 'precious_coin',
    "skinCardMops": 'mops',
    "skinCardBulldog": 'bulldog',
    "skinCardDemon": 'demon'
  };
  
  for (const [cardId, skinKey] of Object.entries(secretSkins)) {
    const card = document.getElementById(cardId);
    if (card) {
      const owned = (d.skins && d.skins[skinKey]) || (d.secretSkins && d.secretSkins[skinKey]);
      card.style.display = owned ? "block" : "none";
    }
  }
  
  const skins = ["default", "what", "burger", "joost", "dog", "diam", "tung", "priz", "euro", "space", "wheel", "kostia", "pixe", "onion", "cookie", "metka", "seri", "mystic", "capsule", "siulai", "artem", "ruka", "banditx", "dirty", "goldcoin", "gkspt", "cyber_android", "brb", "doge", "corrupted", "failed", "goldensafe", "bhole", "toilet", "capsulememe", "ufo", "dragon", "crypto_heart", "eggi", "viking", "target", "greatjoost", "angel", "diamond_kspt", "precious_coin", "mops", "bulldog", "demon"];
  
  skins.forEach(s => {
    const button = document.getElementById("skin-" + s);
    if (!button) return;

    // 1. Логика для скина Priz
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

    // 2. Общая логика для Активных и Купленных скинов
    if (d.skin === s) {
        if (s === "artem") {
            button.textContent = formatTemplate(t('active_var'), [d.artemVar + 1]);
        } else {
            button.textContent = t('active');
        }
        button.className = "active";
    } else if (s === "default" || d.skins[s]) {
        if (s === "artem") {
            button.textContent = formatTemplate(t('owned_var'), [d.artemVar + 1]);
        } else {
            button.textContent = t('select');
        }
        button.className = "";
        button.onclick = () => applySkin(s);
    } else {
        // 3. Логика для Заблокированных / Не купленных скинов
        const prices = {
            what: 1, burger: 10, joost: 30, dog: 80, diam: 100, tung: 240,
            euro: 780, space: 1210, wheel: 7470, kostia: 0, pixe: 3215, onion: 10110,
            cookie: 40780, metka: 0, seri: 0, mystic: 0, capsule: 0, artem: 0,
            ruka: 172080, banditx: 542123, goldcoin: 1120000, brb: 5000000,
            eggi: 0, viking: 0, target: 0
        };

        if (s === "mystic") {
            button.textContent = d.puzzleDone ? t('select') : t('locked_complete');
            button.className = d.puzzleDone ? "" : "owned";
            button.onclick = d.puzzleDone ? () => applySkin('mystic') : null;

        } else if (s === "crypto_heart") {
            // Исправленная логика для сердца (было дублирование)
            const isOwned = d.skins[s];
            button.textContent = isOwned ? t('select') : t('locked');
            button.className = isOwned ? "" : "owned";
            button.onclick = isOwned ? () => applySkin('crypto_heart') : null;

        } else if (s === "gkspt" || s === "cyber_android" || s === "dirty") {
            button.textContent = d.skins[s] ? t('select') : t('locked_find'); // Или locked если хочешь скрыть источник
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

        } else if (s === "eggi" || s === "viking" || s === "target") {
            const isOwned = (d.skins && d.skins[s]) || (d.secretSkins && d.secretSkins[s]);
            if (d.skin === s) {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin(s);
            }
            // если не получен — не трогаем (карточка hidden)

        } else if (s === "siulai") {
            button.textContent = d.skins[s] ? t('select') : t('locked');
            button.className = d.skins[s] ? "" : "owned";
            button.onclick = d.skins[s] ? () => applySkin('siulai') : null;

        } else if (s === "doge") {
            const isOwned = d.skins && d.skins['doge'];
            if (d.skin === 'doge') {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin('doge');
            } else {
                button.textContent = '🎡 Fortune Wheel';
                button.className = "owned";
                button.onclick = null;
            }

        } else if (s === "corrupted" || s === "failed") {
            const isOwned = d.skins[s] || (d.secretSkins && d.secretSkins[s]);
            if (d.skin === s) {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin(s);
            } else {
                button.textContent = t('locked_glitch');
                button.className = "owned";
                button.onclick = null;
            }
        // =============================================

        } else if (s === "goldensafe") {
            const isOwned = d.secretSkins && d.secretSkins['goldensafe'];
            if (d.skin === 'goldensafe') {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin('goldensafe');
            }
        } else if (s === "bhole") {
            const isOwned = d.puzzle3Done;
            if (d.skin === 'bhole') {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin('bhole');
            }
        } else if (s === "toilet" || s === "capsulememe") {
            const isOwned = d.secretSkins && d.secretSkins[s];
            if (d.skin === s) {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin(s);
            }
            // если не получен — кнопку вообще не трогаем (карточка hidden)

        } else if (s === "greatjoost" || s === "angel" || s === "demon") {
            const isOwned = d.secretSkins && d.secretSkins[s];
            if (d.skin === s) {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin(s);
            }

        } else if (s === "crypto_heart") {
            const isOwned = d.skins['crypto_heart'] || (d.secretSkins && d.secretSkins['crypto_heart']);
            if (d.skin === 'crypto_heart') {
                button.textContent = t('active');
                button.className = "active";
            } else if (isOwned) {
                button.textContent = t('select');
                button.className = "";
                button.onclick = () => applySkin('crypto_heart');
            }
            // если не получен — не трогаем (карточка hidden)

        } else if (prices[s] > 0) {
            // Обычная покупка за цену
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
            // Остальные (если цена 0 и не попали в условия выше)
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
    'goldensafe': 'sgold.png',
    'bhole': 'bhole.png',
    'toilet': 'toilet.png',
    'capsulememe': 'capsule.png',              
    'cyber_android': 'robotic.png',
    'dirty': 'dirty.png',
    'siulai': 'siulai.png',
    'crypto_heart': 'heart.png',
    'tetris': 'tetrisik.png',
    'joystick': 'dzoi.png',
    'snake': 'zmej.png',
    'skin_8bit_coin': 'bit.png',
    'skin_zombie_train': 'zomb.png',
    'brb': 'knopka.png',
    'corrupted': 'corr.png',
    'failed': 'fail.png',
    'wheel': 'wheel.png',
    'target': 'target.png',
    'eggi': 'eggi.png',
    'viking': 'vikikng.png',
    'bird': 'bird.png',
    'greatjoost': 'just.png',
    'angel': 'angel.png',
    'diamond_kspt': 'ksd.png',
    'precious_coin': 'codiam.png',
    'mops': 'mops.png',
    'bulldog': 'bul.png',
    'demon': 'demon.png'
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
        isOwned = d.skins && d.skins['siulai'] || d.puzzle2Done;
      } else if (skin === 'goldensafe' || skin === 'corrupted' || skin === 'failed') {
        isOwned = (d.skins && d.skins[skin]) || (d.secretSkins && d.secretSkins[skin]);
      } else if (skin === 'eggi' || skin === 'viking' || skin === 'target') {
        isOwned = (d.skins && d.skins[skin]) || (d.secretSkins && d.secretSkins[skin]);
      } else if (skin === 'greatjoost' || skin === 'angel' || skin === 'demon') {
        isOwned = (d.secretSkins && d.secretSkins[skin]);
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
  if (window._adminEventBgForced) return; // event bg locked by admin
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
      if (!userHasOwnBg && hasEkshopBgSelected) {
        if (ekshopSelected.bg === 'bg_club') {
          body.style.backgroundImage = "url('cosmops.png')";
          body.style.backgroundColor = "transparent";
          return;
        } else if (ekshopSelected.bg === 'bg_pixel_games') {
          body.style.backgroundImage = "url('mine.png')";
          body.style.backgroundColor = "transparent";
          return;
        }
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
      case "code":
        body.style.backgroundImage = "url('code.png')";
        body.style.backgroundColor = "#000000";
        break;
      case "waterbomb":
        body.style.backgroundImage = "url('waterbomb.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "dirt":
        body.style.backgroundImage = "url('dirt.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "bank":
        body.style.backgroundImage = "url('bank.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "elit":
        body.style.backgroundImage = "url('elit.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "bunny":
        body.style.backgroundImage = "url('bunn.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "zoo":
        body.style.backgroundImage = "url('zoo.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "diamond":
        body.style.backgroundImage = "url('diamf.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "beach":
        body.style.backgroundImage = "url('beach.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "kebab":
        body.style.backgroundImage = "url('kebab.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "bg_pixel_games":
        body.style.backgroundImage = "url('mine.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "alone":
        body.style.backgroundImage = "url('one.png')";
        body.style.backgroundColor = "transparent";
        break;
      case "scary":
        body.style.backgroundImage = "url('knife.png')";
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

        <div class="card-item" id="sport6_container">
          <img src="box.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="boxing">Boxing</div>
          <div class="card-lvl" id="s6_lvl">Locked</div>
          <div class="card-sub" id="s6_income">+25 KSPT/h</div>
          <button id="btn_s6" onclick="buySportCard(6)" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="sport7_container">
          <img src="golf.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="golf">Golf</div>
          <div class="card-lvl" id="s7_lvl">Locked</div>
          <div class="card-sub" id="s7_income">+100 KSPT/h</div>
          <button id="btn_s7" onclick="buySportCard(7)" class="card-item-button">Locked</button>
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

        <div class="card-item" id="game4_container">
          <img src="checkers.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="checkers">Checkers</div>
          <div class="card-lvl" id="g4_lvl">Locked</div>
          <div class="card-sub" id="g4_income">+4 KSPT/h</div>
          <button id="btn_g4" onclick="buyGameCard(4)" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="game5_container">
          <img src="jenga.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="jenga">Jenga</div>
          <div class="card-lvl" id="g5_lvl">Not Owned</div>
          <div class="card-sub" id="g5_income">+14 KSPT/h</div>
          <button id="btn_g5" onclick="buyGameCard(5)" class="card-item-button">Buy 5480 KSPT</button>
        </div>

        <div class="card-item" id="game6_container">
          <img src="mcards.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="card_games">Card Games</div>
          <div class="card-lvl" id="g6_lvl">Locked</div>
          <div class="card-sub" id="g6_income">+70 KSPT/h</div>
          <button id="btn_g6" onclick="buyGameCard(6)" class="card-item-button">Locked</button>
        </div>

        <div class="card-item" id="game7_container">
          <img src="domino.png" class="card-item-image" onerror="this.src='dontwhat.png'">
          <div class="card-item-title" data-lang-key="domino">Domino</div>
          <div class="card-lvl" id="g7_lvl">Locked</div>
          <div class="card-sub" id="g7_income">+10 KSPT/h</div>
          <button id="btn_g7" onclick="buyGameCard(7)" class="card-item-button">Locked</button>
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
        <div class="card-sub">${l.journey.level < 0 ? 'Not Owned' : `Level ${journeyLevel + 1}/5`}</div>
        <div class="card-sub">+${journeyData[journeyLevel].income} KSPT/h</div>
        ${journeyAvailable ? 
          `<button class="card-item-button" onclick="buyJourneyLevel(${l.journey.level})">${l.journey.level < 0 ? 'Buy' : 'Upgrade'} ${journeyData[l.journey.level < 0 ? 0 : journeyLevel].price} KSPT</button>` :
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
  
  const price = journeyData[currentLevel >= 0 ? currentLevel : 0].price;
  
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
  window.updateCardUI();
}

window.updateCardUI = function updateCardUI() {
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
  for (let i = 1; i <= 7; i++) {
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
  for (let i = 1; i <= 7; i++) {
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
  
  // Sport unlock conditions (новые)
  const s6Div = document.getElementById("sport6_container");
  if (s6Div) {
    if (d.cards.s1 >= 5) {
      s6Div.style.filter = "none";
      const btn = document.getElementById("btn_s6");
      if (btn) btn.disabled = false;
    } else {
      s6Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_s6");
      if (btn) { btn.textContent = formatTemplate(t('unlock_condition'), ['Football Level 5']); btn.disabled = true; }
    }
  }

  const s7Div = document.getElementById("sport7_container");
  if (s7Div) {
    if (d.cards.s6 >= 3) {
      s7Div.style.filter = "none";
      const btn = document.getElementById("btn_s7");
      if (btn) btn.disabled = false;
    } else {
      s7Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_s7");
      if (btn) { btn.textContent = formatTemplate(t('unlock_condition'), ['Boxing Level 3']); btn.disabled = true; }
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

  const g4Div = document.getElementById("game4_container");
  if (g4Div) {
    if (d.cards.g1 >= 5) {
      g4Div.style.filter = "none";
      const btn = document.getElementById("btn_g4");
      if (btn) btn.disabled = false;
    } else {
      g4Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_g4");
      if (btn) { btn.textContent = formatTemplate(t('unlock_condition'), ['Chess Level 5']); btn.disabled = true; }
    }
  }

  const g6Div = document.getElementById("game6_container");
  if (g6Div) {
    if (d.limitedCards && d.limitedCards.journey.level >= 5) {
      g6Div.style.filter = "none";
      const btn = document.getElementById("btn_g6");
      if (btn) btn.disabled = false;
    } else {
      g6Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_g6");
      if (btn) { btn.textContent = formatTemplate(t('unlock_condition'), ['Journey Max Level']); btn.disabled = true; }
    }
  }

  const g7Div = document.getElementById("game7_container");
  if (g7Div) {
    if (d.cards.g4 >= 3) {
      g7Div.style.filter = "none";
      const btn = document.getElementById("btn_g7");
      if (btn) btn.disabled = false;
    } else {
      g7Div.style.filter = "grayscale(1) opacity(0.5)";
      const btn = document.getElementById("btn_g7");
      if (btn) { btn.textContent = formatTemplate(t('unlock_condition'), ['Checkers Level 3']); btn.disabled = true; }
    }
  }
};

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
    updateThirdPuzzleUI();
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

  // Второй пазл появляется сразу после первого

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

function checkThirdPuzzleCompletion() {
  if (d.puzzle3Done) return;
  let all = true;
  for (let i = 0; i < 9; i++) { if (d.puzzles3[i] !== 1) { all = false; break; } }
  if (!all) return;

  d.puzzle3Done = true;
  if (!d.skins) d.skins = {};
  d.skins['bhole'] = 1;
  showToast('🕳️ Black Hole skin unlocked!');
  save();
  updateSkinButtons();
  updateSkinPreviews();
  updateThirdPuzzleUI();
}

function checkFourthPuzzleCompletion() {
  if (d.puzzle4Done) return;
  let all = true;
  for (let i = 0; i < 9; i++) { if (d.puzzles4[i] !== 1) { all = false; break; } }
  if (!all) return;
  d.puzzle4Done = true;
  if (!d.skins) d.skins = {};
  d.skins['ufo'] = 1;
  showToast('🛸 UFO Wood skin unlocked!');
  save();
  updateSkinButtons();
  updateSkinPreviews();
  updateFourthPuzzleUI();
}

function updateFourthPuzzleUI() {
  const card = document.getElementById('fourthPuzzleCard');
  if (!card) return;
  if (!d.puzzle3Done) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  let owned = 0;
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById('pz4_' + (i + 1));
    if (cell) {
      if (d.puzzles4[i] === 1) { cell.classList.add('filled'); owned++; }
      else cell.classList.remove('filled');
    }
  }
  const statusEl = document.getElementById('puzzleStatus4');
  if (statusEl) statusEl.textContent = d.puzzle4Done ? 'Complete!' : `Owned: ${owned}/9`;
  const fullImg = document.getElementById('puzzleFull4');
  const doneText = document.getElementById('puzzleCompletedText4');
  const placeBtn = document.getElementById('btnPlacePiece4');
  if (d.puzzle4Done) {
    if (fullImg) fullImg.style.display = 'block';
    if (doneText) doneText.style.display = 'block';
    if (placeBtn) placeBtn.style.display = 'none';
  } else {
    if (fullImg) fullImg.style.display = 'none';
    if (doneText) doneText.style.display = 'none';
    if (placeBtn) placeBtn.style.display = owned > 0 ? 'inline-block' : 'none';
  }
}

function placePuzzlePieces4() {
  let placed = false;
  for (let i = 0; i < 9; i++) {
    if (d.puzzles4[i] === 1) {
      const cell = document.getElementById('pz4_' + (i + 1));
      if (cell) cell.classList.add('filled');
      placed = true;
    }
  }
  if (placed) { showToast('Puzzle pieces placed!'); save(); checkFourthPuzzleCompletion(); updateFourthPuzzleUI(); ui(); }
}

function checkFifthPuzzleCompletion() {
  if (d.puzzle5Done) return;
  let all = true;
  for (let i = 0; i < 25; i++) { if (d.puzzles5[i] !== 1) { all = false; break; } }
  if (!all) return;
  d.puzzle5Done = true;
  if (!d.skins) d.skins = {};
  d.skins['dragon'] = 1;
  showToast('🐉 KSPT Dragon skin unlocked!');
  save();
  updateSkinButtons();
  updateSkinPreviews();
  updateFifthPuzzleUI();
}

function updateFifthPuzzleUI() {
  const card = document.getElementById('fifthPuzzleCard');
  if (!card) return;
  if (!d.puzzle4Done) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  let owned = 0;
  for (let i = 0; i < 25; i++) {
    const cell = document.getElementById('pz5_' + (i + 1));
    if (cell) {
      if (d.puzzles5[i] === 1) { cell.classList.add('filled'); owned++; }
      else cell.classList.remove('filled');
    }
  }
  const statusEl = document.getElementById('puzzleStatus5');
  if (statusEl) statusEl.textContent = d.puzzle5Done ? 'Complete!' : `Owned: ${owned}/25`;
  const fullImg = document.getElementById('puzzleFull5');
  const doneText = document.getElementById('puzzleCompletedText5');
  const placeBtn = document.getElementById('btnPlacePiece5');
  if (d.puzzle5Done) {
    if (fullImg) fullImg.style.display = 'block';
    if (doneText) doneText.style.display = 'block';
    if (placeBtn) placeBtn.style.display = 'none';
  } else {
    if (fullImg) fullImg.style.display = 'none';
    if (doneText) doneText.style.display = 'none';
    if (placeBtn) placeBtn.style.display = owned > 0 ? 'inline-block' : 'none';
  }
}

function placePuzzlePieces5() {
  let placed = false;
  for (let i = 0; i < 25; i++) {
    if (d.puzzles5[i] === 1) {
      const cell = document.getElementById('pz5_' + (i + 1));
      if (cell) cell.classList.add('filled');
      placed = true;
    }
  }
  if (placed) { showToast('Puzzle pieces placed!'); save(); checkFifthPuzzleCompletion(); updateFifthPuzzleUI(); ui(); }
}

function updateThirdPuzzleUI() {
  const card = document.getElementById('thirdPuzzleCard');
  if (!card) return;

  // Показываем только после завершения второго пазла
  if (!d.puzzle2Done) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  let owned = 0;
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById('pz3_' + (i + 1));
    if (cell) {
      if (d.puzzles3[i] === 1) { cell.classList.add('filled'); owned++; }
      else cell.classList.remove('filled');
    }
  }

  const statusEl = document.getElementById('puzzleStatus3');
  if (statusEl) statusEl.textContent = d.puzzle3Done ? 'Complete!' : `Owned: ${owned}/9`;

  const fullImg = document.getElementById('puzzleFull3');
  const doneText = document.getElementById('puzzleCompletedText3');
  const placeBtn = document.getElementById('btnPlacePiece3');

  if (d.puzzle3Done) {
    if (fullImg) fullImg.style.display = 'block';
    if (doneText) doneText.style.display = 'block';
    if (placeBtn) placeBtn.style.display = 'none';
  } else {
    if (fullImg) fullImg.style.display = 'none';
    if (doneText) doneText.style.display = 'none';
    if (placeBtn) placeBtn.style.display = owned > 0 ? 'inline-block' : 'none';
  }
}

function placePuzzlePieces3() {
  let placed = false;
  for (let i = 0; i < 9; i++) {
    if (d.puzzles3[i] === 1) {
      const cell = document.getElementById('pz3_' + (i + 1));
      if (cell) cell.classList.add('filled');
      placed = true;
    }
  }
  if (placed) { showToast('Puzzle pieces placed!'); save(); checkThirdPuzzleCompletion(); updateThirdPuzzleUI(); ui(); }
}

// Dragon fire particles system
(function() {
  let _dragonCanvas = null;
  let _dragonCtx = null;
  let _dragonParticles = [];
  let _dragonRaf = null;
  let _dragonActive = false;
  let _dragonHighIntensity = false;
  let _dragonHeld = false;

  function _dragonCreateParticle(intense) {
    const container = document.getElementById('coin3dContainer');
    if (!container) return null;
    const w = container.offsetWidth || 220;
    const h = container.offsetHeight || 220;
    const cx = w / 2;
    const cy = h / 2;
    const angle = Math.random() * Math.PI * 2;
    const radius = 30 + Math.random() * 50;
    return {
      x: cx + Math.cos(angle) * radius * (0.6 + Math.random() * 0.4),
      y: cy + Math.sin(angle) * radius * (0.6 + Math.random() * 0.4),
      vx: (Math.random() - 0.5) * (intense ? 3 : 1.5),
      vy: -(1.5 + Math.random() * (intense ? 4 : 2.5)),
      life: 1,
      decay: 0.018 + Math.random() * 0.02,
      size: (intense ? 8 : 5) + Math.random() * (intense ? 8 : 5),
      hue: 10 + Math.random() * 40
    };
  }

  function _dragonLoop() {
    if (!_dragonActive || !_dragonCanvas || !_dragonCtx) return;
    const coin = document.getElementById('coin');
    if (!coin || coin.dataset.currentSkin !== 'dragon') { _dragonStop(); return; }

    const intense = _dragonHighIntensity || _dragonHeld;
    const spawnCount = intense ? 6 : 3;
    for (let i = 0; i < spawnCount; i++) {
      const p = _dragonCreateParticle(intense);
      if (p) _dragonParticles.push(p);
    }

    _dragonCtx.clearRect(0, 0, _dragonCanvas.width, _dragonCanvas.height);
    _dragonParticles = _dragonParticles.filter(p => p.life > 0);
    for (const p of _dragonParticles) {
      p.x += p.vx * (intense ? 1.4 : 1);
      p.y += p.vy * (intense ? 1.4 : 1);
      p.life -= p.decay;
      p.size *= 0.97;
      const alpha = Math.max(0, p.life);
      const grad = _dragonCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      grad.addColorStop(0, `hsla(${p.hue}, 100%, 80%, ${alpha})`);
      grad.addColorStop(0.5, `hsla(${p.hue + 20}, 100%, 50%, ${alpha * 0.7})`);
      grad.addColorStop(1, `hsla(${p.hue + 40}, 100%, 30%, 0)`);
      _dragonCtx.fillStyle = grad;
      _dragonCtx.beginPath();
      _dragonCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      _dragonCtx.fill();
    }
    _dragonRaf = requestAnimationFrame(_dragonLoop);
  }

  function _dragonStart() {
    const container = document.getElementById('coin3dContainer');
    const coin = document.getElementById('coin');
    if (!container || !coin) return;
    _dragonStop();
    _dragonCanvas = document.createElement('canvas');
    _dragonCanvas.id = 'dragonFireCanvas';
    _dragonCanvas.width = container.offsetWidth || 220;
    _dragonCanvas.height = container.offsetHeight || 220;
    _dragonCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    // Вставляем ПОСЛЕ coin-3d чтобы быть поверх 3D stacking context
    const coin3d = document.getElementById('coin3d');
    if (coin3d && coin3d.nextSibling) {
      container.insertBefore(_dragonCanvas, coin3d.nextSibling);
    } else {
      container.appendChild(_dragonCanvas);
    }
    _dragonCtx = _dragonCanvas.getContext('2d');
    _dragonActive = true;
    _dragonRaf = requestAnimationFrame(_dragonLoop);

    // Hold detection
    coin.addEventListener('mousedown', _dragonHoldStart);
    coin.addEventListener('touchstart', _dragonHoldStart, {passive:true});
    coin.addEventListener('mouseup', _dragonHoldEnd);
    coin.addEventListener('touchend', _dragonHoldEnd);
  }

  function _dragonStop() {
    _dragonActive = false;
    if (_dragonRaf) { cancelAnimationFrame(_dragonRaf); _dragonRaf = null; }
    const old = document.getElementById('dragonFireCanvas');
    if (old) old.remove();
    _dragonCanvas = null; _dragonCtx = null; _dragonParticles = [];
  }

  function _dragonHoldStart() { _dragonHeld = true; }
  function _dragonHoldEnd() { _dragonHeld = false; }

  window._dragonStart = _dragonStart;
  window._dragonStop = _dragonStop;
  window._dragonUpdateParticles = function(highIntensity) {
    _dragonHighIntensity = !!highIntensity;
  };
})();

function updateCapsuleUI() {
  const btn = document.getElementById("btnOpenCapsule");
  const txt = document.getElementById("capsuleTimer");
  const capsuleImg = document.querySelector('.card.capsule-info img.capsule-img-small');
  if (!btn || !txt) return;

  const now = Date.now();
  const cooldownTime = 23 * 60 * 60 * 1000;

  // Если алмазная капсула ждёт открытия
  if (d.diamondCapsule?.obtained) {
    if (capsuleImg) capsuleImg.src = 'cd.png';
    const hint2 = document.getElementById('diamondCapsuleHint2');
    if (hint2) hint2.textContent = '';
    // Обычный кулдаун применяется тоже
    if (d.capsule.firstOpen || (now - (d.capsule.lastOpen||0)) >= cooldownTime) {
      txt.innerHTML = '💎 It\'s the Diamond Capsule!';
      txt.style.color = '#00bfff';
      btn.style.background = 'linear-gradient(135deg,#0077aa,#00bfff)';
      btn.textContent = '💎 OPEN!';
      btn.onclick = () => { startDiamondCapsuleSequence(); };
    } else {
      const wait = cooldownTime - (now - (d.capsule.lastOpen||0));
      const h = Math.floor(wait/3600000), m = Math.floor((wait%3600000)/60000);
      txt.innerHTML = `💎 Diamond ready in ${h}h ${m}m`;
      txt.style.color = '#00bfff';
      btn.style.background = '#333';
      btn.textContent = t('wait');
      btn.onclick = null;
    }
    return;
  }

  // Обычный режим — восстановить спрайт
  if (capsuleImg) capsuleImg.src = 'capsule.png';
  txt.style.color = '';

  // Diamond capsule hint
  const hint2 = document.getElementById('diamondCapsuleHint2');
  if (hint2) {
    const cnt = d.capsuleOpenCount || 0;
    const till = cnt % 7 === 0 && cnt > 0 ? 7 : 7 - (cnt % 7);
    hint2.textContent = till === 1
      ? '💎 Next capsule is Diamond!'
      : `💎 Diamond in ${till} capsules`;
    hint2.style.color = '#00bfff';
  }

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
    {id: 'bg-btn-math', key: 'math', price: 0},
    {id: 'bg-btn-code', key: 'code', price: 0},
    {id: 'bg-btn-waterbomb', key: 'waterbomb', price: 0},
    {id: 'bg-btn-dirt',      key: 'dirt',      price: 0},
    {id: 'bg-btn-bank',      key: 'bank',      price: 0},
    {id: 'bg-btn-elit',      key: 'elit',      price: 0},
    {id: 'bg-btn-bunny',     key: 'bunny',     price: 0},
    {id: 'bg-btn-zoo',       key: 'zoo',        price: 0},
    {id: 'bg-btn-diamond',   key: 'diamond',    price: 0},
    {id: 'bg-btn-lab',       key: 'lab',        price: 0},
    {id: 'bg-btn-beach',     key: 'beach',      price: 174000},
    {id: 'bg-btn-kebab',     key: 'kebab',      price: 568000},
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
      // Логика блокировок
      if (bg.key === 'space' || bg.key === 'heaven' || bg.key === 'bug') {
        btn.textContent = t('locked');
        btn.className = "owned";
        btn.onclick = null;
      } else if (bg.key === 'chrisp') {
        if (d.skins && d.skins['cookie']) {
            btn.textContent = t('select');
            btn.className = "";
            btn.onclick = () => equipBackground('chrisp');
        } else {
          btn.textContent = t('locked_buy_cookie');
          btn.className = "owned";
          btn.onclick = null;
        }
      } else if (bg.key === 'xfone') {
         if (d.skins && d.skins['banditx']) {
            btn.textContent = t('select');
            btn.className = "";
            btn.onclick = () => equipBackground('xfone');
         } else {
            btn.textContent = 'Locked (Buy Bandit X Skin)';
            btn.className = "owned";
            btn.onclick = null;
         }
      } else if (bg.key === 'code') {
         if (d.ownedBgs.includes('code')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('code');
         } else {
             btn.textContent = t('locked_glitch'); 
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'waterbomb') {
         if (d.ownedBgs.includes('waterbomb')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('waterbomb');
         } else {
             btn.textContent = '🔒 Bomb Box Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'dirt') {
         if (d.ownedBgs.includes('dirt')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('dirt');
         } else {
             btn.textContent = '🔒 Noob Safe Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'bank') {
         if (d.ownedBgs.includes('bank')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('bank');
         } else {
             btn.textContent = '🔒 Iron Safe Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'elit') {
         if (d.ownedBgs.includes('elit')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('elit');
         } else {
             btn.textContent = '🔒 Elite Safe Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'bunny') {
         if (d.ownedBgs.includes('bunny')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('bunny');
         } else {
             btn.textContent = '🔒 Easter Egg Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'zoo') {
         if (d.ownedBgs.includes('zoo')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('zoo');
         } else {
             btn.textContent = '🔒 Cuteness Box Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.key === 'diamond') {
         if (d.ownedBgs.includes('diamond')) {
             btn.textContent = t('select');
             btn.className = "";
             btn.onclick = () => equipBackground('diamond');
         } else {
             btn.textContent = '🔒 Diamond Capsule Only';
             btn.className = "owned";
             btn.onclick = null;
         }
      } else if (bg.price === 0 && bg.key !== 'default') {
         btn.textContent = t('locked');
         btn.className = "owned";
         btn.onclick = null;
      } else {
         btn.textContent = t('buy') + ` ${bg.price} KSPT`;
         btn.className = "";
         btn.onclick = () => buyBackground(bg.key, bg.price);
      }
    }
  });

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
    if (d.skins && d.skins['siulai']) {
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

  const codeMusicBtn = document.getElementById('btn-music-code');
  if (codeMusicBtn) {
    if (d.ownedMusic && d.ownedMusic.includes('code')) {
      if (d.music === 'code' && !d.musicMuted) {
        codeMusicBtn.textContent = t('active');
        codeMusicBtn.className = "active";
        codeMusicBtn.onclick = null;
      } else {
        codeMusicBtn.textContent = t('select');
        codeMusicBtn.className = "";
        codeMusicBtn.onclick = () => setMusic('code');
      }
    } else {
      codeMusicBtn.textContent = t('locked_glitch');
      codeMusicBtn.className = "owned";
      codeMusicBtn.onclick = null;
    }
  }

  const diamondMusicBtn = document.getElementById('btn-music-diamond');
  if (diamondMusicBtn) {
    if (d.ownedMusic && d.ownedMusic.includes('diamond')) {
      if (d.music === 'diamond' && !d.musicMuted) {
        diamondMusicBtn.textContent = t('active');
        diamondMusicBtn.className = "active";
        diamondMusicBtn.onclick = null;
      } else {
        diamondMusicBtn.textContent = t('select');
        diamondMusicBtn.className = "";
        diamondMusicBtn.onclick = () => setMusic('diamond');
      }
    } else {
      diamondMusicBtn.textContent = t('locked');
      diamondMusicBtn.className = "owned";
      diamondMusicBtn.onclick = null;
    }
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

function updatePriceCountdown() {
  const el = document.getElementById('priceCountdown');
  if (!el) return;
  const now = Date.now();
  const lastSync = d.market._lastPriceSync || now;
  const interval = 28000;
  const next = lastSync + interval;
  const diff = Math.max(0, Math.ceil((next - now) / 1000));
  el.textContent = diff > 0 ? diff + 's' : 'updating...';
}

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
// УДАЛЕНО - дубликат функции, основная функция initGame находится ниже в коде (строка ~7201)

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
      cropData.x = 0;
      cropData.y = 0;
      cropData.scale = 100;
      cropData.image = img; // ← сохраняем объект Image для applyCrop
      
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
  // -50% -50% центрирует изображение, затем применяем пользовательский сдвиг
  cropImage.style.transform = `translate(calc(-50% + ${cropData.x}px), calc(-50% + ${cropData.y}px)) scale(${scale})`;
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
  if (!img || !img.naturalWidth) {
    showToast(t('invalid_image'));
    return;
  }
  const scale = cropData.scale / 100;
  const containerSize = 300;

  // Белый фон — PNG с прозрачностью не даёт чёрный в JPEG
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 200, 200);

  // Изображение в CSS: top:50% left:50%, transform: translate(calc(-50%+x), calc(-50%+y)) scale(s)
  // Значит реальный left угол изображения = containerSize/2 - naturalWidth/2*scale + cropData.x ... нет,
  // transform применяется к rendered размеру. Rendered размер = naturalWidth * scale (max-width:none)
  const dispW = img.naturalWidth * scale;
  const dispH = img.naturalHeight * scale;

  // Левый верхний угол изображения в CSS-координатах контейнера:
  const imgLeft = containerSize / 2 - dispW / 2 + cropData.x;
  const imgTop  = containerSize / 2 - dispH / 2 + cropData.y;

  // Переводим в пиксели исходного изображения
  const srcX = Math.round(-imgLeft * (img.naturalWidth  / dispW));
  const srcY = Math.round(-imgTop  * (img.naturalHeight / dispH));
  const srcW = Math.round(containerSize * (img.naturalWidth  / dispW));
  const srcH = Math.round(containerSize * (img.naturalHeight / dispH));

  const cX = Math.max(0, srcX);
  const cY = Math.max(0, srcY);
  const cW = Math.min(srcW, img.naturalWidth  - cX);
  const cH = Math.min(srcH, img.naturalHeight - cY);

  const dstX = cX > srcX ? Math.round((cX - srcX) * (200 / srcW)) : 0;
  const dstY = cY > srcY ? Math.round((cY - srcY) * (200 / srcH)) : 0;
  const dstW = Math.round(cW * (200 / srcW));
  const dstH = Math.round(cH * (200 / srcH));

  ctx.drawImage(img, cX, cY, cW, cH, dstX, dstY, dstW, dstH);

  ctx.restore();

  const dataURL = canvas.toDataURL('image/jpeg', 0.7);
  
  tokenImageCache = dataURL;
  localStorage.setItem('kspt_token_image_cache', dataURL);
  
  const preview = document.getElementById('tokenImagePreview');
  if (preview) {
    preview.style.backgroundImage = `url('${dataURL}')`;
    preview.dataset.imageData = dataURL;
  }
  
  // Смена иконки у существующего токена
  if (window._changeIconTargetId) {
    const fid = window._changeIconTargetId;
    window._changeIconTargetId = null;
    const tok = (d.market.myTokens || []).find(t => t.firebaseId === fid);
    if (tok) {
      tok.icon = dataURL;
      if (d.market.personalToken && d.market.personalToken.firebaseId === fid) d.market.personalToken.icon = dataURL;
      publishTokenToFirebase(tok);
      localStorage.setItem('kspt_user_tokens', JSON.stringify(d.market.myTokens));
      save();
      marketInitialized = false;
      updateMarketUI();
    }
  }

  cancelCrop();
  showToast(t('image_cropped'));
}

function selectDefaultTokenIcon(iconPath, el) {
  // Снять выделение со всех
  el.closest('div').querySelectorAll('img').forEach(i => i.style.border = '2px solid transparent');
  el.style.border = '2px solid #ff9800';

  const preview = document.getElementById('tokenImagePreview');
  if (preview) {
    preview.style.backgroundImage = `url('${iconPath}')`;
    preview.dataset.imageData = iconPath;
  }
  tokenImageCache = iconPath;
}

function changeTokenIcon(firebaseId) {
  let fileInput = document.getElementById('_changeIconInput');
  if (!fileInput) {
    fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.id = '_changeIconInput';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
  }
  fileInput.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    window._changeIconTargetId = firebaseId;
    handleTokenImageSelection(file);
    fileInput.value = '';
  };
  fileInput.click();
}

function renderTradeView() {
  const container = document.getElementById("marketContainer");
  if (!container) return;
  // Сохраняем введённое значение перед перерисовкой
  const _savedTradeAmount = document.getElementById('tradeAmount')?.value || tradeInputValue || '';
  
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
    sellButtonText = formatTemplate(t('sell_token'), ['BANX']);
    priceFormat = 5;
  } else if (selectedToken === 'jvmToken') {
    tokenData = d.market.jvmToken;
    tokenName = "JVM";
    tokenIcon = "jvm.png";
    sellButtonText = formatTemplate(t('sell_token'), ['JVM']);
    priceFormat = 2;
  } else if (selectedToken === 'personalToken' || selectedToken.startsWith('userToken_')) {
    tokenData = getTokenData();
    if (!tokenData) return;
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
      ${(selectedToken === 'personalToken' || selectedToken.startsWith('userToken_')) && tokenData?.firebaseId ? `
        <div style="display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="showTokenDetail('${tokenData.firebaseId}')">
          ${tokenIcon.startsWith('data:') ?
            `<img src="${tokenIcon}" style="width:32px;height:32px;border-radius:50%;" onerror="this.src='kspt.png'">` :
            `<img src="${tokenIcon}" onerror="this.src='kspt.png'">`
          }
          <span style="font-weight:bold;">${tokenName}</span>
        </div>
      ` : `
        ${tokenIcon.startsWith('data:') ?
          `<img src="${tokenIcon}" style="width:32px;height:32px;border-radius:50%;" onerror="this.src='kspt.png'">` :
          `<img src="${tokenIcon}" onerror="this.src='kspt.png'">`
        }
        <span style="font-weight:bold">${tokenName}</span>
      `}
      <img src="iks.png" class="close-x" onclick="closeTrade()">
    </div>
    
    <div class="card">
      <div id="trade-price-container" style="font-size: 32px; font-weight:bold; text-align:center; margin-bottom:5px;" class="${colorClass}">
        <span id="trade-price-value">${priceFormat === 2 ? formatNumber(tokenData.price, 2) : priceFormat === 5 ? formatNumber(tokenData.price, 5) : formatNumber(tokenData.price, 4)}</span> KSPT 
        <span id="trade-price-arrow" style="font-size:16px">${arrow}</span>
      </div>
      <div style="text-align:center; color:#666; font-size:12px; margin-bottom:5px;">${t('live_price')}</div>
      <div style="text-align:center; font-size:11px; color:#555; margin-bottom:15px;">Next update: <span id="priceCountdown">—</span></div>
      
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
    const _tradeInput = document.getElementById('tradeAmount');
    if (_tradeInput && _savedTradeAmount) { _tradeInput.value = _savedTradeAmount; tradeInputValue = _savedTradeAmount; }
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
  else if (selectedToken === 'personalToken') return d.market.myTokens?.[0] || d.market.personalToken;
  else if (selectedToken.startsWith('userToken_')) {
    const idx = parseInt(selectedToken.split('_')[1]);
    return d.market.myTokens?.[idx] || null;
  }
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
      
      ${(d.market.myTokens && d.market.myTokens.length > 0) ? d.market.myTokens.map((tok, idx) => `
        <div class="market-list-item" onclick="openTrade('userToken_${idx}')">
          <img src="${tok.icon}" class="token-icon" style="object-fit:cover;" onerror="this.src='kspt.png'">
          <div class="token-info">
            <div class="token-name">${tok.ticker}</div>
            <div class="token-price">${t('price')}: <span id="price-userToken-${idx}-value">${formatNumber(tok.price, 4)}</span> KSPT</div>
          </div>
        </div>
      `).join('') : ''}
    </div>
    
    <div class="card">
      <div class="card-title">${t('personal_token')}</div>
      <div class="card-sub">${t('create_token_desc')}</div>
      ${(function(){ const mine = (d.market.myTokens||[]).filter(t=>String(t.creatorId)===_getMyId()); return mine.length < 3; })() ? `
        <button onclick="createPersonalToken()" style="background:#ff9800; color:#000; margin-bottom:10px;">${t('create_token')} (899 KSPT)</button>
      ` : `<div style="font-size:12px;color:#ff9800;margin-bottom:8px;">Max 3 tokens per user</div>`}
      ${(d.market.myTokens && d.market.myTokens.length > 0) ? d.market.myTokens.map(tok => `
        <div style="border:1px solid ${String(tok.creatorId) === _getMyId() ? '#ff9800' : '#333'};border-radius:10px;padding:8px;margin-top:8px;display:flex;flex-direction:column;gap:6px;cursor:pointer;"
             onclick="showTokenDetail('${tok.firebaseId}')">
          <div style="display:flex;align-items:center;gap:8px;">
            <img src="${tok.icon}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;" onerror="this.src='kspt.png'">
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                <b>${tok.ticker}</b> — ${tok.name}
                ${String(tok.creatorId) === _getMyId() ? '<span style="font-size:10px;background:#ff9800;color:#000;padding:1px 6px;border-radius:8px;font-weight:bold;">MY TOKEN</span>' : ''}
              </div>
              <div style="font-size:11px;color:#aaa;">by ${tok.creatorName || tok.creatorId}</div>
            </div>
            <div style="font-size:12px;color:#ff9800;font-weight:bold;">${formatNumber(tok.price,4)}</div>
          </div>
          ${String(tok.creatorId) === _getMyId() ? `
          <div style="display:flex;gap:6px;" onclick="event.stopPropagation()">
            <button onclick="changeTokenIcon('${tok.firebaseId}')" style="background:#1565c0;font-size:12px;flex:1;">Change Icon</button>
            <button onclick="deletePersonalToken('${tok.firebaseId}')" style="background:#d32f2f;font-size:12px;flex:1;">${t('delete_token')}</button>
          </div>
          ` : ''}
        </div>
      `).join('') : ''}
      <div style="font-size:11px;color:#555;margin-top:6px;">${t('delete_warning')} · Max 3 tokens</div>
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
        <input type="text" id="tokenTicker" placeholder="PERS" maxlength="8" style="box-sizing:border-box;width:100%;">
      </div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('name_label')}</div>
        <input type="text" id="tokenName" placeholder="${t('my_token')}" maxlength="20" style="box-sizing:border-box;width:100%;">
      </div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('desc_label')}</div>
        <input type="text" id="tokenDesc" placeholder="${t('token_desc')}" style="box-sizing:border-box;width:100%;">
      </div>
      
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('supply_label')}</div>
        <input type="number" id="tokenSupply" placeholder="1000" min="1" max="999999" style="box-sizing:border-box;width:100%;">
      </div>
      
      <div style="margin-bottom: 15px;">
        <div style="font-size: 13px; margin-bottom: 5px; color: #aaa;">${t('token_icon')}</div>
        <div id="tokenImagePreview" style="width: 60px; height: 60px; background: #222; border-radius: 50%; margin-bottom: 10px; background-size: cover; background-position: center; background-image: url('${imagePreview}');"></div>
        <input type="file" id="tokenImageUpload" accept="image/*" style="display: none;">
        <button onclick="document.getElementById('tokenImageUpload').click()" style="width: auto; padding: 8px 15px; background: #444; margin-bottom: 10px;">${t('upload_image')}</button>
        <div style="font-size: 12px; color: #aaa; margin-top: 6px;">Or choose default icon:</div>
        <div style="display:flex; gap:10px; margin-top:8px;" id="defaultIconRow">
          ${['what.png','burger.png','basket.png','diam.png'].map(icon => `
            <img src="${icon}"
                 onclick="selectDefaultTokenIcon('${icon}', this)"
                 style="width:48px;height:48px;border-radius:50%;cursor:pointer;border:2px solid transparent;object-fit:cover;"
                 onerror="this.style.display='none'">
          `).join('')}
        </div>
        <div style="font-size: 11px; color: #666; margin-top:4px;">${t('default_icon')}</div>
      </div>
      
      <div style="border-top: 1px solid #333; padding-top: 15px; margin-top: 15px;">
        <div style="font-size: 13px; margin-bottom: 10px; color: #aaa; word-break: break-word;">${t('creation_cost')}: <span style="color: #ff9800;">899 KSPT</span></div>
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
  
  if (!ticker || ticker.length < 3 || ticker.length > 8) {
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
  
  if (!supply || supply < 1 || supply > 999999) {
    showToast(t('supply_error'));
    return;
  }

  const myTokenCount = (d.market.myTokens || []).filter(t => String(t.creatorId) === _getMyId()).length;
  if (myTokenCount >= 3) {
    showToast('You can only create 3 tokens');
    return;
  }
  
  if (d.tokens < 899) {
    showToast(formatTemplate(t('need_kspt'), [899]));
    return;
  }
  
  const preview = document.getElementById('tokenImagePreview');
  let icon = (preview && preview.dataset.imageData) ? preview.dataset.imageData : 'what.png';
  
  const initialPrice = 899 / supply;
  
  if (confirm(formatTemplate(t('confirm_token'), [ticker, name, supply, initialPrice.toFixed(4), 899]))) {
    d.tokens -= 899;

    const creatorId = _getMyId();
    const firebaseId = 'tok_' + creatorId + '_' + Date.now();

    const newToken = {
      ticker: ticker,
      name: name,
      description: description,
      creatorName: d.market.account.name,
      creatorId: creatorId,
      supply: supply,
      initialPrice: initialPrice,
      owned: 0,
      lastBuyTime: 0,
      lastUserBuyPrice: null,
      lastUserSellPrice: null,
      price: initialPrice,
      history: Array(20).fill(initialPrice),
      lastUpdate: Date.now(),
      icon: icon,
      createdAt: Date.now(),
      chartOffset: 0,
      firebaseId: firebaseId
    };

    if (!d.market.myTokens) d.market.myTokens = [];
    d.market.myTokens.push(newToken);
    d.market.personalToken = newToken;

    localStorage.setItem('kspt_user_tokens', JSON.stringify(d.market.myTokens));
    publishTokenToFirebase(newToken);

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
  const myTokens = (d.market.myTokens || []).filter(t => String(t.creatorId) === _getMyId());
  if (myTokens.length >= 3) {
    showToast('Max 3 tokens allowed');
    return;
  }
  currentMarketView = 'createToken';
  updateMarketUI();
}

// ─── Firebase: синхронизация цен основных токенов ───────────────────────────

function syncPricesToFirebase() {
  if (!window._firebaseReady) return;
  window._firebaseRef(window._firebaseDB, 'market/prices').set({
    kspt: d.market.ksptToken.price,
    ksptHistory: d.market.ksptToken.history,
    banx: d.market.banxToken.price,
    banxHistory: d.market.banxToken.history,
    jvm: d.market.jvmToken.price,
    jvmHistory: d.market.jvmToken.history,
    ts: Date.now()
  });
}

function subscribeToPrices() {
  if (!window._firebaseReady) return;
  window._firebaseRef(window._firebaseDB, 'market/prices').on('value', function(snapshot) {
    const data = snapshot.val();
    if (!data) return;
    if (!d.market._lastPriceSync || data.ts > d.market._lastPriceSync) {
      d.market._lastPriceSync = data.ts;
      if (data.kspt) { d.market.ksptToken.price = data.kspt; if (data.ksptHistory) d.market.ksptToken.history = data.ksptHistory; }
      if (data.banx) { d.market.banxToken.price = data.banx; if (data.banxHistory) d.market.banxToken.history = data.banxHistory; }
      if (data.jvm)  { d.market.jvmToken.price = data.jvm;   if (data.jvmHistory)  d.market.jvmToken.history  = data.jvmHistory; }
      updateMarketPrices();
      if (currentMarketView === 'trade') { try { drawChart(); } catch(e){} }
    }
  });
}

// Мастер-выбор: кто считает цены и пишет в Firebase
// Используем простую блокировку через Firebase, обновляем каждые 25 сек
function acquireMasterLock() {
  if (!window._firebaseReady) return;
  const myId = _getMyId();
  const lockRef = window._firebaseRef(window._firebaseDB, 'market/master');
  // Используем once() — читаем один раз, без подписки, без рекурсии
  lockRef.once('value', function(snapshot) {
    const lock = snapshot.val();
    const now = Date.now();
    if (!lock || now - lock.ts > 35000 || lock.id === myId) {
      window._isMaster = true;
      lockRef.set({ id: myId, ts: now });
    } else {
      window._isMaster = false;
    }
  });
}

// ─── Firebase: пользовательские токены ──────────────────────────────────────

function publishTokenToFirebase(tokenObj) {
  if (!window._firebaseReady) return;
  window._firebaseRef(window._firebaseDB, 'market/userTokens/' + tokenObj.firebaseId).set(tokenObj);
}

function publishTokenPriceToFirebase(tok) {
  if (!window._firebaseReady) return;
  window._firebaseRef(window._firebaseDB, 'market/userTokens/' + tok.firebaseId).update({
    price: tok.price,
    history: tok.history,
    lastUpdate: tok.lastUpdate
  });
}

function removeTokenFromFirebase(firebaseId) {
  if (!window._firebaseReady) return;
  window._firebaseRef(window._firebaseDB, 'market/userTokens/' + firebaseId).remove();
}

function subscribeToUserTokens() {
  if (!window._firebaseReady) return;
  window._firebaseRef(window._firebaseDB, 'market/userTokens').on('value', function(snapshot) {
    const data = snapshot.val();
    const remote = data ? Object.values(data) : [];

    // Сохраняем локальные owned/lastBuyTime для каждого токена —
    // они хранятся только у игрока, не в Firebase
    const localOwned = {};
    (d.market.myTokens || []).forEach(tok => {
      if (tok.firebaseId) {
        localOwned[tok.firebaseId] = {
          owned: tok.owned || 0,
          lastBuyTime: tok.lastBuyTime || 0,
          lastUserBuyPrice: tok.lastUserBuyPrice || null,
          lastUserSellPrice: tok.lastUserSellPrice || null,
          chartOffset: tok.chartOffset || 0
        };
      }
    });

    // Проверяем удалённые токены — автоматически продаём если был owned > 0
    Object.keys(localOwned).forEach(fid => {
      const stillExists = remote.find(t => t.firebaseId === fid);
      if (!stillExists && localOwned[fid].owned > 0) {
        // Находим последнюю известную цену из старого списка
        const oldTok = (d.market.myTokens || []).find(t => t.firebaseId === fid);
        const price = oldTok ? oldTok.price : 0;
        const earned = localOwned[fid].owned * price;
        d.tokens += earned;
        showToast(`Token was deleted. Auto-sold for ${earned.toFixed(2)} KSPT`);
        save();
      }
    });

    // Применяем данные из Firebase, восстанавливая локальные поля
    d.market.myTokens = remote.map(tok => {
      const local = localOwned[tok.firebaseId] || {};
      return Object.assign({}, tok, {
        owned: local.owned || 0,
        lastBuyTime: local.lastBuyTime || 0,
        lastUserBuyPrice: local.lastUserBuyPrice || null,
        lastUserSellPrice: local.lastUserSellPrice || null,
        chartOffset: local.chartOffset || 0
      });
    });

    d.market.personalToken = d.market.myTokens[0] || null;
    marketInitialized = false;
    updateMarketUI();
  });
}

function deletePersonalToken(firebaseId) {
  if (!d.market.myTokens) d.market.myTokens = [];

  let tokenToDelete = firebaseId
    ? d.market.myTokens.find(tok => tok.firebaseId === firebaseId)
    : (d.market.myTokens[0] || d.market.personalToken);

  if (!tokenToDelete) return;

  const now = Date.now();
  const hoursPassed = (now - tokenToDelete.createdAt) / (1000 * 60 * 60);
  if (hoursPassed < 24) {
    showToast(formatTemplate(t('delete_wait'), [Math.ceil(24 - hoursPassed)]));
    return;
  }

  let warningMsg = `${t('delete_warning_msg')}\nТокен: ${tokenToDelete.ticker}`;
  if (tokenToDelete.owned > 0) {
    warningMsg += '\n' + formatTemplate(t('delete_sell_warning'), [tokenToDelete.owned.toFixed(2), (tokenToDelete.owned * tokenToDelete.price).toFixed(4)]);
  }
  warningMsg += t('delete_final_warning');

  if (confirm(warningMsg)) {
    if (tokenToDelete.owned > 0) {
      let earned = tokenToDelete.owned * tokenToDelete.price;
      d.tokens += earned;
      showToast(formatTemplate(t('sold_tokens'), [tokenToDelete.owned.toFixed(2), earned.toFixed(2)]));
    }

    d.market.myTokens = d.market.myTokens.filter(tok => tok.firebaseId !== tokenToDelete.firebaseId);
    d.market.personalToken = d.market.myTokens[0] || null;

    if (tokenToDelete.firebaseId) removeTokenFromFirebase(tokenToDelete.firebaseId);
    localStorage.setItem('kspt_user_tokens', JSON.stringify(d.market.myTokens));

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
  } else if (selectedToken === 'personalToken' || selectedToken.startsWith('userToken_')) {
    tokenData = getTokenData();
    if (!tokenData) return;
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
  // Проверяем что покупаем именно тот токен который требует квест
  const _questCryptoId = d.quests && d.quests._cryptoQuestId;
  const _buyingName = selectedToken === 'ksptToken' ? 'KSP Token'
    : selectedToken === 'banxToken' ? 'BANX'
    : selectedToken === 'jvmToken' ? 'JVM'
    : selectedToken === 'personalToken' ? (d.market?.personalToken?.ticker || '')
    : selectedToken.startsWith('userToken_') ? (() => {
        const fid = selectedToken.replace('userToken_', '');
        const idx = parseInt(fid);
        const tok = (d.market.myTokens || []).find(t => t.firebaseId === fid)
          || (d.market.myTokens || [])[idx];
        return tok ? tok.ticker : '';
      })()
    : '';
  if (!_questCryptoId || _buyingName === _questCryptoId) {
    d.questCryptoBought = (d.questCryptoBought || 0) + amountKSPT;
    checkQuestProgress('buy_crypto');
  }
  d.questExchangeVolume = (d.questExchangeVolume || 0) + amountKSPT;
  checkQuestProgress('w_exchange');
  let tokensBought = amountKSPT / tokenData.price;
  tokenData.owned += tokensBought;
  tokenData.lastBuyTime = now;
  tokenData.lastUserBuyPrice = tokenData.price;
  tokenData.volume = (tokenData.volume || 0) + amountKSPT;
  lastMarketBuyTime = now;
  // Покупка двигает цену вверх: 1 KSPT = +0.01%, макс +30%
  const _buyImpact = Math.min(0.30, amountKSPT * 0.0001);
  tokenData.price = tokenData.price * (1 + _buyImpact);
  
  let tokenName = selectedToken === 'ksptToken' ? 'KSP Tokens' :
                  selectedToken === 'banxToken' ? 'BANX' :
                  selectedToken === 'jvmToken' ? 'JVM' :
                  tokenData.ticker || 'TOKEN';
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
  tokenData.volume = (tokenData.volume || 0) + earnedKSPT;
  d.questExchangeVolume = (d.questExchangeVolume || 0) + earnedKSPT;
  // Продажа двигает цену вниз: 1 KSPT = -0.01%, макс -30%
  const _sellImpact = Math.min(0.30, earnedKSPT * 0.0001);
  tokenData.price = tokenData.price * (1 - _sellImpact);
  checkQuestProgress('w_exchange');
  tokenData.lastUserSellPrice = tokenData.price;
  save();
  ui();
  updateMarketUI();
  drawChart();
}

function marketTicker() {
  if (!d.market) return;
  const now = Date.now();

  // ====================================================
  // ОСНОВНЫЕ ТОКЕНЫ: цены берём ТОЛЬКО из Firebase.
  // Локально считать не нужно — onValue обновит их сам.
  // Но если Firebase ещё не подключился — fallback на
  // локальный расчёт, чтобы UI не стоял.
  // ====================================================
  if (!window._firebaseReady) {
    // Fallback: локальный расчёт пока Firebase не готов
    _localTickerFallback(now);
  }

  // Пользовательские токены (myTokens) — тикер локальный,
  // т.к. создатель сам публикует цену в Firebase
  _tickMyTokens(now);
}

function _localTickerFallback(now) {
  // KSP Token
  if (now - d.market.ksptToken.lastUpdate >= 30000) {
    d.market.ksptToken.lastUpdate = now;
    let sign = Math.random() < 0.5 ? -1 : 1;
    let change = Math.random() < 0.05 ? (Math.random() * 0.15) + 0.15 : (Math.random() * 0.04) + 0.01;
    let p = Math.min(3.10, Math.max(0.40, d.market.ksptToken.price + change * sign));
    d.market.ksptToken.price = p;
    d.market.ksptToken.history.push(p);
    if (d.market.ksptToken.history.length > 20) d.market.ksptToken.history.shift();
  }
  if (d.market.banxToken && now - d.market.banxToken.lastUpdate >= 20000) {
    d.market.banxToken.lastUpdate = now;
    let sign = Math.random() < 0.5 ? -1 : 1;
    let change = Math.random() < 0.05 ? (Math.random() * 0.0002) + 0.0006 : (Math.random() * 0.0002) + 0.0002;
    let p = Math.min(0.01, Math.max(0.00010, d.market.banxToken.price + change * sign));
    d.market.banxToken.price = p;
    d.market.banxToken.history.push(p);
    if (d.market.banxToken.history.length > 20) d.market.banxToken.history.shift();
  }
  if (d.market.jvmToken && now - d.market.jvmToken.lastUpdate >= 23000) {
    d.market.jvmToken.lastUpdate = now;
    let sign = Math.random() < 0.5 ? -1 : 1;
    let change = Math.random() < 0.05 ? (Math.random() * 0.10) + 0.10 : (Math.random() * 0.04) + 0.03;
    let p = Math.min(12.10, Math.max(2.80, d.market.jvmToken.price + change * sign));
    d.market.jvmToken.price = p;
    d.market.jvmToken.history.push(p);
    if (d.market.jvmToken.history.length > 20) d.market.jvmToken.history.shift();
  }
}

function _tickMyTokens(now) {
  const myTokens = d.market.myTokens || [];
  myTokens.forEach(tok => {
    const interval = 15000 + Math.random() * 10000;
    if (now - (tok.lastUpdate || 0) >= interval) {
      tok.lastUpdate = now;
      let sign = Math.random() < 0.5 ? -1 : 1;
      let pct = Math.random() < 0.05 ? (Math.random() * 0.05) + 0.10 : (Math.random() * 0.05) + 0.03;
      const _floor = tok.initialPrice ? tok.initialPrice * 0.01 : 0.001;
      const _ceil  = tok.initialPrice ? tok.initialPrice * 10   : 10;
      let p = Math.min(_ceil, Math.max(_floor, tok.price + tok.price * pct * sign));
      tok.price = p;
      tok.history = tok.history || [];
      tok.history.push(p);
      if (tok.history.length > 20) tok.history.shift();
      // Публикуем обновлённую цену в Firebase (только создатель)
      if (window._firebaseReady && tok.creatorId === _getMyId()) {
        publishTokenPriceToFirebase(tok);
      }
    }
  });
  // Обратная совместимость
  if (d.market.myTokens && d.market.myTokens.length > 0) {
    d.market.personalToken = d.market.myTokens[0];
  }
}

function _getMyId() {
  return String(window.Telegram?.WebApp?.initDataUnsafe?.user?.id || localStorage.getItem('_kspt_uid') || 'local');
}
// ==========================================
// ОСНОВНЫЕ ФУНКЦИОНАЛЬНЫЕ ФУНКЦИИ
// ==========================================

// ===== NOTIFICATION BADGES =====
function updateNotificationBadges() {
  if (!d.settings || !d.settings.notifications || !d.settings.notifications.enabled) {
    ['badge-main', 'badge-tech', 'badge-capsule', 'badge-games', 'badge-market'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
      if (el) {
        const parent = el.closest('.long-btn, .nav-item');
        if (parent) { parent.style.outline = ''; parent.style.outlineOffset = ''; }
      }
    });
    return;
  }

  const now = Date.now();
  let mainCount = 0, techCount = 0, capsuleCount = 0, gamesCount = 0, marketCount = 0;

  // 1. Capsule ready
  if (d.capsule) {
    const capsuleReady = d.capsule.firstOpen || (now - (d.capsule.lastOpen || 0) >= 23 * 3600 * 1000);
    if (capsuleReady) capsuleCount++;
  }

  // 2. Glitch Box available (cooldown passed or first open)
  if (d.glitchBox) {
    const cooldownMs = (d.glitchBox.cooldownDays || 20) * 24 * 3600 * 1000;
    const glitchReady = d.glitchBox.firstOpen || (now - (d.glitchBox.lastOpen || 0) >= cooldownMs);
    if (glitchReady) capsuleCount++;
  }

  // 3. Fortune Wheel available + affordable
  if (d.fortuneWheel) {
    const rate = getHourlyRate();
    const price = getWheelPrice ? getWheelPrice() : 0;
    const cooldownMs = 40 * 3600 * 1000;
    const fw = d.fortuneWheel;
    const spinsOk = fw.spinsUsed < WHEEL_MAX_SPINS || (now - (fw.lastResetTime || 0)) >= cooldownMs;
    if (rate >= 400 && d.tokens >= price && spinsOk) techCount++;
    // Free spin via promo
    if (window._freeWheelSpin) techCount++;
  }

  // 4. Can afford a new skin
  const skinPrices = { what: 1, burger: 10, joost: 30, dog: 80, diam: 100, tung: 240, euro: 780, space: 1210, pixe: 3215, wheel: 7470, onion: 10110, cookie: 40780, ruka: 172080, banditx: 542123, goldcoin: 1120000, brb: 5000000 };
  const canBuySkin = Object.entries(skinPrices).some(([s, p]) => !d.skins[s] && d.tokens >= p);
  if (canBuySkin) mainCount++;

  // 5. Tickets refilled — показываем только если nextRefill = 0 и current = max (т.е. только что пополнились)
  if (typeof gameTickets !== 'undefined' && gameTickets) {
    const isFull = (gameTickets.current || 0) >= gameTickets.max;
    const wasSpent = (d.ticketsLifetime || 0) > 0;
    if (isFull && wasSpent && !gameTickets.nextRefill) gamesCount++;
  }

  // 6. Active event
  if (typeof currentIvent !== 'undefined' && currentIvent) {
    const end = new Date(currentIvent.endDate).getTime();
    if (end > now) capsuleCount++;
  }

  // 7. Market: any owned token with significant price change
  if (d.market) {
    const tokens = [d.market.ksptToken, d.market.banxToken, d.market.jvmToken];
    tokens.forEach(t => {
      if (t && t.owned > 0) {
        const hist = t.history || [];
        if (hist.length >= 2) {
          const change = Math.abs((hist[hist.length - 1] - hist[0]) / (hist[0] || 1));
          if (change >= 0.05) marketCount++;
        }
      }
    });
  }

  // Build reason strings
  const reasons = { main: [], tech: [], capsule: [], games: [], market: [] };

  if (d.capsule) {
    const capsuleReady2 = d.capsule.firstOpen || (now - (d.capsule.lastOpen || 0) >= 23 * 3600 * 1000);
    if (capsuleReady2) reasons.capsule.push('🔮 Capsule ready');
  }
  if (d.glitchBox) {
    const cooldownMs2 = (d.glitchBox.cooldownDays || 20) * 24 * 3600 * 1000;
    const glitchReady2 = d.glitchBox.firstOpen || (now - (d.glitchBox.lastOpen || 0) >= cooldownMs2);
    if (glitchReady2) reasons.capsule.push('⚡ Glitch Box ready');
  }
  if (typeof currentIvent !== 'undefined' && currentIvent) {
    if (new Date(currentIvent.endDate).getTime() > now) reasons.capsule.push('🎉 Event active');
  }
  if (d.fortuneWheel) {
    const rate2 = getHourlyRate();
    const price2 = getWheelPrice ? getWheelPrice() : 0;
    const fw2 = d.fortuneWheel;
    const spinsOk2 = fw2.spinsUsed < WHEEL_MAX_SPINS || (now - (fw2.lastResetTime || 0)) >= WHEEL_COOLDOWN_HOURS * 3600 * 1000;
    if (rate2 >= 400 && d.tokens >= price2 && spinsOk2) reasons.tech.push('🎡 Wheel available');
    if (window._freeWheelSpin) reasons.tech.push('🎡 Free spin!');
  }
  const skinPrices2 = { what: 1, burger: 10, joost: 30, dog: 80, diam: 100, tung: 240, euro: 780, space: 1210, pixe: 3215, wheel: 7470, onion: 10110, cookie: 40780, ruka: 172080, banditx: 542123, goldcoin: 1120000, brb: 5000000 };
  Object.entries(skinPrices2).forEach(([s, p]) => { if (!d.skins[s] && d.tokens >= p) reasons.main.push(`🎨 Can buy skin`); });
  if (reasons.main.length > 1) reasons.main = ['🎨 Can buy skin'];
  if (typeof gameTickets !== 'undefined' && gameTickets && (gameTickets.current || 0) >= 10) reasons.games.push('🎟️ Tickets full');
  if (d.market) {
    [d.market.ksptToken, d.market.banxToken, d.market.jvmToken].forEach(tk => {
      if (tk && tk.owned > 0) {
        const hist = tk.history || [];
        if (hist.length >= 2 && Math.abs((hist[hist.length-1] - hist[0]) / (hist[0]||1)) >= 0.05)
          reasons.market.push('📈 Token price changed');
      }
    });
  }

  function setBadge(id, count, reasonArr) {
    let el = document.getElementById(id);
    if (!el) return;
    if (count > 0) {
      el.textContent = count > 9 ? '9+' : String(count);
      el.style.display = 'flex';
      if (reasonArr && reasonArr.length) el.title = reasonArr.join('\n');
    } else {
      el.style.display = 'none';
    }
  }

  setBadge('badge-main',    mainCount,    reasons.main);
  setBadge('badge-tech',    techCount,    reasons.tech);
  setBadge('badge-capsule', capsuleCount, reasons.capsule);
  setBadge('badge-games',   gamesCount,   reasons.games);
  setBadge('badge-market',  marketCount,  reasons.market);
}

function openScreen(id) {
  if (id === 'games') {
    const el = document.getElementById('badge-games');
    if (el) el.style.display = 'none';
  }
updateNotificationBadges();
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
    marketUpdateInterval = setInterval(function() {
      updateMarketPrices();
      updatePriceCountdown();
    }, 1000);
    console.debug('market: interval started');
  }
  setTimeout(() => {
    updateMarketUI();
  }, 100);
  } else if (id === 'tech') {
    updateFortuneWheelCard && updateFortuneWheelCard();
    if (typeof renderPlinkoUI === 'function') renderPlinkoUI();
  } else if (id === 'offlineShop') {
    // Initialize cards tab on first open
    if (!document.getElementById('cards-content').innerHTML) {
      showCardTab('company');
    }
  } else if (id === 'profile') {
    document.getElementById('navProfile')?.classList.add('active');
    if (typeof openScreen_profile_hook === 'function') openScreen_profile_hook();
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

function setPrivacy(key, value) {
  if (!d.settings) d.settings = {};
  if (!d.settings.privacy) d.settings.privacy = {};
  d.settings.privacy[key] = value;
  save();
  if (window._firebaseReady && window._firebaseDB) {
    const uid = getMyUid();
    if (uid && uid !== 'local') {
      window._firebaseRef(window._firebaseDB, `leaderboard/${uid}/privacy`).update({ [key]: value });
    }
  }
}

function setProfileTabLocation(loc) {
  if (!d.settings) d.settings = {};
  d.settings.profileTabLocation = loc;
  save();
  _applyProfileTabLocation(loc);
}

function _applyProfileTabLocation(loc) {
  const navProfile = document.getElementById('navProfile');
  const btnBottom = document.getElementById('ptLocBottom');
  const btnSettings = document.getElementById('ptLocSettings');
  const profileInSettings = document.getElementById('profileInSettingsBtn');
  if (loc === 'settings') {
    if (navProfile) navProfile.style.display = 'none';
    if (profileInSettings) profileInSettings.style.display = 'flex';
  } else {
    if (navProfile) navProfile.style.display = '';
    if (profileInSettings) profileInSettings.style.display = 'none';
  }
  if (btnBottom) btnBottom.style.borderColor = loc === 'bottom' ? '#00bcd4' : '#333';
  if (btnSettings) btnSettings.style.borderColor = loc === 'settings' ? '#00bcd4' : '#333';
}

function initProfileSettingsUI() {
  const loc = d.settings?.profileTabLocation || 'settings';
  _applyProfileTabLocation(loc);

  const privacy = d.settings?.privacy || {};
  ['addFriends','sendReactions','viewInfo','viewAvatar'].forEach(key => {
    const el = document.getElementById('privacy' + key.charAt(0).toUpperCase() + key.slice(1));
    if (el && privacy[key]) el.value = privacy[key];
  });
}

function showSettingsSub(sub) {
  const subs = ["settings-main", "settings-animation", "settings-sound", "settings-bg", "settings-language", "settings-notifications", "settings-profile"];
  subs.forEach(s => {
    const elem = document.getElementById(s);
    if (elem) elem.style.display = "none";
  });
  
  const target = document.getElementById("settings-" + sub);
  if (target) target.style.display = "block";
  if (sub === 'profile') initProfileSettingsUI();
  if (sub === 'animation') {
    const te = document.getElementById('toggleTapEmote');
    if (te) te.checked = !!(d.tapEmote?.enabled);
    const opts = document.getElementById('tapEmoteOptions');
    if (opts) opts.style.display = d.tapEmote?.enabled ? 'flex' : 'none';
    _renderTapEmoteOptions();
  }

  if (sub === 'notifications') {
    const theme = d.settings?.btnTheme || 'default';
    const def = document.getElementById('btnThemeDefault');
    const sto = document.getElementById('btnThemeStone');
    if (def) def.style.border = theme === 'default' ? '2px solid #00e676' : '2px solid #333';
    if (sto) sto.style.border = theme === 'stone' ? '2px solid #00e676' : '2px solid #333';
  }
}

function toggleAnimationSetting(setting, value) {
  if (!d.settings) d.settings = {};
  if (!d.settings.animation) d.settings.animation = {};

  d.settings.animation[setting] = value;
  save();
}

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
//   }

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
    let tapBoostBonus = 0;
if (d.tapBoostEnd > now) {
  tapBoostBonus = 0.10;
}
    
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
    let earned = 0.01 * m + tapBoostBonus;
    d.questTapEarned = (d.questTapEarned || 0) + earned;
    d.wQuestTapEarned = (d.wQuestTapEarned || 0) + earned;
    earned *= _adminGetEventMulti();
    d.tokens += earned;
    d.totalTaps = (d.totalTaps || 0) + 1;
    d.questTapCount = (d.questTapCount || 0) + 1;
    if (d.totalTaps === 1 && window._firebaseReady) pushMyLeaderboardData();
    checkQuestProgress('tap_coin');
    
    showTapFloat(e, earned);
    _spawnTapEmote(e.clientX, e.clientY);
    
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
  if (index === 6 && d.cards.s1 < 5) {
    showToast(formatTemplate(t('unlock_condition'), ['Football Level 5']));
    return;
  }
  if (index === 7 && d.cards.s6 < 3) {
    showToast(formatTemplate(t('unlock_condition'), ['Boxing Level 3']));
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
  if (index === 4 && d.cards.g1 < 5) {
    showToast(formatTemplate(t('unlock_condition'), ['Chess Level 5']));
    return;
  }
  if (index === 6 && (!d.limitedCards || d.limitedCards.journey.level < 5)) {
    showToast(formatTemplate(t('unlock_condition'), ['Journey Max Level']));
    return;
  }
  if (index === 7 && d.cards.g4 < 3) {
    showToast(formatTemplate(t('unlock_condition'), ['Checkers Level 3']));
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
  d.questOverdriveUses = (d.questOverdriveUses || 0) + 1;
  checkQuestProgress('overdrive');

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
// PLINKO SYSTEM
// ==========================================

const PLINKO_COLORS = {
  2:  ['#2196f3','#f44336'],
  5:  ['#2196f3','#f44336','#4caf50','#ff9800','#9c27b0'],
  10: ['#2196f3','#f44336','#4caf50','#ff9800','#9c27b0','#00bcd4','#ffeb3b','#e91e63','#8bc34a','#ff5722']
};
const PLINKO_COLOR_NAMES = {
  2:  ['Blue','Red'],
  5:  ['Blue','Red','Green','Orange','Purple'],
  10: ['Blue','Red','Green','Orange','Purple','Cyan','Yellow','Pink','Lime','Deep Orange']
};
const PLINKO_COLOR_NAMES_RU = {
  2:  ['Синий','Красный'],
  5:  ['Синий','Красный','Зелёный','Оранжевый','Фиолетовый'],
  10: ['Синий','Красный','Зелёный','Оранжевый','Фиолетовый','Голубой','Жёлтый','Розовый','Лайм','Тёмно-оранжевый']
};
const PLINKO_CD_MS = 3 * 3600 * 1000; // 3 часа = 1 попытка
const PLINKO_MAX_TRIES = 5;

let _plinkoSelectedMult = 2;
function _plinkoWinSlots(mult) { return mult === 2 ? 5 : mult === 5 ? 3 : mult === 10 ? 2 : Math.round(10 / mult); }
let _plinkoSelectedColor = 0;
let _plinkoWinOffset = 0;
let _plinkoAnimId = null;   // ID текущего requestAnimationFrame
let _plinkoGeneration = 0; // версия — старые loop() проверяют и останавливаются

function _plinkoGetTries() {
  if (!d.plinko) d.plinko = { tries: PLINKO_MAX_TRIES, lastTryTs: 0 };
  // Восстанавливаем попытки на основе времени
  const now = Date.now();
  const elapsed = now - (d.plinko.lastTryTs || 0);
  const restored = Math.floor(elapsed / PLINKO_CD_MS);
  if (restored > 0 && d.plinko.tries < PLINKO_MAX_TRIES) {
    d.plinko.tries = Math.min(PLINKO_MAX_TRIES, d.plinko.tries + restored);
    d.plinko.lastTryTs = now - (elapsed % PLINKO_CD_MS);
    save();
  }
  return d.plinko.tries;
}

function _plinkoFormatTime(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function renderPlinkoUI() {
  const el = document.getElementById('plinkoCard');
  const _savedAmount = document.getElementById('plinkoAmount')?.value || '';
  if (!el) return;

  const tries = _plinkoGetTries();
  const now = Date.now();
  const msUntilNext = tries < PLINKO_MAX_TRIES
    ? Math.max(0, PLINKO_CD_MS - (now - (d.plinko.lastTryTs || 0)))
    : 0;
  const msUntilFull = tries < PLINKO_MAX_TRIES
    ? Math.max(0, PLINKO_CD_MS * (PLINKO_MAX_TRIES - tries) - (now - (d.plinko.lastTryTs || 0)))
    : 0;

  const colors = PLINKO_COLORS[_plinkoSelectedMult];
  const colorNames = (typeof getCurrentLang === 'function' && getCurrentLang() === 'ru')
    ? PLINKO_COLOR_NAMES_RU[_plinkoSelectedMult]
    : PLINKO_COLOR_NAMES[_plinkoSelectedMult];

  el.innerHTML = `
    <div style="text-align:center;margin-bottom:12px;">
      <div style="font-size:20px;font-weight:bold;color:#00e5ff;letter-spacing:2px;text-shadow:0 0 12px #00bcd4;">
        🔮 ${t('plinko_title')}
      </div>
      <div style="font-size:12px;color:#888;margin-top:2px;">${t('plinko_desc')}</div>
    </div>

    <!-- Tries display -->
    <div style="background:#0d0d1a;border-radius:10px;padding:10px 12px;margin-bottom:12px;border:1px solid #1a1a3a;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="font-size:12px;color:#aaa;">Tries</div>
        <div style="font-size:13px;font-weight:bold;color:${tries>0?'#00e676':'#f44336'};">${tries} / ${PLINKO_MAX_TRIES}</div>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:6px;">
        ${Array.from({length:PLINKO_MAX_TRIES},(_,i)=>`
          <div style="flex:1;height:6px;border-radius:3px;background:${i<tries?'#00e676':'#1a1a2a'};box-shadow:${i<tries?'0 0 5px #00e676':''};transition:all 0.3s;"></div>
        `).join('')}
      </div>
      <div style="font-size:11px;color:#666;">
        ${tries === PLINKO_MAX_TRIES
          ? '<span style="color:#00e676;">● Full</span>'
          : tries === 0
            ? `<span style="color:#f44336;">● ${t('plinko_no_tries')}</span> · ${formatTemplate(t('plinko_cooldown'),[_plinkoFormatTime(msUntilNext)])}`
            : `<span style="color:#ff9800;">● ${formatTemplate(t('plinko_tries'),[tries])}</span> · ${formatTemplate(t('plinko_cooldown'),[_plinkoFormatTime(msUntilNext)])}`}
        ${tries < PLINKO_MAX_TRIES && msUntilFull > 0
          ? ` · <span style="color:#444;">${formatTemplate(t('plinko_full_cd'),[_plinkoFormatTime(msUntilFull)])}</span>`
          : ''}
      </div>
    </div>

    <!-- Amount input -->
    <div style="margin-bottom:10px;">
      <div style="font-size:12px;color:#aaa;margin-bottom:4px;">${t('plinko_amount')}</div>
      <input id="plinkoAmount" type="number" min="1" max="50" placeholder="1–50" readonly onfocus="showCustomKeyboard(this)" value="${_savedAmount}"
        style="display:block;width:100%;background:#0d0d1a;border:1px solid #1a1a3a;color:#fff;border-radius:8px;padding:10px 12px;font-size:18px;font-weight:bold;outline:none;box-sizing:border-box;">
    </div>

    <!-- Multiplier selector -->
    <div style="margin-bottom:10px;">
      <div style="font-size:12px;color:#aaa;margin-bottom:6px;">${t('plinko_pick_mult')}</div>
      <div style="display:flex;gap:6px;">
        ${[2,5,10].map(m=>`
          <button onclick="_plinkoSetMult(${m})" id="plinkoMult${m}"
            style="flex:1;padding:9px 0;border-radius:10px;font-weight:bold;font-size:15px;cursor:pointer;
            border:2px solid ${_plinkoSelectedMult===m?'#00e5ff':'#1a1a3a'};
            background:${_plinkoSelectedMult===m?'rgba(0,229,255,0.12)':'#0d0d1a'};
            color:${_plinkoSelectedMult===m?'#00e5ff':'#666'};
            transition:all 0.2s;">x${m}</button>
        `).join('')}
      </div>
    </div>

    <!-- Color selector -->
    <div style="margin-bottom:14px;">
      <div style="font-size:12px;color:#aaa;margin-bottom:6px;">${t('plinko_pick_color')}</div>
      <div style="display:flex;flex-wrap:wrap;gap:7px;">
        ${colors.map((c,i)=>`
          <button onclick="_plinkoSetColor(${i})" title="${colorNames[i]}"
            style="width:36px;height:36px;border-radius:50%;background:${c};cursor:pointer;
            border:3px solid ${_plinkoSelectedColor===i?'#fff':'transparent'};
            box-shadow:${_plinkoSelectedColor===i?`0 0 10px ${c}`:'none'};
            transition:all 0.2s;"></button>
        `).join('')}
      </div>
    </div>

    <!-- Urns preview -->
    <div style="margin-bottom:14px;">
      <div style="display:flex;gap:3px;justify-content:center;align-items:center;">
        ${(()=>{
          const mult = _plinkoSelectedMult;
          const winSlots = _plinkoWinSlots(mult);
          const maxOffset = 10 - winSlots;
          const offset = Math.min(_plinkoWinOffset, maxOffset);
          return `
            <button id="plinkoShiftLeft" onclick="_plinkoShiftWin(-1)" style="background:none;border:none;color:${offset>0?'#00bcd4':'#333'};font-size:18px;cursor:${offset>0?'pointer':'default'};padding:0 4px;line-height:1;">◀</button>
            <div style="display:flex;gap:5px;">
              ${Array.from({length:10},(_,i)=>{
                const isWin = i >= offset && i < offset + winSlots;
                const col = colors[_plinkoSelectedColor];
                return `<div id="plinkoPreviewUrn${i}" style="width:24px;height:24px;border-radius:6px;background:${isWin?col:'#1a1a2a'};
                  border:2px solid ${isWin?col:'#333'};
                  box-shadow:${isWin?`0 0 8px ${col},0 0 2px #fff`:'none'};
                  transition:all 0.3s;"></div>`;
              }).join('')}
            </div>
            <button id="plinkoShiftRight" onclick="_plinkoShiftWin(1)" style="background:none;border:none;color:${offset<maxOffset?'#00bcd4':'#333'};font-size:18px;cursor:${offset<maxOffset?'pointer':'default'};padding:0 4px;line-height:1;">▶</button>
          `;
        })()}
      </div>
      <div style="text-align:center;font-size:10px;color:#555;margin-top:4px;">
        ${_plinkoWinSlots(_plinkoSelectedMult)} win / ${10 - _plinkoWinSlots(_plinkoSelectedMult)} lose &nbsp;•&nbsp; ${_plinkoWinSlots(_plinkoSelectedMult)*10}% chance
      </div>
    </div>

    <!-- Drop button -->
    <button onclick="plinkoPlay()"
      style="width:100%;padding:13px;background:${tries>0?'linear-gradient(135deg,#00bcd4,#0097a7)':'#1a1a1a'};
      color:${tries>0?'#000':'#444'};font-weight:bold;font-size:15px;border:none;border-radius:12px;cursor:${tries>0?'pointer':'not-allowed'};
      letter-spacing:1px;box-shadow:${tries>0?'0 0 16px rgba(0,188,212,0.4)':'none'};transition:all 0.2s;">
      ${tries > 0 ? t('plinko_play') : t('plinko_no_tries')}
    </button>

    <!-- Animation area / Preview -->
    <div id="plinkoAnimArea" style="margin-top:10px;">
      <canvas id="plinkoPreview" width="300" height="260"
        style="border-radius:10px;display:block;margin:0 auto;"></canvas>
    </div>
  `;

  // Рисуем статичный превью
  const prev = document.getElementById('plinkoPreview');
  if (prev) {
    const _wsSlots = _plinkoWinSlots(_plinkoSelectedMult);
    const _wsOffset = Math.min(_plinkoWinOffset, 10 - _wsSlots);
    _plinkoDrawStatic(prev, colors, _wsSlots, colors[_plinkoSelectedColor], _wsOffset);
  }
}

function _plinkoSetMult(m) {
  _plinkoSelectedMult = m;
  _plinkoSelectedColor = 0;
  _plinkoWinOffset = 0;
  renderPlinkoUI();
}

function _plinkoSetColor(i) {
  _plinkoSelectedColor = i;
  _plinkoRefreshPreviewOnly();
}

function _plinkoShiftWin(dir) {
  const winSlots = _plinkoWinSlots(_plinkoSelectedMult);
  const maxOffset = 10 - winSlots;
  _plinkoWinOffset = Math.max(0, Math.min(maxOffset, _plinkoWinOffset + dir));
  _plinkoRefreshPreviewOnly();
}

function _plinkoRefreshPreviewOnly() {
  // Обновляем только превью-канвас и кнопки цвета/позиции — не трогаем весь UI
  const colors = PLINKO_COLORS[_plinkoSelectedMult];
  const colorNames = (typeof getCurrentLang === 'function' && getCurrentLang() === 'ru')
    ? PLINKO_COLOR_NAMES_RU[_plinkoSelectedMult]
    : PLINKO_COLOR_NAMES[_plinkoSelectedMult];
  const winSlots = _plinkoWinSlots(_plinkoSelectedMult);
  const offset = Math.min(_plinkoWinOffset, 10 - winSlots);
  const maxOffset = 10 - winSlots;

  // Обновляем цветовые кнопки
  colors.forEach((c, i) => {
    const btn = document.querySelector(`#plinkoCard button[title="${colorNames[i]}"]`);
    if (btn) btn.style.border = `3px solid ${_plinkoSelectedColor === i ? '#fff' : 'transparent'}`;
  });

  // Обновляем урны превью
  for (let i = 0; i < 10; i++) {
    const urnEl = document.getElementById(`plinkoPreviewUrn${i}`);
    if (!urnEl) { renderPlinkoUI(); return; } // fallback если элементов нет
    const isWin = i >= offset && i < offset + winSlots;
    const col = colors[_plinkoSelectedColor];
    urnEl.style.background = isWin ? col : '#1a1a2a';
    urnEl.style.border = `2px solid ${isWin ? col : '#2a2a2a'}`;
    urnEl.style.boxShadow = isWin ? `0 0 7px ${col}` : 'none';
  }

  // Обновляем стрелки
  const leftBtn = document.getElementById('plinkoShiftLeft');
  const rightBtn = document.getElementById('plinkoShiftRight');
  if (leftBtn) leftBtn.style.color = offset > 0 ? '#00bcd4' : '#333';
  if (rightBtn) rightBtn.style.color = offset < maxOffset ? '#00bcd4' : '#333';

  // Превью канвас
  const prev = document.getElementById('plinkoPreview');
  if (prev) _plinkoDrawStatic(prev, colors, winSlots, colors[_plinkoSelectedColor], offset);
}

function plinkoPlay() {
  const tries = _plinkoGetTries();
  if (tries <= 0) { showToast(t('plinko_no_tries')); return; }

  const rawVal = document.getElementById('plinkoAmount')?.value;
  if (!rawVal || rawVal.trim() === '') { showToast(t('plinko_invalid')); return; }
  const amountRaw = parseFloat(rawVal);
  if (isNaN(amountRaw) || amountRaw < 1 || amountRaw > 50) { showToast(t('plinko_invalid')); return; }
  const amount = Math.floor(amountRaw);
  if (d.tokens < amount) { showToast(t('plinko_not_enough')); return; }

  // Списываем ставку и попытку
  d.tokens -= amount;
  d.plinko.tries = tries - 1;
  if (d.plinko.tries === PLINKO_MAX_TRIES - 1) {
    d.plinko.lastTryTs = Date.now(); // начинаем отсчёт с первой потраченной попытки
  }
  save();
  ui();

  // Передаём только mult и amount — победа определяется по реальной позиции шарика
  const mult = _plinkoSelectedMult;
  _plinkoAnimate(amount, mult);
}

function _plinkoDrawStatic(canvas, colors, winSlots, winColor, winOffset = 0) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const ROWS = 8, pegR = 4, colCount = 9;

  // Фон
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#070712');
  bg.addColorStop(1, '#0a0a1e');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Штыри
  for (let row = 0; row < ROWS; row++) {
    const cols = row % 2 === 0 ? colCount : colCount - 1;
    const offsetX = row % 2 === 0 ? 0 : (W / colCount) / 2;
    for (let col = 0; col < cols; col++) {
      const px = offsetX + (col + 0.5) * (W / colCount);
      const py = 36 + row * ((H - 60) / (ROWS - 1));
      ctx.beginPath();
      ctx.arc(px, py, pegR, 0, Math.PI * 2);
      ctx.fillStyle = '#3a3a5a';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(px - 1, py - 1, pegR * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.fill();
    }
  }

  // Урны внизу
  const bw = W / 10;
  for (let i = 0; i < 10; i++) {
    const isWin = i >= winOffset && i < winOffset + winSlots;
    const col = isWin ? winColor : '#1a1a2e';
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.roundRect(i * bw + 2, H - 20, bw - 4, 16, 4);
    ctx.fill();
    if (isWin) {
      ctx.shadowColor = winColor;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
}

function _plinkoAnimate(amount, mult) {
  const area = document.getElementById('plinkoAnimArea');
  if (!area) return;

  // Останавливаем предыдущий цикл
  if (_plinkoAnimId) { cancelAnimationFrame(_plinkoAnimId); _plinkoAnimId = null; }
  _plinkoGeneration++;
  const myGen = _plinkoGeneration;

  // Захватываем цвет в момент броска — не меняется в процессе
  const colors = PLINKO_COLORS[mult];
  const winSlots = _plinkoWinSlots(mult);
  const winOffset = Math.min(_plinkoWinOffset, 10 - winSlots);
  const winColor = colors[_plinkoSelectedColor];
  // win и won определяются после приземления по реальной позиции
  let win = false;
  let won = 0;
  const ROWS = 9;
  const CANVAS_W = 300;
  const CANVAS_H = 300;
  const pegR = 5;
  const colCount = 9;

  area.innerHTML = `
    <div style="position:relative;width:${CANVAS_W}px;margin:0 auto;">
      <canvas id="plinkoCanvas" width="${CANVAS_W}" height="${CANVAS_H}"
        style="border-radius:10px;display:block;"></canvas>
    </div>
    <div id="plinkoResult" style="text-align:center;margin-top:14px;font-size:0;opacity:0;transition:all 0.5s;"></div>
  `;

  const canvas = document.getElementById('plinkoCanvas');
  const ctx = canvas.getContext('2d');

  // Штыри в шахматном порядке
  const pegs = [];
  for (let row = 0; row < ROWS; row++) {
    const even = row % 2 === 0;
    const cols = even ? colCount : colCount - 1;
    const offsetX = even ? 0 : (CANVAS_W / colCount) / 2;
    for (let col = 0; col < cols; col++) {
      pegs.push({
        x: offsetX + (col + 0.5) * (CANVAS_W / colCount),
        y: 30 + row * ((CANVAS_H - 55) / (ROWS - 1))
      });
    }
  }

  const ballR = 8;
  // Стартуем строго сверху по центру с небольшим случайным смещением
  let bx = CANVAS_W / 2 + (Math.random() - 0.5) * 8;
  let by = ballR + 2;
  // Начальная скорость — минимальная, хаотичность добавляется от отскоков
  let vx = (Math.random() - 0.5) * 1.5;
  let vy = 0.8;
  const gravity = 0.18;
  const bounce = 0.38;
  const wallBounce = 0.5;

  let landed = false;
  let landDelay = 50;
  let currentFlash = null;
  let flashTimer = 0;
  let frameCount = 0;
  const MAX_FRAMES = 360;

  // Предварительно считаем путь шарика чтобы гарантировать нужный слот
  // Делаем несколько пробных симуляций и выбираем ту что ближе к нужному слоту
  function simulate(startVx) {
    let sx = CANVAS_W / 2 + (Math.random() - 0.5) * 8;
    let sy = ballR + 2;
    let svx = startVx;
    let svy = 0.8;
    for (let f = 0; f < MAX_FRAMES; f++) {
      svy += gravity;
      sx += svx; sy += svy;
      svx *= 0.98;
      if (sx - ballR < 2) { sx = ballR + 2; svx = Math.abs(svx) * wallBounce; }
      if (sx + ballR > CANVAS_W - 2) { sx = CANVAS_W - ballR - 2; svx = -Math.abs(svx) * wallBounce; }
      for (const p of pegs) {
        const dx = sx - p.x, dy = sy - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < ballR + pegR + 0.5) {
          const nx = dx/dist, ny = dy/dist;
          const dot = svx*nx + svy*ny;
          svx = (svx - 2*dot*nx) * bounce + (Math.random()-0.5)*0.6;
          svy = Math.abs((svy - 2*dot*ny) * bounce) + 0.3;
          sx = p.x + nx*(ballR+pegR+1); sy = p.y + ny*(ballR+pegR+1);
          break;
        }
      }
      if (sy + ballR >= CANVAS_H - 20) {
        const simSlot = Math.max(0, Math.min(9, Math.floor(sx / (CANVAS_W/10))));
        return simSlot;
      }
    }
    return Math.max(0, Math.min(9, Math.floor(sx / (CANVAS_W/10))));
  }

  // Случайно выбираем куда летит шарик — честно, без предопределённого результата
  vx = (Math.random() - 0.5) * 2.5;
  // Немного случайности в начальной позиции
  bx = CANVAS_W / 2 + (Math.random()-0.5)*8;

  function drawScene() {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    const bg = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
    bg.addColorStop(0, '#070712');
    bg.addColorStop(1, '#0a0a1e');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Урны
    const bw = CANVAS_W / 10;
    for (let i = 0; i < 10; i++) {
      const isWin = i >= winOffset && i < winOffset + winSlots;
      ctx.fillStyle = isWin ? winColor : '#1a1a2e';
      ctx.shadowColor = isWin ? winColor : 'transparent';
      ctx.shadowBlur = isWin ? 8 : 0;
      ctx.beginPath();
      ctx.roundRect(i*bw+2, CANVAS_H-20, bw-4, 16, 4);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // Штыри
    pegs.forEach(p => {
      const isFlash = currentFlash && currentFlash === p && flashTimer > 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, pegR, 0, Math.PI*2);
      ctx.fillStyle = isFlash ? `rgba(255,255,255,${flashTimer/10})` : '#3a3a5a';
      ctx.fill();
      if (!isFlash) {
        ctx.beginPath();
        ctx.arc(p.x-1, p.y-1, pegR*0.35, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        ctx.fill();
      }
    });
    if (flashTimer > 0) flashTimer--;

    // Шлейф
    const trailGrad = ctx.createRadialGradient(bx, by, 0, bx, by, ballR*3);
    trailGrad.addColorStop(0, winColor+'55');
    trailGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(bx, by, ballR*3, 0, Math.PI*2);
    ctx.fillStyle = trailGrad;
    ctx.fill();

    // Шарик — рисуем всегда clip внутри canvas чтобы не пропадал
    const clampedBx = Math.max(ballR, Math.min(CANVAS_W-ballR, bx));
    const clampedBy = Math.max(ballR, Math.min(CANVAS_H-ballR, by));
    const ballGrad = ctx.createRadialGradient(clampedBx-2, clampedBy-2, 1, clampedBx, clampedBy, ballR);
    ballGrad.addColorStop(0, '#ffffff');
    ballGrad.addColorStop(0.3, winColor);
    ballGrad.addColorStop(1, winColor+'66');
    ctx.beginPath();
    ctx.arc(clampedBx, clampedBy, ballR, 0, Math.PI*2);
    ctx.fillStyle = ballGrad;
    ctx.shadowColor = winColor;
    ctx.shadowBlur = 18;
    ctx.fill();
    ctx.shadowBlur = 0;

    frameCount++;
  }

  function physicsStep() {
    if (landed) return;
    vy += gravity;
    bx += vx;
    by += vy;
    vx *= 0.985; // лёгкое затухание

    // Стенки
    if (bx - ballR < 2) { bx = ballR+2; vx = Math.abs(vx)*wallBounce + 0.3; }
    if (bx + ballR > CANVAS_W-2) { bx = CANVAS_W-ballR-2; vx = -(Math.abs(vx)*wallBounce + 0.3); }
    // Потолок — не даём улететь вверх
    if (by - ballR < 0) { by = ballR; vy = Math.abs(vy)*0.5; }

    // Штыри
    for (const p of pegs) {
      const dx = bx - p.x, dy = by - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < ballR + pegR + 0.5) {
        const nx = dx/dist, ny = dy/dist;
        const dot = vx*nx + vy*ny;
        // Случайный разброс при отскоке — делает путь непредсказуемым
        const randomKick = (Math.random()-0.5) * 1.2;
        vx = (vx - 2*dot*nx)*bounce + randomKick;
        vy = Math.abs((vy - 2*dot*ny)*bounce) + 0.4; // всегда вниз
        bx = p.x + nx*(ballR+pegR+1.5);
        by = p.y + ny*(ballR+pegR+1.5);
        currentFlash = p;
        flashTimer = 10;
        break;
      }
    }

    if (by + ballR >= CANVAS_H - 20) {
      by = CANVAS_H - 20 - ballR;
      vx *= 0.2; vy = 0;
      landed = true;
    }
  }

  function showResult() {
    const finalSlot = Math.max(0, Math.min(9, Math.floor(bx / (CANVAS_W/10))));
    // Определяем победу по РЕАЛЬНОЙ позиции шарика
    win = finalSlot >= winOffset && finalSlot < winOffset + winSlots;
    won = win ? amount * mult : 0;

    const bw = CANVAS_W/10;
    ctx.fillStyle = win ? winColor : '#f44336';
    ctx.shadowColor = win ? winColor : '#f44336';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.roundRect(finalSlot*bw+2, CANVAS_H-20, bw-4, 16, 4);
    ctx.fill();
    ctx.shadowBlur = 0;

    const res = document.getElementById('plinkoResult');
    if (!res) return;
    setTimeout(() => {
      if (win) {
        d.tokens += won;
        d.questBetWins = (d.questBetWins||0)+1;
        checkQuestProgress('bet_win');
        if (mult===10 && !d.wonX10) d.wonX10=true;
        res.textContent = formatTemplate(t('plinko_win'),[won]);
        res.style.cssText = `text-align:center;font-size:22px;font-weight:bold;color:${winColor};text-shadow:0 0 18px ${winColor};opacity:1;`;
      } else {
        res.textContent = formatTemplate(t('plinko_lose'),[amount]);
        res.style.cssText = 'text-align:center;font-size:20px;font-weight:bold;color:#f44336;text-shadow:0 0 10px #f44336;opacity:1;';
      }
      save(); ui();
      setTimeout(() => {
        // Только если это всё ещё наше поколение — не перебиваем новую игру
        if (myGen === _plinkoGeneration) renderPlinkoUI();
      }, 2500);
    }, 300);
  }

  let resultShown = false;
  const _startMs = performance.now();
  const MAX_MS = 7000;

  function loop(now) {
    if (myGen !== _plinkoGeneration) return; // убит новым броском

    const elapsed = now - _startMs;

    // Физические шаги — фиксированный шаг 1/60с независимо от FPS
    const stepsNeeded = Math.max(1, Math.min(3, Math.round((now - (_lastLoopTime||now)) / (1000/60))));
    _lastLoopTime = now;
    for (let step = 0; step < stepsNeeded; step++) {
      physicsStep();
      if (landed) break;
    }
    drawScene();

    if (landed) {
      landDelay--;
      if (landDelay <= 0 && !resultShown) {
        resultShown = true;
        _plinkoAnimId = null;
        showResult();
        return;
      }
      _plinkoAnimId = requestAnimationFrame(loop);
      return;
    }

    if (elapsed < MAX_MS) {
      _plinkoAnimId = requestAnimationFrame(loop);
    } else if (!resultShown) {
      // Время вышло — форсируем
      by = CANVAS_H - 20 - ballR; vy = 0; vx = 0;
      landed = true;
      _plinkoAnimId = requestAnimationFrame(loop);
    }
  }

  let _lastLoopTime = null;
  _plinkoAnimId = requestAnimationFrame(loop);
}

// Устаревшие функции — сохранены для совместимости
function prepareBet(mult, chance) {}
function setMaxBet() {}
function confirmBet() {}
function cancelBet() {}

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

  } else if (code === "serialvikings") {
    if (!d.secretSkins) d.secretSkins = {};
    d.secretSkins['viking'] = 1;
    d.usedCodes.push(code);
    save(); ui();
    showToast('🪓 Viking skin unlocked!');
    input.value = "";
    return;

  } else if (code === "tap2x") {
    d.bonuses.tap2x = { active: true, end: Date.now() + 30 * 60 * 1000 };
    message = "x2 tap boost for 30 minutes!";

  } else if (code === "freefortunespin") {
    if (!d.fortuneWheel) d.fortuneWheel = { spinsUsed: 0, lastResetTime: 0 };
    d.usedCodes.push(code);
    save();
    input.value = "";
    window._freeWheelSpin = true;
    showToast('🎡 Free Fortune Wheel spin!');
    openFortuneWheel();
    return;

  } else if (code === "keyboxopen") {
    if (!d.keyBox) d.keyBox = { taps: 0 };
    d.keyBox.taps = 0;
    d.usedCodes.push(code);
    save();
    input.value = "";
    showToast('🗝️ Key Box unlocked!');
    startKeyBoxSequence();
    return;

  } else if (code === "adminek10") {
    if (!d.ek) d.ek = 0;
    d.ek = 10;
    message = '✅ EK balance set to 10';

  } else if (code === "ticket11" || code === "ticket12") {
    // Пополняем тикеты через games.js
    if (typeof gameTickets !== 'undefined') {
      gameTickets.current = Math.min(gameTickets.max, gameTickets.current + 10);
      if (typeof saveTickets === 'function') saveTickets();
      if (typeof updateTicketsUI === 'function') updateTicketsUI();
    }
    message = '🎫 +10 tickets!';

} else if (code === "setjomaje") {
    localStorage.setItem('_kspt_tg_username', 'jomaje');
    showToast("✅ Done");
    input.value = "";
    return;

  } else if (code === "joostsong") {
    if (!d.secretSkins) d.secretSkins = {};
    if (d.secretSkins.greatjoost) {
      showToast(t('promo_already_used'));
      input.value = "";
      return;
    }
    // Выдаём скин только тому, кто ввёл
    d.secretSkins.greatjoost = 1;
    d.usedCodes.push(code);
    // Включаем песню Klikobak для всех через Firebase
    try {
      if (window._firebaseDB) {
        window._firebaseDB.ref('admin/forceMusic').set({
          track: 'klikobak',
          end: Date.now() + 60000,
          ts: Date.now()
        });
      }
    } catch(e) {}
    save(); ui();
    showToast('🎵 JoostSong activated for everyone! Skin unlocked!');
    input.value = "";
    return;

  } else if (code === "adminon" || code === "adminoff") {
    // Admin toggle — only works for @jomaje, others see invalid code
    const _tgU = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const _uname = (_tgU?.username || localStorage.getItem('_kspt_tg_username') || '').toLowerCase();
    if (_uname !== 'jomaje') {
      showToast("Invalid code");
      input.value = "";
      return;
    }
    // adminon/adminoff are NEVER added to usedCodes so they can be toggled freely
    if (code === "adminon") {
      localStorage.setItem('_kspt_admin_enabled', '1');
      showToast("🛡 Admin Panel enabled");
    } else {
      localStorage.setItem('_kspt_admin_enabled', '0');
      showToast("🛡 Admin Panel disabled");
    }
    input.value = "";
    // Show/hide admin button without full reload
    _adminRefreshBtn();
    return;

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
// ADMIN PANEL
// ==========================================

/* ---- Helpers ---- */
function _isAdminUser() {
  const uname = (window.Telegram?.WebApp?.initDataUnsafe?.user?.username || localStorage.getItem('_kspt_tg_username') || '').toLowerCase();
  return uname === 'jomaje' && localStorage.getItem('_kspt_admin_enabled') === '1';
}

function _adminRefreshBtn() {
  const btn = document.getElementById('adminPanelBtn');
  if (!btn) return;
  btn.style.display = _isAdminUser() ? 'flex' : 'none';
}

/* Inject admin button into main screen (called once on load) */
function _adminInjectButton() {
  if (document.getElementById('adminPanelBtn')) { _adminRefreshBtn(); return; }
  const btn = document.createElement('div');
  btn.id = 'adminPanelBtn';
  btn.onclick = openAdminPanel;
  btn.innerHTML = `<img src="kspt.png" style="width:18px;height:18px;filter:hue-rotate(200deg) brightness(1.4);"><span>Admin</span>`;
  btn.style.cssText = `
    display:none; position:fixed; bottom:90px; right:14px; z-index:50001;
    background:linear-gradient(135deg,#1a237e,#283593);
    border:1.5px solid #5c6bc0; border-radius:22px; padding:8px 14px;
    align-items:center; gap:6px; cursor:pointer;
    box-shadow:0 4px 18px rgba(63,81,181,0.55);
    font-size:13px; font-weight:700; color:#e8eaf6;
  `;
  document.body.appendChild(btn);
  _adminRefreshBtn();
}

/* ---- Open / Close ---- */
function openAdminPanel() {
  if (!_isAdminUser()) return;
  const m = document.getElementById('adminPanelModal');
  if (m) {
    m.style.display = 'flex';
    _adminLoadPlayers();
    _adminUpdateActiveBar();
    clearInterval(window._adminBarInterval);
    window._adminBarInterval = setInterval(_adminUpdateActiveBar, 1000);
  }
}

function closeAdminPanel() {
  const m = document.getElementById('adminPanelModal');
  if (m) m.style.display = 'none';
  clearInterval(window._adminBarInterval);
  window._adminBarInterval = null;
}

function adminTab(tab) {
  ['adminTabGlobal','adminTabEffects','adminTabMod','adminTabOther'].forEach(id => {
    const el = document.getElementById(id); if (el) el.classList.remove('ap-tab-active');
  });
  ['adminGlobalSection','adminEffectsSection','adminModSection','adminOtherSection'].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  if (tab === 'global') {
    document.getElementById('adminTabGlobal').classList.add('ap-tab-active');
    document.getElementById('adminGlobalSection').style.display = 'block';
  } else if (tab === 'effects') {
    document.getElementById('adminTabEffects').classList.add('ap-tab-active');
    document.getElementById('adminEffectsSection').style.display = 'block';
  } else if (tab === 'mod') {
    document.getElementById('adminTabMod').classList.add('ap-tab-active');
    document.getElementById('adminModSection').style.display = 'block';
  } else {
    document.getElementById('adminTabOther').classList.add('ap-tab-active');
    document.getElementById('adminOtherSection').style.display = 'block';
    adminLoadTokenList();
    _adminLoadVerifyList();
    updatePaperEventButton();
    _adminUpdateEastStatus();
    window._firebaseDB.ref('paperEvent').once('value', snap => {
      const ev = snap.val();
      const status = document.getElementById('apPaperEventStatus');
      if (ev) {
        const remaining = Math.max(0, Math.round((new Date(ev.end) - Date.now()) / 60000));
        if (status) status.textContent = remaining > 0
          ? '✅ Active — ' + remaining + ' min remaining'
          : '⏰ Event has ended';
      } else {
        if (status) status.textContent = 'No active event';
      }
    });
  }
}

/* ---- GLOBAL: Poll ---- */
const _POLL_COLORS_HTML = `
  <option value="#00c853">🟢 Green</option>
  <option value="#d50000">🔴 Red</option>
  <option value="#2979ff">🔵 Blue</option>
  <option value="#f50057">🩷 Pink</option>
  <option value="#ffd600">🟡 Yellow</option>
  <option value="#ff6d00">🟠 Orange</option>
  <option value="#aa00ff">🟣 Purple</option>
  <option value="#00bfa5">🩵 Teal</option>
  <option value="#ffffff">⬜ White</option>
  <option value="#212121">⬛ Black</option>
  <option value="#795548">🟤 Brown</option>
  <option value="#546e7a">🩶 Steel</option>
  <option value="#e91e63">💗 Magenta</option>
  <option value="#00e5ff">🩵 Cyan</option>
  <option value="#8bc34a">🌿 Lime</option>`;
const _POLL_DEFAULT_COLORS = ['#00c853','#d50000','#2979ff','#f50057'];
function adminAddPollOption() {
  const container = document.getElementById('apPollOptions');
  const count = container.querySelectorAll('.ap-poll-opt').length;
  if (count >= 4) { showToast('Maximum 4 options'); return; }
  const defColor = _POLL_DEFAULT_COLORS[count] || '#2979ff';
  const div = document.createElement('div');
  div.className = 'ap-poll-row ap-row';
  div.style.marginBottom = '5px';
  div.innerHTML = `<input class="ap-input ap-poll-opt" placeholder="Option ${count+1}" style="flex:1;">
    <select class="ap-select ap-poll-color" style="max-width:95px;">${_POLL_COLORS_HTML}</select>`;
  container.appendChild(div);
  // Set default color for new select
  const newSel = div.querySelector('.ap-poll-color');
  if (newSel) newSel.value = defColor;
}
function adminRemovePollOption() {
  const container = document.getElementById('apPollOptions');
  const rows = container.querySelectorAll('.ap-poll-row');
  if (rows.length <= 2) { showToast('Minimum 2 options'); return; }
  rows[rows.length - 1].remove();
}
async function adminSendPoll() {
  if (!_isAdminUser()) return;
  const question = document.getElementById('apPollQuestion').value.trim();
  if (!question) { showToast('Enter a question'); return; }
  const opts = [...document.querySelectorAll('.ap-poll-opt')].map(i => i.value.trim()).filter(Boolean);
  if (opts.length < 2) { showToast('Need at least 2 options'); return; }
  const cols = [...document.querySelectorAll('.ap-poll-color')].map(i => i.value);
  const dur = Number(document.getElementById('apPollDur').value) || 10;
  const onlineOnly = document.getElementById('apPollOnline')?.checked || false;
  const ts = Date.now();
  await _db.ref('admin/poll').set({ question, options: opts, colors: cols, dur, onlineOnly, ts });
  await _db.ref('admin/pollVotes').remove();
  setTimeout(() => _db.ref('admin/poll').remove(), (dur + 10) * 1000);
  showToast('🗳 Poll sent!');
}

/* ---- GLOBAL: Maintenance ---- */
function apMaintReasonCustomToggle(val) {
  const custom = document.getElementById('apMaintReasonCustom');
  if (custom) custom.style.display = val === 'custom' ? 'block' : 'none';
}
function apMaintTimeToggle(val) {
  document.getElementById('apMaintApproxText').style.display = val === 'approx' ? 'block' : 'none';
  document.getElementById('apMaintTimerDur').style.display = val === 'timer' ? 'block' : 'none';
}
async function adminStartMaintenance() {
  if (!_isAdminUser()) return;
  const reasonKey = document.getElementById('apMaintReason').value;
  const customText = document.getElementById('apMaintReasonCustom').value.trim();
  const reason = reasonKey === 'custom' ? customText : reasonKey;
  if (!reason) { showToast('Enter a reason'); return; }
  const timeType = document.querySelector('input[name="apMaintTimeType"]:checked')?.value || 'approx';
  let endTs = 0, approxText = '';
  if (timeType === 'timer') {
    const dur = Number(document.getElementById('apMaintTimerDur').value) || 600;
    endTs = Date.now() + dur * 1000;
  } else {
    approxText = document.getElementById('apMaintApproxText').value.trim() || '~30 min';
  }
  await _db.ref('admin/maintenance').set({ active: true, reason, endTs, approxText, ts: Date.now() });
  showToast('🔧 Maintenance started');
}
async function adminStopMaintenance() {
  if (!_isAdminUser()) return;
  await _db.ref('admin/maintenance').remove();
  showToast('✅ Maintenance ended');
}

/* ---- GLOBAL: Broadcast ---- */
async function adminBroadcast() {
  if (!_isAdminUser()) return;
  const text = document.getElementById('apBroadcastText').value.trim();
  if (!text) return;
  const dur = Number(document.getElementById('apBroadcastDur').value) || 5;
  const color = document.getElementById('apBroadcastColor').value || '#ffffff';
  const onlineOnly = document.getElementById('apBroadcastOnline')?.checked || false;
  if (!window._firebaseReady) { showToast('Firebase not ready'); return; }
  const payload = { text, color, dur, onlineOnly, ts: Date.now() };
  await _db.ref('admin/broadcast').set(payload);
  setTimeout(() => _db.ref('admin/broadcast').remove(), 15000);
  showToast(onlineOnly ? '📢 Sent to online players!' : '📢 Sent to all!');
  document.getElementById('apBroadcastText').value = '';
}
/* ---- GLOBAL: Tap Event ---- */
async function adminStartEvent() {
  if (!_isAdminUser()) return;
  const multi = Number(document.getElementById('apEventMulti').value) || 3;
  const dur = Number(document.getElementById('apEventDur').value) || 60; // seconds
  const bg = document.getElementById('apEventBg').value || 'default';
  const end = Date.now() + dur * 1000;
  const payload = { active: true, multi: Math.min(999, Math.max(3, multi)), end, bg, ts: Date.now() };
  await _db.ref('admin/tapEvent').set(payload);
  showToast(`⚡ Event x${payload.multi} started!`);
}
async function adminStopEvent() {
  if (!_isAdminUser()) return;
  await _db.ref('admin/tapEvent').set({ active: false, ts: Date.now() });
  showToast('Event stopped');
}

/* ---- GLOBAL: Give Opening to All ---- */
async function adminGiveOpeningAll() {
  if (!_isAdminUser()) return;
  const type = document.getElementById('apOpeningType').value;
  const onlineOnly = document.getElementById('apOpeningOnline')?.checked || false;
  const payload = { type, onlineOnly, ts: Date.now() };
  if (type === 'giftBox_letter') {
    const _ltEl = document.getElementById('apGiftLetterAll');
    if (_ltEl) _ltEl.style.display = 'flex'; // показать если скрыт
    payload.letterText  = document.getElementById('apGiftTextAll')?.value.trim() || '';
    payload.letterEmoji = document.getElementById('apGiftEmojiAll')?.value.trim() || '❤️';
    if (payload.letterText.length < 5) { showToast('✏️ Enter letter text (min 5 chars)'); return; }
  }
  await _db.ref('admin/giveOpening').set(payload);
  setTimeout(() => _db.ref('admin/giveOpening').remove(), 10000);
  showToast(onlineOnly ? `🎁 ${type} sent to online players!` : `🎁 ${type} sent to all!`);
}

/* ---- GLOBAL: Skip Cooldown for All ---- */
async function adminSkipCooldownAll() {
  if (!_isAdminUser()) return;
  const type = document.getElementById('apCooldownType').value;
  const onlineOnly = document.getElementById('apCooldownOnline')?.checked || false;
  await _db.ref('admin/skipCooldown').set({ type, onlineOnly, ts: Date.now() });
  setTimeout(() => _db.ref('admin/skipCooldown').remove(), 10000);
  showToast(onlineOnly ? `⏩ Skipped for online players!` : `⏩ Skipped for all!`);
}

/* ---- GLOBAL: Give Tickets to All ---- */
async function adminGiveTicketsAll() {
  if (!_isAdminUser()) return;
  const count = Number(document.getElementById('apTicketsCount').value) || 1;
  const onlineOnly = document.getElementById('apTicketsOnline')?.checked || false;
  await _db.ref('admin/giveTickets').set({ count, onlineOnly, ts: Date.now() });
  setTimeout(() => _db.ref('admin/giveTickets').remove(), 10000);
  showToast(onlineOnly ? `🎫 +${count} tickets sent to online players!` : `🎫 +${count} tickets sent to all!`);
}

/* ---- GLOBAL: Temp Skin for All ---- */
async function adminRevokeTempSkin() {
  if (!_isAdminUser()) return;
  // Ставим end в прошлое — клиенты поймут что скин истёк и откатятся
  await _db.ref('admin/tempSkin').set({ skinId: '__revoke__', end: Date.now() - 1, ts: Date.now() });
  showToast('✂️ Temp skin revoked for all');
}

async function adminGiveTempSkin() {
  if (!_isAdminUser()) return;
  const skinId = document.getElementById('apTempSkinId').value;
  const dur = Number(document.getElementById('apTempSkinDur').value) || 3600;
  if (!skinId) return;
  const onlineOnly = document.getElementById('apTempSkinOnline')?.checked || false;
  const end = Date.now() + dur * 1000;
  await _db.ref('admin/tempSkin').set({ skinId, end, onlineOnly, ts: Date.now() });
  setTimeout(() => _db.ref('admin/tempSkin').remove(), 10000);
  showToast(onlineOnly ? `🎨 Skin "${skinId}" for online players!` : `🎨 Skin "${skinId}" for all!`);
}

/* ---- MODERATION: load player list ---- */
let _adminPlayers = {};
function _adminLoadPlayers() {
  if (!window._firebaseReady) return;
  _db.ref('leaderboard').limitToLast(200).once('value', snap => {
    _adminPlayers = {};
    const data = snap.val() || {};
    const list = document.getElementById('apPlayerList');
    list.innerHTML = '';
    Object.entries(data).forEach(([uid, p]) => {
      _adminPlayers[uid] = p;
      const opt = document.createElement('option');
      opt.value = uid;
      const name = p.name || p.username || uid;
      const tokens = p.tokens !== undefined ? ` — ${Math.floor(p.tokens)} KSPT` : '';
      opt.textContent = (p.username ? `@${p.username}` : name) + tokens;
      list.appendChild(opt);
    });
  });
}

function _adminSelectedUid() {
  const sel = document.getElementById('apPlayerList');
  return sel?.value || null;
}

/* ---- OTHER: Verified badge ---- */
let _adminVerifySelectedUid = null;

function _adminLoadVerifyList() {
  if (!window._firebaseReady) return;
  const container = document.getElementById('apVerifyList');
  if (!container) return;
  _db.ref('leaderboard').limitToLast(200).once('value', snap => {
    const data = snap.val() || {};
    container.innerHTML = '';
    Object.entries(data).forEach(([uid, p]) => {
      const isVerified = !!p.verified;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:8px;cursor:pointer;border:1px solid #222;background:#0d0d0d;';
      row.innerHTML = `
        <img src="${p.photoUrl||'seri.png'}" onerror="this.src='seri.png'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
        <span style="font-size:13px;flex:1;">${p.name||uid}</span>
        ${isVerified ? '<img src="gal.png" style="width:14px;height:14px;object-fit:contain;vertical-align:middle;">' : ''}
      `;
      row.onclick = () => {
        container.querySelectorAll('div').forEach(r => r.style.background = '#0d0d0d');
        row.style.background = '#1a2a3a';
        _adminVerifySelectedUid = uid;
      };
      container.appendChild(row);
    });
  });
}

async function adminToggleVerified(grant) {
  if (!_isAdminUser()) return;
  const uid = _adminVerifySelectedUid;
  if (!uid) { showToast('Select a player first'); return; }
  await _db.ref(`leaderboard/${uid}`).update({ verified: grant ? true : null });
  // Уведомляем игрока через modActions чтобы обновился d.verified
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'verify', grant: !!grant, ts: Date.now() });
  showToast(grant ? `✅ Verified granted to ${uid}` : `✕ Verified revoked`);
  _adminLoadVerifyList();
}

/* ---- MOD: Set/Give KSPT ---- */
async function adminSetKSPT() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const val = Number(document.getElementById('apKSPTVal').value);
  const mode = document.getElementById('apKSPTMode').value; // 'set' | 'add'
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'kspt', mode, val, ts: Date.now() });
  showToast(`✅ KSPT action queued for ${uid}`);
}

/* ---- MOD: Set/Give EK ---- */
async function adminSetEK() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const val = Number(document.getElementById('apEKVal').value);
  const mode = document.getElementById('apEKMode').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'ek', mode, val, ts: Date.now() });
  showToast(`✅ EK action queued`);
}

/* ---- MOD: Clear Game Record ---- */
function _adminLoadGameRecordOptions() {
  const uid = _adminSelectedUid();
  const sel = document.getElementById('apClearGameId');
  if (!sel) return;
  const allGames = typeof GAME_RECORD_LABELS !== 'undefined' ? Object.keys(GAME_RECORD_LABELS) : [];
  sel.innerHTML = '<option value="">— select game —</option>';
  if (!uid || !_adminPlayers[uid]) {
    allGames.forEach(g => {
      const meta = GAME_RECORD_LABELS[g];
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g + (meta && meta.label ? ' (' + meta.label + ')' : '');
      sel.appendChild(opt);
    });
    return;
  }
  const p = _adminPlayers[uid];
  const records = p.gameRecords || {};
  const withRecord = allGames.filter(g => records[g] > 0);
  const without = allGames.filter(g => !records[g]);
  withRecord.forEach(g => {
    const meta = GAME_RECORD_LABELS[g];
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g + ' — ' + records[g] + (meta && meta.unit ? ' ' + meta.unit : '');
    sel.appendChild(opt);
  });
  if (without.length) {
    const divider = document.createElement('option');
    divider.disabled = true;
    divider.textContent = '— no record yet —';
    sel.appendChild(divider);
    without.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g;
      sel.appendChild(opt);
    });
  }
}

async function adminClearGameRecord() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player first'); return; }
  const game = document.getElementById('apClearGameId').value;
  if (!game) { showToast('Select a game first'); return; }
  if (!confirm('Clear "' + game + '" record for ' + uid + '?')) return;
  await _db.ref('admin/modActions/' + uid).set({ action: 'clearGameRecord', game, ts: Date.now() });
  await _db.ref('leaderboard/' + uid + '/gameRecords/' + game).remove();
  showToast('Game record "' + game + '" cleared for ' + uid);
  setTimeout(() => { _adminLoadPlayers(); _adminLoadGameRecordOptions(); }, 800);
}

/* ---- MOD: Ban / Unban ---- */
async function adminBanPlayer(ban) {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  await _db.ref(`admin/modActions/${uid}`).set({ action: ban ? 'ban' : 'unban', ts: Date.now() });
  showToast(ban ? `🚫 Ban queued` : `✅ Unban queued`);
}

/* ---- MOD: Give Opening (personal) ---- */
async function adminGiveOpeningPlayer() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const type = document.getElementById('apModOpeningType').value;
  const payload = { action: 'giveOpening', type, ts: Date.now() };
  if (type === 'giftBox_letter') {
    const _ltEl = document.getElementById('apGiftLetterMod');
    if (_ltEl) _ltEl.style.display = 'flex';
    payload.letterText  = document.getElementById('apGiftTextMod')?.value.trim() || '';
    payload.letterEmoji = document.getElementById('apGiftEmojiMod')?.value.trim() || '❤️';
    if (payload.letterText.length < 5) { showToast('✏️ Enter letter text (min 5 chars)'); return; }
  }
  await _db.ref(`admin/modActions/${uid}`).set(payload);
  showToast(`🎁 ${type} opening queued`);
}

/* ---- MOD: Give Tickets (personal) ---- */
async function adminGiveTicketsPlayer() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const count = Number(document.getElementById('apModTickets').value) || 1;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveTickets', count, ts: Date.now() });
  showToast(`🎫 +${count} tickets queued`);
}

async function adminSetPlayerRank() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const rank = document.getElementById('apModRank').value;
  // Сохраняем в постоянное место — работает даже если игрок офлайн
  await _db.ref(`admin/playerRanks/${uid}`).set({ rank: rank || null, ts: Date.now() });
  // Также через modActions если онлайн — применится сразу
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'setRank', rank, ts: Date.now() });
  showToast(`🏅 Rank "${rank || 'Auto'}" set for player`);
}

async function adminTakeTicketsPlayer() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const count = Number(document.getElementById('apModTickets').value) || 1;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'takeTickets', count, ts: Date.now() });
  showToast(`➖ -${count} tickets queued`);
}

/* ---- MOD: View / Give / Take player skins ---- */
async function adminLoadPlayerSkins() {
  const uid = _adminSelectedUid();
  if (!uid) { showToast('Select a player first'); return; }
  const container = document.getElementById('apPlayerSkinsList');
  if (!container) return;
  container.textContent = 'Loading...';
  const snap = await _db.ref(`users/${uid}/skins`).once('value').catch(() => null)
    || await _db.ref(`leaderboard/${uid}/skins`).once('value').catch(() => null);
  const skins = snap ? snap.val() : null;
  if (!skins) { container.textContent = 'No skins data found.'; return; }
  const owned = Object.entries(skins).filter(([k,v]) => v && v !== '0').map(([k]) => k);
  container.textContent = owned.length ? owned.join(', ') : 'No skins owned.';
}

async function adminModGiveEKSkin() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player'); return; }
  const skinId = document.getElementById('apModEKSkin').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveEKSkinMod', skinId, take: false, ts: Date.now() });
  showToast(`✅ EK skin "${skinId}" queued for ${uid}`);
}

async function adminModTakeEKSkin() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player'); return; }
  const skinId = document.getElementById('apModEKSkin').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveEKSkinMod', skinId, take: true, ts: Date.now() });
  showToast(`✅ EK skin "${skinId}" take queued for ${uid}`);
}

async function adminModGiveFuseSkin() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player'); return; }
  const skinId = document.getElementById('apModFuseSkin').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveFuseSkinMod', skinId, take: false, ts: Date.now() });
  showToast(`✅ Fuse skin "${skinId}" give queued`);
}
async function adminModTakeFuseSkin() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player'); return; }
  const skinId = document.getElementById('apModFuseSkin').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveFuseSkinMod', skinId, take: true, ts: Date.now() });
  showToast(`✅ Fuse skin "${skinId}" take queued`);
}

async function adminModGiveSkin() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player'); return; }
  const skinId = document.getElementById('apModSkinId').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveSkinMod', skinId, take: false, ts: Date.now() });
  showToast(`✅ Skin "${skinId}" give queued`);
}
async function adminModTakeSkin() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) { showToast('Select a player'); return; }
  const skinId = document.getElementById('apModSkinId').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'giveSkinMod', skinId, take: true, ts: Date.now() });
  showToast(`✅ Skin "${skinId}" take queued`);
}

/* ---- MOD: Remove from Leaderboard ---- */
async function adminRemoveFromLeaderboard() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  if (!window._firebaseReady) { showToast('Firebase not ready'); return; }
  await _db.ref(`leaderboard/${uid}`).remove();
  showToast(`🗑 Removed ${uid} from leaderboard`);
  setTimeout(() => _adminLoadPlayers(), 1500);
}
async function adminRestoreToLeaderboard() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  if (!window._firebaseReady) { showToast('Firebase not ready'); return; }

  // Берём данные из всех доступных источников
  const lbSnap = await _db.ref(`leaderboard/${uid}`).once('value').catch(() => null);
  const lbData = lbSnap ? lbSnap.val() : null;
  const cachedPlayer = _adminPlayers ? _adminPlayers[uid] : null;
  const source = lbData || cachedPlayer || {};

  const entry = {
    uid: uid,
    name: source.name || ('Player_' + uid.slice(-4)),
    username: source.username || '',
    photoUrl: source.photoUrl || '',
    isTg: source.isTg || false,
    rate: Math.round(source.rate || 0),
    tokens: Math.round(source.tokens || 0),
    updatedAt: Date.now(),
    lastSeen: Date.now(),
    playtimeMs: source.playtimeMs || 0,
    restoredByAdmin: true,
    adminForceVisible: true  // ← принудительный флаг
  };

  // Записываем в leaderboard
  await _db.ref(`leaderboard/${uid}`).set(entry);

  // Принудительно убираем возможный бан из modActions и playerRanks
  await _db.ref(`admin/modActions/${uid}`).remove().catch(()=>{});
  await _db.ref(`admin/playerRanks/${uid}/banned`).remove().catch(()=>{});

  // Отправляем игроку команду разбана на случай если он онлайн
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'unban', ts: Date.now() });

  showToast(`♻️ Restored "${entry.name}" to leaderboard (forced)`);
  setTimeout(() => _adminLoadPlayers(), 1500);
}

/* ---- MOD: Personal message ---- */
async function adminSendPersonalMsg() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const text = document.getElementById('apPersonalMsg').value.trim();
  const color = document.getElementById('apPersonalMsgColor').value || '#ffffff';
  const dur = Number(document.getElementById('apPersonalMsgDur').value) || 5;
  if (!text) return;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'message', text, color, dur, ts: Date.now() });
  showToast('💬 Message queued');
  document.getElementById('apPersonalMsg').value = '';
}

/* ============================================================
   CLIENT-SIDE LISTENER — receives admin commands while playing
   Polls Firebase every 1.5 s to stay almost real-time without
   overloading Realtime Database.
   ============================================================ */
const _adminStartTs = Date.now();
let _adminPollTs = { broadcast: _adminStartTs, tapEvent: _adminStartTs, giveOpening: _adminStartTs,
                     skipCooldown: _adminStartTs, giveTickets: _adminStartTs, tempSkin: _adminStartTs,
                     poll: _adminStartTs, forceMusic: _adminStartTs, effects: _adminStartTs, uiChaos: _adminStartTs };
let _adminEventInterval = null;

function _startAdminListener() {
  if (!window._firebaseReady) { setTimeout(_startAdminListener, 2000); return; }

  // Use Firebase .on() for near-instant delivery (1 connection, cheap)
  // Считаем игрока "онлайн" если он открыл игру не позже чем ONLINE_WINDOW мс назад
  const ONLINE_WINDOW = 2 * 60 * 1000; // 2 минуты
  const _sessionStart = Date.now(); // момент запуска этой сессии

  function _wasOnline(cmdTs) {
    // Команда считается "для онлайн" если она пришла ПОСЛЕ того как игрок открыл игру
    return cmdTs >= _sessionStart - ONLINE_WINDOW;
  }

  _db.ref('admin/broadcast').on('value', snap => {
    const v = snap.val();
    if (!v || v.ts <= _adminPollTs.broadcast) return;
    _adminPollTs.broadcast = v.ts;
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    _adminShowOverlay(v.text, v.color || '#fff', (v.dur || 5) * 1000);
  });

  _db.ref('admin/tapEvent').on('value', snap => {
    const v = snap.val();
    if (!v) return;
    // Ивент — всегда для всех (кто зайдёт пока он активен)
    if (v.active && v.end > Date.now()) {
      _adminApplyTapEvent(v);
    } else {
      _adminClearTapEvent();
    }
  });

  _db.ref('admin/giveOpening').on('value', snap => {
    const v = snap.val();
    if (!v || v.ts <= _adminPollTs.giveOpening) return;
    _adminPollTs.giveOpening = v.ts;
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    _adminApplyOpening(v.type, v);
  });

  _db.ref('admin/skipCooldown').on('value', snap => {
    const v = snap.val();
    if (!v || v.ts <= _adminPollTs.skipCooldown) return;
    _adminPollTs.skipCooldown = v.ts;
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    _adminApplySkipCooldown(v.type);
  });

  _db.ref('admin/giveTickets').on('value', snap => {
    const v = snap.val();
    if (!v || v.ts <= _adminPollTs.giveTickets) return;
    _adminPollTs.giveTickets = v.ts;
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    if (typeof gameTickets !== 'undefined') {
      gameTickets.current = gameTickets.current + (v.count || 1);
      if (typeof saveTickets === 'function') saveTickets();
      if (typeof updateTicketsUI === 'function') updateTicketsUI();
    }
    showToast(`🎫 +${v.count} tickets from Admin!`);
  });

  _db.ref('admin/tempSkin').on('value', snap => {
    const v = snap.val();
    if (!v) return;
    // Принудительный отзыв
    if (v.skinId === '__revoke__' || v.end <= Date.now()) {
      if (window._adminTempSkin) {
        const prev = window._adminTempSkin.skinId;
        if (d.skins && d.skins[prev] === '_temp') delete d.skins[prev];
        d.skin = d._adminTempSkinOrigSkin || 'default';
        delete d._adminTempSkinOrigSkin;
        window._adminTempSkin = null;
        clearTimeout(window._adminTempSkinTimeout);
        save();
        if (typeof ui === 'function') ui();
        showToast('🎨 Temp skin removed');
      }
      return;
    }
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    if (v.end > Date.now()) {
      // Сначала откатываем предыдущий temp скин если был
      if (window._adminTempSkin) {
        const prev = window._adminTempSkin.skinId;
        if (d.skins && d.skins[prev] === '_temp') delete d.skins[prev];
        // Восстанавливаем оригинальный скин до применения нового
        d.skin = d._adminTempSkinOrigSkin || 'default';
      }
      clearTimeout(window._adminTempSkinTimeout);

      if (v.skinId && v.skinId !== 'default') {
        if (!d.skins) d.skins = {};
        // Сохраняем ОРИГИНАЛЬНЫЙ скин (не временный)
        if (!window._adminTempSkin) {
          d._adminTempSkinOrigSkin = d.skin;
        }
        window._adminTempSkin = { skinId: v.skinId, end: v.end };
        if (!d.skins[v.skinId]) d.skins[v.skinId] = '_temp';
        d.skin = v.skinId;
        save();
        if (typeof ui === 'function') ui();
        const msLeft = v.end - Date.now();
        window._adminTempSkinTimeout = setTimeout(() => {
          if (window._adminTempSkin && window._adminTempSkin.skinId === v.skinId) {
            window._adminTempSkin = null;
            if (d.skins && d.skins[v.skinId] === '_temp') delete d.skins[v.skinId];
            d.skin = d._adminTempSkinOrigSkin || 'default';
            delete d._adminTempSkinOrigSkin;
            save();
            if (typeof ui === 'function') ui();
            showToast('🎨 Temp skin expired');
          }
        }, msLeft);
        showToast(`🎨 Temp skin "${v.skinId}" applied! (${Math.round(msLeft/60000)}min)`);
      } else {
        // default — сбрасываем
        window._adminTempSkin = null;
        d.skin = d._adminTempSkinOrigSkin || 'default';
        delete d._adminTempSkinOrigSkin;
        save();
        if (typeof ui === 'function') ui();
      }
    }
  });

// Poll listener
  _db.ref('admin/poll').on('value', snap => {
    const v = snap.val();
    if (!v || v.ts <= _adminPollTs.poll) return;
    _adminPollTs.poll = v.ts;
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    _adminShowPoll(v);
  });

_db.ref('admin/fuseLuck').on('value', snap => {
    const v = snap?.val();
    if (!v || !v.end || v.end <= Date.now()) { _fuseLuckDeactivate(); return; }
    _fuseLuckActivate(v.end);
  });

  // Force Music listener
  _db.ref('admin/countdown').on('value', snap => {
    const v = snap?.val();
    if (!v || !v.end || v.end <= Date.now()) { _adminHideCountdown(); return; }
    _adminShowCountdown(v.title || 'Coming soon...', v.titleColor || '#ffffff', v.timerColor || '#ffd700', v.end, v.size || 'medium', v.opacity !== undefined ? v.opacity : 0.8);
  });
  _db.ref('admin/forceMusic').on('value', snap => {
    const v = snap.val();
    if (!v) {
      window._adminForcedMusic = null;
      clearTimeout(window._adminMusicTimeout);
      if (typeof ensureMusicPlays === 'function') ensureMusicPlays();
      _adminUpdateActiveBar();
      return;
    }
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    if (v.end <= Date.now()) {
      window._adminForcedMusic = null;
      if (typeof ensureMusicPlays === 'function') ensureMusicPlays();
      return;
    }
    if (!v.track || v.end <= Date.now()) {
      window._adminForcedMusic = null;
      if (typeof ensureMusicPlays === 'function') ensureMusicPlays();
      _adminUpdateActiveBar();
      return;
    }
    window._adminForcedMusic = { track: v.track, end: v.end };
    const trackFiles = {
      mistic:'mistic.mp3', gabber:'gabber.mp3', onion:'onion.mp3', calm:'calm.mp3',
      siulai:'siulai.mp3', funny:'funny.mp3', code:'code.mp3',
      catito:'catito.mp3', event:'event.mp3',
      amarrun:'amarrun.mp3', brain:'brain.mp3', saliutas:'saliutas.mp3',
      klikobak:'klikobak.mp3', rickroll:'rickroll.mp3', tiktok:'tiktok.mp3',
      batidao:'batidao.mp3', eind:'eind.mp3'
    };
    try {
      window.appMusic.src = trackFiles[v.track] || (v.track + '.mp3');
      window.appMusic.currentTime = 0;
      window.appMusic.play().catch(() => {
        const resume = () => { window.appMusic.play().catch(()=>{}); document.removeEventListener('click', resume); document.removeEventListener('touchstart', resume); };
        document.addEventListener('click', resume, {once:true});
        document.addEventListener('touchstart', resume, {once:true});
      });
      _adminShowOverlay(`🎵 Now playing: ${v.track}`, '#c084fc', 4000);
      const msLeft = v.end - Date.now();
      clearTimeout(window._adminMusicTimeout);
      window._adminMusicTimeout = setTimeout(() => {
        window._adminForcedMusic = null;
        if (typeof ensureMusicPlays === 'function') ensureMusicPlays();
        _adminUpdateActiveBar();
      }, msLeft);
      window._adminForcedMusicEndTs = v.end;
      _adminUpdateActiveBar();
      _adminGlobalStatusUpdate();
    } catch(e) { console.warn('admin forceMusic:', e); }
  });

  // Effects listener
  _db.ref('admin/effects').on('value', snap => {
    const v = snap.val();
    if (!v) { _adminClearEffects(); return; }
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    if (v.end > Date.now()) {
      window._adminEffectsEndTs = v.end;
      _adminApplyEffects(v.effects, v.end - Date.now());
      _adminGlobalStatusUpdate();
    } else {
      window._adminEffectsEndTs = 0;
      _adminClearEffects();
    }
  });

  // UI Chaos listener
  _db.ref('admin/uiChaos').on('value', snap => {
    const v = snap.val();
    if (!v) { _adminResetUIChaos(); return; }
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    const msLeft = v.end - Date.now();
    if (msLeft > 500) {
      // Применяем только если это новая команда (другой ts или ещё не применяли)
      if (window._adminChaosAppliedTs !== v.ts) {
        window._adminChaosAppliedTs = v.ts;
        window._adminChaosEndTs = v.end;
        _adminApplyUIChaos(Number(v.rotate)||0, Number(v.scale)||1, msLeft);
        _adminGlobalStatusUpdate();
      }
    } else if (v.end === 0) {
      // Сброс только если явно выслан reset (end=0), не из-за задержки сети
      window._adminChaosEndTs = 0;
      _adminResetUIChaos();
    }
  });

_db.ref('admin/bgVideo').on('value', snap => {
    const v = snap.val();
    if (!v) { _adminClearBgVideo(); return; }
    if (v.onlineOnly && !_wasOnline(v.ts)) return;
    if (v.end > Date.now()) {
      _adminApplyBgVideo(v.src, v.end - Date.now());
    } else {
      _adminClearBgVideo();
    }
  });

_db.ref('admin/coinControl').on('value', snap => {
    const v = snap.val();
    if (!v) { _adminClearCoinControl(); return; }
    if (v.end > Date.now()) {
      _adminApplyCoinControl(v.dir, v.speed);
      clearTimeout(window._adminCoinControlTimeout);
      window._adminCoinControlTimeout = setTimeout(() => _adminClearCoinControl(), v.end - Date.now());
    } else {
      _adminClearCoinControl();
    }
  });

_db.ref('admin/maintenance').on('value', snap => {
    const v = snap.val();
    if (v && v.active) {
      _adminShowMaintenance(v);
    } else {
      _adminHideMaintenance();
    }
  });

  // Personal actions (per-UID node)
  const myUid = typeof getMyUid === 'function' ? getMyUid() : null;
  if (myUid) {
    _eastStartListening();
// Fuse всегда доступна — показываем табы
    const _fuseTabs = document.getElementById('eastShopTabs');
    if (_fuseTabs) _fuseTabs.style.display = 'flex';
    // Проверить завершилось ли слияние
    setTimeout(() => { if (typeof _fuseCheckComplete === 'function') _fuseCheckComplete(); }, 1500);
    _db.ref(`admin/modActions/${myUid}`).on('value', snap => {
      const v = snap.val();
      if (!v) return;
      _adminApplyModAction(v);
      // Clear after handling
      _db.ref(`admin/modActions/${myUid}`).remove();
    });
  }
}

/* ---- Maintenance Screen ---- */
let _maintTimerInterval = null;

function _adminShowMaintenance(v) {
  let m = document.getElementById('maintenanceScreen');
  if (!m) {
    m = document.createElement('div');
    m.id = 'maintenanceScreen';
    document.body.appendChild(m);
  }

  const reasonText = v.reason && v.reason.startsWith('maintenance_reason_') ? t(v.reason) : (v.reason || '');

  m.style.cssText = `
    position:fixed;inset:0;z-index:49999;
    background:linear-gradient(135deg,#0a0a1a 0%,#0d1a2e 50%,#0a0a1a 100%);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    padding:30px;box-sizing:border-box;text-align:center;
  `;

  m.innerHTML = `
    <style>
      @keyframes maintGear { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      @keyframes maintPulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
      @keyframes maintFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      @keyframes maintBar { 0%{width:0%} 100%{width:100%} }
    </style>
    <div style="animation:maintFloat 3s ease-in-out infinite;margin-bottom:24px;">
      <div style="font-size:72px;animation:maintGear 4s linear infinite;display:inline-block;">⚙️</div>
    </div>
    <div style="font-size:22px;font-weight:bold;color:#ffd54f;margin-bottom:8px;letter-spacing:1px;">Maintenance Break</div>
    <div style="font-size:14px;color:#90a4ae;margin-bottom:20px;max-width:280px;line-height:1.5;">${reasonText}</div>
    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,213,79,0.2);border-radius:14px;padding:14px 24px;margin-bottom:20px;min-width:200px;">
      ${v.endTs > 0 ?
        `<div style="font-size:11px;color:#888;margin-bottom:4px;">Ends in</div>
         <div id="maintCountdown" style="font-size:28px;font-weight:bold;color:#ffd54f;letter-spacing:2px;">—</div>` :
        `<div style="font-size:11px;color:#888;margin-bottom:4px;">Estimated end</div>
         <div style="font-size:16px;color:#ffd54f;">${v.approxText || '~soon'}</div>`
      }
    </div>
    <div style="width:200px;height:3px;background:rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
      <div style="height:100%;background:linear-gradient(90deg,#ffd54f,#ff9800);border-radius:10px;animation:maintBar 2.5s ease-in-out infinite alternate;"></div>
    </div>
    <div style="margin-top:24px;font-size:11px;color:#37474f;animation:maintPulse 2s ease-in-out infinite;">We'll be right back ✨</div>
  `;

  // Таймер обратного отсчёта
  clearInterval(_maintTimerInterval);
  if (v.endTs > 0) {
    function updateCountdown() {
      const el = document.getElementById('maintCountdown');
      if (!el) { clearInterval(_maintTimerInterval); return; }
      const left = Math.max(0, v.endTs - Date.now());
      const h = Math.floor(left / 3600000);
      const min = Math.floor((left % 3600000) / 60000);
      const sec = Math.floor((left % 60000) / 1000);
      el.textContent = h > 0
        ? `${h}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
        : `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
      if (left === 0) clearInterval(_maintTimerInterval);
    }
    updateCountdown();
    _maintTimerInterval = setInterval(updateCountdown, 1000);
  }
}

function _adminHideMaintenance() {
  clearInterval(_maintTimerInterval);
  const m = document.getElementById('maintenanceScreen');
  if (m) m.remove();
}

/* ---- Active bar refresh ---- */
function _adminUpdateActiveBar() {
  const bar = document.getElementById('apActiveStatus');
  if (!bar || !window._firebaseReady) return;
  _db.ref('admin').once('value', snap => {
    const data = snap.val() || {};
    const now = Date.now();
    const lines = [];
    if (data.tapEvent && data.tapEvent.active && data.tapEvent.end > now) {
      const left = Math.ceil((data.tapEvent.end - now) / 1000);
      lines.push(`⚡ Tap Event x${data.tapEvent.multi} — ${left}s left`);
    }
    if (data.forceMusic && data.forceMusic.track && data.forceMusic.end > now) {
      const left = Math.ceil((data.forceMusic.end - now) / 1000);
      lines.push(`🎵 Music: ${data.forceMusic.track} — ${_adminFmtLeft(data.forceMusic.end)}`);
    }
    if (data.effects && data.effects.end > now) {
      lines.push(`✨ Effects active — ${_adminFmtLeft(data.effects.end)}`);
    }
    if (data.uiChaos && data.uiChaos.end > now) {
      lines.push(`🌀 UI Chaos — ${_adminFmtLeft(data.uiChaos.end)}`);
    }
    if (data.tempSkin && data.tempSkin.end > now) {
      lines.push(`🎨 Temp Skin: ${data.tempSkin.skinId} — ${_adminFmtLeft(data.tempSkin.end)}`);
    }
    if (lines.length > 0) {
      bar.style.display = 'block';
      bar.innerHTML = '🟢 <b style="color:#a5d6a7">Active right now:</b><br>' + lines.join('<br>');
    } else {
      bar.style.display = 'none';
    }
  });
}
function _adminFmtLeft(endTs) {
  const s = Math.ceil((endTs - Date.now()) / 1000);
  if (s < 60) return `${s}s left`;
  const m = Math.floor(s / 60), sec = s % 60;
  return `${m}m ${sec}s left`;
}

/* ---- Show Poll ---- */
function _adminShowPoll(v) {
  // Remove old poll if any
  const old = document.getElementById('adminPollOverlay');
  if (old) old.remove();

  const el = document.createElement('div');
  el.id = 'adminPollOverlay';
  el.style.cssText = `
    position:fixed; top:60px; left:50%; transform:translateX(-50%);
    z-index:99998; background:rgba(8,8,24,0.97);
    border:1.5px solid #3f51b5; border-radius:16px;
    padding:16px 14px; width:min(310px,90vw);
    box-shadow:0 8px 32px rgba(0,0,0,0.8); pointer-events:all;`;

  let voted = false;
  const localVotes = {};
  v.options.forEach((_, i) => localVotes[i] = 0);
  let totalVotes = 0;

  function render() {
    const pcts = v.options.map((_, i) => totalVotes > 0 ? Math.round(localVotes[i] / totalVotes * 100) : 0);
    el.innerHTML = `
      <div style="font-weight:700;font-size:14px;color:#e8eaf6;margin-bottom:12px;text-align:center;">${v.question}</div>
      ${v.options.map((opt, i) => `
        <div onclick="${voted?'':'window._adminPollVote('+i+')'}"
          style="margin-bottom:7px;border-radius:10px;overflow:hidden;
            border:1.5px solid ${voted ? '#333' : (v.colors[i] || '#3f51b5')};
            cursor:${voted?'default':'pointer'};transition:.15s;">
          <div style="background:${v.colors[i]||'#3f51b5'};opacity:${voted?0.7:1};
            padding:9px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:13px;font-weight:600;color:#fff;">${opt}</span>
            ${voted ? `<span style="font-size:12px;color:#fff;font-weight:700;">${pcts[i]}%</span>` : ''}
          </div>
          ${voted ? `<div style="height:4px;background:rgba(255,255,255,0.1);">
            <div style="height:100%;width:${pcts[i]}%;background:${v.colors[i]||'#3f51b5'};transition:width .4s;"></div>
          </div>` : ''}
        </div>`).join('')}
      <div style="font-size:11px;color:#555;text-align:center;margin-top:4px;">${totalVotes} vote${totalVotes!==1?'s':''}</div>`;
  }

  window._adminPollVote = function(idx) {
    if (voted) return;
    voted = true;
    localVotes[idx]++;
    totalVotes++;
    render();
    // Push to Firebase
    try { _db.ref(`admin/pollVotes/${idx}`).transaction(n => (n || 0) + 1); } catch(e) {}
  };

  // Live vote subscription
  const voteRef = _db.ref('admin/pollVotes');
  voteRef.on('value', snap => {
    const data = snap.val() || {};
    totalVotes = 0;
    v.options.forEach((_, i) => { localVotes[i] = data[i] || 0; totalVotes += localVotes[i]; });
    render();
  });

  render();
  document.body.appendChild(el);

  // Auto-remove after duration
  setTimeout(() => {
    el.remove();
    try { voteRef.off(); } catch(e) {}
    try { _db.ref('admin/pollVotes').remove(); } catch(e) {}
  }, v.dur * 1000);
}

/* ---- Force Music functions ---- */
async function adminForceMusic() {
  if (!_isAdminUser()) return;
  const track = document.getElementById('apMusicTrack').value;
  const dur = Number(document.getElementById('apMusicDur').value) || 60;
  const onlineOnly = document.getElementById('apMusicOnline')?.checked || false;
  const end = Date.now() + dur * 1000;
  await _db.ref('admin/forceMusic').set({ track, end, onlineOnly, ts: Date.now() });
  setTimeout(() => _db.ref('admin/forceMusic').remove(), (dur + 10) * 1000);
  showToast(`🎵 Sent: ${track} for ${dur}s`);
  _adminUpdateActiveBar();
}
async function adminStopMusic() {
  if (!_isAdminUser()) return;
  await _db.ref('admin/forceMusic').remove();
  showToast('🎵 Music stopped');
  _adminUpdateActiveBar();
}

/* ---- Effects functions ---- */
async function adminSendEffects() {
  if (!_isAdminUser()) return;
  const effects = {};
  document.querySelectorAll('.ap-effect-strength').forEach(sel => {
    if (sel.closest('.ap-effect-row')?.querySelector('.ap-effect-check')?.checked) {
      effects[sel.dataset.effect] = sel.value;
    }
  });
  if (Object.keys(effects).length === 0) { showToast('Select at least one effect'); return; }
  const dur = Number(document.getElementById('apEffectsDur').value) || 60;
  const onlineOnly = document.getElementById('apEffectsOnline')?.checked || false;
  const end = Date.now() + dur * 1000;
  await _db.ref('admin/effects').set({ effects, end, onlineOnly, ts: Date.now() });
  setTimeout(() => _db.ref('admin/effects').remove(), (dur + 10) * 1000);
  showToast('✨ Effects sent!');
  _adminUpdateActiveBar();
}
async function adminStopEffects() {
  if (!_isAdminUser()) return;
  await _db.ref('admin/effects').remove();
  _adminClearEffects();
  showToast('Effects cleared');
  _adminUpdateActiveBar();
}
async function adminSendUIChaos() {
  if (!_isAdminUser()) return;
  const rotate = document.getElementById('apChaosRotate').value;
  const scale = document.getElementById('apChaosScale').value;
  const dur = Number(document.getElementById('apChaosDur').value) || 30;
  const onlineOnly = document.getElementById('apChaosOnline')?.checked || false;
  const end = Date.now() + dur * 1000;
  await _db.ref('admin/uiChaos').set({ rotate, scale, end, onlineOnly, ts: Date.now() });
  // НЕ удаляем запись из Firebase — каждый клиент сам следит за end через timeout
  showToast('🌀 UI Chaos sent!');
  _adminUpdateActiveBar();
}
async function adminResetUIForAll() {
  if (!_isAdminUser()) return;
  await _db.ref('admin/uiChaos').set({ rotate:'0', scale:'1', end: 0, ts: Date.now() });
  showToast('↺ UI reset sent');
}

/* ---- Effects Engine ---- */
let _adminEffectTimers = {};
let _adminEffectRAF = null;
let _adminEffectParticles = [];

function _adminApplyEffects(effects, durationMs) {
  _adminClearEffects();
  if (!effects || Object.keys(effects).length === 0) return;

  let canvas = document.getElementById('adminEffectCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'adminEffectCanvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:89000;pointer-events:none;';
    document.body.appendChild(canvas);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const sMap = { weak: 0.3, medium: 0.65, strong: 1.0 };

  _adminEffectParticles = [];

  if (effects.rain) {
    const n = Math.round(100 * (sMap[effects.rain] || 0.65));
    for (let i = 0; i < n; i++) _adminEffectParticles.push({ t:'rain', x:Math.random()*W, y:Math.random()*H, speed:5+Math.random()*8, len:10+Math.random()*18, op:0.35+Math.random()*0.4 });
  }
  if (effects.snow) {
    const n = Math.round(70 * (sMap[effects.snow] || 0.65));
    for (let i = 0; i < n; i++) _adminEffectParticles.push({ t:'snow', x:Math.random()*W, y:Math.random()*H, r:1.5+Math.random()*4, speed:0.6+Math.random()*2, drift:Math.random()*0.6-0.3, op:0.6+Math.random()*0.4 });
  }
  if (effects.coins) {
    const n = Math.round(22 * (sMap[effects.coins] || 0.65));
    const coinImg = new Image(); coinImg.src = 'kspt.png';
    for (let i = 0; i < n; i++) _adminEffectParticles.push({ t:'coin', img:coinImg, x:Math.random()*W, y:H + Math.random()*H, speed:1+Math.random()*2.5, rot:Math.random()*Math.PI*2, spin:0.02+Math.random()*0.06 });
  }
  if (effects.rays) {
    const n = Math.round(9 * (sMap[effects.rays] || 0.65));
    for (let i = 0; i < n; i++) _adminEffectParticles.push({ t:'ray', angle:(Math.PI*2/n)*i, speed:0.003+Math.random()*0.003, hue:Math.round(Math.random()*360), alpha:0, dir:1 });
  }
  if (effects.lightning) {
    const intv = effects.lightning === 'weak' ? 130 : effects.lightning === 'strong' ? 18 : 55;
    _adminEffectParticles.push({ t:'lightning', timer:0, interval:intv });
  }
  if (effects.concert) {
    const n = Math.round(7 * (sMap[effects.concert] || 0.65));
    for (let i = 0; i < n; i++) _adminEffectParticles.push({ t:'concert', x:Math.random()*W, angle:-Math.PI/2 + Math.random()*0.5-0.25, hue:Math.round(Math.random()*360), speed:0.04+Math.random()*0.06, sweep:0 });
  }
 if (effects.beat) {
    const intensity = effects.beat === 'weak' ? 3 : effects.beat === 'strong' ? 12 : 6;
    const freq = effects.beat === 'weak' ? 600 : effects.beat === 'strong' ? 180 : 350;
    _adminEffectParticles.push({ t:'beat', intensity, freq, timer:0 });
  }
  if (effects.yinyang) {
    const strength = sMap[effects.yinyang] || 0.65;
    _adminEffectParticles.push({ t:'yinyang', strength, phase:0 });
    document.body.style.filter = `grayscale(${Math.round(strength * 100)}%)`;
    window._adminYinYangActive = true;
  }
  if (effects.heatwave) {
    const spread = effects.heatwave === 'weak' ? '6px' : effects.heatwave === 'strong' ? '20px' : '12px';
    const speed  = effects.heatwave === 'weak' ? '2.5s' : effects.heatwave === 'strong' ? '0.7s' : '1.3s';
    if (!document.getElementById('_adminFireStyle')) {
      const style = document.createElement('style');
      style.id = '_adminFireStyle';
      style.textContent = `
        @keyframes _adminFireGlow {
          0%,100% { box-shadow: 0 0 4px 2px #ff4400, 0 0 ${spread} 4px #ff2200; filter: brightness(1); }
          50%      { box-shadow: 0 0 ${spread} 6px #ffaa00, 0 0 30px 8px #ff5500; filter: brightness(1.18); }
        }
        @keyframes _adminFireCoin {
          0%,100% { filter: drop-shadow(0 0 4px #ff6600) drop-shadow(0 0 8px #ff2200); }
          50%      { filter: drop-shadow(0 0 14px #ffcc00) drop-shadow(0 0 24px #ff4400) brightness(1.25); }
        }
        ._adminFire     { animation: _adminFireGlow ${speed} ease-in-out infinite !important; }
        ._adminFireCoin { animation: _adminFireCoin ${speed} ease-in-out infinite !important; }
      `;
      document.head.appendChild(style);
    }
    document.querySelectorAll('.nav-item').forEach(el => el.classList.add('_adminFire'));
    const _fc = document.getElementById('coin');
    if (_fc) _fc.classList.add('_adminFireCoin');
    window._adminFireActive = true;
  }
  if (effects.vortex) {
    const speed = effects.vortex === 'weak' ? 0.003 : effects.vortex === 'strong' ? 0.012 : 0.006;
    _adminEffectParticles.push({ t:'vortex', speed, angle:0 });
  }
  if (effects.mirror) {
    const interval = effects.mirror === 'weak' ? 420 : effects.mirror === 'strong' ? 90 : 200;
    const holdFrames = effects.mirror === 'strong' ? 60 : 30;
    _adminEffectParticles.push({ t:'mirror', timer:0, interval, holdFrames, flipped:false, holding:0 });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    _adminEffectParticles.forEach(p => {
      switch (p.t) {
        case 'rain':
          ctx.save(); ctx.globalAlpha = p.op; ctx.strokeStyle = '#88ccff'; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - 2, p.y + p.len); ctx.stroke(); ctx.restore();
          p.y += p.speed; p.x -= 1.2;
          if (p.y > H + p.len) { p.y = -p.len; p.x = Math.random() * W; }
          break;
        case 'snow':
          ctx.save(); ctx.globalAlpha = p.op; ctx.fillStyle = '#ddeeff';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
          p.y += p.speed; p.x += p.drift;
          if (p.y > H + p.r) { p.y = -p.r; p.x = Math.random() * W; }
          if (p.x < 0 || p.x > W) p.drift *= -1;
          break;
        case 'coin':
          if (p.img.complete) {
            ctx.save(); ctx.globalAlpha = 0.88;
            const sx = Math.abs(Math.cos(p.rot));
            ctx.translate(p.x, p.y); ctx.scale(sx, 1);
            ctx.drawImage(p.img, -13, -13, 26, 26);
            ctx.restore();
          }
          p.y -= p.speed; p.rot += p.spin;
          if (p.y < -30) { p.y = H + 30; p.x = Math.random() * W; }
          break;
        case 'ray':
          ctx.save(); ctx.globalAlpha = p.alpha * 0.3;
          ctx.fillStyle = `hsl(${p.hue},100%,65%)`;
          ctx.beginPath(); ctx.moveTo(W / 2, H / 2);
          ctx.arc(W / 2, H / 2, Math.max(W, H) * 1.6, p.angle, p.angle + 0.2);
          ctx.closePath(); ctx.fill(); ctx.restore();
          p.angle += p.speed; p.alpha += p.dir * 0.015;
          if (p.alpha > 1) { p.alpha = 1; p.dir = -1; }
          if (p.alpha < 0) { p.alpha = 0; p.dir = 1; }
          break;
        case 'lightning':
          p.timer++;
          if (p.timer >= p.interval) {
            p.timer = 0;
            ctx.save(); ctx.globalAlpha = 0.6; ctx.fillStyle = 'rgba(220,220,255,0.18)'; ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = '#ffffcc'; ctx.lineWidth = 2; ctx.globalAlpha = 0.9;
            ctx.beginPath();
            let lx = W * 0.2 + Math.random() * W * 0.6, ly = 0;
            ctx.moveTo(lx, ly);
            while (ly < H) { ly += 15 + Math.random() * 35; lx += Math.random() * 50 - 25; ctx.lineTo(lx, ly); }
            ctx.stroke(); ctx.restore();
          }
          break;
        case 'concert':
          ctx.save(); ctx.globalAlpha = 0.16;
          const x2 = p.x + Math.cos(p.angle + p.sweep) * H * 1.6;
          const y2 = H - Math.abs(Math.sin(p.angle + p.sweep)) * H * 1.4;
          const grad = ctx.createLinearGradient(p.x, H, x2, y2);
          grad.addColorStop(0, `hsl(${p.hue},100%,55%)`); grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.moveTo(p.x, H);
          ctx.arc(p.x, H, H * 1.5, p.angle + p.sweep - 0.13, p.angle + p.sweep + 0.13);
          ctx.closePath(); ctx.fill(); ctx.restore();
          p.sweep += p.speed; if (Math.abs(p.sweep) > 0.65) p.speed *= -1;
          break;
        case 'beat':
          p.timer++;
          if (p.timer >= Math.round(p.freq / 16)) {
            p.timer = 0;
            const app = document.querySelector('.app') || document.body;
            const dx = (Math.random() - 0.5) * p.intensity;
            const dy = (Math.random() - 0.5) * p.intensity;
            app.style.transform = `translate(${dx}px,${dy}px)`;
            setTimeout(() => { app.style.transform = ''; }, 80);
          }
          break;
        case 'heatwave':
          // CSS-based — nothing to draw on canvas
          break;
        case 'vortex':
          p.angle += p.speed;
          // Spinning translucent arcs around center
          for (let i = 0; i < 6; i++) {
            const a = p.angle + (Math.PI * 2 / 6) * i;
            const r = Math.min(W, H) * 0.38;
            ctx.save();
            ctx.globalAlpha = 0.09;
            ctx.strokeStyle = `hsl(${Math.round((a / (Math.PI * 2)) * 360 + p.angle * 50) % 360},80%,65%)`;
            ctx.lineWidth = 18;
            ctx.beginPath();
            ctx.arc(W / 2, H / 2, r * (0.5 + 0.5 * ((i % 3) / 3)), a, a + Math.PI * 0.6);
            ctx.stroke();
            ctx.restore();
          }
          // Slow rotation of entire canvas
          const app2 = document.querySelector('.app') || document.body;
          const deg = Math.sin(p.angle) * (p.speed > 0.009 ? 3 : p.speed > 0.005 ? 1.5 : 0.6);
          app2.style.transform = `rotate(${deg}deg)`;
          break;
        case 'mirror': {
          p.timer++;
          const _app = document.querySelector('.app') || document.body;
          if (!p.flipped && p.timer >= p.interval) {
            p.timer = 0; p.flipped = true; p.holding = 0;
            // чередуем горизонтальное и вертикальное
            p._axis = (p._axis === 'Y') ? 'X' : 'Y';
            _app.style.transform = `scale${p._axis || 'X'}(-1)`;
            _app.style.transition = 'transform 0.18s ease';
          }
          if (p.flipped) {
            p.holding++;
            if (p.holding >= p.holdFrames) {
              p.flipped = false;
              _app.style.transform = '';
            }
          }
          break;
        }
        case 'yinyang':
          p.phase += 0.02;
          // Animated b&w blobs on canvas
          const blobCount = 3;
          for (let b = 0; b < blobCount; b++) {
            const bx = W * 0.5 + Math.cos(p.phase + b * Math.PI * 2 / blobCount) * W * 0.3;
            const by = H * 0.5 + Math.sin(p.phase * 0.7 + b * Math.PI * 2 / blobCount) * H * 0.3;
            const grad2 = ctx.createRadialGradient(bx, by, 0, bx, by, W * 0.4);
            const isWhite = b % 2 === 0;
            grad2.addColorStop(0, isWhite ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.22)');
            grad2.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.save(); ctx.globalAlpha = p.strength * 0.8;
            ctx.fillStyle = grad2;
            ctx.beginPath(); ctx.arc(bx, by, W * 0.4, 0, Math.PI * 2);
            ctx.fill(); ctx.restore();
          }
          break;
      }
    });
    _adminEffectRAF = requestAnimationFrame(draw);
  }
  draw();

  _adminEffectTimers.main = setTimeout(() => _adminClearEffects(), durationMs);
  showToast('✨ Effects active!');
  _adminUpdateActiveBar();
}

// ===== ADMIN COUNTDOWN =====
async function adminSetCountdown() {
  const title = document.getElementById('apCountdownTitle')?.value.trim() || 'Coming soon...';
  const mins = parseFloat(document.getElementById('apCountdownMins')?.value) || 60;
  const titleColor = document.getElementById('apCountdownTitleColor')?.value || '#ffffff';
  const timerColor = document.getElementById('apCountdownTimerColor')?.value || '#ffd700';
  const size = document.getElementById('apCountdownSize')?.value || 'medium';
  const opacity = Math.min(100, Math.max(10, parseFloat(document.getElementById('apCountdownOpacity')?.value) || 80)) / 100;
  const endTs = Date.now() + mins * 60 * 1000;
  await _db.ref('admin/countdown').set({ title, titleColor, timerColor, size, opacity, end: endTs, ts: Date.now() });
  const status = document.getElementById('apCountdownStatus');
  if (status) status.textContent = `✅ Countdown started: ${mins} min`;
}

async function adminStopCountdown() {
  await _db.ref('admin/countdown').remove();
  const status = document.getElementById('apCountdownStatus');
  if (status) status.textContent = '■ Stopped.';
  _adminHideCountdown();
}

function _adminHideCountdown() {
  const el = document.getElementById('_adminCountdownWidget');
  if (el) el.remove();
  if (window._adminCountdownInterval) { clearInterval(window._adminCountdownInterval); window._adminCountdownInterval = null; }
}

function _adminShowCountdown(title, titleColor, timerColor, endTs, size, opacity) {
  _adminHideCountdown();
  const sizeMap = { small: { pad:'6px 14px', title:'11px', timer:'16px', minW:'140px' }, medium: { pad:'10px 20px', title:'12px', timer:'22px', minW:'200px' }, large: { pad:'14px 28px', title:'15px', timer:'32px', minW:'260px' } };
  const s = sizeMap[size] || sizeMap.medium;
  const op = opacity !== undefined ? opacity : 0.8;
  let widget = document.getElementById('_adminCountdownWidget');
  if (!widget) {
    widget = document.createElement('div');
    widget.id = '_adminCountdownWidget';
    document.body.appendChild(widget);
  }
  widget.style.cssText = `
    position:fixed;top:12px;left:50%;transform:translateX(-50%);
    z-index:88000;background:rgba(0,0,0,0.85);border:1px solid #333;
    border-radius:14px;padding:${s.pad};text-align:center;
    pointer-events:none;min-width:${s.minW};opacity:${op};
  `;
  widget._titleSize = s.title;
  widget._timerSize = s.timer;

  function _fmtMs(ms) {
    if (ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  function tick() {
    const left = endTs - Date.now();
    if (left <= 0) { _adminHideCountdown(); return; }
    widget.innerHTML = `
      <div style="font-size:${widget._titleSize||'12px'};font-weight:bold;color:${titleColor};margin-bottom:4px;">${title}</div>
      <div style="font-size:${widget._timerSize||'22px'};font-weight:bold;color:${timerColor};font-variant-numeric:tabular-nums;letter-spacing:2px;">${_fmtMs(left)}</div>
    `;
  }
  tick();
  window._adminCountdownInterval = setInterval(tick, 1000);
}
// ===== /ADMIN COUNTDOWN =====

// ===== FUSE LUCK =====
async function adminSetFuseLuck() {
  if (!_isAdminUser()) return;
  const mins = parseFloat(document.getElementById('apFuseLuckMins')?.value) || 30;
  const end = Date.now() + mins * 60000;
  await _db.ref('admin/fuseLuck').set({ end, ts: Date.now() });
  const s = document.getElementById('apFuseLuckStatus');
  if (s) s.textContent = `✅ Lucky Time: ${mins} min`;
}
async function adminStopFuseLuck() {
  if (!_isAdminUser()) return;
  await _db.ref('admin/fuseLuck').remove();
  const s = document.getElementById('apFuseLuckStatus');
  if (s) s.textContent = '■ Stopped.';
  _fuseLuckDeactivate();
}
function _fuseLuckActivate(endTs) {
  window._fuseLuckEnd = endTs;
  window._fuseLuckActive = true;
  // Зелёная подсветка вкладки Fuse
  const btn = document.getElementById('eastTabFuse');
  if (btn) {
    btn.style.background = 'linear-gradient(135deg,#1b5e20,#43a047)';
    btn.style.color = '#fff';
    btn.innerHTML = `<img src="luck.png" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;margin-right:4px;" onerror="this.style.display='none'">⚗️ <span data-lang-key="fuse_tab">Fuse</span> 🍀`;
  }
  // Таймер деактивации
  if (window._fuseLuckTimeout) clearTimeout(window._fuseLuckTimeout);
  const msLeft = endTs - Date.now();
  if (msLeft > 0) {
    window._fuseLuckTimeout = setTimeout(_fuseLuckDeactivate, msLeft);
  }
}
function _fuseLuckDeactivate() {
  window._fuseLuckActive = false;
  window._fuseLuckEnd = 0;
  if (window._fuseLuckTimeout) clearTimeout(window._fuseLuckTimeout);
  const btn = document.getElementById('eastTabFuse');
  if (btn) {
    btn.style.background = '#111';
    btn.style.color = '#7c3aed';
    btn.innerHTML = `⚗️ <span data-lang-key="fuse_tab">Fuse</span>`;
  }
}
// ===== /FUSE LUCK =====

function _adminClearEffects() {
  if (_adminEffectRAF) { cancelAnimationFrame(_adminEffectRAF); _adminEffectRAF = null; }
  const c = document.getElementById('adminEffectCanvas');
  if (c) c.remove();
  _adminEffectParticles = [];
  if (_adminEffectTimers.main) { clearTimeout(_adminEffectTimers.main); delete _adminEffectTimers.main; }
  // Clear beat transform
  const app = document.querySelector('.app') || document.body;
  app.style.transform = '';
// Clear fire effect
  if (window._adminFireActive) {
    document.querySelectorAll('._adminFire').forEach(el => el.classList.remove('_adminFire'));
    document.querySelectorAll('._adminFireCoin').forEach(el => el.classList.remove('_adminFireCoin'));
    const _fs = document.getElementById('_adminFireStyle');
    if (_fs) _fs.remove();
    window._adminFireActive = false;
  }
  // Clear yinyang grayscale
  if (window._adminYinYangActive) {
    document.body.style.filter = '';
    window._adminYinYangActive = false;
  }
  // Clear vortex / mirror transform
  const _vortexApp = document.querySelector('.app') || document.body;
  _vortexApp.style.transform = '';
  _vortexApp.style.transition = '';
}

/* ---- UI Chaos ---- */
function _adminApplyUIChaos(rotate, scale, durationMs) {
  const app = document.querySelector('.app') || document.body;
  app.style.transition = 'transform 0.7s cubic-bezier(.34,1.56,.64,1)';
  app.style.transform = `rotate(${rotate}deg) scale(${scale})`;
  app.style.transformOrigin = 'center center';
  _adminShowOverlay(`🌀 UI Chaos: rotate ${rotate}° × ${scale}`, '#f97316', 3000);
  clearTimeout(window._adminChaosTimeout);
  window._adminChaosTimeout = setTimeout(() => _adminResetUIChaos(), durationMs);
  _adminUpdateActiveBar();
}
function _adminResetUIChaos() {
  const app = document.querySelector('.app') || document.body;
  app.style.transition = 'transform 0.5s ease';
  app.style.transform = '';
  _adminUpdateActiveBar();
}

/* ---- Show overlay banner ---- */
function _adminShowOverlay(text, color, durationMs) {
  let el = document.getElementById('adminBroadcastOverlay');
  if (!el) {
    el = document.createElement('div');
    el.id = 'adminBroadcastOverlay';
    el.style.cssText = `
      position:fixed; top:0; left:0; right:0; z-index:99999;
      padding:12px 16px; text-align:center; font-size:15px; font-weight:700;
      background:rgba(0,0,0,0.82); backdrop-filter:blur(6px);
      border-bottom:2px solid rgba(255,255,255,0.15);
      pointer-events:none; transition:opacity .4s;
      display:flex; align-items:center; justify-content:center; gap:10px;
    `;
    document.body.appendChild(el);
  }
  el.innerHTML = `<img src="kspt.png" style="width:20px;height:20px;"> <span style="color:${color}">${text}</span>`;
  el.style.opacity = '1';
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => { el.style.opacity='0'; }, durationMs);
}

/* ---- Apply tap event ---- */
let _adminEventActive = false;
function _adminApplyTapEvent(v) {
  if (_adminEventActive) return; // already applied this session
  _adminEventActive = true;
  // Force background
  if (v.bg && v.bg !== 'default') {
    const bgMap = {
      default:'none', forest:"url('forest.png')", space:"url('star.png')",
      ric:"url('ric.png')", heaven:"url('heaven.png')", bug:"url('bug.png')",
      chrisp:"url('chrisp.png')", hell:"url('hell.png')", math:"url('math.png')",
      xfone:"url('xfone.png')", code:"url('code.png')", cosmops:"url('cosmops.png')", zoo:"url('zoo.png')", diamond:"url('diamf.png')",
      ligting:"url('ligting.png')", fire:"url('fire.png')", ogon:"url('ogon.png')",
      king:"url('king.png')", castle:"url('castle.png')", admin:"url('admin.png')",
      meme:"url('meme.png')", hole:"url('hole.png')",
      waterbomb:"url('waterbomb.png')", dirt:"url('dirt.png')", bank:"url('bank.png')", bunny:"url('bunn.png')", bg_pixel_games:"url('mine.png')",
      elit:"url('elit.png')", alone:"url('one.png')", scary:"url('knife.png')"
    };
    document.body.style.backgroundImage = bgMap[v.bg] || 'none';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    window._adminEventBgForced = true;
  }
  // Apply multiplier
  window._adminEventMulti = v.multi || 1;
  window._adminEventEndTs = v.end;
  _adminEventTimerDisplay(v.end);
  showToast(`⚡ TAP EVENT x${v.multi}!`);
}
function _adminClearTapEvent() {
  if (!_adminEventActive) return;
  _adminEventActive = false;
  window._adminEventMulti = 1;
  window._adminEventBgForced = false;
  window._adminEventEndTs = 0;
  if (_adminEventInterval) { clearInterval(_adminEventInterval); _adminEventInterval = null; }
  const el = document.getElementById('adminEventTimer');
  if (el) el.remove();
  if (typeof updateBackground === 'function') updateBackground();
}
function _adminEventTimerDisplay(endTs) {
  _adminGlobalStatusUpdate();
}
function _adminGlobalStatusUpdate() {
  clearInterval(window._adminGlobalStatusInterval);
  window._adminGlobalStatusInterval = setInterval(function() {
    const now = Date.now();
    const lines = [];

    if (window._adminEventEndTs && now < window._adminEventEndTs) {
      const left = window._adminEventEndTs - now;
      const m = Math.floor(left/60000), s = Math.floor((left%60000)/1000);
      lines.push(`⚡ Event: ${m}:${String(s).padStart(2,'0')}`);
    } else if (window._adminEventEndTs && now >= window._adminEventEndTs) {
      window._adminEventEndTs = 0;
      _adminClearTapEvent();
    }

    if (window._adminForcedMusic && now < window._adminForcedMusic.end) {
      const left = window._adminForcedMusic.end - now;
      const m = Math.floor(left/60000), s = Math.floor((left%60000)/1000);
      lines.push(`🎵 Music: ${m}:${String(s).padStart(2,'0')}`);
    }

    if (window._adminEffectsEndTs && now < window._adminEffectsEndTs) {
      const left = window._adminEffectsEndTs - now;
      const m = Math.floor(left/60000), s = Math.floor((left%60000)/1000);
      lines.push(`✨ Effects: ${m}:${String(s).padStart(2,'0')}`);
    }

    if (window._adminChaosEndTs && now < window._adminChaosEndTs) {
      const left = window._adminChaosEndTs - now;
      const m = Math.floor(left/60000), s = Math.floor((left%60000)/1000);
      lines.push(`🌀 UI Chaos: ${m}:${String(s).padStart(2,'0')}`);
    }

    if (window._adminTempSkin && now < window._adminTempSkin.end) {
      const left = window._adminTempSkin.end - now;
      const m = Math.floor(left/60000), s = Math.floor((left%60000)/1000);
      lines.push(`🎨 Skin: ${m}:${String(s).padStart(2,'0')}`);
    }

    // Always get fresh reference to element
    let el = document.getElementById('adminEventTimer');

    if (lines.length === 0) {
      if (el) el.remove();
      clearInterval(window._adminGlobalStatusInterval);
      window._adminGlobalStatusInterval = null;
      return;
    }

    // Create if not exists
    if (!el) {
      el = document.createElement('div');
      el.id = 'adminEventTimer';
      el.style.cssText = `
        position:fixed; bottom:90px; left:14px; z-index:8999;
        background:rgba(0,0,0,0.82); border:1px solid #ff9800;
        border-radius:10px; padding:6px 12px; font-size:12px;
        color:#ff9800; font-weight:bold; pointer-events:none; line-height:1.8;
      `;
      document.body.appendChild(el);
    }
    el.innerHTML = lines.join('<br>');
  }, 500);
}

/* ---- Apply opening ---- */
function _adminApplyOpening(type, v) {
  if (!d) return;
  switch(type) {
    case 'noobBox':
      if (!d.noobBox) d.noobBox = { obtained: false, opened: false, taps: 0 };
      d.noobBox.obtained = true; d.noobBox.opened = false; d.noobBox.taps = 0;
      save(); showToast('🎁 Noob Box from Admin!');
      if (typeof startNoobBoxSequence === 'function') startNoobBoxSequence();
      break;
    case 'capsule':
      if (!d.capsule) d.capsule = {};
      d.capsule.lastOpen = 0;
      d.capsule.firstOpen = true; // bypass cooldown check
      save(); showToast('🎁 Capsule from Admin!');
      if (typeof startCapsuleSequence === 'function') startCapsuleSequence();
      break;
    case 'goldCapsule':
      if (!d.goldCapsule) d.goldCapsule = {};
      d.goldCapsule.obtained = true; d.goldCapsule.opened = false; d.goldCapsule.taps = 0;
      d.goldCapsule.lastOpen = 0;
      save(); showToast('🥇 Gold Capsule from Admin!');
      if (typeof startGoldCapsuleSequence === 'function') startGoldCapsuleSequence();
      break;
    case 'glitchFragment':
      _giveGlitchFragment();
      _adminShowOverlay('🌀 Glitch Fragment from Admin!', '#ff00ff', 3000);
      break;
    case 'diamondCapsule':
      if (!d.diamondCapsule) d.diamondCapsule = { obtained: false, taps: 0 };
      d.diamondCapsule.obtained = true; d.diamondCapsule.taps = 0;
      save(); if (typeof ui === 'function') ui();
      _adminShowOverlay('💎 Diamond Capsule from Admin!', '#00bfff', 4000);
      setTimeout(() => startDiamondCapsuleSequence(), 500);
      break;
    case 'miliBox':
      if (!d.miliBox) d.miliBox = { obtained: false, taps: 0 };
      d.miliBox.obtained = true; d.miliBox.taps = 0;
      save(); if (typeof ui === 'function') ui();
      _adminShowOverlay('🎀 Cuteness Box from Admin!', '#ff69b4', 4000);
      setTimeout(() => startMiliBoxSequence(), 500);
      break;
    case 'glitchBox':
      if (!d.glitchBox) d.glitchBox = { taps: 0, doubled: 1, duplicates: 0, cooldownDays: 20, lastOpen: 0, firstOpen: true };
      d.glitchBox.firstOpen = true;
      d.glitchBox.taps = 0;
      d.glitchBox.doubled = 1;
      d.glitchBox.duplicates = 0;
      d.glitchBox._dup10Checked = false;
      d.glitchBox._dup20Checked = false;
      d.glitchRewards = [];
      d.glitchBoxIsOpening = false; // KEY FIX: сброс защитного флага
      save(); showToast('🎁 Glitch Box from Admin!');
      setTimeout(() => {
        const _gm = document.getElementById('glitchModal');
        if (_gm) {
          _gm.classList.add('active');
          if (typeof updateGlitchModal === 'function') updateGlitchModal();
        }
      }, 80);
      break;
    case 'keyBox':
      if (!d.keyBox) d.keyBox = { taps: 0 };
      d.keyBox.taps = 0;
      save(); showToast('🗝️ Key Box from Admin!');
      if (typeof startKeyBoxSequence === 'function') startKeyBoxSequence();
      break;
    case 'bombBox':
      if (!d.bombBox) d.bombBox = { obtained: false };
      d.bombBox.obtained = true;
      save(); showToast('💣 Bomb Box from Admin!');
      if (typeof startBombBoxSequence === 'function') startBombBoxSequence();
      break;
    case 'easterEgg':
      if (!d.easterEgg) d.easterEgg = { obtained: false, swipes: 0 };
      d.easterEgg.obtained = true; d.easterEgg.swipes = 0;
      save(); showToast(t('easter_egg_obtained'));
      if (typeof startEasterEggSequence === 'function') startEasterEggSequence();
      break;
    case 'giftBox_kspt':
    case 'giftBox_noobBox':
    case 'giftBox_bombBox':
    case 'giftBox_tickets':
    case 'giftBox_letter': {
      const _giftContentMap = {
        giftBox_kspt:    { type: 'kspt' },
        giftBox_noobBox: { type: 'noobBox' },
        giftBox_bombBox: { type: 'bombBox' },
        giftBox_tickets: { type: 'tickets' },
        giftBox_letter:  { type: 'letter', text: v?.letterText || '📨 Message from Admin', emoji: v?.letterEmoji || '❤️' }
      };
      if (!d.giftBox) d.giftBox = {};
      d.giftBox.obtained = true;
      d.giftBox.fromName = 'Admin';
      d.giftBox.content  = _giftContentMap[type];
      save(); showToast(t('gift_box_obtained'));
      if (typeof startGiftBoxSequence === 'function') startGiftBoxSequence();
      break;
    }
    case 'safeNoob':
    case 'safeIron':
    case 'safeElite': {
      const st = type.replace('safe','').toLowerCase();
      if (!d.safe) d.safe = {};
      d.safe.lastOpen = 0;
      save(); showToast(`🔒 ${st} Safe from Admin!`);
      // Принудительно показываем вкладку ivent чтобы safeOpenModal был виден
      const _iventTab = document.getElementById('iventTab');
      const _mainMenu = document.getElementById('mainMenu');
      if (_iventTab && _mainMenu) {
        document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
        _iventTab.style.display = 'block';
        if (typeof initQuestsTab === 'function') initQuestsTab();
      }
      setTimeout(() => {
        if (typeof _startSafeOpening === 'function') _startSafeOpening(st);
      }, 150);
      break;
    }

      case 'keyYellow':
    case 'keyGreen':
    case 'keyRed':
    case 'keyBlue':
    case 'keyBlack':
    case 'keyAdmin': {
      if (!d.keys) d.keys = {};
      const keyMap = { keyYellow:'yellow', keyGreen:'green', keyRed:'red', keyBlue:'blue', keyBlack:'black', keyAdmin:'admin', keyDiamond:'diamond' };
      const k = keyMap[type];
      if (k === 'admin') {
        d.keys.admin = 1; // максимум 1
      } else {
        d.keys[k] = (d.keys[k] || 0) + 1;
      }
      const emoji = { yellow:'🟡', green:'🟢', red:'🔴', blue:'🔵', black:'⚫', admin:'👑' };
      save(); if (typeof ui === 'function') ui();
      _adminShowOverlay(`${emoji[k]} Admin gave you a ${k} key!`, '#ffd700', 4000);
      break;
    }
      case 'fortuneWheel':
      window._freeWheelSpin = true;
      // Reset cooldown so openFortuneWheel passes all checks
      if (!d.fortuneWheel) d.fortuneWheel = { spinsUsed: 0, lastResetTime: 0 };
      d.fortuneWheel.spinsUsed = 0;
      d.fortuneWheel.lastResetTime = 0;
      save();
      showToast('🎡 Free Wheel Spin from Admin!');
      // Open modal directly, bypassing rate/cooldown guards
      setTimeout(() => {
        const modal = document.getElementById('fortuneWheelModal');
        if (modal) {
          modal.style.display = 'flex';
          const resEl = document.getElementById('fortuneWheelResult');
          if (resEl) resEl.textContent = '';
          const spinBtn = document.getElementById('fortuneWheelSpinBtn');
          if (spinBtn) spinBtn.disabled = false;
          const priceLabel = document.getElementById('fortuneWheelModalPrice');
          if (priceLabel) priceLabel.textContent = '🎁 Free spin from Admin!';
          if (typeof preloadWheelImages === 'function')
            preloadWheelImages(() => { if (typeof drawWheel === 'function') drawWheel(typeof wheelCurrentAngle !== 'undefined' ? wheelCurrentAngle : 0); });
        }
      }, 100);
      break;
  }
}

/* ---- Apply skip cooldown ---- */
function _adminApplySkipCooldown(type) {
  if (!d) return;
  if (type === 'capsule' || type === 'all') {
    if (!d.capsule) d.capsule = {};
    d.capsule.lastOpen = 0;
  }
  if (type === 'glitchBox' || type === 'all') {
    if (!d.glitch) d.glitch = {};
    d.glitch.lastOpen = 0;
  }
  if (type === 'fortuneWheel' || type === 'all') {
    if (!d.fortuneWheel) d.fortuneWheel = { spinsUsed: 0, lastResetTime: 0 };
    d.fortuneWheel.lastResetTime = 0;
    d.fortuneWheel.spinsUsed = 0;
  }
  if (type === 'tickets' || type === 'all') {
    if (typeof gameTickets !== 'undefined') {
      gameTickets.nextRefill = 0;
      if (typeof saveTickets === 'function') saveTickets();
    }
  }
  if (type === 'boost' || type === 'all') {
    if (!d.boost) d.boost = {};
    d.boost.cdEnd = 0;
  }
  if (type === 'safe' || type === 'all') {
    if (!d.safe) d.safe = {};
    d.safe.lastOpen = 0;
  }
  if (type === 'fuseFusing' || type === 'all') {
    if (d.fuse?.active) {
      d.fuse.fusingEnd = Date.now() - 1;
      if (typeof _fuseCheckComplete === 'function') setTimeout(() => _fuseCheckComplete(), 100);
    }
  }
  save();
  if (typeof ui === 'function') ui();
  showToast(`⏩ Cooldown skipped (${type})!`);
}

/* ---- Apply mod action (personal) ---- */
function _adminApplyModAction(v) {
  if (!v || !v.action) return;
  switch(v.action) {
    case 'kspt':
      if (!d) return;
      if (v.mode === 'set') d.tokens = v.val;
      else d.tokens = (d.tokens || 0) + v.val;
      save(); if (typeof ui==='function') ui();
      _adminShowOverlay(`👑 Admin: KSPT ${v.mode==='set'?'set to':'+ '}${v.val}`, '#ffd700', 5000);
      break;
    case 'ek':
      if (!d) return;
      if (v.mode === 'set') d.ek = v.val;
      else { d.ek = (d.ek || 0) + v.val; d.ekLifetime = (d.ekLifetime || 0) + v.val; }
      save(); if (typeof ui==='function') ui();
      _adminShowOverlay(`👑 Admin: EK ${v.mode==='set'?'set to':'+ '}${v.val}`, '#00e5ff', 5000);
      break;
    case 'ban':
      d.adminBanned = true; save();
      document.body.innerHTML = `
        <div id="adminBanScreen" style="display:flex;flex-direction:column;align-items:center;
          justify-content:center;height:100vh;background:#0b0b0b;color:red;
          font-size:22px;font-weight:bold;text-align:center;padding:20px;">
          🚫 You have been banned by an admin.
        </div>`;
      break;
    case 'unban':
      d.adminBanned = false;
      cheatStage = 0;
      localStorage.setItem('kspt_cheat_stage', '0');
      save();
      // Reload the page — cleanest way to restore DOM after ban
      location.reload();
      break;
    case 'giveOpening':
      _adminApplyOpening(v.type, v);
      break;
    case 'giveEKSkinMod': {
      try {
        const raw = localStorage.getItem('ekshop_owned');
        const owned = raw ? JSON.parse(raw) : {};
        if (v.take) {
          delete owned[v.skinId];
        } else {
          owned[v.skinId] = true;
        }
        localStorage.setItem('ekshop_owned', JSON.stringify(owned));
        // Синхронизируем в d тоже
        if (d) { d.ekshop_owned = owned; save(); }
        if (typeof ui === 'function') ui();
        _adminShowOverlay(v.take ? `🛒 EK skin "${v.skinId}" removed` : `🛒 Admin gave EK skin: ${v.skinId}!`, '#ffd54f', 4000);
      } catch(e) { console.warn('giveEKSkinMod failed', e); }
      break;
    }
    case 'giveFuseSkinMod':
      if (!d) return;
      if (!d.fuseSkins) d.fuseSkins = {};
      if (v.take) {
        delete d.fuseSkins[v.skinId];
      } else {
        d.fuseSkins[v.skinId] = true;
      }
      save(); if (typeof ui === 'function') ui();
      _adminShowOverlay(v.take ? `⚗️ Fuse skin "${v.skinId}" removed` : `⚗️ Admin gave Fuse skin: ${v.skinId}!`, '#4fc3f7', 4000);
      break;
    case 'giveSkinMod':
      if (!d) return;
      if (!d.skins) d.skins = {};
      if (v.take) {
        delete d.skins[v.skinId];
        if (d.secretSkins) delete d.secretSkins[v.skinId];
        if (d.skin === v.skinId) d.skin = 'default';
      } else {
        d.skins[v.skinId] = 1;
      }
      save(); if (typeof ui === 'function') ui();
      if (typeof updateSkinButtons === 'function') updateSkinButtons();
      _adminShowOverlay(v.take ? `🎨 Skin "${v.skinId}" removed` : `🎨 Admin gave skin: ${v.skinId}!`, '#c084fc', 4000);
      break;
    case 'giveTickets':
      if (typeof gameTickets !== 'undefined') {
        gameTickets.current = gameTickets.current + (v.count||1);
        if (typeof saveTickets==='function') saveTickets();
        if (typeof updateTicketsUI==='function') updateTicketsUI();
      }
      _adminShowOverlay(`🎫 Admin gave you ${v.count} tickets!`, '#fff', 5000);
      break;
    case 'takeTickets':
      if (typeof gameTickets !== 'undefined') {
        gameTickets.current = Math.max(0, gameTickets.current - (v.count||1));
        if (typeof saveTickets==='function') saveTickets();
        if (typeof updateTicketsUI==='function') updateTicketsUI();
      }
      _adminShowOverlay(`➖ Admin removed ${v.count} tickets`, '#ff9800', 5000);
      break;
    case 'setRank':
      d.customRank = v.rank || null;
      save();
      if (typeof pushMyLeaderboardData === 'function') pushMyLeaderboardData();
      _adminShowOverlay(`🏅 Your rank: ${v.rank}`, '#ffd700', 4000);
      break;
    case 'message':
      _adminShowOverlay(v.text, v.color||'#fff', (v.dur||5)*1000);
      break;
    case 'giveSkin':
      if (!d) return;
      if (!d.skins) d.skins = {};
      d.skins[v.skinId] = 1;
      save(); if (typeof ui==='function') ui();
      _adminShowOverlay(`🎨 Admin gave you skin: ${v.skinId}!`, '#c084fc', 5000);
      break;
    case 'eggCoins':
      if (!d) return;
      if (v.mode === 'set') d.eggCoins = v.val;
      else d.eggCoins = Math.max(0, (d.eggCoins || 0) + v.val);
      save(); if (typeof _eastUpdateEggBalanceUI === 'function') _eastUpdateEggBalanceUI();
      _adminShowOverlay(`🥚 Egg Coins ${v.mode==='set'?'set to':'+ '}${v.val}`, '#ff6b6b', 5000);
      break;
    case 'verify':
      d.verified = v.grant ? true : false;
      save();
      if (typeof pushMyLeaderboardData === 'function') pushMyLeaderboardData();
      if (typeof renderProfileTab === 'function') renderProfileTab();
      _adminShowOverlay(v.grant ? '✅ You are now Verified!' : '✕ Verified removed', '#ffd700', 5000);
      break;
    case 'clearGameRecord':
      if (!d) return;
      if (!d.gameRecords) d.gameRecords = {};
      delete d.gameRecords[v.game];
      save();
      if (typeof pushMyLeaderboardData === 'function') pushMyLeaderboardData();
      _adminShowOverlay('Your "' + v.game + '" record was reset by admin', '#ff7043', 5000);
      break;
  }
}

/* Hook into tap multiplier — call this from the existing tap handler */
function _adminGetEventMulti() {
  return (window._adminEventMulti && window._adminEventMulti > 1) ? window._adminEventMulti : 1;
}

/* Auto-start listener on load */
document.addEventListener('DOMContentLoaded', function() {
  _adminInjectButton();
  _startAdminListener();
  // Запускаем слушатель реакций сразу при старте, не ждём открытия профиля
  setTimeout(_checkPendingReactions, 1500);
  setTimeout(_checkPendingGifts, 1500);
});
// Also call immediately in case DOMContentLoaded already fired
_adminInjectButton();

// ==========================================
// GIFT BOX
// ==========================================
let _giftTaps = 0;
let _giftOpening = false;

function startGiftBoxSequence() {
  if (_giftOpening) return;
  if (!d.giftBox || !d.giftBox.obtained) { return; }
  _giftOpening = true;
  _giftTaps = 0;
  const modal = document.getElementById('giftBoxModal');
  const img   = document.getElementById('giftBoxImg');
  const hint  = document.getElementById('giftBoxHint');
  if (!modal || !img) { _giftOpening = false; return; }
  img.src = 'gifi.png';
  hint.textContent = `Tap to unwrap! (0/10)`;
  modal.classList.add('active');
  img.removeEventListener('click', _giftTapHandler);
  img.addEventListener('click', _giftTapHandler);
}

function _giftTapHandler() {
  const now = Date.now();
  if (window._giftLastTap && now - window._giftLastTap < 100) return;
  window._giftLastTap = now;

  _giftTaps++;
  const img  = document.getElementById('giftBoxImg');
  const hint = document.getElementById('giftBoxHint');

  // Анимация нажатия — лёгкое уменьшение
  img.style.transform = 'scale(0.88)';
  setTimeout(() => { img.style.transform = 'scale(1)'; }, 130);

  if (navigator.vibrate) navigator.vibrate(15);

  hint.textContent = `Tap to unwrap! (${_giftTaps}/10)`;

  if (_giftTaps >= 10) {
    hint.textContent = 'Opening...';
    img.removeEventListener('click', _giftTapHandler);
    img.src = 'gifi1.png';
    setTimeout(() => _openGiftBox(), 400);
  }
}

function _openGiftBox() {
  const modal = document.getElementById('giftBoxModal');
  const gift  = d.giftBox;
  if (!gift) return;

  const whiteFade = document.getElementById('whiteFade');
  if (whiteFade) { whiteFade.classList.add('active'); setTimeout(() => whiteFade.classList.remove('active'), 250); }

  const fromName = gift.fromName || '???';
  const type     = gift.content?.type || 'kspt';

  let rewardText = '', rewardImg = 'gifi.png';

  switch (type) {
    case 'kspt': {
      const amt = Math.round(getHourlyRate());
      d.tokens += amt;
      rewardText = `🎁 ${fromName} sent you +${amt} KSPT!`;
      rewardImg = 'kspt.png';
      break;
    }
    case 'noobBox':
      if (!d.noobBox) d.noobBox = { obtained: false, opened: false, taps: 0 };
      d.noobBox.obtained = true; d.noobBox.opened = false; d.noobBox.taps = 0;
      rewardText = `🎁 ${fromName} sent you a Noob Box!`;
      rewardImg = 'noob.png';
      break;
    case 'bombBox':
      if (!d.bombBox) d.bombBox = { obtained: false };
      d.bombBox.obtained = true;
      rewardText = `🎁 ${fromName} sent you a Bomb Box!`;
      rewardImg = 'bomb.png';
      break;
    case 'tickets':
      if (typeof gameTickets !== 'undefined') {
        gameTickets.current = Math.min(gameTickets.max || 10, (gameTickets.current || 0) + 3);
        if (typeof saveTickets === 'function') saveTickets();
        if (typeof updateTicketsUI === 'function') updateTicketsUI();
      }
      rewardText = `🎁 ${fromName} sent you 3 tickets!`;
      rewardImg = 'ticket.png';
      break;
    case 'letter':
      rewardText = `💌 Letter from ${fromName}!`;
      rewardImg = 'gifi1.png';
      break;
  }

  d.giftBox.obtained = false;
  _giftTaps = 0;
  _giftOpening = false;
  save();
  if (modal) modal.classList.remove('active');

  if (type === 'letter') {
    _showGiftLetter(fromName, gift.content.text || '', gift.content.emoji || '❤️');
  } else {
    showReward(rewardText, rewardImg);
    // После закрытия попапа награды — запускаем бокс если нужно
    if (type === 'noobBox' || type === 'bombBox') {
      const btn = document.querySelector('#rewardPopup button');
      if (btn) {
        const _origOnclick = btn.onclick;
        btn.onclick = () => {
          document.getElementById('rewardPopup').style.display = 'none';
          setTimeout(() => {
            if (type === 'noobBox' && typeof startNoobBoxSequence === 'function') startNoobBoxSequence();
            if (type === 'bombBox' && typeof startBombBoxSequence === 'function') startBombBoxSequence();
          }, 400);
        };
      }
    }
  }
  ui();
}

function _showGiftLetter(fromName, text, emoji) {
  const m = document.getElementById('giftLetterModal');
  if (!m) return;
  document.getElementById('giftLetterEmoji').textContent = emoji;
  document.getElementById('giftLetterFrom').textContent = '— from ' + fromName + ' —';
  document.getElementById('giftLetterText').textContent = text;
  // перезапускаем анимацию
  const inner = document.getElementById('giftLetterInner');
  inner.style.animation = 'none';
  requestAnimationFrame(() => { inner.style.animation = ''; });
  m.style.display = 'flex';
}

// ===== ОТПРАВКА ПОДАРКА =====
const GIFT_COOLDOWN_MS = 3 * 24 * 3600 * 1000; // 3 дня

function openGiftSendModal(targetUid) {
  const isFriend = !!(d.friends && d.friends[targetUid]);
  if (!isFriend) { showToast('🎁 Friends only!'); return; }

  // Проверка кулдауна
  const lastSent = (d.giftSentLog || {})[targetUid] || 0;
  const remaining = GIFT_COOLDOWN_MS - (Date.now() - lastSent);
  if (remaining > 0) {
    const h = Math.floor(remaining / 3600000);
    const min = Math.floor((remaining % 3600000) / 60000);
    showToast(`⏳ Cooldown: ${h}h ${min}m`); return;
  }

  let m = document.getElementById('giftSendModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'giftSendModal';
    m.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.8);display:flex;align-items:flex-end;';
    m.onclick = e => { if (e.target === m) m.remove(); };
    document.body.appendChild(m);
  }

  const friendName = d.friends[targetUid]?.name || targetUid;

  m.innerHTML = `
    <div style="background:#111;border-radius:18px 18px 0 0;padding:20px;width:100%;border-top:1px solid #333;max-height:85vh;overflow-y:auto;">
      <div style="font-weight:bold;font-size:16px;margin-bottom:4px;text-align:center;">🎁 Send Gift</div>
      <div style="font-size:12px;color:#888;text-align:center;margin-bottom:16px;">to ${friendName} · costs 100 KSPT</div>

      <div id="giftTypeSelector" style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
        ${[
          { type:'kspt',    label:'💰 1h Income',   desc:'Your current hourly rate' },
          { type:'noobBox', label:'📦 Noob Box',     desc:'A mystery box' },
          { type:'bombBox', label:'💣 Bomb Box',     desc:'Explosive surprise' },
          { type:'tickets', label:'🎫 3 Tickets',   desc:'For mini-games' },
          { type:'letter',  label:'💌 Letter',       desc:'Write a personal message' },
        ].map(o => `
          <div onclick="_giftSelectType('${o.type}',this)"
            style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#1a1a1a;border:2px solid #333;border-radius:10px;cursor:pointer;"
            data-gtype="${o.type}">
            <div style="font-size:22px;">${o.label.split(' ')[0]}</div>
            <div><div style="font-weight:bold;font-size:13px;">${o.label}</div><div style="font-size:11px;color:#777;">${o.desc}</div></div>
          </div>`).join('')}
      </div>

      <div id="giftLetterCompose" style="display:none;margin-bottom:12px;">
        <div style="font-size:12px;color:#aaa;margin-bottom:6px;">Choose emoji:</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;" id="giftEmojiPicker">
          ${['❤️','💛','💚','💙','💜','🧡','🖤','🤍','🌹','🌟','✨','🎉','🌸','🦋','🕊️'].map(e =>
            `<span onclick="_giftPickEmoji('${e}',this)" style="font-size:22px;cursor:pointer;padding:4px;border-radius:6px;">${e}</span>`
          ).join('')}
        </div>
        <textarea id="giftLetterInput" maxlength="250" rows="4"
          style="width:100%;background:#1a1a1a;border:1px solid #333;color:#fff;border-radius:10px;padding:8px;font-size:13px;resize:none;box-sizing:border-box;"
          placeholder="Write your message (5–250 chars)..."></textarea>
        <div style="font-size:10px;color:#555;text-align:right;margin-top:2px;">max 250</div>
      </div>

      <button onclick="_giftSendConfirm('${targetUid}')"
        style="width:100%;padding:12px;background:linear-gradient(135deg,#e91e8c,#ff6b35);color:#fff;font-weight:bold;border:none;border-radius:10px;cursor:pointer;font-size:15px;">
        Send Gift 🎁 (100 KSPT)
      </button>
    </div>`;

  window._giftSelectedType = 'kspt';
  window._giftSelectedEmoji = '❤️';
  m.style.display = 'flex';
}

function _giftSelectType(type, el) {
  window._giftSelectedType = type;
  document.querySelectorAll('#giftTypeSelector [data-gtype]').forEach(e => e.style.border = '2px solid #333');
  el.style.border = '2px solid #e91e8c';
  const compose = document.getElementById('giftLetterCompose');
  if (compose) compose.style.display = type === 'letter' ? 'block' : 'none';
}

function _giftPickEmoji(emoji, el) {
  window._giftSelectedEmoji = emoji;
  document.querySelectorAll('#giftEmojiPicker span').forEach(e => e.style.background = 'transparent');
  el.style.background = 'rgba(233,30,140,0.25)';
}

function _giftSendConfirm(targetUid) {
  if ((d.tokens || 0) < 100) { showToast('Not enough KSPT (need 100)'); return; }
  const type = window._giftSelectedType || 'kspt';
  if (type === 'letter') {
    const text = document.getElementById('giftLetterInput')?.value.trim() || '';
    if (text.length < 5) { showToast('Message too short (min 5)'); return; }
    if (text.length > 250) { showToast('Message too long (max 250)'); return; }
  }

  if (!window._firebaseReady || !window._firebaseDB) { showToast('Firebase not available'); return; }

  d.tokens -= 100;
  if (!d.giftSentLog) d.giftSentLog = {};
  d.giftSentLog[targetUid] = Date.now();
  save();

  const myName = _getMyName();
  const content = { type };
  if (type === 'letter') {
    content.text  = document.getElementById('giftLetterInput')?.value.trim();
    content.emoji = window._giftSelectedEmoji || '❤️';
  }

  window._firebaseRef(window._firebaseDB, `giftBox/${targetUid}`).set({
    fromUid: getMyUid(), fromName: myName, content, ts: Date.now()
  });

  document.getElementById('giftSendModal')?.remove();
  showToast('🎁 Gift sent!');
  ui();
}

// ===== СЛУШАТЕЛЬ ВХОДЯЩИХ ПОДАРКОВ =====
let _giftListenerActive = false;

function _checkPendingGifts() {
  if (!window._firebaseReady || !window._firebaseDB) return;
  const myUid = getMyUid();
  if (!myUid || myUid === 'local') return;
  if (_giftListenerActive) return;
  _giftListenerActive = true;

  window._firebaseRef(window._firebaseDB, `giftBox/${myUid}`).on('value', snap => {
    const item = snap?.val();
    if (!item) return;
    if (!d.giftBox) d.giftBox = {};
    d.giftBox.obtained = true;
    d.giftBox.fromName = item.fromName || '???';
    d.giftBox.content  = item.content || { type: 'kspt' };
    save();
    snap.ref.remove();
    // Показываем тост и сразу запускаем открытие
    showToast(`🎁 Gift from ${item.fromName}!`);
    setTimeout(() => startGiftBoxSequence(), 800);
  });
}
// ==========================================
// END GIFT BOX
// ==========================================

// ==========================================
// BOMB BOX
// ==========================================

let _bombHoldTimer = null;
let _bombShakeInterval = null;
let _bombExploding = false;

function startBombBoxSequence() {
  if (_bombExploding) return;
  if (!d.bombBox || !d.bombBox.obtained) { return; }
  const modal = document.getElementById('bombBoxModal');
  const img = document.getElementById('bombBoxImg');

if (img) {
  img.setAttribute('draggable', 'false'); // запрещает перетаскивание
  img.ondragstart = () => false;
  img.oncontextmenu = (e) => e.preventDefault(); // убирает "открыть изображение"
}
  const hint = document.getElementById('bombBoxHint');
  if (!modal || !img) return;

  img.src = 'bomb.png';
img.style.userSelect = 'none';
img.style.webkitUserSelect = 'none';
img.style.webkitTouchCallout = 'none';
  img.style.transform = '';
  img.style.filter = '';
  if (hint) hint.textContent = t('bomb_box_hold');
  modal.classList.add('active');

  // Reset state
  _bombExploding = false;
  let holdStart = null;
  let shakeLevel = 0;

  function onPointerDown(e) {
    e.preventDefault();
    holdStart = Date.now();
    shakeLevel = 0;

    // Escalating shake + vibration
    _bombShakeInterval = setInterval(() => {
      const elapsed = Date.now() - holdStart;
      const progress = Math.min(elapsed / 5000, 1); // 0..1 over 5 seconds
      shakeLevel = progress;

      // Visual shake — gets more intense
      const intensity = Math.round(progress * 14);
      const freq = 50 + Math.round(progress * 200); // faster frequency
      img.style.animation = 'none';
      img.style.transform = `translate(${(Math.random()-0.5)*intensity*2}px, ${(Math.random()-0.5)*intensity}px) rotate(${(Math.random()-0.5)*intensity}deg)`;

      // Red glow intensifies
      const glow = Math.round(progress * 40);
      img.style.filter = `drop-shadow(0 0 ${glow}px rgba(255,50,0,${progress.toFixed(2)}))`;

      // Vibration escalates
      if (navigator.vibrate) {
        const vDur = Math.round(20 + progress * 80);
        navigator.vibrate(vDur);
      }

      if (hint) {
        const left = Math.ceil((5000 - elapsed) / 1000);
        hint.textContent = left > 0 ? `💣 ${left}...` : '💥 BOOM!';
      }
    }, 80);

    // After 5 seconds — EXPLODE
    _bombHoldTimer = setTimeout(() => {
      clearInterval(_bombShakeInterval);
      _bombShakeInterval = null;
      _explodeBomb();
    }, 5000);
  }

  function onPointerUp(e) {
    // Released too early — reset
    if (_bombExploding) return;
    clearTimeout(_bombHoldTimer);
    clearInterval(_bombShakeInterval);
    _bombHoldTimer = null;
    _bombShakeInterval = null;
    img.style.transform = '';
    img.style.filter = '';
    if (hint) hint.textContent = t('bomb_box_hold');
  }

  img.removeEventListener('pointerdown', img._bombDown);
  img.removeEventListener('pointerup', img._bombUp);
  img.removeEventListener('pointerleave', img._bombUp);
  img._bombDown = onPointerDown;
  img._bombUp = onPointerUp;
  img.addEventListener('pointerdown', onPointerDown);
  img.addEventListener('pointerup', onPointerUp);
  img.addEventListener('pointerleave', onPointerUp);
}

function _explodeBomb() {
  _bombExploding = true;
  const modal = document.getElementById('bombBoxModal');
  const img = document.getElementById('bombBoxImg');
  const hint = document.getElementById('bombBoxHint');

  if (!img) return;

  // Switch to explosion sprite
  img.src = 'bomb1.png';
  img.style.transform = 'scale(1.6)';
  img.style.filter = 'drop-shadow(0 0 60px rgba(255,120,0,0.95))';
  img.style.transition = 'transform 0.3s, filter 0.3s';
  if (hint) hint.textContent = '💥 BOOM!';

  // Big vibration
  if (navigator.vibrate) navigator.vibrate([100, 50, 200, 50, 300]);

  // White flash
  const whiteFade = document.getElementById('whiteFade');
  if (whiteFade) {
    whiteFade.classList.add('active');
    setTimeout(() => whiteFade.classList.remove('active'), 300);
  }

  setTimeout(() => {
    // Get reward
    const reward = _getBombBoxReward();
    let rewardText = '';
    let rewardImg = 'bomb.png';

    switch (reward.type) {
      case 'kspt': {
        const rate = getHourlyRate();
        const amount = Math.round(rate * 0.5); // 30 min = 0.5h
        d.tokens += amount;
        rewardText = `+${amount} KSPT (30min income)!`;
        rewardImg = 'kspt.png';
        break;
      }
      case 'puzzle': {
        const missing1 = [];
        for (let i = 0; i < 9; i++) if (d.puzzles[i] === 0) missing1.push(i);
        const missing2 = [];
        for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
        const missing3 = [];
        for (let i = 0; i < 9; i++) if (d.puzzles3[i] === 0) missing3.push(i);
        const missing4 = [];
        for (let i = 0; i < 9; i++) if (d.puzzles4[i] === 0) missing4.push(i);
        const missing5 = [];
        for (let i = 0; i < 25; i++) if (d.puzzles5[i] === 0) missing5.push(i);
        const allMissing = [
  ...(!d.puzzleDone ? missing1.map(i => ({p:1,i})) : []),
  ...(d.puzzleDone && !d.puzzle2Done ? missing2.map(i => ({p:2,i})) : []),
  ...(d.puzzle2Done && !d.puzzle3Done ? missing3.map(i => ({p:3,i})) : []),
  ...(d.puzzle3Done && !d.puzzle4Done ? missing4.map(i => ({p:4,i})) : []),
  ...(d.puzzle4Done && !d.puzzle5Done ? missing5.map(i => ({p:5,i})) : [])
];
        if (allMissing.length > 0) {
          const pick = allMissing[Math.floor(Math.random() * allMissing.length)];
          if (pick.p === 1) {
            d.puzzles[pick.i] = 1;
            rewardText = `Puzzle Piece ${pick.i+1} obtained!`;
            rewardImg = `pazl${pick.i+1}.png`;
          } else if (pick.p === 2) {
            d.puzzles2[pick.i] = 1;
            rewardText = `Puzzle Piece ${pick.i+11} obtained!`;
            rewardImg = `pazl${pick.i+11}.png`;
          } else if (pick.p === 3) {
            d.puzzles3[pick.i] = 1;
            rewardText = `Puzzle Piece ${pick.i+20} obtained!`;
            rewardImg = `puzl${pick.i+1}.png`;
            if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
          } else if (pick.p === 4) {
            d.puzzles4[pick.i] = 1;
            rewardText = `UFO Piece ${pick.i+1} obtained!`;
            rewardImg = `puzzle${pick.i+1}.png`;
            if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
          } else {
            d.puzzles5[pick.i] = 1;
            rewardText = `Dragon Piece ${pick.i+1} obtained!`;
            rewardImg = `p${pick.i+1}.png`;
            if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();
          }
        } else {
          d.tokens += 30;
          rewardText = '+30 KSPT (All puzzles owned)!';
          rewardImg = 'kspt.png';
        }
        break;
      }
      case 'yellowKey':
        if (!d.keys) d.keys = defaultData.keys;
        d.keys.yellow = (d.keys.yellow || 0) + 1;
        rewardText = '🟡 Yellow Key obtained!';
        rewardImg = 'yellow.png';
        break;
      case 'blackKey':
        if (!d.keys) d.keys = defaultData.keys;
        d.keys.black = (d.keys.black || 0) + 1;
        rewardText = '⚫ Black Key obtained!';
        rewardImg = 'black.png';
        break;
      case 'bg':
        if (!d.ownedBgs) d.ownedBgs = ['default'];
        if (!d.ownedBgs.includes('waterbomb')) {
          d.ownedBgs.push('waterbomb');
          d.bg = 'waterbomb';
          rewardText = t('bomb_box_bg');
        } else {
          // Already owned — give 30min income instead
          const rate2 = getHourlyRate();
          const amount2 = Math.round(rate2 * 0.5);
          d.tokens += amount2;
          rewardText = `+${amount2} KSPT (bg already owned)!`;
        }
        rewardImg = 'waterbomb.png';
        break;
    }

    // Mark bomb as used
    d.bombBox.obtained = false;
    save();
    if (typeof ui === 'function') ui();
    if (typeof updatePuzzleUI === 'function') updatePuzzleUI();
    if (typeof updateSecondPuzzleUI === 'function') updateSecondPuzzleUI();
    if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
    if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
    if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();

    // Close modal
    if (modal) modal.classList.remove('active');
    _bombExploding = false;

    // Show reward popup
    showReward(rewardText, rewardImg);

    // Если бомба из сейфа — перехватываем Collect для следующей задачи
    if (window._safeBoomCallback) {
      const cb = window._safeBoomCallback;
      window._safeBoomCallback = null;
      const btn = document.querySelector('#rewardPopup button');
      if (btn) {
        btn.onclick = () => {
          document.getElementById('rewardPopup').style.display = 'none';
          setTimeout(cb, 400);
        };
      }
    }
  }, 600);
}

function _getBombBoxReward() {
  const rand = Math.random() * 100;
  if (rand < 95)   return { type: 'kspt' };
  if (rand < 97)   return { type: 'puzzle' };
  if (rand < 99)   return { type: 'yellowKey' };
  if (rand < 99.9) return { type: 'blackKey' };
  return { type: 'bg' };
}

function closeBombBoxModal() {
  clearTimeout(_bombHoldTimer);
  clearInterval(_bombShakeInterval);
  _bombHoldTimer = null;
  _bombShakeInterval = null;
  _bombExploding = false;
  const modal = document.getElementById('bombBoxModal');
  const img = document.getElementById('bombBoxImg');
  if (img) { img.style.transform = ''; img.style.filter = ''; }
  if (modal) modal.classList.remove('active');

  // Запускаем следующую задачу из очереди сейфа
  if (window._safeBoomCallback) {
    const cb = window._safeBoomCallback;
    window._safeBoomCallback = null;
    setTimeout(cb, 400);
  }
}

 // ==========================================
// CAPSULE FUNCTIONS - UPDATED WITH FIXES
// ==========================================

// ==========================================
// EASTER EGG BOX
// ==========================================
let _eggSwipes = 0;
let _eggOpening = false;

function startEasterEggSequence() {
  if (_eggOpening) return;
  if (!d.easterEgg || !d.easterEgg.obtained) { return; }
  _eggOpening = true;
  _eggSwipes = d.easterEgg.swipes || 0;
  const modal = document.getElementById('easterEggModal');
  const img = document.getElementById('easterEggImg');
  const hint = document.getElementById('easterEggHint');
  if (!modal || !img) { _eggOpening = false; return; }
  _eggUpdateImg(img);
  hint.textContent = `Swipe to scratch! (${_eggSwipes}/5)`;
  modal.classList.add('active');
  _eggAttachSwipe(img);
}

function _eggUpdateImg(img) {
  const srcs = ['egg.png','egg1.png','egg2.png','egg3.png','egg4.png','egg5.png'];
  img.src = srcs[Math.min(_eggSwipes, 5)];
}

function _eggAttachSwipe(img) {
  img.removeEventListener('touchstart', _eggTouchStart);
  img.removeEventListener('mousedown',  _eggMouseDown);
  img.addEventListener('touchstart', _eggTouchStart, { passive: true });
  img.addEventListener('mousedown',  _eggMouseDown);
}

let _eggStartX = 0, _eggStartY = 0, _eggSwiping = false;

function _eggTouchStart(e) {
  if (_eggSwiping) return;
  _eggStartX = e.touches[0].clientX;
  _eggStartY = e.touches[0].clientY;
  // слушаем на document чтобы не потерять если палец ушёл за img
  document.addEventListener('touchend', _eggTouchEnd, { once: true });
  document.addEventListener('touchcancel', _eggTouchCancel, { once: true });
}
function _eggTouchCancel() {
  document.removeEventListener('touchend', _eggTouchEnd);
}
function _eggMouseDown(e) {
  if (_eggSwiping) return;
  _eggStartX = e.clientX; _eggStartY = e.clientY;
  document.addEventListener('mouseup', _eggMouseUp, { once: true });
}
function _eggTouchEnd(e) {
  document.removeEventListener('touchcancel', _eggTouchCancel);
  const dx = e.changedTouches[0].clientX - _eggStartX;
  const dy = e.changedTouches[0].clientY - _eggStartY;
  if (Math.sqrt(dx*dx + dy*dy) > 20) _eggOnSwipe();
}
function _eggMouseUp(e) {
  const dx = e.clientX - _eggStartX;
  const dy = e.clientY - _eggStartY;
  if (Math.sqrt(dx*dx + dy*dy) > 20) _eggOnSwipe();
}

function _eggOnSwipe() {
  if (_eggSwipes >= 5 || _eggSwiping) return;
  _eggSwiping = true;
  _eggSwipes++;
  d.easterEgg.swipes = _eggSwipes;
  save();
  const img = document.getElementById('easterEggImg');
  const hint = document.getElementById('easterEggHint');
  _eggUpdateImg(img);

  // тряска
  img.style.transition = 'none';
  img.style.animation = 'none';
  let s = 0;
  const shakeInterval = setInterval(() => {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 6;
    img.style.transform = `translate(${x}px,${y}px)`;
    s++;
    if (s >= 8) {
      clearInterval(shakeInterval);
      img.style.transform = '';
      _eggSwiping = false;
    }
  }, 35);

  if (navigator.vibrate) navigator.vibrate([20, 10, 20]);

  if (_eggSwipes >= 5) {
    hint.textContent = 'Opening...';
    img.removeEventListener('touchstart', _eggTouchStart);
    img.removeEventListener('mousedown', _eggMouseDown);
    document.removeEventListener('touchend', _eggTouchEnd);
    document.removeEventListener('mouseup', _eggMouseUp);
    setTimeout(() => _openEasterEgg(), 500);
  } else {
    hint.textContent = `Swipe to scratch! (${_eggSwipes}/5)`;
  }
}

function _openEasterEgg() {
  const modal = document.getElementById('easterEggModal');
  const whiteFade = document.getElementById('whiteFade');
  if (whiteFade) { whiteFade.classList.add('active'); setTimeout(() => whiteFade.classList.remove('active'), 250); }

  const reward = getWeightedEasterEggReward();
  let rewardText = '', rewardImg = reward.img || 'kspt.png';

  switch (reward.type) {
    case 'kspt3h':
      const amt = Math.round(getHourlyRate() * 3);
      d.tokens += amt;
      rewardText = `+${amt} KSPT (3h income)!`;
      break;
    case 'znetons':
      if (!d.quests) d.quests = {};
      d.quests.znetons = (d.quests.znetons || 0) + 3;
      rewardText = '+3 Tokens!';
      break;
    case 'capsule':
      d.easterEgg.obtained = false;
      d.easterEgg.swipes = 0;
      _eggSwipes = 0;
      _eggOpening = false;
      save();
      if (modal) modal.classList.remove('active');
      // Сохраняем текущий таймер капсулы
      const _savedCapsuleLastOpen = d.capsule ? d.capsule.lastOpen : 0;
      const _savedCapsuleFirst = d.capsule ? d.capsule.firstOpen : false;
      // Разрешаем открыть без кулдауна
      if (!d.capsule) d.capsule = {};
      d.capsule.firstOpen = true;
      // После открытия восстанавливаем таймер
      window._easterCapsuleRestore = { lastOpen: _savedCapsuleLastOpen, firstOpen: _savedCapsuleFirst };
      if (typeof startCapsuleSequence === 'function') startCapsuleSequence();
      return;
    case 'yellowKey':
      if (!d.keys) d.keys = {}; d.keys.yellow = (d.keys.yellow || 0) + 1;
      rewardText = t('key_obtained').replace('{0}', '🟡 Yellow');
      break;
    case 'redKey':
      if (!d.keys) d.keys = {}; d.keys.red = (d.keys.red || 0) + 1;
      rewardText = t('key_obtained').replace('{0}', '🔴 Red');
      rewardImg = 'red.png';
      break;
    case 'greenKey':
      if (!d.keys) d.keys = {}; d.keys.green = (d.keys.green || 0) + 1;
      rewardText = t('key_obtained').replace('{0}', '🟢 Green');
      rewardImg = 'green.png';
      break;
    case 'puzzle': {
      const pr = _eggGivePuzzle();
      rewardText = pr.text;
      rewardImg = pr.img;
      break;
    }
    case 'bg_bunny':
      if (!d.ownedBgs) d.ownedBgs = ['default'];
      if (!d.ownedBgs.includes('bunny')) {
        d.ownedBgs.push('bunny');
        rewardText = 'Background: Easter Bunny unlocked!';
      } else {
        d.tokens += Math.round(getHourlyRate() * 3);
        rewardText = '+3h KSPT (bg already owned)!';
      }
      break;
  }

  d.easterEgg.obtained = false;
  d.easterEgg.swipes = 0;
  _eggSwipes = 0;
  _eggOpening = false;
  save();
  if (modal) modal.classList.remove('active');
  showReward(rewardText, rewardImg);
  ui();
}

function _applyEasterCapsuleReward(reward) {
  // Применяет награду капсулы без изменения таймера
  switch(reward.type) {
    case 'kspt': d.tokens += reward.value; break;
    case 'puzzle': _eggGivePuzzle(); break;
    case 'background':
      if (!d.ownedBgs) d.ownedBgs = ['default'];
      if (!d.ownedBgs.includes(reward.id)) d.ownedBgs.push(reward.id);
      break;
    case 'skin':
      if (!d.skins) d.skins = {};
      if (!d.skins[reward.id]) d.skins[reward.id] = 1;
      break;
    default: if (reward.value) d.tokens += reward.value; break;
  }
}

function _eggGivePuzzle() {
  if (!d.puzzleDone) {
    const m = []; for (let i=0;i<9;i++) if (!d.puzzles[i]) m.push(i);
    if (m.length) { const idx=m[Math.floor(Math.random()*m.length)]; d.puzzles[idx]=1; return { text:`Puzzle Piece ${idx+1}!`, img:`pazl${idx+1}.png` }; }
  }
  if (!d.puzzle2Done) {
    const m = []; for (let i=0;i<9;i++) if (!d.puzzles2[i]) m.push(i);
    if (m.length) { const idx=m[Math.floor(Math.random()*m.length)]; d.puzzles2[idx]=1; return { text:`Puzzle Piece ${idx+11}!`, img:`pazl${idx+11}.png` }; }
  }
  if (!d.puzzle3Done) {
    const m = []; for (let i=0;i<9;i++) if (!d.puzzles3[i]) m.push(i);
    if (m.length) { const idx=m[Math.floor(Math.random()*m.length)]; d.puzzles3[idx]=1; if(typeof updateThirdPuzzleUI==='function') updateThirdPuzzleUI(); return { text:`Puzzle Piece ${idx+20}!`, img:`puzl${idx+1}.png` }; }
  }
  if (!d.puzzle4Done) {
    const m = []; for (let i=0;i<9;i++) if (!d.puzzles4[i]) m.push(i);
    if (m.length) { const idx=m[Math.floor(Math.random()*m.length)]; d.puzzles4[idx]=1; if(typeof updateFourthPuzzleUI==='function') updateFourthPuzzleUI(); return { text:`UFO Piece ${idx+1}!`, img:`puzzle${idx+1}.png` }; }
  }
  const m = []; for (let i=0;i<25;i++) if (!d.puzzles5[i]) m.push(i);
  if (m.length) { const idx=m[Math.floor(Math.random()*m.length)]; d.puzzles5[idx]=1; if(typeof updateFifthPuzzleUI==='function') updateFifthPuzzleUI(); return { text:`Dragon Piece ${idx+1}!`, img:`p${idx+1}.png` }; }
  d.tokens += 10; return { text:'+10 KSPT (puzzles done)!', img:'kspt.png' };
}
// ==========================================
// END EASTER EGG BOX
// ==========================================

// ---- Noob Box ----
let noobBoxOpening = false;
let noobBoxTaps = 0;

function startNoobBoxSequence() {
  if (noobBoxOpening) return;
  if (!d.noobBox || !d.noobBox.obtained) { return; }

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
        const delay = 0;
        if (!d.puzzleDone) {
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
        } else if (!d.puzzle2Done) {
          const missing2 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
          if (missing2.length > 0) {
            const idx = missing2[Math.floor(Math.random() * missing2.length)];
            d.puzzles2[idx] = 1;
            rewardText = `Puzzle Piece ${idx+11} obtained!`;
            rewardImg = `pazl${idx+11}.png`;
          } else {
            d.tokens += 50;
            rewardText = "+50 KSPT (All puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else if (!d.puzzle3Done) {
          const missing3 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles3[i] === 0) missing3.push(i);
          if (missing3.length > 0) {
            const idx = missing3[Math.floor(Math.random() * missing3.length)];
            d.puzzles3[idx] = 1;
            rewardText = `Puzzle Piece ${idx+20} obtained!`;
            rewardImg = `puzl${idx+1}.png`;
            if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
          } else {
            d.tokens += 100;
            rewardText = "+100 KSPT (All puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else if (!d.puzzle4Done) {
          const missing4 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles4[i] === 0) missing4.push(i);
          if (missing4.length > 0) {
            const idx = missing4[Math.floor(Math.random() * missing4.length)];
            d.puzzles4[idx] = 1;
            rewardText = `UFO Piece ${idx+1} obtained!`;
            rewardImg = `puzzle${idx+1}.png`;
            if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
          } else {
            d.tokens += 100;
            rewardText = "+100 KSPT (All UFO pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else {
          const missing5 = [];
          for (let i = 0; i < 25; i++) if (d.puzzles5[i] === 0) missing5.push(i);
          if (missing5.length > 0) {
            const idx = missing5[Math.floor(Math.random() * missing5.length)];
            d.puzzles5[idx] = 1;
            rewardText = `Dragon Piece ${idx+1} obtained!`;
            rewardImg = `p${idx+1}.png`;
            if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();
          } else {
            d.tokens += 100;
            rewardText = "+100 KSPT (All Dragon pieces owned)!";
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
    d.noobBox.obtained = false;
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
    if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();

    // Следующая задача из очереди сейфа — ждём нажатия Collect
    if (window._safeNoobCallback) {
      const cb = window._safeNoobCallback;
      window._safeNoobCallback = null;
      const btn = document.querySelector('#rewardPopup button');
      if (btn) {
        btn.onclick = () => {
          document.getElementById('rewardPopup').style.display = 'none';
          setTimeout(cb, 400);
        };
      } else {
        setTimeout(cb, 400);
      }
    }

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
      d.questCapsuleOpened = (d.questCapsuleOpened || 0) + 1;
      d.wQuestCapsuleOpened = (d.wQuestCapsuleOpened || 0) + 1;
      checkQuestProgress('capsule');
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
        case 'glitchFragment':
      _giveGlitchFragment();
      reward.img = `oblom${_lastGlitchFragmentIdx + 1}.png`;
      break;
          
        case 'tap2x':
          d.bonuses.tap2x = { active: true, end: Date.now() + reward.duration * 1000 };
          rewardText = reward.name;
          break;
          
        case 'puzzle':
  const now = Date.now();
  const delay = 0;
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
  } else if (!d.puzzle2Done) {
    const missing2 = [];
    for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
    if (missing2.length > 0) {
      const idx = missing2[Math.floor(Math.random() * missing2.length)];
      d.puzzles2[idx] = 1;
      rewardText = `Puzzle Piece ${idx+11} obtained!`;
      rewardImg = `pazl${idx+11}.png`;
      showReward(rewardText, rewardImg);
    } else {
      d.tokens += 100;
      rewardText = "+100 KSPT (All second puzzle pieces owned)!";
      rewardImg = "kspt.png";
    }
  } else if (!d.puzzle3Done) {
    const missing3 = [];
    for (let i = 0; i < 9; i++) if (d.puzzles3[i] === 0) missing3.push(i);
    if (missing3.length > 0) {
      const idx = missing3[Math.floor(Math.random() * missing3.length)];
      d.puzzles3[idx] = 1;
      rewardText = `Puzzle Piece ${idx+20} obtained!`;
      rewardImg = `puzl${idx+1}.png`;
      showReward(rewardText, rewardImg);
      if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
    } else {
      d.tokens += 100;
      rewardText = "+100 KSPT (All puzzle pieces owned)!";
      rewardImg = "kspt.png";
    }
  } else if (!d.puzzle4Done) {
    const missing4 = [];
    for (let i = 0; i < 9; i++) if (d.puzzles4[i] === 0) missing4.push(i);
    if (missing4.length > 0) {
      const idx = missing4[Math.floor(Math.random() * missing4.length)];
      d.puzzles4[idx] = 1;
      rewardText = `UFO Piece ${idx+1} obtained!`;
      rewardImg = `puzzle${idx+1}.png`;
      showReward(rewardText, rewardImg);
      if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
    } else {
      d.tokens += 100;
      rewardText = "+100 KSPT (All UFO pieces owned)!";
      rewardImg = "kspt.png";
    }
  } else {
    const missing5 = [];
    for (let i = 0; i < 25; i++) if (d.puzzles5[i] === 0) missing5.push(i);
    if (missing5.length > 0) {
      const idx = missing5[Math.floor(Math.random() * missing5.length)];
      d.puzzles5[idx] = 1;
      rewardText = `Dragon Piece ${idx+1} obtained!`;
      rewardImg = `p${idx+1}.png`;
      showReward(rewardText, rewardImg);
      if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();
    } else {
      d.tokens += 100;
      rewardText = "+100 KSPT (All Dragon pieces owned)!";
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
      if (window._easterCapsuleRestore) {
      d.capsule.lastOpen = window._easterCapsuleRestore.lastOpen;
      d.capsule.firstOpen = window._easterCapsuleRestore.firstOpen;
      window._easterCapsuleRestore = null;
    } else {
      d.capsule.lastOpen = Date.now();
    }
      if (d.capsule.firstOpen) {
        d.capsule.firstOpen = false;
      }
      // Счётчик для алмазной капсулы — только ручные открытия
      if (!d._skipDiamondCount) {
        d.capsuleOpenCount = (d.capsuleOpenCount || 0) + 1;
        if (d.capsuleOpenCount % 7 === 0) {
          d.diamondCapsule.obtained = true;
          d.diamondCapsule.taps = 0;
          if (typeof updateCapsuleUI === 'function') updateCapsuleUI();
        }
      }
      delete d._skipDiamondCount;
      
      // Show reward
      showReward(rewardText, rewardImg);

      // Если капсула открыта из сейфа — перехватываем Collect
      if (window._safeCapsuleActive) {
        window._safeCapsuleActive = false;
        const btn = document.querySelector('#rewardPopup button');
        if (btn) {
          btn.onclick = () => {
            document.getElementById('rewardPopup').style.display = 'none';
            if (window._safeCapsuleCallback) {
              window._safeCapsuleCallback();
              window._safeCapsuleCallback = null;
            }
          };
        }
      }
      
      // Hide capsule modal
      modal.classList.remove("active");
      
      save();
      ui();
      updatePuzzleUI();
      
      // Reset capsule opening flag and cleanup
      capsuleOpening = false;
      capsuleTaps = 0;
      if (capsuleImg) capsuleImg.removeEventListener('click', capsuleTapHandler);
      
    }, 1500);
    
  }, 500);
}

// ---- Gold Capsule (Secret Gold) ----
let goldCapsuleOpening = false;
let goldCapsuleTaps = 0;

function startGoldCapsuleSequence() {
  if (goldCapsuleOpening) return;
  if (!d.goldCapsule || !d.goldCapsule.obtained) { return; }

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
        const delay = 0;
        if (!d.puzzleDone) {
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
        } else if (!d.puzzle2Done) {
          const missing2 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles2[i] === 0) missing2.push(i);
          if (missing2.length > 0) {
            const idx = missing2[Math.floor(Math.random() * missing2.length)];
            d.puzzles2[idx] = 1;
            rewardText = `Puzzle Piece ${idx+11} obtained!`;
            rewardImg = `pazl${idx+11}.png`;
          } else {
            d.tokens += 150;
            rewardText = "+150 KSPT (All second puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else if (!d.puzzle3Done) {
          const missing3 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles3[i] === 0) missing3.push(i);
          if (missing3.length > 0) {
            const idx = missing3[Math.floor(Math.random() * missing3.length)];
            d.puzzles3[idx] = 1;
            rewardText = `Puzzle Piece ${idx+20} obtained!`;
            rewardImg = `puzl${idx+1}.png`;
            if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
          } else {
            d.tokens += 200;
            rewardText = "+200 KSPT (All puzzle pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else if (!d.puzzle4Done) {
          const missing4 = [];
          for (let i = 0; i < 9; i++) if (d.puzzles4[i] === 0) missing4.push(i);
          if (missing4.length > 0) {
            const idx = missing4[Math.floor(Math.random() * missing4.length)];
            d.puzzles4[idx] = 1;
            rewardText = `UFO Piece ${idx+1} obtained!`;
            rewardImg = `puzzle${idx+1}.png`;
            if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
          } else {
            d.tokens += 200;
            rewardText = "+200 KSPT (All UFO pieces owned)!";
            rewardImg = "kspt.png";
          }
        } else {
          const missing5 = [];
          for (let i = 0; i < 25; i++) if (d.puzzles5[i] === 0) missing5.push(i);
          if (missing5.length > 0) {
            const idx = missing5[Math.floor(Math.random() * missing5.length)];
            d.puzzles5[idx] = 1;
            rewardText = `Dragon Piece ${idx+1} obtained!`;
            rewardImg = `p${idx+1}.png`;
            if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();
          } else {
            d.tokens += 200;
            rewardText = "+200 KSPT (All Dragon pieces owned)!";
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
    // Проверяем, есть ли скин
    if (!d.skins[reward.id]) {
        // --- Логика выдачи скина ---
        d.skins[reward.id] = 1;
        rewardText = `${reward.name} unlocked!`;
        
        const cardId = "skinCard" + (reward.id === 'gkspt' ? 'Gkspt' : 'CyberAndroid');
        const card = document.getElementById(cardId);
        if (card) {
            card.style.display = "block";
        }

        // Обновить UI скинов (теперь это внутри блока успеха)
        if (typeof updateSkinButtons === 'function') updateSkinButtons();
        if (typeof updateSkinPreviews === 'function') updateSkinPreviews();
        
    } else {
                // --- Логика компенсации ---
                d.tokens += 100;
                rewardText = "+100 KSPT (Skin already owned)!";
                rewardImg = "kspt.png";
            }
            break; // Выходим из switch, идем к общему коду внизу

        default:
            // Логика для обычных наград
            d.tokens += 50;
            rewardText = "+50 KSPT";
            rewardImg = "kspt.png";
            break; // Выходим из switch
    } 

    // --- ОБЩИЙ КОД (Выполняется и для 'skin', и для default) ---

    // Обновляем данные капсулы
    d.goldCapsule.opened = true;
    d.goldCapsule.taps = 0;
    d.goldCapsule.lastOpen = Date.now();

    // Сохраняем и показываем награду
    save();
    showReward(rewardText, rewardImg); // Убедитесь, что rewardImg определен в case 'skin', иначе будет undefined

    // Закрываем модальное окно и чистим данные
    modal.classList.remove("active");
    if (typeof goldCapsuleOpening !== 'undefined') goldCapsuleOpening = false;
    if (typeof goldCapsuleTaps !== 'undefined') goldCapsuleTaps = 0;

    // Убираем слушатель событий
    if (typeof goldCapsuleTapHandler !== 'undefined') {
        capsuleImg.removeEventListener('click', goldCapsuleTapHandler);
    }

    // Обновляем UI
    if (typeof ui === 'function') ui();
    if (typeof updatePuzzleUI === 'function') updatePuzzleUI();
    if (typeof updateSecondPuzzleUI === 'function') updateSecondPuzzleUI();
    if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI(); 

  }, 700);  // <-- это закрывает setTimeout
}  // <-- это закрывает функцию openGoldCapsule

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
  if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
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
  iframe.style.height = 'calc(100vh - 64px - env(safe-area-inset-bottom,0px))';
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
// STREAK SYSTEM
// ==========================================

const STREAK_MILESTONES = {
  10:  { reward: 'noobBox',    color: '#ff9800', label: 'Noob Box' },
  30:  { reward: 'capsule',    color: '#f44336', label: 'Capsule' },
  50:  { reward: 'bombBox',    color: '#9c27b0', label: 'Bomb Box' },
  100: { reward: 'glitchBox',  color: '#2196f3', label: 'Glitch Box' },
  200: { reward: 'keyBox',     color: '#00bcd4', label: 'Key Box' },
  300: { reward: 'keyRed',     color: '#e0f7fa', label: 'Red Key' },
  500: { reward: 'keyGreen',   color: '#212121', label: 'Green Key' },
  1000:{ reward: 'goldCapsule',color: 'rainbow', label: 'Gold Capsule' }
};

function _streakGetColor(days, active) {
  if (!active) return '#555';
  if (days >= 1000) return 'rainbow';
  if (days >= 500)  return '#1a1a2e';
  if (days >= 300)  return '#b3e5fc';
  if (days >= 200)  return '#00bcd4';
  if (days >= 100)  return '#1565c0';
  if (days >= 50)   return '#9c27b0';
  if (days >= 30)   return '#f44336';
  if (days >= 10)   return '#ff9800';
  return '#ffc107';
}

function _streakGetBorderColor(days) {
  if (days >= 1000) return 'rainbow';
  if (days >= 500)  return '#37474f';
  if (days >= 300)  return '#b3e5fc';
  if (days >= 200)  return '#00bcd4';
  if (days >= 100)  return '#1e88e5';
  if (days >= 50)   return '#9c27b0';
  if (days >= 30)   return '#f44336';
  if (days >= 10)   return '#ff9800';
  return null; // no special border below 10
}

function _streakFlameHTML(days, active, size) {
  size = size || 22;
  const color = _streakGetColor(days, active);
  const isRainbow = color === 'rainbow';
  const id = 'sf_' + Math.random().toString(36).slice(2,7);

  if (!active) {
    // Grey flame SVG
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="vertical-align:middle;flex-shrink:0;">
      <defs>
        <radialGradient id="${id}g" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stop-color="#666"/>
          <stop offset="100%" stop-color="#333"/>
        </radialGradient>
      </defs>
      <path d="M12 2 C10 6 6 8 7 13 C7.5 15.5 9 17 11 17.5 C9.5 16 9.5 13.5 11 12 C11 14 12.5 15 13 17.5 C15 17 16.5 15.5 17 13 C18 8 14 6 12 2Z" fill="url(#${id}g)" opacity="0.5"/>
    </svg>`;
  }

  if (isRainbow) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="vertical-align:middle;flex-shrink:0;">
      <defs>
        <linearGradient id="${id}rg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"><animate attributeName="stop-color" values="#ff0000;#ff9900;#ffff00;#00ff00;#00ffff;#0099ff;#cc00ff;#ff0000" dur="2s" repeatCount="indefinite"/></stop>
          <stop offset="50%"><animate attributeName="stop-color" values="#ff9900;#ffff00;#00ff00;#00ffff;#0099ff;#cc00ff;#ff0000;#ff9900" dur="2s" repeatCount="indefinite"/></stop>
          <stop offset="100%"><animate attributeName="stop-color" values="#ffff00;#00ff00;#00ffff;#0099ff;#cc00ff;#ff0000;#ff9900;#ffff00" dur="2s" repeatCount="indefinite"/></stop>
        </linearGradient>
        <filter id="${id}glow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g filter="url(#${id}glow)">
        <path d="M12 1 C9.5 5.5 5 8 6.5 14 C7 16.5 9 18.5 11.5 19 C10 17.5 10 14.5 12 13 C12 15 13.5 16.5 14 19 C16.5 18.5 18 16.5 18.5 14 C20 8 15.5 5.5 12 1Z" fill="url(#${id}rg)">
          <animateTransform attributeName="transform" type="scale" values="1,1;1.04,1.06;1,1" dur="0.8s" repeatCount="indefinite" additive="sum"/>
        </path>
        <ellipse cx="12" cy="16" rx="2" ry="1.5" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="0.9s" repeatCount="indefinite"/>
        </ellipse>
      </g>
    </svg>`;
  }

  // Standard colored flame
  const c1 = color, c2 = _lighten(color), c3 = '#fff8e1';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="vertical-align:middle;flex-shrink:0;">
    <defs>
      <radialGradient id="${id}g" cx="50%" cy="70%" r="65%">
        <stop offset="0%" stop-color="${c3}" stop-opacity="0.9"/>
        <stop offset="40%" stop-color="${c2}"/>
        <stop offset="100%" stop-color="${c1}"/>
      </radialGradient>
      <filter id="${id}f"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <g filter="url(#${id}f)">
      <path d="M12 1 C9.5 5.5 5 8 6.5 14 C7 16.5 9 18.5 11.5 19 C10 17.5 10 14.5 12 13 C12 15 13.5 16.5 14 19 C16.5 18.5 18 16.5 18.5 14 C20 8 15.5 5.5 12 1Z" fill="url(#${id}g)">
        <animateTransform attributeName="transform" type="scale" values="1,1;1.03,1.05;0.98,1.02;1,1" dur="1.1s" repeatCount="indefinite" additive="sum"/>
      </path>
      <ellipse cx="12" cy="16" rx="2.5" ry="1.8" fill="white" opacity="0.55">
        <animate attributeName="opacity" values="0.55;0.25;0.55" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="ry" values="1.8;1.2;1.8" dur="1s" repeatCount="indefinite"/>
      </ellipse>
    </g>
  </svg>`;
}

function _lighten(hex) {
  try {
    let c = hex.replace('#','');
    if (c.length === 3) c = c.split('').map(x=>x+x).join('');
    const num = parseInt(c,16);
    const r = Math.min(255, ((num>>16)&0xff) + 60);
    const g = Math.min(255, ((num>>8)&0xff) + 60);
    const b = Math.min(255, (num&0xff) + 60);
    return '#' + [r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
  } catch(e) { return '#fff'; }
}

function checkStreak() {
  if (!d.streak) d.streak = { days:0, lastClaimDay:0, lastClaimTs:0, restoresLeft:3, pendingClaim:false };

  const now = Date.now();
  const MS_DAY = 86400000;

  // Первый вход
  if (!d.streak.lastClaimTs) {
    d.streak.lastClaimTs = now;
    d.streak.lastClaimDay = 1;
    d.streak.days = 1;
    save();
    return;
  }

  const msSinceLastClaim = now - d.streak.lastClaimTs;
  const daysSince = Math.floor(msSinceLastClaim / MS_DAY);

  if (daysSince === 0) return; // уже сегодня

  if (daysSince === 1) {
    // Продолжение серии
    d.streak.days += 1;
    d.streak.lastClaimTs = d.streak.lastClaimTs + MS_DAY;
    d.streak.pendingClaim = true;
    save();
    _streakShowAnimation(d.streak.days);
    _streakGiveRewards(d.streak.days);
  } else if (daysSince >= 2) {
    // Серия прервана
    d.streak.days = 0;
    d.streak.lastClaimTs = d.streak.lastClaimTs + (daysSince * MS_DAY);
    d.streak.pendingClaim = false;
    save();
  }
}

function _streakGiveRewards(days) {
  // +1 жетон за каждый кратный 10 день
  if (days % 10 === 0) {
    if (!d.quests) d.quests = {};
    d.quests.znetons = (d.quests.znetons || 0) + 1;
    save();
    const zEl = document.getElementById('znetonCount');
    if (zEl) zEl.textContent = d.quests.znetons;
    showToast(`🎖️ *+1 token for a ${days}-day streak!*`);
  }

  // Milestone rewards
  const milestone = STREAK_MILESTONES[days];
  if (milestone) {
    setTimeout(() => {
      if (typeof _adminApplyOpening === 'function') {
        _adminApplyOpening(milestone.reward);
        showToast(`🔥 ${days}-day streak! Reward: ${milestone.label}!`);
      }
    }, 3500); // после анимации
  }
}

function restoreStreak() {
  if (!d.streak) return;
  if ((d.streak.restoresLeft || 0) <= 0) { showToast('No restores left!'); return; }
  const cost = 5;
  if ((d.quests?.znetons || 0) < cost) { showToast(`You need ${cost} tokens to restore`); return; }
  if (!confirm(`Восстановить серию за ${cost} жетонов?`)) return;

  d.quests.znetons -= cost;
  save();
  const zEl = document.getElementById('znetonCount');
  if (zEl) zEl.textContent = d.quests.znetons;

  d.streak.days += 1;
  d.streak.restoresLeft -= 1;
  d.streak.lastClaimTs = Date.now();
  d.streak.pendingClaim = false;
  save();
  showToast(`🔥 Streak restored! Day ${d.streak.days}`);
  if (typeof renderProfileTab === 'function') renderProfileTab();
}

function _streakShowAnimation(days) {
  const color = _streakGetColor(days, true);
  const isRainbow = color === 'rainbow';

  const overlay = document.createElement('div');
  overlay.style.cssText = `position:fixed;inset:0;z-index:99998;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;`;
  overlay.innerHTML = `
    <style>
      @keyframes streakPop { 0%{transform:scale(0.3);opacity:0} 60%{transform:scale(1.2);opacity:1} 100%{transform:scale(1);opacity:1} }
      @keyframes streakFadeOut { 0%{opacity:1} 100%{opacity:0} }
      @keyframes streakParticle { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-120px) scale(0);opacity:0} }
      ${isRainbow ? `@keyframes rainbowText{0%{color:#ff0000}16%{color:#ff9900}33%{color:#ffff00}50%{color:#00ff00}66%{color:#00ffff}83%{color:#0099ff}100%{color:#cc00ff}}` : ''}
    </style>
    <div style="animation:streakPop 0.6s cubic-bezier(.36,2,.5,1) forwards;text-align:center;padding:30px;background:rgba(0,0,0,0.85);border-radius:24px;border:2px solid ${isRainbow?'#ffd700':color};box-shadow:0 0 40px ${isRainbow?'#ffd700':color}88;max-width:280px;">
      <div style="font-size:72px;margin-bottom:8px;">${_streakFlameHTML(days, true, 72)}</div>
      <div style="font-size:28px;font-weight:bold;margin-bottom:4px;${isRainbow?'animation:rainbowText 1s linear infinite;':'color:'+color+';'}">Day ${days}!</div>
      <div style="font-size:15px;color:#aaa;">🔥 Streak continues!</div>
      ${days % 10 === 0 ? `<div style="font-size:13px;color:#ffd700;margin-top:6px;">🎫 +1 Ticket bonus!</div>` : ''}
      ${STREAK_MILESTONES[days] ? `<div style="font-size:13px;color:#ffd700;margin-top:4px;">🎁 ${STREAK_MILESTONES[days].label} unlocked!</div>` : ''}
    </div>
    <div id="_streakParticles" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"></div>
  `;
  document.body.appendChild(overlay);

  // Particles
  const pc = overlay.querySelector('#_streakParticles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    const x = 20 + Math.random() * 60;
    const delay = Math.random() * 1.5;
    p.style.cssText = `position:absolute;bottom:30%;left:${x}%;font-size:${14+Math.random()*12}px;animation:streakParticle ${1+Math.random()}s ${delay}s ease-out forwards;`;
    p.textContent = ['🔥','✨','⭐','💥'][Math.floor(Math.random()*4)];
    pc.appendChild(p);
  }

  // Fade out
  setTimeout(() => { overlay.style.animation = 'streakFadeOut 0.8s forwards'; }, 3000);
  setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 3800);
}

// ==========================================
// END STREAK SYSTEM
// ==========================================

// ==========================================
// INITIALIZATION
// ==========================================

function initGame() {
    console.log('initGame called');
    // Process offline income on load
    processOfflineIncome();
    // Streak check
    try { checkStreak(); } catch(e) { console.warn('streak error', e); }
    // Apply profile tab location on startup
    try { _applyProfileTabLocation(d.settings?.profileTabLocation || 'settings'); } catch(e) {}

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
        d.questOnlineSecs = (d.questOnlineSecs || 0) + 1;
        d.wQuestOnlineSecs = (d.wQuestOnlineSecs || 0) + 1;
        if (d.questOnlineSecs % 10 === 0) { checkQuestProgress('online_20'); checkQuestProgress('w_online'); }
    }, 1000);
}

// ==========================================
// IVENTS SYSTEM FUNCTIONS
// ==========================================

// Показать вкладку (пазлы или события)
function showIventTab(tab) {
  const puzzleTab = document.getElementById('puzzleTab');
  const iventTab = document.getElementById('iventTab');
  const keysTab = document.getElementById('keysTab');

  const tabPuzzle = document.getElementById('tabPuzzle');
  const tabIvent = document.getElementById('tabIvent');
  const tabKeys = document.getElementById('tabKeys');

  // Обновляем кнопки
  if (tabPuzzle) tabPuzzle.style.background = tab === 'puzzle' ? '#2e7d32' : '#444';
  if (tabIvent) tabIvent.style.background = tab === 'ivent' ? '#2e7d32' : '#444';
  if (tabKeys) tabKeys.style.background = tab === 'keys' ? '#2e7d32' : '#444';

  // Показываем нужную вкладку
  if (tab === 'keys') {
    if (puzzleTab) puzzleTab.style.display = 'none';
    if (iventTab) iventTab.style.display = 'none';
    if (keysTab) keysTab.style.display = 'block';

    initKeysTab();
    return;
  }

  if (keysTab) keysTab.style.display = 'none';

  if (tab === 'puzzle') {
    if (puzzleTab) puzzleTab.style.display = 'block';
    if (iventTab) iventTab.style.display = 'none';
  } else {
    if (puzzleTab) puzzleTab.style.display = 'none';
    if (iventTab) iventTab.style.display = 'block';

    loadIventsDirect();
  }
}

function loadIventsDirect() {
  // Теперь эта вкладка — Quests & Safes
  initQuestsTab();
  startQuestTimers();
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

// ===== KEYS SYSTEM =====
let currentKeyIndex = 0;
const keyColors = ['blue', 'red', 'green', 'yellow', 'black'];

function getVisibleKeyColors() {
  const base = ['blue', 'red', 'green', 'yellow'];
  if (d.keys && d.keys.black > 0) base.push('black');
  if (d.keys && d.keys.diamond > 0) base.push('diamond');
  if (d.keys && d.keys.admin > 0) base.push('admin');
  return base;
}
let glitchAudioContext = null;
let glitchAudioBuffer = null;

// Инициализация вкладки ключей
// Флаг для проверки инициализации
let keysTabInitialized = false;

function initKeysTab() {
  // Устанавливаем обработчики только один раз
  if (!keysTabInitialized) {
    document.getElementById('keyPrev')?.addEventListener('click', () => {
      const kc = getVisibleKeyColors();
      currentKeyIndex = (currentKeyIndex - 1 + kc.length) % kc.length;
      updateKeysUI();
    });
    
    document.getElementById('keyNext')?.addEventListener('click', () => {
      const kc = getVisibleKeyColors();
      currentKeyIndex = (currentKeyIndex + 1) % kc.length;
      updateKeysUI();
    });
    
    // Инициализируем Web Audio для glitch звуков
    initGlitchAudio();
    
    keysTabInitialized = true;
  }
  
  // Обновляем UI (это нужно делать каждый раз)
  updateKeysUI();
  updateGlitchBoxUI();
  updateBoostTimers();
}

// SWIPE support for keys (touch)
const keysTabEl = document.getElementById('keysTab');
if (keysTabEl) {
  let touchStartX = 0;
  keysTabEl.addEventListener('touchstart', function(e) {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  keysTabEl.addEventListener('touchend', function(e) {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return; // фильтр шумов
    if (dx < 0) {
      const kc = getVisibleKeyColors();
      currentKeyIndex = (currentKeyIndex + 1) % kc.length;
    } else {
      const kc = getVisibleKeyColors();
      currentKeyIndex = (currentKeyIndex - 1 + kc.length) % kc.length;
    }
    updateKeysUI();
  }, { passive: true });
}

// Обновление UI ключей
function updateKeysUI() {
  // УДАЛЕНО: Тут были prevBtn.onclick и nextBtn.onclick — они вызывали двойной клик!
  
  const visibleKeys = getVisibleKeyColors();
  if (currentKeyIndex >= visibleKeys.length) currentKeyIndex = 0;
  const currentKey = visibleKeys[currentKeyIndex];
  const keyCount = (d.keys && d.keys[currentKey]) ? d.keys[currentKey] : 0;
  const maxKeys = (currentKey === 'admin' || currentKey === 'black' || currentKey === 'diamond') ? 1 : 4;
  
  const keyImg = document.getElementById('currentKeyImg');
  const keyCounter = document.getElementById('keyCounter');

  if (keyImg) keyImg.src = currentKey === 'admin' ? 'adminkey.png' : currentKey === 'diamond' ? 'dkey.png' : `${currentKey}.png`;
  if (keyCounter) keyCounter.textContent = `${keyCount} / ${maxKeys}`;
  
  // Обновляем магазин
  updateKeyShop(currentKey);
  
  // Обновляем таймеры бустов
  updateBoostTimers();
}

// Обновление магазина ключа
function updateKeyShop(keyColor) {
  const shopTitle = document.getElementById('shopTitle');
  const shopItems = document.getElementById('shopItems');
  
  if (!shopTitle || !shopItems) return;
  
  // Устанавливаем название магазина
  shopTitle.textContent = keyColor === 'admin' ? 'Admin Shop' : `${keyColor.charAt(0).toUpperCase() + keyColor.slice(1)} Shop`;
  
  // Очищаем магазин
  shopItems.innerHTML = '';
  
  // Получаем предметы для магазина
  const shopItemsData = getShopItems(keyColor);
  
  // Добавляем предметы в магазин
  shopItemsData.forEach((item, index) => {
    const shopItem = document.createElement('div');
    shopItem.className = `shop-item ${d.keys[keyColor] <= 0 ? 'disabled' : ''}`;
    shopItem.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 5px;">${item.name}</div>
      <div style="font-size: 12px; color: #aaa;">${item.desc}</div>
      <div class="shop-item-price">1 ${keyColor} key</div>
    `;
    
    shopItem.onclick = () => {
      if (d.keys[keyColor] > 0) {
        buyKeyItem(keyColor, item);
      } else {
        showToast(`No ${keyColor} keys!`);
      }
    };
    
    shopItems.appendChild(shopItem);
  });
}

// Получить предметы для магазина ключа
function getShopItems(keyColor) {
  const shops = {
    blue: [
      { name: '+60 Tickets', type: 'tickets', value: 60, desc: 'Add 60 game tickets' },
      { name: '5 Capsules', type: 'capsules', value: 5, desc: 'Open 5 regular capsules' },
      { name: 'Gold Capsule', type: 'goldCapsule', value: 1, desc: 'Open 1 gold capsule' }
    ],
    red: [
      { name: 'Puzzle Piece', type: 'puzzle', value: 1, desc: 'Get random puzzle piece' },
      { name: 'Skip Capsule', type: 'skipCooldown', value: 1, desc: 'Skip capsule cooldown' },
      { name: 'Skip Fuse', type: 'skipFuse', value: 1, desc: 'Skip current fuse timer' }
    ],
    green: [
      { name: 'Glitch Box', type: 'glitchBox', value: 1, desc: 'Open Glitch Box' },
      { name: '+30 EK', type: 'ek', value: 30, desc: 'Get 30 EK coins' }
    ],
    yellow: [
      { name: '+10h Income', type: 'income', value: 10, desc: 'Get 10h KSPT income' },
      { name: 'Tap Boost', type: 'tapBoost', value: 300, desc: '+0.10 KSPT per tap for 5min' }
    ],
    black: [
      { name: '+50 Tickets', type: 'tickets', value: 50, desc: 'Add 50 game tickets' },
      { name: 'Gold Capsule', type: 'goldCapsule', value: 1, desc: 'Open 1 gold capsule' },
      { name: 'Glitch Box', type: 'glitchBox', value: 1, desc: 'Open Glitch Box' },
      { name: '+20h Income', type: 'income', value: 20, desc: 'Get 20h KSPT income' },
      { name: 'Puzzle Piece', type: 'puzzle', value: 1, desc: 'Get random puzzle piece' },
      { name: '+25 EK', type: 'ek', value: 25, desc: 'Get 25 EK coins' }
    ],
    diamond: [
      { name: t('dkey_milicuteness'), type: 'miliBox2', value: 2, desc: 'Get 2 Cuteness Boxes' },
      { name: t('dkey_tokens'),       type: 'dkeyTokens', value: 20, desc: 'Get 20 Tokens' },
    ],
    admin: [
      { name: 'Noob Box', type: 'adminNoobBox', value: 1, desc: 'Open Noob Box' },
      { name: 'Capsule', type: 'adminCapsule', value: 1, desc: 'Open Capsule' },
      { name: 'Glitch Box', type: 'adminGlitchBox', value: 1, desc: 'Open Glitch Box' },
      { name: 'Bomb Box', type: 'adminBombBox', value: 1, desc: 'Open Bomb Box' },
      { name: 'Noob Safe', type: 'adminSafeNoob', value: 1, desc: 'Open Noob Safe' },
      { name: 'Iron Safe', type: 'adminSafeIron', value: 1, desc: 'Open Iron Safe' },
      { name: 'Key Box', type: 'adminKeyBox', value: 1, desc: 'Open Key Box' },
      { name: 'Fortune Wheel', type: 'adminWheel', value: 1, desc: '1 free Fortune Wheel spin' }
    ]
  };
  
  return shops[keyColor] || [];
}

// Покупка предмета в магазине ключа
function buyKeyItem(keyColor, item) {
  // Black key is a joker — use it if no key of the needed color
  if (d.keys[keyColor] <= 0 && d.keys.black > 0) {
    keyColor = 'black';
  }
  if (d.keys[keyColor] <= 0) {
    showToast(`No ${keyColor} keys!`);
    return;
  }

  // === БЛОКИРОВКА ДЛЯ GLITCH BOX ===
  if (item.type === 'glitchBox') {
      const now = Date.now();
      const days = d.glitchBox.cooldownDays || 3;
      const cooldownMs = days * 24 * 60 * 60 * 1000;
      const lastOpen = d.glitchBox.lastOpen || 0;
      
      if (d.glitchBox.firstOpen || (now - lastOpen >= cooldownMs)) {
          showToast(t('open_glitch_first') || "Open Glitch Box first");
          return; 
      }
  }

  // === БЛОКИРОВКА ДЛЯ КАПСУЛЫ ===
  if (item.type === 'skipCooldown') {
      const now = Date.now();
      const cooldownTime = 23 * 60 * 60 * 1000;
      const lastOpen = d.capsule.lastOpen || 0;

      if (d.capsule.firstOpen || (now - lastOpen >= cooldownTime)) {
          showToast(t('open_capsule_first') || "Open Capsule first"); 
          return;
      }
  }

  // === НОВАЯ БЛОКИРОВКА ДЛЯ ПАЗЛОВ (КРАСНЫЙ КЛЮЧ) ===
  if (item.type === 'puzzle') {
      // Проверяем есть ли хоть один незаполненный пазл из всех 5
      function _hasMissing(arr, len) { for(let i=0;i<len;i++) if(!arr[i]) return true; return false; }
      const allDone =
          (d.puzzleDone  || !_hasMissing(d.puzzles,  9))  &&
          (d.puzzle2Done || !_hasMissing(d.puzzles2, 9))  &&
          (d.puzzle3Done || !_hasMissing(d.puzzles3, 9))  &&
          (d.puzzle4Done || !_hasMissing(d.puzzles4, 9))  &&
          (d.puzzle5Done || !_hasMissing(d.puzzles5, 25));
      if (allDone) {
          showToast(t('all_puzzles_owned') || "All puzzle pieces owned!");
          return;
      }
  }

  // Если дошли сюда — значит всё ок, списываем ключ
  d.keys[keyColor]--;
  
  // Применяем награду
  applyKeyReward(keyColor, item);
  
  // Сохраняем и обновляем
  save();
  updateKeysUI();
  ui();
}

// Применить награду за ключ
function applyKeyReward(keyColor, item) {
  switch(item.type) {
    case 'tickets':
  // корректно добавляем в глобальную структуру билетов
  if (typeof gameTickets !== 'undefined' && typeof gameTickets.current !== 'undefined') {
    gameTickets.current = (gameTickets.current || 0) + (item.value || 0);
    // если есть функция сохранения/обновления билетов — вызываем её
    if (typeof saveTickets === 'function') saveTickets();
    if (typeof updateTicketsUI === 'function') updateTicketsUI();
  } else {
    // fallback — старый стиль
    d.tickets = (d.tickets || 0) + (item.value || 0);
    save();
    ui();
  }
  showToast(`+${item.value} tickets`);
  break;
      
    case 'capsules':
      // Открываем 5 капсул подряд
      openMultipleCapsules(item.value);
      break;
      
    case 'goldCapsule':
      // Открываем золотую капсулу
      if (!d.goldCapsule) d.goldCapsule = { obtained: false, opened: false };
      d.goldCapsule.obtained = true;
      startGoldCapsuleSequence();
      break;
      
    case 'puzzle':
      // Даем случайный кусочек пазла
      giveRandomPuzzlePiece();
      break;
      
    case 'skipCooldown':
      // Пропускаем кулдаун капсулы
      d.capsule.lastOpen = 0;
      showToast('Capsule cooldown skipped!');
      break;

    case 'skipFuse':
      if (d.fuse?.active) {
        d.fuse.fusingEnd = Date.now() - 1;
        showToast('⚗️ Fuse timer skipped!');
        setTimeout(() => { if (typeof _fuseCheckComplete === 'function') _fuseCheckComplete(); }, 200);
      } else {
        showToast('No active Fuse to skip!');
      }
      break;
      
    case 'glitchBox':
      _giveGlitchFragment();
      break;
      
    case 'ek':
      // Добавляем EK (нужно добавить систему EK в d)
      if (!d.ek) d.ek = 0;
      d.ek += item.value;
      d.ekLifetime = (d.ekLifetime || 0) + item.value;
      showToast(`+${item.value} EK coins!`);
      break;

    case 'miliBox2':
      if (!d.miliBox) d.miliBox = { obtained: false, taps: 0, pending: 0 };
      d.miliBox.pending = (d.miliBox.pending || 0) + 2;
      d.miliBox.obtained = true; d.miliBox.taps = 0;
      save();
      showToast('🎀 2 Cuteness Boxes!');
      setTimeout(() => startMiliBoxSequence(), 200);
      break;
    case 'dkeyTokens':
      if (!d.quests) d.quests = {};
      d.quests.znetons = (d.quests.znetons || 0) + 20;
      save(); if (typeof ui === 'function') ui();
      showToast('+20 Tokens!');
      break;

    case 'adminNoobBox':
      if (!d.noobBox) d.noobBox = { obtained: false, opened: false, taps: 0 };
      d.noobBox.obtained = true; d.noobBox.opened = false; d.noobBox.taps = 0;
      save(); startNoobBoxSequence();
      break;
    case 'adminCapsule':
      d.capsule.lastOpen = 0;
      d._skipDiamondCount = true; // флаг: не считать в счётчик
      save(); openCapsule();
      break;
    case 'adminGoldCapsule':
      if (!d.goldCapsule) d.goldCapsule = { obtained: false, opened: false, taps: 0 };
      d.goldCapsule.obtained = true; d.goldCapsule.opened = false;
      save(); startGoldCapsuleSequence();
      break;
    case 'adminGlitchBox':
      _giveGlitchFragment();
      break;
    case 'adminBombBox':
      if (!d.bombBox) d.bombBox = { obtained: false };
      d.bombBox.obtained = true;
      save(); if (typeof startBombBoxSequence === 'function') startBombBoxSequence();
      break;
    case 'adminSafeNoob':
      if (!d.safe) d.safe = {};
      d.safe.lastOpen = 0;
      save(); if (typeof _startSafeOpening === 'function') _startSafeOpening('noob');
      break;
    case 'adminSafeIron':
      if (!d.safe) d.safe = {};
      d.safe.lastOpen = 0;
      save(); if (typeof _startSafeOpening === 'function') _startSafeOpening('iron');
      break;
    case 'adminSafeElite':
      if (!d.safe) d.safe = {};
      d.safe.lastOpen = 0;
      save(); if (typeof _startSafeOpening === 'function') _startSafeOpening('elite');
      break;
    case 'adminKeyBox':
      if (!d.keyBox) d.keyBox = { taps: 0 };
      d.keyBox.taps = 0;
      save(); if (typeof startKeyBoxSequence === 'function') startKeyBoxSequence();
      break;
    case 'adminWheel':
      window._freeWheelSpin = true;
      if (!d.fortuneWheel) d.fortuneWheel = { spinsUsed: 0, lastResetTime: 0 };
      d.fortuneWheel.spinsUsed = 0; d.fortuneWheel.lastResetTime = 0;
      save();
      setTimeout(() => {
        const modal = document.getElementById('fortuneWheelModal');
        if (modal) { modal.style.display = 'flex'; }
      }, 300);
      break;
      
    case 'income':
      // Добавляем 10 часов дохода
      const hourlyRate = getHourlyRate();
      const reward = Math.floor(hourlyRate * item.value / 100) * 100; // Округляем до сотен
      d.tokens += reward;
      showToast(`+${formatNumber(reward)} KSPT (${item.value}h income)`);
      break;
      
    case 'tapBoost':
      // Активируем tap boost на 5 минут
      activateTapBoost(item.value);
      break;
  }
}

// Открыть несколько капсул подряд
// Открыть N обычных капсул последовательно (без пропуска)
function openMultipleCapsules(count) {
  if (!count || count <= 0) return;
  d._skipDiamondCount = true; // массовое открытие не считается
  let opened = 0;

  function tryOpenNext() {
    // если уже открылось нужное количество — выходим
    if (opened >= count) return;

    // если в данный момент капсула открывается — подождать и попробовать снова
    if (typeof capsuleOpening !== 'undefined' && capsuleOpening) {
      setTimeout(tryOpenNext, 300); // попробовать через 300ms
      return;
    }

    // открываем следующую капсулу
    opened++;
    // временно сбросим lastOpen чтобы пропустить кулдаун внутри startCapsuleSequence, если там есть
    const originalLastOpen = d.capsule ? d.capsule.lastOpen || 0 : 0;
    if (d.capsule) d.capsule.lastOpen = 0;

    startCapsuleSequence();

    // восстанавливаем original lastOpen через небольшую задержку (на случай, если startCapsuleSequence асинхронно читает lastOpen)
    setTimeout(() => {
      if (d.capsule) d.capsule.lastOpen = originalLastOpen;
    }, 50);

    // планируем следующую попытку через 700ms — но tryOpenNext сам дождётся окончания при необходимости
    setTimeout(tryOpenNext, 700);
  }

  tryOpenNext();
  setTimeout(() => { delete d._skipDiamondCount; }, count * 800 + 500);
}

// Дать случайный кусочек пазла
function giveRandomPuzzlePiece() {
  const now = Date.now();
  const delay = 0;
  
  if (!d.puzzleDone) {
    // --- Первый пазл ---
    const missing = [];
    for (let i = 0; i < 9; i++) {
      if (d.puzzles[i] === 0) missing.push(i);
    }
    
    if (missing.length > 0) {
      const idx = missing[Math.floor(Math.random() * missing.length)];
  d.glitchFragments[idx] = true;
  showToast(`🌀 Glitch Fragment ${idx + 1}/3 obtained!`);
  _lastGlitchFragmentIdx = idx;
    } else {
      // Все собраны — убираем награду, просто пишем текст
      showToast(t('all_puzzles_owned'));
    }

  } else if (now < (d.puzzleDoneTime || 0) + delay) {
    // --- Перерыв между пазлами ---
    // Оставляем небольшую награду за ожидание (или можешь убрать d.tokens += 50)
    d.tokens += 50;
    showToast(`+50 KSPT (${t('puzzle_next_wait')})`);

  } else if (!d.puzzle2Done) {
    // --- Второй пазл ---
    const missing = [];
    for (let i = 0; i < 9; i++) {
      if (d.puzzles2[i] === 0) missing.push(i);
    }
    if (missing.length > 0) {
      const idx = missing[Math.floor(Math.random() * missing.length)];
      d.puzzles2[idx] = 1;
      showToast(`Puzzle piece ${idx + 11} obtained!`);
    } else {
      showToast(t('all_puzzles_owned'));
    }
  } else if (!d.puzzle3Done) {
    // --- Третий пазл ---
    const missing = [];
    for (let i = 0; i < 9; i++) {
      if (d.puzzles3[i] === 0) missing.push(i);
    }
    if (missing.length > 0) {
      const idx = missing[Math.floor(Math.random() * missing.length)];
      d.puzzles3[idx] = 1;
      showToast(`Puzzle piece ${idx + 20} obtained!`);
    } else {
      showToast(t('all_puzzles_owned'));
    }
  } else if (!d.puzzle4Done) {
    // --- Четвёртый пазл ---
    const missing = [];
    for (let i = 0; i < 9; i++) {
      if (d.puzzles4[i] === 0) missing.push(i);
    }
    if (missing.length > 0) {
      const idx = missing[Math.floor(Math.random() * missing.length)];
      d.puzzles4[idx] = 1;
      showToast(`UFO Piece ${idx + 1} obtained!`);
    } else {
      showToast(t('all_puzzles_owned'));
    }
  } else if (!d.puzzle5Done) {
    // --- Пятый пазл ---
    const missing = [];
    for (let i = 0; i < 25; i++) {
      if (d.puzzles5[i] === 0) missing.push(i);
    }
    if (missing.length > 0) {
      const idx = missing[Math.floor(Math.random() * missing.length)];
      d.puzzles5[idx] = 1;
      showToast(`Dragon Piece ${idx + 1} obtained!`);
    } else {
      showToast(t('all_puzzles_owned'));
    }
  } else {
    showToast(t('all_puzzles_owned'));
  }

  updatePuzzleUI();
  if (typeof updateSecondPuzzleUI === 'function') updateSecondPuzzleUI();
  if (typeof updateThirdPuzzleUI === 'function') updateThirdPuzzleUI();
  if (typeof updateFourthPuzzleUI === 'function') updateFourthPuzzleUI();
  if (typeof updateFifthPuzzleUI === 'function') updateFifthPuzzleUI();
}

// ===== GLITCH FRAGMENT SYSTEM =====
let _lastGlitchFragmentIdx = 0;
function _giveGlitchFragment() {
  if (!d.glitchFragments) d.glitchFragments = [false, false, false];

  const missing = d.glitchFragments.map((v, i) => (!v ? i : -1)).filter(i => i >= 0);
  if (missing.length === 0) {
    showToast('All 3 fragments already collected!');
    return;
  }
  // Случайный из недостающих
  const idx = missing[Math.floor(Math.random() * missing.length)];
  d.glitchFragments[idx] = true;
  showToast(`🌀 Glitch Fragment ${idx + 1}/3 obtained!`);

  if (d.glitchFragments.every(v => v)) {
    d.glitchBox.firstOpen = true;
    save();
    updateGlitchBoxUI();
    showToast('🌀 All 3 fragments! Press OPEN to claim!');
  } else {
    save();
    updateGlitchBoxUI();
  }
}

// ===== TAP EMOTE =====
function _spawnTapEmote(x, y) {
  if (!d.tapEmote || !d.tapEmote.enabled || !d.tapEmote.emote) return;
  const el = document.createElement('img');
  el.src = d.tapEmote.emote + '.png';
  el.style.cssText = `
    position:fixed; left:${x - 20}px; top:${y - 20}px;
    width:40px; height:40px; object-fit:contain;
    pointer-events:none; z-index:50000;
    animation: tapEmoteFloat 0.9s ease-out forwards;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}
// CSS для анимации — инжектируется один раз
(function(){
  if (document.getElementById('_tapEmoteStyle')) return;
  const s = document.createElement('style');
  s.id = '_tapEmoteStyle';
  s.textContent = `@keyframes tapEmoteFloat {
    0%   { opacity:1; transform: translateY(0) scale(1) rotate(-10deg); }
    60%  { opacity:1; transform: translateY(-50px) scale(1.2) rotate(10deg); }
    100% { opacity:0; transform: translateY(-90px) scale(0.8) rotate(-5deg); }
  }`;
  document.head.appendChild(s);
})();
function toggleTapEmoteSetting(val) {
  if (!d.tapEmote) d.tapEmote = { enabled: false, emote: 'milo' };
  d.tapEmote.enabled = val;
  const opts = document.getElementById('tapEmoteOptions');
  if (opts) opts.style.display = val ? 'flex' : 'none';
  save();
}

function _renderTapEmoteOptions() {
  const list = document.getElementById('tapEmoteList');
  if (!list) return;
  const emotes = [
    { id: 'milo', name: t('emote_heart'), img: 'milo.png' }
  ];
  // только разблокированные
  const owned = emotes.filter(e => {
    if (e.id === 'milo') return d.unlockedEmotes && d.unlockedEmotes.includes('milo');
    return false;
  });
  list.innerHTML = owned.map(e => `
    <div onclick="selectTapEmote('${e.id}')" style="
      cursor:pointer;padding:8px;border-radius:10px;text-align:center;
      border:2px solid ${d.tapEmote?.emote===e.id?'#c084fc':'#333'};
      background:${d.tapEmote?.emote===e.id?'#1a0a2e':'#111'};
      transition:.2s;">
      <img src="${e.img}" style="width:36px;height:36px;object-fit:contain;">
      <div style="font-size:10px;color:#aaa;margin-top:4px;">${e.name}</div>
    </div>
  `).join('') || `<div style="color:#555;font-size:12px;">${t('tap_emote_none')}</div>`;
}

function selectTapEmote(id) {
  if (!d.tapEmote) d.tapEmote = { enabled: true, emote: id };
  d.tapEmote.emote = id;
  save();
  _renderTapEmoteOptions();
}

// Инициализация настроек анимации при открытии
const _origShowSettingsSub = typeof showSettingsSub === 'function' ? showSettingsSub : null;
// ===== /TAP EMOTE =====

// Активировать tap boost
function activateTapBoost(durationSeconds) {
  d.tapBoostEnd = Date.now() + (durationSeconds * 1000);
  d.questOverdriveUses = (d.questOverdriveUses || 0) + 1;
  checkQuestProgress('overdrive');
  showToast(`Tap boost activated! +0.10 KSPT per tap for ${Math.floor(durationSeconds / 60)}min`);
  
  // Меняем фон на fire.png
  document.body.style.backgroundImage = "url('fire.png')";
  
  // Показываем индикатор
  const indicator = document.getElementById('tapBoostIndicator');
  if (indicator) {
    indicator.classList.add('active');
  }
  
  // Запускаем таймер
  updateBoostTimers();
}

// Обновление таймеров бустов
function updateBoostTimers() {
  const now = Date.now();
  
  // Tap boost timer
  if (d.tapBoostEnd > now) {
    const remaining = Math.floor((d.tapBoostEnd - now) / 1000);
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    
    const timerElement = document.getElementById('tapBoostTimer');
    if (timerElement) {
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  } else if (d.tapBoostEnd > 0) {
    // Tap boost закончился
    d.tapBoostEnd = 0;
    const indicator = document.getElementById('tapBoostIndicator');
    if (indicator) {
      indicator.classList.remove('active');
    }
    // Восстанавливаем обычный фон
    updateBackground();
  }
  
  // Offline multiplier timer
  if (d.offlineMultiplierEnd > now) {
    // Можно добавить отображение, если нужно
  } else if (d.offlineMultiplierEnd > 0) {
    // Offline multiplier закончился
    d.offlineMultiplierEnd = 0;
  }
  
  // Обновляем таймер каждую секунду
  if (d.tapBoostEnd > now || d.offlineMultiplierEnd > now) {
    setTimeout(updateBoostTimers, 1000);
  }
}

// Получить компенсацию за максимальный ключ
function getKeyCompensation(keyColor) {
  const hourlyRate = getHourlyRate();
  const compensation = Math.floor(hourlyRate * 5); // 5 часов дохода
  return Math.floor(compensation / 100) * 100; // Округляем до сотен
}

// Добавить ключ (с проверкой на максимум)
function addKey(keyColor) {
  if (d.keys[keyColor] >= 4) {
    // Даем компенсацию
    const compensation = getKeyCompensation(keyColor);
    d.tokens += compensation;
    showToast(`Max ${keyColor} keys! +${formatNumber(compensation)} KSPT compensation`);
    return false;
  }
  
  d.keys[keyColor]++;
  showToast(`${keyColor.charAt(0).toUpperCase() + keyColor.slice(1)} key obtained!`);
  return true;
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
  if (typeof updateSkinButtons === 'function') updateSkinButtons();
  if (typeof updateSkinPreviews === 'function') updateSkinPreviews();
  if (typeof ui === 'function') ui();

  showToast('🎉 Скин получен!');
}

// ===== GLITCH BOX SYSTEM =====

// Инициализация аудио для glitch эффектов
function initGlitchAudio() {
  try {
    if (!glitchAudioContext) {
      glitchAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Создаем простой glitch звук
      createGlitchSound();
    }
  } catch (e) {
    console.warn('Web Audio API not supported:', e);
  }
}

// Создание glitch звука
function createGlitchSound() {
  if (!glitchAudioContext) return;
  
  const bufferSize = glitchAudioContext.sampleRate * 0.1; // 0.1 секунда
  const buffer = glitchAudioContext.createBuffer(1, bufferSize, glitchAudioContext.sampleRate);
  const output = buffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  
  glitchAudioBuffer = buffer;
}

// Воспроизведение glitch звука
function playGlitchSound() {
  if (!glitchAudioContext || !glitchAudioBuffer) return;
  
  const source = glitchAudioContext.createBufferSource();
  source.buffer = glitchAudioBuffer;
  source.connect(glitchAudioContext.destination);
  source.start();
  
  // Немного меняем высоту тона для разнообразия
  source.playbackRate.value = 0.8 + Math.random() * 0.4;
}

// Открыть экран фрагментов
function openGlitchFragmentScreen() {
  const m = document.getElementById('glitchFragmentModal');
  if (m) { m.classList.add('active'); updateGlitchBoxUI(); }
}
function closeGlitchFragmentScreen() {
  const m = document.getElementById('glitchFragmentModal');
  if (m) m.classList.remove('active');
}

// Обновление UI Glitch Box (карточка + модальный экран)
function updateGlitchBoxUI() {
  const frags = d.glitchFragments || [false, false, false];
  const count = frags.filter(Boolean).length;
  const isReady = d.glitchBox.firstOpen || count >= 3;
  const multi = d.glitchBox.doubled || 1;

  // --- Множители ---
  ['glitchBoxMultiplier', 'glitchBoxMultiplierModal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = `x${multi}`;
  });

  // --- Мини-слоты на карточке ---
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`gfrag-${i}`);
    if (slot) slot.classList.toggle('owned', !!frags[i]);
    const miniImg = document.getElementById(`gfrag-mini-${i}`);
    if (miniImg) miniImg.classList.toggle('owned', !!frags[i]);
  }

  // --- Статус-строка карточки ---
  const glitchTimer = document.getElementById('glitchTimer');
  if (glitchTimer) {
    glitchTimer.textContent = isReady
      ? '✅ Ready to open!'
      : `${count} / 3 fragments collected`;
  }

  // --- Большие слоты в модалке ---
  for (let i = 0; i < 3; i++) {
    const piece = document.getElementById(`gfragPiece-${i}`);
    if (piece) piece.classList.toggle('owned', !!frags[i]);
  }

  // --- Полоска прогресса в модалке ---
  const fill = document.getElementById('gfragFill');
  if (fill) fill.style.width = `${Math.round((count / 3) * 100)}%`;
  const label = document.getElementById('gfragCounterLabel');
  if (label) label.textContent = `${count} / 3`;

  // --- Подзаголовок модалки ---
  const sub = document.getElementById('gfragModalSub');
  if (sub) sub.textContent = isReady
    ? '🌀 All fragments collected — open the box!'
    : `Collect ${3 - count} more fragment${3 - count !== 1 ? 's' : ''} to unlock`;

  // --- Кнопка открыть ---
  const openBtn = document.getElementById('gfragOpenBtn');
  if (openBtn) openBtn.disabled = !isReady;

  // --- Tap-прогресс (виден только когда бокс готов) ---
  const tapWrap = document.getElementById('gfragTapWrap');
  if (tapWrap) tapWrap.style.display = isReady ? 'block' : 'none';
  const pb2 = document.getElementById('glitchProgressBar2');
  if (pb2) pb2.style.width = `${Math.min(100, ((d.glitchBox.taps || 0) / 30) * 100)}%`;
  const tc2 = document.getElementById('glitchTapCount2');
  if (tc2) tc2.textContent = `Taps: ${d.glitchBox.taps || 0}/30`;
}

// ===== KEY BOX =====
let keyBoxOpening = false;
let keyBoxTapCount = 0;

function startKeyBoxSequence() {
  if (keyBoxOpening) return;
  keyBoxOpening = true;
  keyBoxTapCount = (d.keyBox && d.keyBox.taps) ? d.keyBox.taps : 0;

  const modal = document.getElementById('keyBoxModal');
  const img = document.getElementById('keyBoxBreakImg');
  const hint = document.getElementById('keyBoxHint');

  if (!modal || !img) { keyBoxOpening = false; return; }

  img.src = 'keybox.png';
  hint.textContent = `Tap to open! (${keyBoxTapCount}/25)`;
  modal.classList.add('active');

  img.removeEventListener('click', keyBoxTapHandler);
  img.addEventListener('click', keyBoxTapHandler);
}

function keyBoxTapHandler(e) {
  const now = Date.now();
  if (lastCapsuleTapTime && now - lastCapsuleTapTime < 120) return;
  lastCapsuleTapTime = now;

  keyBoxTapCount++;
  if (!d.keyBox) d.keyBox = { taps: 0 };
  d.keyBox.taps = keyBoxTapCount;

  const img = document.getElementById('keyBoxBreakImg');
  const hint = document.getElementById('keyBoxHint');

  img.classList.add('tap-anim');
  setTimeout(() => img.classList.remove('tap-anim'), 220);
  hint.textContent = `Tap to open! (${keyBoxTapCount}/25)`;

  const bar = document.getElementById('keyBoxProgressBar');
  const tapLabel = document.getElementById('keyBoxTapCount');
  if (bar) bar.style.width = Math.min(100, (keyBoxTapCount / 25) * 100) + '%';
  if (tapLabel) tapLabel.textContent = `Taps: ${keyBoxTapCount}/25`;

  if (keyBoxTapCount >= 25) {
    img.src = 'keybox1.png';
    hint.textContent = 'Opening...';
    img.removeEventListener('click', keyBoxTapHandler);
    setTimeout(() => openKeyBox(), 350);
  }

  save();
}

function openKeyBox() {
  const modal = document.getElementById('keyBoxModal');
  const whiteFade = document.getElementById('whiteFade');

  if (whiteFade) {
    whiteFade.classList.add('active');
    setTimeout(() => whiteFade.classList.remove('active'), 250);
  }

  setTimeout(() => {
    const roll = Math.random() * 100;
    let wonKey;
    if (roll < 40)       wonKey = 'yellow';
    else if (roll < 70)  wonKey = 'red';
    else if (roll < 90)  wonKey = 'green';
    else if (roll < 99)  wonKey = 'blue';
    else                 wonKey = 'black';

    const keyImgMap = {
      yellow: 'yellow.png',
      red: 'red.png',
      green: 'green.png',
      blue: 'blue.png',
      black: 'black.png'
    };

    const isBlack = wonKey === 'black';
    const added = addKey(wonKey);
    const rewardImg = keyImgMap[wonKey];
    const keyName = wonKey.charAt(0).toUpperCase() + wonKey.slice(1);
    const rewardText = added ? `${keyName} Key!` : `${keyName} Key (MAX — KSPT compensation)`;
    const rewardDesc = isBlack
      ? '🃏 Secret Black Key — a joker key that works like all other keys combined. Use it in any shop!'
      : '';

    d.keyBox.taps = 0;
    save();

    const bar = document.getElementById('keyBoxProgressBar');
    const tapLabel = document.getElementById('keyBoxTapCount');
    if (bar) bar.style.width = '0%';
    if (tapLabel) tapLabel.textContent = 'Taps: 0/25';

    if (modal) modal.classList.remove('active');
    keyBoxOpening = false;
    keyBoxTapCount = 0;

    const rewardModal = document.getElementById('keyBoxRewardModal');
    const rewardImgEl = document.getElementById('keyBoxRewardImg');
    const rewardTextEl = document.getElementById('keyBoxRewardText');
    const rewardDescEl = document.getElementById('keyBoxRewardDesc');

    if (rewardModal && rewardImgEl && rewardTextEl) {
      rewardImgEl.src = rewardImg;
      rewardTextEl.textContent = rewardText;
      if (rewardDescEl) rewardDescEl.textContent = rewardDesc;
      rewardModal.style.display = 'flex';
    }

    ui();
    updateKeysUI();
  }, 300);
}

function closeKeyBoxReward() {
  const modal = document.getElementById('keyBoxRewardModal');
  if (modal) modal.style.display = 'none';
}

// ===== FORTUNE WHEEL =====
const WHEEL_SEGMENTS = [
  { label: 'Try Again',    color: '#374151', textColor: '#9ca3af', chance: 25, icon: null         },
  { label: '+30h Income',  color: '#065f46', textColor: '#6ee7b7', chance: 20, icon: 'kspt.png'   },
  { label: 'Noob Box',     color: '#1e3a5f', textColor: '#93c5fd', chance: 15, icon: 'noob.png'   },
  { label: 'Key Box',      color: '#78350f', textColor: '#fcd34d', chance: 15, icon: 'keybox.png' },
  { label: 'Glitch Box',   color: '#4c1d95', textColor: '#c4b5fd', chance: 10, icon: 'glitchbox.png' },
  { label: 'Gold Capsule', color: '#7c2d12', textColor: '#fdba74', chance: 8,  icon: 'cagold.png'   },
  { label: 'Blue Key',     color: '#1e3a8a', textColor: '#93c5fd', chance: 5,  icon: 'blue.png'   },
  { label: 'DogeToken',    color: '#92400e', textColor: '#fde68a', chance: 2,  icon: 'doge.png'   },
];

const WHEEL_COOLDOWN_HOURS = 50;
const WHEEL_MAX_SPINS = 1;
const WHEEL_MIN_RATE = 400; // min KSPT/h to use wheel

let wheelSpinning = false;
let wheelCurrentAngle = 0;
let wheelAudioCtx = null;

function getWheelPrice() {
  const rate = getHourlyRate();
  return Math.round(rate * 40 / 1000) * 1000;
}

function updateFortuneWheelCard() {
  const rate = getHourlyRate();
  const priceEl = document.getElementById('fortuneWheelPrice');
  const coolEl = document.getElementById('fortuneWheelCooldownInfo');
  const spinsEl = document.getElementById('fortuneWheelSpinsLeft');
  const btn = document.getElementById('fortuneWheelBtn');
  if (!priceEl) return;

  if (rate < WHEEL_MIN_RATE) {
    priceEl.textContent = `Requires 400+ KSPT/h offline income`;
    if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }
    if (spinsEl) spinsEl.style.display = 'none';
    if (coolEl) coolEl.style.display = 'none';
    return;
  }

  const price = getWheelPrice();
  priceEl.textContent = `Price: ${formatNumber(price)} KSPT`;

  // check cooldown
  const fw = d.fortuneWheel;
  const now = Date.now();
  const cooldownMs = WHEEL_COOLDOWN_HOURS * 3600 * 1000;
  const sinceReset = now - (fw.lastResetTime || 0);

  if (fw.spinsUsed >= WHEEL_MAX_SPINS && sinceReset < cooldownMs) {
    const remaining = cooldownMs - sinceReset;
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    if (coolEl) { coolEl.textContent = `Cooldown: ${h}h ${m}m remaining`; coolEl.style.display = 'block'; }
    if (spinsEl) { spinsEl.textContent = `Spins: 0/1 (cooldown)`; spinsEl.style.display = 'block'; }
    if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }
  } else {
    if (fw.spinsUsed >= WHEEL_MAX_SPINS) {
      // reset
      fw.spinsUsed = 0;
      fw.lastResetTime = 0;
      save();
    }
    const left = WHEEL_MAX_SPINS - fw.spinsUsed;
    if (coolEl) coolEl.style.display = 'none';
    if (spinsEl) { spinsEl.textContent = `Spins left: ${left}/1`; spinsEl.style.display = 'block'; }
    if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
  }
  // Draw mini preview in card
  const preview = document.getElementById('fortuneWheelPreview');
  if (preview) preloadWheelImages(() => drawWheel(wheelCurrentAngle, preview));
}
// Image cache for wheel icons
const _wheelImgCache = {};
function _loadWheelImg(src, cb) {
  if (!src) { cb(null); return; }
  if (_wheelImgCache[src] === true) { cb(null); return; }
  if (_wheelImgCache[src] instanceof Image) { cb(_wheelImgCache[src]); return; }
  // avoid duplicate loads
  if (_wheelImgCache[src] === 'loading') {
    const wait = setInterval(() => {
      if (_wheelImgCache[src] !== 'loading') { clearInterval(wait); cb(_wheelImgCache[src] instanceof Image ? _wheelImgCache[src] : null); }
    }, 50);
    return;
  }
  _wheelImgCache[src] = 'loading';
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => { _wheelImgCache[src] = img; cb(img); };
  img.onerror = () => { _wheelImgCache[src] = true; cb(null); };
  img.src = src;
}

function preloadWheelImages(onDone) {
  let pending = WHEEL_SEGMENTS.filter(s => s.icon).length;
  if (pending === 0) { if (onDone) onDone(); return; }
  WHEEL_SEGMENTS.forEach(seg => {
    if (!seg.icon) return;
    _loadWheelImg(seg.icon, () => {
      pending--;
      if (pending === 0 && onDone) onDone();
    });
  });
}

function drawWheel(angle, targetCanvas) {
  const canvas = targetCanvas || document.getElementById('fortuneWheelCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2, r = cx - 4;
  const total = WHEEL_SEGMENTS.length;
  const arc = (Math.PI * 2) / total;
  const isSmall = r < 80;

  ctx.clearRect(0, 0, w, h);

  WHEEL_SEGMENTS.forEach((seg, i) => {
    const startAngle = angle + i * arc;
    const endAngle = startAngle + arc;
    const midAngle = startAngle + arc / 2;

    // Slice
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = '#0d0d1a';
    ctx.lineWidth = isSmall ? 1.5 : 2.5;
    ctx.stroke();

    // Position for icon + label
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(midAngle);

    const iconDist = r * 0.65;
    const iconSize = isSmall ? 14 : 26;

    const img = seg.icon ? (_wheelImgCache[seg.icon] instanceof Image ? _wheelImgCache[seg.icon] : null) : null;

    if (img) {
      // Draw sprite icon
      ctx.drawImage(img, iconDist - iconSize / 2, -iconSize / 2, iconSize, iconSize);
    } else if (!seg.icon) {
      // "Try Again" — draw X
      ctx.strokeStyle = '#6b7280';
      ctx.lineWidth = isSmall ? 1.5 : 2.5;
      const s = iconSize / 2 - 2;
      ctx.beginPath(); ctx.moveTo(iconDist - s, -s); ctx.lineTo(iconDist + s, s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(iconDist + s, -s); ctx.lineTo(iconDist - s, s); ctx.stroke();
    }

    // Label under icon
    if (!isSmall) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = seg.textColor;
      ctx.font = 'bold 8.5px sans-serif';
      // Shorten label to fit
      const words = seg.label.split(' ');
      const short = words.length >= 2 ? words[0] + (words[1].length <= 4 ? ' ' + words[1] : '') : seg.label;
      ctx.fillText(short, iconDist, iconSize / 2 + 3);
    }

    ctx.restore();
  });

  // Outer ring glow
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = '#7c3aed';
  ctx.lineWidth = isSmall ? 2 : 4;
  ctx.stroke();

  // Center circle
  const cr = isSmall ? 10 : 20;
  ctx.beginPath();
  ctx.arc(cx, cy, cr, 0, Math.PI * 2);
  ctx.fillStyle = '#1a0533';
  ctx.fill();
  ctx.strokeStyle = '#d946ef';
  ctx.lineWidth = isSmall ? 2 : 3;
  ctx.stroke();
  ctx.fillStyle = '#d946ef';
  ctx.font = `bold ${isSmall ? 10 : 15}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('✦', cx, cy);
}

function openFortuneWheel() {
  const rate = getHourlyRate();
  if (rate < WHEEL_MIN_RATE) {
    showToast('Need 400+ KSPT/h to use Fortune Wheel!');
    return;
  }
  const fw = d.fortuneWheel;
  const now = Date.now();
  const cooldownMs = WHEEL_COOLDOWN_HOURS * 3600 * 1000;
  if (fw.spinsUsed >= WHEEL_MAX_SPINS && (now - (fw.lastResetTime || 0)) < cooldownMs) {
    showToast('Fortune Wheel on cooldown!');
    return;
  }

  const modal = document.getElementById('fortuneWheelModal');
  if (modal) {
    modal.style.display = 'flex';
    document.getElementById('fortuneWheelResult').textContent = '';
    document.getElementById('fortuneWheelSpinBtn').disabled = false;
    const priceLabel = document.getElementById('fortuneWheelModalPrice');
    if (priceLabel) priceLabel.textContent = `Cost per spin: ${formatNumber(getWheelPrice())} KSPT`;
    preloadWheelImages(() => drawWheel(wheelCurrentAngle));
  }
}

function openWheelOdds() {
  const modal = document.getElementById('wheelOddsModal');
  const content = document.getElementById('wheelOddsContent');
  if (!modal || !content) return;
  content.innerHTML = WHEEL_SEGMENTS.map(seg => {
    const imgEl = seg.icon
      ? `<img src="${seg.icon}" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;margin-right:8px;" onerror="this.style.display='none'">`
      : `<span style="font-size:18px;margin-right:8px;">✕</span>`;
    const barW = Math.round(seg.chance * 2.8);
    return `<div style="display:flex;align-items:center;margin-bottom:10px;">
      ${imgEl}
      <div style="flex:1;">
        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
          <span style="color:#e9d5ff;font-size:13px;">${seg.label}</span>
          <span style="color:#d946ef;font-weight:bold;font-size:13px;">${seg.chance}%</span>
        </div>
        <div style="background:#2a1a3e;border-radius:4px;height:7px;">
          <div style="background:linear-gradient(90deg,#7c3aed,#d946ef);width:${barW}px;height:100%;border-radius:4px;"></div>
        </div>
      </div>
    </div>`;
  }).join('');
  modal.style.display = 'flex';
}

function closeWheelOdds() {
  const modal = document.getElementById('wheelOddsModal');
  if (modal) modal.style.display = 'none';
}

function closeFortuneWheel() {
  const modal = document.getElementById('fortuneWheelModal');
  if (modal) modal.style.display = 'none';
  updateFortuneWheelCard();
}

// ===== LEADERBOARD =====
let _lbInterval = null;
let _lbLastPlayers = [];

function getMyTelegramUser() {
  const u = window.Telegram?.WebApp?.initDataUnsafe?.user;
  return u || null;
}

function getMyUid() {
  return String(window.Telegram?.WebApp?.initDataUnsafe?.user?.id || localStorage.getItem('_kspt_uid') || 'local');
}

function openLeaderboard() {
  const modal = document.getElementById('leaderboardModal');
  if (modal) modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  // Сначала пишем свои данные, потом загружаем
  pushMyLeaderboardData();
  loadLeaderboard();
  _lbInterval = setInterval(loadLeaderboard, 10000);
}

function closeLeaderboard() {
  const modal = document.getElementById('leaderboardModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
  if (_lbInterval) { clearInterval(_lbInterval); _lbInterval = null; }
}

function formatLastSeen(updatedAt) {
  if (!updatedAt) return '';
  const diff = Date.now() - updatedAt;
  const ONLINE_THRESHOLD = 3 * 60 * 1000; // 3 минуты = "онлайн"
  if (diff < ONLINE_THRESHOLD) return t('lb_online');
  const h  = Math.floor(diff / 3600000);
  const d  = Math.floor(diff / 86400000);
  const w  = Math.floor(diff / (7 * 86400000));
  const mo = Math.floor(diff / (30 * 86400000));
  if (mo >= 1 && w >= 5) return t('lb_long_ago');
  if (mo === 1 || (w >= 3 && w < 5)) return t('lb_month_ago');
  if (w >= 2) return t('lb_weeks_ago').replace('{0}', w);
  if (w === 1) return t('lb_week_ago');
  if (d >= 2) return t('lb_days_ago').replace('{0}', d);
  if (d === 1) return t('lb_day_ago');
  if (h >= 1) return t('lb_hours_ago').replace('{0}', h);
  return t('lb_less_hour');
}

function pushMyLeaderboardData() {
  if (!window._firebaseReady) return;
  // Hide players with undefined/empty name
  const _tgU = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const _checkName = _tgU?.first_name || _tgU?.username || localStorage.getItem('_kspt_nonTg_name') || '';
  if (_tgU && (!_checkName || _checkName === 'undefined')) return;
  // Для браузерных игроков: убедимся что имя задано перед пушем
   const uid = getMyUid();
  if (!_tgU && !localStorage.getItem('_kspt_nonTg_name')) {
    const sfx = uid.replace(/\D/g, '').slice(-2).padStart(2, '0') || '01';
    localStorage.setItem('_kspt_nonTg_name', 'Player' + sfx);
  }
  const tgUser = getMyTelegramUser();
  const isTg = !!tgUser;
  const rate = getHourlyRate();

  // Имя: для не-TG игроков добавляем числовой суффикс из uid
  let playerName;
  if (isTg) {
    const savedTgName = localStorage.getItem('_kspt_tg_custom_name');
    playerName = savedTgName || (tgUser.first_name + (tgUser.last_name ? ' ' + tgUser.last_name : ''));
  } else {
    // uid вида "u_abc123xyz" → берём последние 2 цифровых символа или просто 2 char
    const suffix = uid.replace(/\D/g, '').slice(-2).padStart(2, '0') || '01';
    const saved = localStorage.getItem('_kspt_nonTg_name');
    playerName = saved || ('Player' + suffix);
    localStorage.setItem('_kspt_nonTg_name', playerName);
  }

  // Аватарка: для не-TG берём выбранную или дефолтную
  const savedAvatar = !isTg ? (localStorage.getItem('_kspt_nonTg_avatar') || 'seri.png') : '';

  const entry = {
    uid: uid,
    name: playerName,
    username: tgUser?.username || '',
    photoUrl: isTg ? (localStorage.getItem('_kspt_tg_custom_avatar') || tgUser.photo_url || '') : savedAvatar,
    isTg: isTg,
    rate: Math.round(rate),
    tokens: Math.round(d.tokens || 0),
    updatedAt: Date.now(),
    lastSeen: Date.now(),
    playtimeMs: Math.round(d.playtimeMs || 0),
    adminBanned: d.adminBanned || false,
    customRank: d.customRank || null,
    bio: d.profile?.bio || '',
    favSkin: d.profile?.favSkin || '',
    favGame: d.profile?.favGame || '',
    skins: d.skins || {},
    secretSkins: d.secretSkins || {},
    myTokens: (d.market?.myTokens || []).filter(tk => String(tk.creatorId) === _getMyId()).map(tk => ({ ticker: tk.ticker||'', name: tk.name||'' })),
    streakDays: d.streak?.days || 0,
    streakActive: d.streak?.lastClaimTs ? (Date.now() - d.streak.lastClaimTs) < 86400000 * 1.5 : false,
    verified: d.verified || false,
    totalTaps: d.totalTaps || 0,
    puzzlesDone: [d.puzzleDone,d.puzzle2Done,d.puzzle3Done,d.puzzle4Done,d.puzzle5Done].filter(Boolean).length,
    fuseSkins: d.fuseSkins || {}
  };
  window._firebaseRef(window._firebaseDB, 'leaderboard/' + uid).set(entry);
}

function loadLeaderboard() {
  if (!window._firebaseReady) {
    document.getElementById('lbList').innerHTML = '<div style="text-align:center;color:#555;padding:30px;">Firebase not available</div>';
    return;
  }
  window._firebaseRef(window._firebaseDB, 'leaderboard').orderByChild('rate').limitToLast(100).once('value', function(snapshot) {
    const data = snapshot.val();
    if (!data) {
      document.getElementById('lbList').innerHTML = '<div style="text-align:center;color:#555;padding:30px;">No players yet</div>';
      return;
    }
    const myUid = typeof getMyUid === 'function' ? getMyUid() : null;
    const players = Object.values(data)
      .filter(p => (p.rate || 0) > 0)
      .sort((a, b) => b.rate - a.rate);

    // Если меня нет в списке — добавить принудительно для себя
    if (myUid && !players.find(p => String(p.uid) === String(myUid))) {
      players.push({
        uid: myUid,
        name: d.name || d.username || 'You',
        photoUrl: localStorage.getItem('_kspt_nonTg_avatar') || '',
        rate: Math.round(typeof getHourlyRate === 'function' ? getHourlyRate() : 0),
        tokens: Math.round(d.tokens || 0),
        lastSeen: Date.now(),
        playtimeMs: d.playtimeMs || 0,
        _selfOnly: true // маркер — не показывать другим
      });
      players.sort((a, b) => b.rate - a.rate);
    }

    renderLeaderboard(players);
    const upd = document.getElementById('lbUpdated');
    if (upd) upd.textContent = 'Updated: ' + new Date().toLocaleTimeString();
  });
}

function getPlayerRank(rate, customRank, isBanned) {
  if (isBanned || customRank === 'Banned') return {
    label: 'Banned', color: '#ff1744', glow: '#ff1744', border: '#ff1744'
  };
  // Кастомное звание от админа
  const custom = {
    'Noob':        { color: '#78909c', glow: '#78909c', border: '#78909c' },
    'Player':      { color: '#80cbc4', glow: '#80cbc4', border: '#80cbc4' },
    'Pro':         { color: '#42a5f5', glow: '#42a5f5', border: '#42a5f5' },
    'Veteran':     { color: '#ab47bc', glow: '#ab47bc', border: '#ab47bc' },
    'Master':      { color: '#ef5350', glow: '#ef5350', border: '#ef5350' },
    'Legend':      { color: '#ff7043', glow: '#ff7043', border: '#ff7043' },
    'Champion':    { color: '#ffa726', glow: '#ffa726', border: '#ffa726' },
    'Divine':      { color: '#26c6da', glow: '#26c6da', border: '#26c6da' },
    'God':         { color: '#ffd700', glow: '#ffd700', border: '#ffd700' },
    'Secret God':  { color: '#b0bec5', glow: '#eceff1', border: '#78909c' },
    'Madman':      { color: '#ff1744', glow: '#ff6d00', border: '#ff1744' },
    'Celestial':   { color: '#40c4ff', glow: '#80d8ff', border: '#40c4ff' },
    'Eternal':     { color: '#e040fb', glow: '#ff80ff', border: '#e040fb' },
    '∞':           { color: '#ffffff', glow: '#ffffff', border: '#ffffff' },
    'GreatMaster': { color: '#e040fb', glow: '#e040fb', border: '#e040fb' },
    'Admin':       { color: '#ff4081', glow: '#ff4081', border: '#ff4081' },
    'VIP':         { color: '#69f0ae', glow: '#69f0ae', border: '#69f0ae' },
    'Hacker':      { color: '#00e676', glow: '#00e676', border: '#00e676' },
    'Titan':       { color: '#40c4ff', glow: '#40c4ff', border: '#40c4ff' },
    'Creator':     { color: '#ffec6e', glow: '#de2f2f', border: '#ffec6e' },
    'Toxic':       { color: '#b2ff59', glow: '#b2ff59', border: '#b2ff59' },
    'Banned':      { color: '#ff1744', glow: '#ff1744', border: '#ff1744' }
  };
  if (customRank && custom[customRank]) return { label: customRank, ...custom[customRank] };
  // Авто по рейту
  if (rate >= 5000) return { label: '∞',           color: '#ffffff', glow: '#ffffff', border: '#ffffff' };
  if (rate >= 4500) return { label: 'Eternal',     color: '#e040fb', glow: '#ff80ff', border: '#e040fb' };
  if (rate >= 4000) return { label: 'Celestial',   color: '#40c4ff', glow: '#80d8ff', border: '#40c4ff' };
  if (rate >= 3500) return { label: 'Madman',      color: '#ff1744', glow: '#ff6d00', border: '#ff1744' };
  if (rate >= 3000) return { label: 'Secret God',  color: '#b0bec5', glow: '#eceff1', border: '#78909c' };
  if (rate >= 2500) return { label: 'God',        color: '#ffd700', glow: '#ffd700', border: '#ffd700' };
  if (rate >= 2300) return { label: 'Divine',   color: '#26c6da', glow: '#26c6da', border: '#26c6da' };
  if (rate >= 2000) return { label: 'Champion', color: '#ffa726', glow: '#ffa726', border: '#ffa726' };
  if (rate >= 1500) return { label: 'Legend',   color: '#ff7043', glow: '#ff7043', border: '#ff7043' };
  if (rate >= 1000) return { label: 'Master',   color: '#ef5350', glow: '#ef5350', border: '#ef5350' };
  if (rate >=  700) return { label: 'Veteran',  color: '#ab47bc', glow: '#ab47bc', border: '#ab47bc' };
  if (rate >=  400) return { label: 'Pro',      color: '#42a5f5', glow: '#42a5f5', border: '#42a5f5' };
  if (rate >=   20) return { label: 'Player',   color: '#80cbc4', glow: '#80cbc4', border: '#80cbc4' };
  return                  { label: 'Noob',      color: '#78909c', glow: '#78909c', border: '#78909c' };
}

function openPlayerDetail(p) {
  const rank = getPlayerRank(p.rate || 0, p.customRank || null, (p.adminBanned && !p.adminForceVisible) || false);

  // Аватар
  document.getElementById('pdAvatar').src = p.photoUrl || 'seri.png';
  document.getElementById('pdAvatar').onerror = function(){ this.src='seri.png'; };
  document.getElementById('pdAvatar').style.borderColor = rank.color;

  // Имя
  document.getElementById('pdName').textContent = p.name || 'Player';

  // Звание вместо username
  const rankEl = document.getElementById('pdUsername');
  rankEl.textContent = rank.label;
  rankEl.style.color = rank.color;
  rankEl.style.fontWeight = 'bold';
  rankEl.style.textShadow = `0 0 8px ${rank.glow}, 0 0 16px ${rank.glow}`;

  // Рамка попапа
  const box = document.getElementById('pdModalBox');
  if (box) {
    box.style.border = `2px solid ${rank.border}`;
    box.style.boxShadow = `0 0 18px ${rank.glow}44, 0 0 40px ${rank.glow}22`;
  }

  document.getElementById('pdRate').textContent = formatNumber(p.rate) + ' KSPT/h';
  document.getElementById('pdTokens').textContent = formatNumber(p.tokens || 0) + ' KSPT';
  document.getElementById('pdPlaytime').textContent = p.playtimeMs ? _formatPlaytime(p.playtimeMs) : '—';
  document.getElementById('pdLastSeen').textContent = formatLastSeen(p.lastSeen || p.updatedAt);

  const modal = document.getElementById('playerDetailModal');
  modal.style.display = 'flex';
}

function renderLeaderboard(players) {
  _lbLastPlayers = players;
  const myUid = getMyUid();
  const list = document.getElementById('lbList');
  if (!list) return;

  const medals = ['🥇', '🥈', '🥉'];

  // My rank card
  const myIdx = players.findIndex(p => String(p.uid) === String(myUid));
  const myCard = document.getElementById('lbMyRank');
  if (myIdx !== -1 && myCard) {
    const me = players[myIdx];
    myCard.style.display = 'block';
    document.getElementById('lbMyRankNum').textContent = '#' + (myIdx + 1);
    document.getElementById('lbMyName').textContent = me.name || 'You';
    document.getElementById('lbMyRate').textContent = formatNumber(me.rate) + ' KSPT/h';
    const myAvatar = document.getElementById('lbMyAvatar');
    const isTgUser = !!getMyTelegramUser();
    if (me.photoUrl) {
      myAvatar.src = me.photoUrl;
      myAvatar.onerror = () => { myAvatar.src = 'seri.png'; };
    } else {
      myAvatar.src = 'seri.png';
    }
    // Показываем пикер только не-TG игрокам
    const pickerLabel = document.getElementById('lbAvatarPickerLabel');
    const picker = document.getElementById('lbAvatarPicker');
    if (!isTgUser && picker) {
      picker.style.display = 'flex';
      if (pickerLabel) pickerLabel.style.display = 'block';
      const currentAvatar = localStorage.getItem('_kspt_nonTg_avatar') || 'seri.png';
      picker.querySelectorAll('.lb-avatar-option').forEach(img => {
        img.classList.toggle('selected', img.dataset.avatar === currentAvatar);
        img.onclick = () => {
          localStorage.setItem('_kspt_nonTg_avatar', img.dataset.avatar);
          myAvatar.src = img.dataset.avatar;
          picker.querySelectorAll('.lb-avatar-option').forEach(x => x.classList.remove('selected'));
          img.classList.add('selected');

// Синхронизируем verified из Firebase в d
window._firebaseRef(window._firebaseDB, 'leaderboard/' + getMyUid()).once('value').then(snap => {
  const fbData = snap?.val();
  if (fbData && typeof fbData.verified !== 'undefined') {
    d.verified = !!fbData.verified;
    save();
    if (typeof renderProfileTab === 'function') renderProfileTab();
  }
});

          pushMyLeaderboardData(); // обновить в Firebase
        };
      });
    } else {
      if (picker) picker.style.display = 'none';
      if (pickerLabel) pickerLabel.style.display = 'none';
    }
  }

  // Render list
  list.innerHTML = players.map((p, i) => {
    const isMe = String(p.uid) === String(myUid);
    const rank = i + 1;
    const medal = medals[i] || '';
    const avatarSrc = p.photoUrl || 'seri.png';
    const rateStr = formatNumber(p.rate) + ' KSPT/h';
    const seenStr = formatLastSeen(p.lastSeen || p.updatedAt);
    const isOnline = (Date.now() - (p.lastSeen || p.updatedAt || 0)) < 3 * 60 * 1000;
    const seenColor = isOnline ? '#00e676' : '#666';
    const playtimeStr = p.playtimeMs ? _formatPlaytime(p.playtimeMs) : null;

    const rankColor = rank === 1 ? '#ffd700' : rank === 2 ? '#c0c0c0' : rank === 3 ? '#cd7f32' : '#aaa';
    const border = isMe ? '2px solid #ffd700' : '1px solid #2a2a2a';
    const bg = isMe ? 'linear-gradient(135deg,#1a1a2e,#16213e)' : (rank <= 3 ? 'linear-gradient(135deg,#1c1c1c,#111)' : '#111');

    return `<div style="display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:12px; background:${bg}; border:${border};" onclick="openPlayerDetail(${JSON.stringify(p).replace(/\"/g, '&quot;')})" >
      <div style="font-size:${rank <= 3 ? '20px' : '14px'}; font-weight:bold; color:${rankColor}; min-width:28px; text-align:center;">${medal || '#' + rank}</div>
      <img src="${avatarSrc}" onerror="this.src='seri.png'" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:2px solid ${rankColor}; flex-shrink:0;">
      <div style="flex:1; min-width:0;">
        <div style="font-weight:bold; font-size:13px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name || 'Player'}${p.verified ? ' <img src="gal.png" style="width:13px;height:13px;object-fit:contain;vertical-align:middle;">' : ''}${isMe ? ' <span style="color:#ffd700;font-size:11px;">(you)</span>' : ''}</div>
        <div style="font-size:11px; color:${seenColor}; margin-top:2px;">${seenStr}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
        ${(p.streakDays && p.streakDays > 0) ? `<span style="display:inline-flex;align-items:center;gap:2px;">${_streakFlameHTML(p.streakDays, !!p.streakActive, 16)}<span style="font-size:10px;color:#aaa;">${p.streakDays}</span></span>` : ''}
        <div style="font-weight:bold; font-size:13px; color:#6ee7b7; text-align:right;">${rateStr}</div>
      </div>
    </div>`;
  }).join('');
}

// Push leaderboard data every 10 seconds while app is open
setInterval(() => {
  if (window._firebaseReady) pushMyLeaderboardData();
}, 10000);

// Обновляем UI Plinko каждую минуту (для таймера попыток)
setInterval(() => {
  if (document.getElementById('plinkoCard')) renderPlinkoUI();
}, 60000);

// Push immediately on load (after firebase ready)
setTimeout(() => {
  if (window._firebaseReady) pushMyLeaderboardData();
}, 500);

function setBtnTheme(theme) {
  if (!d.settings) d.settings = {};
  d.settings.btnTheme = theme;
  save();
  _applyBtnTheme(theme);
  // Обновить выделение кнопок выбора
  const def = document.getElementById('btnThemeDefault');
  const sto = document.getElementById('btnThemeStone');
  if (def) def.style.border = theme === 'default' ? '2px solid #00e676' : '2px solid #333';
  if (sto) sto.style.border = theme === 'stone' ? '2px solid #00e676' : '2px solid #333';
}

function _applyBtnTheme(theme) {
  const bar = document.querySelector('.bottom-bar');
  if (!bar) return;
  if (theme === 'stone') {
    bar.innerHTML = `
      <div style="display:flex;gap:10px;justify-content:center;align-items:center;width:100%;padding:0 4px;box-sizing:border-box;">
        <div class="long-btn" onclick="openScreen('skins')" style="position:relative;flex:1;aspect-ratio:1/1;max-width:80px;">
          <img src="1.png" alt="Skins" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
          <div id="badge-main" class="notif-badge" style="display:none;"></div>
        </div>
        <div class="long-btn" onclick="openScreen('tech')" style="position:relative;flex:1;aspect-ratio:1/1;max-width:80px;">
          <img src="2.png" alt="Tech" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
          <div id="badge-tech" class="notif-badge" style="display:none;"></div>
        </div>
        <div class="long-btn" onclick="openScreen('offlineShop')" style="flex:1;aspect-ratio:1/1;max-width:80px;">
          <img src="3.png" alt="Mining" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
          <div id="badge-tech" class="notif-badge" style="display:none;"></div>
        </div>
        <div class="long-btn" onclick="openScreen('capsuleScreen')" style="position:relative;flex:1;aspect-ratio:1/1;max-width:80px;">
          <img src="4.png" alt="Capsule" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
          <div id="badge-capsule" class="notif-badge" style="display:none;"></div>
        </div>
      </div>
      <div class="settings-row">
        <div class="settings-btn" onclick="openScreen('settings')">
          <img src="settings.png" alt="Settings">
        </div>
      </div>`;
  } else {
    bar.innerHTML = `
      <div class="button-row">
        <div class="long-btn" onclick="openScreen('skins')" style="position:relative;">
          <img src="m.png" alt="Skins">
          <div id="badge-main" class="notif-badge" style="display:none;"></div>
        </div>
        <div class="long-btn" onclick="openScreen('offlineShop')">
          <img src="k.png" alt="Mining">
        </div>
      </div>
      <div class="button-row">
        <div class="long-btn" onclick="openScreen('tech')" style="position:relative;">
          <img src="t.png" alt="Tech">
          <div id="badge-tech" class="notif-badge" style="display:none;"></div>
        </div>
        <div class="long-btn" onclick="openScreen('capsuleScreen')" style="position:relative;">
          <img src="puz.png" alt="Capsule">
          <div id="badge-capsule" class="notif-badge" style="display:none;"></div>
        </div>
      </div>
      <div class="settings-row">
        <div class="settings-btn" onclick="openScreen('settings')">
          <img src="settings.png" alt="Settings">
        </div>
      </div>`;
  }
  updateNotificationBadges();
}

function toggleNotificationSetting(enabled) {
  if (!d.settings) d.settings = {};
  if (!d.settings.notifications) d.settings.notifications = {};
  d.settings.notifications.enabled = enabled;
  save();
  updateNotificationBadges();
}

function getWheelWinner(finalAngle) {
  const total = WHEEL_SEGMENTS.length;
  const arc = (Math.PI * 2) / total;
  // pointer is at top (angle = -PI/2). Normalize.
  let normalized = ((-Math.PI / 2) - finalAngle) % (Math.PI * 2);
  if (normalized < 0) normalized += Math.PI * 2;
  const idx = Math.floor(normalized / arc) % total;
  return WHEEL_SEGMENTS[idx];
}

function pickWeightedSegmentAngle() {
  const total = WHEEL_SEGMENTS.reduce((s, seg) => s + seg.chance, 0);
  let roll = Math.random() * total;
  let chosenIdx = 0;
  for (let i = 0; i < WHEEL_SEGMENTS.length; i++) {
    roll -= WHEEL_SEGMENTS[i].chance;
    if (roll <= 0) { chosenIdx = i; break; }
  }
  // Target center of that segment
  const arc = (Math.PI * 2) / WHEEL_SEGMENTS.length;
  const targetCenter = chosenIdx * arc + arc / 2;
  // We want pointer (-PI/2) to land on targetCenter
  // finalAngle + targetCenter = -PI/2  =>  finalAngle = -PI/2 - targetCenter
  const targetAngle = -Math.PI / 2 - targetCenter;
  return { targetAngle, chosenIdx };
}

function playWheelTick(freq) {
  try {
    if (!wheelAudioCtx) wheelAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = wheelAudioCtx.createOscillator();
    const gain = wheelAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(wheelAudioCtx.destination);
    osc.frequency.setValueAtTime(freq || 440, wheelAudioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, wheelAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, wheelAudioCtx.currentTime + 0.08);
    osc.start();
    osc.stop(wheelAudioCtx.currentTime + 0.08);
  } catch(e) {}
}

function playWheelWin() {
  try {
    if (!wheelAudioCtx) wheelAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = wheelAudioCtx.createOscillator();
      const gain = wheelAudioCtx.createGain();
      osc.connect(gain); gain.connect(wheelAudioCtx.destination);
      osc.frequency.setValueAtTime(freq, wheelAudioCtx.currentTime + i * 0.12);
      gain.gain.setValueAtTime(0.2, wheelAudioCtx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, wheelAudioCtx.currentTime + i * 0.12 + 0.25);
      osc.start(wheelAudioCtx.currentTime + i * 0.12);
      osc.stop(wheelAudioCtx.currentTime + i * 0.12 + 0.25);
    });
  } catch(e) {}
}

function spinFortuneWheel() {
  if (wheelSpinning) return;

  // Check price
  const price = getWheelPrice();
  const isFree = window._freeWheelSpin === true;
  window._freeWheelSpin = false;
  if (!isFree && d.tokens < price) {
    showToast(`Need ${formatNumber(price)} KSPT to spin!`);
    return;
  }

  // Check spins
  const fw = d.fortuneWheel;
  const now = Date.now();
  const cooldownMs = WHEEL_COOLDOWN_HOURS * 3600 * 1000;
  if (fw.spinsUsed >= WHEEL_MAX_SPINS) {
    if ((now - (fw.lastResetTime || 0)) < cooldownMs) {
      showToast('Fortune Wheel on cooldown!');
      return;
    }
    fw.spinsUsed = 0;
    fw.lastResetTime = 0;
  }

  // Deduct price
  if (!isFree) {
    d.tokens -= price;
    showToast(`-${formatNumber(price)} KSPT spent on spin`);
  } else {
    showToast('🎡 Free spin!');
  }
  fw.spinsUsed++;
  if (fw.spinsUsed >= WHEEL_MAX_SPINS) fw.lastResetTime = now;
  save();
  ui();

  wheelSpinning = true;
  document.getElementById('fortuneWheelSpinBtn').disabled = true;
  document.getElementById('fortuneWheelResult').textContent = '';

  const { targetAngle, chosenIdx } = pickWeightedSegmentAngle();

  // Total rotation: 6-10 full spins + land on target
  const fullSpins = (6 + Math.floor(Math.random() * 5)) * Math.PI * 2;
  const startAngle = wheelCurrentAngle;
  // Normalize targetAngle
  let normalTarget = targetAngle % (Math.PI * 2);
  // Ensure we overshoot cleanly
  let delta = (fullSpins + normalTarget - (startAngle % (Math.PI * 2)));
  if (delta < fullSpins) delta += Math.PI * 2;
  const endAngle = startAngle + delta;

  const totalDuration = 5000; // ms
  const startTime = performance.now();
  let lastTickAngle = startAngle;
  const tickInterval = (Math.PI * 2) / WHEEL_SEGMENTS.length;

  function easeOut(t) {
    // Slow down dramatically at the end for dramatic effect
    return 1 - Math.pow(1 - t, 4);
  }

  function animate(now2) {
    const elapsed = now2 - startTime;
    const t = Math.min(elapsed / totalDuration, 1);
    const eased = easeOut(t);
    const current = startAngle + delta * eased;
    drawWheel(current);
    wheelCurrentAngle = current;

    // Tick sound
    const angleDiff = current - lastTickAngle;
    if (angleDiff >= tickInterval) {
      const progress = t;
      const freq = 300 + 400 * (1 - eased); // higher pitch at start
      playWheelTick(freq);
      lastTickAngle = current;
    }

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      wheelSpinning = false;
      wheelCurrentAngle = endAngle % (Math.PI * 2);
      drawWheel(wheelCurrentAngle);
      applyWheelReward(WHEEL_SEGMENTS[chosenIdx]);
    }
  }

  requestAnimationFrame(animate);
}

function applyWheelReward(seg) {
  const resultEl = document.getElementById('fortuneWheelResult');
  const rate = getHourlyRate();
  let resultText = '';

  switch (seg.label) {
    case 'Try Again':
      resultText = '😔 Try Again! No reward this time.';
      if (resultEl) resultEl.style.color = '#9ca3af';
      break;

    case '+30h Income': {
      const reward = Math.round(rate * 30 / 1000) * 1000;
      d.tokens += reward;
      resultText = `💰 +${formatNumber(reward)} KSPT!`;
      if (resultEl) resultEl.style.color = '#6ee7b7';
      playWheelWin();
      break;
    }

    case 'Noob Box':
      if (!d.noobBox) d.noobBox = { obtained: false, opened: false, taps: 0, lastOpen: 0 };
      d.noobBox.obtained = true;
      d.noobBox.opened = false;
      d.noobBox.taps = 0;
      resultText = '📦 Noob Box obtained!';
      if (resultEl) resultEl.style.color = '#93c5fd';
      playWheelWin();
      setTimeout(() => { closeFortuneWheel(); startNoobBoxSequence(); }, 1500);
      break;

    case 'Key Box':
      if (!d.keyBox) d.keyBox = { taps: 0 };
      d.keyBox.taps = 0;
      resultText = '🗝️ Key Box obtained!';
      if (resultEl) resultEl.style.color = '#fcd34d';
      playWheelWin();
      setTimeout(() => { closeFortuneWheel(); startKeyBoxSequence(); }, 1500);
      break;

    case 'Glitch Box':
      if (!d.glitchBox) d.glitchBox = { firstOpen: true, lastOpen: 0, cooldownDays: 20, taps: 0, doubled: 1, duplicates: 0 };
      d.glitchBox.firstOpen = true;
      d.glitchBox.lastOpen = 0;
      resultText = '⚡ Glitch Box ready!';
      if (resultEl) resultEl.style.color = '#c4b5fd';
      playWheelWin();
      setTimeout(() => { closeFortuneWheel(); startGlitchBoxSequence(); }, 1500);
      break;

    case 'Gold Capsule':
      if (!d.goldCapsule) d.goldCapsule = { obtained: false, opened: false, taps: 0, lastOpen: 0 };
      d.goldCapsule.obtained = true;
      d.goldCapsule.opened = false;
      d.goldCapsule.taps = 0;
      resultText = '🌟 Gold Capsule obtained!';
      if (resultEl) resultEl.style.color = '#fdba74';
      playWheelWin();
      setTimeout(() => { closeFortuneWheel(); startGoldCapsuleSequence(); }, 1500);
      break;

    case 'Blue Key':
      addKey('blue');
      resultText = '🔑 Blue Key obtained!';
      if (resultEl) resultEl.style.color = '#93c5fd';
      playWheelWin();
      break;

    case 'DogeToken 🐶':
      if (!d.skins) d.skins = {};
      if (!d.skins['doge']) {
        d.skins['doge'] = 1;
        resultText = '🐶 KSPT: DogeToken skin UNLOCKED!';
        const card = document.getElementById('skinCardDoge');
        if (card) card.style.display = 'block';
      } else {
        const bonus = Math.round(rate * 10 / 100) * 100;
        d.tokens += bonus;
        resultText = `🐶 DogeToken (already owned) → +${formatNumber(bonus)} KSPT`;
      }
      if (resultEl) resultEl.style.color = '#fde68a';
      playWheelWin();
      break;
  }

  if (resultEl) resultEl.textContent = resultText;
  save();
  ui();
  updateFortuneWheelCard();

  // Re-enable spin btn after delay if spins remain
  setTimeout(() => {
    const fw = d.fortuneWheel;
    const now = Date.now();
    const cooldownMs = WHEEL_COOLDOWN_HOURS * 3600 * 1000;
    const canSpin = fw.spinsUsed < WHEEL_MAX_SPINS || (now - (fw.lastResetTime || 0)) >= cooldownMs;
    const btn = document.getElementById('fortuneWheelSpinBtn');
    if (btn && canSpin && seg.label !== 'Noob Box' && seg.label !== 'Key Box' && seg.label !== 'Glitch Box') {
      btn.disabled = false;
    }
  }, 1500);
}

// Начать открытие Glitch Box
function startGlitchBoxSequence() {
  // ИСПРАВЛЕНИЕ: Сбрасываем блокировку, если она залипла с прошлого раза
  if (d.glitchBoxIsOpening) {
      d.glitchBoxIsOpening = false;
  }

  const now = Date.now();
  // Если cooldownDays не задан, ставим 3 дня по умолчанию
  const days = d.glitchBox.cooldownDays || 3; 
  const cooldownMs = days * 24 * 60 * 60 * 1000;
  const lastOpen = d.glitchBox.lastOpen || 0;
  
  // Новая система: бокс открывается через фрагменты или если firstOpen уже выставлен
  const _frags = d.glitchFragments || [false, false, false];
  if (!d.glitchBox.firstOpen) {
    if (_frags.filter(Boolean).length < 3) return;
    // Все 3 собраны — сбрасываем и открываем
    d.glitchFragments = [false, false, false];
    d.glitchBox.firstOpen = true;
    save();
    updateGlitchBoxUI();
  }
  
  // Сбрасываем прогресс текущей сессии
  d.glitchBox.taps = 0;
  d.glitchBox.doubled = 1;
  d.glitchBox.duplicates = 0;
  d.glitchRewards = [];

  d.glitchBox._dup10Checked = false;
  d.glitchBox._dup20Checked = false;
  
  // Показываем модальное окно
  const modal = document.getElementById('glitchModal');
  if (modal) {
    modal.classList.add('active');
    updateGlitchModal();
  }
}

// Обновление модального окна Glitch Box
function updateGlitchModal() {
  const container = document.getElementById('glitchBoxContainer');
  const title = document.getElementById('glitchModalTitle');
  const subtitle = document.getElementById('glitchModalSubtitle');
  const taps = document.getElementById('glitchModalTaps');
  const chance = document.getElementById('glitchModalChance');
  
  if (!container || !title || !taps) return;

  // --- ИСПРАВЛЕНИЕ: ОБНОВЛЯЕМ ТЕКСТ СЧЕТЧИКА ---
  // Добавляем проверку на существование d.glitchBox.taps
  const currentTaps = (d.glitchBox && d.glitchBox.taps) ? d.glitchBox.taps : 0;
  taps.textContent = `${currentTaps} / 30`;
  // ---------------------------------------------
  
  // Очищаем контейнер
  container.innerHTML = '';
  container.style.position = 'relative'; // нужно для overlay

  // Добавляем визуальные боксы (неинтерактивные при multiplier>1) и единый overlay-хитбокс
  const boxCount = d.glitchBox.doubled || 1;

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('img');
    box.className = 'glitch-box-item';
    box.src = 'glitchbox.png';
    box.dataset.index = i;

    // Если это уже открытый (в d.glitchRewards) — затемняем и делаем неактивным
    if (i < (d.glitchRewards || []).length) {
      box.style.opacity = '0.5';
      box.style.cursor = 'default';
      box.style.pointerEvents = 'none';
    } else {
      // при множественном показе — запрещаем индивидуальные клики
      box.style.pointerEvents = 'none';
    }

    container.appendChild(box);
  }

  // Если больше одного бокса — накладываем ОДИН overlay, который обрабатывает клики
  if (boxCount > 1) {
    let overlay = document.createElement('div');
    overlay.id = 'glitchBoxesOverlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.cursor = 'pointer';
    overlay.style.zIndex = 5;
    // прозрачный — видим только визуальные боксы, overlay ловит клики
    overlay.onclick = function (e) {
      // вызываем tap без передачи image (анимация внутри tap обработает отсутствие элемента)
      tapGlitchBox(null, 0);
      e.stopPropagation();
    };
    container.appendChild(overlay);
  } else {
    // при одном боксе — делаем его кликабельным как раньше
    const onlyBox = container.querySelector('.glitch-box-item');
    if (onlyBox) {
      onlyBox.style.pointerEvents = '';
      onlyBox.onclick = () => tapGlitchBox(onlyBox, 0);
    }
  }
}

// Заменить текущую функцию tapGlitchBox на эту версию
function tapGlitchBox(box, index) {
  // ЗАЩИТА: Если бокс уже открывается, игнорируем клики
  if (d.glitchBoxIsOpening) return;

  // безопасная анимация — только если элемент есть
  if (box && box.classList) {
    box.classList.add('glitch-anim');
    setTimeout(() => box.classList.remove('glitch-anim'), 200);
  }

  // звук (если есть)
  try { playGlitchSound(); } catch(e){}

  // увеличить счётчик безопасно
  if (!d.glitchBox) d.glitchBox = { taps: 0 };
  d.glitchBox.taps = (d.glitchBox.taps || 0) + 1;

  // каждые 3 тапа — визуальный глитч
  if (d.glitchBox.taps % 3 === 0) {
    triggerGlitchAnimation(box);
  }

  // шанс удвоения
  checkDuplicationChance();

  // обновление UI
  updateGlitchModal();
  updateGlitchBoxUI();

  // === ИСПРАВЛЕНИЕ ЗДЕСЬ ===
  // Если набрали 30 тапов - открываем, независимо от количества клонов.
  if (d.glitchBox.taps >= 30) {
      // БЛОКИРУЕМ дальнейшие действия, чтобы не открыть дважды
      d.glitchBoxIsOpening = true; 
      setTimeout(() => openGlitchBox(), 500);
  }

  save();
}

// Glitch анимация
function triggerGlitchAnimation(element) {
  if (!element) return;
  
  // Случайные эффекты
  const effects = [
    () => { element.style.filter = 'hue-rotate(90deg)'; setTimeout(() => element.style.filter = '', 100); },
    () => { element.style.transform = 'scale(1.1)'; setTimeout(() => element.style.transform = '', 100); },
    () => { element.style.opacity = '0.7'; setTimeout(() => element.style.opacity = '', 100); },
    () => { element.classList.add('glitch-pulse'); setTimeout(() => element.classList.remove('glitch-pulse'), 300); }
  ];
  
  // Выбираем случайный эффект
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];
  randomEffect();
  
  // Создаем частицы
  createGlitchParticles(element);
}

// Создание glitch частиц
function createGlitchParticles(element) {
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement('div');
    particle.className = 'glitch-particle';
    particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(particle);
    
    // Анимация частицы
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    
    particle.animate([
      { transform: 'translate(0, 0)', opacity: 0.7 },
      { 
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
        opacity: 0 
      }
    ], {
      duration: 500 + Math.random() * 500,
      easing: 'ease-out'
    });
    
    // Удаляем частицу после анимации
    setTimeout(() => particle.remove(), 1000);
  }
}

// Проверка шанса удвоения
// Проверка шанса удвоения — безопасная: срабатывает 1 раз для 10 и 20 тапов
function checkDuplicationChance() {
  // защита: если нет объекта — выходим
  if (!d || !d.glitchBox) return;

  const taps = d.glitchBox.taps || 0;

  // шанс на 10 тапах (только если ещё не проверяли)
  if (taps === 10 && d.glitchBox.duplicates === 0 && !d.glitchBox._dup10Checked) {
    d.glitchBox._dup10Checked = true;
    const chance = 25;
    if (Math.random() * 100 < chance) {
      duplicateGlitchBox();
    }
  }

  // шанс на 20 тапах (только если ещё не проверяли)
  if (taps === 20 && d.glitchBox.duplicates === 1 && !d.glitchBox._dup20Checked) {
    d.glitchBox._dup20Checked = true;
    const chance = 10;
    if (Math.random() * 100 < chance) {
      duplicateGlitchBox();
    }
  }
}

// Удвоение Glitch Box
function duplicateGlitchBox() {
  if (d.glitchBox.doubled >= 4) return;
  
  d.glitchBox.doubled *= 2;
  d.glitchBox.duplicates++;
  
  // Показываем анимацию "повезло"
  showToast(`LUCKY! Glitch Box x${d.glitchBox.doubled}!`);
  
  // Воспроизводим особый звук
  playGlitchSound();
  
  // Обновляем UI
  updateGlitchModal();
}

function openGlitchBox() {
  // Закрываем модалку открытия
  closeGlitchModal();

  d.glitchBox.firstOpen = false;
  d.glitchBox.lastOpen = Date.now();
  d.glitchBox.taps = 0;
  d.glitchFragments = [false, false, false];

  // Собираем N наград, но НЕ применяем их сейчас
  const rewards = [];
  for (let i = 0; i < (d.glitchBox.doubled || 1); i++) {
    rewards.push(getGlitchReward());
  }

  // Сохраняем pending-награды — будут применяться по очереди при сборе
  d._pendingGlitchRewards = rewards.slice();
  // Сброс множителя и списка открытых в сессии
  d.glitchBox.doubled = 1;
  d.glitchBox.duplicates = 0;
  d.glitchRewards = [];

  // Показываем первую награду (детали показа/сбора ниже)
  if (d._pendingGlitchRewards.length > 0) {
    showGlitchReward(d._pendingGlitchRewards[0], 0);
  }

  save();
  updateGlitchBoxUI();
}

// Получить случайную награду из Glitch Box
// Получить случайную награду из Glitch Box
function getGlitchReward() {
  const rewards = [
    // 20% - +6 часов offline дохода KSPT
    { type: 'kspt', chance: 20, value: () => Math.floor(getHourlyRate() * 6.0 / 100) * 100, name: '+6.0h Income', img: 'kspt.png' },
    
    // 20% - x2 offline доход на 12 часов
    { type: 'offline2x', chance: 20, duration: 12, name: 'x2 Offline for 12h', img: 'k.png' },
    
    // 15% - fake jackpot (показываем 10M, потом реальную награду)
    { type: 'fakeJackpot', chance: 15, realValue: () => Math.floor(getHourlyRate() * 15 / 100) * 100, name: 'Jackpot!', img: 'kspt.png' },
    
    // 10% - +10 EK
    { type: 'ek', chance: 10, value: 10, name: '+10 EK', img: 'ek.png' },
    
    // 10% - Yellow key
    { type: 'key', chance: 10, color: 'yellow', name: 'Yellow Key', img: 'yellow.png' },
    
    // 5% - Red key
    { type: 'key', chance: 5, color: 'red', name: 'Red Key', img: 'red.png' },
    
    // 5% - ФОН CODE (Matrix)
    { type: 'bg', chance: 5, id: 'code', name: 'Background: Code', img: 'code.png' },
    
    // 5% - МУЗЫКА CODE
    { type: 'music', chance: 5, id: 'code', name: 'Music: Code Rhythm', img: 'coder.png' }, // Используем ту же картинку или другую
    
    // 4% - Green key
    { type: 'key', chance: 4, color: 'green', name: 'Green Key', img: 'green.png' },
    
    // 3% - Blue key
    { type: 'key', chance: 3, color: 'blue', name: 'Blue Key', img: 'blue.png' },
    
    // 2% - СКИН CORRUPTED
    { type: 'skin', chance: 2, id: 'corrupted', name: 'Skin: Corrupted', img: 'corr.png' },
    
    // 1% - СКИН FAILED
    { type: 'skin', chance: 1, id: 'failed', name: 'Skin: System Failure', img: 'fail.png' }
  ];
  
  // Взвешенный случайный выбор
  const totalWeight = rewards.reduce((sum, r) => sum + r.chance, 0);
  let random = Math.random() * totalWeight;
  
  for (const reward of rewards) {
    random -= reward.chance;
    if (random <= 0) {
      // ИСПРАВЛЕНИЕ: вычисляем realValueAmount для fakeJackpot
      if (reward.type === 'fakeJackpot' && typeof reward.realValue === 'function') {
        reward.realValueAmount = reward.realValue();
      }
      return reward;
    }
  }
  
  // Fallback
  return rewards[0];
}

// Применить награду из Glitch Box
// Применить награду из Glitch Box
function applyGlitchReward(reward) {
  // Рассчитываем компенсацию за 24 часа оффлайна
  const compensation24h = Math.floor(getHourlyRate() * 24 / 100) * 100;
  
  switch(reward.type) {
    case 'kspt':
      const ksptValue = typeof reward.value === 'function' ? reward.value() : reward.value;
      d.tokens += ksptValue;
      break;
      
    case 'offline2x':
      d.offlineMultiplierEnd = Date.now() + (reward.duration * 60 * 60 * 1000);
      break;
      
    case 'fakeJackpot':
      // Показываем fake jackpot, реальная награда будет применена позже
      const realValue = reward.realValueAmount || (typeof reward.realValue === 'function' ? reward.realValue() : 0);
      d.tokens += realValue;
      break;
      
    case 'ek':
      if (!d.ek) d.ek = 0;
      d.ek += reward.value;
      d.ekLifetime = (d.ekLifetime || 0) + reward.value;
      d.questEkEarned = (d.questEkEarned || 0) + reward.value;
      d.wQuestEkEarned = (d.wQuestEkEarned || 0) + reward.value;
      checkQuestProgress('earn_ek');
      checkQuestProgress('w_ek');
      break;
      
    case 'key':
      addKey(reward.color);
      break;
      
    case 'bg':
      // Проверяем дубликат
      if (d.ownedBgs.includes(reward.id)) {
        // Дубликат! Даем компенсацию
        d.tokens += compensation24h;
        showToast(`Duplicate! +${formatNumber(compensation24h)} KSPT compensation`);
      } else {
        // Новый фон - добавляем
        d.ownedBgs.push(reward.id);
        // Обновляем UI настроек, чтобы кнопка стала активной
        if (typeof updateSettingsUI === 'function') updateSettingsUI();
      }
      break;
      
    case 'music':
      // Проверяем дубликат
      if (d.ownedMusic.includes(reward.id)) {
        // Дубликат! Даем компенсацию
        d.tokens += compensation24h;
        showToast(`Duplicate! +${formatNumber(compensation24h)} KSPT compensation`);
      } else {
        // Новая музыка - добавляем
        d.ownedMusic.push(reward.id);
        // Обновляем UI настроек
        if (typeof updateSettingsUI === 'function') updateSettingsUI();
      }
      break;
      
    case 'skin':
      if (!d.secretSkins) d.secretSkins = {};
      if (!d.skins) d.skins = {};
      
      // Проверяем дубликат
      if (d.secretSkins[reward.id] || d.skins[reward.id]) {
        // Дубликат! Даем компенсацию
        d.tokens += compensation24h;
        showToast(`Duplicate! +${formatNumber(compensation24h)} KSPT compensation`);
      } else {
        // Новый скин - добавляем в секретные скины и в обычные
        d.secretSkins[reward.id] = true;
        d.skins[reward.id] = 1;
        
        // Обновляем кнопки скинов
        if (typeof updateSkinButtons === 'function') updateSkinButtons();
      }
      break;
  }
  
  // Сохраняем изменения
  save();
}

// Показать награду Glitch Box
// Показать одну награду (reward) — pendingIndex указывает её позицию в d._pendingGlitchRewards
function showGlitchReward(reward, pendingIndex) {
  if (reward.type === 'fakeJackpot') {
    showFakeJackpot(reward);
    return;
  }

  const modal = document.getElementById('glitchRewardModal');
  const img = document.getElementById('glitchRewardImg');
  const text = document.getElementById('glitchRewardText');
  const desc = document.getElementById('glitchRewardDesc');

  if (!modal || !img || !text) return;

  // Устанавливаем данные
  img.src = reward.img || 'kspt.png';
  text.textContent = reward.name || '';
  if (desc) {
    switch (reward.type) {
      case 'kspt':
        desc.textContent = `+${formatNumber(typeof reward.value === 'function' ? reward.value() : reward.value)} KSPT`;
        break;
      case 'offline2x':
        desc.textContent = `Offline x${reward.duration}h`;
        break;
      default:
        desc.textContent = '';
    }
  }

  // Назначаем обработчик кнопке Collect — применяем текущую pending-награду и показываем следующую
  const collectBtn = modal.querySelector('button');
  if (collectBtn) {
    collectBtn.onclick = function () {
      collectPendingGlitchReward(pendingIndex);
    };
  }

  modal.style.display = 'block';
}

// Вспомогательная функция: берет первую награду из очереди и показывает её
function showNextGlitchReward() {
  // Если наград больше нет - чистим и выходим
  if (!d._pendingGlitchRewards || d._pendingGlitchRewards.length === 0) {
    d._pendingGlitchRewards = [];
    closeGlitchReward();
    return;
  }

  // Берем первую награду (индекс 0), но ПОКА НЕ УДАЛЯЕМ
  const reward = d._pendingGlitchRewards[0];
  
  // Показываем её. Передаем 0 как индекс, но в новой логике индекс не важен.
  showGlitchReward(reward, 0);
}

// Эта функция вызывается кнопкой "Collect" в модальном окне награды
function collectPendingGlitchReward(unusedIndex) {
  // Берем очередь
  const pending = d._pendingGlitchRewards || [];
  
  if (pending.length === 0) {
    closeGlitchReward();
    return;
  }

  // Удаляем ПЕРВУЮ награду из очереди (shift) и получаем её
  const rewardToApply = pending.shift(); // Это удалит элемент [0] и сдвинет остальные

  // Применяем награду
  if (rewardToApply) {
    applyGlitchReward(rewardToApply);
  }

  // Сохраняем измененную очередь
  d._pendingGlitchRewards = pending;
  save();

  // Если остались еще награды — показываем следующую (которая теперь стала [0])
  if (pending.length > 0) {
     // Небольшая задержка для плавности, если нужно, или сразу:
     showNextGlitchReward();
  } else {
     // Всё забрали
     closeGlitchReward();
     updateGlitchBoxUI();
  }
}

// Показать несколько наград
function showMultipleGlitchRewards(rewards) {
  // Можно реализовать карусель наград или показать все сразу
  let currentIndex = 0;
  
  function showNextReward() {
    if (currentIndex >= rewards.length) {
      closeGlitchReward();
      return;
    }
    
    showGlitchReward(rewards[currentIndex]);
    currentIndex++;
    
    // Автоматически переходим к следующей награде через 3 секунды
    if (currentIndex < rewards.length) {
      setTimeout(showNextReward, 3000);
    }
  }
  
  showNextReward();
}

// Показать fake jackpot
function showFakeJackpot(reward) {
  const modal = document.getElementById('fakeJackpotModal');
  const amount = document.getElementById('fakeJackpotAmount');
  
  if (!modal || !amount) return;
  
  // Показываем fake jackpot
  modal.style.display = 'flex';
  
  // Через 2 секунды "глючим" и показываем реальную награду
  setTimeout(() => {
    // Эффект глючения
    amount.style.animation = 'glitch-shake 0.5s ease';
    amount.style.color = 'red';
    
    setTimeout(() => {
      amount.textContent = formatNumber(reward.realValueAmount) + ' KSPT';
      amount.style.color = '#ff9800';
      amount.style.animation = '';
      
      // Через 3 секунды закрываем и показываем обычное окно награды
      setTimeout(() => {
        modal.style.display = 'none';
        showGlitchReward({
          type: 'kspt',
          name: '+15h Income',
          img: 'kspt.png',
          value: reward.realValueAmount
        });
      }, 3000);
    }, 500);
  }, 2000);
}

// Вспомогательные функции для закрытия модальных окон
function closeGlitchModal() {
  const modal = document.getElementById('glitchModal');
  if (modal) modal.classList.remove('active');
}

function closeGlitchReward() {
  const modal = document.getElementById('glitchRewardModal');
  if (modal) modal.style.display = 'none';
}

function expandShop() {
  const currentKey = getVisibleKeyColors()[currentKeyIndex] || getVisibleKeyColors()[0];
  const modal = document.getElementById('shopModal');
  const title = document.getElementById('shopModalTitle');
  const grid = document.getElementById('shopModalGrid');
  
  if (!modal || !title || !grid) return;
  
  // Устанавливаем заголовок
  title.textContent = currentKey === 'admin' ? '👑 Admin Shop' : `${currentKey.charAt(0).toUpperCase() + currentKey.slice(1)} Shop`;
  
  // Очищаем сетку
  grid.innerHTML = '';
  
  // Получаем полный список предметов
  const shopItems = getShopItems(currentKey);
  
  // Добавляем предметы в сетку 3xN
  shopItems.forEach((item, index) => {
    const shopItem = document.createElement('div');
    shopItem.className = `key-shop-item ${d.keys[currentKey] <= 0 ? 'disabled' : ''}`;
    shopItem.innerHTML = `
      <img src="${currentKey}.png" alt="${item.name}">
      <div style="font-weight: bold; margin: 5px 0;">${item.name}</div>
      <div style="font-size: 12px; color: #aaa; margin-bottom: 5px;">${item.desc}</div>
      <div style="font-size: 11px; color: #ff9800;">1 ${currentKey} key</div>
    `;
    
    shopItem.onclick = () => {
      if (d.keys[currentKey] > 0) {
        buyKeyItem(currentKey, item);
        closeShopModal();
      }
    };
    
    grid.appendChild(shopItem);
  });
  
  // Показываем модальное окно
  modal.classList.add('active');
}

function closeShopModal() {
  const modal = document.getElementById('shopModal');
  if (modal) modal.classList.remove('active');
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

    case "skin_8bit_coin":
  coin.dataset.toggle = coin.dataset.toggle === "1" ? "0" : "1";
  coin.src = coin.dataset.toggle === "1" ? "bit1.png" : "bit.png";
  break;

    case "skin_zombie_train":
  let zStage = parseInt(coin.dataset.zStage || "0", 10);
  zStage = (zStage + 1) % 3;
  coin.dataset.zStage = zStage;

  if (zStage === 0) coin.src = "zomb.png";
  else if (zStage === 1) coin.src = "zomb1.png";
  else coin.src = "zomb2.png";
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

// Расчёты оффлайн-дохода для ключей вроде
function getEffectiveHourlyRate() {
  let rate = getHourlyRate();
  const now = Date.now();
  
  // Учитываем offline multiplier
  if (d.offlineMultiplierEnd > now) {
    rate *= 2;
  }
  
  return rate;
}

// ===============================
// MINI GAMES (Snake / Pong)
// ===============================

function startGame(gameName) {
  window._currentGameId = gameName; // отслеживаем для квестов
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
  } else if (gameName === 'flappy') {
    iframe.src = 'games/flappy.html';
  } else if (gameName === 'robot') {
    iframe.src = 'games/robot.html';
  } else {
    console.warn('Unknown game:', gameName);
    return;
  }

  frameContainer.appendChild(iframe);

  // показать экран с игрой
  gameContainer.style.display = 'block';
}

// Функция для получения ключа (вызывайте из капсул, ивентов и т.д.)
function awardKey(keyColor) {
  const added = addKey(keyColor);
  if (added) {
    // Показываем всплывающее сообщение
    showToast(`${keyColor.charAt(0).toUpperCase() + keyColor.slice(1)} key obtained!`);
    
    // Если открыта вкладка ключей - обновляем
    if (document.getElementById('keysTab')?.style.display !== 'none') {
      updateKeysUI();
    }
  }
  
  save();
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
      // Quest tracking
      d.questTicketsSpent = (d.questTicketsSpent || 0) + 1;
      d.wQuestTicketsSpent = (d.wQuestTicketsSpent || 0) + 1;
      const _gid = window._currentGameId || '';
      if (_gid) {
        if (!d.questTicketsInGame) d.questTicketsInGame = {};
        if (!d.wQuestTicketsInGame) d.wQuestTicketsInGame = {};
        d.questTicketsInGame[_gid] = (d.questTicketsInGame[_gid] || 0) + 1;
        d.wQuestTicketsInGame[_gid] = (d.wQuestTicketsInGame[_gid] || 0) + 1;
      }
      checkQuestProgress('ticket_8'); checkQuestProgress('ticket_game');
      checkQuestProgress('w_tickets'); checkQuestProgress('w_tgame');
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
      // Quest tracking
      d.questTicketsSpent = (d.questTicketsSpent || 0) + 1;
      d.wQuestTicketsSpent = (d.wQuestTicketsSpent || 0) + 1;
      const _gid2 = window._currentGameId || '';
      if (_gid2) {
        if (!d.questTicketsInGame) d.questTicketsInGame = {};
        if (!d.wQuestTicketsInGame) d.wQuestTicketsInGame = {};
        d.questTicketsInGame[_gid2] = (d.questTicketsInGame[_gid2] || 0) + 1;
        d.wQuestTicketsInGame[_gid2] = (d.wQuestTicketsInGame[_gid2] || 0) + 1;
      }
      checkQuestProgress('ticket_8'); checkQuestProgress('ticket_game');
      checkQuestProgress('w_tickets'); checkQuestProgress('w_tgame');
      try { ev.source.postMessage({ type: 'kspt_play_confirmed' }, '*'); } catch(e){}
      // clear gameOver flag — iframe will set it again when it reaches Game Over next time
      gameOverActive = false;
      return;
    }
  } catch (e) {
    console.warn('kspt message handler failed', e);
  }
  // ===== end KS messages =====

  if (data.type === 'kspt_game_record' && data.game && data.value > 0) {
    if (!d.gameRecords) d.gameRecords = {};
    const cur = d.gameRecords[data.game] || 0;
    const isBetter = data.game === 'race'
      ? (cur === 0 || data.value < cur)
      : (data.value > cur);
    if (isBetter) {
      d.gameRecords[data.game] = data.value;
      save();
    }
    return;
  }

  if (data.type === 'ekshop_update') {
  try {

    /* ===== 1. ОБНОВЛЯЕМ EK В ОСНОВНОЙ ИГРЕ ===== */
    if (typeof data.ek !== 'undefined') {

      // обновляем localStorage.d
      const mainRaw = localStorage.getItem('d') || '{}';
      const mainD = JSON.parse(mainRaw);
      mainD.ek = Number(data.ek);
      localStorage.setItem('d', JSON.stringify(mainD));

      // обновляем оперативную память игры
      if (typeof d !== 'undefined') {
        d.ek = Number(data.ek);
      }
    }

    /* ===== 2. ОБНОВЛЯЕМ КУПЛЕННЫЕ И ВЫБРАННЫЕ СКИНЫ ===== */
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
          // Don't overwrite d.skin
        }

        if (data.selected.bg) {
          d.ekshopBg = data.selected.bg;
          // Don't overwrite d.bg
        }
      }
    }

    /* ===== 3. СОХРАНЯЕМ И ПЕРЕРИСОВЫВАЕМ ===== */
    try { save(); } catch(e){}
    try { ui(); } catch(e){}
    try { updateBackground(); } catch(e){}

  } catch(err) {
    console.warn('ekshop_update handler failed', err);
  }
}
});

// Запуск игры
initGame();

// Генерируем локальный uid если нет Telegram
(function() {
  if (!localStorage.getItem('_kspt_uid')) {
    localStorage.setItem('_kspt_uid', 'u_' + Math.random().toString(36).slice(2));
  }
})();

// Firebase: запускаем подписки после готовности SDK
function _startFirebaseSync() {
  acquireMasterLock();
  subscribeToPrices();
  subscribeToUserTokens();
  // Мастер обновляет цены каждые 28 секунд
  setInterval(function() {
    if (window._isMaster && window._firebaseReady) {
      acquireMasterLock();
      // Пересчитываем цены и записываем в Firebase
      _localTickerFallback(Date.now());
      syncPricesToFirebase();
    }
  }, 28000);
}

// ==========================================
// QUESTS SYSTEM
// ==========================================

const QUEST_GAME_NAMES = ['Snake Game', 'Ping-Pong', 'BlocksFast', 'Slither: KSPT Mode', 'Ghost Train', 'KSPT Races', 'Flappy Bird', 'Space Asteroids', 'Robot Runner', 'Paper.io', 'Hills'];
const QUEST_GAME_IDS   = ['snake',      'pingpong',  'blocksfast', 'slither',            'train',       'race',       'flappy',      'asteroids',       'robot',        'paper',    'hills'];
const QUEST_GAME_ICONS = ['snake.png',  'pong.png',  'tetris.png', 'slither.png',        'train.png',   'race.png',   'flappy.png',  'aster.png',       'irob.png',     'paper.png','hills.png'];
try { initQuestsData(); } catch(e) { console.warn('quests init error', e); }

function getQuestCryptoPool() {
  const base = [
    { name: 'KSP Token', icon: 'kspt.png' },
    { name: 'BANX',       icon: 'banx.png' },
    { name: 'JVM',        icon: 'jvm.png' },
  ];
  // Добавляем пользовательские токены из Firebase если есть
  const userTokens = (d && d.market && d.market.myTokens) ? d.market.myTokens : [];
  userTokens.forEach(tok => {
    if (tok && tok.ticker) {
      base.push({
        name: tok.ticker,
        icon: tok.icon || 'kspt.png'  // icon может быть base64 или путь
      });
    }
  });
  return base;
}

function getDailyQuestTemplates() {
  const gi = Math.floor(Math.random() * QUEST_GAME_IDS.length);
  const pool = getQuestCryptoPool();
  const ci = Math.floor(Math.random() * pool.length);
  return [
    { id: 'tap_coin',    title: 'Tap the coin 1000 times',                                   icon: 'kspt.png',             target: 1000,  check: d => (d.questTapCount||0) },
    { id: 'tap_earn',    title: 'Earn 25 KSPT from tapping',                                 icon: 'kspt.png',             target: 25,    check: d => (d.questTapEarned||0) },
    { id: 'bet_win',     title: 'Win BET 3 times',                                           icon: 'yes.png',           target: 3,     check: d => (d.questBetWins||0) },
    { id: 'overdrive',   title: 'Use Temporary Overdrive 3 times',                           icon: 'game.png',         target: 3,     check: d => (d.questOverdriveUses||0) },
    { id: 'ticket_8',    title: 'Spend 8 tickets',                                           icon: 'ticket.png',          target: 8,     check: d => (d.questTicketsSpent||0) },
    { id: 'ticket_game', title: `Spend 5 tickets in ${QUEST_GAME_NAMES[gi]}`,                icon: QUEST_GAME_ICONS[gi],   target: 5,     gameId: QUEST_GAME_IDS[gi], check: d => ((d.questTicketsInGame||{})[QUEST_GAME_IDS[gi]]||0) },
    { id: 'earn_ek',     title: 'Earn 3 EK',                                                 icon: 'ek.png',           target: 3,     check: d => (d.questEkEarned||0) },
    { id: 'buy_crypto',  title: `Buy ${pool[ci].name} for 1000 KSPT`, icon: pool[ci].icon, target: 1000, cryptoId: pool[ci].name, check: d => (d.questCryptoBought||0) },
    { id: 'online_20',   title: 'Stay online for 20 minutes',                               icon: 'dzoi.png',         target: 1200,  check: d => (d.questOnlineSecs||0) },
  ];
}

function getWeeklyQuestTemplates() {
  const gi       = Math.floor(Math.random() * QUEST_GAME_IDS.length);
  const ticketW  = 30 + Math.floor(Math.random() * 31);
  const ticketG  = 20 + Math.floor(Math.random() * 11);
  const exVol    = 5000 + Math.floor(Math.random() * 10001);
  const ekTarget = 10  + Math.floor(Math.random() * 16);
  const dqTarget = 8   + Math.floor(Math.random() * 5);
  const tapK     = 100 + Math.floor(Math.random() * 101);
  return [
    { id: 'w_online',   title: 'Stay online for 90 minutes',                              icon: 'dzoi.png',           target: 5400,    check: d => (d.wQuestOnlineSecs||0) },
    { id: 'w_capsule',  title: 'Open 5 capsules',                                         icon: 'capsule.png',        target: 5,       check: d => (d.wQuestCapsuleOpened||0) },
    { id: 'w_tickets',  title: `Spend ${ticketW} tickets`,                                icon: 'ticket.png',         target: ticketW, check: d => (d.wQuestTicketsSpent||0) },
    { id: 'w_exchange', title: `Make ${exVol} KSPT in exchange trades`,                   icon: 'bir.png',            target: exVol,   check: d => (d.questExchangeVolume||0) },
    { id: 'w_ek',       title: `Earn ${ekTarget} EK`,                                     icon: 'ek.png',             target: ekTarget,check: d => (d.wQuestEkEarned||0) },
    { id: 'w_dq',       title: `Complete ${dqTarget} daily quests`,                       icon: 'kspt.png',           target: dqTarget,check: d => (d.questDailyDone||0) },
    { id: 'w_tap',      title: `Earn ${tapK} KSPT from tapping`,                          icon: 'kspt.png',           target: tapK,    check: d => (d.wQuestTapEarned||0) },
    { id: 'w_tgame',    title: `Spend ${ticketG} tickets in ${QUEST_GAME_NAMES[gi]}`,     icon: QUEST_GAME_ICONS[gi], target: ticketG, gameId: QUEST_GAME_IDS[gi], check: d => ((d.wQuestTicketsInGame||{})[QUEST_GAME_IDS[gi]]||0) },
  ];
}

// Таймеры: 24ч для daily, 7 дней для weekly — от первого открытия вкладки
function getNextRefreshTime(isWeekly) {
  return Date.now() + (isWeekly ? 7 * 24 * 3600 * 1000 : 24 * 3600 * 1000);
}

function generateQuests() {
  const allDaily = getDailyQuestTemplates();
  const shuffled = allDaily.sort(() => 0.5 - Math.random());
  const daily = shuffled.slice(0, 2);
  const allWeekly = getWeeklyQuestTemplates();
  const weekly = [allWeekly[Math.floor(Math.random() * allWeekly.length)]];

  // Сохраняем gameId чтобы он пережил JSON сериализацию
  const ticketDaily = daily.find(q => q.id === 'ticket_game');
  if (ticketDaily && ticketDaily.gameId) d.quests._ticketGameId = ticketDaily.gameId;
  const ticketWeekly = weekly.find(q => q.id === 'w_tgame');
  if (ticketWeekly && ticketWeekly.gameId) d.quests._weeklyGameId = ticketWeekly.gameId;
  const cryptoDaily = daily.find(q => q.id === 'buy_crypto');
  d.quests._cryptoQuestId = (cryptoDaily && cryptoDaily.cryptoId) ? cryptoDaily.cryptoId : null;

  // Убираем функцию check перед сохранением (она не сериализуется)
  const strip = q => ({ id: q.id, title: q.title, icon: q.icon, target: q.target, claimed: false });
  return { daily: daily.map(strip), weekly: weekly.map(strip) };
}

function initQuestsData() {
  if (!d.quests) d.quests = {};
  const now = Date.now();

  if (!d.quests.dailyExpire || isNaN(d.quests.dailyExpire) || now >= d.quests.dailyExpire) {
    const generatedDaily = getDailyQuestTemplates();
    const shuffledDaily = generatedDaily.sort(() => 0.5 - Math.random());
    const dailyPicked = shuffledDaily.slice(0, 2);
    const cryptoDaily = dailyPicked.find(q => q.id === 'buy_crypto');
    if (cryptoDaily && cryptoDaily.cryptoId) d.quests._cryptoQuestId = cryptoDaily.cryptoId;
    const ticketDaily = dailyPicked.find(q => q.id === 'ticket_game');
    if (ticketDaily && ticketDaily.gameId) d.quests._ticketGameId = ticketDaily.gameId;
    const stripFn = q => ({ id: q.id, title: q.title, icon: q.icon, target: q.target, claimed: false });
    d.quests.daily = dailyPicked.map(stripFn);
    const prevDaily = d.quests.dailyExpire && !isNaN(d.quests.dailyExpire) ? d.quests.dailyExpire : now;
    d.quests.dailyExpire = prevDaily + 24 * 3600 * 1000;
    d.questTapCount = 0;
    d.questBetWins = 0;
    d.questOverdriveUses = 0;
    d.questEkEarned = 0;
    d.questCapsuleOpened = 0;
    d.questCryptoBought = 0;
    d.questTapEarned = 0;
    d.questTicketsSpent = 0;
    d.questTicketsInGame = {};
    d.questOnlineSecs = 0;
  }

  if (!d.quests.weeklyExpire || isNaN(d.quests.weeklyExpire) || now >= d.quests.weeklyExpire) {
    const allWeekly = getWeeklyQuestTemplates();
    const weeklyPicked = [allWeekly[Math.floor(Math.random() * allWeekly.length)]];
    const ticketWeekly = weeklyPicked.find(q => q.id === 'w_tgame');
    if (ticketWeekly && ticketWeekly.gameId) d.quests._weeklyGameId = ticketWeekly.gameId;
    const stripFn2 = q => ({ id: q.id, title: q.title, icon: q.icon, target: q.target, claimed: false });
    d.quests.weekly = weeklyPicked.map(stripFn2);
    const prevWeekly = d.quests.weeklyExpire && !isNaN(d.quests.weeklyExpire) ? d.quests.weeklyExpire : now;
    d.quests.weeklyExpire = prevWeekly + 7 * 24 * 3600 * 1000;
    d.questExchangeVolume = 0;
    d.wQuestOnlineSecs = 0;
    d.wQuestCapsuleOpened = 0;
    d.wQuestTicketsSpent = 0;
    d.wQuestEkEarned = 0;
    d.wQuestTapEarned = 0;
    d.wQuestTicketsInGame = {};
  }

  if (!d.quests.znetons) d.quests.znetons = 0;
  save();
}

function initQuestsTab() {
  initQuestsData();
  renderQuestsTab();
}

function renderQuestsTab() {
  const zEl = document.getElementById('znetonCount');
  if (zEl) zEl.textContent = d.quests ? (d.quests.znetons || 0) : 0;
  renderQuestList('dailyQuestsContainer', d.quests.daily || [], 1);
  renderQuestList('weeklyQuestsContainer', d.quests.weekly || [], 5);
  // Мастер-достижение: Target skin
  const _tqEl = document.getElementById('targetSkinProgress');
  if (_tqEl) {
    const owned = d.secretSkins?.target || d.skins?.target;
    if (owned) { _tqEl.style.display = 'none'; }
    else {
      const done = d.questDailyDone || 0;
      const pct = Math.min(100, Math.floor(done/50*100));
      _tqEl.innerHTML = `<div style="font-size:11px;color:#888;margin-bottom:4px;">🎯 Master Quest: Complete 50 daily quests → Target Skin (${done}/50)</div>
        <div style="background:#333;border-radius:4px;height:6px;overflow:hidden;"><div style="width:${pct}%;background:#ff9800;height:100%;border-radius:4px;"></div></div>`;
    }
  }
}

function getQuestCheck(id) {
  const checks = {
    'tap_coin':    d => (d.questTapCount||0),
    'tap_earn':    d => (d.questTapEarned||0),
    'bet_win':     d => (d.questBetWins||0),
    'overdrive':   d => (d.questOverdriveUses||0),
    'ticket_8':    d => (d.questTicketsSpent||0),
    'ticket_game': d => ((d.questTicketsInGame||{})[d.quests._ticketGameId]||0),
    'earn_ek':     d => (d.questEkEarned||0),
    'buy_crypto':  d => (d.questCryptoBought||0),
    'online_20':   d => (d.questOnlineSecs||0),
    'w_online':    d => (d.wQuestOnlineSecs||0),
    'w_capsule':   d => (d.wQuestCapsuleOpened||0),
    'w_tickets':   d => (d.wQuestTicketsSpent||0),
    'w_exchange':  d => (d.questExchangeVolume||0),
    'w_ek':        d => (d.wQuestEkEarned||0),
    'w_dq':        d => (d.questDailyDone||0),
    'w_tap':       d => (d.wQuestTapEarned||0),
    'w_tgame':     d => ((d.wQuestTicketsInGame||{})[d.quests._weeklyGameId]||0),
  };
  return checks[id] || (() => 0);
}

function renderQuestList(containerId, quests, reward) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  quests.forEach((quest, idx) => {
    const checkFn = getQuestCheck(quest.id);
    const progress = checkFn(d);
    const pct = Math.min(100, Math.floor((progress / quest.target) * 100));
    const completed = pct >= 100;
    const claimed = quest.claimed;

    const card = document.createElement('div');
    card.className = 'card';
    card.style.cssText = 'margin-bottom:10px; position:relative;';
    if (claimed) card.style.opacity = '0.6';

    const iconSrc = claimed ? 'complete.png' : (quest.icon || 'kspt.png');

    // Отображение прогресса: округляем до 2 знаков, большие числа в K
    const fmtNum = n => {
      if (n >= 1000) return `${(n/1000).toFixed(0)}K`;
      if (Number.isInteger(n)) return n;
      return parseFloat(n.toFixed(2));
    };
    const dispProgress = fmtNum(Math.min(progress, quest.target));
    const dispTarget   = fmtNum(quest.target);

    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="${iconSrc}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;" onerror="this.src='kspt.png'">
        <div style="flex:1;">
          <div style="font-weight:bold; font-size:13px; margin-bottom:4px;">${quest.title}</div>
          <div style="background:#333; border-radius:6px; height:8px; overflow:hidden;">
            <div style="width:${pct}%; background:${reward===1?'#4fc3f7':'#ce93d8'}; height:100%; border-radius:6px; transition:width 0.3s;"></div>
          </div>
          <div style="font-size:11px; color:#aaa; margin-top:3px;">${dispProgress} / ${dispTarget}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;min-width:50px;">
          <img src="zneton.png" style="width:20px;height:20px;" onerror="this.src='kspt.png'">
          <span style="font-size:12px; color:#ffd54f;">+${reward}</span>
          ${completed && !claimed ? `<button onclick="claimQuest('${reward===1?'daily':'weekly'}', ${idx})" style="margin-top:4px;background:#2e7d32;color:#fff;border:none;border-radius:6px;padding:4px 8px;font-size:11px;cursor:pointer;">Claim</button>` : ''}
          ${claimed ? `<span style="font-size:10px;color:#66bb6a;margin-top:4px;">✓ Done</span>` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function claimQuest(type, idx) {
  if (!d.quests) return;
  const list = type === 'daily' ? d.quests.daily : d.quests.weekly;
  if (!list || !list[idx]) return;
  const quest = list[idx];
  if (quest.claimed) return;

  const checkFn = getQuestCheck(quest.id, quest.gameId);
  const progress = checkFn(d);
  if (progress < quest.target) {
    showToast('Quest not completed yet!');
    return;
  }

  const reward = type === 'daily' ? 1 : 5;
  quest.claimed = true;
  d.quests.znetons = (d.quests.znetons || 0) + reward;
  if (type === 'daily') {
    d.questDailyDone = (d.questDailyDone || 0) + 1;
    checkQuestProgress('w_dq');
  }
  // Проверяем достижение Target skin (50 квестов суммарно)
  const totalDone = (d.questDailyDone || 0);
  if (totalDone >= 50 && !d.skins?.target && !d.secretSkins?.target) {
    if (!d.secretSkins) d.secretSkins = {};
    d.secretSkins['target'] = 1;
    setTimeout(() => showToast('🎯 Target skin unlocked! (50 quests done)'), 500);
  }
  showToast(`+${reward} token${reward > 1 ? 's' : ''}! 🎖️`);
  save();
  renderQuestsTab();
}

function checkQuestProgress(eventId) {
  if (!d.quests) return;
  const iventTab = document.getElementById('iventTab');
  if (iventTab && iventTab.style.display !== 'none') {
    renderQuestsTab();
  }
}

function startQuestTimers() {
  if (window._questTimerInterval) return; // уже запущен — не пересоздавать
  updateQuestTimers();
  window._questTimerInterval = setInterval(updateQuestTimers, 1000);
}

function updateQuestTimers() {
  if (!d.quests) return;
  const now = Date.now();
  const dailyEl  = document.getElementById('questDailyTimer');
  const weeklyEl = document.getElementById('questWeeklyTimer');

  if (dailyEl && d.quests.dailyExpire) {
    const diff = Math.max(0, d.quests.dailyExpire - now);
    dailyEl.textContent = formatQuestTime(diff, false);
    if (diff === 0) { initQuestsData(); renderQuestsTab(); }
  }
  if (weeklyEl && d.quests.weeklyExpire) {
    const diff = Math.max(0, d.quests.weeklyExpire - now);
    weeklyEl.textContent = formatQuestTime(diff, true);
    if (diff === 0) { initQuestsData(); renderQuestsTab(); }
  }
}

function formatQuestTime(ms, showDays) {
  const s = Math.floor(ms / 1000);
  if (showDays) {
    const days = Math.floor(s / 86400);
    const h    = Math.floor((s % 86400) / 3600);
    const m    = Math.floor((s % 3600) / 60);
    const sec  = s % 60;
    return `${days}d ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  } else {
    const h   = Math.floor(s / 3600);
    const m   = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }
}
// ==========================================
// END QUESTS SYSTEM
// ==========================================

// ==========================================
// SAFES SYSTEM
// ==========================================

const SAFE_COSTS = { noob: 10, iron: 20, elite: 45 };
const SAFE_COOLDOWN_MS = 35 * 3600 * 1000; // 35 часов

const SAFE_PROMO_CODES = {
  '11333': 'noob',
  '24772': 'iron',
  '94728': 'elite'
};

let _currentSafeType = null;
let _safeTaps = 0;
let _safeOpening = false;

// --- Таблицы наград ---

function getSafeRewards(type) {
  const rate = getHourlyRate();
  if (type === 'noob') {
    return [
      { w: 30,  id: 'kspt_offline3',  label: `+${Math.floor(rate*3)} KSPT (3h offline)`,  img: 'kspt.png',    apply: () => { d.tokens += Math.floor(rate*3); } },
      { w: 20,  id: 'ek3',            label: '+3 EK',                                      img: 'ek.png',  apply: () => { d.ek = (d.ek||0)+3; d.ekLifetime = (d.ekLifetime||0)+3; } },
      { w: 20,  id: 'tickets6',       label: '+6 Tickets',                                 img: 'ticket.png', apply: () => { if(typeof gameTickets!=='undefined'){gameTickets.current+=6;if(typeof saveTickets==='function')saveTickets();} } },
      { w: 15,  id: 'key_yellow',     label: 'Yellow Key',                                 img: 'yellow.png',  apply: () => { if(!d.keys)d.keys={};d.keys.yellow=(d.keys.yellow||0)+1; } },
      { w: 10,  id: 'capsule2',       label: '2 Capsules',                                 img: 'capsule.png', apply: () => { _queueSafeCapsules(2); } },
      { w: 2,   id: 'free_spin',      label: 'Free Wheel Spin!',                           img: 'capskine.png',apply: () => { window._freeWheelSpin=true; if(!d.fortuneWheel)d.fortuneWheel={spinsUsed:0,lastResetTime:0}; d.fortuneWheel.spinsUsed=0; d.fortuneWheel.lastResetTime=0; } },
      { w: 0.7, id: 'key_green',      label: 'Green Key',                                  img: 'green.png',   apply: () => { if(!d.keys)d.keys={};d.keys.green=(d.keys.green||0)+1; } },
      { w: 0.2, id: 'znetons50',      label: '+50 Tokens',                                 img: 'zneton.png',  apply: () => { if(!d.quests)d.quests={};d.quests.znetons=(d.quests.znetons||0)+50; } },
      { w: 0.1, id: 'bg_dirt',        label: 'Dirt World Background!',                     img: 'dirt.png',    apply: () => { if(!d.ownedBgs)d.ownedBgs=[];if(!d.ownedBgs.includes('dirt'))d.ownedBgs.push('dirt'); } },
    ];
  } else if (type === 'iron') {
    const ekAmt = 8 + Math.floor(Math.random()*5); // 8-12
    return [
      { w: 20,  id: 'kspt_offline7',  label: `+${Math.floor(rate*7)} KSPT (7h offline)`,  img: 'kspt.png',    apply: () => { d.tokens += Math.floor(rate*7); } },
      { w: 20,  id: 'capsule_noob',   label: 'Capsule + Noob Box',                         img: 'noob1.png', apply: () => { _queueSafeCapsuleAndNoob(); } },
      { w: 20,  id: 'key_yellow',     label: 'Yellow Key',                                 img: 'yellow.png',  apply: () => { if(!d.keys)d.keys={};d.keys.yellow=(d.keys.yellow||0)+1; } },
      { w: 20,  id: 'ek_rand',        label: `+${ekAmt} EK`,                              img: 'ek.png',  apply: () => { d.ek=(d.ek||0)+ekAmt; d.ekLifetime=(d.ekLifetime||0)+ekAmt; } },
      { w: 10,  id: 'key_red',        label: 'Red Key',                                    img: 'red.png',     apply: () => { if(!d.keys)d.keys={};d.keys.red=(d.keys.red||0)+1; } },
      { w: 5,   id: 'key_blue',       label: 'Blue Key',                                   img: 'blue.png',    apply: () => { if(!d.keys)d.keys={};d.keys.blue=(d.keys.blue||0)+1; } },
      { w: 3,   id: 'puzzle',         label: 'Puzzle Piece!',                              img: 'puz.png',     apply(r) { r.img = _safeGivePuzzle() || 'puz.png'; } },
      { w: 2,   id: 'bg_bank',        label: 'Financial City Background!',                 img: 'bank.png',    apply: () => { if(!d.ownedBgs)d.ownedBgs=[];if(!d.ownedBgs.includes('bank'))d.ownedBgs.push('bank'); } },
    ];
  } else { // elite
    return [
      { w: 25,  id: 'kspt_offline12', label: `+${Math.floor(rate*12)} KSPT (12h offline)`,img: 'kspt.png',    apply: () => { d.tokens += Math.floor(rate*12); } },
      { w: 25,  id: 'boom3',          label: '3 BOOM Boxes!',                              img: 'boom.png',    apply: () => { _queueSafeBoomBoxes(3); } },
      { w: 20,  id: 'key_blue',       label: 'Blue Key',                                   img: 'blue.png',    apply: () => { if(!d.keys)d.keys={};d.keys.blue=(d.keys.blue||0)+1; } },
      { w: 10,  id: 'tickets20',      label: '+20 Tickets',                                img: 'ticket.png', apply: () => { if(typeof gameTickets!=='undefined'){gameTickets.current+=20;if(typeof saveTickets==='function')saveTickets();} } },
      { w: 10,  id: 'puzzle',         label: 'Puzzle Piece!',                              img: 'puz.png',     apply(r) { r.img = _safeGivePuzzle() || 'puz.png'; } },
      { w: 5,   id: 'key_black',      label: 'Black Key',                                  img: 'black.png',   apply: () => { if(!d.keys)d.keys={};d.keys.black=(d.keys.black||0)+1; } },
      { w: 4,   id: 'free_spin2',     label: '2 Free Wheel Spins!',                        img: 'capskine1.png',apply: () => { window._freeWheelSpin=true; if(!d.fortuneWheel)d.fortuneWheel={spinsUsed:0,lastResetTime:0}; d.fortuneWheel.spinsUsed=0; d.fortuneWheel.lastResetTime=0; window._safeExtraFreeSpin=true; } },
      { w: 0.5, id: 'bg_elit',        label: 'Elit Background!',                           img: 'elit.png',    apply: () => { if(!d.ownedBgs)d.ownedBgs=[];if(!d.ownedBgs.includes('elit'))d.ownedBgs.push('elit'); } },
      { w: 0.5, id: 'skin_goldensafe',label: 'Golden Safe Skin!',                          img: 'sgold.png',   apply: () => { if(!d.secretSkins)d.secretSkins={};d.secretSkins['goldensafe']=true; } },
    ];
  }
}

function _weightedSafePick(rewards) {
  const total = rewards.reduce((s,r)=>s+r.w, 0);
  let roll = Math.random()*total;
  for (const r of rewards) { roll-=r.w; if(roll<=0) return r; }
  return rewards[0];
}

function _rollSafeCount() {
  const r = Math.random()*100;
  if (r < 1)   return 5;
  if (r < 5)   return 4;
  if (r < 20)  return 3;
  return 2;
}

// --- Вспомогательные для наград ---

let _safePendingRewards = [];
let _safePendingCapsules = 0;
let _safePendingNoob = false;
let _safePendingBooms = 0;

function _queueSafeCapsules(n) { _safePendingCapsules += n; }
function _queueSafeCapsuleAndNoob() { _safePendingCapsules += 1; _safePendingNoob = true; }
function _queueSafeBoomBoxes(n) { _safePendingBooms += n; }

function _safeGivePuzzle() {
  if (!d.puzzleDone) {
    const missing = [];
    for (let i=0;i<9;i++) if(d.puzzles[i]===0) missing.push(i);
    if (missing.length>0) {
      const idx = missing[Math.floor(Math.random()*missing.length)];
      d.puzzles[idx]=1;
      return `pazl${idx+1}.png`;
    } else { d.tokens+=5; return 'kspt.png'; }
  } else if (!d.puzzle2Done) {
    const missing2=[];
    for(let i=0;i<9;i++) if(d.puzzles2[i]===0) missing2.push(i);
    if(missing2.length>0){
      const idx=missing2[Math.floor(Math.random()*missing2.length)];
      d.puzzles2[idx]=1;
      return `pazl${idx+11}.png`;
    } else { d.tokens+=5; return 'kspt.png'; }
  } else if (!d.puzzle3Done) {
    const missing3=[];
    for(let i=0;i<9;i++) if(d.puzzles3[i]===0) missing3.push(i);
    if(missing3.length>0){
      const idx=missing3[Math.floor(Math.random()*missing3.length)];
      d.puzzles3[idx]=1;
      if(typeof updateThirdPuzzleUI==='function') updateThirdPuzzleUI();
      return `puzl${idx+1}.png`;
    } else { d.tokens+=5; return 'kspt.png'; }
  } else if (!d.puzzle4Done) {
    const missing4=[];
    for(let i=0;i<9;i++) if(d.puzzles4[i]===0) missing4.push(i);
    if(missing4.length>0){
      const idx=missing4[Math.floor(Math.random()*missing4.length)];
      d.puzzles4[idx]=1;
      if(typeof updateFourthPuzzleUI==='function') updateFourthPuzzleUI();
      return `puzzle${idx+1}.png`;
    } else { d.tokens+=5; return 'kspt.png'; }
  } else if (!d.puzzle5Done) {
    const missing5=[];
    for(let i=0;i<25;i++) if(d.puzzles5[i]===0) missing5.push(i);
    if(missing5.length>0){
      const idx=missing5[Math.floor(Math.random()*missing5.length)];
      d.puzzles5[idx]=1;
      if(typeof updateFifthPuzzleUI==='function') updateFifthPuzzleUI();
      return `p${idx+1}.png`;
    } else { d.tokens+=5; return 'kspt.png'; }
  } else { d.tokens+=5; return 'kspt.png'; }
}

// --- Открытие сейфа (покупка / промокод) ---

function openSafePurchaseModal(type) {
  _currentSafeType = type;
  const names = { noob:'Noob Safe', iron:'Iron Safe', elite:'Elite Safe' };
  const imgs  = { noob:'snoob.png', iron:'sdef.png', elite:'selit.png' };
  const costs = SAFE_COSTS;

  document.getElementById('safeModalImg').src = imgs[type];
  document.getElementById('safeModalName').textContent = names[type];
  document.getElementById('safeModalCost').innerHTML =
    `<img src="zneton.png" style="width:16px;height:16px;vertical-align:middle;" onerror="this.src='kspt.png'"> ${costs[type]} tokens`;

  const modal = document.getElementById('safePurchaseModal');
  if (modal) modal.style.display = 'flex';
}

function closeSafePurchaseModal() {
  const modal = document.getElementById('safePurchaseModal');
  if (modal) modal.style.display = 'none';
}

function confirmSafePurchase() {
  if (!_currentSafeType) return;

  // Проверка cooldown
  if (!d.safe) d.safe = {};
  const now = Date.now();
  if (d.safe.lastOpen && (now - d.safe.lastOpen) < SAFE_COOLDOWN_MS) {
    const left = SAFE_COOLDOWN_MS - (now - d.safe.lastOpen);
    showToast(`Safe on cooldown! ${formatQuestTime(left, false)} left`);
    closeSafePurchaseModal();
    return;
  }

  // Проверка жетонов
  const cost = SAFE_COSTS[_currentSafeType];
  if (!d.quests) d.quests = {};
  if ((d.quests.znetons||0) < cost) {
    showToast(`Not enough tokens! Need ${cost}`);
    closeSafePurchaseModal();
    return;
  }

  d.quests.znetons -= cost;
  closeSafePurchaseModal();
  _startSafeOpening(_currentSafeType);
}

function checkSafeCode() {
  const input = document.getElementById('safeCodeInput');
  if (!input) return;
  const code = input.value.trim();
  const type = SAFE_PROMO_CODES[code];

  if (!type) { showToast('Invalid code!'); return; }

  if (!d.usedSafeCodes) d.usedSafeCodes = [];
  if (d.usedSafeCodes.includes(code)) { showToast('Code already used!'); input.value=''; return; }

  d.usedSafeCodes.push(code);
  input.value = '';
  save();
  showToast(`${type.charAt(0).toUpperCase()+type.slice(1)} Safe unlocked!`);
  _startSafeOpening(type);
}

// --- Анимация открытия ---

function _startSafeOpening(type) {
  _currentSafeType = type;
  _safeTaps = 0;
  _safeOpening = true;
  _safePendingRewards = [];
  _safePendingCapsules = 0;
  _safePendingNoob = false;
  _safePendingBooms = 0;

  const imgs = { noob:'snoob.png', iron:'sdef.png', elite:'selit.png' };
  const modal = document.getElementById('safeOpenModal');
  const img   = document.getElementById('safeOpenImg');
  const hint  = document.getElementById('safeOpenHint');

  img.src = imgs[type];
  hint.textContent = 'Tap to open! (0/5)';
  modal.style.display = 'flex';

  img.onclick = _safeOpenTapHandler;
}

function _safeOpenTapHandler() {
  if (!_safeOpening) return;
  _safeTaps++;

  const img  = document.getElementById('safeOpenImg');
  const hint = document.getElementById('safeOpenHint');

  // Shake animation
  img.style.transform = 'rotate(-6deg) scale(1.08)';
  if (navigator.vibrate) navigator.vibrate(30);
  setTimeout(()=>{ img.style.transform = 'rotate(4deg) scale(1.04)'; }, 80);
  setTimeout(()=>{ img.style.transform = 'rotate(0deg) scale(1)'; }, 160);

  hint.textContent = `Tap to open! (${_safeTaps}/5)`;

  if (_safeTaps >= 5) {
    img.onclick = null;
    _safeOpening = false;

    const openImgs = { noob:'snoob1.png', iron:'sdef1.png', elite:'selit1.png' };
    img.src = openImgs[_currentSafeType] || img.src;
    hint.textContent = 'Opening...';

    setTimeout(()=>{
      document.getElementById('safeOpenModal').style.display = 'none';
      _deliverSafeRewards(_currentSafeType);
    }, 500);
  }
}

function _deliverSafeRewards(type) {
  const count = _rollSafeCount();
  const pool  = getSafeRewards(type);
  const rewards = [];

  for (let i=0; i<count; i++) {
    const r = _weightedSafePick(pool);
    rewards.push(r);
  }

  // Применяем всё сразу
  rewards.forEach(r => r.apply(r));

  // Записываем cooldown
  if (!d.safe) d.safe = {};
  d.safe.lastOpen = Date.now();
  save();

  // Показываем награды по очереди через rewardPopup
  _showSafeRewardsSequentially(rewards, 0);

  // Обновляем UI cooldown
  _updateSafeCooldownUI();
  if (typeof renderQuestsTab === 'function') renderQuestsTab();
  ui();
}

function _showSafeRewardsSequentially(rewards, idx) {
  // Обновляем счётчик
  const counter = document.getElementById('safeRewardsCounter');
  const leftEl  = document.getElementById('safeRewardsLeft');
  const safeModal = document.getElementById('safeOpenModal');

  if (idx >= rewards.length) {
    // Скрываем счётчик и modal
    if (counter) counter.style.display = 'none';
    if (safeModal) safeModal.style.display = 'none';
    _processSafeQueues();
    return;
  }

  // Показываем счётчик поверх открытого сейфа
  const remaining = rewards.length - idx;
  if (counter && leftEl) {
    counter.style.display = 'block';
    leftEl.textContent = remaining;
    safeModal.style.display = 'flex';
  }

  const r = rewards[idx];
  showReward(r.label, r.img);

  const btn = document.querySelector('#rewardPopup button');
  if (btn) {
    btn.onclick = () => {
      document.getElementById('rewardPopup').style.display = 'none';
      _showSafeRewardsSequentially(rewards, idx + 1);
    };
  }
}

// Единая очередь задач после наград сейфа
let _safeTaskQueue = [];

function _processSafeQueues() {
  _safeTaskQueue = [];

  // Набираем задачи в правильном порядке
  for (let i = 0; i < _safePendingCapsules; i++) {
    _safeTaskQueue.push({ type: 'capsule' });
  }
  if (_safePendingNoob) {
    _safeTaskQueue.push({ type: 'noob' });
  }
  for (let i = 0; i < _safePendingBooms; i++) {
    _safeTaskQueue.push({ type: 'boom' });
  }
  if (window._freeWheelSpin) {
    _safeTaskQueue.push({ type: 'wheel' });
  }

  _safePendingCapsules = 0;
  _safePendingNoob = false;
  _safePendingBooms = 0;

  _runNextSafeTask();
}

function _runNextSafeTask() {
  if (_safeTaskQueue.length === 0) return;
  const task = _safeTaskQueue.shift();

  if (task.type === 'capsule') {
    _openOneSafeCapsule(_runNextSafeTask);
  } else if (task.type === 'noob') {
    _openSafeNoobBox(_runNextSafeTask);
  } else if (task.type === 'boom') {
    _openOneSafeBoom(_runNextSafeTask);
  } else if (task.type === 'wheel') {
    window._freeWheelSpin = false;
    setTimeout(() => { openFortuneWheel(); }, 400);
  }
}

function _openOneSafeCapsule(callback) {
  const origLastOpen = d.capsule ? d.capsule.lastOpen : 0;
  if (!d.capsule) d.capsule = {};
  d.capsule.lastOpen = 0;

  window._safeCapsuleCallback = () => {
    d.capsule.lastOpen = origLastOpen;
    if (callback) callback();
  };
  window._safeCapsuleActive = true;

  capsuleOpening = true;
  capsuleTaps = 0;
  lastCapsuleTapTime = 0;

  const modal = document.getElementById('capsuleBreakModal');
  const img   = document.getElementById('capsuleBreakImg');
  const hint  = document.getElementById('capsuleHint');
  if (!modal || !img) { if (callback) callback(); return; }

  img.src = 'capsule.png';
  img.classList.remove('tap-anim', 'zoomed');
  if (hint) hint.textContent = 'Tap to open!';
  modal.style.display = '';
  modal.classList.add('active');

  img.removeEventListener('click', capsuleTapHandler);
  img.addEventListener('click', capsuleTapHandler);
}

function _openSafeNoobBox(callback) {
  if (!d.noobBox) d.noobBox = { obtained: false, opened: false, taps: 0 };
  d.noobBox.obtained = true;
  d.noobBox.opened = false;
  d.noobBox.taps = 0;
  save();
  window._safeNoobCallback = callback;
  setTimeout(() => {
    if (typeof startNoobBoxSequence === 'function') startNoobBoxSequence();
  }, 300);
}

function _openOneSafeBoom(callback) {
  if (!d.bombBox) d.bombBox = { obtained: false };
  d.bombBox.obtained = true;
  save();
  window._safeBoomCallback = callback;
  if (typeof startBombBoxSequence === 'function') startBombBoxSequence();
}

// --- Cooldown UI ---

function _updateSafeCooldownUI() {
  const bar   = document.getElementById('safeCooldownBar');
  const timer = document.getElementById('safeCooldownTimer');
  if (!bar || !timer) return;

  if (!d.safe || !d.safe.lastOpen) { bar.style.display='none'; return; }

  const now  = Date.now();
  const diff = SAFE_COOLDOWN_MS - (now - d.safe.lastOpen);

  if (diff <= 0) { bar.style.display='none'; return; }

  bar.style.display = 'block';
  timer.textContent = formatQuestTime(diff, false) + ' remaining';
}

// Обновлять cooldown каждую секунду пока вкладка открыта
setInterval(()=>{
  const iventTab = document.getElementById('iventTab');
  if (iventTab && iventTab.style.display !== 'none') {
    _updateSafeCooldownUI();
  }
}, 1000);

// ==========================================
// END SAFES SYSTEM
// ==========================================

/* ---- Background Video ---- */
async function adminSendBgVideo() {
  if (!_isAdminUser() || !window._firebaseDB) return;
  const src = document.getElementById('apBgVideo').value;
  if (!src) { adminStopBgVideo(); return; }
  const dur = Number(document.getElementById('apBgVideoDur').value) || 60;
  const onlineOnly = document.getElementById('apBgVideoOnline')?.checked || false;
  const end = Date.now() + dur * 1000;
  await window._firebaseRef(window._firebaseDB, 'admin/bgVideo').set({ src, end, onlineOnly, ts: Date.now() });
  setTimeout(() => window._firebaseRef(window._firebaseDB, 'admin/bgVideo').remove(), (dur + 10) * 1000);
  showToast(`🎬 Video "${src}" sent!`);
}
async function adminStopBgVideo() {
  if (!window._firebaseDB) return;
  await window._firebaseRef(window._firebaseDB, 'admin/bgVideo').remove();
  _adminClearBgVideo();
}
function _adminApplyBgVideo(src, durationMs) {
  _adminClearBgVideo();
  let vid = document.getElementById('adminBgVideo');
  if (!vid) {
    vid = document.createElement('video');
    vid.id = 'adminBgVideo';
    vid.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:1;pointer-events:none;opacity:0.92;';
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    document.body.insertBefore(vid, document.body.firstChild);
  }
  vid.src = src;
  vid.play().catch(() => {});
  window._adminBgVideoEnd = Date.now() + durationMs;
  clearTimeout(window._adminBgVideoTimeout);
  window._adminBgVideoTimeout = setTimeout(() => _adminClearBgVideo(), durationMs);
  showToast('🎬 Background video started!');

  // Таймер в левом нижнем углу
  let timerEl = document.getElementById('bgVideoTimer');
  if (!timerEl) {
    timerEl = document.createElement('div');
    timerEl.id = 'bgVideoTimer';
    timerEl.style.cssText = 'position:fixed;bottom:90px;left:12px;z-index:9999;background:rgba(0,0,0,0.65);color:#fff;font-size:12px;padding:5px 10px;border-radius:10px;pointer-events:none;';
    document.body.appendChild(timerEl);
  }
  clearInterval(window._adminBgVideoTimerInterval);
  window._adminBgVideoTimerInterval = setInterval(() => {
    const left = window._adminBgVideoEnd - Date.now();
    if (left <= 0) {
      clearInterval(window._adminBgVideoTimerInterval);
      const el = document.getElementById('bgVideoTimer');
      if (el) el.remove();
      return;
    }
    const s = Math.ceil(left / 1000);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    timerEl.textContent = `🎬 ${m > 0 ? m + 'm ' : ''}${ss}s`;
  }, 500);
}
function _adminClearBgVideo() {
  const vid = document.getElementById('adminBgVideo');
  if (vid) { vid.pause(); vid.remove(); }
  clearTimeout(window._adminBgVideoTimeout);
  clearInterval(window._adminBgVideoTimerInterval);
  window._adminBgVideoEnd = 0;
  const timerEl = document.getElementById('bgVideoTimer');
  if (timerEl) timerEl.remove();
}

/* ---- Coin Control ---- */
async function adminSendCoinControl() {
  if (!window._firebaseDB) return;
  const dir   = document.getElementById('apCoinDir').value;
  const speed = document.getElementById('apCoinSpeed').value;
  const dur   = Number(document.getElementById('apCoinDur').value) || 60;
  const end   = Date.now() + dur * 1000;
  await window._firebaseRef(window._firebaseDB, 'admin/coinControl').set({ dir, speed, end, ts: Date.now() });
  setTimeout(() => window._firebaseRef(window._firebaseDB, 'admin/coinControl').remove(), (dur + 10) * 1000);
  showToast('🪙 Coin control sent!');
}
async function adminStopCoinControl() {
  if (!window._firebaseDB) return;
  await window._firebaseRef(window._firebaseDB, 'admin/coinControl').remove();
  _adminClearCoinControl();
  showToast('🪙 Coin control stopped.');
}
function _adminClearCoinControl() {
  const coin = document.getElementById('coin');
  if (!coin) return;
  coin.style.animation = '';
  coin.style.transform = '';
  if (window._adminCoinControlInterval) { clearInterval(window._adminCoinControlInterval); window._adminCoinControlInterval = null; }
  if (!document.getElementById('adminCoinStyle')) return;
  document.getElementById('adminCoinStyle').remove();
}
function _adminApplyCoinControl(dir, speed) {
  const coin = document.getElementById('coin');
  if (!coin) return;
  _adminClearCoinControl();
  const speedMap = { slow: '3s', medium: '1.2s', fast: '0.4s' };
  const dur = speedMap[speed] || '1.2s';
  let style = document.getElementById('adminCoinStyle');
  if (!style) { style = document.createElement('style'); style.id = 'adminCoinStyle'; document.head.appendChild(style); }
  if (dir === 'cw') {
    style.textContent = `@keyframes adminCoinCW { from{transform:rotate(0deg)} to{transform:rotate(360deg)} } #coin { animation: adminCoinCW ${dur} linear infinite !important; }`;
  } else if (dir === 'ccw') {
    style.textContent = `@keyframes adminCoinCCW { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} } #coin { animation: adminCoinCCW ${dur} linear infinite !important; }`;
  } else {
    style.textContent = `@keyframes adminCoinAxis { 0%{transform:rotateY(0deg)} 100%{transform:rotateY(360deg)} } #coin { animation: adminCoinAxis ${dur} linear infinite !important; }`;
  }
}

document.addEventListener('firebase-ready', _startFirebaseSync);
if (window._firebaseReady) _startFirebaseSync();

// Playtime tracking
window._playtimeSessionStart = Date.now();
window._playtimeLastTick = Date.now();

function _tickPlaytime() {
  const now = Date.now();
  const delta = now - (window._playtimeLastTick || now);
  window._playtimeLastTick = now;
  // Считаем только если вкладка активна и delta разумная (< 2 минут, защита от suspend)
  if (delta > 0 && delta < 120000) {
    d.playtimeMs = (d.playtimeMs || 0) + delta;
  }
}

function _formatPlaytime(ms) {
  if (!ms || ms < 60000) return '< 1 min';
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return m + ' min';
  return h + 'h ' + m + 'min';
}

function _updateLastSeen() {
  _tickPlaytime();
  if (!window._firebaseReady || !window._firebaseDB) return;
  const uid = typeof getMyUid === 'function' ? getMyUid() : localStorage.getItem('_kspt_uid');
  if (!uid || uid === 'local') return;
  // Подтягиваем звание из Firebase при каждом тике (на случай если оффлайн был)
  const _rankUid = uid;
  window._firebaseRef(window._firebaseDB, `admin/playerRanks/${_rankUid}`).once('value').then(snap => {
    const rankData = snap ? snap.val() : null;
    if (rankData && rankData.rank !== undefined) {
      d.customRank = rankData.rank || null;
      save();
    }
    window._firebaseRef(window._firebaseDB, 'leaderboard/' + _rankUid).update({
      lastSeen: Date.now(),
      rate: Math.round(getHourlyRate()),
      tokens: Math.round(d.tokens || 0),
      playtimeMs: Math.round(d.playtimeMs || 0),
      adminBanned: d.adminBanned || false,
      customRank: d.customRank || null,
      ekLifetime: Math.round(d.ekLifetime || 0),
      gameRecords: d.gameRecords || {}
    });
  });
}
document.addEventListener('firebase-ready', _updateLastSeen);
if (window._firebaseReady) _updateLastSeen();
setInterval(_updateLastSeen, 10000);

// Квесты стартуют автоматически при загрузке
(function() {
  if (!d.quests) initQuestsData();
  startQuestTimers();
})();

document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
const _bombImg = document.getElementById('bombBoxImg');
if (_bombImg) {
    _bombImg.style.webkitTouchCallout = 'none';
    _bombImg.style.webkitUserSelect = 'none';
    _bombImg.addEventListener('contextmenu', e => e.preventDefault());
    _bombImg.addEventListener('touchstart', e => { if (e.cancelable) e.preventDefault(); }, {passive: false});
}

// ========== GAME RECORDS LEADERBOARD ==========
let _grCurrentGame = 'snake';
let _grCache = null;
let _grInterval = null;

const GAME_RECORD_LABELS = {
  snake:     { label: 'Apples eaten',   unit: '',    icon: 'snake.png'   },
  flappy:    { label: 'Pipes passed',   unit: '',    icon: 'flappy.png'  },
  pingpong:  { label: 'Best score',     unit: 'pts', icon: 'pong.png'    },
  blocksfast:{ label: 'Lines cleared',  unit: '',    icon: 'tetris.png'  },
  slither:   { label: 'Survived',       unit: 's',   icon: 'slither.png' },
  train:     { label: 'Coins collected',unit: '',    icon: 'train.png'   },
  race:      { label: 'Best lap time',  unit: 's',   icon: 'race.png'    },
  asteroids: { label: 'Best score',     unit: 'pts', icon: 'aster.png'   },
  robot:     { label: 'Best distance',  unit: 'm',   icon: 'irob.png'    },
  paper:     { label: 'Territory',      unit: '%',   icon: 'paper.png'   },
  hills:     { label: 'Best distance',  unit: 'm',   icon: 'hills.png'   },
  ek:        { label: 'EK collected',   unit: 'EK',  icon: 'ek.png'      }
};

window.toggleGameRecordsLB = function() {
  const body = document.getElementById('gameRecordsBody');
  const arrow = document.getElementById('gameRecordsArrow');
  if (!body) return;
  const visible = body.style.display !== 'none';
  body.style.display = visible ? 'none' : 'block';
  arrow.textContent = visible ? '▼ Show' : '▲ Hide';
  if (!visible) {
    loadGameRecordsLB();
    if (!_grInterval) _grInterval = setInterval(loadGameRecordsLB, 3000);
  } else {
    clearInterval(_grInterval); _grInterval = null;
  }
};

window.selectGameRecord = function(game) {
  _grCurrentGame = game;
  document.querySelectorAll('.gr-tab').forEach(b => b.classList.remove('gr-tab-active'));
  const tab = document.getElementById('grtab-' + game);
  if (tab) tab.classList.add('gr-tab-active');
  renderGameRecordsLB();
};

function loadGameRecordsLB() {
  if (!window._firebaseReady || !window._firebaseDB) return;
  const reqId = (window._grReqId = (window._grReqId || 0) + 1);
  window._firebaseRef(window._firebaseDB, 'leaderboard').once('value').then(snap => {
    if (reqId !== window._grReqId) return;
    _grCache = snap.val();
    renderGameRecordsLB();
    const el = document.getElementById('gameRecordsUpdated');
    if (el) el.textContent = 'Updated: ' + new Date().toLocaleTimeString();
  });
}

function renderGameRecordsLB() {
  const el = document.getElementById('gameRecordsList');
  if (!el || !_grCache) return;
  const game = _grCurrentGame;
  const meta = GAME_RECORD_LABELS[game];
  if (!meta) return;

  // Собираем записи
  let entries = [];
  Object.entries(_grCache).forEach(([uid, data]) => {
    if (!data || data.adminBanned) return;
    let value = 0;
    if (game === 'ek') {
      value = data.ekLifetime || 0;
    } else {
      value = (data.gameRecords && data.gameRecords[game]) || 0;
    }
    if (value <= 0) return; // не показываем нули
    const name = data.name || data.username || uid.slice(0,8);
    const photoUrl = data.photoUrl || '';
    entries.push({ name, value, uid, photoUrl });
  });

  // Сортировка — для race меньше = лучше
  if (game === 'race') {
    entries.sort((a, b) => a.value - b.value);
  } else {
    entries.sort((a, b) => b.value - a.value);
  }

  entries = entries.slice(0, 50);

  // Добавляем себя если есть рекорд но не попал в список
  const myUid = typeof getMyUid === 'function' ? getMyUid() : localStorage.getItem('_kspt_uid');
  const myVal = game === 'ek'
    ? (d.ekLifetime || 0)
    : (d.gameRecords && d.gameRecords[game]) || 0;
  if (myUid && myVal > 0 && !entries.find(e => String(e.uid) === String(myUid))) {
    entries.push({ name: 'You', value: myVal, uid: myUid, photoUrl: '' });
    if (game === 'race') entries.sort((a,b) => a.value - b.value);
    else entries.sort((a,b) => b.value - a.value);
    entries = entries.slice(0, 50);
  }

  if (!entries.length) {
    el.innerHTML = '<div style="color:#555;text-align:center;padding:15px;">No records yet</div>';
    return;
  }

  let html = `<div style="color:#666;font-size:11px;margin-bottom:6px;">${meta.label}</div>`;
  entries.forEach((e, i) => {
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `<span style="color:#666;font-size:11px;">${i+1}.</span>`;
    const isMe = String(e.uid) === String(myUid);
    const valStr = game === 'race' ? e.value.toFixed(2) + 's' : e.value + (meta.unit ? ' ' + meta.unit : '');
    const avatar = e.photoUrl || 'seri.png';
    html += `<div style="display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:6px;margin-bottom:3px;background:${isMe ? 'rgba(0,230,118,0.1)' : 'rgba(255,255,255,0.04)'};">
      <span style="min-width:20px;text-align:center;">${medal}</span>
      <img src="${avatar}" onerror="this.src='seri.png'" style="width:26px;height:26px;border-radius:50%;object-fit:cover;border:1px solid ${isMe ? '#00e676' : '#333'};flex-shrink:0;">
      <span style="flex:1;color:${isMe ? '#00e676' : '#fff'};font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${e.name}${isMe ? ' <span style="font-size:10px;">(you)</span>' : ''}</span>
      <span style="color:#00bcd4;font-weight:bold;white-space:nowrap;">${valStr}</span>
    </div>`;
  });
  el.innerHTML = html;
}
// ========== END GAME RECORDS LEADERBOARD ==========

/* ─── Easter Shop Tab Switch ─── */
function eastSwitchTab(tab) {
  const skinsContent  = document.getElementById('eastSkinsContent');
  const eastPanel     = document.getElementById('eastShopPanel');
  const fusePanel     = document.getElementById('fuseMachinePanel');
  const btnS = document.getElementById('eastTabSkins');
  const btnE = document.getElementById('eastTabEaster');
  const btnF = document.getElementById('eastTabFuse');

  // Скрываем всё
  if (skinsContent) skinsContent.style.display = 'none';
  if (eastPanel)    eastPanel.style.display    = 'none';
  if (fusePanel)    fusePanel.style.display    = 'none';
  // Сброс стилей кнопок
  if (btnS) { btnS.style.background = '#111'; btnS.style.color = '#888'; }
  if (btnE) { btnE.style.background = '#111'; btnE.style.color = '#888'; }
  if (btnF) { btnF.style.background = '#111'; btnF.style.color = '#888'; }

// Убираем overlay при уходе с Fuse
  const _fo = document.getElementById('_fuseOverlay');
  if (_fo) _fo.remove();

  if (tab === 'easter') {
    if (eastPanel) eastPanel.style.display = 'block';
    if (btnE) { btnE.style.background = 'linear-gradient(135deg,#7b1a1a,#c0392b)'; btnE.style.color = '#fff'; }
    // Update custom item card visibility
    const item3 = window._eastShopItems?.item3;
    const card = document.getElementById('eastShopCustomCard');
    if (card) card.style.display = (item3 && item3.active) ? 'block' : 'none';
    if (item3 && item3.active) {
      const el = document.getElementById('eastShopCustomTitle');
      if (el) el.textContent = item3.id;
      const ep = document.getElementById('eastShopCustomPrice');
      if (ep) ep.textContent = item3.price + ' eggs';
      const imgEl = document.getElementById('eastShopCustomImg');
      if (imgEl) {
        const imgMap = {
          keyYellow:'yellow.png', keyGreen:'green.png', keyRed:'red.png', keyBlue:'blue.png', keyBlack:'black.png',
          noobBox:'noob.png', capsule:'capsule.png', goldCapsule:'cagold.png', glitchBox:'glitchbox.png',
          bombBox:'bomb.png', keyBox:'keybox.png', safeNoob:'safe.png', safeIron:'safe.png', safeElite:'safe.png',
          eggi:'eggi.png', crypto_heart:'heart.png', dragon:'dragon.png', angel:'angel.png', demon:'demon.png',
          ufo:'ufo.png', doge:'doge.png', cyber_android:'cyber.png', goldcoin:'goldcoin.png', brb:'brb.png',
          kspt:'kspt.png', ek:'ek.png'
        };
        imgEl.src = imgMap[item3.id] || 'kspt.png';
      }
    }
    const p1 = window._eastShopItems?.item1?.price || 20;
    const p2 = window._eastShopItems?.item2?.price || 90;
    const ep1 = document.getElementById('eastShopPrice1');
    const ep2 = document.getElementById('eastShopPrice2');
    if (ep1) ep1.textContent = p1 + ' eggs';
    if (ep2) ep2.textContent = p2 + ' eggs';
    _eastUpdateEggBalanceUI();

  } else if (tab === 'fuse') {
    if (fusePanel) fusePanel.style.display = 'block';
    if (btnF) { btnF.style.background = 'linear-gradient(135deg,#4a1d96,#7c3aed)'; btnF.style.color = '#fff'; }
    // Overlay чтобы текст был виден без смены фона
    let _fuseOverlay = document.getElementById('_fuseOverlay');
    if (!_fuseOverlay) {
      _fuseOverlay = document.createElement('div');
      _fuseOverlay.id = '_fuseOverlay';
      _fuseOverlay.style.cssText = 'position:fixed;inset:0;z-index:-1;background:rgba(0,0,0,0.82);pointer-events:none;';
      document.getElementById('fuseMachinePanel')?.appendChild(_fuseOverlay);
    }
    _fuseCheckComplete();
    renderFuseMachine();

  } else {
    // skins
    if (skinsContent) skinsContent.style.display = 'block';
    if (btnS) { btnS.style.background = 'linear-gradient(135deg,#1a0a2e,#2d1b69)'; btnS.style.color = '#c084fc'; }
  }
}

// ── PAPER.IO EVENT ─────────────────────────────────────────────
function adminSetPaperEvent() {
  const mins = parseInt(document.getElementById('apPaperEventDuration').value);
  if (!mins || mins < 1) { showToast('Select a duration!'); return; }
  const realMs = mins * 60 * 1000;
  const start = new Date().toISOString();
  const end   = new Date(Date.now() + realMs).toISOString();
  window._firebaseDB.ref('paperEvent').set({ start, end }).then(() => {
    showToast('Paper.io Event started!');
    const status = document.getElementById('apPaperEventStatus');
    if (status) status.textContent = '✅ Active — ends in ' + mins + (mins < 60 ? ' min' : ' hours');
    updatePaperEventButton();
  });
}

function adminClearPaperEvent() {
  window._firebaseDB.ref('paperEvent').remove().then(() => {
    showToast('Paper.io Event stopped');
    const status = document.getElementById('apPaperEventStatus');
    if (status) status.textContent = '❌ Event cancelled';
    updatePaperEventButton();
  });
}

function updatePaperEventButton() {
  const btn = document.getElementById('paper-game-btn');
  window._firebaseDB.ref('paperEvent').once('value', snap => {
    const ev = snap.val();
    if (!ev) {
      if (btn) btn.classList.remove('paper-event-active');
      return;
    }
    const now = new Date(), end = new Date(ev.end);
    if (now <= end) {
      if (btn) btn.classList.add('paper-event-active');
    } else {
      // Event expired — clean up Firebase and remove highlight
      window._firebaseDB.ref('paperEvent').remove();
      if (btn) btn.classList.remove('paper-event-active');
      const status = document.getElementById('apPaperEventStatus');
      if (status) status.textContent = '⏰ Event has ended';
    }
  });
}

window._firebaseDB && window._firebaseDB.ref('paperEvent').once('value', () => updatePaperEventButton());
setInterval(updatePaperEventButton, 60000);
// ── /PAPER.IO EVENT ─────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
// EASTER EVENT
// ══════════════════════════════════════════════════════════════════
let _eastEventTimer = null;
let _eastEggEl = null;

/* ─── Admin: Start / Stop ─── */
function adminStartEasterEvent() {
  if (!_isAdminUser()) return;
  const mins = parseInt(document.getElementById('apEastEventDuration').value) || 0;
  if (!mins || mins < 1) { showToast('Enter duration in minutes!'); return; }
  const endTs = Date.now() + mins * 60000;
  const shopItems = _adminGetEastShopItems();
  window._firebaseDB.ref('easterEvent').set({ active: true, end: endTs, shopItems, ts: Date.now() }).then(() => {
    showToast(t('east_admin_started'));
    _adminUpdateEastStatus();
  });
}

function adminStopEasterEvent() {
  if (!_isAdminUser()) return;
  window._firebaseDB.ref('easterEvent').remove().then(() => {
    showToast(t('east_admin_stopped'));
    _adminUpdateEastStatus();
  });
}

function _adminGetEastShopItems() {
  // Prices from admin inputs
  const p1 = Math.max(1, parseInt(document.getElementById('apEastPrice1').value) || 20);
  const p2 = Math.max(1, parseInt(document.getElementById('apEastPrice2').value) || 90);
  // Third custom item
  const cat  = document.getElementById('apEastCustomCat')?.value || '';
  const item = document.getElementById('apEastCustomItem')?.value || '';
  const p3   = Math.max(1, parseInt(document.getElementById('apEastPrice3').value) || 50);
  return { item1: { id: 'openEgg', price: p1 }, item2: { id: 'eggi', price: p2 }, item3: { id: item, cat, price: p3, active: !!(cat && item) } };
}

function _adminUpdateEastStatus() {
  window._firebaseDB.ref('easterEvent').once('value', snap => {
    const ev = snap.val();
    const el = document.getElementById('apEastStatus');
    if (!el) return;
    if (ev && ev.active && ev.end > Date.now()) {
      const mins = Math.ceil((ev.end - Date.now()) / 60000);
      el.textContent = '✅ Active — ' + mins + ' min left';
      el.style.color = '#69f0ae';
    } else {
      el.textContent = 'No active event';
      el.style.color = '#555';
    }
  });
}

/* ─── Custom item dropdown population ─── */
const _EAST_CUSTOM_ITEMS = {
  keys:  [['keyYellow','🟡 Yellow Key'],['keyGreen','🟢 Green Key'],['keyRed','🔴 Red Key'],['keyBlue','🔵 Blue Key'],['keyBlack','⚫ Black Key']],
  boxes: [['noobBox','Noob Box'],['capsule','Capsule'],['goldCapsule','Gold Capsule'],['glitchBox','Glitch Box'],['bombBox','Bomb Box'],['keyBox','Key Box'],['safeNoob','Noob Safe'],['safeIron','Iron Safe'],['safeElite','Elite Safe']],
  skins: [['eggi','Easter Egg'],['crypto_heart','Crypto Heart'],['dragon','Dragon'],['angel','Angel'],['demon','Demon'],['ufo','UFO Wood'],['doge','Doge'],['cyber_android','Cyber Android'],['goldcoin','Gold Coin'],['brb','Big Red Button']],
  currency: [['kspt','KSPT tokens'],['ek','EK crystals']]
};

function _adminPopulateEastCustomItems() {
  const cat = document.getElementById('apEastCustomCat')?.value;
  const sel = document.getElementById('apEastCustomItem');
  if (!sel || !cat) return;
  const items = _EAST_CUSTOM_ITEMS[cat] || [];
  sel.innerHTML = items.map(([v,l]) => `<option value="${v}">${l}</option>`).join('');
}

/* ─── Client: Listen for Easter Event ─── */
function _eastStartListening() {
  if (!window._firebaseDB) return;
  window._firebaseDB.ref('easterEvent').on('value', snap => {
    const ev = snap.val();
    const now = Date.now();
    if (ev && ev.active && ev.end > now) {
      _eastActivate(ev);
    } else {
      _eastDeactivate();
    }
  });
}

function _eastActivate(ev) {
  window._eastEventActive = true;
  window._eastShopItems   = ev.shopItems || {};
  // Schedule first egg drop
  if (!_eastEventTimer) _eastScheduleNextEgg();
  _eastUpdateSkinTabVisibility(true);
  // Show notification once per session
  if (!window._eastNotified) {
    window._eastNotified = true;
    _adminShowOverlay(t('east_event_started'), '#ff6b6b', 4000);
  }
  // Авто-деактивация по таймеру
  if (window._eastEndTimeout) clearTimeout(window._eastEndTimeout);
  const msLeft = ev.end - Date.now();
  if (msLeft > 0) {
    window._eastEndTimeout = setTimeout(() => {
      _eastDeactivate();
      // Удаляем из Firebase
      if (window._firebaseDB) window._firebaseDB.ref('easterEvent').remove();
    }, msLeft);
  }
}

function _eastDeactivate() {
  window._eastEventActive = false;
  window._eastNotified   = false;
  if (_eastEventTimer) { clearTimeout(_eastEventTimer); _eastEventTimer = null; }
  if (_eastEggEl) { _eastEggEl.remove(); _eastEggEl = null; }
  _eastUpdateSkinTabVisibility(false);
}

function _eastScheduleNextEgg() {
  if (!window._eastEventActive) return;
  // Random 20s–60s
  const delay = 20000 + Math.random() * 40000;
  _eastEventTimer = setTimeout(() => {
    _eastSpawnEgg();
    _eastEventTimer = null;
    // Schedule next after egg is gone (or after 8s)
    setTimeout(() => { if (window._eastEventActive) _eastScheduleNextEgg(); }, 8000);
  }, delay);
}

function _eastSpawnEgg() {
  if (_eastEggEl) { _eastEggEl.remove(); _eastEggEl = null; }
  const el = document.createElement('img');
  el.src = 'eggi.png';
  el.id  = '_eastEgg';
  // Size: ~70px, float animation
  el.style.cssText = `
    position:fixed; width:70px; height:70px; object-fit:contain;
    z-index:39999; cursor:pointer;
    animation: eastEggFloat 3s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(255,180,50,0.8));
    border-radius:50%; user-select:none;
  `;
  // Random position (avoid edges by 80px)
  const vw = window.innerWidth,  vh = window.innerHeight;
  el.style.left = (80 + Math.random() * (vw - 160)) + 'px';
  el.style.top  = (100 + Math.random() * (vh - 200)) + 'px';
  el.addEventListener('click', () => _eastCollectEgg(el));
  el.addEventListener('touchstart', (e) => { e.preventDefault(); _eastCollectEgg(el); }, { passive: false });
  document.body.appendChild(el);
  _eastEggEl = el;
  // Auto-remove after 12s if not tapped
  setTimeout(() => { if (_eastEggEl === el) { el.remove(); _eastEggEl = null; } }, 12000);
}

function _eastCollectEgg(el) {
  el.remove();
  _eastEggEl = null;
  // Add egg currency to player data
  if (!d) return;
  d.eggCoins = (d.eggCoins || 0) + 1;
  save();
  _eastUpdateEggBalanceUI();
  // Floating +1 animation
  const pop = document.createElement('div');
  pop.textContent = '🥚 +1';
  pop.style.cssText = `
    position:fixed; left:${el.style.left}; top:${el.style.top};
    font-size:22px; font-weight:bold; color:#fff;
    pointer-events:none; z-index:40000;
    animation: eastPopUp 1s ease-out forwards;
  `;
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 1000);
}

function _eastUpdateEggBalanceUI() {
  const bal = (d && d.eggCoins) || 0;
  document.querySelectorAll('.east-egg-balance').forEach(el => { el.textContent = formatTemplate(t('east_balance_label'), [bal]); });
}

function _eastUpdateSkinTabVisibility(show) {
  const tabs = document.getElementById('eastShopTabs');
  // Fuse всегда показывается, Easter — только во время ивента
  const btnE = document.getElementById('eastTabEaster');
  if (btnE) btnE.style.display = show ? '' : 'none';
  if (tabs) tabs.style.display = 'flex'; // всегда показываем (там есть Fuse)
  if (!show) {
    eastSwitchTab('skins');
  }
}

/* ─── Easter Shop Buy Functions ─── */
let _eastOpenEggCooldown = 0;

function eastBuyOpenEgg() {
  if (!window._eastEventActive) return;
  if (!d) return;
  const price = (window._eastShopItems?.item1?.price) || 20;
  if ((d.eggCoins || 0) < price) { showToast('Not enough eggs! 🥚'); return; }
  const now = Date.now();
  if (now < _eastOpenEggCooldown) {
    const left = Math.ceil((_eastOpenEggCooldown - now) / 1000);
    showToast(formatTemplate(t('east_shop_cooldown_left'), [left]));
    return;
  }
  d.eggCoins -= price;
  save();
  _eastUpdateEggBalanceUI();
  // _eastOpenEggCooldown = now + 5 * 60 * 1000;
  // Trigger Easter Egg opening
  if (!d.easterEgg) d.easterEgg = { obtained: false, swipes: 0 };
  d.easterEgg.obtained = true;
  d.easterEgg.swipes = 0;
  save();
  if (typeof startEasterEggSequence === 'function') startEasterEggSequence();
  else showToast('🥚 Easter Egg opened!');
}

function eastBuySkin() {
  if (!window._eastEventActive) return;
  if (!d) return;
  const price = (window._eastShopItems?.item2?.price) || 90;
  if (d.skins && d.skins['eggi']) { showToast(t('east_shop_already_owned')); return; }
  if ((d.eggCoins || 0) < price) { showToast('Not enough eggs! 🥚'); return; }
  d.eggCoins -= price;
  if (!d.skins) d.skins = {};
  d.skins['eggi'] = 1;
  save();
  _eastUpdateEggBalanceUI();
  if (typeof updateSkinButtons === 'function') updateSkinButtons();
  showToast(t('easter_egg_obtained'));
}

function eastBuyCustom() {
  if (!window._eastEventActive) return;
  if (!d) return;
  const item3 = window._eastShopItems?.item3;
  if (!item3 || !item3.active) return;
  const price = item3.price || 50;
  if ((d.eggCoins || 0) < price) { showToast('Not enough eggs! 🥚'); return; }
  d.eggCoins -= price;
  save();
  _eastUpdateEggBalanceUI();
  // Route by category
  const itemId = item3.id, cat = item3.cat;
  if (cat === 'skins') {
    if (!d.skins) d.skins = {};
    d.skins[itemId] = 1;
    if (typeof updateSkinButtons === 'function') updateSkinButtons();
    showToast('🎨 Skin obtained!');
  } else if (cat === 'currency') {
    if (itemId === 'ek') {
      d.ek = (d.ek || 0) + 10;
      d.ekLifetime = (d.ekLifetime || 0) + 10;
      showToast('+10 EK!');
    } else {
      d.tokens = (d.tokens || 0) + 100;
      showToast('+100 KSPT!');
    }
    ui();
  } else {
    // keys и boxes — через _adminApplyOpening
    if (typeof _adminApplyOpening === 'function') _adminApplyOpening(itemId, {});
    else showToast('🎁 Item granted: ' + itemId);
  }
  save();
}

/* ─── Admin: Mod Action for egg balance ─── */
// (Admin queues via modActions, handled in _adminApplyModAction)
async function adminSetEggCoins() {
  if (!_isAdminUser()) return;
  const uid = _adminSelectedUid(); if (!uid) return;
  const val = Number(document.getElementById('apEggCoinsVal').value);
  const mode = document.getElementById('apEggCoinsMode').value;
  await _db.ref(`admin/modActions/${uid}`).set({ action: 'eggCoins', mode, val, ts: Date.now() });
  showToast(`✅ Egg coins action queued`);
}

// ══ Inject CSS keyframes ══
(function() {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes eastEggFloat {
      0%,100%{transform:translateY(0) rotate(-4deg);}
      50%{transform:translateY(-18px) rotate(4deg);}
    }
    @keyframes eastPopUp {
      0%{opacity:1;transform:translateY(0);}
      100%{opacity:0;transform:translateY(-60px);}
    }
  `;
  document.head.appendChild(s);
})();

// ── /EASTER EVENT ──────────────────────────────────────────────────

async function adminForceDeleteToken() {
  if (!_isAdminUser() || !window._firebaseDB) return;
  const fid = window._adminSelectedTokenId;
  if (!fid) { showToast('Select a token first'); return; }
  const name = document.getElementById('apSelectedTokenName')?.textContent || fid;
  if (!confirm(`Force delete token: ${name}?`)) return;
  try {
    await window._firebaseRef(window._firebaseDB, 'market/userTokens/' + fid).remove();
    showToast('✅ Token deleted: ' + name);
    window._adminSelectedTokenId = null;
    document.getElementById('apSelectedToken').style.display = 'none';
    adminLoadTokenList();
  } catch(e) {
    showToast('❌ Error: ' + e.message);
  }
}

function adminLoadTokenList() {
  if (!window._firebaseDB) return;
  const list = document.getElementById('apTokenList');
  if (!list) return;
  list.innerHTML = '<div style="color:#555;font-size:12px;">Loading...</div>';
  window._firebaseRef(window._firebaseDB, 'market/userTokens').once('value').then(snap => {
    const tokens = snap.val();
    if (!tokens) { list.innerHTML = '<div style="color:#555;font-size:12px;">No tokens found</div>'; return; }
    list.innerHTML = '';
    Object.entries(tokens).forEach(([fid, tok]) => {
      const div = document.createElement('div');
      div.style.cssText = 'display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:8px;cursor:pointer;border:1px solid #333;background:#111;';
      div.innerHTML = `<img src="${tok.icon||'kspt.png'}" onerror="this.src='kspt.png'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
        <div style="flex:1;min-width:0;">
          <div style="font-weight:bold;font-size:13px;">${tok.ticker||'?'} — ${tok.name||''}</div>
          <div style="font-size:10px;color:#555;">by ${tok.creatorName||tok.creatorId||'?'}</div>
        </div>
        <div style="font-size:11px;color:#ff9800;">${formatNumber(tok.price||0,4)} KSPT</div>`;
      div.onclick = () => {
        document.querySelectorAll('#apTokenList > div').forEach(d => d.style.borderColor = '#333');
        div.style.borderColor = '#ef5350';
        window._adminSelectedTokenId = fid;
        document.getElementById('apSelectedToken').style.display = 'block';
        document.getElementById('apSelectedTokenIcon').src = tok.icon || 'kspt.png';
        document.getElementById('apSelectedTokenName').textContent = `${tok.ticker} — ${tok.name}`;
        document.getElementById('apSelectedTokenId').textContent = fid;
      };
      list.appendChild(div);
    });
  });
}

function showTokenDetail(firebaseId) {
  const tok = (d.market.myTokens || []).find(t => t.firebaseId === firebaseId);
  if (!tok) return;

  const initialPrice = tok.history && tok.history.length ? tok.history[0] : tok.price;
  const currentPrice = tok.price;
  const priceChange = initialPrice > 0 ? ((currentPrice - initialPrice) / initialPrice * 100).toFixed(1) : '0.0';
  const changeColor = priceChange >= 0 ? '#00e676' : '#ff4081';
  const createdDate = tok.createdAt ? new Date(tok.createdAt).toLocaleDateString() : '—';
  const marketCap = (tok.price || 0) * (tok.supply || 0);
  const volume = tok.volume || 0;
  const lastPrice = tok.history && tok.history.length >= 2 ? tok.history[tok.history.length - 2] : currentPrice;

  // Аватарка создателя из leaderboard
  let creatorAvatar = 'seri.png';
  if (window._firebaseDB) {
    window._firebaseRef(window._firebaseDB, 'leaderboard/' + tok.creatorId).once('value').then(snap => {
      const data = snap?.val();
      if (data?.photoUrl) {
        const img = document.getElementById('tokenDetailCreatorAvatar');
        if (img) img.src = data.photoUrl;
      }
    });
  }

  document.getElementById('tokenDetailContent').innerHTML = `
    <!-- Шапка -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <img src="${tok.icon}" onerror="this.src='kspt.png'" style="width:60px;height:60px;border-radius:50%;object-fit:cover;border:2px solid #ff9800;">
      <div>
        <div style="font-size:20px;font-weight:bold;">${tok.ticker}</div>
        <div style="color:#aaa;font-size:13px;">${tok.name}</div>
        ${tok.description ? `<div style="color:#666;font-size:11px;margin-top:2px;">${tok.description}</div>` : ''}
      </div>
    </div>

    <!-- Цена -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
      <div style="background:#1a1a1a;border-radius:10px;padding:10px;">
        <div style="color:#888;font-size:11px;">Current Price</div>
        <div style="font-weight:bold;color:#ff9800;" data-live-price>${formatNumber(currentPrice, 4)} KSPT</div>
      </div>
      <div style="background:#1a1a1a;border-radius:10px;padding:10px;">
        <div style="color:#888;font-size:11px;">Previous Price</div>
        <div style="font-weight:bold;color:#aaa;">${formatNumber(lastPrice, 4)} KSPT</div>
      </div>
      <div style="background:#1a1a1a;border-radius:10px;padding:10px;">
        <div style="color:#888;font-size:11px;">Initial Price</div>
        <div style="font-weight:bold;color:#ccc;">${formatNumber(initialPrice, 4)} KSPT</div>
      </div>
      <div style="background:#1a1a1a;border-radius:10px;padding:10px;">
        <div style="color:#888;font-size:11px;">Change</div>
        <div style="font-weight:bold;color:${changeColor};">${priceChange >= 0 ? '+' : ''}${priceChange}%</div>
      </div>
    </div>

    <!-- Инфо -->
    <div style="background:#1a1a1a;border-radius:10px;padding:10px;margin-bottom:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#888;font-size:12px;">Total Supply</span>
        <span style="font-weight:bold;">${formatNumber(tok.supply, 0)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#888;font-size:12px;">You own</span>
        <span style="font-weight:bold;color:#00e676;">${formatNumber(tok.owned || 0, 2)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#888;font-size:12px;">Created</span>
        <span style="font-weight:bold;color:#aaa;">${createdDate}</span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#888;font-size:12px;">Market Cap</span>
        <span style="font-weight:bold;color:#ff9800;">${formatNumber(marketCap, 2)} KSPT</span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#888;font-size:12px;">Volume</span>
        <span style="font-weight:bold;color:#64b5f6;">${formatNumber(volume, 2)} KSPT</span>
      </div>
    </div>

    <!-- Создатель -->
    <div style="background:#1a1a1a;border-radius:10px;padding:10px;display:flex;align-items:center;gap:10px;">
      <img id="tokenDetailCreatorAvatar" src="seri.png" onerror="this.src='seri.png'" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:1px solid #333;">
      <div>
        <div style="font-size:11px;color:#888;">Creator</div>
        <div style="font-weight:bold;font-size:13px;">${tok.creatorName || tok.creatorId}</div>
      </div>
      ${String(tok.creatorId) === _getMyId() ? '<span style="margin-left:auto;font-size:10px;background:#ff9800;color:#000;padding:2px 7px;border-radius:8px;font-weight:bold;">YOU</span>' : ''}
    </div>
  `;

  const modal = document.getElementById('tokenDetailModal');
  modal.style.display = 'flex';

  // Обновлять цену каждые 3 сек пока открыто
  clearInterval(window._tokenDetailInterval);
  window._tokenDetailInterval = setInterval(() => {
    if (modal.style.display === 'none') { clearInterval(window._tokenDetailInterval); return; }
    const updated = (d.market.myTokens || []).find(t => t.firebaseId === firebaseId);
    if (!updated) return;
    const el = document.querySelector('#tokenDetailContent [data-live-price]');
    if (el) el.textContent = formatNumber(updated.price, 4) + ' KSPT';
  }, 10000);
}

// ==========================================
// PROFILE SYSTEM
// ==========================================

const PROFILE_REACTIONS = [
  '👍','🔥','❤️','😂','🎉','👏','😎','🤩','💪','🏆',
  '⭐','💎','🚀','🎮','🎯','😍','🙏','💰','🌟','👑',
  '🦄','💥','🎲','🎸','🤑','😈','👾','🍕','🤝','✨',
  '👎','🤮','💩'
];

const PROFILE_GAMES = ['snake','pingpong','blocksfast','slither','train','race','flappy','asteroids','robot','paper','hills'];
const PROFILE_GAME_NAMES = {
  snake:'Snake', pingpong:'Ping-Pong', blocksfast:'BlocksFast',
  slither:'Slither', train:'Ghost Train', race:'KSPT Races',
  flappy:'Flappy Bird', asteroids:'Space Asteroids', robot:'Robot Runner',
  paper:'Paper.io', hills:'Hills'
};
const PROFILE_GAME_ICONS = {
  snake:'snake.png', pingpong:'pong.png', blocksfast:'tetris.png',
  slither:'slither.png', train:'train.png', race:'race.png',
  flappy:'flappy.png', asteroids:'aster.png', robot:'irob.png',
  paper:'paper.png', hills:'hills.png'
};

let _profileCurrentTab = 'profile';

function openScreen_profile_hook() {
  if (!d.profile) d.profile = { bio:'', favSkin:'', favGame:'', createdAt: Date.now() };
  if (!d.friends) d.friends = {};
  if (!d.pendingReactions) d.pendingReactions = [];
  switchProfileTab('profile');
  _checkPendingReactions();
  _checkFriendRequests();
}

function switchProfileTab(tab) {
  _profileCurrentTab = tab;
  const profileContent = document.getElementById('profileTabContent');
  const friendsContent = document.getElementById('friendsTabContent');
  const profileBtn = document.getElementById('profileTabBtn');
  const friendsBtn = document.getElementById('friendsTabBtn');
  if (!profileContent || !friendsContent) return;

  if (tab === 'profile') {
    profileContent.style.display = 'block';
    friendsContent.style.display = 'none';
    profileBtn.style.background = 'linear-gradient(135deg,#00bcd4,#0097a7)';
    profileBtn.style.color = '#000';
    profileBtn.style.border = 'none';
    friendsBtn.style.background = '#1a1a1a';
    friendsBtn.style.color = '#aaa';
    friendsBtn.style.border = '1px solid #333';
    renderProfileTab();
  } else {
    profileContent.style.display = 'none';
    friendsContent.style.display = 'block';
    friendsBtn.style.background = 'linear-gradient(135deg,#00bcd4,#0097a7)';
    friendsBtn.style.color = '#000';
    friendsBtn.style.border = 'none';
    profileBtn.style.background = '#1a1a1a';
    profileBtn.style.color = '#aaa';
    profileBtn.style.border = '1px solid #333';
    renderFriendsTab();
  }
}

function _getMyAvatar() {
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (tgUser?.photo_url) return tgUser.photo_url;
  return localStorage.getItem('_kspt_nonTg_avatar') || 'seri.png';
}

function _getMyName() {
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (tgUser) return tgUser.first_name + (tgUser.last_name ? ' ' + tgUser.last_name : '');
  return localStorage.getItem('_kspt_nonTg_name') || d.market?.account?.name || 'Player';
}

function _getSkinRarity(income, isSecret, isFuse, fuseRarity) {
  if (isFuse) {
    const col = FUSE_RARITY_COLOR[fuseRarity] || '#ff9800';
    const glow = fuseRarity === 'god' ? '0 0 12px #ff174488' : `0 0 8px ${col}88`;
    return { key:'rarity_fuse', border:`2px solid ${col}`, gradient: null, shadow: glow };
  }
  if (isSecret) return { key:'rarity_secret', border:'2px solid transparent', gradient:'linear-gradient(135deg,#fff,#888,#fff)', shadow:'' };
  if (income <= 10)  return { key:'rarity_common',    border:'2px solid #555',    gradient:null, shadow:'' };
  if (income <= 30)  return { key:'rarity_rare',      border:'2px solid #00c853', gradient:null, shadow:'0 0 6px #00c85388' };
  if (income <= 50)  return { key:'rarity_epic_rare', border:'2px solid #00bcd4', gradient:null, shadow:'0 0 6px #00bcd488' };
  if (income <= 80)  return { key:'rarity_epic',      border:'2px solid #aa00ff', gradient:null, shadow:'0 0 8px #aa00ff88' };
  if (income <= 130) return { key:'rarity_mythic',    border:'2px solid #ff1744', gradient:null, shadow:'0 0 8px #ff174488' };
  if (income <= 200) return { key:'rarity_legendary', border:'2px solid #ffd600', gradient:null, shadow:'0 0 10px #ffd60088' };
  return { key:'rarity_ultra', border:'2px solid transparent', gradient:'linear-gradient(135deg,#2979ff,#d500f9,#ff1744)', shadow:'0 0 12px #9c27b088' };
}

function _skinBorderStyle(rar) {
  if (rar.gradient) return `border:2px solid transparent;outline:2px solid;outline-color:transparent;background:linear-gradient(#1a1a1a,#1a1a1a) padding-box,${rar.gradient} border-box;box-shadow:${rar.shadow};`;
  return `border:${rar.border};box-shadow:${rar.shadow};`;
}

function renderProfileTab() {
  const el = document.getElementById('profileTabContent');
  if (!el) return;
  if (!d.profile) d.profile = { bio:'', favSkin:'', favGame:'', createdAt: Date.now() };

  const myUid = getMyUid();
  const avatar = _getMyAvatar();
  const name = _getMyName();
  const ownedSkins = _getOwnedSkinsList();
  const skinCount = ownedSkins.length;
  const tokenCount = (d.market?.myTokens || []).filter(tk => String(tk.creatorId) === _getMyId()).length;
  const income = Math.round(getHourlyRate());
  const playtime = _formatPlaytime(d.playtimeMs || 0);
  const ticketsSpent = d.ticketsLifetime || 0;
  const totalTaps = d.totalTaps || 0;
  const capsCount = d.capsuleOpenCount || 0;

  const totalSkins = Object.keys(SKIN_INCOME).length;

  el.innerHTML = `
    <div class="profile-card" style="text-align:center;">
      <!-- Аватарка -->
      <div style="position:relative;width:80px;margin:0 auto 6px;">
        <img src="${avatar}" onerror="this.src='seri.png'" class="profile-avatar" id="profileAvatar">
        <div id="profileOnlineDot" class="profile-online-dot"></div>
      </div>
      <!-- Кнопки аватарки -->
      <div style="display:flex;gap:6px;justify-content:center;margin-bottom:8px;">
        <button onclick="profileChangeAvatar()" style="background:#1a1a1a;border:1px solid #333;color:#00bcd4;border-radius:8px;padding:4px 10px;font-size:12px;cursor:pointer;">📷 ${t('profile_change_avatar')}</button>
        <button onclick="profileResetAvatar()" style="background:#1a1a1a;border:1px solid #333;color:#888;border-radius:8px;padding:4px 10px;font-size:12px;cursor:pointer;">↩ ${t('profile_reset_avatar')}</button>
      </div>
      <!-- Ник -->
      ${(function(){
        const sd = d.streak?.days || 0;
        const bc = sd >= 10 ? _streakGetBorderColor(sd) : null;
        const isRainbow = bc === 'rainbow';
        const borderStyle = bc && !isRainbow
          ? `text-shadow:0 0 8px ${bc},0 0 16px ${bc},0 0 28px ${bc}88;`
          : (isRainbow
          ? `animation:rainbowGlow 2s linear infinite;`
          : '');
        return `<style>@keyframes rainbowGlow{0%{text-shadow:0 0 12px #f00,0 0 24px #f0088}16%{text-shadow:0 0 12px #ff9900,0 0 24px #ff990088}33%{text-shadow:0 0 12px #ffff00,0 0 24px #ffff0088}50%{text-shadow:0 0 12px #00ff00,0 0 24px #00ff0088}66%{text-shadow:0 0 12px #00ffff,0 0 24px #00ffff88}83%{text-shadow:0 0 12px #0099ff,0 0 24px #0099ff88}100%{text-shadow:0 0 12px #cc00ff,0 0 24px #cc00ff88}}</style>
        <div style="font-size:18px;font-weight:bold;margin-bottom:2px;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;">
          <span style="${borderStyle}">${name}</span>
          ${(typeof d !== 'undefined' && d.verified) ? '<img src="gal.png" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;">' : ''}
          <button onclick="profileChangeName()" style="background:#1a1a1a;border:1px solid #333;color:#00bcd4;border-radius:6px;padding:3px 9px;font-size:12px;cursor:pointer;">${t('profile_change_name')}</button>
        </div>`;
      })()}

<!-- Streak block -->
      ${(function(){
        const sd = d.streak?.days || 0;
        const rl = d.streak?.restoresLeft ?? 3;
        const lastTs = d.streak?.lastClaimTs || 0;
        const msLeft = Math.max(0, 86400000 - (Date.now() - lastTs));
        const h = Math.floor(msLeft/3600000), m = Math.floor((msLeft%3600000)/60000);
        const nextIn = msLeft > 0 ? `Next in ${h}h ${m}m` : 'Ready!';
        return `<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
          ${_streakFlameHTML(sd, sd > 0, 28)}
          <div style="text-align:left;">
            <div style="font-weight:bold;font-size:15px;">${sd} day${sd===1?'':'s'}</div>
            <div style="font-size:10px;color:#888;">${nextIn} · Restores: ${rl}/3</div>
          </div>
          ${(rl > 0 && sd === 0 && lastTs > 0) ? `<button onclick="restoreStreak()" style="background:#1a1a1a;border:1px solid #ff9800;color:#ff9800;border-radius:8px;padding:4px 10px;font-size:11px;cursor:pointer;">🔄 Restore (5🎖️)</button>` : ''}
        </div>`;
      })()}

      <div style="font-size:11px;color:#555;margin-bottom:10px;display:flex;align-items:center;justify-content:center;gap:6px;">
        <span>ID: ${myUid}</span>
        <button onclick="profileCopyId()" style="background:#1a1a1a;border:1px solid #333;color:#00bcd4;border-radius:6px;padding:2px 8px;font-size:11px;cursor:pointer;" data-lang-key="profile_copy_id">Copy ID</button>
      </div>
      <!-- Bio -->
      <div style="margin-bottom:10px;">
        <textarea id="profileBioInput" maxlength="250"
          style="width:100%;background:#1a1a1a;border:1px solid #333;border-radius:10px;color:#fff;padding:8px;font-size:13px;resize:none;box-sizing:border-box;"
          rows="3" placeholder="${t('profile_bio_placeholder')}">${d.profile.bio || ''}</textarea>
      </div>
      <!-- Fav skin picker — коллапсируемый -->
      <div style="margin-bottom:10px;">
        <div style="font-size:12px;color:#888;margin-bottom:6px;text-align:left;display:flex;align-items:center;gap:8px;">
          <span>${t('profile_fav_skin')}:</span>
          ${(()=>{
            const fs = ownedSkins.find(s => s.id === d.profile.favSkin);
            if (fs) return `<div style="display:flex;align-items:center;gap:5px;background:#1a1a1a;border:2px solid #00bcd4;border-radius:8px;padding:3px 7px;cursor:pointer;" onclick="toggleFavSkinPicker()">
              <img src="${fs.img}" onerror="this.src='kspt.png'" style="width:20px;height:20px;object-fit:contain;">
              <span style="font-size:11px;color:#fff;">${fs.name}</span>
              <span style="font-size:10px;color:#00bcd4;">▾</span>
            </div>`;
            return `<button onclick="toggleFavSkinPicker()" style="background:#1a1a1a;border:1px solid #333;color:#00bcd4;border-radius:6px;padding:2px 8px;font-size:11px;cursor:pointer;">Choose ▾</button>`;
          })()}
        </div>
        <div id="favSkinPicker" style="display:none;flex-wrap:wrap;gap:6px;">
          ${ownedSkins.map(s => {
            const selected = d.profile.favSkin === s.id;
            return `<div onclick="profileSelectFavSkin('${s.id}')"
              style="width:54px;cursor:pointer;border-radius:10px;padding:4px;text-align:center;
                background:${selected?'rgba(0,188,212,0.15)':'#1a1a1a'};
                border:${selected?'2px solid #00bcd4':'2px solid #333'};">
              <img src="${s.img}" onerror="this.src='kspt.png'" style="width:36px;height:36px;object-fit:contain;display:block;margin:0 auto;">
              <div style="font-size:9px;color:#aaa;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${s.name}</div>
            </div>`;
          }).join('')}
        </div>
        <input type="hidden" id="profileFavSkin" value="${d.profile.favSkin||''}">
      </div>
      <!-- Fav game picker — коллапсируемый -->
      <div style="margin-bottom:12px;">
        <div style="font-size:12px;color:#888;margin-bottom:6px;text-align:left;display:flex;align-items:center;gap:8px;">
          <span>${t('profile_fav_game')}:</span>
          ${(()=>{
            const fg = d.profile.favGame;
            if (fg && PROFILE_GAME_ICONS[fg]) return `<div style="display:flex;align-items:center;gap:5px;background:#1a1a1a;border:2px solid #00bcd4;border-radius:8px;padding:3px 7px;cursor:pointer;" onclick="toggleFavGamePicker()">
              <img src="${PROFILE_GAME_ICONS[fg]}" onerror="this.src='game.png'" style="width:20px;height:20px;border-radius:4px;object-fit:cover;">
              <span style="font-size:11px;color:#fff;">${PROFILE_GAME_NAMES[fg]}</span>
              <span style="font-size:10px;color:#00bcd4;">▾</span>
            </div>`;
            return `<button onclick="toggleFavGamePicker()" style="background:#1a1a1a;border:1px solid #333;color:#00bcd4;border-radius:6px;padding:2px 8px;font-size:11px;cursor:pointer;">Choose ▾</button>`;
          })()}
        </div>
        <div id="favGamePicker" style="display:none;flex-wrap:wrap;gap:6px;">
          ${PROFILE_GAMES.map(g => {
            const selected = d.profile.favGame === g;
            return `<div onclick="profileSelectFavGame('${g}')"
              style="display:flex;flex-direction:column;align-items:center;width:60px;cursor:pointer;border-radius:10px;padding:5px 3px;
                background:${selected?'rgba(0,188,212,0.15)':'#1a1a1a'};
                border:${selected?'2px solid #00bcd4':'1px solid #333'};">
              <img src="${PROFILE_GAME_ICONS[g]||'game.png'}" style="width:32px;height:32px;border-radius:6px;object-fit:cover;">
              <div style="font-size:9px;color:#aaa;margin-top:3px;text-align:center;line-height:1.2;">${PROFILE_GAME_NAMES[g]}</div>
            </div>`;
          }).join('')}
        </div>
        <input type="hidden" id="profileFavGame" value="${d.profile.favGame||''}">
      </div>
      <button onclick="saveProfileEdit()" style="background:linear-gradient(135deg,#00e676,#00c853);color:#000;font-weight:bold;width:100%;padding:10px;border-radius:10px;border:none;cursor:pointer;" data-lang-key="profile_save">Save</button>
    </div>

    <!-- Stats -->
    <div class="profile-stat-grid">
      <div class="profile-stat">
        <div class="profile-stat-val">${formatNumber(d.tokens||0,0)}</div>
        <div class="profile-stat-lbl">KSPT</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${income}</div>
        <div class="profile-stat-lbl">${t('profile_income')}</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${skinCount} / ${totalSkins}</div>
        <div class="profile-stat-lbl">${t('profile_skins_owned')}</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${tokenCount}</div>
        <div class="profile-stat-lbl">${t('profile_tokens_created')}</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${ticketsSpent}</div>
        <div class="profile-stat-lbl">${t('profile_tickets_spent')}</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${playtime}</div>
        <div class="profile-stat-lbl">${t('profile_playtime')}</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val" style="font-size:15px;">
          ${totalTaps >= 1000000
            ? (totalTaps/1000000).toFixed(1)+'M'
            : totalTaps >= 1000
            ? (totalTaps/1000).toFixed(1)+'K'
            : totalTaps}
        </div>
        <div class="profile-stat-lbl">${t('profile_total_taps')}</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">
          ${[d.puzzleDone,d.puzzle2Done,d.puzzle3Done,d.puzzle4Done,d.puzzle5Done].filter(Boolean).length}
          <span style="font-size:11px;color:#555;">/ 5</span>
        </div>
        <div class="profile-stat-lbl">Puzzles done</div>
      </div>
    </div>

    <!-- Skins collection -->
    <div class="profile-card">
      <div style="font-weight:bold;margin-bottom:${window._skinsCollapsed ? '0' : '10'}px;font-size:14px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;" onclick="toggleSkinsCollection()">
        <span>🎨 ${t('profile_skins_owned')} <span style="color:#555;font-size:12px;font-weight:normal;">${skinCount}/${totalSkins}</span></span>
        <span id="skinsCollapseIcon" style="color:#00bcd4;font-size:14px;">${window._skinsCollapsed ? '▸' : '▾'}</span>
      </div>
      <div id="skinsCollectionBody" style="display:${window._skinsCollapsed ? 'none' : 'block'};">
      ${(function(){
        const rarityGroups = [
          { key:'rarity_common',    label:'Common',          color:'#888' },
          { key:'rarity_rare',      label:'Rare',            color:'#00c853' },
          { key:'rarity_epic_rare', label:'Super Rare',      color:'#00bcd4' },
          { key:'rarity_epic',      label:'Epic',            color:'#aa00ff' },
          { key:'rarity_mythic',    label:'Mythic',          color:'#ff1744' },
          { key:'rarity_legendary', label:'Legendary',       color:'#ffd600' },
          { key:'rarity_ultra',     label:'Ultra Legendary', color:'#9c27b0' },
          { key:'rarity_secret',    label:'Secret',          color:'#888' },
          { key:'rarity_fuse',      label:'Fuse',            color:'#ff9800' },
        ];
        let html = '';
        rarityGroups.forEach(group => {
          const groupSkins = ownedSkins.filter(s => _getSkinRarity(s.income, s.isSecret, s.isFuse, s.fuseRarity).key === group.key);
          if (!groupSkins.length) return;
          const totalInGroup = ownedSkins.filter(s => true).length; // все скины уже отфильтрованы
          // Считаем сколько всего скинов такой редкости существует в игре
          const allOfRarity = Object.keys(SKIN_INCOME).filter(id => {
            const isFuse = FUSE_SKIN_IDS.includes(id);
            const isSecret = SECRET_SKIN_IDS.has(id);
            const income = SKIN_INCOME[id] || 0;
            const fuseRar = isFuse ? FUSE_RARITY[id] : null;
            return _getSkinRarity(income, isSecret, isFuse, fuseRar).key === group.key;
          }).length;
          html += `<div style="font-size:11px;font-weight:bold;color:${group.color};margin:8px 0 4px;letter-spacing:0.5px;">▸ ${t(group.key)} <span style="color:#555;font-weight:normal;font-size:10px;">${groupSkins.length}/${allOfRarity}</span></div>`;
          html += `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:4px;">`;
          groupSkins.forEach(s => {
            const rar = _getSkinRarity(s.income, s.isSecret, s.isFuse, s.fuseRarity);
            const isActive = d.skin === s.id;
            html += `<div onclick="profileShowSkinTip('${s.id}','${s.name}',${s.income},'${rar.key}')"
              style="width:54px;border-radius:10px;padding:4px;text-align:center;background:#1a1a1a;cursor:pointer;
                ${isActive?'outline:2px solid #00e676;outline-offset:2px;':''}
                ${_skinBorderStyle(rar)}">
              <img src="${s.img}" onerror="this.src='kspt.png'" style="width:36px;height:36px;object-fit:contain;display:block;margin:0 auto;">
              <div style="font-size:9px;color:#aaa;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${s.name}</div>
            </div>`;
          });
          html += `</div>`;
        });
        return html;
      })()}
      <div id="skinTipBox" style="display:none;margin-top:8px;padding:8px;background:#1a1a1a;border-radius:8px;font-size:12px;color:#ccc;"></div>
      </div><!-- /skinsCollectionBody -->
    </div>
  `;
}

// Скины которые считаются секретными по смыслу (не продаются, находятся особым способом)
const SECRET_SKIN_IDS = new Set(['doge','kostia','metka','seri','artem','mystic','capsule','siulai','gkspt','cyber_android','dirty','crypto_heart','corrupted','failed','goldensafe','bhole','toilet','capsulememe','ufo','dragon','eggi','viking', 'diamond_kspt','precious_coin','mops','bulldog']);
const FUSE_SKIN_IDS = ['iabloko','mak','conf','gir','eka','mil','tel','dvd','pop','zem','zam','shar','ogo','kak','sve','glaz','roz','ras','mat','tro'];
const FUSE_RARITY = {
  iabloko:'common', mak:'common', conf:'common', gir:'common', eka:'common',
  mil:'rare',    tel:'rare',   dvd:'rare',   pop:'rare',   zem:'rare',
  zam:'champion',shar:'champion',ogo:'champion',kak:'champion',sve:'champion',
  glaz:'secret', roz:'secret', ras:'secret', mat:'secret',
  tro:'god'
};
const FUSE_RARITY_COLOR = { common:'#888', rare:'#00c853', champion:'#ffd600', secret:'#aa00ff', god:'#ff1744' };
const FUSE_RARITY_LABEL = { common:'rarity_fuse_common', rare:'rarity_fuse_rare', champion:'rarity_fuse_champion', secret:'rarity_fuse_secret', god:'rarity_fuse_god' };
// Пулы по уровням (4 возможных исхода): [3 из данной редкости, 1 из следующей]
const FUSE_TIER_POOLS = {
  1: { main:'common',   bonus:'rare',     kspt_h:15, ek:10,  wait:[10,15] },
  2: { main:'rare',     bonus:'champion', kspt_h:35, ek:25,  wait:[20,30] },
  3: { main:'champion', bonus:'secret',   kspt_h:55, ek:60,  wait:[35,50] },
  4: { main:'secret',   bonus:'god',      kspt_h:100, ek:90, wait:[50,60] }
};

function _getOwnedSkinsList() {
  const result = [];
  const allSkins = Object.keys(SKIN_INCOME);
  const ekOwned = JSON.parse(localStorage.getItem('ekshop_owned') || '{}');
  // нормализуем: skin_tetris → tetris, skin_joystick → joystick, skin_snake → snake
  const ekOwnedNorm = {};
  Object.keys(ekOwned).forEach(k => {
    ekOwnedNorm[k] = true;
    ekOwnedNorm[k.replace(/^skin_/, '')] = true;
  });
  allSkins.forEach(id => {
    const isSecret = SECRET_SKIN_IDS.has(id) ||
                     !!(d.secretSkins && d.secretSkins[id]);
    const owned = (d.skins && d.skins[id]) ||
                  (d.secretSkins && d.secretSkins[id]) ||
                  (id === 'default') ||
                  (d.wonX10 && id === 'priz') ||
                  ekOwnedNorm[id] ||
                  (d.fuseSkins && d.fuseSkins[id]);
    if (owned) {
      const isFuse = FUSE_SKIN_IDS.includes(id);
      result.push({
        id,
        name: id.charAt(0).toUpperCase() + id.slice(1).replace(/_/g,' '),
        img: getSkinImage(id, d.euroVar||1, d.artemVar||0),
        income: SKIN_INCOME[id] || 0,
        isSecret,
        isFuse,
        fuseRarity: isFuse ? FUSE_RARITY[id] : null
      });
    }
  });
  // Сортировка: сначала по группе редкости, внутри группы по income
  const rarityOrder = { rarity_common:0, rarity_rare:1, rarity_epic_rare:2, rarity_epic:3, rarity_mythic:4, rarity_legendary:5, rarity_ultra:6, rarity_secret:7 };
  result.sort((a, b) => {
    const ra = _getSkinRarity(a.income, a.isSecret);
    const rb = _getSkinRarity(b.income, b.isSecret);
    const oa = rarityOrder[ra.key] ?? 0;
    const ob = rarityOrder[rb.key] ?? 0;
    if (oa !== ob) return oa - ob;
    return a.income - b.income;
  });
  return result;
}

function profileShowSkinTip(id, name, income, rarityKey) {
  const box = document.getElementById('skinTipBox');
  if (!box) return;
  box.style.display = 'block';
  const rarLabel = rarityKey ? t(rarityKey) : '';
  box.innerHTML = `<b>${name}</b> — +${income} KSPT/h &nbsp;<span style="color:#aaa;font-size:11px;">${rarLabel}</span>${d.skin === id ? ' ✅ <span style="color:#00e676;">Active</span>' : ''}`;
}

function profileChangeName() {
  const current = _getMyName();
  const newName = prompt(t('profile_change_name'), current);
  if (!newName || !newName.trim()) return;
  const trimmed = newName.trim().slice(0, 32);
  const isTg = !!window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (!isTg) localStorage.setItem('_kspt_nonTg_name', trimmed);
  else localStorage.setItem('_kspt_tg_custom_name', trimmed);
  if (d.market?.account) d.market.account.name = trimmed;
  save();
  if (window._firebaseReady && window._firebaseDB) {
    const uid = getMyUid();
    if (uid && uid !== 'local') {
      window._firebaseRef(window._firebaseDB, 'leaderboard/' + uid).update({ name: trimmed });
    }
  }
  showToast('✅ ' + t('profile_save') + '!');
  renderProfileTab();
}

function profileChangeAvatar() {
  const isTg = !!window.Telegram?.WebApp?.initDataUnsafe?.user;
  let fileInput = document.getElementById('_profileAvatarInput');
  if (!fileInput) {
    fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = '_profileAvatarInput';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
  }
  fileInput.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      const dataUrl = ev.target.result;
      if (isTg) localStorage.setItem('_kspt_tg_custom_avatar', dataUrl);
      else localStorage.setItem('_kspt_nonTg_avatar', dataUrl);
      save();
      if (window._firebaseReady && window._firebaseDB) {
        const uid = getMyUid();
        if (uid && uid !== 'local') {
          window._firebaseRef(window._firebaseDB, 'leaderboard/' + uid).update({ photoUrl: dataUrl });
        }
      }
      showToast('✅ Avatar updated!');
      renderProfileTab();
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
  };
  fileInput.click();
}

function profileResetAvatar() {
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (tgUser?.photo_url) {
    // Сбрасываем на TG-аватарку
    localStorage.removeItem('_kspt_tg_custom_avatar');
    if (window._firebaseReady && window._firebaseDB) {
      const uid = getMyUid();
      if (uid && uid !== 'local') {
        window._firebaseRef(window._firebaseDB, 'leaderboard/' + uid).update({ photoUrl: tgUser.photo_url });
      }
    }
    showToast('✅ ' + t('profile_reset_avatar'));
    renderProfileTab();
    return;
  }
  // Браузер — удаляем кастомную
  localStorage.removeItem('_kspt_nonTg_avatar');
  save();
  showToast('✅ ' + t('profile_reset_avatar'));
  renderProfileTab();
}

function profileCopyId() {
  const uid = getMyUid();
  try {
    navigator.clipboard.writeText(uid).then(() => showToast(t('profile_copied')));
  } catch(e) {
    showToast(uid);
  }
}

function profileSelectFavSkin(id) {
  if (!d.profile) d.profile = {};
  d.profile.favSkin = id;
  const input = document.getElementById('profileFavSkin');
  if (input) input.value = id;
  // Закрыть пикер после выбора и перерисовать
  renderProfileTab();
}

function toggleSkinsCollection() {
  window._skinsCollapsed = !window._skinsCollapsed;
  const body = document.getElementById('skinsCollectionBody');
  const icon = document.getElementById('skinsCollapseIcon');
  const hdr = body ? body.previousElementSibling : null;
  if (body) body.style.display = window._skinsCollapsed ? 'none' : 'block';
  if (icon) icon.textContent = window._skinsCollapsed ? '▸' : '▾';
  if (hdr) hdr.style.marginBottom = window._skinsCollapsed ? '0' : '10px';
}

function toggleFavSkinPicker() {
  const el = document.getElementById('favSkinPicker');
  if (!el) return;
  el.style.display = el.style.display === 'none' ? 'flex' : 'none';
}

function profileSelectFavGame(g) {
  if (!d.profile) d.profile = {};
  d.profile.favGame = g;
  const input = document.getElementById('profileFavGame');
  if (input) input.value = g;
  renderProfileTab();
}

function toggleFavGamePicker() {
  const el = document.getElementById('favGamePicker');
  if (!el) return;
  el.style.display = el.style.display === 'none' ? 'flex' : 'none';
}

function profileSelectFavGame(g) {
  if (!d.profile) d.profile = {};
  d.profile.favGame = g;
  const input = document.getElementById('profileFavGame');
  if (input) input.value = g;
  renderProfileTab();
}

function saveProfileEdit() {
  if (!d.profile) d.profile = {};
  const bio = document.getElementById('profileBioInput')?.value.trim() || '';
  if (bio.length > 250) { showToast('Bio max 250 chars'); return; }
  d.profile.bio = bio;
  d.profile.favSkin = document.getElementById('profileFavSkin')?.value || '';
  d.profile.favGame = document.getElementById('profileFavGame')?.value || '';
  save();
  // Sync to Firebase leaderboard
  if (window._firebaseReady && window._firebaseDB) {
    const uid = getMyUid();
    if (uid && uid !== 'local') {
      window._firebaseRef(window._firebaseDB, 'leaderboard/' + uid).update({
        bio: d.profile.bio,
        favSkin: d.profile.favSkin,
        favGame: d.profile.favGame
      });
    }
  }
  showToast(t('profile_save') + '!');
  renderProfileTab();
}

// ===== FRIENDS =====
function renderFriendsTab() {
  const el = document.getElementById('friendsTabContent');
  if (!el) return;
  if (!d.friends) d.friends = {};

  const friendIds = Object.keys(d.friends);

  el.innerHTML = `
    <!-- Add friend -->
    <div class="profile-card">
      <div style="font-weight:bold;margin-bottom:8px;">${t('friends_add')}</div>
      <input id="friendSearchInput" oninput="searchFriends(this.value)"
             style="width:100%;background:#1a1a1a;border:1px solid #333;color:#fff;border-radius:8px;padding:8px;font-size:13px;box-sizing:border-box;"
             placeholder="${t('friends_search')}">
      <div id="friendSearchResults" style="margin-top:6px;"></div>
    </div>

    <!-- Friends list -->
    <div id="friendsList">
      ${friendIds.length === 0 ? `<div style="text-align:center;color:#555;padding:20px;">${t('friends_none')}</div>` :
        friendIds.map(uid => _renderFriendItem(uid, d.friends[uid])).join('')
      }
    </div>
  `;

  // Подтягиваем актуальный lastSeen из Firebase для каждого друга
  if (window._firebaseReady && window._firebaseDB && friendIds.length > 0) {
    friendIds.forEach(uid => {
      window._firebaseRef(window._firebaseDB, `leaderboard/${uid}/lastSeen`).once('value').then(snap => {
        const ls = snap?.val();
        if (ls && d.friends[uid]) {
          d.friends[uid].lastSeen = ls;
          // Обновляем только этот элемент без полного перерендера
          const listEl = document.getElementById('friendsList');
          if (listEl) {
            const items = listEl.querySelectorAll('.friend-item');
            items.forEach(item => {
              if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(uid)) {
                item.outerHTML = _renderFriendItem(uid, d.friends[uid]);
              }
            });
          }
        }
      });
    });
  }
}

function _renderFriendItem(uid, friend) {
  const isOnline = (Date.now() - (friend.lastSeen || 0)) < 3 * 60 * 1000;
  const lastSeen = isOnline ? `<span style="color:#00e676;font-size:11px;">● ${t('profile_online')}</span>`
    : `<span style="color:#555;font-size:11px;">${formatLastSeen(friend.lastSeen)}</span>`;
  return `
    <div class="friend-item" onclick="openFriendProfile('${uid}')">
      <img src="${friend.avatar || 'seri.png'}" onerror="this.src='seri.png'"
           class="friend-avatar ${isOnline ? 'friend-online' : ''}">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:bold;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;gap:4px;">
          ${friend.name || uid}
          ${friend.verified ? '<img src="gal.png" style="width:12px;height:12px;object-fit:contain;flex-shrink:0;" title="Verified">' : ''}
        </div>
        ${lastSeen}
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0;">
        <button onclick="event.stopPropagation();openGiftSendModal('${uid}')"
                style="background:#1a1a1a;border:1px solid #333;border-radius:7px;width:32px;height:32px;color:#fff;cursor:pointer;font-size:15px;padding:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-shrink:0;">🎁</button>
        <button onclick="event.stopPropagation();openReactionPicker('${uid}')"
                style="background:#1a1a1a;border:1px solid #333;border-radius:7px;width:32px;height:32px;color:#fff;cursor:pointer;font-size:15px;padding:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-shrink:0;">🙂</button>
        <button onclick="event.stopPropagation();removeFriend('${uid}')"
                style="background:#1a1a1a;border:1px solid #3a1a1a;border-radius:7px;width:32px;height:32px;color:#ff4081;cursor:pointer;font-size:13px;padding:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-shrink:0;">✕</button>
      </div>
    </div>
  `;
}

function addFriendById() {
  const input = document.getElementById('friendSearchInput');
  const raw = (input?.value.trim() || '').replace(/^ID:\s*/i, '');
  if (!raw) return;
  const myUid = getMyUid();
  if (!window._firebaseReady || !window._firebaseDB) { showToast('Firebase not available'); return; }

  // Сначала пробуем как прямой uid
  window._firebaseRef(window._firebaseDB, 'leaderboard/' + raw).once('value').then(snap => {
    if (snap?.val()) {
      const data = snap.val();
      if (raw === myUid) { showToast(t('friends_self')); return; }
      if (d.friends && d.friends[raw]) { showToast(t('friends_already')); return; }
      if (!d.friends) d.friends = {};
      d.friends[raw] = { name: data.name || raw, avatar: data.photoUrl || 'seri.png', lastSeen: data.lastSeen || 0 };
      save();
      if (input) input.value = '';
      document.getElementById('friendSearchResults').innerHTML = '';
      showToast(t('friends_added'));
      renderFriendsTab();
    } else {
      // Не нашли по uid — ищем по имени
      window._firebaseRef(window._firebaseDB, 'leaderboard').once('value').then(snap2 => {
        const all = snap2?.val();
        if (!all) { showToast(t('friends_not_found')); return; }
        const match = Object.entries(all).find(([uid, p]) =>
          p.name && p.name.toLowerCase() === raw.toLowerCase() && uid !== myUid
        );
        if (!match) { showToast(t('friends_not_found')); return; }
        const [uid, data] = match;
        if (d.friends && d.friends[uid]) { showToast(t('friends_already')); return; }
        if (!d.friends) d.friends = {};
        d.friends[uid] = { name: data.name || uid, avatar: data.photoUrl || 'seri.png', lastSeen: data.lastSeen || 0 };
        save();
        if (input) input.value = '';
        document.getElementById('friendSearchResults').innerHTML = '';
        showToast(t('friends_added'));
        renderFriendsTab();
      });
    }
  });
}

function removeFriend(uid) {
  if (!d.friends) return;
  delete d.friends[uid];
  save();
  renderFriendsTab();
}

function searchFriends(query) {
  const results = document.getElementById('friendSearchResults');
  if (!results) return;
  if (!query || query.length < 2) { results.innerHTML = ''; return; }
  if (!window._firebaseReady || !window._firebaseDB) return;

  window._firebaseRef(window._firebaseDB, 'leaderboard').once('value').then(snap => {
    const all = snap?.val();
    if (!all) return;
    const q = query.toLowerCase();
    const matches = Object.entries(all)
      .filter(([uid, p]) => uid !== getMyUid() && (
        (p.name && p.name.toLowerCase().includes(q)) || uid.toLowerCase().includes(q)
      ))
      .slice(0, 5);

    if (!matches.length) { results.innerHTML = `<div style="color:#555;font-size:12px;padding:4px;">${t('friends_not_found')}</div>`; return; }

    results.innerHTML = matches.map(([uid, p]) => `
      <div style="display:flex;align-items:center;gap:8px;padding:6px;background:#1a1a1a;border-radius:8px;margin-bottom:4px;">
        <img src="${p.photoUrl||'seri.png'}" onerror="this.src='seri.png'" style="width:30px;height:30px;border-radius:50%;object-fit:cover;flex-shrink:0;cursor:pointer;" onclick="openFriendProfile('${uid}')">
        <span style="font-size:13px;flex:1;cursor:pointer;" onclick="openFriendProfile('${uid}')">${p.name}</span>
        <span style="color:#00bcd4;font-size:20px;cursor:pointer;padding:0 4px;" onclick="addFriendDirect('${uid}','${(p.name||'').replace(/'/g,"\\'")}','${p.photoUrl||'seri.png'}',${p.lastSeen||0})">+</span>
      </div>
    `).join('');
  });
}

function addFriendDirect(uid, name, avatar, lastSeen) {
  const myUid = getMyUid();
  if (uid === myUid) { showToast(t('friends_self')); return; }
  if (d.friends && d.friends[uid]) { showToast(t('friends_already')); return; }
  if (!window._firebaseReady || !window._firebaseDB) { showToast('Firebase not available'); return; }
  // Отправляем запрос другому игроку
  const myName = _getMyName();
  const myAvatar = localStorage.getItem('_kspt_tg_custom_avatar') || localStorage.getItem('_kspt_nonTg_avatar') || window.Telegram?.WebApp?.initDataUnsafe?.user?.photo_url || 'seri.png';
  window._firebaseRef(window._firebaseDB, `friendRequests/${uid}/${myUid}`).set({
    from: myUid, fromName: myName, fromAvatar: myAvatar, ts: Date.now()
  });
  showToast(t('friends_request_sent'));
}

function openReactionPicker(targetUid) {
  const friend = d.friends?.[targetUid];
  const name = friend?.name || targetUid;

  // Показать модалку с реакциями
  let modal = document.getElementById('reactionPickerModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'reactionPickerModal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.7);display:flex;align-items:flex-end;';
    modal.onclick = e => { if(e.target===modal) modal.remove(); };
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div style="background:#111;border-radius:18px 18px 0 0;padding:16px;width:100%;border-top:1px solid #333;">
      <div style="font-weight:bold;margin-bottom:10px;text-align:center;">${t('friends_send_reaction')} → ${name}</div>
      <div class="reaction-grid">
        ${PROFILE_REACTIONS.map(r => `
          <button class="reaction-btn" onclick="sendReaction('${targetUid}','${r}',this.closest('#reactionPickerModal'))">${r}</button>
        `).join('')}
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function sendReaction(targetUid, reaction, modal) {
  if (!window._firebaseReady || !window._firebaseDB) return;
  const myName = _getMyName();
  const myUid = getMyUid();
  // Проверяем настройки приватности получателя
  window._firebaseRef(window._firebaseDB, `leaderboard/${targetUid}`).once('value').then(snap => {
    const p = snap?.val();
    const privacy = p?.privacy?.sendReactions || 'everyone';
    const isFriend = !!(p?.friends?.[myUid]);
    if (privacy === 'nobody') { showToast('🚫 ' + t('privacy_nobody')); return; }
    if (privacy === 'friends' && !isFriend) { showToast('🚫 ' + t('privacy_friends')); return; }
    window._firebaseRef(window._firebaseDB, `reactions/${targetUid}`).push({
      from: myUid, fromName: myName, reaction: reaction, ts: Date.now()
    });
    if (modal) modal.remove();
    showToast(reaction + ' sent!');
  });
}

function _showReactionRain(emoji, fromName) {
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;';
  document.body.appendChild(container);

  const count = 28;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.textContent = emoji;
    const size = 28 + Math.random() * 28;
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
    const dur = 1.6 + Math.random() * 1.2;
    el.style.cssText = `position:absolute;font-size:${size}px;left:${left}%;top:-60px;opacity:1;animation:reactionFall ${dur}s ${delay}s linear forwards;`;
    container.appendChild(el);
  }

  if (!document.getElementById('reactionRainStyle')) {
    const style = document.createElement('style');
    style.id = 'reactionRainStyle';
    style.textContent = `@keyframes reactionFall { 0%{transform:translateY(0) rotate(0deg);opacity:1} 80%{opacity:1} 100%{transform:translateY(110vh) rotate(360deg);opacity:0} }`;
    document.head.appendChild(style);
  }

  if (fromName) showToast(`${emoji} от ${fromName}!`);

  setTimeout(() => {
    if (container.parentNode) container.parentNode.removeChild(container);
  }, 3500);
}

let _reactionListenerActive = false;
let _friendRequestListenerActive = false;

function _checkFriendRequests() {
  if (!window._firebaseReady || !window._firebaseDB) return;
  const myUid = getMyUid();
  if (!myUid || myUid === 'local') return;
  if (_friendRequestListenerActive) return;
  _friendRequestListenerActive = true;
  // Слушаем подтверждения дружбы
  window._firebaseRef(window._firebaseDB, `friendAccepted/${myUid}`).on('child_added', snap => {
    const item = snap?.val();
    if (!item) return;
    if (!d.friends) d.friends = {};
    d.friends[item.uid] = { name: item.name, avatar: item.avatar, lastSeen: item.lastSeen || Date.now() };
    save();
    snap.ref.remove();
    showToast('✅ ' + item.name + ' ' + t('friends_added'));
    renderFriendsTab();
  });

  window._firebaseRef(window._firebaseDB, `friendRequests/${myUid}`).on('child_added', snap => {
    const item = snap?.val();
    if (!item) return;
    const reqUid = snap.key;
    const toastId = 'friendReq_' + reqUid;
    if (document.getElementById(toastId)) return;
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1a1a2e;border:1px solid #00bcd4;border-radius:14px;padding:14px 16px;z-index:99999;min-width:280px;max-width:320px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.6);';
    toast.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <img src="${item.fromAvatar||'seri.png'}" onerror="this.src='seri.png'" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">
        <div style="font-size:13px;text-align:left;">${t('friends_request_from')} <b>${item.fromName||reqUid}</b></div>
      </div>
      <div style="display:flex;gap:8px;">
        <button onclick="_acceptFriendRequest('${reqUid}','${(item.fromName||'').replace(/'/g,"\\'")}','${(item.fromAvatar||'seri.png').replace(/'/g,"\\'")}','${toastId}')" style="flex:1;padding:8px;background:#00e676;color:#000;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:20px;">✅</button>
        <button onclick="_declineFriendRequest('${reqUid}','${toastId}')" style="flex:1;padding:8px;background:#333;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:20px;">❌</button>
      </div>`;
    document.body.appendChild(toast);
  });
}

function _acceptFriendRequest(fromUid, name, avatar, toastId) {
  if (!d.friends) d.friends = {};
  d.friends[fromUid] = { name, avatar, lastSeen: Date.now(), verified: false };
  save();
  const myUid = getMyUid();
  const myName = _getMyName();
  const myAv = localStorage.getItem('_kspt_tg_custom_avatar') || localStorage.getItem('_kspt_nonTg_avatar') || window.Telegram?.WebApp?.initDataUnsafe?.user?.photo_url || 'seri.png';
  window._firebaseRef(window._firebaseDB, `friendAccepted/${fromUid}/${myUid}`).set({ uid: myUid, name: myName, avatar: myAv, lastSeen: Date.now() });
  window._firebaseRef(window._firebaseDB, `friendRequests/${myUid}/${fromUid}`).remove();
  const toastEl = document.getElementById(toastId); if (toastEl) toastEl.remove();
  showToast(t('friends_added'));
  renderFriendsTab();
}

function _declineFriendRequest(fromUid, toastId) {
  const myUid = getMyUid();
  window._firebaseRef(window._firebaseDB, `friendRequests/${myUid}/${fromUid}`).remove();
  const toastEl = document.getElementById(toastId); if (toastEl) toastEl.remove();
  showToast(t('friends_declined'));
}

function _checkPendingReactions() {
  if (!window._firebaseReady || !window._firebaseDB) return;
  const myUid = getMyUid();
  if (!myUid || myUid === 'local') return;

  // Сначала показываем накопленные оффлайн-реакции (once)
  window._firebaseRef(window._firebaseDB, `reactions/${myUid}`).once('value').then(snap => {
    const data = snap?.val();
    if (data) {
      const entries = Object.entries(data);
      if (entries.length) {
        const privacy = d.settings?.privacy?.sendReactions || 'everyone';
        // Если nobody — тихо удаляем всё накопленное
        if (privacy === 'nobody') {
          window._firebaseRef(window._firebaseDB, `reactions/${myUid}`).remove();
          return;
        }
        // Фильтруем если friends only
        const allowed = privacy === 'friends'
          ? entries.filter(([, v]) => d.friends && d.friends[v.from])
          : entries;
        if (allowed.length) {
          const last = allowed[allowed.length - 1][1];
          _showReactionRain(last.reaction, last.fromName || 'someone');
        }
        window._firebaseRef(window._firebaseDB, `reactions/${myUid}`).remove();
      }
    }
  });

  // Подписываемся на новые в реальном времени (онлайн-дождь)
  if (!_reactionListenerActive) {
    _reactionListenerActive = true;
    window._firebaseRef(window._firebaseDB, `reactions/${myUid}`).on('child_added', snap => {
      const item = snap?.val();
      if (!item) return;
      // Проверяем privacy на стороне получателя (финальная защита)
      const privacy = d.settings?.privacy?.sendReactions || 'everyone';
      const isFriend = !!(d.friends && d.friends[item.from]);
      if (privacy === 'nobody') { snap.ref.remove(); return; }
      if (privacy === 'friends' && !isFriend) { snap.ref.remove(); return; }
      _showReactionRain(item.reaction, item.fromName || 'someone');
      // Удаляем эту конкретную реакцию
      snap.ref.remove();
    });
  }
}

function openFriendProfile(uid) {
  if (!window._firebaseReady || !window._firebaseDB) return;
  window._firebaseRef(window._firebaseDB, 'leaderboard/' + uid).once('value').then(snap => {
    const p = snap?.val();
    if (!p) { showToast(t('friends_not_found')); return; }
    // Обновляем verified в локальном списке друзей
    if (d.friends && d.friends[uid]) d.friends[uid].verified = !!p.verified;
    _showPublicProfile(uid, p);
  });
}

const _friendTokensCache = {};

function _showFriendTokens(uid) {
  const toks = _friendTokensCache[uid];
  if (!toks || !toks.length) { showToast('No Tokens'); return; }
  const names = toks.map(tk => '• ' + tk.ticker + ' (' + tk.name + ')').join('\n');
  alert(names);
}

function _showPublicProfile(uid, p) {
  const isOnline = (Date.now() - (p.lastSeen || 0)) < 3 * 60 * 1000;
  const modal = document.getElementById('tokenDetailModal'); // переиспользуем стиль
  // Создаём отдельный модал
  let m = document.getElementById('publicProfileModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'publicProfileModal';
    m.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.8);align-items:center;justify-content:center;overflow-y:auto;padding:20px;box-sizing:border-box;';
    m.onclick = e => { if(e.target===m) m.style.display='none'; };
    document.body.appendChild(m);
  }
  const favGame = p.favGame ? PROFILE_GAME_NAMES[p.favGame] : null;
  const favGameIcon = p.favGame ? PROFILE_GAME_ICONS[p.favGame] : null;
  _friendTokensCache[uid] = p.myTokens || [];

  m.innerHTML = `
    <div style="background:#111;border-radius:18px;padding:20px;width:100%;max-width:360px;border:1px solid #333;position:relative;">
      <button onclick="document.getElementById('publicProfileModal').style.display='none'"
        style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,0.08);border:none;color:#aaa;font-size:16px;width:28px;height:28px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>

      <div style="text-align:center;margin-bottom:14px;">
        <div style="position:relative;width:70px;margin:0 auto 8px;">
          <img src="${p.photoUrl||'seri.png'}" onerror="this.src='seri.png'"
               style="width:70px;height:70px;border-radius:50%;object-fit:cover;border:3px solid ${isOnline?'#00e676':'#333'};">
          ${isOnline?'<div style="position:absolute;bottom:3px;right:3px;width:13px;height:13px;border-radius:50%;background:#00e676;border:2px solid #111;"></div>':''}
        </div>
        <div style="font-size:18px;font-weight:bold;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;">
          <span>${p.name||uid}</span>
          ${p.verified ? '<img src="gal.png" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;" title="Verified">' : ''}
          ${(p.streakDays && p.streakDays > 0) ? _streakFlameHTML(p.streakDays, !!p.streakActive, 20) + `<span style="font-size:12px;color:#aaa;">${p.streakDays}</span>` : ''}
        </div>
        <div style="font-size:12px;color:${isOnline?'#00e676':'#555'};">${isOnline ? t('profile_online') : formatLastSeen(p.lastSeen)}</div>
        ${p.bio ? `<div style="font-size:12px;color:#aaa;margin-top:6px;padding:0 10px;">${p.bio}</div>` : ''}
      </div>

      <div class="profile-stat-grid" style="margin-bottom:10px;">
        <div class="profile-stat">
          <div class="profile-stat-val">${formatNumber(p.tokens||0,0)}</div>
          <div class="profile-stat-lbl">KSPT</div>
        </div>
        <div class="profile-stat">
          <div class="profile-stat-val">${formatNumber(p.rate||0,0)}</div>
          <div class="profile-stat-lbl">${t('profile_income')}</div>
        </div>
        <div class="profile-stat" style="cursor:pointer;" onclick="_showFriendTokens('${uid}')">
          <div class="profile-stat-val">${(p.myTokens||[]).length}</div>
          <div class="profile-stat-lbl">${t('profile_tokens_created')}</div>
        </div>
        <div class="profile-stat">
          <div class="profile-stat-val">${p.playtimeMs ? _formatPlaytime(p.playtimeMs) : '—'}</div>
          <div class="profile-stat-lbl">${t('profile_playtime')}</div>
        </div>
        <div class="profile-stat">
          <div class="profile-stat-val" style="font-size:15px;">${p.totalTaps >= 1000000 ? (p.totalTaps/1000000).toFixed(1)+'M' : p.totalTaps >= 1000 ? (p.totalTaps/1000).toFixed(1)+'K' : (p.totalTaps||0)}</div>
          <div class="profile-stat-lbl">${t('profile_total_taps')}</div>
        </div>
        <div class="profile-stat">
          <div class="profile-stat-val">${p.puzzlesDone || 0}<span style="font-size:11px;color:#555;"> / 5</span></div>
          <div class="profile-stat-lbl">Puzzles done</div>
        </div>
      </div>

      ${favGame ? `
      <div style="display:flex;align-items:center;gap:8px;background:#1a1a1a;border-radius:10px;padding:10px;margin-bottom:10px;">
        <img src="${favGameIcon}" style="width:28px;height:28px;border-radius:6px;">
        <div>
          <div style="font-size:10px;color:#888;">${t('profile_fav_game')}</div>
          <div style="font-weight:bold;font-size:13px;">${favGame}</div>
        </div>
      </div>` : ''}

      ${(function(){
        if (!p.favSkin) return '';
        const img = getSkinImage(p.favSkin, 1, 0);
        const name = p.favSkin.charAt(0).toUpperCase() + p.favSkin.slice(1).replace(/_/g,' ');
        return `<div style="display:flex;align-items:center;gap:8px;background:#1a1a1a;border-radius:10px;padding:10px;margin-bottom:10px;">
          <img src="${img}" onerror="this.src='kspt.png'" style="width:36px;height:36px;object-fit:contain;">
          <div>
            <div style="font-size:10px;color:#888;">Favourite Skin</div>
            <div style="font-weight:bold;font-size:13px;">${name}</div>
          </div>
        </div>`;
      })()}

      ${(function(){
        if (!p.skins && !p.secretSkins) return '';
        const allIds = [
          ...Object.keys(p.skins||{}),
          ...Object.keys(p.secretSkins||{}),
          ...Object.keys(p.ekshop_owned||{})
        ].filter((id, i, arr) => arr.indexOf(id) === i && ((p.skins||{})[id] || (p.secretSkins||{})[id] || (p.ekshop_owned||{})[id]));
        if (!allIds.length) return '';
        const items = allIds.map(id => {
          const img = getSkinImage(id, 1, 0);
          return `<img src="${img}" onerror="this.src='kspt.png'" title="${id}" style="width:32px;height:32px;object-fit:contain;border-radius:6px;background:#1a1a1a;padding:2px;">`;
        }).join('');
        return `<div style="margin-bottom:10px;">
          <div style="font-size:10px;color:#888;margin-bottom:6px;">🎨 Skins (${allIds.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;">${items}</div>
        </div>`;
      })()}

      ${(function(){
        const fuseIds = typeof FUSE_SKIN_IDS !== 'undefined' ? FUSE_SKIN_IDS : [];
        const owned = fuseIds.filter(id => p.fuseSkins && p.fuseSkins[id]);
        if (!owned.length) return '';
        const RARITY_COLOR = { common:'#aaa', rare:'#4fc3f7', champion:'#ce93d8', secret:'#ff8a65', god:'#ffd700' };
        const FUSE_RAR = typeof FUSE_RARITY !== 'undefined' ? FUSE_RARITY : {};
        const items = owned.map(id => {
          const col = RARITY_COLOR[FUSE_RAR[id]] || '#aaa';
          return `<img src="skins/${id}.png" onerror="this.src='kspt.png'" title="${id}" style="width:32px;height:32px;object-fit:contain;border-radius:6px;background:#1a1a1a;padding:2px;border:1px solid ${col};">`;
        }).join('');
        return `<div style="margin-bottom:10px;">
          <div style="font-size:10px;color:#888;margin-bottom:6px;">⚗️ Fuse Skins (${owned.length}/${fuseIds.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;">${items}</div>
        </div>`;
      })()}

      <div style="display:flex;gap:8px;margin-top:4px;">
        <button onclick="openReactionPicker('${uid}');document.getElementById('publicProfileModal').style.display='none';"
          style="flex:1;padding:11px;background:linear-gradient(135deg,#7c3aed,#d946ef);color:#fff;font-weight:bold;border:none;border-radius:10px;cursor:pointer;font-size:14px;">
          ${t('friends_send_reaction')}
        </button>
        <button onclick="openGiftSendModal('${uid}');document.getElementById('publicProfileModal').style.display='none';"
          style="padding:11px 14px;background:linear-gradient(135deg,#e91e8c,#ff6b35);color:#fff;font-weight:bold;border:none;border-radius:10px;cursor:pointer;font-size:18px;">
          🎁
        </button>
      </div>
    </div>
  `;
  m.style.display = 'flex';
}

// ==========================================
// END PROFILE SYSTEM
// ==========================================

// Блокируем контекстное меню на Android при удержании спрайтов
document.addEventListener('contextmenu', e => e.preventDefault());