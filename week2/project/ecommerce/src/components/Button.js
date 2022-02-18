import React from "react";

export default function Button({ category, setCategory, categoryName }) {
  function handleFilter(e, chosenCategory) {
    const clickedCategories = document.querySelectorAll(".clicked");
    clickedCategories.forEach((clickedCategory) => {
      clickedCategory.classList.remove("clicked");
    });
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
      className="categories-item"
      // className={
      //   category === null ? "categories-item" : "categories-item clicked"
      // }
      onClick={(e) => handleFilter(e, categoryName)}
    >
      {categoryName}
    </button>
  );
}
