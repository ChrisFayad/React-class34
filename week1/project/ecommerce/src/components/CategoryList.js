import React from "react";
import categories from "../fake-data/all-categories";
import Button from "./Button";

export default function CategoryList({ setCategory }) {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <Button
            key={index}
            index={index}
            category={category}
            setCategory={setCategory}
          />
        );
      })}
    </div>
  );
}
