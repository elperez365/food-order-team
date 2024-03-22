import useFetch from "./Hooks/useFetch";
import { getAllProducts } from "../data/endpoints";
import { setProducts } from "../redux/slices/productsSlice";

import Error from "./UI/Loading/Error";
import Loading from "./UI/Loading/Loading";
import Categories from "./Categories";
import ProductsList from "./ProductsList";

const Products = () => {
  const { data, loading, error } = useFetch(
    getAllProducts,
    "products",
    setProducts,
  );

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <>
        <Categories />
        <ProductsList data={data} />
      </>
    );
  }
};

export default Products;
