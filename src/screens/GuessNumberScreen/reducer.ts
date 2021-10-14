/*
 *
 * GuessNumberScreen reducer
 *
 */

import produce from 'immer';
import {GUESS_NUMBER_ACTION} from './constants';

export const initialState = {
  guessedNumber: 0,
};

/* eslint-disable default-case, no-param-reassign */
const guessNumberScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case GUESS_NUMBER_ACTION:
      draft.guessedNumber = action.guessedNumber;
      break;
  }
}, initialState);

export default guessNumberScreenReducer;
