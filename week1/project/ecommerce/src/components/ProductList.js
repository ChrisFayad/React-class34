import React from "react";
import products from "../fake-data/all-products";

export default function ProductList({ category }) {
  return (
    <ul className="products">
      {category !== null
        ? products
            .filter((product) => product.category === category)
            .map((product) => {
              return (
                <li className="products-item" key={product.id}>
                  <div className="product">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.title}
                    />
                    <span className="product-title">{product.title}</span>
                  </div>
                </li>
              );
            })
        : products.map((product) => {
            return (
              <li className="products-item" key={product.id}>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="product-title">{product.title}</span>
                </div>
              </li>
            );
          })}
    </ul>
  );
}
