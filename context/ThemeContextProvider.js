import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeContext, setThemeContext] = useState(false); // false for dark
  return (
    <ThemeContext.Provider
      value={{
        themeContext,
        setThemeContext,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
