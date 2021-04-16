//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
const Message = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            padding: 19,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image source={require('../../assets/images/stair.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Message;
