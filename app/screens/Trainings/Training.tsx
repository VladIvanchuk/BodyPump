import { View, StyleSheet, FlatList } from "react-native";
import { global } from "../../styles/global.style";

import { Placeholder, TrainingPlan } from "../../components";
import { useGetTrainingPlansQuery } from "../../api/trainingPlan";

const Training = () => {
  const { data = [], isLoading } = useGetTrainingPlansQuery({});

  console.log(isLoading);

  return (
    <View style={global.main}>
      <View style={s.container}>
        {isLoading ? (
          <>
            <Placeholder height={20} width={320} style={s.placeholder} />
            <Placeholder height={200} width={320} style={s.placeholder} />
            <Placeholder height={20} width={320} style={s.placeholder} />
            <Placeholder height={200} width={320} style={s.placeholder} />
          </>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <TrainingPlan {...item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Training;

const s = StyleSheet.create({
  container: {
    marginBottom: 80,
    flex: 1,
  },
  placeholder: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    width: "auto",
    marginBottom: 20,
  },
});
