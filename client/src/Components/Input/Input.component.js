import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.style";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Input = ({ title }) => {
  return (
    <View style={styles.input}>
      <View style={styles.IconView}>
        <FontAwesome5 name="search" size={25} color="grey" />
      </View>
      <TextInput style={[styles.inputext]} placeholder={title} />
    </View>
  );
};

export default Input;
