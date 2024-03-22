import Button from "../UI/Button";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentView } from "../../redux/slices/modalSlice";

import CartProduct from "./CartProduct";

export default function CartProducts() {
  const cart = useAppSelector((state) => state.cart.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex flex-col justify-between gap-4">
        {cart.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <Button
        onClick={() => dispatch(setCurrentView("checkout"))}
        style="classic"
        text="Checkout"
      ></Button>
    </>
  );
}
