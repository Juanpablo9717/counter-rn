/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HelloWorld} from './src/presentation/screens/HelloWorld';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorld /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
