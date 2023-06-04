import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants";
import HeaderText from "./ui/HeaderText";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { ITraining } from "../types/training";
import AppText from "./ui/AppText";

interface TimerProps {
  time: number;
  handleSkip: () => void;
  exercise: ITraining;
  currentSet: number;
  paused?: boolean;
}

const Timer: React.FC<TimerProps> = ({ time, handleSkip, currentSet, data, paused }) => {
  const [seconds, setSeconds] = useState(time);
  const { exercise, repeats, sets } = data;

  const handleAddTime = () => {
    setSeconds(seconds + 15);
  };

  return (
    <View style={s.container}>
      <View style={s.top}></View>
      <CountdownCircleTimer
        isPlaying={!paused}
        size={190}
        duration={seconds}
        strokeWidth={10}
        trailStrokeWidth={8}
        colors="#395ADB"
        trailColor="rgba(57, 90, 219, 0.30)"
        rotation="counterclockwise"
        onComplete={() => {
          handleSkip();
        }}
      >
        {({ remainingTime }) => <HeaderText size={24}>{remainingTime} S</HeaderText>}
      </CountdownCircleTimer>
      <View style={s.buttons}>
        <Pressable style={s.add} onPress={handleAddTime}>
          <HeaderText color={COLORS.primary}>+15s</HeaderText>
        </Pressable>
        <Pressable style={s.skip} onPress={handleSkip}>
          <HeaderText color={COLORS.primary}>Skip</HeaderText>
        </Pressable>
      </View>
      <View style={s.bottom}>
        <AppText color={COLORS.dark}>Next</AppText>
        <HeaderText color={COLORS.dark}>{exercise.name}</HeaderText>
        <View style={s.info}>
          <HeaderText color={COLORS.dark}>{repeats} Reps</HeaderText>
          <HeaderText color={COLORS.dark}>
            Set {currentSet}/{sets}
          </HeaderText>
        </View>
      </View>
    </View>
  );
};

export default Timer;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  top: {
    marginTop: 200,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  skip: {
    backgroundColor: COLORS.primaryEasy,
    padding: 20,
    alignSelf: "center",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  add: {
    marginRight: 50,

    backgroundColor: COLORS.white,
    padding: 20,
    alignSelf: "center",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bottom: {
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: 10,
    bottom: 20,
    padding: 20,
    width: "100%",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
