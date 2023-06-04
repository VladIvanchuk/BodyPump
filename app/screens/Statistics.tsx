import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { global } from "../styles/global.style";
import { History, Total } from "../components";
import { COLORS } from "../constants";
import { useGetHistoryQuery } from "../api/historySlice";

const Statistics = () => {
  return (
    <ScrollView style={global.main} showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <Total />
        <History />
      </View>
    </ScrollView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 100,
  },
});
