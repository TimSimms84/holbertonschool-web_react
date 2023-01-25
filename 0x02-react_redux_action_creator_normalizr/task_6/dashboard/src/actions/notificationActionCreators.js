import * as types from './notificationActionTypes';

function markAsRead(index) {
  return {
    type: types.MARK_AS_READ,
    index,
  };
}

const boundMarkAsRead = (index) => dispatch(markAsRead(index));

function setNotificationFilter(filter) {
  return {
    type: types.SET_TYPE_FILTER,
    filter,
  };
}

const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export { markAsRead, setNotificationFilter, boundMarkAsRead, boundSetNotificationFilter };
