import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { closeModal, setCurrentView } from "../../redux/slices/modalSlice";
import CartProduct from "./CartProduct";
import Button from "../UI/Button";
import CheckOut from "./CheckOut";
import StatusOrder from "./StatusOrder";

//lista oggetti carrello
//form
//success

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.value);
  const currentView = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();
  //console.log(currentView);
  return (
    <div className="m-auto flex w-full flex-col py-4">
      {currentView === "cart" && (
        <>
          <div className="flex flex-col justify-between gap-4">
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
      )}
      {currentView === "checkout" && <CheckOut />}

      {currentView === "success" && <StatusOrder />}

      <Button
        onClick={() => dispatch(closeModal())}
        style="textOnly"
        text="Close"
      ></Button>
    </div>
  );
};

export default Cart;
