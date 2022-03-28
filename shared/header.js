import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';




function Header({navigation}){

    // const openMenu = () =>{
    //     navigation.openDrawer();
    // }


    return (
        <View style={styles.header} >

           {/* <Icon name="bars" size={20} style={styles.icon} onPress={openMenu}/> */}

            <View>
                <Text style={styles.headerText} >MyApp</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    // icon:{
    //     position:'absolute',
    //     left:8
    // }
})


export default Header;