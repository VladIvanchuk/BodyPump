import React, { FC } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { COLORS } from "../../constants";
import AppText from "../ui/AppText";
import HeaderText from "../ui/HeaderText";

interface IPropTypes {
  title: string;
  description: string;
}

const TrainingComponent: FC<IPropTypes> = ({ title, description }) => {
  return (
    <View style={s.body}>
      <View style={s.container}>
        <HeaderText>{title}</HeaderText>
        <View style={s.dsc}>
          <AppText>{description}</AppText>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={s.wrapper}
      >
        <View style={s.item}>
          <AppText>1</AppText>
        </View>
        <View style={s.item}>
          <AppText>2</AppText>
        </View>
        <View style={s.item}>
          <AppText>3</AppText>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrainingComponent;

const s = StyleSheet.create({
  body: {
    marginBottom: 25,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  wrapper: {
    marginVertical: 20,
  },
  dsc: {
    marginTop: 10,
  },
  item: {
    color: COLORS.white,
    backgroundColor: COLORS.dark,
    height: 200,
    width: 300,
    marginHorizontal: 12,
    padding: 15,
    borderRadius: 10,
  },
  itemText: {
    color: COLORS.white,
  },
});
