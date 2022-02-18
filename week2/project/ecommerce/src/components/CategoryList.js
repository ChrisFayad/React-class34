import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function CategoryList({ category, setCategory }) {
  const [categoryName, setCategoryName] = useState([]);
  useEffect(() => {
    const categoryFetch = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategoryName(data);
    };
    categoryFetch();
  }, []);
  return (
    <div className="categories">
      {categoryName.map((item, index) => {
        return (
          <Button
            key={index}
            category={category}
            setCategory={setCategory}
            categoryName={item}
          />
        );
      })}
    </div>
  );
}
