import { StyleSheet } from 'react-native'
import { Colors } from 'utils/styles'

/* eslint-disable react-native/no-color-literals */
export default StyleSheet.create({
  modalRoot: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: 30,
    paddingRight: 30,
  },
  inner: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 25,
    // borderRadius:25,
  },
  errorTitle: {
    fontSize: 23,
    marginBottom: 20,
    fontWeight:'bold',
    color:Colors.button
  },
  message:{
    color:Colors.black
  },
  button: {
    color:Colors.button
  },
  actions: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.gray}99`,
  },
})

/* eslint-enable react-native/no-color-literals */
