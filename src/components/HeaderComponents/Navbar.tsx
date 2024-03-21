import { useAppSelector } from "../../redux/hooks";
import NavLinks from "./NavbarComponents/NavLinks";
import ToggleIcon from "./NavbarComponents/ToggleIcon";

const Navbar = () => {
  const isOpen = useAppSelector((state) => state.navbar.value);

  return (
    <>
      <nav>
        <NavLinks className="hidden gap-4 drop-shadow-md md:flex" />
        <ToggleIcon />
      </nav>
      {isOpen && (
        <NavLinks className="flex basis-full flex-col items-center justify-center gap-2 md:hidden " />
      )}
    </>
  );
};

export default Navbar;
