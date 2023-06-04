import { StyleSheet, View, SafeAreaView, Pressable, FlatList, Modal } from "react-native";
import React, { FC, useState } from "react";
import { IDay } from "../../types";
import { COLORS } from "../../constants";
import HeaderText from "../../components/ui/HeaderText";
import AppText from "../../components/ui/AppText";
import { Feather, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ITraining } from "../../types/training";
import WorkoutInfo from "../../components/Weekly/WorkoutInfo";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";

interface IPropTypes {
  route: {
    params: IDay;
  };
}
const DayStack = ({ route }: IPropTypes) => {
  const navigation = useNavigation();
  const { name, trainingExercises, kcal, time } = route.params;

  return (
    <SafeAreaView style={s.modal}>
      <View style={s.header}>
        <View style={s.tittle}>
          <Pressable onPress={() => navigation.goBack()} style={s.back}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </Pressable>
          <HeaderText>{name}</HeaderText>
        </View>
        <View style={s.info}>
          <View style={s.info_item}>
            <Feather
              name="check-circle"
              style={s.info_icon}
              size={22}
              color={COLORS.white}
            />
            <HeaderText>{trainingExercises.length}</HeaderText>
            <AppText size={16}>work</AppText>
          </View>
          <View style={s.info_item}>
            <MaterialIcons
              name="local-fire-department"
              style={s.info_icon}
              size={22}
              color={COLORS.white}
            />
            <HeaderText>{kcal}</HeaderText>
            <AppText size={16}>Kcal</AppText>
          </View>
          <View style={s.info_item}>
            <Entypo name="stopwatch" style={s.info_icon} size={22} color={COLORS.white} />
            <HeaderText>{time}</HeaderText>
            <AppText size={16}>min</AppText>
          </View>
        </View>
      </View>
      <FlatList
        data={trainingExercises}
        renderItem={({ item }) => <WorkoutInfo training={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <ButtonPrimary
        style={s.start}
        tittle="Start"
        onPress={() => navigation.navigate("WorkoutStack", { trainingExercises })}
      />
    </SafeAreaView>
  );
};

export default DayStack;

const s = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    borderColor: COLORS.dark,
    borderBottomWidth: 1,
  },
  tittle: {
    flexDirection: "row",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 20,
  },
  info_item: {
    backgroundColor: COLORS.primary,
    width: "30%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 13,
  },
  info_icon: {
    marginBottom: 7,
  },
  back: {
    marginRight: 10,
  },
  start: {
    marginVertical: 10,
  },
});
