import React from "react";
import defaultColors from "../config/styles";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  onPress,
} from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "skypeblue", ...otherProp }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
      {...otherProp}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.skypeblue,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    //alignSelf: "center",
    width: "60%",
    height: 40,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
