import icon from "../../assets/icon.png";
export default function Title() {
  return (
    <>
      <section className="flex items-center justify-start px-4 py-2">
        <a href="#top">
          <img
            src={icon}
            alt="re-commerce logo"
            className="h-10 w-10 object-contain object-center drop-shadow-xl"
          />
        </a>
        <h1 className="text-nowrap text-[clamp(1.2rem,1vw+1rem,2rem)] font-semibold uppercase text-white drop-shadow-md max-md:hidden">
          e-commerce
        </h1>
      </section>
    </>
  );
}
