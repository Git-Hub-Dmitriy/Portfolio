import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface InitParams {
  temperature: string | null;
  speed: string | null;
  precipitation: string | null;
}
const initialState: InitParams = {
  temperature: null,
  speed: null,
  precipitation: null,
};

type InitSetParams = InitParams & {
  setParamsStore: (object: InitParams) => void;
  resetParams: () => void;
};

const storeParams = create<InitSetParams>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setParamsStore: (object: InitParams) =>
          set({
            temperature: object.temperature ?? initialState.temperature,
            speed: object.speed ?? initialState.speed,
            precipitation: object.precipitation ?? initialState.precipitation,
          }),
        resetParams: () =>
          set({
            temperature: initialState.temperature,
            speed: initialState.speed,
            precipitation: initialState.precipitation,
          }),
      }),
      { name: "params" },
    ),
    { name: "StoreParams" },
  ),
);

export default storeParams;
