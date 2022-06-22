import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, error, getPaginateData } = useGlobalContext();
  const drinks = getPaginateData();

  return loading ? (
    <Loading />
  ) : error ? (
    <section className="section">
      <div className="section-title">
        <h3>No cocktails matched</h3>
      </div>
    </section>
  ) : (
    <section className="section">
      <div className="section-title">
        <h3>Cocktails</h3>
      </div>
      <div className="cocktails-center">
        {drinks.length > 0 && drinks.map((drink) => <Cocktail key={drink.idDrink} drink={drink} />)}
      </div>
    </section>
  );
};

export default CocktailList;
