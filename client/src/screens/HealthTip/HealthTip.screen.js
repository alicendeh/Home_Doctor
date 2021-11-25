//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../../Components";
import MiddleContent from "../../Components/Tips/MiddleContent";
// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Header headerTtile="Health Tips" />
      <MiddleContent />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

//make this component available to the app
export default MyComponent;
