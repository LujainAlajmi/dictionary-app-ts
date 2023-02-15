import { useState, useContext, createContext, FC } from "react";
export type FontContextType = {
  name: string;
  font: string;
  setFont: (font: string) => void;
  setName: (name: string) => void;
};
export const FontContext = createContext<FontContextType>({
  name: "Serif",
  font: "font-serif",
  setFont: () => {},
  setName: () => {},
});

export const useFont = () => useContext(FontContext);
