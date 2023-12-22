import React, { useState } from "react";
import {
    Image, View, ScrollView, StyleSheet, Text
} from "react-native";
import Logo from 'assets/expe.png'
import PropTypes from 'prop-types'
import {default as style} from "../Login/Styles";
import Button from "components/Button";
import { TextInput } from "components/forms";
import { Formik } from "formik";
import Checkbox from "components/CheckBox";
import { Colors } from "utils/styles";
import { SignupSchema } from "utils/FormikSchema";

const initialState = {
    username:"",
    password: null,
}
function SignUp  (props) {
    const {signUp, navigation} = props

    const handleSubmit = (signUpData) => {
        signUp(signUpData, {navigation})
    }

    return(
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={style.container}>
            <Image source={Logo} style={styles.image} />
            <Formik 
                initialValues={initialState}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {({dirty,isValid,handleSubmit}) =>(
                  <>
                    <TextInput 
                        name="username"
                        icon={'person'}
                        placeholder="Username"
                    />
                    <TextInput 
                        name="password"
                        icon={'lock'}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <View style={styles.checkBoxContainer}>
                        <Checkbox
                            name='checkBox'
                        />
                        <Text style={styles.checkBoxText}>
                            I agree to the{' '}
                            <Text
                            to="tos"
                            style={styles.checkBoxTextLink}
                            onPress={this.handleTextLinkPress}
                            >
                            Terms &amp; Conditions
                            </Text>{' '}
                            and the{' '}
                            <Text
                            to="privacyPolicy"
                            style={styles.checkBoxTextLink}
                            onPress={this.handleTextLinkPress}
                            >
                            Privacy Policy
                            </Text>
                            .
                        </Text>
                    </View>
                    <Button 
                        title="Register Now" 
                        onPress={handleSubmit} 
                        style={style.submitBtn} 
                        disabled={dirty ? !isValid : true}
                    />
                  </>
                )}
            </Formik>
        </ScrollView>
    )
}

SignUp.propTypes = {
    signUp: PropTypes.func,
    navigation: PropTypes.any
  }

const styles = StyleSheet.create({
    image:{
        height:50,
        width:150,
        marginBottom:30,
        marginTop:50
        // borderWidth:1,
        // backgroundColor:Colors.active
    },
    genderContainer:{
        marginBottom:25,
        width:'88%',
    //   borderWidth:1
    },
    field: {
      flexDirection: 'row',
      alignItems: 'center',
      height:45,
      width:'100%',
    //   borderWidth:1
    },
    checkBoxContainer:{
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    checkBoxText:{
        flex: 1,
        color:Colors.black
    },
    checkBoxTextLink:{
        color: Colors.button,
        color:Colors.black
    }
})

export default SignUp;
