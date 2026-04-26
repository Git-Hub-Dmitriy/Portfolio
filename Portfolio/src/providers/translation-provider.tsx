"use client";
import { useContext, createContext } from "react";
import { Dictionary } from "@interfaces/dictionary.types";

const ContextTranslation = createContext<Dictionary | null>(null);

export function TranslationProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
}) {
  return (
    <ContextTranslation.Provider value={dictionary}>
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
