import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setProduct } from "../redux/slices/singleProductSlice";
// import { getProductById } from "../data/endpoints";
import Button from "../components/UI/Button";
import { FaBackward } from "react-icons/fa";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { DUMMYPRODUCTS } from "../data/DUMMY";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const product = useAppSelector((state) => state.singleProduct.value);
  const dispatch = useAppDispatch();
  const [imgSelected, setImgSelected] = React.useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (params.id) {
  //     getProductById(params.id).then((data) => {
  //       dispatch(setProduct(data));
  //     });
  //   }
  // }, [params.id]);

  useEffect(() => {
    const product = DUMMYPRODUCTS.find((product) => product.id === params.id);
    if (product) {
      dispatch(setProduct(product));
    }
  }, [params.id]);

  return (
    <>
      <div className="flex h-screen flex-col gap-20 p-5">
        <div className="sticky top-0 z-20 mx-auto flex w-full  rounded-md  max-[400px]:justify-center">
          <Button
            style="textOnly"
            text={<FaBackward className="text-midnightGreen" />}
            onClick={() => {
              navigate("/home");
            }}
          />
          <h1 className="w-full border-b border-midnightGreen p-5 text-center text-3xl font-bold">
            Product Detail
          </h1>
        </div>

        <div className="flex items-center gap-3 rounded-lg   p-5 max-[768px]:flex-col ">
          <div className="flex flex-1 items-center gap-3 overflow-y-scroll  rounded-lg bg-white/70 py-6   sm:flex-col sm:flex-wrap ">
            {product.images.map((img, index) => (
              <img
                className="h-20 w-20 cursor-pointer rounded-md object-cover hover:opacity-50"
                key={index}
                src={img}
                alt="img"
                onClick={() => setImgSelected(index)}
              />
            ))}
          </div>
          <div>
            <img
              key={imgSelected}
              className="h-96 w-96 animate-[fadeIn_750ms_ease] rounded-md object-cover "
              src={product.images[imgSelected]}
              alt="imgSelected"
            />
          </div>

          <div className=" flex min-h-96 flex-1 flex-col justify-around gap-3 border-l  border-midnightGreen p-2 px-8">
            <h1 className="flex flex-col">
              <strong>TITLE</strong>
              {product.title}
            </h1>
            <h2 className="flex flex-col">
              <strong>CATEGORY</strong>
              {product.category}
            </h2>
            <p className="flex flex-col">
              <strong>DESCRIPTION</strong>
              {product.description}
            </p>
            <p className="flex flex-col">
              <strong>PRICE</strong>$ {product.price}
            </p>

            <Button
              style="classic"
              text="Add to cart"
              onClick={() => {
                dispatch(addItem(product));
                toast.success(product.title + " added to cart");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
