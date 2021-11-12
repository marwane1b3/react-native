/*
 *
 * MapViewScreen actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_SELECTED_BLOCK_ACTION,
  GET_SELECTED_CITY_ACTION,
  GET_SELECTED_NEIGHBORHOOD_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getSelectedCityAction(cityLocation: any) {
  return {
    type: GET_SELECTED_CITY_ACTION,
    cityLocation,
  };
}
export function getSelectedBlockAction(blockLocation: any) {
  return {
    type: GET_SELECTED_BLOCK_ACTION,
    blockLocation,
  };
}

export function getSelectedNeighborhoodAction(neighborhoodLocation: any) {
  return {
    type: GET_SELECTED_NEIGHBORHOOD_ACTION,
    neighborhoodLocation,
  };
}
