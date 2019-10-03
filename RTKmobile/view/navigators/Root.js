import React from 'react'
// import LoginForm from '../screens/LoginForm'
import Podcasts from '../screens/Podcasts'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator(
  {
    podcasts: { screen: Podcasts },
    // userLogin: { screen: LoginForm },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
)
const Root = createAppContainer(MainNavigator)

export default Root
