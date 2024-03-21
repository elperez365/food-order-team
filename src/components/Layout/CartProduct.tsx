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
      <div className="flex" key={product.id}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
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
    </>
  );
}
