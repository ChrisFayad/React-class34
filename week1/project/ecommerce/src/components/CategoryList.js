import React from "react";
import categories from "../fake-data/all-categories";
import Button from "./Button";

export default function CategoryList({ category, setCategory }) {
  const categoryArray = categories.map((item) => {
    return item.split(": ")[1];
  });
  return (
    <div className="categories">
      {categoryArray.map((item, index) => {
        return (
          <Button
            key={index}
            category={category}
            categoryName={item}
            setCategory={setCategory}
          />
        );
      })}
    </div>
  );
}
