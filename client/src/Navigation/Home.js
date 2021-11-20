//import liraries
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigation from "./BottomNavigation";
import DrawerContent from "../Components/DrawerContent/DrawerContent.component";

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent />}
    >
      <Drawer.Screen name="Home" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Home;
