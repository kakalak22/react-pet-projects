import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { paginate } from "./utils/paginate";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [defaultDrinks, setDefaultDrinks] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [itemCount, setItemCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const { drinks } = await response.json();
      setDrinks(drinks);
      setLoading(false);
      setDefaultDrinks(drinks);
      setItemCount(drinks.length);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (input.trim().length === 0) {
      setDrinks(defaultDrinks);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(false);
    setPage(1);
    const timeout = setTimeout(() => {
      let newDrinks = filterItems(drinks, input);
      if (newDrinks.length === 0) setError(true)
      else {
        setDrinks(newDrinks);
        setItemCount(newDrinks.length);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  const getPaginateData = () => {
    const paginated = paginate(drinks, page, 3);
    return paginated;
  };

  const handleInput = useCallback((event) => {
    setInput(event.currentTarget.value);
  }, []);

  const filterItems = (arr, query) => {
    return arr.filter((el) => {
      setLoading(false);
      return el.strDrink.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  };

  return (
    <AppContext.Provider
      value={{
        drinks,
        loading,
        error,
        page,
        itemCount,
        handleInput,
        setPage,
        getPaginateData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
