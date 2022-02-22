import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as EmptyHeart } from "../assets/heart-regular.svg";
import { ReactComponent as FullHeart } from "../assets/heart-solid.svg";
import { FavouriteContext } from "../context/FavouriteContext";

export default function Product({ product }) {
  const [favouriteID, setFavouriteID] = useContext(FavouriteContext);
  const [favourite, setFavourite] = useState(false);
  function addFavourite(id) {
    setFavouriteID((prevFavourite) => [...prevFavourite, id]);
  }

  function removeFavourite(id) {
    const currentFavourite = favouriteID;
    const newFavourite = currentFavourite.filter((item) => item.id !== id);
    setFavouriteID(newFavourite);
    console.log(favouriteID);
  }

  const handleFavourite = () => {
    setFavourite(!favourite);
    favourite ? removeFavourite(product.id) : addFavourite(product.id);
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
            {favourite ? (
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
