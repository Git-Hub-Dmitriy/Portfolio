export default function toStringDay(date: string) {
  const days: Array<string> = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate: Date = new Date(date);
  return days[currentDate.getDay()];
}
