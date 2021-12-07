import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RoundImage } from "../../Components";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./ConversationHeader.styles";
import themeSettings from "../../theme";
import SettingContext from "../../Context/Seeting/SettingContext";

const Conversation = (props) => {
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;
  const [keepThemeValue, setkeepThemeValue] = useState(null);

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.firstView}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
            <AntDesign
              name="arrowleft"
              size={21}
              color={
                keepThemeValue === false
                  ? themeSettings.dark.DARK
                  : themeSettings.light.BCKG
              }
              style={styles.icon}
            />
          </TouchableOpacity>

          <RoundImage uri="https://bit.ly/2Zua8d7" />
          <Text
            style={[
              styles.name,
              {
                color:
                  keepThemeValue === false
                    ? themeSettings.dark.DARK
                    : themeSettings.light.BCKG,
              },
            ]}
          >
            Dr AJ Austin
          </Text>
        </View>

        <View>
          <Entypo
            name="dots-three-horizontal"
            size={21}
            color={
              keepThemeValue === false
                ? themeSettings.dark.DARK
                : themeSettings.light.BCKG
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Conversation;
