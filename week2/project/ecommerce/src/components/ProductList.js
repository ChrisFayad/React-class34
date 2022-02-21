import React, { useEffect } from "react";
import Product from "./Product";

export default function ProductList({
  loading,
  setLoading,
  error,
  setError,
  category,
  product,
  setProduct,
}) {
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const productFetch = async (selectedCategory) => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    if (category === null) {
      fetchAllProducts();
      setLoading(true);
    } else {
      productFetch(category);
    }
  }, [category]);

  if (loading) {
    return <h3>Loading ...</h3>;
  }

  if (error) {
    return <h3>Something went wrong!</h3>;
  }

  return (
    <ul className="products">
      {product.map((item) => {
        return <Product key={item.id} product={item} />;
      })}
    </ul>
  );
}
