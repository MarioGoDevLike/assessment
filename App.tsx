/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/RootNavigator/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return <RootNavigator />;
}

export default App;
