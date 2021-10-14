/*
 *
 * GuessNumberScreen actions
 *
 */

import {GUESS_NUMBER_ACTION} from './constants';

export function guessNumberAction(guessedNumber: number) {
  return {
    type: GUESS_NUMBER_ACTION,
    guessedNumber,
  };
}
