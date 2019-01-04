
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import SupportCallScreen from './SupportCall';
import SupportNewsScreen from './SupportNews';



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    SupportCall: {
      screen: SupportCallScreen
    },
    SupportNews: {
      screen: SupportNewsScreen
    },

  },
  {
    initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);

