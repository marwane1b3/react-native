import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {iOSStyleStackNavigatorOptions} from '../configs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import theme from '../../utils/theme';
interface Props {}
const Stack = createStackNavigator();
const AppNavigator = (props: Props) => {
  const styledOptions: any = (name: string) => ({
    title: name ? name : 'screen',
    headerTitleAlign: 'center',
    headerTintColor: theme.palette.default.main,
  });
  return (
    <Stack.Navigator
      screenOptions={{...iOSStyleStackNavigatorOptions}}
      headerMode="float"
      initialRouteName={'Inscription'}>
      <Stack.Screen
        name={'Home'}
        component={ProfileScreen}
        options={() => styledOptions('mon profile')}
      />
      <Stack.Screen
        name={'Login'}
        component={SignInScreen}
        options={() => styledOptions('Login')}
      />
      <Stack.Screen
        name={'Inscription'}
        component={SignUpScreen}
        options={() => styledOptions('Inscription')}
      />
    </Stack.Navigator>
  );
};

export {AppNavigator};

const styles = StyleSheet.create({});
