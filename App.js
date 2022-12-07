/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeSignInScreen} from './src/screens/stack/HomeSignInScreen';
import AppStyles from './src/styles/AppStyles';
import StackNavigation from './src/navigation/StackNavigation';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  // const s = require('./src/styles/GlobalStyles');

  return <StackNavigation />;
};

export default App;
