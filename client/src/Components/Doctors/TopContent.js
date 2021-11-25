//import liraries
import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Header } from "../../Components";
import themeSettings from "../../theme";
import SettingContext from "../../Context/Seeting/SettingContext";

// create a component

const TopContent = () => {
  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;
  const navigation = useNavigation();

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  return (
    <View>
      <Header headerTtile="Home" />
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
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  div: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  userNameText: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 35,
  },
  input: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 20,
  },
  IconView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  inputext: {
    flex: 1,
  },
  department: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 31,
    paddingVertical: 12,
  },
});

//make this component available to the app
export default TopContent;
