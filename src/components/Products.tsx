import ProductCard from "./ProductCard";
import useFetch from "./Hooks/useFetch";
import { getAllProducts } from "../data/endpoints";
import { setProducts } from "../redux/slices/productsSlice";
import { product } from "../data/types";

const Products = () => {
  const { data, loading, error } = useFetch(
    getAllProducts,
    "products",
    setProducts,
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"
        ></div>
        <p className="ml-2">loading...</p>
      </div>
    );
  } else if (error) {
    return (
      <div className="m-32 flex items-center justify-center">
        <p>Error Loading!</p>
      </div>
    );
  } else {
    return (
      <div
        id="products-start"
        className="flex flex-col items-center justify-center gap-4 md:mx-auto md:flex-row md:flex-wrap"
      >
        {data.value.map((product: product) => (
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
  }
};

export default Products;
