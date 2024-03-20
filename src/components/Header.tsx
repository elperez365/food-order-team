import Navbar from "./Navbar";
import Title from "./Title";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full flex-wrap justify-between border-b border-white bg-black/90 max-[400px]:justify-center">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
