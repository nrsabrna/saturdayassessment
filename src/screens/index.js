import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import FrontScreen from './front';
import HomeScreen from './home';
import UserScreen from './user';
const StackNavigator = createStackNavigator({
    //Front: FrontScreen,
    Home: HomeScreen,
    User: UserScreen
});
export default createAppContainer(StackNavigator);