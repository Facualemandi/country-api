import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../Styles/Countryes.css";

// navigate pasas el coutnryId

const Countryes = ({ name, capital, img, population, region }) => {
  return (
    <>
     <Link to={`/country/${name}`} className='countryes_cont'>
        <main className="contianer_country">
          <img src={img} alt={name} className="img_country" />

          <div className="features">
            <h1>{name}</h1>
            <p>
              Population: <b>{population}</b>
            </p>
            <p>
              Capial: <b>{capital} </b>
            </p>
            <p>
              Región:<b> {region} </b>
            </p>
          </div>
        </main>
     </Link>
   
    </>
  );
};

export default Countryes;
