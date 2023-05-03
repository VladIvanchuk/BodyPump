import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import React, { FC } from "react";

import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, images } from "../../constants";
import Overlay from "../../components/ui/Overlay";
import HeaderText from "../../components/ui/HeaderText";
import Week from "../../components/Weekly/Week";
import { useNavigation } from "@react-navigation/native";

const WeekStack: FC = () => {
  const weeks = [...Array(4)].map((_, index) => ({ id: index + 1 }));
  const navigation = useNavigation();

  return (
    <SafeAreaView style={s.centeredView}>
      <View style={s.top}>
        <ImageBackground
          source={images.trainings.gym}
          imageStyle={{
            borderRadius: 10,
          }}
        >
          <Overlay />
          <View style={s.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={COLORS.white} />
            </Pressable>
            <HeaderText>Weekly training</HeaderText>
          </View>

          <LinearGradient
            colors={[COLORS.primary, COLORS.secondary]}
            start={[0, 0]}
            end={[1, 0]}
            style={s.continue}
          >
            <HeaderText>Continue</HeaderText>
            <AntDesign name="caretright" size={20} color={COLORS.white} />
          </LinearGradient>
        </ImageBackground>
      </View>
      <FlatList
        data={weeks}
        renderItem={({ item }) => <Week number={item.id} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={s.body}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default WeekStack;

const s = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  top: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  day: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  continue: {
    backgroundColor: "linear-gradient(270deg, #5D51D9 0%, #395ADB 100%);",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    margin: 15,
  },
});
