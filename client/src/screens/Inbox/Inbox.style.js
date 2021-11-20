//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../Components/PersonalMessage/Header";
// create a component
const Message = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Message;
