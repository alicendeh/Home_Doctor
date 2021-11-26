//import liraries
import React, { useEffect, useContext, useState } from "react";
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
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinnearGradient from "react-native-linear-gradient";
import styles from "../Authentication/Authentication.style";
import SettingContext from "../../Context/Seeting/SettingContext";
import themeSettings from "../../theme";

// create a component
const Login = ({ navigation }) => {
  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            keepThemeValue === false
              ? themeSettings.light.BCKG
              : themeSettings.dark.BCKG,
        },
      ]}
    >
      <View style={styles.imgView}>
        <Image
          source={
            keepThemeValue === false
              ? require("../../../assets/images/designntop.png")
              : require("../../../assets/images/maki_doctor-15.png")
          }
        />
      </View>
      <View
        style={[
          styles.vector,
          {
            marginTop: 95,
          },
        ]}
      >
        <Image source={require("../../../assets/images/Vector.png")} />
      </View>

      <View style={styles.welcomeView}>
        <Text
          style={[
            styles.txt,
            {
              color:
                keepThemeValue === false ? "rgba(0, 0, 0, 0.6)" : "#FEFEFE",
            },
          ]}
        >
          Welcome,
        </Text>
        <Text
          style={[
            styles.txt1,
            {
              color:
                keepThemeValue === false ? "#797b7d" : "rgba(183, 183, 183, 1)",
            },
          ]}
        >
          Sign up to continue
        </Text>
      </View>
      <ScrollView>
        <View style={styles.inputView}>
          <View style={styles.indView}>
            <View style={styles.thediv}>
              <View style={styles.iconView}>
                <MaterialCommunityIcons
                  name="email"
                  color="#1dc3c3"
                  size={25}
                />
              </View>
              <View style={styles.inputText}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={
                    keepThemeValue === false
                      ? "black"
                      : "rgba(183, 183, 183, 1)"
                  }
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <View style={styles.indView}>
            <View style={styles.thediv}>
              <View style={styles.iconView}>
                <Entypo name="lock-open" color="#1dc3c3" size={25} />
              </View>
              <View style={styles.inputText}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={
                    keepThemeValue === false
                      ? "black"
                      : "rgba(183, 183, 183, 1)"
                  }
                  style={styles.input}
                />
              </View>
              <View style={styles.hide}>
                <Entypo name="eye-with-line" color="#1dc3c3" size={22} />
              </View>
            </View>
          </View>
          <LinnearGradient
            colors={["#13c2c2", "rgba(29,195,195,0.47)"]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.43, y: 0 }}
          >
            <Text style={styles.create}>Sign in</Text>
          </LinnearGradient>
          <View>
            <Text
              style={[
                styles.acct,
                {
                  color:
                    keepThemeValue === false
                      ? "#797b7d"
                      : "rgba(183, 183, 183, 1)",
                },
              ]}
            >
              Don't have an account yet?
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <View style={styles.sign}>
            <Text style={styles.signTxt}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;
