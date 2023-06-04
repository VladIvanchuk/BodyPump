import type { IMuscleGroup, IExercisesItem } from "../types";
import { View, ScrollView, StyleSheet, Modal, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { global } from "../styles/global.style";
import { MuscleGroupItem, ExercisesItem, Placeholder } from "../components";
import { useGetMuscleGroupsQuery, useGetExerciseByMuscleGroupsQuery } from "../api";
import { COLORS } from "../constants";

const Exercises = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeMuscleGroup, setActiveMuscleGroup] = useState(0);
  const { data: muscleGroups = [], isLoading: isMuscleGroupsLoading } =
    useGetMuscleGroupsQuery({});
  const { data: exercises = [], isLoading: isExercisesLoading } =
    useGetExerciseByMuscleGroupsQuery(activeMuscleGroup);

  const arrayEmpty = new Array(5);

  return (
    <ScrollView
      style={[global.main, global.container]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.wrapper}>
        {isMuscleGroupsLoading ? (
          <>
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
            <Placeholder height={60} width={150} style={styles.placeholder} />
          </>
        ) : (
          muscleGroups.map((muscleGroup: IMuscleGroup) => (
            <MuscleGroupItem
              key={muscleGroup.id}
              {...muscleGroup}
              setModalVisible={setModalVisible}
              setActiveMuscleGroupId={setActiveMuscleGroup}
            />
          ))
        )}
      </View>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            {isExercisesLoading ? (
              <FlatList
                style={styles.modalView}
                data={arrayEmpty}
                renderItem={() => (
                  <Placeholder
                    height={60}
                    width={320}
                    style={styles.exercisesPlaceholder}
                  />
                )}
                keyExtractor={(_, index) => index.toString()}
              />
            ) : (
              <FlatList
                style={styles.modalView}
                data={exercises}
                renderItem={({ item }) => <ExercisesItem {...item} />}
                keyExtractor={(item) => item.id}
              />
            )}
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 80,
  },
  modalView: {
    width: "100%",
    height: "90%",
    backgroundColor: COLORS.dark,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  placeholder: {
    width: "48%",
    marginVertical: 10,
    borderRadius: 15,
  },
  exercisesPlaceholder: {
    marginVertical: 10,
    borderRadius: 15,
  },
});
