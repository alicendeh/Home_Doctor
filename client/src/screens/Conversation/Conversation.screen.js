import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import { ConversationHeader, ConversationBox, Input } from "../../Components";
import styles from "./Conversation.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
    <SafeAreaView
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
      <ConversationHeader {...props} />
      <ConversationBox {...props} />
      <View>
        <View
          style={[
            styles.input,
            {
              backgroundColor: keepThemeValue === false ? "#fff" : "#eee",
            },
          ]}
        >
          <TextInput
            style={[styles.inputext, {}]}
            placeholder="Type a message"
          />
          <View style={styles.IconView}>
            <MaterialCommunityIcons
              name="send"
              size={25}
              color={themeSettings.light.FOOTER}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Conversation;
