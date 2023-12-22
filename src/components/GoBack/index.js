import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../../utils/styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backIconStyle: {
    padding: 10,
    position:'absolute',
    zIndex:1,
  },
})

function GoBack({ onPress, navigation }) {
  const goBack = () => {
    if (onPress) return onPress()
      return navigation.goBack()
  }
  return (<Icon name={'arrow-back'} color={Colors.deepDarkGray} onPress={goBack}
    size={25}
    style={StyleSheet.compose(styles.backIconStyle)}
  />)
}

GoBack.propTypes = {
  navigation: PropTypes.any,
  onPress: PropTypes.func,
}

export default GoBack