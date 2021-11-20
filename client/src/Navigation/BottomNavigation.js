//import liraries
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Chat } from "../screens";
import Message from "./Message";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";
import { Authentication, Main, HealthTips } from "../screens";
// create a component
const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HealthTips}
        name="HealthTips"
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon1
              name="home"
              color={focused ? "#1DC3C3" : "white"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Chat}
        name="Chat"
        options={{
          tabBarLabel: "All Chat",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon1
              name="slideshare"
              color={focused ? "#1DC3C3" : "white"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Main}
        name="Doctors"
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon2
              name="users"
              style={styles.icon}
              color={focused ? "#1DC3C3" : "white"}
              size={21}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Message}
        name="Message"
        options={{
          tabBarLabel: "Message",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon1
              name="message"
              style={styles.icon}
              color={focused ? "#1DC3C3" : "white"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Authentication}
        name="Auuthentication"
        options={{
          tabBarLabel: "Authentication",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon3
              name="settings"
              color={focused ? "#1DC3C3" : "white"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  icon: {},
});

//make this component available to the app
export default BottomNavigation;
