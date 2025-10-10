import React, { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import { themeReducer, initialState, type ThemeState, type ThemeAction } from '../reducer/ThemeReducer'

export const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}>({
  state: initialState,
  dispatch: (action: ThemeAction) => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
