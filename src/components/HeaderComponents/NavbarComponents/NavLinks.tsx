import NavLink from "./NavLink";

import { useAppDispatch } from "../../../redux/hooks";
import { addItem, removeItem } from "../../../redux/slices/cartSlice";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  const dispatch = useAppDispatch();
  console.log("ul");
  return (
    <>
      <ul
        className={`${className ? className + " " : ""} items-center justify-center p-4`}
      >
        <NavLink
          onClick={() => {
            dispatch(addItem());
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
