import React from "react";
import products from "../fake-data/all-products";
import Product from "./Product";

export default function ProductList({ stateCategory }) {
  console.log("product list", stateCategory);
  return (
    <ul className="products">
      {stateCategory !== null
        ? products
            .filter((product) => product.category === stateCategory)
            .map((product) => {
              return <Product key={product.id} product={product} />;
            })
        : products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
    </ul>
  );
}
