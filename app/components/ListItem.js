import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import Apptext from "../components/AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <Apptext style={styles.title}>{title}</Apptext>
            {subTitle && <Apptext style={styles.subTitle}>{subTitle}</Apptext>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 17,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
});
