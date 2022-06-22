import React from "react";

const Cocktail = ({ drink }) => {
  return (
    <div className="cocktail">
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div className="cocktail-footer">
        <h3>{drink.strDrink}</h3>
        <h4>{drink.strGlass}</h4>
        <p>{drink.strAlcoholic}</p>
        <button
          className=" btn-primary btn-details"
          onClick={() => window.location.replace(`id/${drink.idDrink}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Cocktail;
