//import liraries
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import themeSettings from "../../theme";
import { Input } from "..";
import SettingContext from "../../Context/Seeting/SettingContext";
import AntDesign from "react-native-vector-icons/AntDesign";

// create a component
const MainHome = ({ headerTtile, placeHolder }) => {
  const settingContext = useContext(SettingContext);
  const { theme, changeTheme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const navigation = useNavigation();
  const [keepThemeValue, setkeepThemeValue] = useState(null);
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView
      style={{
        paddingVertical: 15,
        paddingHorizontal: 18,
        backgroundColor:
          keepThemeValue === false
            ? themeSettings.light.BCKG
            : themeSettings.dark.BCKG,
      }}
    >
      <View style={styles.view}>
        <TouchableOpacity style={styles.drawerIcon} onPress={openDrawer}>
          <AntDesign
            name="menu-fold"
            color={
              keepThemeValue === false
                ? themeSettings.dark.DARK
                : themeSettings.light.BCKG
            }
            size={22}
          />
        </TouchableOpacity>
        <View style={styles.userImg}>
          <Image
            source={{ uri: "https://cutt.ly/qviZNy8" }}
            style={styles.userImg1}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 27,
            fontWeight: "bold",
            paddingTop: 12,
            color:
              keepThemeValue === false
                ? themeSettings.dark.DARK
                : themeSettings.light.BCKG,
          }}
        >
          {headerTtile}
        </Text>
      </View>
      <Input title={placeHolder ? placeHolder :"Search"} />
    </SafeAreaView>
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
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  drawerIcon: {
    justifyContent: "center",
  },
});

//make this component available to the app
export default MainHome;
