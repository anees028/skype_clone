import React from "react";
import defaultColors from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  onPress,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";

function Footer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewicons}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chat"
            size={26}
            color={colors.skypeblue}
            style={styles.icon}
          />
          <Text>Chats</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewicons}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="phone" size={26} style={styles.icon} />
          <Text>Phone</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewicons}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="contacts"
            size={26}
            style={styles.icon}
          />
          <Text>Contacts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  viewicons: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    textAlign: "center",
  },
});
export default Footer;
