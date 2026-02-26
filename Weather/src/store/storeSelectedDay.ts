import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface InitDay {
  selectedDay: string;
}
const initialState: InitDay = {
  selectedDay: "",
};
interface InitSetDay extends InitDay {
  setSelectedDay: (day: string) => void;
}

const storeSelectedDay = create<InitSetDay>()(
  devtools(
    (set) => ({
      ...initialState,
      setSelectedDay: (day: string) => set({ selectedDay: day }),
    }),
    { name: "selectedDay" },
  ),
);

export default storeSelectedDay;
