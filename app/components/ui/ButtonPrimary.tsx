import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import HeaderText from "./HeaderText";
import { COLORS } from "../../constants";

interface IButtonPropTypes {
  tittle?: string;
  onPress: () => void;
  style?: {};
}
const ButtonPrimary: FC<IButtonPropTypes> = ({ tittle, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: COLORS.primaryEasy,
          width: "80%",
          alignSelf: "center",
          paddingVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        },
        { ...style },
      ]}
    >
      <HeaderText color={COLORS.bright}>{tittle}</HeaderText>
    </Pressable>
  );
};

export default ButtonPrimary;
