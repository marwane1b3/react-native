/*
 *
 * SignInScreen reducer
 *
 */

import produce from 'immer';
import {
  SIGN_IN_ACTION,
  SIGN_IN_ACTION_FAIL,
  SIGN_IN_ACTION_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  userDetails: {},
};

/* eslint-disable default-case, no-param-reassign */
const signInScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION:
      draft.loading = true;
      draft.error = false;
      break;
    case SIGN_IN_ACTION_SUCCESS:
      draft.loading = false;
      draft.error = false;
      draft.userDetails = action.payload;
      break;
    case SIGN_IN_ACTION_FAIL:
      draft.loading = false;
      draft.error = false;
      draft.errorMsg = action.error;
      break;
  }
}, initialState);

export default signInScreenReducer;
