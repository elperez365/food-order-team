import Navbar from "./Navbar";
import Title from "./Title";
const Header = () => {
  return (
    <header className="max-[350] relative flex w-full flex-wrap justify-between bg-black/55 max-[400px]:justify-center">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
