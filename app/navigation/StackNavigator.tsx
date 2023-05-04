import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { Training, WeekStack, DayStack, WorkoutStack } from "../screens";
import { IDay } from "../types";
import { ITraining } from "../types/training";
import TabNavigator from "./TabNavigator";

type RootStackParamList = {
  Home: undefined;
  WeekStack: undefined;
  DayStack: IDay;
  WorkoutStack: IDay;
};

const TrainingStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <TrainingStack.Navigator
    screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
  >
    <TrainingStack.Screen name="Home" component={TabNavigator} />
    <TrainingStack.Screen name="WeekStack" component={WeekStack} />
    <TrainingStack.Screen name="DayStack" component={DayStack} />
    <TrainingStack.Screen name="WorkoutStack" component={WorkoutStack} />
  </TrainingStack.Navigator>
);
export default StackNavigator;
