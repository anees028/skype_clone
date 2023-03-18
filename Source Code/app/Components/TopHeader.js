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
import ProfilePic from "./ProfilePic";
function TopHeader({ onPress, images, ...otherProp }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4 }}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileicon}>
        <ProfilePic source={require("../assets/User-Pic.jpg")} />
      </View>
      <View style={styles.listicon}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="video" size={25} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="text" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: "10%",
  },
  profileicon: {
    flex: 1,
    alignItems: "center",
  },
  listicon: {
    flex: 0.4,
    flexDirection: "row",
  },
});
export default TopHeader;
