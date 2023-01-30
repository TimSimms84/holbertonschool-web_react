
import { StyleSheetTestUtils } from 'aphrodite';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

StyleSheetTestUtils.suppressStyleInjection();

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};


describe('uiReducere', () => {
  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('changes isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const newState = uiReducer(initialState, action);
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });

});
