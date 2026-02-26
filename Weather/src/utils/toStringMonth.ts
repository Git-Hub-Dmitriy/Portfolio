export default function toStringMonth(date: string) {
  const months: Array<string> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate: Date = new Date(date);
  return months[currentDate.getMonth()];
}
