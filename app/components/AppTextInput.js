import React from "react";
import { StyleSheet, TextInput, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...props }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
      <TextInput style={defaultStyles.text} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
});
