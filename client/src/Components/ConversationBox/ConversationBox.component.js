import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, Text } from "react-native";
import styles from "./ConversationBox.style";
import { Input } from "../../Components";
import themeSettings from "../../theme";
import SettingContext from "../../Context/Seeting/SettingContext";

const ConversationBox = () => {
  const settingContext = useContext(SettingContext);
  const { theme } = settingContext;
  const [keepThemeValue, setkeepThemeValue] = useState(null);

  useEffect(() => {
    setkeepThemeValue(theme);
  }, [theme]);

  const data = [
    {
      title: "Hello Doctor Austin ",
      side: "right",
    },
    {
      title: "Hello Mr Stephen how are you ?",
      side: "left",
    },
    {
      title: "Hello Doctor Austin",
      side: "right",
    },
    {
      title: "Hello Mr Stephen how are you ?",
      side: "left",
    },
    {
      title: "Whats Up?",
      side: "left",
    },
    {
      title: "I am fine doctor",
      side: "right",
    },
    {
      title: "Just my anckle has being disturbing me alot",
      side: "left",
    },
    {
      title: "Whats Up?",
      side: "right",
    },
    {
      title: "I am fine doctor",
      side: "left",
    },
    {
      title: "Just my anckle has being disturbing me alot",
      side: "left",
    },
    {
      title: "I am fine doctor",
      side: "right",
    },
    {
      title: "Just my anckle has being disturbing me alot",
      side: "right",
    },
    {
      title: "Hello Doctor Austin ",
      side: "right",
    },
    {
      title: "Hello Mr Stephen how are you ?",
      side: "left",
    },
    {
      title: "Hello Doctor Austin",
      side: "right",
    },
    {
      title: "Hello Mr Stephen how are you ?",
      side: "left",
    },
    {
      title: "Whats Up?",
      side: "left",
    },
    {
      title: "I am fine doctor",
      side: "right",
    },
    {
      title: "Just my anckle has being disturbing me alot",
      side: "left",
    },
    {
      title: "Whats Up?",
      side: "right",
    },
    {
      title: "I am fine doctor",
      side: "left",
    },
    {
      title: "Just my anckle has being disturbing me alot",
      side: "left",
    },
    {
      title: "I am fine doctor",
      side: "right",
    },
    {
      title: "Just my anckle has being disturbing me alot",
      side: "right",
    },
  ];

  return (
    <FlatList
      data={data}
      ListHeaderComponent={
        <Text
          style={[
            styles.day,
            {
              color:
                keepThemeValue === false
                  ? themeSettings.dark.DARK
                  : themeSettings.light.BCKG,
            },
          ]}
        >
          Today
        </Text>
      }
      renderItem={({ item }) => (
        <View>
          {item.side === "right" ? (
            <View style={styles.mainRight}>
              <View
                style={[
                  styles.rightContent,
                  {
                    backgroundColor:
                      keepThemeValue === false
                        ? themeSettings.light.PRIMARY
                        : themeSettings.dark.YELLOW,
                  },
                ]}
              >
                <Text style={[styles.rightContentText]}>{item.title} </Text>
              </View>
            </View>
          ) : (
            <View style={styles.mainLeft}>
              <View
                style={[
                  styles.leftContent,
                  {
                    backgroundColor:
                      keepThemeValue === false
                        ? themeSettings.light.CHAT_RECEIVER
                        : themeSettings.dark.CHAT_RECEIVER,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.leftContentText,
                    {
                      color: keepThemeValue === false ? "#000" : "#fff",
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
    />
  );
};

export default ConversationBox;
