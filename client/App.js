//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily:"Poppins-Light",
        fontSize:25,
        fontWeight:"bold"
      }}>Hello Stephen</Text>
      <Text style={{
        fontFamily:"PortLligatSans-Regular",
        fontSize:28,
        color:"rgba(29, 196, 196, 0.47)"
      }}>Hello Stephen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#f5f5f5"
  },
});

//make this component available to the app
export default App;
