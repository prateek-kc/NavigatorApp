
import React from 'react';

import {StyleSheet, View,} from 'react-native';

// import Header from './screens/Header';

import Header from './shared/header';
import Login from  './screens/Login';
import Profile from './screens/Profile';

import Navigator from './routes/drawer';

import { createSwitchNavigator,   createAppContainer } from 'react-navigation';


const screens = {

  Login:{
    screen:Login
  },
  Home:{
    screen:Navigator 
  }
}



const RootSwitchNavigator = createSwitchNavigator(screens,{
  initialRouteName:'Login'
});


const App = createAppContainer(RootSwitchNavigator);

const styles = StyleSheet.create({

  container:{
    display:'flex',
    flex:1,
  }
  
});

export default App;
