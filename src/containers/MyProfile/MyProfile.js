import React, { useState } from "react";
import { 
    ScrollView, StyleSheet
} from "react-native";
import { Colors } from "utils/styles";
import { myProfileData } from "../Home/HomeData";
import { FlatList } from "react-native";
import Button from "components/Button";
import { Formik } from "formik";
import { TextInput } from "components/forms";
import {default as style} from "../Login/Styles";
import RadioButton from "components/RadioButton";
import { genderOptions, maritalStatusData } from "utils/list";
import { DatePicker } from "utils/DatePicker";
import { ProfileSchema } from "utils/FormikSchema";
import { DropDown } from "components";

const initialState = {
    fullName : '',
    gender: '',
    fatherName: '',
    motherName: '',
    maritalStatus:null,
    SpouseName: '',
    dateOfBirth: null,
    country: null,
    phone_number: null,
    
}

const MyProfile = (props) => {
    const [ visible,setVisible ] = useState(false)
    const [ date,setDate ] = useState('')
    const [ reset, setReset ] = useState(false)
    const {myProfile} = props

    const handleSave = (profileData) => {
        myProfile(profileData)
    }
    // console.log(myProfileData)

    return(
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.container}>
            <Formik
                initialValues={initialState}
                validationSchema={ProfileSchema}
                onSubmit={handleSave}
            >
                {({dirty,isValid,handleSubmit}) =>(
                    <>
                        <TextInput
                            name="fullName"
                            placeholder="Full Name*"
                            containerStyle={styles.containerStyle}
                        />
                        <RadioButton
                            name="gender"
                            options={genderOptions}
                            containerStyle={styles.containerStyle}
                        />
                        <TextInput 
                            name="fatherName"
                            placeholder="Father Name*"
                            containerStyle={styles.containerStyle}
                        />
                        <TextInput 
                            name="motherName"
                            placeholder="Mother Name*"
                            containerStyle={styles.containerStyle}
                        />
                        {/* <DropDown
                            name="maritalStatus"
                            options={maritalStatusData}
                            value={'Single'}
                            placeholder="Marital_Status*"
                            containerStyle={styles.containerStyle}
                        /> */}
                        {
                            <TextInput 
                            name="SpouseName"
                            placeholder="Spouse Name"
                            containerStyle={styles.containerStyle}
                            />
                        }
                        <TextInput
                            name="dateOfBirth"
                            placeholder="Date Of Birth"
                            setVisible={setVisible}
                            editable={false}
                            containerStyle={styles.containerStyle}
                        />
                        <DatePicker 
                            setDate={setDate}
                            visible={visible} 
                            setVisible={setVisible}
                        />
                        <TextInput 
                            name="country"
                            placeholder="Country"
                            containerStyle={styles.containerStyle}
                        />
                        <TextInput 
                            name="phone_number"
                            placeholder="Phone No"
                            keyboardType='numeric'
                            containerStyle={styles.containerStyle}
                        />
                        <Button 
                            title="Save" 
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

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // borderWidth:1,
        paddingTop:25,
        alignItems:'center',
    },
    viewContainer:{
        alignItems:'center',
        width:'100%',
        // borderWidth:1,
    },
    containerStyle:{
        marginTop:12,
        marginBottom:13
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:Colors.button,
        width:134,
    },
    genderContainer:{
        width:'80%',
        height:45,
        justifyContent:'center',
        // borderWidth:1,
        marginTop:12, 
        marginBottom:13,
    },
    field: {
      flexDirection: 'row',
      alignItems: 'center',
      height:40,
      width:'100%',
    //   borderWidth:1
    },
})

export default MyProfile;
