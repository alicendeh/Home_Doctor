//import liraries
import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import SettingContext from "../../Context/Seeting/SettingContext";
import themeSettings from "../../theme";

const TipsModal = ({ openModal, storeModalData, setopenModal }) => {
  const [keepThemeValue, setkeepThemeValue] = useState(null);

  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;
  const { description, imageUri, content } = storeModalData;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  return (
    <Modal visible={openModal} animationType={"slide"}>
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
        <View style={styles.icon}>
          <Icon
            name="arrowleft"
            size={21}
            color={
              keepThemeValue === false
                ? themeSettings.dark.BCKG
                : themeSettings.light.BCKG
            }
            onPress={() => setopenModal(false)}
          />
        </View>
        <View style={styles.imgDiv}>
          <Image style={styles.img} source={imageUri} />
        </View>
        <ScrollView>
          <View style={styles.textView}>
            <View
              style={[
                styles.innerTextView,
                {
                  backgroundColor:
                    keepThemeValue === false
                      ? "rgba(231, 229, 229, 0.37)"
                      : " rgba(0, 0, 0, 0.25)",
                },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.desc,
                    {
                      color:
                        keepThemeValue === false
                          ? "#595e62"
                          : themeSettings.light.BCKG,
                    },
                  ]}
                >
                  {" "}
                  {description}{" "}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.cont,
                    {
                      color: keepThemeValue === false ? "#595e62" : "#c4c4c4",
                    },
                  ]}
                >
                  {" "}
                  {content}{" "}
                </Text>
              </View>
            </View>
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
    width: "100%",
    height: "35%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  desc: {
    fontSize: 21,
    padding: 12,
    fontWeight: "bold",
    textAlign: "center",
    fontWeight: "bold",
  },

  cont: {
    fontSize: 17,

    marginVertical: 11,
    marginHorizontal: 29,
    textAlign: "left",
    lineHeight: 30,
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerTextView: {
    width: "100%",
  },
});

//make this component available to the app
export default TipsModal;
