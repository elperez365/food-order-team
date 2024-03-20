import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative flex w-full justify-between bg-red-500">
      <section className="flex flex-[3] items-center justify-start gap-4 bg-slate-400 p-4">
        <img
          src="/vite.svg"
          alt="logo"
          className="aspect-square h-20 w-20 max-w-none rounded-full border border-white object-contain"
        />
        <h1 className="text-[clamp(1.6rem,2vw+1rem,3.75rem)] font-semibold uppercase text-white drop-shadow-md">
          Re-commerce
        </h1>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
