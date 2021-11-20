//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import LinnearGradient from "react-native-linear-gradient";
import styles from "./Authentication.style";
// create a component
const Authentication = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require("../../../assets/images/designntop.png")} />
      </View>
      <View style={styles.vector}>
        <Image source={require("../../../assets/images/Vector.png")} />
      </View>

      <View style={styles.welcomeView}>
        <Text style={styles.txt}>Welcome,</Text>
        <Text style={styles.txt1}>Sign up to continue</Text>
      </View>
      <ScrollView>
        <View style={styles.inputView}>
          <View style={styles.indView}>
            <View style={styles.thediv}>
              <View style={styles.iconView}>
                <Icon2 name="user" color="#1dc3c3" size={38} />
              </View>
              <View style={styles.inputText}>
                <TextInput
                  placeholder={`
              Username
              enter your username
               `}
                />
              </View>
            </View>
          </View>
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
            colors={["#13c2c2", "rgba(29,195,195,0.47)"]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.43, y: 0 }}
          >
            <Text style={styles.create}>Create account</Text>
          </LinnearGradient>
          <View>
            <Text style={styles.acct}>Already have an account?</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View style={styles.sign}>
            <Text style={styles.signTxt}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Authentication;
