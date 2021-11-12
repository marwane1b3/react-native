import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the mapViewScreen state domain
 */

const selectMapViewScreenDomain = (state: any) =>
  state.mapViewScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MapViewScreen
 */

const makeSelectMapViewScreen = () =>
  createSelector(selectMapViewScreenDomain, substate => substate);
const makeSelectCityLocation = createSelector(
  selectMapViewScreenDomain,
  substate => substate.cityFiltreLocation,
);
const makeSelectBlockLocation = createSelector(
  selectMapViewScreenDomain,
  substate => substate.blockFiltreLocation,
);
const makeSelectNeighborhoodLocation = createSelector(
  selectMapViewScreenDomain,
  substate => substate.neighborhoodFiltreLocation,
);
export default makeSelectMapViewScreen;
export {
  selectMapViewScreenDomain,
  makeSelectBlockLocation,
  makeSelectNeighborhoodLocation,
  makeSelectCityLocation,
};
