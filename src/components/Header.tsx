import Navbar from "./Navbar";
import Title from "./Title";
const Header = () => {
  return (
    <header className="relative flex w-full flex-wrap justify-between bg-black/55">
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
