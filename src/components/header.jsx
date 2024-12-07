import { useEffect, useState } from "react";
import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";

const Header = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });

  return (
    <>
      <header className="flex justify-between">
        <h1>Devfinder</h1>
        <label className="uppercase">
          {darkMode ? "light" : "dark"}
          <button onClick={toggle}>
            <img src={darkMode ? sunIcon : moonIcon} />
          </button>
        </label>
      </header>
    </>
  );
};

export default Header;
