import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Gucci Leather Jacket for sale",
    price: 225,
    image: require("../assets/jacket.jpeg"),
  },
  {
    id: 2,
    title: "Young Succullent Plants",
    price: 8,
    image: require("../assets/plants.jpeg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
