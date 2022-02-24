import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Header from "../components/Header";
import { ReactComponent as EmptyHeart } from "../assets/heart-regular.svg";
import { ReactComponent as FullHeart } from "../assets/heart-solid.svg";
import { FavouriteContext } from "../context/FavouriteContext";

export default function ProductPage() {
  const { loading, error, product, doFetch } = useFetch();
  const { id } = useParams();
  const { favourite, switchFavourite } = useContext(FavouriteContext);

  useEffect(() => {
    doFetch(`https://fakestoreapi.com/products/${id}`);
  }, []);

  if (loading) {
    return <h3>Loading ...</h3>;
  }

  if (error) {
    return <h3>Something went wrong!</h3>;
  }
  return (
    <div>
      <Header title="" />
      <h1>{product.title}</h1>
      <div className="product-details">
        <p>{product.description}</p>
        <div className="media">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div onClick={() => switchFavourite(product.id)}>
            {favourite(product.id) ? (
              <FullHeart className="product-heart" />
            ) : (
              <EmptyHeart className="product-heart" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
