import React , {useState} from 'react';

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import Header from '../shared/header';

import Navigator from '../routes/drawer';

const Login = ({navigation}) => {

  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);


  const handleEmail = (val) =>{

    if(val === ''){
      setEmailError(null);
      setEmail('');
      return;
    }

    setEmail(val);


    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      
      setEmailError("Email is Not Correct");
    
    }
    else {
      setEmailError(null);
    }
  }

  const handlePass = (val) =>{

    if(val === ''){
      setPassError(null);
      setPass('');
      return;
    }


    setPass(val);

    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (reg.test(val) === false) {
      
      setPassError("Password is Not Correct");
    
    }
    else {
  
      setPassError(null);
    }

  }


  const handleLogin = () =>{

    if(email === '' || pass === ''){
      return;
    }

    if(emailError === null && passError ===null){
        
      navigation.navigate('Home');

    }
    
  }

  return (
    <>
    <Header />
    <View style={styles.container}>
       
       <View>
          <Text style={styles.heading} >Email</Text>
          <TextInput  style = {styles.input} placeholder='Email'  value={email} onChangeText={handleEmail} />
       </View>

      
       {
         emailError!== null && (
           <View>
             <Text style={styles.error}>{emailError}</Text>
           </View>
         )
       }
         
       

       <View>
          <Text  style={styles.heading} >Password</Text>
          <TextInput  style = {styles.input}  placeholder='Password' secureTextEntry={true} 
          value={pass} onChangeText={handlePass} 
          />
       </View>

       {
         passError!== null && (
           <View>
             <Text style={styles.error}>{passError}</Text>
           </View>
         )
       }

       <View style={styles.buttonContainer} >
          <Button title='Login' onPress={handleLogin} />
       </View>

    </View>
    </>
  );
};

const styles = StyleSheet.create({

  container:{
   
  flex:1,
   padding:10,
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
  
  },
  input:{
    borderWidth:1,
    width:250,
    padding:8,
    margin:10,
    borderColor:'grey',
    borderRadius:10
  },
  heading:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16
  },
  buttonContainer:{
    marginTop:20,
    width:100
  },
  error:{
    color:'red'
  }
  
});

export default Login;