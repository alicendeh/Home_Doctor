//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

// create a component
const MainHome = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        padding: 19,
        backgroundColor: '',
      }}
    >
      <View style={styles.div}>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={require('../../../assets/images/stair.png')} />
        </TouchableOpacity>
        <View style={styles.userImg}>
          <Image
            source={{ uri: 'https://cutt.ly/qviZNy8' }}
            style={styles.userImg1}
          />
        </View>
      </View>
      <View style={styles.input}>
        <View style={styles.IconView}>
          <Icon2 name="search" size={25} color="grey" />
        </View>
        <TextInput style={styles.inputext} placeholder="Search Category..." />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  userImg: {
    width: 50,
    height: 50,
  },
  userImg1: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  div: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 20,
  },
  IconView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  inputext: {
    flex: 1,
  },
});

//make this component available to the app
export default MainHome;
