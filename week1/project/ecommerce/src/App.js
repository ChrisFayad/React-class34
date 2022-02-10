import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState(null);
  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList category={category} setCategory={setCategory} />
      <ProductList category={category} />
    </div>
  );
}

export default App;
