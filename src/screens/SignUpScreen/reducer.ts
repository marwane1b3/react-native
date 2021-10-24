/*
 *
 * SignUpScreen reducer
 *
 */

import produce from 'immer';
import {SIGN_UP_ACTION, SET_USER_DATA, SIGN_UP_ACTION_FAIL} from './constants';

export const initialState = {
  loading: false,
  error: false,
  user: {},
  errorMsg: '',
};

/* eslint-disable default-case, no-param-reassign */
const signUpScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case SIGN_UP_ACTION:
      draft.loading = true;
      draft.error = false;
      break;
    case SET_USER_DATA:
      draft.loading = false;
      draft.error = false;
      draft.user = action.user;
      break;
    case SIGN_UP_ACTION_FAIL:
      draft.loading = false;
      draft.error = true;
      draft.errorMsg = action.error;
      break;
  }
}, initialState);

export default signUpScreenReducer;
