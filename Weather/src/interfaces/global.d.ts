import type { StoreApi } from "zustand";
import type { InitSetParams } from "@store/storeParams";
import type { InitSetDay } from "@store/storeSelectedDay";

declare global {
  interface Window {
    store: StoreApi<InitSetParams, InitSetDay>;
  }
}

export {};
