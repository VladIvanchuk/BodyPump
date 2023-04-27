import React, { FC, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { COLORS } from "../../constants";

import data from "../../mock/weekPlan.json";
import HeaderText from "../ui/HeaderText";
import AppText from "../ui/AppText";
import Day from "./Day";
import { IDay } from "../../types";
import DayModal from "./DayModal";

interface IPropTypes {
  number: number;
}

const Week: FC<IPropTypes> = ({ number }) => {
  const [selectedDay, setSelectedDay] = useState<IDay | null>(null);

  const handleDayPress = (day: IDay) => {
    setSelectedDay(day);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedDay !== null}
        onRequestClose={() => {
          setSelectedDay(null);
        }}
      >
        {selectedDay && <DayModal setState={setSelectedDay} selectedDay={selectedDay} />}
      </Modal>
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
