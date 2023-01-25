import * as types from './uiActionTypes';

export function Login(email, password) {
  return {
    type: types.LOGIN,
    user: {
      email,
      password,
    },
  };
}

export const boundLogin = (email, password) => dispatch(Login(email, password));

export function Logout() {
  return {
    type: types.LOGOUT,
  };
}

export const boundLogout = () => dispatch(Logout());

export function displayNotificationDrawer() {
  return {
    type: types.DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
  return {
    type: types.HIDE_NOTIFICATION_DRAWER,
  };
}


export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
