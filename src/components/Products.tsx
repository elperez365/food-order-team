// import useFetch from "./Hooks/useFetch";
// import { getAllProducts } from "../data/endpoints";
import { setProducts } from "../redux/slices/productsSlice";

// import Error from "./UI/Loading/Error";
// import Loading from "./UI/Loading/Loading";
import Categories from "./Categories";
import ProductsList from "./ProductsList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { DUMMYPRODUCTS } from "../data/DUMMY";

const Products = () => {
  const login = useAppSelector((state) => state.login);

  // const { data, loading, error } = useFetch(
  //   getAllProducts,
  //   "products",
  //   setProducts,
  // );

  // if (loading) {
  //   return <Loading />;
  // } else if (error) {
  //   return <Error />;
  // } else {
  const dispatch = useAppDispatch();
  dispatch(setProducts(DUMMYPRODUCTS));
  const data = useAppSelector((state) => state.products);
  return (
    <>
      {login.value ? (
        <h1 className="text-center text-3xl font-bold">
          Welcome {login.user.name}
        </h1>
      ) : (
        <h1 className="text-center text-3xl font-bold">
          Welcome to Re-commerce, please login to see history
        </h1>
      )}
      <Categories />
      <ProductsList data={data} />
    </>
  );
};

export default Products;
