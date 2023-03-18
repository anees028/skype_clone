import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EAEBEE",
    marginBottom: 0,
    marginTop: 0,
  },
});

export default ListItemSeparator;
