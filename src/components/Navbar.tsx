import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav>
        <ul className="hidden h-full flex-1 items-center justify-center gap-4 bg-blue-200 p-4 text-3xl font-semibold uppercase text-white drop-shadow-md md:flex">
          <li>History - ()</li>
          <li>Cart - ()</li>
        </ul>
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
        <ul className="flex basis-full flex-col items-center justify-center gap-2 text-amber-400 md:flex md:hidden [&>*]:cursor-pointer [&>*]:p-4">
          <li>History - ()</li>
          <li>Cart - ()</li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
