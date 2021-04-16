//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import Signup from './Auth';
import Login from './Login';

// create a component

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Home;
