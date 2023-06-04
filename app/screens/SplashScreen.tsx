import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { COLORS, images } from "../constants";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.general.splash} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.dark,
  },
});
