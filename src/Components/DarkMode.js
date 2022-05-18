import React from "react";
import { MdDarkMode } from "react-icons/md";
import { GiSun } from "react-icons/gi";
import "../Styles/DarkMode.css";

const DarkMode = ({ darkMode, isDarkMode }) => {
  return (
    <>
      <section className="dark_mode" onClick={isDarkMode}>
        {!darkMode && <MdDarkMode className="icon_dark" />}
        {darkMode && <GiSun className="icon_sun" />}
      </section>
    </>
  );
};

export default DarkMode;
