import React from "react";

export default function Button({ category, setCategory }) {
  function handleFilter(e, category) {
    e.target.classList.add("clicked");
    if (category) {
      setCategory(category.split(": ")[1]);
    } else {
      setCategory(null);
      e.target.classList.remove("clicked");
    }
  }
  return (
    <div className="categories-item" onClick={(e) => handleFilter(e, category)}>
      {category}
    </div>
  );
}
