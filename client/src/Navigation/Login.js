//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinnearGradient from 'react-native-linear-gradient';
// create a component
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require('../../assets/images/designntop.png')} />
      </View>
      <View style={styles.vector}>
        <Image source={require('../../assets/images/Vector.png')} />
      </View>
      <View style={styles.welcomeView}>
        <Text style={styles.txt}>Welcome back,</Text>
        <Text style={styles.txt1}>Sign in to continue</Text>
      </View>
      <View style={styles.inputView}>
        <View style={styles.indView}>
          <View style={styles.thediv}>
            <View style={styles.iconView}>
              <Icon4 name="email" color="#1dc3c3" size={38} />
            </View>
            <View style={styles.inputText}>
              <TextInput
                placeholder={`
              Email
              enter your email
               `}
              />
            </View>
          </View>
        </View>
        <View style={styles.indView}>
          <View style={styles.thediv}>
            <View style={styles.iconView}>
              <Icon1 name="lock-open" color="#1dc3c3" size={38} />
            </View>
            <View style={styles.inputText}>
              <TextInput
                placeholder={`
             Password
              enter your password
               `}
              />
            </View>
            <View style={styles.hide}>
              <Icon1 name="eye-with-line" color="#1dc3c3" size={30} />
            </View>
          </View>
        </View>
        <LinnearGradient
          colors={['#13c2c2', 'rgba(29,195,195,0.47)']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.43, y: 0 }}
        >
          <Text style={styles.create}>Sign in</Text>
        </LinnearGradient>
        <View>
          <Text style={styles.acct}>Don't have an account yet?</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <View style={styles.sign}>
          <Text style={styles.signTxt}>Create account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imgView: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'flex-end',
  },
  vector: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: -58,
  },
  txt: {
    fontFamily: 'Poppins-Light',
    fontSize: 40,
    color: 'rgba(0,0,0,0.6)',
  },
  welcomeView: {
    margin: 21,
  },
  txt1: {
    fontSize: 20,
    color: '#797b7d',
  },
  gradient: {
    width: '85%',
    padding: 9,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  indView: {
    // flex: 1,
    width: '85%',
    borderWidth: 2,
    borderColor: '#cfcfcf',
    height: 75,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  thediv: {
    flexDirection: 'row',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  inputText: {
    flex: 1,
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
  },
  hide: {
    justifyContent: 'flex-end',
    padding: 8,
  },
  create: {
    color: 'white',
    fontFamily: 'Poppins-Light',
    fontSize: 21,
    textAlign: 'center',
  },
  acct: {
    color: 'rgba(139,137,137,1)',
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
  },
  sign: {
    borderColor: 'rgba(159,205,205,1)',
    padding: 14,
    width: '85%',
    borderWidth: 2,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  signTxt: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(48,171,171,1)',
  },
});

//make this component available to the app
export default Login;
