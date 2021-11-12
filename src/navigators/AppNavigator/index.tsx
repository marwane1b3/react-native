import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {iOSStyleStackNavigatorOptions} from '../configs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import MapViewScreen from '../../screens/MapViewScreen';

interface Props {}
const Stack = createStackNavigator();

const AppNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{...iOSStyleStackNavigatorOptions}}
      headerMode="float">
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={(props: any) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name={'MapViewScreen'} component={MapViewScreen} />
    </Stack.Navigator>
  );
};

export {AppNavigator};
