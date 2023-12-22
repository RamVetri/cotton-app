import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, Image, View, StyleSheet, TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { Colors } from '../../utils/styles'
import Logo from 'assets/expo.png'
import GoBack from '../GoBack'

function Header(props) {
  const { onIconPress, onLogoPress, title, customContainer, navigation } = props

  const logoUri =  Logo

  handleNotification = () => {
    console.log('notifications')
  }

  handleComments = () => {
    console.log('comments')
  }

  return (
    <>
    <View style={StyleSheet.compose(
      styles.container, customContainer && customContainer,
    )}>
      <View style={styles.iconLogoContainer}>
        <Icon 
          name={'menu'}
          color={Colors.deepDarkGray}
          onPress={onIconPress}
          size={25}
          style={styles.iconStyle}
        />
        <TouchableHighlight onPress={onLogoPress} underlayColor="white" >
          <Image source={logoUri} style={styles.logo} resizeMode="contain" resizeMethod="resize" />
        </TouchableHighlight>
      </View>
      <View style={styles.iconContainer} >
        <Icon 
          name={'notifications-none'} 
          color={Colors.button} 
          onPress={handleNotification}
          size={25}
          style={styles.iconStyle}
        />
        <Icon 
          name={'comment'}
          color={Colors.button} 
          onPress={handleComments}
          size={25}
          style={styles.iconStyle}
        />
      </View>
    </View>
    {title && (
      <View style={[styles.container, styles.title]}>
        <GoBack navigation={navigation} />
        <Text style={StyleSheet.compose(styles.titleText)}>
          {title}
        </Text>
      </View>
    )}
    </>
  )
}

Header.propTypes = {
  onIconPress: PropTypes.func,
  onLogoPress: PropTypes.func,
  title: PropTypes.string,
  customContainer: PropTypes.any,
}
export default Header;