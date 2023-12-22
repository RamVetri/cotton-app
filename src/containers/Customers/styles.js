import { StyleSheet } from "react-native";
import { Colors } from "utils/styles";

const styles = StyleSheet.create({
    container:{
        paddingTop:25,
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:Colors.button,
        width:134,
        color:Colors.black
    },
    viewContainer:{
        alignItems:'center',
        width:'100%'
    },
    containerStyle:{
        marginTop:12,
        marginBottom:13,
    },
})

export default styles;