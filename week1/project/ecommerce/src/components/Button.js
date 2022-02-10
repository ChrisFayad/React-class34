import React from "react";

export default function Button({ categoryName, category, setCategory }) {
  function handleFilter(e, chosenCategory) {
    const clickedCategories = document.querySelectorAll(".clicked");
    clickedCategories.forEach((clickedCategory) => {
      clickedCategory.classList.remove("clicked");
    });
    if (chosenCategory === category) {
      setCategory(null);
    } else {
      setCategory(chosenCategory);
      e.target.classList.add("clicked");
    }
  }
  return (
    <button
      className="categories-item"
      onClick={(e) => handleFilter(e, categoryName)}
    >
      {categoryName}
    </button>
  );
}
