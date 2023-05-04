import React from "react";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { WeekStack, DayStack, WorkoutStack } from "../screens";

import TabNavigator from "./TabNavigator";
import { RootStackParamList } from "../types";

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
