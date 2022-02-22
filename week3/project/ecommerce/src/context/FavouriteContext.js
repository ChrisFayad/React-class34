import { createContext, useState } from "react";

export const FavouriteContext = createContext([]);

export const FavouriteProvider = ({ children }) => {
  const [favouriteID, setFavouriteID] = useState([]);
  return (
    <FavouriteContext.Provider value={[favouriteID, setFavouriteID]}>
      {children}
    </FavouriteContext.Provider>
  );
};
