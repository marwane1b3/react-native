/*
 *
 * ProfileScreen reducer
 *
 */

import produce from 'immer';
import {
  UPDATE_USER_DATA_ACTION,
  UPDATE_USER_DATA_SUCCESS_ACTION,
  UPDATE_USER_DATA_FAIL_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  newData: {},
};

/* eslint-disable default-case, no-param-reassign */
const profileScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA_ACTION:
      draft.loading = true;
      draft.error = false;
      break;
    case UPDATE_USER_DATA_SUCCESS_ACTION:
      draft.loading = false;
      draft.error = false;
      draft.newData = action.newData;
      break;
    case UPDATE_USER_DATA_FAIL_ACTION:
      draft.loading = false;
      draft.error = true;
      draft.errorMsg = action.error;
      break;
  }
}, initialState);

export default profileScreenReducer;
