import Button from "../UI/Button";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentView } from "../../redux/slices/modalSlice";

import CartProduct from "./CartProduct";

export default function CartProducts() {
  const cart = useAppSelector((state) => state.cart.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex max-h-[500px] flex-col justify-between gap-4 overflow-auto">
        {cart.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <p className="my-4">
        Total: € {cart.reduce((a, b) => a + b.price * b.quantity, 0)}
      </p>
      <Button
        onClick={() => dispatch(setCurrentView("checkout"))}
        style="classic"
        text="Checkout"
      ></Button>
    </>
  );
}
