const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEM") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "GET_TOTAL") {
    const total = state.cart.reduce(
      (prevVal, currentVal) => prevVal + currentVal.amount * currentVal.price,
      0
    );
    const roundedTotal = Number(total).toFixed(2);
    const count = state.cart.reduce(
      (prevVal, currentVal) => prevVal + currentVal.amount,
      0
    );
    return { ...state, total: roundedTotal, count: count };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    const newCart = state.cart.map((item) =>
      item.id === action.payload
        ? { ...item, amount: item.amount + 1 }
        : { ...item }
    );
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    const newCart = state.cart
      .map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      )
      .filter(({ amount }) => amount !== 0);
    return { ...state, cart: newCart };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    const newCart = state.cart
      .map((item) =>
        item.id === action.payload.id
          ? action.payload.type === "inc"
            ? { ...item, amount: item.amount + 1 }
            : { ...item, amount: item.amount - 1 }
          : { ...item }
      )
      .filter(({ amount }) => amount !== 0);
    return { ...state, cart: newCart };
  }

  throw new Error("no matching action type");
};

export default reducer;
