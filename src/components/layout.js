import backgroundDesktopDark from "../img/bg-desktop-dark.jpg";
import backgroundMobileDark from "../img/bg-mobile-dark.jpg";
import backgroundDesktopLight from "../img/bg-desktop-light.jpg";
import backgroundMobileLight from "../img/bg-mobile-light.jpg";

import { useContext } from "react";
import { ThemeContext, Themes } from "../theme";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  const isDarkTheme = theme === Themes.DARK;
  const visiblityClassesDark = isDarkTheme
    ? "full-opacity z-index-normal"
    : "zero-opacity z-index-below";
  const visiblityClassesLight = !isDarkTheme
    ? "full-opacity z-index-normal"
    : "zero-opacity z-index-below";

  return (
    <main className={`container ${theme}`}>
      <section className="img-wrapper">
        <img
          className={`desktop-img img--dark ${visiblityClassesDark}`}
          src={backgroundDesktopDark}
          alt="A purple obscure background for desktop size"
        />
        <img
          className={`desktop-img img--light ${visiblityClassesLight}`}
          src={backgroundDesktopLight}
          alt="A purple obscure background for desktop size"
        />
        <img
          className={`mobile-img img--dark ${visiblityClassesDark}`}
          src={backgroundMobileDark}
          alt="A purple obscure background for mobile size"
        />
        <img
          className={`mobile-img img--light ${visiblityClassesLight}`}
          src={backgroundMobileLight}
          alt="A purple obscure background for mobile size"
        />
      </section>

      <section className="app">{children}</section>
    </main>
  );
}
