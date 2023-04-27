import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Statistics = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Statistics</Text>
    </View>
  );
};

export default Statistics;
