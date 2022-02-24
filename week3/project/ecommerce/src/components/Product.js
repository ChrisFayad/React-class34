import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as EmptyHeart } from "../assets/heart-regular.svg";
import { ReactComponent as FullHeart } from "../assets/heart-solid.svg";
import { FavouriteContext } from "../context/FavouriteContext";

export default function Product({ product }) {
  const { favourite, switchFavourite } = useContext(FavouriteContext);

  const handleFavourite = () => {
    switchFavourite(product.id);
  };

  return (
    <li className="products-item">
      <div className="product">
        <div className="media">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div onClick={handleFavourite}>
            {favourite(product.id) ? (
              <FullHeart className="product-heart" />
            ) : (
              <EmptyHeart className="product-heart" />
            )}
          </div>
        </div>
        <NavLink className="product-title" to={`/product/${product.id}`}>
          {product.title}
        </NavLink>
      </div>
    </li>
  );
}
