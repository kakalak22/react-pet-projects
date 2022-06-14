import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  count: 0
}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const cart = await fetch(url).then(response => response.json());
      dispatch({ type: 'DISPLAY_ITEM', payload: cart });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    calculateTotal();
  }, [state.cart])

  const calculateTotal = () => {
    dispatch({ type: 'GET_TOTAL' });
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }

  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  }

  const decreaseAmount = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseAmount,
        decreaseAmount,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
