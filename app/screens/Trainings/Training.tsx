import { View, Text, StyleSheet, ScrollView } from "react-native";
import { global } from "../../styles/global.style";

import { TrainingComponent, WeekPlan } from "../../components";

const Training = () => {
  return (
    <ScrollView style={global.main} showsVerticalScrollIndicator={false}>
      <View style={s.container}>
        <WeekPlan />
        <TrainingComponent
          title="Progressive programs"
          description="Training to progress the number of repetitions"
        />
        <TrainingComponent
          title="Muscle training"
          description="Training of individual muscle groups"
        />
        <TrainingComponent title="My trainings" description="Your custom trainings" />
      </View>
    </ScrollView>
  );
};

export default Training;

const s = StyleSheet.create({
  container: {
    marginBottom: 80,
    flex: 1,
  },
});
