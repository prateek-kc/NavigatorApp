import { createStackNavigator } from "react-navigation-stack";

import React ,{Component} from 'react';
import {StyleSheet} from 'react-native';

import Header from '../shared/header';

import Profile from "../screens/Profile";

import Icon from 'react-native-vector-icons/FontAwesome';

const openMenu = (navigation) =>{
    navigation.openDrawer();
}

const screens = {

    Profile:{
        screen:Profile,
        navigationOptions: ({navigation}) =>{
            return {
  
              headerTitle: () => <Header navigation={navigation}/>,
            
             headerLeft: () =>  <Icon name="bars" size={20} style={styles.baricon} onPress={() => openMenu(navigation)}/>
            }
          }
    }

}

const styles= StyleSheet.create({

  baricon:{
    position:"relative",
    left:8
  },

  
  })
  


const ProfileStack = createStackNavigator(screens);

export default ProfileStack;

