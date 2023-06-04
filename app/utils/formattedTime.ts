export const formatDateAndTime = (dateString: string) => {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}`;
  const formattedTime = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  return { formattedDate, formattedTime };
};
