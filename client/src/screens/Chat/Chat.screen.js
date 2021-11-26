import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Header } from "../../Components";
import styles from "./Chat.style";
import SettingContext from "../../Context/Seeting/SettingContext";
import themeSettings from "../../theme";

const Chat = () => {
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
      <Header headerTtile="Chat" />
      <View style={styles.contentView}>
        <Text style={styles.convText}>Start Conversation</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
