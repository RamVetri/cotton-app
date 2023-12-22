import React, { useEffect } from "react";
import {
  Image, Text, ScrollView, View
} from "react-native";
import { TextInput } from "components/forms";
import PropTypes from 'prop-types'
import styles from "./Styles";
import Logo from 'assets/expe.png'
import Button from "components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login (props) {
  const {navigation, handleSubmit, dirty, isValid} = props

  useEffect(()=>{
    const {loginReset} = props
    loginReset()
  },[])

  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.container}>
      <Image source={Logo} style={styles.image}/>
      <TextInput
        name='phone_no'
        placeholder="Email or Phone No"
        icon={"email"}
      />
    
      <TextInput
        name='password'
        placeholder="Password"
        icon={"lock"}
        secureTextEntry
      />
      <Button 
        title='LOG IN' 
        onPress={handleSubmit} 
        style={styles.submitBtn} 
        disabled={dirty ? !isValid : true}
      />
      <Button 
        title='Forgot Password?' 
        style={styles.forgotBtn} 
        titleStyle={styles.forgotText}
        onPress={() => navigation.navigate("ForgotPassword")} 
      />
      <View style={styles.signUp}>
        <Text style={styles.signUpText}>Don't you have an account ? </Text>
        <Button 
          title='Signup' 
          style={{backgroundColor:"transparent"}} 
          titleStyle={styles.signUpBtn}
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </ScrollView>
  );
}

Login.propTypes = {
  navigation: PropTypes.any,
  login: PropTypes.func,
}

export default Login;