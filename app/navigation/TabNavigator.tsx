import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FONT, COLORS, images } from "../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { Exercises, Custom, Statistics, Me, Training } from "../screens";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: COLORS.bg,
          height: 60,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontSize: 30, fontFamily: FONT.bold },
        headerShadowVisible: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: COLORS.dark,
          height: 65,
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          position: "absolute",
          bottom: 0,
          zIndex: 100,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontFamily: FONT.bold,
        },
      })}
    >
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: ({ color, size }: ITabBarIcon) => (
            <FontAwesome5 name="dumbbell" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarIcon: ({ color, size }: ITabBarIcon) => (
            <FontAwesome5 name="book" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Custom"
        component={Custom}
        options={{
          tabBarIcon: ({ color, size }: ITabBarIcon) => (
            <FontAwesome5 name="list-alt" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: "Stats",
          tabBarIcon: ({ color, size }: ITabBarIcon) => (
            <FontAwesome5 name="chart-bar" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: ({ color, size }: ITabBarIcon) => (
            <FontAwesome5 name="user-alt" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

interface ITabBarIcon {
  color: string;
  size: number;
}
