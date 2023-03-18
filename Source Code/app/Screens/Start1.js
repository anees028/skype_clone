import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Screen from "../Components/Screen";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";

function Start1({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view2}>
          <Image
            source={require("../assets/skypelogo.png")}
            style={styles.logosize}
          ></Image>
        </View>
        <View style={styles.view2}>
          <AppText style={styles.text}>Welcome to Skype</AppText>
          <AppText style={styles.paragraph} numberOfLines={2}>
            Free HD video and voice calls anywhere in the worlds
          </AppText>
        </View>
        <View style={styles.view2}>
          <AppButton
            title="Let's Go"
            onPress={() => navigation.navigate("LetsGo")}
          ></AppButton>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logosize: {
    marginTop: 80,
    width: 85,
    height: 85,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 20,
    width: "70%",
    textAlign: "center",
  },
});
export default Start1;
