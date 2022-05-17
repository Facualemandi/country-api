import React from "react";
import '../Styles/TotalCountry.css'

const TotalCountry = (props) => {
  return (
    <>
      <ul>
        <li className="das">
           {props.children}
        </li>
      </ul>
    </>
  );
};

export default TotalCountry;
