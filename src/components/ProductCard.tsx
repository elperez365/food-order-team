import Button from "./UI/Button";

type ProductCardProps = {
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
};

const ProductCard = ({
  image = "https://cdn.dummyjson.com/product-images/30/1.jpg",
  title = "titolo",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi erat, sollicitudin non interdum efficitur, malesuada sed diam.",
  category = "categoria",
  price = 27,
}: ProductCardProps) => {
  return (
    <div className="m-auto w-5/6 rounded-md border border-gray-100 shadow-sm md:w-1/4">
      <div>
        <img className="w-full rounded-t-md" src={image} alt={title} />
      </div>
      <div className="p-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="rounded-sm bg-[#7b2d26] px-2 py-1 text-xs font-thin text-white">
          {category}
        </span>
      </div>
      <div className="p-2">
        <p className="text-base">{description}</p>
      </div>
      <div className="flex justify-between p-2">
        <span className="text-xl font-semibold">€ {price}</span>
        <Button text="Add to cart" style="classic" />
      </div>
    </div>
  );
};

export default ProductCard;
