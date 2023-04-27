import {
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  Modal,
  Text,
} from "react-native";
import React, { FC, useState } from "react";
import { IDay } from "../../types";
import { COLORS } from "../../constants";
import HeaderText from "../ui/HeaderText";
import AppText from "../ui/AppText";
import { Feather, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ITraining } from "../../types/training";
import Workout from "./Workout";
import WorkoutInfo from "./WorkoutInfo";
import ButtonPrimary from "../ui/ButtonPrimary";

interface IPropTypes {
  selectedDay: IDay;
  setState: React.Dispatch<React.SetStateAction<IDay | null>>;
}

const DayModal: FC<IPropTypes> = ({ setState, selectedDay }) => {
  const [trainingStatus, setTrainingStatus] = useState<boolean>(false);
  const { title, trainings } = selectedDay;
  const trainingsData = trainings.map((training: ITraining) => training);

  return (
    <SafeAreaView style={s.modal}>
      <View style={s.header}>
        <View style={s.tittle}>
          <Pressable onPress={() => setState(null)} style={s.back}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </Pressable>
          <HeaderText>{title}</HeaderText>
        </View>
        <View style={s.info}>
          <View style={s.info_item}>
            <Feather
              name="check-circle"
              style={s.info_icon}
              size={22}
              color={COLORS.white}
            />
            <HeaderText>8</HeaderText>
            <AppText size={16}>work</AppText>
          </View>
          <View style={s.info_item}>
            <MaterialIcons
              name="local-fire-department"
              style={s.info_icon}
              size={22}
              color={COLORS.white}
            />
            <HeaderText>230</HeaderText>
            <AppText size={16}>Kcal</AppText>
          </View>
          <View style={s.info_item}>
            <Entypo name="stopwatch" style={s.info_icon} size={22} color={COLORS.white} />
            <HeaderText>10</HeaderText>
            <AppText size={16}>min</AppText>
          </View>
        </View>
      </View>
      <FlatList
        data={trainingsData}
        renderItem={({ item }) => <WorkoutInfo training={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <ButtonPrimary
        style={s.start}
        tittle="Start"
        onPress={() => setTrainingStatus(true)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={trainingStatus}
        onRequestClose={() => {
          setTrainingStatus(false);
        }}
      >
        <Workout setState={setTrainingStatus} exercises={trainings} />
      </Modal>
    </SafeAreaView>
  );
};

export default DayModal;

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
