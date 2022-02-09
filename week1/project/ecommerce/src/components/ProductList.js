import React from "react";
import products from "../fake-data/all-products";
import Product from "./Product";

export default function ProductList({ category }) {
  return (
    <ul className="products">
      {category !== null
        ? products
            .filter((product) => product.category === category)
            .map((product) => {
              return <Product key={product.id} product={product} />;
            })
        : products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
    </ul>
  );
}
