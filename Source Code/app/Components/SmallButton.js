import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function SmallButton({
  title,
  onPress,
  color = "white",
  backgroundColor = colors.skypeblue,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        (backgroundColor = { backgroundColor }),
        { ...otherProps },
      ]}
      onPress={onPress}
      // {...otherProps}
    >
      <Text style={([styles.title], (color = { color }))} {...otherProps}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 130,
    //backgroundColor: "dodgerblue",
    borderRadius: 6,
    justifyContent: "center",
    marginRight: 10,
    alignItems: "center",
  },
});
export default SmallButton;
