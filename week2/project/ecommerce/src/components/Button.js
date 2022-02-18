import React from "react";

export default function Button({
  category,
  setCategory,
  categoryName,
  setProduct,
  setLoading,
  setError,
}) {
  const productFetch = async (selectedCategory) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const fetchAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };

  function handleFilter(e, chosenCategory) {
    const clickedCategories = document.querySelectorAll(".clicked");
    clickedCategories.forEach((clickedCategory) => {
      clickedCategory.classList.remove("clicked");
    });
    if (chosenCategory === category) {
      fetchAllProducts();
      e.target.classList.remove("clicked");
    } else {
      setCategory(chosenCategory);
      productFetch(chosenCategory);
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
