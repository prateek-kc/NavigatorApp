import React from 'react';

import {StyleSheet, View,Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {

  return (
    <View style={styles.container}>


    <View style={styles.profilecontainer}>

      <View >
        <Icon name="user" size={50} style={styles.icon} />
      </View>

      <View>
        <Text style={styles.text}>Some User</Text>
      </View>

      <View>
        <Text style={styles.text}>Organistaion</Text>
      </View>

    </View>


    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  text:{
    fontSize:16,
    color:'white',
    fontWeight:'bold',
    marginTop:5
  },
  profilecontainer:{
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue',
    width:'100%',
    height:150,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    padding:10
  },
  icon:{
    color:'lightblue',
  }
  
});

export default Profile;