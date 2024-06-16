/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HelloWorld} from './src/presentation/screens/HelloWorld';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterScreenM3} from './src/presentation/screens/CounterScreenM3';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorld /> */}
        {/* <CounterScreen /> */}
        <CounterScreenM3 />
      </SafeAreaView>
    </PaperProvider>
  );
};
