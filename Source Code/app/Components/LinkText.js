import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import defaultStyles from "../config/styles";

function LinkText({
  title,
  onPress,
  children,
  style,
  //marginBottom,
  color = "dodgerblue",
  ...otherProps
}) {
  return (
    <TouchableOpacity style={{ marginBottom: 25 }}>
      <Text
        style={([defaultStyles.text, style], (color = { color }))}
        {...otherProps}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default LinkText;
