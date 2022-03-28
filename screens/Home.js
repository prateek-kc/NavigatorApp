import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import { Header } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({navigation}) => {

  return (
    <View style={styles.container}>
      

      <View style={styles.tabContainer}>

            <View>
              <Icon name="home" size={30} />
            </View>

            <View> 
              <Icon name="plus" size={30} style={styles.icon}/>
            </View>

            <View>
              <Icon name="users" size={30} />
            </View>


      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  text:{
    fontSize:20
  },
  tabContainer:{
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row',
    width:'100%',
    height:60,
    backgroundColor:'#eae9f0',
    padding:8,
  }
  
});

export default Home;