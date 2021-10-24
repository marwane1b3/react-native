/*
 *
 * SignUpScreen actions
 *
 */

import {SIGN_UP_ACTION, SET_USER_DATA, SIGN_UP_ACTION_FAIL} from './constants';

export function signUpAction(payload: any) {
  return {
    type: SIGN_UP_ACTION,
    payload,
  };
}
export function setUserData(user: any) {
  return {
    type: SET_USER_DATA,
    user,
  };
}
export function signUpActionFail(error: string) {
  return {
    type: SIGN_UP_ACTION_FAIL,
    error,
  };
}
