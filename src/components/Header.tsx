import Navbar from "./HeaderComponents/Navbar";
import Title from "./HeaderComponents/Title";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full flex-wrap justify-between border-b border-white bg-midnightGreen ">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
