import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Apptext from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpeg")} />
      <View style={styles.detailsContainer}>
        <Apptext style={styles.title}>Gucci Leather Jacket</Apptext>
        <Apptext style={styles.price}>$225</Apptext>
        <View style={styles.sellerContainer}>
          <ListItem
            image={require("../assets/faceImg.jpg")}
            title="Shun C."
            subTitle="12 listings"
          />
        </View>
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
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black,
  },
  price: {
    color: colors.secondary,
    marginTop: 5,
  },
  sellerContainer: {
    marginVertical: 30,
  },
});
