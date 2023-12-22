import { StyleSheet } from "react-native";
import { Colors } from "../../utils/styles";

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      height:50,
      width:150,
      marginBottom:30
    },
    forgotBtn:{
      marginBottom:20,
      backgroundColor:'transparent',
    },
    forgotText:{
      color:Colors.black,
      textAlign:'center',
      fontSize:18,
      textTransform:'capitalize',
      fontWeight:'500'
    },
    signUp:{
      flexDirection:'row',       
      justifyContent: 'center', 
    },
    signUpText:{
      textAlign:'center', 
      fontSize:16,
      color:Colors.black
    },
    signUpBtn:{
      textTransform:'capitalize',
      fontWeight: '500',
      color:Colors.black,
    },
    submitBtn:{
      width:"90%",
      borderRadius:5,
      height:50,
      marginTop:20,
      marginBottom:30,
    },
    errorText: {
      color: Colors.error,
      marginTop: 5,
      fontSize: 13,
    },
});

export default styles;