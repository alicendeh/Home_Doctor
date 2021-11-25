import Icon from "react-native-vector-icons/Entypo";
import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import DoctorModal from "./DoctorModal";
import { mainThemeFunction } from "../../Components";
import SettingContext from "../../Context/Seeting/SettingContext";
import themeSettings from "../../theme";
// create a component
const EndContent = () => {
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const Data = [
    {
      id: "1",
      name: "Dr Nick Nevin",
      speciality: "Gynecologist",
      rating: 4.5,
      imageUri: require("../../../assets/images/nick.jpeg"),
      render: "true",
      location: "Edea",
      description:
        "Nicolette Nevin — commonly known as Nic — is an overly qualified nurse who runs the hospital floor, has an on-and-off relationship with Conrad Hawkins and who goes the extra mile for her patients. Her mother died when she was 13 and her sister was a former drug addict but has now been sober for a year.During the early part of the season, Nic is shown to be really close to a repeat patient named Lily Kendall. Nic became suspicious of Lilys doctor, Lane Hunter when charts and medications didnt make sense.      ",
    },
    {
      id: "2",
      name: "Dr Pravesh",
      speciality: "Radiologist",
      rating: 4.6,
      imageUri: require("../../../assets/images/pravesh.jpeg"),
      render: "false",
      location: "Limbe",
      description:
        "Dr. Devon Pravesh is an idealistic young doctor who begins his first day under the supervision of a tough, brilliant senior resident, Conrad Hawkins, who pulls the curtain back on all of the good and evil in modern day medicine.Devon and Priya have been in a relationship since before the Pilot started, and are engaged. On Devon's first day, Priya gave him an engraved watch with the word 'Dr. Devon Pravesh'. Devon turned down drinks with Conrad in order to be with her. They are planning a small, intimate wedding of around 150 people. [2] For her birthday, he gave her a rescue puppy. ",
    },
    {
      id: "3",
      name: "Dr Mina Okafor",
      speciality: "Uerologist",
      rating: 4.8,
      imageUri: require("../../../assets/images/mina1.jpg"),
      render: "false",
      location: "Bamenda",
      description:
        "Dr. Mina Okafor is a surgeon at Chastain Park Memorial Hospital. She is portrayed by Dr. Mina Okafor is a Nigerian rising surgical star, recently trained on a new device that could redefine surgery.Her mother is a great doctor back in Nigeria. However, because of this, it meant that Mina and her sisters didn't see her often. In Haunted she told Conrad that Eileen Jacoby was the reason that she wanted to become a surgeon. Eileen proved to men that women are just as capable as men. She proved them wrong by performing some of the hardest surgeries. This inspired Mina",
    },
    {
      id: "4",
      name: "Dr Shaun Murphy",
      speciality: "Dentist",
      rating: 4.7,
      imageUri: require("../../../assets/images/shaun.jpg"),
      render: "false",
      location: "Douala",
      description:
        "Dr. Shaun Murphy is the main titular protagonist of The Good Doctor. As a resident at St. Bonaventure, he must learn the ropes of hospital work, while facing unique challenges and embracing his strengths due to his diagnoses of autism and savant syndrome.As a young child, Shaun was raised alongside his younger brother Steve by their mother and father. He was bullied by other children in school and teased for being autistic.",
    },
    {
      id: "5",
      name: "Dr Conrad Okings ",
      speciality: "Herbalist",
      rating: 4.9,
      imageUri: require("../../../assets/images/con.jpg"),
      render: "false",
      location: "Maroua",
      description:
        "it can be extremely difficult to decide where the most important work must be done. Should we focus on curing disease or preventing it? Should we fund disaster relief abroad or fight homelessness at home? Because there are sometimes no easy or apparent answers to the big questions that underpin our good deeds and our lives of activism, it is important to keep the lines of dialogue open about what it means to serve our communities and how best to direct our efforts and resources Mr. Okin is proud to contribute to the national discussion on community service by sponsoring the Seth Okin Good Deeds Scholarship. The winner will be awarded with a $1000 scholarship that will enable him or her to pursue educational goals with the ultimate purpose of creating a meaningful life of service to others.",
    },
    {
      id: "51",
      name: "Dr AJ Austin",
      speciality: "Cardiologist",
      rating: "5.0",
      imageUri: require("../../../assets/images/raptor.jpg"),
      render: "false",
      location: "Buea",
      description:
        "Dr. AJ Austin is triple board cardiothoracic, general and trauma surgeon at Chastain Park Memorial Hospital. He is portrayed by Malcolm-Jamal Warner.Dr. AJ Austin is the new star cardiothoracic surgeon at Chastain, but his incredible gifts come with a pconstant balancing act.Hospital. He is portrayed by Malcolm-Jamal WarnView Dr Austins Scheduleer.Dr. AJ Austin is the new star cardiothoracic surgeon at Chastain, but his incredible gifts come with a pconstant balancing act",
    },
  ];

  const [Modal, setModal] = useState(Data);
  console.log(mainThemeFunction(), "hhere");

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
      <Text
        style={[
          styles.txt,
          {
            color:
              keepThemeValue === false
                ? themeSettings.dark.DARK
                : themeSettings.light.BCKG,
          },
        ]}
      >
        Top Doctors
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Modal}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.mainContent}
              onPress={() => HandleModal(item.id)}
            >
              <DoctorModal
                openModal={item.render}
                item={item}
                close={closeModal}
              />
              <View style={styles.content1}>
                <View style={styles.imgDIv}>
                  <Image style={styles.imgDIv1} source={item.imageUri} />
                </View>
                <View style={styles.txtVIew}>
                  <Text style={styles.ratings}>
                    {item.rating}
                    <Icon name="star" size={21} color="#ffa800" />
                  </Text>
                  <Text style={styles.name}>{item.name} </Text>
                  <Text style={styles.specdiality}>{item.speciality} </Text>
                </View>
              </View>
              <View style={styles.content2}>
                <Icon name="dots-three-vertical" size={24} />
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
    paddingHorizontal: 18,
  },
  txt: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 31,
  },
  specdiality: {
    color: "rgba(21, 183, 183, 1)",
    fontSize: 17,
    fontFamily: "Poppins-Light",
  },

  ratings: {
    fontSize: 17,
    fontFamily: "Poppins-Light",
  },
  name: {
    fontFamily: "Poppins-Light",
    fontWeight: "bold",
    fontSize: 14,
  },
  txtVIew: {
    paddingHorizontal: 8,
  },
  imgDIv: {
    width: 55,
    height: 65,
  },
  imgDIv1: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    padding: 8,
  },

  txt: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 31,
    paddingVertical: 18,
  },
  mainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(19, 194, 194, 0.09)",
    margin: 8,
    padding: 7,
    width: "97%",
    borderRadius: 10,
  },
  content1: {
    flexDirection: "row",
  },
  content2: {
    margin: 10,
  },
});

//make this component available to the app
export default EndContent;
