import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()



const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const cart = await fetch(url).then(response => response.json());
      setCart(cart);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    calculateTotal();
  }, [cart, count])

  const calculateTotal = () => {
    const total = cart.reduce((prevVal, currentVal) => (prevVal + currentVal.amount * currentVal.price), 0);
    const roundedTotal = Number(total).toFixed(2);
    const count = cart.reduce((prevVal, currentVal) => (prevVal + currentVal.amount), 0);
    setTotal(roundedTotal);
    setCount(count);
  }

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const increaseAmount = (id) => {
    const index = cart.findIndex(item => item.id === id);
    const newCart = [...cart];
    newCart[index].amount = cart[index].amount + 1;
    setCart(newCart);
  }

  const degreaseAmount = (id) => {

    const index = cart.findIndex(item => item.id === id);
    const newCart = [...cart];
    if (cart[index].amount === 1) {
      removeItem(id);
      return;
    }
    newCart[index].amount = cart[index].amount - 1;
    setCart(newCart);
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        total,
        count,
        isLoading,
        setCart,
        increaseAmount,
        degreaseAmount,
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
