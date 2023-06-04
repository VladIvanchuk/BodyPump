import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import { global } from "../styles/global.style";
import ButtonPrimary from "../components/ui/ButtonPrimary";
import { COLORS } from "../constants";
import { Button, HeaderText } from "../components";
import { AntDesign } from "@expo/vector-icons";

const Custom = () => {
  return (
    <ScrollView
      style={[global.main, global.container]}
      showsVerticalScrollIndicator={false}
    >
      <Button onPress={() => console.log("Continue")}>
        <HeaderText size={20}>Create training</HeaderText>
        <AntDesign name="pluscircleo" size={24} color={COLORS.white} />
      </Button>
    </ScrollView>
  );
};

export default Custom;
