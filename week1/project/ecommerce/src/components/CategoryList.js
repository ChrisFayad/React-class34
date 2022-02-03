import React, { useState } from "react";
import categories from "../fake-data/all-categories";

export default function CategoryList({ setCategory }) {
  const [filter, setFiler] = useState(false);

  function handleFilter(index) {
    setFiler(!filter);
    if (index === 0 && filter) {
      setCategory("electronics");
    } else if (index === 1 && filter) {
      setCategory("jewelery");
    } else if (index === 2 && filter) {
      setCategory("men's clothing");
    } else if (index === 3 && filter) {
      setCategory("women's clothing");
    } else {
      setCategory(null);
    }
  }
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <div
            className="categories-item"
            key={index}
            onClick={() => handleFilter(index)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}
