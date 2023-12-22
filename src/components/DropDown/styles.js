import { StyleSheet } from "react-native"
import { Colors } from "utils/styles"

export default styles = StyleSheet.create({
    container:{
        marginBottom:25,
    },
    field:{
        alignItems:'center',
        flexDirection:'row',
        height:45,
        // borderWidth:1,
    },
    input:{
        height: 45,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:313,
        borderWidth:1,
        borderRadius:5,
        borderColor:Colors.black,
        paddingLeft:15,
        paddingRight:10
        // width:'80%',
    },
    inputText:{
        fontSize:16,
        fontWeight:'500',
        color:Colors.gray,
        // borderWidth:1,
    },
    icon:{
        padding:5,
        color:Colors.darkGray,
    },
    wrapperStyles: {
        marginTop: 50,
        // marginLeft:20,
        width:'80%',
        // borderWidth:1
    },
    focused: {
        borderWidth:1,
        borderColor: Colors.primary,
    },
    error: {
        borderWidth:1,
        borderColor: Colors.error,
    },
    success: {
        borderWidth:1,
        borderColor: Colors.success,
    },
    errorText: {
        color: Colors.error,
        marginTop: 5,
        fontSize: 13,
        // paddingLeft:15,
    },
})
  
export const customStyles = StyleSheet.create({
    optionWrapper:{
      borderBottomWidth:1,
      padding:10,
      marginHorizontal:5,
    },
    optionText:{
      fontSize:16,
      fontWeight:'500',
      color: Colors.black
    }
})
