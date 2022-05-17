import React from "react";
import "../Styles/SearchCountry.css";

const SearchCountry = ({ search, searcher }) => {
  return (
    <>
      <section className="input_section">
        <input
          onChange={searcher}
          value={search}
          type={"text"}
          placeholder="Enter country name..."
        />
      </section>
    </>
  );
};

export default SearchCountry;
