import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderText from "../ui/HeaderText";
import AppText from "../ui/AppText";

const HistoryItem = ({ top, bottom }: { top: number | string; bottom: string }) => {
  return (
    <View style={styles.item}>
      <HeaderText size={17}>{top}</HeaderText>
      <AppText size={17}>{bottom}</AppText>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
});
