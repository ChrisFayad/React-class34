import React, { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";

export default function FavouritesPage() {
  const [favouriteID, setFavouriteID] = useContext(FavouriteContext);
  return <div>{favouriteID}</div>;
}
