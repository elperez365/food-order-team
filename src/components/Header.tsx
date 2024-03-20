import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative flex w-full justify-between bg-red-500 px-8 py-4">
      <section className="flex items-center justify-center gap-4 bg-slate-400">
        <img
          src="/vite.svg"
          alt="logo"
          className="object-container aspect-square h-full w-20 rounded-full border border-white"
        />
        <h1 className="text-6xl text-white drop-shadow-md">React Food</h1>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
