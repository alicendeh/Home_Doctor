//import liraries
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import SettingContext from "../../Context/Seeting/SettingContext";
import themeSettings from "../../theme";

// create a component
const MiddleContent = () => {
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const Data = [
    {
      key: 1,
      icon: "lock-open",
      name: "Bone",
      name2: "Specialist",
      bckg: "#1dc3c3",
    },
    {
      key: 2,
      icon: "lock-open",
      name: "Dental",
      name2: "Care",
    },
    {
      key: 3,
      icon: "lock-open",
      name: "Cardio",
      name2: "specialist",
    },
    {
      key: 4,
      icon: "lock-open",
      name: "Radio",
      name2: "Screening",
    },
    {
      key: 3,
      icon: "lock-open",
      name: "Cardio",
      name2: "specialist",
    },
    {
      key: 4,
      icon: "lock-open",
      name: "Radio",
      name2: "Screening",
    },
  ];
  return (
    <View
      style={{
        paddingHorizontal: 18,
      }}
    >
      <FlatList
        data={Data}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                // backgroundColor: item.bckg || "rgba(223, 220, 220, 0.51)",
                backgroundColor:
                  keepThemeValue === false
                    ? "rgba(223, 220, 220, 0.51)"
                    : "#F2F8F8",
                paddingVertical: 7,
                paddingHorizontal: 9,
                margin: 7,
                borderRadius: 12,
                borderBottomLeftRadius: 15,
                width: 115,
              }}
            >
              <View style={styles.iconic}>
                <Icon
                  name={item.icon}
                  size={28}
                  color={
                    keepThemeValue === false
                      ? themeSettings.light.PRIMARY
                      : "#595E62"
                  }
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color:
                    keepThemeValue === false
                      ? themeSettings.light.PRIMARY
                      : "#595E62",
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color:
                    keepThemeValue === false
                      ? themeSettings.light.PRIMARY
                      : "#595E62",
                  textAlign: "center",
                }}
              >
                {item.name2}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  iconic: {
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default MiddleContent;
