import React, { useEffect, useState, FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import CircularProgress from "react-native-circular-progress-indicator";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../constants";
import AppText from "../ui/AppText";

import { IDay } from "../../types";
import HeaderText from "../ui/HeaderText";

const Day = (props: IDay & { onPress: () => void }) => {
  const [IsActive, setIsActive] = useState(false);
  const { name, description, progress, onPress, previousProgress } = props;

  useEffect(() => {
    if (previousProgress === 100) {
      setIsActive(true);
    }
  }, [previousProgress]);

  return (
    <Pressable
      onPress={onPress}
      style={[
        s.day,
        { backgroundColor: IsActive && progress < 100 ? COLORS.primary : COLORS.dark },
      ]}
    >
      <View style={s.info}>
        <AppText size={18}>{name}</AppText>
        <AppText size={14}>{description}</AppText>
      </View>
      {progress < 100 && !IsActive ? (
        <CircularProgress
          radius={27}
          value={progress}
          valueSuffix={"%"}
          activeStrokeColor={COLORS.primary}
          activeStrokeSecondaryColor={COLORS.secondary}
          inActiveStrokeColor={COLORS.primary}
          progressValueColor={COLORS.primary}
          inActiveStrokeOpacity={0.2}
          activeStrokeWidth={6}
        />
      ) : IsActive && progress < 100 ? (
        <View style={[s.indicator, { backgroundColor: COLORS.white }]}>
          <HeaderText size={14} color={COLORS.primary}>
            Start
          </HeaderText>
        </View>
      ) : (
        <LinearGradient
          colors={[COLORS.primary, COLORS.secondary]}
          start={[0, 0]}
          end={[1, 0]}
          style={s.indicator}
        >
          <MaterialIcons name="check" size={25} color={COLORS.white} />
        </LinearGradient>
      )}
    </Pressable>
  );
};

export default Day;

const s = StyleSheet.create({
  day: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  info: {
    width: "80%",
  },
  indicator: {
    width: 53,
    height: 53,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
