import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {iOSStyleStackNavigatorOptions} from '../configs';
import {createStackNavigator} from '@react-navigation/stack';
import GuessNumberScreen from '../../screens/GuessNumberScreen';
import theme from '../../utils/theme';
interface Props {}
const Stack = createStackNavigator();
const AppNavigator = (props: Props) => {
  const styledOptions: {} = () => ({
    title: 'Guess a number',
    headerTitleAlign: 'center',
    headerTintColor: theme.palette.default.main,
  });
  return (
    <Stack.Navigator
      screenOptions={{...iOSStyleStackNavigatorOptions}}
      headerMode="float">
      <Stack.Screen
        name={'guessNumberScreen'}
        component={GuessNumberScreen}
        options={styledOptions}
      />
    </Stack.Navigator>
  );
};

export {AppNavigator};

const styles = StyleSheet.create({});
