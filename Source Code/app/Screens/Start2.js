import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import { NavigationContainer } from "@react-navigation/native";

function Start2({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view}>
          <Image
            style={styles.logo}
            source={require("../assets/skypelogo.png")}
          />
        </View>
        <View style={styles.view}>
          <AppText style={styles.text}>Let's get started</AppText>
        </View>
        <View style={[styles.view3, { marginTop: 80 }]}>
          <AppButton
            title="Sign in or Create"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
        <View style={styles.view3}>
          <Text style={[styles.smalltext, { marginBottom: 40 }]}>
            Use your Skype or Microsoft Account.
          </Text>
        </View>
        <View style={styles.view}>
          <Image
            style={styles.mlogo}
            source={require("../assets/microsoft.png")}
          />
          <Text style={[styles.smalltext, { marginTop: 10, opacity: 0.6 }]}>
            Skype cannot be used for emergency calling.
          </Text>
          <Text style={[styles.smalltext, { marginTop: 10, opacity: 0.6 }]}>
            8.2.1
          </Text>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 40,
  },
  view2: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 140,
  },
  text: {
    fontSize: 33,
    fontWeight: "bold",
    marginTop: 110,
  },
  smalltext: {
    fontSize: 11,
  },
  mlogo: {
    height: "20%",
    width: "40%",
  },
});
export default Start2;
