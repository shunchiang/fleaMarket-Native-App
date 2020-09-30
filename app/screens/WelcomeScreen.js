import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import LoginButton from "../components/AppButton";

export default function LoginPage() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pexels-photo-3370153.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/mobileLogo.png")}
        />
        <Text style={styles.logoText}>Buy, Sell, Sustain</Text>
      </View>
      <View style={styles.loginBtnContainer}>
        <LoginButton title="Login"></LoginButton>
        <LoginButton title="Register" color="secondary"></LoginButton>
      </View>
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
    height: 130,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginBtnContainer: {
    width: "100%",
    padding: 20,
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
