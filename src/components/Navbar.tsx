import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav>
        <NavLinks className="hidden gap-4 drop-shadow-md md:flex" />
        <div className="flex h-full items-center justify-center md:hidden">
          <button
            onClick={toggleNav}
            className="p-4 text-center text-4xl font-semibold text-white hover:brightness-110"
          >
            {isOpen ? "x" : "="}
          </button>
        </div>
      </nav>
      {isOpen && (
        <NavLinks className="flex basis-full flex-col items-center justify-center gap-2 md:hidden " />
      )}
    </>
  );
};

export default Navbar;
