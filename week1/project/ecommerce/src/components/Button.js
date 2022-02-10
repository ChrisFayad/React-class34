import React from "react";

export default function Button({ stateCategory, category, setCategory }) {
  function handleFilter(e, category) {
    console.log("filter", stateCategory);
    if (stateCategory === category) {
      setCategory(null);
      e.target.classList.remove("clicked");
    } else {
      setCategory(category.split(": ")[1]);
      e.target.classList.add("clicked");
    }
  }
  return (
    <button
      className="categories-item"
      onClick={(e) => handleFilter(e, category)}
    >
      {category}
    </button>
  );
}
