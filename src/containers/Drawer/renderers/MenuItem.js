import React from 'react'
import PropTypes from 'prop-types'
import _noop from 'lodash/noop'
import {
  View, StyleSheet, TouchableOpacity, Text, Linking,
} from 'react-native'
import { Colors } from 'utils/styles'
import { logOut } from 'store/auth/action'
import { connect } from 'react-redux'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    flexDirection: 'row',
    textAlign: 'center',
  },
  defaultText: {
    paddingLeft: 10,
    fontSize:17,
    fontWeight:'500',
    color:Colors.black,
    padding:'5%',
    width:'100%',
    // borderBottomWidth:1,
    // borderBottomColor:Colors.deepDarkGray,
  },
  activeText: {
    backgroundColor:Colors.button,
    color: Colors.white,
    alignItems:'center',
    
  },
  linkText: {
    color: Colors.secondary
  }
})

function MenuItemRenderer(props) {
  const { item, onPress, active, navigation } = props
  const {
    label, route, icon, iconType, event
  } = item
  const iconOnPress = () => {
    if(event && event === 'logOut') {
      const {logOut} = props
      logOut({navigation})
      // Linking.openURL(link)
    } else {
      onPress(route)
    }
  }

  return (
    <TouchableOpacity onPress={() => iconOnPress()} style={styles.container}>
      <Text style={[styles.defaultText, active && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  )
}

MenuItemRenderer.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    route: PropTypes.string,
    // iconType: PropTypes.string,
    // icon: PropTypes.string,
    event: PropTypes.string,
  }),
  onPress: PropTypes.func,
  active: PropTypes.bool,
  navigation: PropTypes.object
}
MenuItemRenderer.defaultProps = {
  onPress: _noop,
}

export default connect ( null, {logOut} )(MenuItemRenderer);
