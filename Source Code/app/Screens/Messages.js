import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../Components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Uni Friend 1",
    description: "Hello this is you captian speaking...",
    image: require("../assets/User-Pic.jpg"),
  },
  {
    id: 2,
    title: "Ali  2",
    description: "I am wating for your reply....",
    //image: require("../assets/User-Pic.jpg"),
  },
  {
    id: 3,
    title: "M. Ozil",
    description: "Going to play PUBG.. ",
    image: require("../assets/User-Pic.jpg"),
  },
  {
    id: 4,
    title: "Uni Friend 1",
    description: "Hello this is you captian speaking...",
    image: require("../assets/User-Pic.jpg"),
  },
  {
    id: 5,
    title: "Ali  2",
    description: "I am wating for your reply....",
    //image: require("../assets/User-Pic.jpg"),
  },
  {
    id: 6,
    title: "M. Ozil",
    description: "Going to play PUBG.. ",
    image: require("../assets/User-Pic.jpg"),
  },
];

function Messages(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  // const count = array[0];
  // const setCount = array[1]; //setState is a function in class component.

  const handleDelete = (message) => {
    //Delete the message.
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    //Call the server, delete the message. while learning backend
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            //showChevron={true}
            onPress={() => console.log("Message Pressed by ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/User-Pic.jpg"),
            },
            {
              id: 4,
              title: "Uni Friend 1",
              description: "Hello this is you captian speaking...",
              image: require("../assets/User-Pic.jpg"),
            },
            {
              id: 5,
              title: "Ali  2",
              description: "I am wating for your reply....",
              //image: require("../assets/User-Pic.jpg"),
            },
            {
              id: 1,
              title: "M. Ozil",
              description: "Going to play PUBG.. ",
              image: require("../assets/User-Pic.jpg"),
            },
          ]);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default Messages;
