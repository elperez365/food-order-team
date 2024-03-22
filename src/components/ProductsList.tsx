import React from "react";
import { useAppSelector } from "../redux/hooks";
import ProductCard from "./ProductCard";
import { product } from "../data/types";

interface ProductsListProps {
  data: any;
}
const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
  const selectedCategory = useAppSelector(
    (state) => state.selectedCategory.value,
  );
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:mx-auto md:flex-row md:flex-wrap">
      {data.value
        .filter(
          (product: product) =>
            product.category === selectedCategory || selectedCategory === "All",
        )
        .map((product: product) => (
          <li key={product.id} className="m-3 list-none">
            <ProductCard
              id={product.id}
              image={product.images[0]}
              title={product.brand}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          </li>
        ))}
    </div>
  );
};

export default ProductsList;
