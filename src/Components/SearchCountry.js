import React from "react";
import "../Styles/SearchCountry.css";
import { FcSearch } from "react-icons/fc";

const SearchCountry = ({ search, searcher }) => {
  return (
    <>
      <section className="input_section">
        <section className="container_search">
          <input
            onChange={searcher}
            value={search}
            type={"text"}
            placeholder="Enter country name..."
          />
          <FcSearch className="icon_search" />
        </section>
      </section>
    </>
  );
};

export default SearchCountry;
