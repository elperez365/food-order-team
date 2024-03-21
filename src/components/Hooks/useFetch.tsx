import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function useFetch(
  fetcher: Function,
  sliceName: string,
  action: Function,
) {
  const data = useAppSelector(
    (state: { [key: string]: any }) => state[sliceName],
  );
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetcher()
      .then((data: any) => {
        dispatch(action(data));
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

// use case
//const { data, loading, error }= useFetch(getAllProducts, "products", setProducts);
