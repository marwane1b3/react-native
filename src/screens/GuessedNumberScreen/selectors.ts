import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the guessedNumberScreen state domain
 */

const selectGuessedNumberScreenDomain = (state: any) =>
  state.guessedNumberScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuessedNumberScreen
 */

const makeSelectGuessedNumberScreen = () =>
  createSelector(selectGuessedNumberScreenDomain, substate => substate);

export default makeSelectGuessedNumberScreen;
export {selectGuessedNumberScreenDomain};
