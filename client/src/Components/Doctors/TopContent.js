//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import LinnearGradient from "react-native-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// create a component

const DoctorsPage = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image source={require("../../../assets/images/stair.png")} />
        </TouchableOpacity>
        <View style={styles.userImg}>
          <Image
            source={{ uri: "https://cutt.ly/qviZNy8" }}
            style={styles.userImg1}
          />
        </View>
      </View>
      <View style={styles.userName}>
        <Text style={styles.userNameText}>Hello</Text>
        <Text style={styles.userNameText}>Stephen!</Text>
      </View>
      <View style={styles.input}>
        <View style={styles.IconView}>
          <Icon2 name="search" size={25} color="grey" />
        </View>
        <TextInput
          style={styles.inputext}
          placeholder="Search doctor or speciality"
        />
      </View>
      <View>
        <Text style={styles.department}>Department</Text>
      </View>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 19,
  },
  userImg: {
    width: 50,
    height: 50,
  },
  userImg1: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  div: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  userNameText: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 35,
  },
  input: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 20,
  },
  IconView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  inputext: {
    flex: 1,
  },
  department: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 31,
    paddingVertical: 12,
  },
});

//make this component available to the app
export default DoctorsPage;
