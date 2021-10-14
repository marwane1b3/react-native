import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {AppProvider} from './src/providers/AppProvider';
import {App} from './src/containers/App';
const app = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default app;

const styles = StyleSheet.create({});
