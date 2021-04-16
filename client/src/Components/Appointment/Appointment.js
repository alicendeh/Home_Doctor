//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import DoctorModal from '../Doctors/DoctorModal';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import DaysTab from './DaysTab';
// create a component
const Appointment = (props) => {
  const navigation = useNavigation();

  const backArrow = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <TouchableOpacity style={styles.arrow} onPress={backArrow}>
          <Icon name="arrowleft" size={21} />
        </TouchableOpacity>
        <Text style={styles.app}>Book An Appointment</Text>
      </View>
      <View style={styles.monthDiv}>
        <Text style={styles.month}>April</Text>
      </View>
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <DaysTab />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  app: {
    color: 'black',
    fontSize: 21,
  },
  topContent: {
    flexDirection: 'row',
    margin: 15,
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 28,
  },
  month: {
    color: '#808080',
    fontSize: 20,
  },
  monthDiv: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

//make this component available to the app
export default Appointment;
