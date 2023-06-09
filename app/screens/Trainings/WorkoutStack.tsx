import { BackHandler, ImageBackground, Pressable, StyleSheet, View } from "react-native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { IDay } from "../../types/training";
import Timer from "../../components/Timer";
import HeaderText from "../../components/ui/HeaderText";
import { COLORS } from "../../constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { QuitModal } from "../../components";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

interface IPropTypes {
  route: {
    params: IDay;
  };
}

const WorkoutStack: FC<IPropTypes> = ({ route }) => {
  const exercises = route.params.trainingExercises;
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "WorkoutStack">>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const { exercise, repeats, sets, restTime } = exercises?.[currentIndex] || {};

  const [restingTime, setRestTime] = useState(restTime);
  const [currentReps, setCurrentReps] = useState(repeats);
  const [isResting, setIsResting] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);

  const isLastSet = currentSet === sets;
  const isLastWorkout = currentIndex === exercises.length - 1 && isLastSet;

  const handleComplete = useCallback(() => {
    if (currentIndex <= exercises.length - 1 && !isLastWorkout) {
      if (isLastSet) {
        setCurrentIndex(currentIndex + 1);
        setCurrentSet(1);
      } else {
        setCurrentSet(currentSet + 1);
      }
      setIsResting(true);
      setRestTime(restingTime);
    } else if (isLastWorkout) {
      navigation.navigate("Statistics");
    }
  }, [currentIndex, currentSet, exercises, restingTime, sets]);

  const handleSkipRest = useCallback(() => {
    setIsResting(false);
    setRestTime(0);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setCurrentSet(1);
  }, []);

  const handleNavigation = useCallback(
    (delta: number) => {
      if (currentIndex + delta >= 0 && currentIndex + delta < exercises.length) {
        setIsResting(false);
        setCurrentIndex(currentIndex + delta);
        setCurrentSet(1);
        setRestTime(exercises[currentIndex + delta].rest);
      }
    },
    [currentIndex, exercises]
  );
  const handleReps = useCallback(
    (delta: number) => {
      if (currentReps + delta >= 0) {
        setCurrentReps(currentReps + delta);
      }
    },
    [currentReps]
  );

  useEffect(() => {
    const backAction = () => {
      setModalVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <View style={s.modal}>
      {!isResting ? (
        <>
          <Pressable onPress={() => setModalVisible(true)} style={s.back}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </Pressable>
          <View style={s.imageBg}>
            <ImageBackground
              source={{
                uri: `data:image/png;base64,${exercise.image}`,
              }}
              resizeMode="contain"
            >
              <View style={s.image}></View>
            </ImageBackground>
          </View>
          <View style={s.info}>
            <HeaderText size={24}>{exercise.name}</HeaderText>
            <View style={s.count}>
              <View style={s.reps}>
                <Pressable style={s.reps_control} onPress={() => handleReps(-1)}>
                  <AntDesign name="minus" size={25} color={COLORS.bright} />
                </Pressable>
                <HeaderText size={24}>{currentReps} Reps</HeaderText>
                <Pressable style={s.reps_control} onPress={() => handleReps(1)}>
                  <AntDesign name="plus" size={25} color={COLORS.bright} />
                </Pressable>
              </View>
              <HeaderText size={20}>
                Set {currentSet}/{sets}
              </HeaderText>
            </View>
            <ButtonPrimary tittle="Completed" onPress={handleComplete} />
          </View>
          <View style={s.bottom}>
            <Pressable onPress={() => handleNavigation(-1)}>
              <HeaderText color={COLORS.white}>
                <AntDesign name="stepbackward" size={20} color={COLORS.white} /> Previous
              </HeaderText>
            </Pressable>
            <Pressable onPress={() => handleNavigation(1)}>
              <HeaderText color={COLORS.white}>
                Skip <AntDesign name="stepforward" size={20} color={COLORS.white} />
              </HeaderText>
            </Pressable>
          </View>
        </>
      ) : (
        <Timer
          time={restTime}
          handleSkip={handleSkipRest}
          data={exercises[currentIndex]}
          currentSet={currentSet}
          paused={modalVisible}
        />
      )}
      {modalVisible && (
        <QuitModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleRestart={handleRestart}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default WorkoutStack;

const s = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    height: 300,
  },
  imageBg: {
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  back: {
    marginRight: 10,
  },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  start: {
    backgroundColor: COLORS.primaryEasy,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  count: {
    justifyContent: "center",
    alignItems: "center",
  },
  reps: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  reps_control: {
    backgroundColor: COLORS.primaryEasy,
    borderRadius: 100,
    marginHorizontal: 20,
    padding: 5,
  },
});
