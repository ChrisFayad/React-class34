import { useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);
  const doFetch = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return [loading, setLoading, error, product, doFetch];
};
