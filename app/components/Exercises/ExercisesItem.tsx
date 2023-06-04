import type { IExercisesItem } from "../../types/muscleGroup";
import { FC } from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import AppText from "../ui/AppText";
import HeaderText from "../ui/HeaderText";
import { COLORS } from "../../constants";
import { AntDesign } from "@expo/vector-icons";

const ExercisesItem: FC<IExercisesItem> = ({ name, description, image }) => {
  return (
    <SafeAreaView style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: `data:image/png;base64,${image}`,
        }}
      />
      <View style={styles.textContainer}>
        <HeaderText size={16}>{name}</HeaderText>
        <AppText size={12} numberOfLines={2}>
          {description}
        </AppText>
      </View>
      <AntDesign name="left" style={styles.icon} size={25} color={COLORS.white} />
    </SafeAreaView>
  );
};
export default ExercisesItem;

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
    height: 55,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  image: {
    height: "100%",
    backgroundColor: COLORS.bg,
    borderRadius: 5,
    width: 60,
  },
  icon: {
    alignSelf: "center",
  },
});
