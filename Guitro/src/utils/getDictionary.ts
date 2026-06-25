import { cacheLife } from "next/cache";

const dictionaries = {
  en: () => import("@data/en").then((module) => module.en),
  ua: () => import("@data/ua").then((module) => module.ua),
};

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
  "use cache";
  cacheLife("weeks");
  const loader = dictionaries[locale as Locale];

  if (!loader) {
    return dictionaries.en();
  }
  return loader();
};
