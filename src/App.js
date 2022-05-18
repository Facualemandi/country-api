import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DarkMode from "./Components/DarkMode";
import MapCountryes from "./Components/MapCountryes";
import OneCountry from "./Pages/OneCountry";
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const isDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div className={`App ${darkMode && 'dM-active'}`}>
      <DarkMode darkMode={darkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/country/:name" element={<OneCountry darkMode={darkMode} />} />
        <Route path="/*" element={<MapCountryes darkMode={darkMode}/>} />
      </Routes>
    </div>
  );
}

export default App;
