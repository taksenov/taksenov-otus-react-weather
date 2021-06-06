// Роуты фронтенд приложения
export const CABINET__CREDIT_RATING_URL = '/cabinet/credit-rating';
export const SELECTION_LOAN_PRODUCT_URL = '/selection-loan-product';
export const CABINET__USER_DEBTS_URL = '/cabinet/user-debts';
export const CABINET__DEFENDER_URL = '/cabinet/defender';
export const FEEDBACKS_URL = '/feedbacks';
export const FAQ_URL = '/faq';
export const HELP_URL = '/help';
export const HELP_SUPPORT_URL = '/help/support';
export const HELP_LOAN_SELECTION_URL = '/help/loan-selection';
export const HELP_LAWYER_URL = '/help/lawyer';
export const CABINET__CASHBACK_URL = '/cabinet/cashback';
export const REGISTER_URL = '/register';
export const LOGIN_URL = '/login';
export const RECOVERY_URL = '/login/recovery';
export const SET_NEW_PASSWORD_URL = '/login/new-password';
export const SET_NEW_CREDENTIAL_URL = '/login/new-credential';
export const SET_LAWYER_CREDENTIAL_URL = '/login/lawyer-credential';
export const SIGNUP_URL = '/signup';

export const CITIES_URL = '/cities';
export const NOOP_URL = '/noop';

// На этих роутах не нужно показывать меню в футере
// на мобильных устройствах
export const HELP_CHAT_REGISTERED_ROUTES = [
  HELP_SUPPORT_URL,
  HELP_LOAN_SELECTION_URL,
  HELP_LAWYER_URL,
];

// Роуты внешних сайтов
export const MAIN_LANDING_URL = 'https://finanso.com/';
// Роуты АПИ
export const API_SUPPORT_MESSAGES_SOCKET_AUTH = '/support/messages/socket-auth';
export const API_LAWYER_MESSAGES_SOCKET_AUTH = '/lawyer/messages/socket-auth';
