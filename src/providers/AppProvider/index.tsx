import React from 'react';
import {Provider} from 'react-redux';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import configureStore from '../../configureStore';
import theme from '../../utils/theme';

// import { useColorScheme } from 'react-native';

const initialState = {};
const store = configureStore(initialState);

export type IAppProviderProps = {};

const AppProvider: React.FC<IAppProviderProps> = ({children}) => {
  // const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={theme.palette.default.light}
        translucent={true}
      />
      <SafeAreaProvider>
        <>{children}</>
      </SafeAreaProvider>
    </Provider>
  );
};

export {AppProvider};
