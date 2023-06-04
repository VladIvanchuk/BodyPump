import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderText from "../ui/HeaderText";
import { global } from "../../styles/global.style";
import AppText from "../ui/AppText";
import { COLORS } from "../../constants";
import { useGetHistoryQuery } from "../../api/historySlice";
import Placeholder from "../Placeholder";

const Total = () => {
  const { data = [], isLoading } = useGetHistoryQuery({});

  const totalTime = data.reduce((acc, session) => acc + session.time, 0);

  return (
    <>
      <View style={global.container}>
        <HeaderText>Total</HeaderText>
      </View>
      {isLoading ? (
        <Placeholder height={80} width={400} style={styles.placeholder} />
      ) : (
        <View style={[styles.section, global.container, styles.total]}>
          <View style={styles.item}>
            <AppText size={18}>Workouts</AppText>
            <HeaderText size={22} color={COLORS.bright}>
              {data.length}
            </HeaderText>
          </View>
          <View style={styles.item}>
            <AppText size={18}>Time(min)</AppText>
            <HeaderText size={22} color={COLORS.bright}>
              {totalTime}
            </HeaderText>
          </View>
          <View style={styles.item}>
            <AppText size={18}>Days</AppText>
            <HeaderText size={22} color={COLORS.bright}>
              3
            </HeaderText>
          </View>
        </View>
      )}
    </>
  );
};

export default Total;

const styles = StyleSheet.create({
  section: {
    backgroundColor: COLORS.darkEasy,
    paddingVertical: 20,
    marginVertical: 20,
  },
  total: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  item: {
    flex: 1,
  },
  placeholder: {
    backgroundColor: COLORS.darkEasy,
    marginVertical: 20,
  },
});
