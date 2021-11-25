//import liraries
import React, { Component, useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import themeSettings from "../../theme";
import SettingContext from "../../Context/Seeting/SettingContext";
import ModalPop from "./TipsModal";

const MiddleContent = (props) => {
  const settingContext = useContext(SettingContext);
  const { theme, changeTheme } = settingContext;
  const navigation = useNavigation();
  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const [storeModalData, setstoreModalData] = useState([]);

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const Data = [
    {
      id: 1,
      imageUri: require("../../../assets/images/heart.jpg"),
      description: "Right ways to preserve the state of your heart",
      render: "true",

      content:
        "Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.",
    },
    {
      id: 2,
      render: "false",

      imageUri: require("../../../assets/images/kidney.jpeg"),
      description: "A healthy Kidney to wrestle against cancer ",
      content:
        "Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.",
    },
    {
      id: 3,
      render: "false",

      imageUri: require("../../../assets/images/me.jpg"),
      description: "blood stream,heridatory or genetic? ",
      content:
        "Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.",
    },
    {
      id: 4,
      render: "false",
      imageUri: require("../../../assets/images/brain.jpg"),
      description: "The penumbral shadow of the brain",
      content:
        "Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions. Most importantly, they filter waste products, excess water, and other impurities from your blood.",
    },
  ];

  const [Modal, setModal] = useState(Data);
  const [openModal, setopenModal] = useState(false);

  const HandleModal = (item) => {
    setstoreModalData(item);
    setopenModal(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          keepThemeValue === false
            ? themeSettings.light.BCKG
            : themeSettings.dark.BCKG,
      }}
    >
      <ModalPop
        storeModalData={storeModalData}
        setopenModal={setopenModal}
        openModal={openModal}
      />
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
              onPress={() => HandleModal(item)}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      keepThemeValue === false
                        ? themeSettings.light.FOOTER
                        : "#282828",
                    width: "100%",
                    height: 180,
                    borderRadius: 15,
                    marginVertical: 51,
                    position: "absolute",
                  }}
                ></View>
                <View style={styles.imgView}>
                  <Image style={styles.imgView1} source={item.imageUri} />
                  <Text
                    style={[
                      styles.txt,
                      {
                        color: keepThemeValue === false ? "white" : "#c4c4c4",
                      },
                    ]}
                  >
                    {" "}
                    {item.description}{" "}
                  </Text>
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
    width: "80%",
    height: 300,
  },
  imgView1: {
    width: "100%",
    height: "50%",
    borderRadius: 17,
    shadowColor: "red",
    elevation: 85,
  },
  theView: {
    paddingHorizontal: 18,
  },
  txt: {
    fontSize: 17,
    // color: "#c4c4c4",
    textAlign: "center",
    // fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 17,
  },
  txtContainer: {
    // paddingVertical: 10,
  },
});

export default MiddleContent;
