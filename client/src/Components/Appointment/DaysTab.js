//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mon from './Mon';
import Tue from './Tue';
import Wed from './Wed';
import Sun from './Sun';
import Thur from './Thur';
import Frid from './Frid';
import Sat from './Sat';

// create a component
const DaysTab = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Mo" component={Mon} />
      <Tab.Screen name="Tu" component={Tue} />
      <Tab.Screen name="We" component={Wed} />
      <Tab.Screen name="Th" component={Thur} />
      <Tab.Screen name="Fri" component={Frid} />
      <Tab.Screen name="Sat" component={Sat} />
    </Tab.Navigator>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default DaysTab;
