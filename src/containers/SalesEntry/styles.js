import { StyleSheet } from "react-native";
import { Colors } from "utils/styles";

export const styles = StyleSheet.create({
    container:{
        // flexGrow:1,
        alignItems:'center',
        // borderWidth:1, 
    },
    searchContainer:{
        // flex:1,
        // flexDirection:'row',
        width:'100%',
        alignItems:'center',
        paddingTop:10,
        marginBottom:20,
        borderBottomWidth:1
    },
    modelContainer:{
        width:'95%',
        height:45, 
        marginTop:55,
        marginBottom:20,
        zIndex:1,
        position:'absolute',
        // alignItems:'center',
        borderColor:Colors.Button,
    },
    modalTouch:{
        backgroundColor:'white',
        borderColor:'#CECECE',
        borderWidth:1,
        borderColor:Colors.Button,
        width:'100%',
        height:45, 
        borderRadius:2,
        zIndex:-1
    },
    modalText:{
        padding:10,
        fontSize:17,
        fontWeight:'500',
        color:Colors.black
    },
    searchInput:{
        borderWidth:1.5,
        width:'95%',
        borderRadius:2,
        height:45,
        paddingLeft:20,
        marginBottom:10,
        fontSize:15,
    },
    textInput:{
        height: 45,
        borderWidth: 1,
        borderColor:Colors.black,
        borderRadius:5,
        paddingLeft:15,
        marginBottom:20,
        width:'90%',
        fontSize:16,
        fontWeight:'500',
        color:Colors.black,
    }
})