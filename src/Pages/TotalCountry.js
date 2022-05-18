import React from "react";
import '../Styles/TotalCountry.css'

const TotalCountry = ({children}) => {
  return (
    <>
      <ul className="ul_container">
        <li className="das">
           {children}
        </li>
      </ul>
    </>
  );
};

export default TotalCountry;
