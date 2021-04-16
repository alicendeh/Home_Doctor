//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// create a component
const DoctorModal = (props) => {
  return (
    <Modal visible={props.openModal} statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <ImageBackground source={props.item.imageUri} style={styles.img}>
            <Icon
              name="chevron-thin-down"
              size={38}
              onPress={props.close}
              style={styles.icon}
              color="white"
            />
          </ImageBackground>
        </View>
        <View style={styles.mainTxt}>
          <View style={styles.txtVIew}>
            <Text style={styles.ratings}>
              {props.item.rating}
              <Icon name="star" size={21} color="white" />
            </Text>
          </View>
        </View>
        <ScrollView style={styles.userD}>
          <Text style={styles.txt}> {props.item.name} </Text>
          <Text style={styles.txt1}>
            <Icon name="location-pin" size={21} color="#13c2c2" />
            {props.item.location},Cameroon
          </Text>
          <View style={styles.speciality}>
            <Text style={styles.txt2}> {props.item.speciality} </Text>
          </View>

          <View>
            <Text style={styles.des}>{props.item.description} </Text>
          </View>
        </ScrollView>
        <View style={styles.box}>
          <Text style={styles.sch}>View {props.item.name}'s Schedule </Text>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    backgroundColor: 'blue',
    height: '50%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  icon: {
    margin: 8,
    paddingVertical: 30,
  },
  txtVIew: {
    padding: 8,
    backgroundColor: '#ffa800',
    width: '21%',
    borderRadius: 10,
  },
  ratings: {
    color: 'white',
    fontSize: 21,
  },
  mainTxt: {
    height: '80%',
    alignItems: 'flex-end',
    marginTop: Dimensions.get('screen').width * -0.05,
    margin: 12,
    height: '5%',
  },
  txt: {
    fontSize: 24,
    fontFamily: 'Poppins-Light',
    fontWeight: 'bold',
  },
  txt1: {
    color: 'rgba(19, 194, 194, 1)',
    fontSize: 18,
    margin: 6,
  },
  speciality: {
    backgroundColor: 'rgba(239, 165, 22,0.2)',
    padding: 8,
    borderColor: '#ffa800',
    borderRadius: 9,
    margin: 6,
    width: '34%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt2: {
    fontFamily: 'Poppins-Light',
    color: '#ffa800',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  sch: {
    color: 'white',
    padding: 10,
    fontSize: 18,
  },
  des: {
    fontSize: 22,
    color: '#595e62',
    marginVertical: 11,
    marginHorizontal: 29,
    lineHeight: 38,
  },
  box: {
    backgroundColor: 'rgba(240, 160, 5,0.88)',
    borderWidth: 1,
    borderColor: 'black',
    width: '85%',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: -45,
    marginVertical: 15,
    marginHorizontal: 30,
  },
});

//make this component available to the app
export default DoctorModal;
