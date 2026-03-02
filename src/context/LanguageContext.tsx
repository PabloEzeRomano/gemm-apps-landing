"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import esDict from "@/i18n/es.json";
import enDict from "@/i18n/en.json";

type Lang = "es" | "en";

type DictShape = typeof esDict;

const dicts: Record<Lang, DictShape> = {
  es: esDict,
  en: enDict,
};

interface LanguageContextValue {
  currentLang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  currentLang: "es",
  setLang: () => {},
  t: (key) => key,
});

function resolve(obj: unknown, key: string): string {
  const parts = key.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur !== null && typeof cur === "object") {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("gemm-lang") as Lang | null;
    if (saved === "es" || saved === "en") setCurrentLang(saved);
  }, []);

  const setLang = (lang: Lang) => {
    setCurrentLang(lang);
    localStorage.setItem("gemm-lang", lang);
  };

  const t = (key: string): string => {
    const result = resolve(dicts[currentLang], key);
    if (result === key) return resolve(dicts.en, key);
    return result;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
