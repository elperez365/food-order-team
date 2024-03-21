import NavLink from "./NavLink";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { closeModal, setCurrentView } from "../../../redux/slices/modalSlice";
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
          <>
            <p>HISTORY</p>
            <button
              className="rounded-md border bg-red-400 px-8 py-4 text-white"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              CLOSE
            </button>
          </>
        </Modal>
        <Modal isOpen={currentView === "cart"}>
          <>
            <p>CART</p>
            <button
              className="rounded-md border bg-red-400 px-8 py-4 text-white"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              CLOSE
            </button>
          </>
        </Modal>
      </ul>
    </>
  );
}
