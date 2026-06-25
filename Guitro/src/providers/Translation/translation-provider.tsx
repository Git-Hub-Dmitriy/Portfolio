"use client";
import { useContext, createContext, useMemo } from "react";
import { Dictionary } from "@interfaces/dictionary.types";

const ContextTranslation = createContext<Dictionary | null>(null);

export function TranslationProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
}) {
  const cache = useMemo(() => {
    return dictionary;
  }, [dictionary]);
  return (
    <ContextTranslation.Provider value={cache}>
      {children}
    </ContextTranslation.Provider>
  );
}

export function useTranslation() {
  const context = useContext(ContextTranslation);

  const t = (key: string) =>
    key.split(".").reduce((obj: any, k) => obj?.[k], context) || key;
  return { t };
}
