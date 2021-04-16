//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// create a component
const TipsModal = (props) => {
  return (
    <Modal visible={props.openModal} animationType={'slide'}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name="arrowleft" size={21} onPress={props.close} />
        </View>
        <View style={styles.imgDiv}>
          <Image style={styles.img} source={props.imageUri} />
        </View>
        <ScrollView>
          <View style={styles.desc}>
            <Text style={styles.desc}> {props.description} </Text>
          </View>
          <View>
            <Text style={styles.cont}> {props.content} </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    margin: 21,
  },
  imgDiv: {
    width: '100%',
    height: '40%',
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  desc: {
    fontSize: 24,
    padding: 12,
    color: '#595e62',
    fontWeight: 'bold',
    lineHeight: 38,
  },
  cont: {
    fontSize: 22,
    color: '#595e62',
    marginVertical: 11,
    marginHorizontal: 29,
    lineHeight: 38,
  },
});

//make this component available to the app
export default TipsModal;
