import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the taxiDetailsContainer state domain
 */

const selectTaxiDetailsContainerDomain = state =>
  state.taxiDetailsContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TaxiDetailsContainer
 */

const makeSelectTaxiDetailsContainer = () =>
  createSelector(selectTaxiDetailsContainerDomain, substate => substate);

export default makeSelectTaxiDetailsContainer;
export {selectTaxiDetailsContainerDomain};
