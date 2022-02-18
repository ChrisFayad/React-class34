import React from "react";
import Product from "./Product";

export default function ProductList({ product, loading, error }) {
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
