import React from "react";

import "../Styles/TheCountry.css";

const TheCountry = ({
  img,
  name,
  population,
  capital,
  region,
  subregion,
  topLevelDomain,
  languagesPrincipal,
  currencies,
  borders,
  darkMode,
}) => {
  return (
    <>
      <section className="country">
        <section>
          <img className="theImg" src={img} alt={name} />
        </section>

        <section className="container_section">
          <section
            className={`section_principal ${darkMode && "theCountry_active"}`}
          >
            <section className="section_one">
              <h2 className="country_h2"> {name} </h2>

              <p>
                Native Name : <span>{name}</span>
              </p>
              <p>
                Region : <span>{region}</span>
              </p>
              <p>
                Sub-Region : <span>{subregion}</span>
              </p>
              <p>
                Capital : <span>{capital}</span>
              </p>
              <p>
                Population : <span>{population}</span>
              </p>
            </section>

            <section className="section_two">
              <p>
                Top level Domain : <span>{topLevelDomain}</span>
              </p>
              <p>
                Type of currency : <span>{currencies}</span>
              </p>
              <p>
                Languages : <span>{languagesPrincipal}</span>
              </p>
            </section>
          </section>
          <h2 className={`border_continer ${darkMode && "borders_active"}`}>
            Border Countries :{" "}
          </h2>

          {borders?.map((el) => (
            <button key={el} className='hola'>{el}</button>
          ))}

        </section>

      </section>
    </>
  );
};

export default TheCountry;
