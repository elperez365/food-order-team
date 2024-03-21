import { useAppDispatch } from "../../../redux/hooks";
import { toggleNavbar } from "../../../redux/slices/navbarSlice";

type ToggleIconProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function ToggleIcon({ isOpen }: ToggleIconProps) {
  const dispatch = useAppDispatch();

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
