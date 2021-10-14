import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the guessNumberScreen state domain
 */

const selectGuessNumberScreenDomain = (state: any) =>
  state.guessNumberScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuessNumberScreen
 */

const makeSelectGuessNumberScreen = () =>
  createSelector(selectGuessNumberScreenDomain, substate => substate);
const makeSelectGuessedNumber = createSelector(
  selectGuessNumberScreenDomain,
  substate => substate.guessedNumber,
);
export default makeSelectGuessNumberScreen;
export {selectGuessNumberScreenDomain, makeSelectGuessedNumber};
