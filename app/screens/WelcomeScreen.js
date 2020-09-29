import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

export default function LoginPage() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/mobileLogo.png")}
        />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 160,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
