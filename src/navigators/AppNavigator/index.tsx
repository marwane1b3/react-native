import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {iOSStyleStackNavigatorOptions} from '../configs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
interface Props {}
const Stack = createStackNavigator();
const AppNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{...iOSStyleStackNavigatorOptions}}
      headerMode="float">
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export {AppNavigator};

const styles = StyleSheet.create({});
