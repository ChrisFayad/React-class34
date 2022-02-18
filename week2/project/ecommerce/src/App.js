import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState([]);
  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList category={category} setCategory={setCategory} />
      <ProductList
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        category={category}
        product={product}
        setProduct={setProduct}
      />
    </div>
  );
}

export default App;
