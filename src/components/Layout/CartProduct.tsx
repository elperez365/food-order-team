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
        className="mb-2 flex items-center justify-between border-b-2"
        key={product.id}
      >
        <div className="flex gap-3">
          <p>{product.name}</p>
          <p>€ {product.price}</p>
          <p>Qt. {product.quantity}</p>
        </div>
        <div>
          <Button
            onClick={() => {
              dispatch(addQuantityByOne(product.id));
            }}
            text="+"
            style="classic"
          />

          <Button
            onClick={() => {
              dispatch(removeQuantityByOne(product.id));
            }}
            text="-"
            style="classic"
          />
        </div>
      </div>
    </>
  );
}
