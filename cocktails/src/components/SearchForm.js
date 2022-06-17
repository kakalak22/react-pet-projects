import React, { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { handleInput } = useGlobalContext();

  return (
    <div className="search">
      <form className="search-form">
        <div className="form-control">
          <label>Search your favorate cocktailk</label>
          <input type="text" onChange={(event) => (handleInput(event))} />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
