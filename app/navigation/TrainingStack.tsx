import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Training, WeekStack, DayStack, WorkoutStack } from "../screens";
import { IDay } from "../types";
import { ITraining } from "../types/training";

type RootStackParamList = {
  Home: undefined;
  WeekStack: undefined;
  DayStack: IDay;
  WorkoutStack: ITraining[];
};

const TrainingStack = createStackNavigator<RootStackParamList>();

const TrainingStackScreen = () => (
  <TrainingStack.Navigator screenOptions={{ headerShown: false }}>
    <TrainingStack.Screen name="Home" component={Training} />
    <TrainingStack.Screen name="WeekStack" component={WeekStack} />
    <TrainingStack.Screen name="DayStack" component={DayStack} />
    <TrainingStack.Screen name="WorkoutStack" component={WorkoutStack} />
  </TrainingStack.Navigator>
);
export default TrainingStackScreen;
