/*
 *
 * SignInScreen actions
 *
 */

import {
  SIGN_IN_ACTION,
  SIGN_IN_ACTION_FAIL,
  SIGN_IN_ACTION_SUCCESS,
} from './constants';

export function signInAction(data: object) {
  return {
    type: SIGN_IN_ACTION,
    data,
  };
}
export function signInActionSuccess(payload: object) {
  return {
    type: SIGN_IN_ACTION_SUCCESS,
    payload,
  };
}
export function signInActionFail(error: string) {
  return {
    type: SIGN_IN_ACTION_FAIL,
    error,
  };
}
