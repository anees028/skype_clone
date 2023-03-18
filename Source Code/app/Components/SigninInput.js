import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ErrorMessage from "./Forms/ErrorMessage";

import { useFormikContext } from "formik";
import defaultStyles from "../config/styles";

function SigninInput({ name, width, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: defaultStyles.colors.white,
    borderBottomWidth: 1,
    flexDirection: "row",
    marginTop: 6,
    //padding: 12,
    //marginVertical: 8,
  },
});
export default SigninInput;
