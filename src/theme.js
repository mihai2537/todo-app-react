import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext("dark-theme");

const Themes = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) return theme;

  localStorage.setItem("theme", Themes.DARK);
  return Themes.DARK;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    if (theme === Themes.LIGHT) setTheme(Themes.DARK);
    if (theme === Themes.DARK) setTheme(Themes.LIGHT);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, Themes };
