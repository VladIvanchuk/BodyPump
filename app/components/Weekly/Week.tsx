import React, { FC, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { COLORS } from "../../constants";

import data from "../../mock/weekPlan.json";
import HeaderText from "../ui/HeaderText";
import AppText from "../ui/AppText";
import Day from "./Day";
import { IDay } from "../../types";
import { useNavigation } from "@react-navigation/native";

interface IPropTypes {
  number: number;
}

const Week: FC<IPropTypes> = ({ number }) => {
  const navigation = useNavigation();

  const handleDayPress = (day: IDay) => {
    navigation.navigate("DayStack", day);
  };

  return (
    <View style={s.item}>
      <View style={s.tittle}>
        <View style={s.flag}>
          <Entypo name="flag" size={20} color={COLORS.primary} />
        </View>
        <HeaderText>Week {number}</HeaderText>
        <View style={s.count}>
          <AppText size={18}>0/7</AppText>
        </View>
      </View>
      <View style={s.days}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Day {...item} onPress={() => handleDayPress(item)} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Week;

const s = StyleSheet.create({
  item: {
    marginBottom: 20,
  },
  tittle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  flag: {
    width: 27,
    height: 27,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  days: {
    marginVertical: 20,
  },
  count: {
    position: "absolute",
    right: 0,
  },
});
