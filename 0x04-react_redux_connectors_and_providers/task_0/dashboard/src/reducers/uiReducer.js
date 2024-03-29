import { Map } from 'immutable';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.merge({
        isUserLoggedIn: true,
        user: Map(action.user),
      });
    case LOGIN_FAILURE:
      return state.merge({
        isUserLoggedIn: false,
        error: action.error,
      });
    case LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
}
