const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'GET_DATA') {
    return { ...state, loading: false, cart: action.payload };
  }
  if (action.type === 'CLEAR') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === 'INCREASE') {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, cart: newCart };
  }
  if (action.type === 'DECREASE') {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });

    return { ...state, cart: newCart };
  }
  if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.cart.reduce(
      (acc, current) => {
        const { price, amount } = current;
        acc.amount += amount;
        acc.total += amount * price;
        return acc;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
};
export default reducer;
