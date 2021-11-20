//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./src/Navigation/Home";
import SettingState from "./src/Context/Seeting/SettingState";
import { Login } from "./src/screens";
// create a component
const Stack = createStackNavigator();

const MyComponent = () => {
  return (
    <SettingState>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen component={Drawer} name="Drawer" />
          <Stack.Screen component={Login} name="Login" />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingState>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;
