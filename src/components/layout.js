import backgroundDesktop from "../img/bg-desktop-dark.jpg";
import backgroundMobile from "../img/bg-mobile-dark.jpg";
import { useContext } from "react";
import { ThemeContext } from "../theme";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`container ${theme}`}>
      <img
        className="desktop-img"
        src={backgroundDesktop}
        alt="A purple obscure background for desktop size"
      />
      <img
        className="mobile-img"
        src={backgroundMobile}
        alt="A purple obscure background for mobile size"
      ></img>

      <section className="app">{children}</section>
    </main>
  );
}
