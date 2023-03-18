import React from "react";
import AppText from "../AppText";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.errortext}>{error}</Text>;
}
const styles = StyleSheet.create({
  errortext: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
export default ErrorMessage;
