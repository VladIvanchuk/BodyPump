import { Modal, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../constants";
import HeaderText from "./ui/HeaderText";
import ButtonPrimary from "./ui/ButtonPrimary";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface IPropTypes {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleRestart: () => void;
  navigation: StackNavigationProp<RootStackParamList, "WorkoutStack">;
}

const QuitModal: FC<IPropTypes> = ({
  modalVisible,
  setModalVisible,
  handleRestart,
  navigation,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <HeaderText size={25}>Pause</HeaderText>
          </View>
          <ButtonPrimary
            textColor={COLORS.white}
            style={styles.button}
            tittle="Restart"
            onPress={() => {
              handleRestart();
              setModalVisible(!modalVisible);
            }}
          />
          <ButtonPrimary
            textColor={COLORS.white}
            style={styles.button}
            tittle="Quit"
            onPress={() => {
              navigation.goBack();
              setModalVisible(!modalVisible);
            }}
          />
          <ButtonPrimary
            style={styles.buttonPrimary}
            tittle="Resume"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default QuitModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    margin: 20,
    backgroundColor: COLORS.darkEasy,
    padding: 25,
  },
  header: {
    marginBottom: 20,
  },
  button: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 15,
    width: "90%",
    backgroundColor: COLORS.primary,
  },
  buttonPrimary: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 15,
    width: "90%",
    backgroundColor: COLORS.white,
  },
});
