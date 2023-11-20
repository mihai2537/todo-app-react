import { useContext } from "react";
import { ThemeContext, Themes } from "../theme";
import { ReactComponent as IconSun } from "../img/icon-sun.svg";
import { ReactComponent as IconMoon } from "../img/icon-moon.svg";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <article className="header">
      <h1 className="title">TODO</h1>
      <IconSun
        onClick={toggleTheme}
        className={`icon-theme ${theme === Themes.LIGHT ? "hide" : ""}`}
      ></IconSun>
      <IconMoon
        onClick={toggleTheme}
        className={`icon-theme ${theme === Themes.DARK ? "hide" : ""}`}
      ></IconMoon>
    </article>
  );
}
