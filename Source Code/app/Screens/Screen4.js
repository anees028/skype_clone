import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";

// const initialMessages = [
//   {
//     id: 1,
//     title: "Uni Friend 1",
//     description: "Hello this is you captian speaking...",
//     image: require("../assets/User-Pic.jpg"),
//   },
//   {
//     id: 2,
//     title: "Ali  2",
//     description: "I am wating for your reply....",
//     //image: require("../assets/User-Pic.jpg"),
//   },
//   {
//     id: 3,
//     title: "M. Ozil",
//     description: "Going to play PUBG.. ",
//     image: require("../assets/User-Pic.jpg"),
//   },
//   {
//     id: 4,
//     title: "Uni Friend 1",
//     description: "Hello this is you captian speaking...",
//     image: require("../assets/User-Pic.jpg"),
//   },
//   {
//     id: 5,
//     title: "Ali  2",
//     description: "I am wating for your reply....",
//     //image: require("../assets/User-Pic.jpg"),
//   },
//   {
//     id: 6,
//     title: "M. Ozil",
//     description: "Going to play PUBG.. ",
//     image: require("../assets/User-Pic.jpg"),
//   },
// ];

function Test4(props) {
  // const [messages, setMessages] = useState(initialMessages);
  // const [refreshing, setRefreshing] = useState(false);
  // // const count = array[0];
  // // const setCount = array[1]; //setState is a function in class component.

  // const handleDelete = (message) => {
  //   //Delete the message.
  //   const newMessages = messages.filter((m) => m.id !== message.id);
  //   setMessages(newMessages);
  //   //Call the server, delete the message. while learning backend
  // };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view1}>
          <TopHeader />
        </View>
        <View style={styles.view2}></View>
        <View style={styles.view3}>
          <Footer />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  view1: { flex: 0.4 },
  view2: { flex: 3.6 },
  view3: { flex: 0.4 },
});
export default Test4;
