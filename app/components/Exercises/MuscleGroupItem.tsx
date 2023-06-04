import type { IMuscleGroup } from "../../types";
import { StyleSheet, Image, View, ImageSourcePropType, Pressable } from "react-native";
import React, { FC } from "react";
import HeaderText from "../ui/HeaderText";
import { COLORS } from "../../constants";

const MuscleGroupItem: FC<IMuscleGroup> = ({
  id,
  title,
  icon,
  setModalVisible,
  setActiveMuscleGroupId,
}) => {
  return (
    <Pressable
      onPress={() => {
        setActiveMuscleGroupId(Number(id));
        setModalVisible(true);
      }}
      style={styles.item}
    >
      <HeaderText size={18} color={COLORS.primary}>
        {title}
      </HeaderText>
      <Image
        style={styles.icon}
        source={{
          uri: `data:image/png;base64,${icon}`,
        }}
      />
    </Pressable>
  );
};

export default MuscleGroupItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    width: "48%",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
