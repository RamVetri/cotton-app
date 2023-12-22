import { StyleSheet } from "react-native";
import { Colors } from "utils/styles";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 55,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: Colors.gray,
    },
    title:{
      minHeight: 45,
      shadowColor: '#000',
      elevation: 5,
    },
    iconLogoContainer: {
      flexDirection: 'row',
    },
    iconStyle: {
      padding: 10,
    },
    titleText: {
      textTransform: 'uppercase',
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.deepDarkGray,
      textAlign: 'center',
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      color:Colors.button,
    },
    iconContainer: {
      flexDirection: 'row',
    },
    miniLogo: {
      width: 30,
      height: 30,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 15,
    },
    logo: {
      height: 45,
      width: 80,
      padding: 10,
    },
  
})
export default styles;