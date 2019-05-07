import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen";
import HomeScreen2 from "../screens/HomeScreen2";

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  Home2: HomeScreen2
},{
  headerMode: 'none',
});

export default createAppContainer(createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: LoginScreen,
    Stack: stackNavigator,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }));