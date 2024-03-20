import Navbar from "./HeaderComponents/Navbar";
import Title from "./HeaderComponents/Title";
const Header = () => {
  return (
    <header className="bg-midnightGreen sticky top-0 z-20 mx-auto flex w-full flex-wrap justify-between border-b border-white max-[400px]:justify-center">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
