import { useAppDispatch } from "../redux/hooks";
import { addItem } from "../redux/slices/cartSlice";
import Button from "./UI/Button";

type ProductCardProps = {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
};

const ProductCard = ({
  id,
  image = "https://cdn.dummyjson.com/product-images/30/1.jpg",
  title = "Titolo",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi erat, sollicitudin non interdum efficitur, malesuada sed diam.",
  category = "categoria",
  price = 27.23,
}: ProductCardProps) => {
  const newProduct = {
    id,
    title,
    description,
    category,
    price,
  };
  const dispatch = useAppDispatch();
  return (
    <div className="m-auto flex w-5/6 flex-col rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-xl md:h-[650px] md:w-[350px]">
      <div className="h-[350px] w-full rounded-md bg-gray-300 md:h-2/3">
        <img
          className="h-full w-full rounded-md object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-gray-900 md:text-lg">
            {title}
          </h3>
          <span className="text-xl font-semibold text-gray-900 md:text-lg">
            € {price}
          </span>
        </div>
        <span className="rounded-md bg-[#7b2d26] px-2 py-1 text-xs font-thin text-white">
          {category}
        </span>
      </div>
      <div className="p-2 md:h-1/6">
        <p className="... overflow-hidden text-ellipsis text-base text-gray-600">
          {description}
        </p>
      </div>

      <div className=" flex w-full justify-between p-2">
        <Button
          onClick={() => dispatch(addItem(newProduct))}
          text="Add to cart"
          style="classicFullSize"
        />
      </div>
    </div>
  );
};

export default ProductCard;
