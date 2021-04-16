//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// create a component
const MiddleContent = () => {
  const Data = [
    {
      key: 1,
      icon: 'lock-open',
      name: 'Bone',
      name2: 'Specialist',
      bckg: '#1dc3c3',
    },
    {
      key: 2,
      icon: 'lock-open',
      name: 'Dental',
      name2: 'Care',
    },
    {
      key: 3,
      icon: 'lock-open',
      name: 'Cardio',
      name2: 'specialist',
    },
    {
      key: 4,
      icon: 'lock-open',
      name: 'Radio',
      name2: 'Screening',
    },
  ];
  return (
    <View>
      <FlatList
        data={Data}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item.bckg || 'rgba(223, 220, 220, 0.51)',
                paddingVertical: 7,
                paddingHorizontal: 9,
                margin: 7,
                borderRadius: 12,
                borderBottomLeftRadius: 15,
              }}
            >
              <View style={styles.iconic}>
                <Icon
                  name={item.icon}
                  size={28}
                  color={item.bckg ? 'white' : 'rgba(29, 195, 195, 1)'}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: item.bckg ? 'white' : 'rgba(29, 195, 195, 1)',
                  textAlign: 'center',
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: item.bckg ? 'white' : 'rgba(29, 195, 195, 1)',
                  textAlign: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MiddleContent;
