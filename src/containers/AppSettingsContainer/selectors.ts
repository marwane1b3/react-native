import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the appSettingsContainer state domain
 */

const selectAppSettingsContainerDomain = state =>
  state.appSettingsContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppSettingsContainer
 */

const makeSelectAppSettingsContainer = () =>
  createSelector(selectAppSettingsContainerDomain, substate => substate);

export default makeSelectAppSettingsContainer;
export {selectAppSettingsContainerDomain};
