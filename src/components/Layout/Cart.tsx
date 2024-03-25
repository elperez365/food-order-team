import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modalSlice";

import Button from "../UI/Button";
import CheckOut from "./CheckOut";
import StatusOrder from "./StatusOrder";
import CartProducts from "./CartProducts";
import CartEmpty from "./CartEmpty";

//lista oggetti carrello
//form
//success

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.value);
  const currentView = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <div className="m-auto flex flex-col py-4">
      {cart.length === 0 && currentView == "cart" && <CartEmpty />}
      {currentView === "cart" && <CartProducts />}
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
