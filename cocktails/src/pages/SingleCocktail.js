import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link, NavLink, useNavigate } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { drinkId } = useParams();
  const apiEndpoint = url + drinkId;
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchDrink = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const { drinks } = await response.json();
      setDrink(drinks[0])
      setLoading(false);
    }
    catch (error) {
      navigate('/error');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchDrink();
  }, []);

  const {
    strDrinkThumb: image,
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
  } = drink;
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
  ];

  if (loading) return <Loading />;

  return (
    drink && (
      <section className="cocktail-section">
        <div className="section-title">
          <Link to="/home" className="btn btn-primary" replace={true}>
            {" "}
            Back home{" "}
          </Link>
          <h1>{name}</h1>
        </div>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info ">
            <p>
              <span className="drink-data">name:</span>
              {name}
            </p>
            <p>
              <span className="drink-data">category:</span>
              {category}
            </p>
            <p>
              <span className="drink-data">Info:</span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass:</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions:</span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients:</span>
              {ingredients.map(
                (ingredient) => ingredient !== null && ingredient + "  "
              )}
            </p>
          </div>
        </div>
      </section>
    )
  );
};

export default SingleCocktail;
