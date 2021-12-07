//import liraries
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import themeSettings from "../../theme";
import SettingContext from "../../Context/Seeting/SettingContext";
const { width, height } = Dimensions.get("screen");
// create a component
const DoctorModal = ({
  ModalData,
  setmodalToggler,
  modalToggler,
  navigation,
}) => {
  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const {
    name,
    speciality,
    rating,
    description,
    imageUri,
    location,
  } = ModalData;

  const appointmentPage = () => {
    console.log("hey");
    setmodalToggler(false);
    navigation.navigate("Appointment");
  };
  return (
    <Modal visible={modalToggler} statusBarTranslucent>
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
        <View style={styles.mainView}>
          <ImageBackground source={imageUri} style={styles.img}>
            <Entypo
              name="chevron-thin-down"
              size={38}
              onPress={() => setmodalToggler(false)}
              style={styles.icon}
              color="white"
            />
          </ImageBackground>
        </View>
        <View style={styles.mainTxt}>
          <View style={styles.txtVIew}>
            <Text style={styles.ratings}>
              {rating}
              <Entypo name="star" size={21} color="white" />
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.infoView}>
            <Text
              style={[
                styles.nameText,
                {
                  color:
                    keepThemeValue === false
                      ? themeSettings.dark.BCKG
                      : themeSettings.light.BCKG,
                },
              ]}
            >
              {name}
            </Text>
            <View style={styles.locationView}>
              <Entypo
                name="location"
                size={21}
                color={themeSettings.light.PRIMARY}
              />
              <Text style={styles.locationText}>{location}</Text>
            </View>
            <View
              style={[
                styles.speciality,
                {
                  borderWidth: keepThemeValue === false ? 1.33 : 0,
                },
              ]}
            >
              <Text style={styles.txt2}>{speciality}</Text>
            </View>
            <View
              style={{
                paddingVertical: 12,
                paddingBottom: 55,
              }}
            >
              <Text
                style={[
                  styles.descText,
                  {
                    color:
                      keepThemeValue === false
                        ? "#AEA8A8"
                        : themeSettings.light.BCKG,
                  },
                ]}
              >
                {description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.box} onPress={appointmentPage}>
          <Text style={styles.sch}>View {name}'s Schedule </Text>
        </TouchableOpacity>
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
    height: "50%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width * 1,
    height: height * 0.47,
    flex: 1,
    alignSelf: "center",
  },
  icon: {
    margin: 8,
    paddingVertical: 30,
  },
  txtVIew: {
    padding: 8,
    backgroundColor: "#ffa800",
    width: "21%",
    borderRadius: 10,
  },
  ratings: {
    color: "white",
    fontSize: 21,
  },
  mainTxt: {
    height: "80%",
    alignItems: "flex-end",
    marginTop: Dimensions.get("screen").width * -0.05,
    margin: 12,
    height: "5%",
  },
  txt: {
    fontSize: 24,
    fontFamily: "Poppins-Light",
    fontWeight: "bold",
  },
  txt1: {
    color: "rgba(19, 194, 194, 1)",
    fontSize: 18,
    margin: 6,
  },
  speciality: {
    backgroundColor: "rgba(239, 165, 22,0.2)",
    borderColor: "#ffa800",
    borderRadius: 9,
    width: 127,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1.33,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  txt2: {
    fontFamily: "Poppins-Light",
    color: "#ffa800",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  sch: {
    color: "white",
    padding: 10,
    fontSize: 18,
  },
  des: {
    fontSize: 22,
    color: "#595e62",
    marginVertical: 11,
    marginHorizontal: 29,
    lineHeight: 38,
    textAlign: "left",
  },
  box: {
    backgroundColor: "rgba(240, 160, 5,0.98)",
    // borderWidth: 1,
    // borderColor: "black",
    width: "83%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 30,
    position: "absolute",
    bottom: 0,
    // elevation: 4,
  },
  infoView: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  nameText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  descText: {
    lineHeight: 25,
    fontSize: 17,
    // fontFamily: "poppins-light",
    textAlign: "left",
    fontFamily: "Poppins-Light",
  },
  locationText: {
    fontSize: 23,
    color: themeSettings.light.PRIMARY,
    paddingHorizontal: 12,
    fontFamily: "Poppins-Light",
  },
});

//make this component available to the app
export default DoctorModal;
