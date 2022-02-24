import React, { useState } from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

export default function HomePage() {
  const [category, setCategory] = useState(null);
  return (
    <div className="App">
      <Header title="Products" />
      <CategoryList category={category} setCategory={setCategory} />
      <ProductList category={category} />
    </div>
  );
}
