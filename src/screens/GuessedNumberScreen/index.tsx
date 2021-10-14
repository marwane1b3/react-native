/**
 *
 * GuessedNumberScreen
 *
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'redux-injectors';
import makeSelectGuessedNumberScreen from './selectors';
import reducer from './reducer';

const stateSelector = createStructuredSelector({
  guessedNumberScreen: makeSelectGuessedNumberScreen(),
});

const key = 'guessedNumberScreen';

export const GuessedNumberScreen: React.FC<IGuessedNumberScreenProps> = ({ }) => {
  useInjectReducer({ key, reducer });

  /* eslint-disable no-unused-vars */
  const { guessedNumberScreen } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});


export interface IGuessedNumberScreenProps {}



export default GuessedNumberScreen;
