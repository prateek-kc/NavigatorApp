import { createStackNavigator } from "react-navigation-stack";
import React ,{Component} from 'react';
import { StyleSheet } from "react-native";

import Home from '../screens/Home';
import Profile from "../screens/Profile";
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../shared/header';



const openProfile = (navigation) =>{
  navigation.navigate('Profile');
}

 const openMenu = (navigation) =>{
        navigation.openDrawer();
    }

const screens = {

    Home:{
        screen: Home,
        navigationOptions: ({navigation}) =>{
          return {

            headerTitle: () => <Header navigation={navigation}/>,
            headerRight: () => <Icon name="user" size={20}  style={styles.icon} onPress={() => openProfile(navigation)} />,
            headerLeft: () =>  <Icon name="bars" size={20} style={styles.baricon} onPress={() => openMenu(navigation)}/>
          }
        }
    },
    

}

const styles= StyleSheet.create({

  icon:{
    position:"relative",
    right:15
  },
  baricon:{
    position:'absolute',
    left:8,
    
  }


})


const HomeStack = createStackNavigator(screens);

export default HomeStack;