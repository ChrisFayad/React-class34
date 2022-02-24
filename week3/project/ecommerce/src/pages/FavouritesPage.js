import React, { useContext, useEffect, useState } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import Header from "../components/Header";
import Product from "../components/Product";

export default function FavouritesPage() {
  const { favouritesID } = useContext(FavouriteContext);
  const [favProducts, setFavProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getFavourites = async () => {
      try {
        const fetchAllFav = favouritesID.map(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          return await response.json();
        });
        const results = await Promise.all(fetchAllFav);
        setLoading(false);
        setFavProducts(results);
      } catch (error) {
        setError(true);
      }
    };
    getFavourites();

    return () => {
      setFavProducts([]);
    };
  }, [favouritesID]);

  return (
    <>
      <Header title="Favourites" />
      <div className="App">
        {loading && <h3>Loading ...</h3>}
        {error && <h3>Something went wrong!</h3>}
        {favouritesID.length === 0 ? (
          <h3>There is no favorite products</h3>
        ) : (
          <ul className="products">
            {favProducts.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
