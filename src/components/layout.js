import backgroundDesktopDark from "../img/bg-desktop-dark.jpg";
import backgroundMobileDark from "../img/bg-mobile-dark.jpg";
import backgroundDesktopLight from "../img/bg-desktop-light.jpg";
import backgroundMobileLight from "../img/bg-mobile-light.jpg";

import { useContext } from "react";
import { ThemeContext, Themes } from "../theme";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`container ${theme}`}>
      <img
        className="desktop-img"
        src={
          theme === Themes.DARK ? backgroundDesktopDark : backgroundDesktopLight
        }
        alt="A purple obscure background for desktop size"
      />
      <img
        className="mobile-img"
        src={
          theme === Themes.LIGHT ? backgroundMobileLight : backgroundMobileDark
        }
        alt="A purple obscure background for mobile size"
      ></img>

      <section className="app">{children}</section>
    </main>
  );
}
