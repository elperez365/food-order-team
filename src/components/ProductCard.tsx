import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { addItem } from "../redux/slices/cartSlice";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="m-auto flex w-[280px] flex-col rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-xl md:h-[550px] md:w-[350px]">
      <div className="h-[200px] w-full rounded-md bg-gray-300 md:h-[300px]">
        <img
          className="h-full w-full cursor-pointer rounded-md object-contain hover:opacity-50"
          src={image}
          alt={title}
          onClick={() => {
            navigate(`/product/${id}`);
          }}
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
        <p className="truncate text-base text-gray-600">{description}</p>
      </div>

      <div className=" flex w-full justify-between p-2">
        <Button
          onClick={() => {
            dispatch(addItem(newProduct));
            toast.success(title + " aggiunto al carrello");
          }}
          text="Add to cart"
          style="classicFullSize"
        />
      </div>
    </div>
  );
};

export default ProductCard;
