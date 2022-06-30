import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, [url]);
  return { loading, products };
};
