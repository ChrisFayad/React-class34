import React from "react";

export default function Product({ product }) {
  return (
    <li className="products-item">
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
}
