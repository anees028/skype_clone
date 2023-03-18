import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import AppForm from "../Components/Forms/AppForm";
import AppText from "../Components/AppText";
import SmallButton from "../Components/SmallButton";
import SigninInput from "../Components/SigninInput";
import * as Yup from "yup";
import LinkText from "../Components/LinkText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Start3(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image
            style={styles.image}
            source={require("../assets/skypelogo.png")}
          />
        </View>
        <View style={styles.view2}>
          <View style={styles.miniview}>
            <Image
              style={styles.microsoftlogo}
              source={require("../assets/microsoft.png")}
            />
            <AppText style={styles.headingtext}>Sign in</AppText>
            <AppText style={styles.smalltext}>to continue to Skype</AppText>
          </View>
          <View style={styles.miniview}>
            <AppForm
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <SigninInput
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                //icon="email"
                keyboardType="email-address"
                placeholder="Skype, phone or email "
                textContentType="emailAddress" //Only work in IOS for storing email as keychain
              />
              <SigninInput
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                //icon="email"
                keyboardType="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password" //Only work in IOS for storing email as keychain
              />
            </AppForm>
          </View>
          <View style={styles.miniview}>
            <AppText style={[styles.smalltext]}>No account ?</AppText>
            <LinkText title="Sign-in option ?" style={styles.linkingtext} />
          </View>
        </View>
        <View style={styles.viewbuttons}>
          <SmallButton title="Next"></SmallButton>
          <SmallButton
            title="Cancel"
            backgroundColor="darkgray"
            color="black"
          ></SmallButton>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  view1: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: "6%",
  },
  image: {
    width: 50,
    height: 50,
  },
  view2: {
    flex: 1.5,
    justifyContent: "flex-start",
    marginTop: "5%",
    //marginLeft: "4%",
    paddingLeft: "4%",
  },
  miniview: {
    flex: 1,
  },
  microsoftlogo: {
    height: "25%",
    width: "32%",

    marginLeft: -15,
    //marginTop: -5,
  },
  headingtext: {
    fontSize: 27,
    fontWeight: "bold",
  },
  smalltext: {
    fontSize: 16,
    //marginBottom: 23,
    paddingBottom: 5,
  },
  viewbuttons: {
    flex: 0.5,
    flexDirection: "row-reverse",
    flexShrink: 1,
  },
  linkingtext: {
    fontWeight: "bold",
  },
});
export default Start3;
