import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
import HeaderText from "./HeaderText";

interface IButtonPropTypes {
  children: React.ReactNode;
  onPress?: () => void;
  style?: {};
}
const Button: FC<IButtonPropTypes> = ({ onPress, style, children }) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        start={[0, 0]}
        end={[1, 0]}
        style={[styles.gradient, { ...style }]}
      >
        {children}
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  gradient: {
    backgroundColor: "linear-gradient(270deg, #5D51D9 0%, #395ADB 100%);",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
