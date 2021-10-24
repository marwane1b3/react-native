import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the profileScreen state domain
 */

const selectProfileScreenDomain = (state: any) =>
  state.profileScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileScreen
 */

const makeSelectProfileScreen = () =>
  createSelector(selectProfileScreenDomain, substate => substate);
const makeSelectLoading = createSelector(
  selectProfileScreenDomain,
  substate => substate.loading,
);
const makeSelectError = createSelector(
  selectProfileScreenDomain,
  substate => substate.error,
);
const makeSelectErrorMsg = createSelector(
  selectProfileScreenDomain,
  substate => substate.errorMsg,
);
const makeSelectUserDetails = createSelector(
  selectProfileScreenDomain,
  substate => substate.newData,
);
export default makeSelectProfileScreen;
export {
  selectProfileScreenDomain,
  makeSelectError,
  makeSelectErrorMsg,
  makeSelectLoading,
  makeSelectUserDetails,
};
