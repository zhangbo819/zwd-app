/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

// import {Provider} from 'react-redux'

import Root from './Root';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';

// import { store } from './store';

export default function App() {
  return (
    // <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <RecoilRoot>
        <Root />
      </RecoilRoot>
    </SafeAreaView>
    // </Provider>
  );
}
