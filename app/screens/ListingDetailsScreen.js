import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Apptext from "../components/AppText";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpeg")} />
      <View style={styles.detailsContainer}>
        <Apptext style={styles.title}>Gucci Leather Jacket</Apptext>
        <Apptext style={styles.price}>$225</Apptext>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
  },
  price: {
    color: colors.secondary,
  },
});
