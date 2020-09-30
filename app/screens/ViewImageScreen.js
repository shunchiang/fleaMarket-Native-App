import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";

const { primary, secondary, black } = colors;
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closedIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    flex: 1,
  },
  closedIcon: {
    width: 50,
    height: 50,
    backgroundColor: primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
