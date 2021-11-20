//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TopContent from "../../Components/Doctors/TopContent";
import MiddleContent from "../../Components/Doctors/MiddleContent";
import EndContent from "../../Components/Doctors/EndContent";

// create a component
const DoctorsPage = () => {
  return (
    <View style={styles.container}>
      <TopContent />
      <MiddleContent />
      <EndContent />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
});

//make this component available to the app
export default DoctorsPage;
