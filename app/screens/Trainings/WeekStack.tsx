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
import { Button, Placeholder } from "../../components";
import { useGetTrainingPlanByIdQuery } from "../../api/trainingPlan";

const WeekStack: FC = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const { data: trainingPlan, isLoading } = useGetTrainingPlanByIdQuery(id);

  const numberOfWeeks = Math.ceil(trainingPlan?.trainings.length / 3);

  const weeks = Array.from({ length: numberOfWeeks }, (_, index) => {
    return {
      id: index + 1,
      trainings: trainingPlan?.trainings.slice(index * 3, (index + 1) * 3),
    };
  });

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
            <HeaderText>{trainingPlan?.name}</HeaderText>
          </View>

          <Button style={{ margin: 20 }} onPress={() => console.log("Continue")}>
            <HeaderText>Continue</HeaderText>
            <AntDesign name="caretright" size={20} color={COLORS.white} />
          </Button>
        </ImageBackground>
      </View>
      {isLoading ? (
        <>
          <Placeholder height={80} width={320} style={s.placeholder} />
          <Placeholder height={80} width={320} style={s.placeholder} />
          <Placeholder height={80} width={320} style={s.placeholder} />
          <Placeholder height={80} width={320} style={s.placeholder} />
          <Placeholder height={80} width={320} style={s.placeholder} />
        </>
      ) : (
        <FlatList
          data={weeks}
          renderItem={({ item, index }) => (
            <Week
              number={index + 1}
              trainings={item.trainings}
              allTrainings={trainingPlan?.trainings}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={s.body}
          showsVerticalScrollIndicator={false}
        />
      )}
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
  placeholder: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    width: "auto",
    marginVertical: 10,
  },
});
