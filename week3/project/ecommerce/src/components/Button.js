import React from "react";

export default function Button({ category, setCategory, categoryName }) {
  function handleFilter(e, chosenCategory) {
    if (chosenCategory === category) {
      setCategory(null);
      e.target.classList.remove("clicked");
    } else {
      setCategory(chosenCategory);
      e.target.classList.add("clicked");
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
