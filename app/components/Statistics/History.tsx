import type { IHistory } from "../../types";
import { StyleSheet, View } from "react-native";
import React from "react";
import HeaderText from "../ui/HeaderText";
import { global } from "../../styles/global.style";
import AppText from "../ui/AppText";
import { COLORS } from "../../constants";
import HistoryItem from "./HistoryItem";
import { useGetHistoryQuery } from "../../api/historySlice";
import { formatDateAndTime } from "../../utils/formattedTime";
import Placeholder from "../Placeholder";

const History = () => {
  const { data = [], isLoading } = useGetHistoryQuery({});

  return (
    <>
      <View style={global.container}>
        <HeaderText>History</HeaderText>
      </View>
      {isLoading ? (
        <Placeholder height={400} width={400} style={styles.placeholder} />
      ) : (
        <View style={[styles.section, global.container]}>
          <View style={styles.item}>
            {data.map((history: IHistory) => {
              return (
                <View key={history.id}>
                  <AppText size={18}>
                    {history.training.trainingPlan.name} ({history.training.name})
                  </AppText>
                  <View style={styles.historyWrapper}>
                    <HistoryItem
                      top={formatDateAndTime(history.date).formattedTime}
                      bottom={formatDateAndTime(history.date).formattedDate}
                    />
                    <HistoryItem top={history.time} bottom="min" />
                    <HistoryItem
                      top={history.training.progress < 100 ? "In progress" : "Completed"}
                      bottom={`${history.training.progress}%`}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  section: {
    backgroundColor: COLORS.darkEasy,
    paddingVertical: 20,
    marginVertical: 20,
  },
  total: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
  },
  historyWrapper: {
    flexDirection: "row",
    marginVertical: 10,
    paddingVertical: 15,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  placeholder: {
    backgroundColor: COLORS.darkEasy,
    marginVertical: 20,
  },
});
