import routes from './routes';

const AppColors = {
  APP_COLOR: '#5DBCD2',
  COLOR1: '#335F7F',
  COLOR2: 'skyblue',
  OLD: '#B3DEFF',
  COLOR3: '#66BDFF',
  COLOR4: '#596F7F',
  COLOR5: '#5297CC',
  DARK: '#59616d',
  WHITE: 'white',
  BLACK: 'black',
  LIGHT: '#f7f9ff',
};

export const Colors = {
  APP_COLOR: '#5DBCD2',
  COLOR1: '#335F7F',
  COLOR2: 'skyblue',
  OLD: '#B3DEFF',
  COLOR3: '#66BDFF',
  COLOR5: '#5297CC',
  BG: AppColors.LIGHT,
  ICON: AppColors.BLACK,
  ICON_HIGHLIGHT: AppColors.WHITE,
  HEADER: AppColors.BLACK,
  NOTIFICATION_BG: AppColors.DARK,
  NOTIFICATION_VAL: AppColors.WHITE,
  SEPARATOR: AppColors.APP_COLOR,
  TEXT: AppColors.DARK,
  RECEIVE_BUBBLE: AppColors.COLOR2,
  SEND_BUBBLE: AppColors.DARK,
};

export const Font = {
  HEADER: 'Arial Rounded MT Bold',
};

export const HermesRoutes = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  CONVERSATION: '/conversation/:id',
  CONTACTS: '/contacts',
  MESSAGES: '/messages',
  SETTINGS: '/settings',
};

export type Tab = 'messages' | 'contacts' | 'languages' | 'extra' | 'settings';

export enum Tabs {
  MESSAGES = 'messages',
  CONTACTS = 'contact',
  SETTINGS = 'settings',
  LANGUAGES = 'languages',
  EXTRA = 'extra',
};

export const constraints = {
  MAX_BUBBLE_TEXT_DISPLAY_LEN: 200,
  MAX_CONVO_TEXT_DISPLAY_LEN: 60,
}