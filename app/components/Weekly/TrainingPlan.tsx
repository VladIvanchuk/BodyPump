import { StyleSheet, View, ImageBackground, Pressable, Modal } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

import { COLORS, images } from "../../constants";
import HeaderText from "../ui/HeaderText";
import Overlay from "../ui/Overlay";
import AppText from "../ui/AppText";
import { useNavigation } from "@react-navigation/native";

const TrainingPlan = ({ id, name, description, image }) => {
  const navigation = useNavigation();


  return (
    <View style={s.body}>
      <View style={s.container}>
        <HeaderText>{name} plan</HeaderText>
      </View>
      <Pressable
        onPress={() => navigation.navigate("WeekStack", { id })}
        style={s.wrapper}
      >
        <ImageBackground
          source={{
            uri: `data:image/png;base64,${image}`,
          }}
          style={s.image}
          imageStyle={{
            borderRadius: 10,
          }}
        >
          <Overlay />

          <View style={s.item}>
            <View style={s.top}>
              <View style={s.dsc}>
                <AppText size={16}>{description}</AppText>
              </View>
              <AntDesign name="calendar" size={30} color={COLORS.primary} />
            </View>
            <View style={s.bottom}>
              <View style={s.time}>
                <HeaderText>20-40</HeaderText>
                <Entypo name="time-slot" size={18} color={COLORS.white} style={s.clock} />
              </View>
              <View style={s.start}>
                <AntDesign name="caretright" size={28} color={COLORS.white} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default TrainingPlan;

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
    paddingHorizontal: 15,
  },
  image: {
    borderRadius: 10,
    flex: 1,
    resizeMode: "cover",
  },
  item: {
    height: 200,
    width: "100%",
    padding: 15,
  },
  start: {
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dsc: {
    width: "80%",
    textAlign: "left",
  },
  bottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
  },
  clock: {
    marginHorizontal: 10,
  },
});
