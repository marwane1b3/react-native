import React from 'react';
import {Provider} from 'react-redux';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import configureStore from '../../configureStore';

// import { useColorScheme } from 'react-native';

const initialState = {};
const store = configureStore(initialState);

export type IAppProviderProps = {};

const AppProvider: React.FC<IAppProviderProps> = ({children}) => {
  // const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <>{children}</>
      </SafeAreaProvider>
    </Provider>
  );
};

export {AppProvider};
