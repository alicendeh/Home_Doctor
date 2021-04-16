//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ModalPop from './TipsModal';
// create a component

const MiddleContent = (props) => {
  const navigation = useNavigation();

  const Data = [
    {
      id: 1,
      imageUri: require('../../../assets/images/heart.jpg'),
      description: 'Right ways to preserve the state of your heart',
      render: 'true',

      content:
        'Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.',
    },
    {
      id: 2,
      render: 'false',

      imageUri: require('../../../assets/images/kidney.jpeg'),
      description: 'A healthy Kidney to wrestle against cancer',
      content:
        'Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.',
    },
    {
      id: 3,
      render: 'false',

      imageUri: require('../../../assets/images/me.jpg'),
      description: 'blood stream,heridatory or genetic?',
      content:
        'Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.',
    },
    {
      id: 4,
      render: 'false',
      imageUri: require('../../../assets/images/brain.jpg'),
      description: 'The penumbral shadow of the brain',
      content:
        'Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.',
    },
  ];

  const [Modal, setModal] = useState(Data);

  const HandleModal = (key) => {
    let modals = [...Data];
    modals.map((item) => {
      item.id == key && (item.render = true);
    });
    setModal(modals);
  };

  const closeModal = (key) => {
    let modals = [...Data];
    modals.map((item) => {
      item.id == key && (item.render = false);
    });
    setModal(modals);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        key={() => {
          item.description;
        }}
        data={Modal}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.theView}
              onPress={() => HandleModal(item.id)}
            >
              <ModalPop
                openModal={item.render}
                imageUri={item.imageUri}
                description={item.description}
                content={item.content}
                close={closeModal}
              />

              <View style={styles.mainView}>
                <View style={styles.imgView}>
                  <Image style={styles.imgView1} source={item.imageUri} />
                </View>
                <View style={styles.txtContainer}>
                  <Text style={styles.txt}> {item.description} </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgView: {
    width: Dimensions.get('screen').width * 0.787,
    height: 200,
  },
  imgView1: {
    width: '100%',
    height: '100%',
  },
  mainView: {
    width: Dimensions.get('screen').width * 0.787,
    backgroundColor: '#7c9fa5',
    margin: 7,
    borderRadius: 15,
    paddingBottom: 19,
  },
  theView: {
    marginHorizontal: 25,
  },
  txt: {
    fontSize: 20,
    fontFamily: 'Poppins-light',
    margin: 8,
    color: 'white',
  },
});

//make this component available to the app
export default MiddleContent;
