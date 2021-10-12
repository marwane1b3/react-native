import React from 'react';
import {
  // DarkTheme,
  // DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
// import { useSelector } from 'react-redux';

import {navigationRef} from '../../utils/rootNavigation';
import {AppNavigator} from '../../navigators/AppNavigator';
export type IAppProps = {};

const App: React.FC<IAppProps> = ({}) => {
  // const theme = useSelector((store: any) => store?.themeProvider?.theme);
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        // theme={theme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <AppNavigator />
        {/* <AuthProvider>}</AuthProvider> */}
      </NavigationContainer>
    </>
  );
};
export {App};
