import React from "react";
import categories from "../fake-data/all-categories";
import Button from "./Button";

export default function CategoryList({ stateCategory, setCategory }) {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Button
          key={index}
          stateCategory={stateCategory}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </div>
  );
}
