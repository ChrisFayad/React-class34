import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList
        category={category}
        setCategory={setCategory}
        setProduct={setProduct}
        setLoading={setLoading}
        setError={setError}
      />
      <ProductList product={product} loading={loading} error={error} />
    </div>
  );
}

export default App;
