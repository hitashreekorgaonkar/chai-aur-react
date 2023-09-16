import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hooks  // now bcz of this we don't need 2 files to import
export default function useTheme() {
  return useContext(ThemeContext);
}
