import { createContext, useState } from "react";

export const ThemeModeContext = createContext();

export const ThemeModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fungsi toggle tema
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};