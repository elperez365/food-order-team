import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return createPortal(
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-midnightGreen text-white shadow-md"
        >
          <IoIosArrowUp className="h-6 w-6" />
        </button>
      )}
    </>,
    document.getElementById("scroll-to-top") as Element,
  );
};

export default ScrollToTopButton;
