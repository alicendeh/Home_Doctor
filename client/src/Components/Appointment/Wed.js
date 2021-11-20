//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

// create a component
const MyComponent = () => {
  const Data = [
    {
      id: "1",
      time: "10:00AM",
      bg: "red",
    },
    {
      id: "2",
      time: "11:00AM",
    },
    {
      id: "3",
      time: "12:00AM",
      borderC: "red",
    },
    {
      id: "4",
      time: "1:00 PM",
      borderC: "#ffa800",
    },
    {
      id: "5",
      time: "2:00 PM",
    },
    {
      id: "6",
      time: "3:00 PM",
      borderC: "#ffa800",
    },
    {
      id: "7",
      time: "4:00 PM",
      borderC: "#ffa800",
    },
    {
      id: "8",
      time: "5:00 PM",
    },
    {
      id: "9",
      time: "6:00 PM",
      borderC: "#ffa800",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Avialable Times</Text>

      <FlatList
        data={Data}
        numColumns="3"
        renderItem={({ item }) => {
          return (
            <View style={styles.wrap}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: "107%",
                  backgroundColor: item.borderC || "white",
                  borderColor: item.borderC ? "transparent" : "#ffa800",
                  padding: 12,
                  marginHorizontal: 14,
                }}
              >
                <Text
                  style={{
                    color: item.borderC ? "white" : "black",
                    textAlign: "center",
                  }}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.txtA}>
        <Text style={styles.app}>Appointment for ?</Text>
        <View style={styles.TextInput}>
          <TextInput placeholder="Full Name" placeholderTextColor="black" />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="Telephone Number"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.sub}>
          <Text style={styles.subText}>Submit Application</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  txt: {
    fontFamily: "Poppins-Light",
    fontSize: 20,
    margin: 15,
  },

  wrap: {
    padding: 4,
    margin: 8,
  },
  txtA: {
    flex: 1,
    marginTop: Dimensions.get("screen").width * -0.8,
  },
  app: {
    margin: 12,
    fontSize: 21,
  },
  TextInput: {
    borderColor: "#efa516",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 7,
    margin: 7,
    width: "87%",
  },
  sub: {
    borderColor: "transparent",
    borderWidth: 1,
    backgroundColor: "#ffa800",
    borderRadius: 10,
    padding: 7,
    margin: 7,
    width: "87%",
  },
  subText: {
    color: "white",
    fontSize: 21,
  },
});

//make this component available to the app
export default MyComponent;
