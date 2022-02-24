import React from "react";

export default function Button({ category, setCategory, categoryName }) {
  function handleFilter(e, chosenCategory) {
    if (chosenCategory === category) {
      setCategory(null);
    } else {
      setCategory(chosenCategory);
    }
  }
  return (
    <button
      className={`categories-item ${
        categoryName === category ? "clicked" : ""
      }`}
      onClick={(e) => handleFilter(e, categoryName)}
    >
      {categoryName}
    </button>
  );
}
