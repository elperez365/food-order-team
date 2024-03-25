import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Chip from "./UI/Chip";
import { categories, product } from "../data/types";
import { setSelectedCategory } from "../redux/slices/selectedCategorySlice";

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(
    (state) => state.selectedCategory.value,
  );
  const data = useAppSelector((state) => state.products);

  const categories: categories = Array.from(
    new Set(data.value.map((product: product) => product.category)),
  );

  return (
    <div className="flex w-full justify-center gap-2 overflow-x-auto py-2">
      <Chip
        label="All"
        selectedValue={selectedCategory}
        onClick={() => dispatch(setSelectedCategory("All"))}
        quantity={data.value.length}
      />
      {categories.map((category: string, index: number) => (
        <Chip
          key={index}
          label={category}
          selectedValue={selectedCategory}
          onClick={() => dispatch(setSelectedCategory(category))}
          quantity={
            data.value.filter(
              (product: product) => product.category === category,
            ).length
          }
        />
      ))}
    </div>
  );
};

export default Categories;
