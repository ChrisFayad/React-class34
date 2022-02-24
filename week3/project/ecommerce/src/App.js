import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import FavouritesPage from "./pages/FavouritesPage";
import { FavouriteProvider } from "./context/FavouriteContext";

function App() {
  return (
    <>
      <FavouriteProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </FavouriteProvider>
    </>
  );
}

export default App;
