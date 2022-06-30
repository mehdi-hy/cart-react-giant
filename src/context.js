import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();
const defaultState = {
  total: 0.0,
  cart: cartItems,
  amount: 0.0,
  loading: true,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // useEffect(() => {
  //   dispatch({ type: 'GET_DATA', payload: url });
  // }, [url]);
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  const clear = () => {
    dispatch({ type: 'CLEAR' });
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({ type: 'GET_DATA', payload: cart });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        clear,
        remove,
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
