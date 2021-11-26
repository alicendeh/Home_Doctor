import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Header, RoundImage } from "../../Components";
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

  const data = [
    {
      uri: "https://bit.ly/3xtjYc0",
      title: "How can i help you?",
      time: "12:35",
      color: "#1DC3C3",
      badge: 25,
      name: "Dr Melendez",
    },
    {
      uri: "https://bit.ly/3162JRT",
      title: "Meet me at the office tomorrow?",
      time: "8:40",
      color: "#ccc",
      name: "Dr Claire Brown",
    },

    {
      uri: "https://bit.ly/313fHzw",
      title: "Drink Amophine for the pains",
      time: "7:35",
      color: "#1DC3C3",
      badge: 4,
      name: "Dr Mina Okafor",
    },
    {
      uri: "https://bit.ly/3cQt3lk",
      title: "I think you'll die soon",
      time: "7:35",
      color: "#ccc",
      name: "Dr Shaun Murphy ",
    },
    {
      uri: "https://bit.ly/3nX2TEa",
      title: "How can i help you?",
      time: "12:35",
      color: "#1DC3C3",
      badge: 25,
      name: "Dr Melendez",
    },
    {
      uri: "https://bit.ly/3xpZBML",
      title: "Meet me at the office tomorrow?",
      time: "8:40",
      color: "#ccc",
      name: "Dr Claire Brown",
    },
    {
      uri: "https://bit.ly/3cRmY8j",
      title: "Drink Amophine for the pains",
      time: "7:35",
      color: "#1DC3C3",
      badge: 4,
      name: "Dr Mina Okafor",
    },
    {
      uri: "https://bit.ly/313fHzw",
      title: "Meet me at the office tomorrow?",
      time: "8:40",
      color: "#ccc",
      name: "Dr Claire Brown",
    },
    {
      uri: "https://bit.ly/3nX2TEa",
      title: "Drink Amophine for the pains",
      time: "7:35",
      color: "#1DC3C3",
      badge: 4,
      name: "Dr Mina Okafor",
    },
  ];
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
        <FlatList
          keyExtractor={() => Math.random().toString()}
          data={data}
          ListHeaderComponent={
            <TouchableOpacity>
              <Text style={styles.convText}>Start Conversation</Text>
            </TouchableOpacity>
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.main}>
              <View style={styles.firstView}>
                <View>
                  <RoundImage uri={item.uri} />
                </View>
                <View style={styles.txt}>
                  <Text
                    style={[
                      styles.name,
                      {
                        color:
                          keepThemeValue === false
                            ? themeSettings.dark.BCKG
                            : themeSettings.light.BCKG,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.title,
                      {
                        color:
                          keepThemeValue === false
                            ? "#333"
                            : themeSettings.light.BCKG,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
              <View style={styles.lastContent}>
                <Text
                  style={{
                    color: item.badge ? themeSettings.light.PRIMARY : "#333",
                  }}
                >
                  {item.time}
                </Text>
                <View
                  style={[
                    styles.badge,
                    {
                      backgroundColor: item.badge
                        ? themeSettings.light.PRIMARY
                        : themeSettings.light.BCKG,
                    },
                  ]}
                >
                  <Text style={styles.numBadge}>{item.badge}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
