import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MapCountryes from "./Components/MapCountryes";
import OneCountry from "./Pages/OneCountry";
import SearchCountry from "./Components/SearchCountry";

function App() {
  return (
    <div className="App">
     

      <Routes>
        <Route path="/country/:name" element={<OneCountry />} />
        <Route path="/*" element={<MapCountryes />} />
      </Routes>
    </div>
  );
}

export default App;
