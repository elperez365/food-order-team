import NavLink from "./NavLink";

import { useAppDispatch } from "../../../redux/hooks";
import { addItem, removeItem } from "../../../redux/slices/cartSlice";
import { toggleModal, setCurrentView } from "../../../redux/slices/modalSlice";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  const dispatch = useAppDispatch();
  dispatch(setCurrentView(<p>ciao</p>));
  console.log("ul");
  return (
    <>
      <ul
        className={`${className ? className + " " : ""} items-center justify-center p-4`}
      >
        <NavLink
          onClick={() => {
            dispatch(addItem());
            dispatch(toggleModal());
          }}
        >
          History
        </NavLink>
        <NavLink
          onClick={() => {
            dispatch(removeItem());
          }}
        >
          Cart
        </NavLink>
      </ul>
    </>
  );
}
