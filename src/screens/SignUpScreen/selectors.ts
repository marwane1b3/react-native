import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the signUpScreen state domain
 */

const selectSignUpScreenDomain = (state: any) =>
  state.signUpScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUpScreen
 */

const makeSelectSignUpScreen = () =>
  createSelector(selectSignUpScreenDomain, substate => substate);
const makeSelectUser = createSelector(
  selectSignUpScreenDomain,
  substate => substate.user,
);
const makeSelectLoading = createSelector(
  selectSignUpScreenDomain,
  substate => substate.loading,
);
const makeSelecterror = createSelector(
  selectSignUpScreenDomain,
  substate => substate.error,
);
const makeSelecterrorMsg = createSelector(
  selectSignUpScreenDomain,
  substate => substate.errorMsg,
);

export default makeSelectSignUpScreen;
export {
  selectSignUpScreenDomain,
  makeSelecterrorMsg,
  makeSelectUser,
  makeSelecterror,
  makeSelectLoading,
};
