//import liraries
import React, { useState, useContext, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import TopContent from "../../Components/Doctors/TopContent";
import MiddleContent from "../../Components/Doctors/MiddleContent";
import EndContent from "../../Components/Doctors/EndContent";
import themeSettings from "../../theme";
import SettingContext from "../../Context/Seeting/SettingContext";

// create a component
const DoctorsPage = (props) => {
  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const componentList = [
    <Text
      style={[
        styles.department,
        {
          color:
            keepThemeValue === false
              ? themeSettings.dark.DARK
              : themeSettings.light.BCKG,
        },
      ]}
    >
      Department
    </Text>,
    <MiddleContent />,

    <EndContent {...props} />,
    <>
      <View
        style={{
          paddingHorizontal: 18,
        }}
      ></View>
    </>,
  ];
  const data = [0, 1, 2, 3, 4];
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
      <TopContent />

      <FlatList
        keyExtractor={() => Math.random().toString()}
        data={data}
        renderItem={({ item }) => componentList[item]}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  department: {
    fontFamily: "PortLligatSans-Regular",
    fontSize: 31,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
});

//make this component available to the app
export default DoctorsPage;
