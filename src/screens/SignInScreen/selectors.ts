import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the signInScreen state domain
 */

const selectSignInScreenDomain = (state: any) =>
  state.signInScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignInScreen
 */

const makeSelectSignInScreen = () =>
  createSelector(selectSignInScreenDomain, substate => substate);
const makeSelectLoading = createSelector(
  selectSignInScreenDomain,
  substate => substate.loading,
);
const makeSelectError = createSelector(
  selectSignInScreenDomain,
  substate => substate.error,
);
const makeSelectErrorMsg = createSelector(
  selectSignInScreenDomain,
  substate => substate.errorMsg,
);
const makeSelectUserDetails = createSelector(
  selectSignInScreenDomain,
  substate => substate.userDetails,
);

export default makeSelectSignInScreen;
export {
  selectSignInScreenDomain,
  makeSelectError,
  makeSelectErrorMsg,
  makeSelectLoading,
  makeSelectUserDetails,
};
