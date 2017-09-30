/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text, View} from 'react-native';

import RootScreen from './src/RootScene'
// import RootScreen from './src_bak/RootScene_bak'
import Orientation_ from 'react-native-orientation';

export default class CCSS_T_client extends Component {
    componentWillMount() {
        //只允许横屏
        Orientation_.lockToLandscapeLeft();
    }
  render() {
    return (
      <RootScreen/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('CCSS_T_client', () => CCSS_T_client);
