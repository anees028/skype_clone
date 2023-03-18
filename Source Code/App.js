import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Start1 from "./app/Screens/Start1";
// import Start2 from "./app/Screens/Start2";
// import Start3 from "./app/Screens/Start3";
// import Screen4 from "./app/Screens/Screen4";
import Contacts from "./app/Screens/Contacts";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
//import Start1 from "../Screens/Start1";
//import Start2 from "../Screens/Start2";
//import Start3 from "../Screens/Start3";

export default function App() {
  return (
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>
    <Contacts />
  );
}
