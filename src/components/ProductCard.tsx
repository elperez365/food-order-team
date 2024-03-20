import Button from "./UI/Button";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
};

const ProductCard = ({
  image = "https://cdn.dummyjson.com/product-images/30/1.jpg",
  title = "titolo",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi erat, sollicitudin non interdum efficitur, malesuada sed diam.",
  category = "categoria",
  price = 27,
}: ProductCardProps) => {
  return (
    <div className="w-5/6 md:w-1/4 m-auto border border-gray-100 shadow-sm rounded-md">
      <div>
        <img className="w-full rounded-t-md" src={image} alt={title} />
      </div>
      <div className="p-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="text-xs text-white bg-[#7b2d26] px-2 py-1 rounded-sm font-thin">{category}</span>
      </div>
      <div className="p-2">
        <p className="text-base">{description}</p>
      </div>
      <div className="p-2 flex justify-between">
        <span className="text-xl font-semibold">€ {price}</span>
        <Button text="Add to cart" style="classic" />
      </div>
    </div>
  );
};

export default ProductCard;
