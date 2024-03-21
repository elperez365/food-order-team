import NavLink from "./NavLink";
import Cart from "../../Layout/Cart";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCurrentView } from "../../../redux/slices/modalSlice";
import Modal from "../../Modal/Modal";
import { RootState } from "../../../redux/store";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  const currentView = useAppSelector((state: RootState) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul
        className={`${className ? className + " " : ""} items-center justify-center p-4`}
      >
        <NavLink
          onClick={() => {
            dispatch(setCurrentView("history"));
          }}
        >
          History
        </NavLink>
        <NavLink
          onClick={() => {
            dispatch(setCurrentView("cart"));
          }}
        >
          Cart
        </NavLink>
        <Modal isOpen={currentView === "history"}>
          <p>History</p>
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
