import React, { useContext, useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import themeSettings from "../../theme";
import styles from "./DrawerContent.style";
import RoundImage from "../RoundImage/RoundImage.component";
import SettingContext from "../../Context/Seeting/SettingContext";

const DrawerContent = () => {
  const [swapTheme, setswapTheme] = useState(false);
  const [keepThemeValue, setkeepThemeValue] = useState(null);

  const settingContext = useContext(SettingContext);
  const { theme, changeTheme } = settingContext;

  useEffect(() => {
    setkeepThemeValue(theme);
    console.log(keepThemeValue);
  }, [theme]);

  const toggleTheme = () => {
    setswapTheme(!swapTheme);
    changeTheme(swapTheme);
  };

  const dataSet = [
    {
      title: "Profile",
      iconName: "user",
    },
    {
      title: "Notifications",
      iconName: "bells",
    },
    {
      title: "My posts",
      iconName: "wechat",
    },
    {
      title: "Like the App? share",
      iconName: "sharealt",
    },
    {
      title: "Rate App on playstore",
      iconName: "star",
    },
    {
      title: "Create New Account",
      iconName: "pluscircle",
    },
    {
      title: "Logout",
      iconName: "logout",
      diff: true,
    },
  ];

  return (
    <View
      style={{
        paddingVertical: 21,
        paddingHorizontal: 21,
        backgroundColor:
          keepThemeValue === false
            ? themeSettings.light.BCKG
            : themeSettings.dark.BCKG,
        flex: 1,
      }}
    >
      <FlatList
        keyExtractor={() => Math.random().toString()}
        ListHeaderComponent={
          <View style={styles.main}>
            <RoundImage uri="https://cutt.ly/qTS2POc" />
            <Text
              style={[
                styles.name,
                {
                  color:
                    keepThemeValue === false
                      ? themeSettings.light.COLOR
                      : "#fff",
                },
              ]}
            >
              ChadWick Bossman
            </Text>

            <Text
              style={[
                styles.tel,
                {
                  color:
                    keepThemeValue === false
                      ? themeSettings.light.COLOR
                      : themeSettings.dark.YELLOW,
                },
              ]}
            >
              675979594
            </Text>
          </View>
        }
        data={dataSet}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.mainView}>
            <AntDesign
              name={item.iconName}
              color={
                item.diff === true
                  ? keepThemeValue === false
                    ? themeSettings.light.RED
                    : themeSettings.dark.YELLOW
                  : themeSettings.light.PRIMARY
              }
              size={22}
            />
            <Text
              style={[
                styles.txt,
                {
                  color:
                    item.diff === true
                      ? keepThemeValue === false
                        ? themeSettings.light.RED
                        : themeSettings.dark.YELLOW
                      : keepThemeValue === false
                      ? themeSettings.light.COLOR
                      : themeSettings.dark.COLOR,
                },
              ]}
            >
              {item.title}{" "}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        onPress={toggleTheme}
        style={[
          styles.footer,
          {
            backgroundColor:
              keepThemeValue === false
                ? themeSettings.light.BCKG
                : themeSettings.dark.BCKG,
          },
        ]}
      >
        <AntDesign name="bulb1" color={themeSettings.light.PRIMARY} size={27} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
