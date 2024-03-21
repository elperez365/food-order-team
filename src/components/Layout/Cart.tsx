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
  console.log(currentView);
  return (
    <>
      {currentView === "cart" && (
        <>
          <div>
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <Button
            onClick={() => dispatch(setCurrentView("checkout"))}
            style="textOnly"
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
    </>
  );
};

export default Cart;
