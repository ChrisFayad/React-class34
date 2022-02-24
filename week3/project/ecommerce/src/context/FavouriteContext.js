import { createContext, useState } from "react";

export const FavouriteContext = createContext({ favouritesID: [] });

export const FavouriteProvider = ({ children }) => {
  const [favouritesID, setFavouritesID] = useState([]);

  const favourite = (id) => {
    return favouritesID.includes(id);
  };

  const switchFavourite = (id) => {
    const newFavourites = favouritesID.filter((item) => item !== id);
    if (newFavourites.length === favouritesID.length) {
      setFavouritesID([id, ...newFavourites]);
    } else {
      setFavouritesID(newFavourites);
    }
  };
  return (
    <FavouriteContext.Provider
      value={{ favouritesID, favourite, switchFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
