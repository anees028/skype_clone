import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Start1 from "../Screens/Start1";
import Start2 from "../Screens/Start2";
import Start3 from "../Screens/Start3";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={Start1}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Start1" component={Start1} />
    <Stack.Screen name="LetsGo" component={Start2} />
    <Stack.Screen name="SignIn" component={Start3} />
  </Stack.Navigator>
);

export default AuthNavigator;
