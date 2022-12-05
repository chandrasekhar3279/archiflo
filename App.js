/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeScreen} from './src/screens/stack/HomeScreen';
import AppStyles from './src/styles/AppStyles';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  // const s = require('./src/styles/GlobalStyles');
  return (
    <SafeAreaView style={AppStyles.container}>
      <View>
        <Text style={AppStyles.text}>Archiflo</Text>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
