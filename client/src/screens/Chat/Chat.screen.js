//import liraries
import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Chat = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <View
        style={{
          padding: 19,
        }}
      >
        <TouchableOpacity onPress={openDrawer}>
          <Image source={require("../../../assets/images/stair.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
