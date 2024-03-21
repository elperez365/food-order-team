import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleNavbar } from "../../../redux/slices/navbarSlice";

export default function ToggleIcon() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.navbar.value);

  return (
    <>
      <div className="flex h-full items-center justify-center md:hidden">
        <button
          onClick={() => {
            dispatch(toggleNavbar());
          }}
          className="p-4 text-center text-4xl font-semibold text-white hover:brightness-110"
        >
          {isOpen ? "x" : "="}
        </button>
      </div>
    </>
  );
}
