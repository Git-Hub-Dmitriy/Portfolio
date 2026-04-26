// Доделать стор и смену языка
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Language = "UA" | "EN";

interface LangState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const storeSelectedLang = create<LangState>()(
  devtools(
    persist(
      (set, get) => ({
        language: "EN",
        setLanguage: (nextLang: Language) => {
          if (nextLang !== get().language) {
            return set({ language: nextLang });
          } else {
            return get().language;
          }
        },
      }),
      { name: "language" },
    ),
    { name: "storeLanguage" },
  ),
);

export default storeSelectedLang;
