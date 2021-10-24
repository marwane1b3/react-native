/*
 *
 * ProfileScreen actions
 *
 */

import {
  UPDATE_USER_DATA_ACTION,
  UPDATE_USER_DATA_FAIL_ACTION,
  UPDATE_USER_DATA_SUCCESS_ACTION,
} from './constants';

export function updateUserDataAction(payload: object) {
  return {
    type: UPDATE_USER_DATA_ACTION,
    payload,
  };
}
export function updateUserDataSuccessAction(newData: object) {
  return {
    type: UPDATE_USER_DATA_SUCCESS_ACTION,
    newData,
  };
}
export function updateUserDataFailction(error: string) {
  return {
    type: UPDATE_USER_DATA_FAIL_ACTION,
    error,
  };
}
