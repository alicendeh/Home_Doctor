//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Elevations from 'react-native-elevation';

// create a component
const Message = ({ navigation }) => {
  return (
    <View>
      <View style={styles.mainC}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.stair}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image source={require('../../../assets/images/stair.png')} />
          </TouchableOpacity>
          <View style={styles.userImg}>
            <Image
              source={{ uri: 'https://cutt.ly/qviZNy8' }}
              style={styles.userImg1}
            />
          </View>
          <Text style={styles.txt}>Chats</Text>
        </View>
        <View style={styles.icon}>
          <Icon name="plus" size={24} color="white" />
        </View>
      </View>

      <View style={styles.input}>
        <TextInput placeholderTextColor="black" placeholder="Search" />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 19,
    flexDirection: 'row',
    width: '58%',
    justifyContent: 'space-between',
  },
  userImg: {
    width: 50,
    height: 50,
  },
  userImg1: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    marginHorizontal: 8,
  },
  txt: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  stair: {
    margin: 8,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffa800',
    width: 50,
    height: 50,
    padding: 8,
    borderRadius: 50,
    margin: 14,
  },
  mainC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 0.7,
    borderColor: '#ffa800',
    width: '90%',
    borderRadius: 24,
    backgroundColor: 'white',
    marginHorizontal: 14,
    paddingHorizontal: 10,
    elevation: 15,
    shadowColor: 'black',
  },
});

//make this component available to the app
export default Message;
