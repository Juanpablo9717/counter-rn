import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HelloWorld} from './src/presentation/screens/HelloWorld';
import {CounterScreen} from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorld /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};
