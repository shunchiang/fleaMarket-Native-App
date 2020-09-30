import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children, style }) {
  return <Text stlye={[stlye.text, style]}>{children}</Text>;
}


const styles = StyleSheet.create({
  text: {
    color: "tomato",
    
...Platform.select({
    ios: {
        fontSize: 20,
        fontFamily= "Avenir"
    },
    android:{
        fontSize: 18,
        fontFamily: "Roboto"
    }
})   
  },
});
