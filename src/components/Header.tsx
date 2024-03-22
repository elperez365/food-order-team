import Navbar from "./HeaderComponents/Navbar";
import Title from "./HeaderComponents/Title";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full flex-wrap justify-between bg-midnightGreen shadow-xl shadow-antiFlash ">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
