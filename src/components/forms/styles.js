import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/styles'

export default StyleSheet.create({
  container :{
    marginBottom:25,
    // width:'100%',
    // alignItems: 'center',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height:45,
  },
  icon:{
    padding:5,
    color:Colors.darkGray,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor:Colors.black,
    borderRadius:5,
    paddingLeft:15,
    width:313,
    fontSize:16,
    fontWeight:'500',
    color:Colors.black,
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
    width:313,
    fontSize: 13,
  },
})
