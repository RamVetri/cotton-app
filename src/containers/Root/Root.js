import React from "react";
import { StatusBar, View, } from "react-native";
import PropTypes from 'prop-types'
import { useMemo } from "react";
import DrawerComponent from "../Drawer";
import { drawerDefs } from "./definitions";
import { getActiveRouteFromState } from "utils/navigation";
import { Header } from "components";
import Home from "../Home";
import Login from "../Login";
import SignUp from "../SignUp";
import ForgotPassword from "../ForgotPassword";
import Members from "../Members";
import Customers from "../Customers";
import MyProfile from "../MyProfile";
import SalesEntry from "../SalesEntry";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "utils/styles";


function renderHeader(props) {
  return <Header
    onIconPress={() => props.navigation.toggleDrawer()}
    onLogoPress={() => props.navigation.navigate('Home')}
  />
}

// renderHeader.propTypes = {
//   navigation: PropTypes.any,
// }

function withTitleHeader(title, options = {}) {
  return (props) => <Header
    onIconPress={() => {
      props.navigation.toggleDrawer()
    }}
    onLogoPress={() => props.navigation.navigate('Home')}
    title={title}
    navigation = {props.navigation}
  />
}

function DrawerRenderer(props) {
  const activeRoute = getActiveRouteFromState(props)
    return <DrawerComponent
      {...props}
      activeRoute={activeRoute}
      items={drawerDefs}
    />
}

function createWithTitleHeaderOptions(title, options) {
  return {
    header: withTitleHeader(title, options),
  }
}

function createStackNavigatorFromList(list, options = {}) {
  const StackFromList = () => {
    const Stack = useMemo(() => createStackNavigator(), [])
    return (
      <Stack.Navigator
        screenOptions={{
          header: renderHeader,
          //headerShown: false
        }}
        {...options.navigatorOptions}
      >
        { list.map((entry) => {
          const { name, component, isRoot } = entry
          const screenOptions = isRoot? {header : () => null} : entry.options
          return <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={screenOptions}
          />
        })
        }
      </Stack.Navigator>
    )
  }
  return StackFromList
}

const UserLoginStack = [
  {
    name: 'Login',
    component: Login,
    isRoot:true,
  },
  {
    name: 'SignUp',
    component: SignUp,
    isRoot:true,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
    isRoot:true,
  },
]

const UserLoginStackRoot = createStackNavigatorFromList(UserLoginStack)

const rootStack = [
  {
    name: 'UserLogin',
    component: UserLoginStackRoot,
    isRoot:true,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'AddMembers',
    component: Members,
    options: createWithTitleHeaderOptions('Add Member'),
  },
  {
    name: 'EditMembers',
    component: Members,
    options: createWithTitleHeaderOptions('Edit Members'),
  },
  {
    name: 'AddCustomers',
    component: Customers,
    options: createWithTitleHeaderOptions('Add Customers'),
  },
  {
    name: 'EditCustomers',
    component: Customers,
    options: createWithTitleHeaderOptions('Edit Customers'),
  },
  {
    name: 'SalesEntry',
    component: SalesEntry,
    options: createWithTitleHeaderOptions('Sales Entry'),
  },
  {
    name: 'MyProfile',
    component: MyProfile,
    options: createWithTitleHeaderOptions('My Profile'),
  },
]
const DrawerStackRoot = createStackNavigatorFromList(rootStack)

const DrawerNav = createDrawerNavigator();

export default function Root(props) {
  const {startApp} = props

  const navigationRef = React.createRef()
  
  const onNavigationReady = () => {
    if(navigationRef.current){
      const navigation = navigationRef.current
      startApp({navigation})
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.gray}/>
      <NavigationContainer
        ref={navigationRef}
        onReady={onNavigationReady}
      >
        <DrawerNav.Navigator
          screenOptions={{headerShown: false}} 
          drawerContent={DrawerRenderer}
          drawerType="slide"
          overlayColor="0FFFFF"
          sceneContainerStyle={{ backgroundColor: 'white' }}
        >
          <DrawerNav.Screen
            name={ 'root' }
            component={DrawerStackRoot}
          />
        </DrawerNav.Navigator>
      </NavigationContainer>
    </View>
  )
}

Root.propTypes = {
  startApp: PropTypes.func
}