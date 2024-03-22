import Button from "../UI/Button";
import {
  addQuantityByOne,
  removeQuantityByOne,
} from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { productForOrder } from "../../data/types";

type CartProductProps = {
  product: productForOrder;
};

export default function CartProduct({ product }: CartProductProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="mb-2 flex w-full items-center justify-between border-b-2"
        key={product.id}
      >
        <div className="flex w-1/3">
          <p>{product.name}</p>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-2 md:flex-row md:justify-around">
          <p>€ {product.price}</p>
          <p>Qt. {product.quantity}</p>
        </div>
        <div className="flex w-1/3 justify-end">
          <Button
            onClick={() => {
              dispatch(removeQuantityByOne(product.id));
            }}
            text="-"
            style="classic"
          />
          <Button
            onClick={() => {
              dispatch(addQuantityByOne(product.id));
            }}
            text="+"
            style="classic"
          />
        </div>
      </div>
    </>
  );
}
