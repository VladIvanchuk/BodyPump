import { StyleSheet, View } from "react-native";
import React, { FC } from "react";

const Overlay = () => {
  return <View style={s.overlay}></View>;
};

export default Overlay;

const s = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
});
