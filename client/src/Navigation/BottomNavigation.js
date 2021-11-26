//import liraries
import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Message from "./Message";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";
import { Authentication, Main, HealthTips, Chat } from "../screens";

const Tab = createBottomTabNavigator();

const MiddleBar = ({ children, onPress, accessibilityState }) => {
  const selected = accessibilityState.selected;

  return selected ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 14,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 55,
          backgroundColor: "#13C2C2",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: Dimensions.get("screen").width * 0.2,
          height: 50,
          borderRadius: 25,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const BottomNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#668990",
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          width: "100%",
          position: "absolute",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        component={HealthTips}
        name="HealthTips"
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon1 name="home" color="white" size={25} />
          ),
          tabBarButton: (props) => <MiddleBar {...props} />,
        }}
      />
      <Tab.Screen
        component={Chat}
        name="Chat"
        options={{
          tabBarLabel: "All Chat",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon1 name="slideshare" color="white" size={25} />
          ),
          tabBarButton: (props) => <MiddleBar {...props} />,
        }}
      />
      <Tab.Screen
        component={Main}
        name="Doctors"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon2
              name="users"
              style={styles.icon}
              color="white"
              size={focused ? 26 : 25}
            />
          ),
          tabBarButton: (props) => <MiddleBar {...props} />,
        }}
      />
      <Tab.Screen
        component={Chat}
        name="Message"
        options={{
          tabBarLabel: "Message",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon1 name="message" style={styles.icon} color="white" size={25} />
          ),
          tabBarButton: (props) => <MiddleBar {...props} />,
        }}
      />
      <Tab.Screen
        component={Authentication}
        name="Auuthentication"
        options={{
          tabBarLabel: "Authentication",
          tabBarColor: "#484c6a",

          tabBarIcon: ({ focused }) => (
            <Icon3 name="settings" color="white" size={25} />
          ),
          tabBarButton: (props) => <MiddleBar {...props} />,
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
