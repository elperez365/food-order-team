import { useState } from "react";
import NavLinks from "./NavLinks";
import ToggleIcon from "./ToggleIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav>
        <NavLinks className="hidden gap-4 drop-shadow-md md:flex" />
        <ToggleIcon onToggle={toggleNav} isOpen={isOpen} />
      </nav>
      {isOpen && (
        <NavLinks className="flex basis-full flex-col items-center justify-center gap-2 md:hidden " />
      )}
    </>
  );
};

export default Navbar;
