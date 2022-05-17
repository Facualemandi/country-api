import React, { useState, useEffect } from "react";
import TotalCountry from "../Pages/TotalCountry";
import Countryes from "./Countryes";
import { helpHttp } from "../Helper/helpHttp";
import Loaders from "./Loaders";
import SearchCountry from "./SearchCountry";

const MapCountryes = () => {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const isFetch = async () => {
      let urlApi = "https://restcountries.com/v2/all";
      setLoading(true);

      const [count] = await Promise.all([helpHttp().get(urlApi)]);

      setCountry(count);

      setLoading(false);
    };
    isFetch();
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? country
    : country.filter((data) =>
        data.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <SearchCountry search={search} searcher={searcher} />

      {loading && <Loaders />}
      {!loading && (
        <TotalCountry>
          {results.map((el) => (
            <Countryes
              key={el.name}
              img={el.flag}
              name={el.name}
              population={el.population}
              capital={el.capital}
              region={el.region}
              id={el.id}
            />
          ))}
        </TotalCountry>
      )}
    </>
  );
};

export default MapCountryes;
