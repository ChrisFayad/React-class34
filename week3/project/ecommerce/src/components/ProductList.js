import React, { useEffect } from "react";
import Product from "./Product";
import { useFetch } from "../hooks/useFetch";

export default function ProductList({ category }) {
  const [loading, setLoading, error, product, doFetch] = useFetch();

  useEffect(() => {
    const fetchAllProducts = () => {
      doFetch("https://fakestoreapi.com/products");
    };

    const productFetch = async (selectedCategory) => {
      doFetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
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
