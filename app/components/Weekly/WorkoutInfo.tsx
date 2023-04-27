import { ImageBackground, StyleSheet, Image, View } from "react-native";
import React from "react";
import HeaderText from "../ui/HeaderText";
import AppText from "../ui/AppText";
import { COLORS } from "../../constants";
import { ITraining } from "../../types/training";

const WorkoutInfo = ({ training }: { training: ITraining }) => {
  return (
    <View key={training.id} style={s.item}>
      <View style={s.text}>
        <HeaderText size={18}>{training.title}</HeaderText>
        <AppText>
          {training.sets} Sets x {training.reps} Reps
        </AppText>
      </View>
      <ImageBackground source={{ uri: training.img }} resizeMode="contain">
        <View style={s.image}></View>
      </ImageBackground>
    </View>
  );
};

export default WorkoutInfo;

const s = StyleSheet.create({
  item: {
    marginBottom: 15,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: COLORS.dark,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    width: "58%",
  },
  image: {
    width: 120,
  },
});
