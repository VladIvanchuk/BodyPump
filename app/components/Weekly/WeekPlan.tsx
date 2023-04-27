import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Pressable, Modal } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

import { COLORS, images } from "../../constants";
import WeekModal from "./WeekModal";
import HeaderText from "../ui/HeaderText";
import Overlay from "../ui/Overlay";
import AppText from "../ui/AppText";

const WeekPlan = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={s.body}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <WeekModal state={modalVisible} setState={setModalVisible} />
      </Modal>
      <View style={s.container}>
        <HeaderText>Weekly training plan</HeaderText>
      </View>
      <Pressable onPress={() => setModalVisible(true)} style={s.wrapper}>
        <ImageBackground
          source={images.trainings.gym}
          style={s.image}
          imageStyle={{
            borderRadius: 10,
          }}
        >
          <Overlay />

          <View style={s.item}>
            <View style={s.top}>
              <View style={s.dsc}>
                <AppText size={16}>
                  Exercises for different muscle groups 3 days a week
                </AppText>
              </View>
              <AntDesign name="calendar" size={30} color={COLORS.primary} />
            </View>
            <View style={s.bottom}>
              <View style={s.time}>
                <HeaderText>20-40</HeaderText>
                <Entypo name="time-slot" size={18} color={COLORS.white} style={s.clock} />
              </View>
              <View style={s.start}>
                <AntDesign name="caretright" size={28} color={COLORS.white} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default WeekPlan;

const s = StyleSheet.create({
  body: {
    marginBottom: 25,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  wrapper: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  image: {
    borderRadius: 10,
    flex: 1,
    resizeMode: "cover",
  },
  item: {
    height: 200,
    width: "100%",
    padding: 15,
  },
  start: {
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dsc: {
    width: "80%",
  },
  bottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
  },
  clock: {
    marginHorizontal: 10,
  },
});
