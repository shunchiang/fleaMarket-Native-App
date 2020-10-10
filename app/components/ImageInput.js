import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri ? (
        <MaterialCommunityIcons color={colors.medium} name="camera" />
      ) : (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    birderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
