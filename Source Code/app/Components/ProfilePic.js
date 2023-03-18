import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ProfilePic({ source }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "23%",
    height: "80%",
    borderRadius: 40,
    //backgroundColor: "white",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
});
export default ProfilePic;
