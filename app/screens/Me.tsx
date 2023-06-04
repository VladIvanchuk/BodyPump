import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { global } from "../styles/global.style";
import { Button, HeaderText } from "../components";
import { COLORS } from "../constants";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const Me = () => {
  return (
    <ScrollView
      style={[global.main, global.container]}
      showsVerticalScrollIndicator={false}
    >
      <HeaderText size={24}>Hello {"Username"}</HeaderText>

      <Button style={styles.button}>
        <HeaderText size={20}>My profile</HeaderText>
        <Ionicons name="person" size={24} color={COLORS.white} />
      </Button>
      <Button style={styles.button}>
        <HeaderText size={20}>Settings</HeaderText>
        <FontAwesome name="gear" size={24} color={COLORS.white} />
      </Button>
      <Button style={styles.button}>
        <HeaderText size={20}>Log out</HeaderText>
        <AntDesign name="logout" size={24} color={COLORS.white} />
      </Button>
    </ScrollView>
  );
};

export default Me;

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    paddingVertical: 18,
  },
});
