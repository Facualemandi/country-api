import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { helpHttp } from "../Helper/helpHttp";
import TheCountry from "./TheCountry";
import Loaders from "../Components/Loaders";

const OneCountry = ({darkMode,changeCountry}) => {
  const { name } = useParams();

   

  const [isCountry, setIsCountry] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const isFetch = async () => {
      let urlApi = `https://restcountries.com/v2/name/${name}`;
      setLoading(true);

      const [isCount] = await Promise.all([helpHttp().get(urlApi)]);

      setIsCountry(isCount);

      console.log(isCount);
      setLoading(false);
    };
    isFetch();
  }, [name]);



  

  return (
    <>
     

    {loading && <Loaders />}
    
      {isCountry.map((el) => (
        <TheCountry
          darkMode={darkMode}
          key={el.name}
          img={el.flag}
          name={el.name}
          nativeName={el.nativeName}
          region={el.region}
          subregion={el.subregion}
          population={el.population}
          capital={el.capital}
          topLevelDomain={el.topLevelDomain[0]}
          currencies={el.currencies[0].name}
          languagesPrincipal={el.languages[0].name}
          borders={el.borders}
          changeCountry={changeCountry}
          alpha3Code={el.alpha3Code}
          />
          ))}
    </>
  );
};

export default OneCountry;
