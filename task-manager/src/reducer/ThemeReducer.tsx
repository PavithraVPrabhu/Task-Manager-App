import React, { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import { THEMES } from "../constants/theme";

export type ThemeState = { theme: string };
export type ThemeAction = { type: "TOGGLE_THEME" };

export const initialState: ThemeState = { theme: THEMES.LIGHT };

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT };
    default:
      return state;
  }
}