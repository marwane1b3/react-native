/*
 *
 * MapViewScreen reducer
 *
 */

import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_SELECTED_NEIGHBORHOOD_ACTION,
  GET_SELECTED_BLOCK_ACTION,
  GET_SELECTED_CITY_ACTION,
} from './constants';

export const initialState = {
  error: false,
  loading: false,
  cityFiltreLocation: [],
  blockFiltreLocation: [],
  neighborhoodFiltreLocation: [],
};

/* eslint-disable default-case, no-param-reassign */
const mapViewScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_SELECTED_CITY_ACTION:
      draft.error = false;
      draft.loading = false;
      draft.cityFiltreLocation = action.cityLocation;
      break;
    case GET_SELECTED_BLOCK_ACTION:
      draft.error = false;
      draft.loading = false;
      draft.blockFiltreLocation = action.blockLocation;
      break;
    case GET_SELECTED_NEIGHBORHOOD_ACTION:
      draft.error = false;
      draft.loading = false;
      draft.neighborhoodFiltreLocation = action.neighborhoodLocation;
      break;
  }
}, initialState);

export default mapViewScreenReducer;
