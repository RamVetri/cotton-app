import React from 'react'
import PropTypes from 'prop-types'
import Logo from 'assets/expe.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native'
import { Colors } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
  },
  image:{
    height:25,
    width:80,
    marginVertical:10,
    marginLeft:15,
    justifyContent:'center',
    alignContent:'center'
  },
  header:{
    paddingLeft:10,
    flexDirection:'row',
    marginBottom:1,
    paddingBottom:20,
    borderBottomWidth:1,
    borderBottomColor:Colors.button
  },
  icon:{
    backgroundColor:Colors.button,
    color:Colors.white,
    height:50,
    width:50,
    borderRadius:50
  },
  userName:{
    fontSize:20,
    fontWeight:'500',
    color:Colors.black
  },
  userPhone_no:{
    fontSize:16,
    color:Colors.deepDarkGray    
  },
})

class DrawerComponent extends React.PureComponent {
  handlePress = (route) => {
    const { navigation } = this.props
    const [path, screen] = route.split(':')
    if (screen) {
      navigation.navigate(path, { screen })
    } else {
      navigation.navigate(route)
    }
  }

  renderItem(item) {
    const { key, route, renderer: Renderer } = item
    const { navigation, activeRoute } = this.props
    const isActive = route === activeRoute || route.startsWith(activeRoute)

    return <Renderer
      key={key || route}
      active={isActive}
      activeRoute={activeRoute}
      item={item}
      navigation={navigation}
      onPress={this.handlePress}
    />
  }

  render() {
    const { items, user } = this.props 
    const selectedItems = items
    return (
      <ScrollView style={styles.container}>
          <Image source={Logo} style={styles.image} />
        {/* </View> */}
        <View style={styles.header}>
          <Icon style={styles.icon} name='account-circle'  size={50}/>
          <View style={{marginLeft:10}}>
            <Text style={styles.userName} >{user ? user.name : 'UserName'}</Text>
            <Text style={styles.userPhone_no} >{user ? user.phone_no : 'Phone_no'}</Text>
          </View>
        </View>
        <View>
          { selectedItems.map((item) => this.renderItem(item)) }
        </View>
      </ScrollView>
    )
  }
}

DrawerComponent.propTypes = {
  items: PropTypes.array,
  navigation: PropTypes.any,
  activeRoute: PropTypes.any,
  connected: PropTypes.bool,
  offlineItems: PropTypes.array,
}

DrawerComponent.defaultProps = {
  items: [],
}

export default DrawerComponent
