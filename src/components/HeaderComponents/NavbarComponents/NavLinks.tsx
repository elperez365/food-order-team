import { RootState } from "../../../redux/store";

import NavLink from "./NavLink";
import Cart from "../../Layout/Cart";
import Modal from "../../Modal/Modal";
import History from "../../History/History";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCurrentView } from "../../../redux/slices/modalSlice";

import { FaShoppingCart } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  const currentView = useAppSelector((state: RootState) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul
        className={`${className ? className + " " : ""} items-center justify-center px-4 py-2`}
      >
        <NavLink
          onClick={() => {
            dispatch(setCurrentView("history"));
          }}
        >
          <FaClockRotateLeft />
        </NavLink>
        <NavLink
          onClick={() => {
            dispatch(setCurrentView("cart"));
          }}
          numberOf={useAppSelector((state) => state.cart.value.length)}
        >
          <FaShoppingCart />
        </NavLink>
        <Modal isOpen={currentView === "history"}>
          <History key={currentView} />
        </Modal>
        <Modal
          isOpen={
            currentView === "cart" ||
            currentView === "checkout" ||
            currentView === "success"
          }
        >
          <Cart />
        </Modal>
      </ul>
    </>
  );
}
