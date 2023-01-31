import * as types from './notificationActionTypes';
import { bindActionCreators } from 'redux';


export function markAsRead(index) {
  return {
    type: types.MARK_AS_READ,
    index,
  };
}


export function setNotificationFilter(filter) {
  return {
    type: types.SET_TYPE_FILTER,
    filter,
  };
}

export function fetchNotificationsSuccess(data) {
  return {
    type: types.FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
}

export const noteActions = {
  markAsRead,
  setNotificationFilter,
}

export const boundNoteActions = dispatch => bindActionCreators(noteActions, dispatch);
