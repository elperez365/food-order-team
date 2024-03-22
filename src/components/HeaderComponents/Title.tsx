import icon from "../../assets/icon.png";
export default function Title() {
  return (
    <>
      <section className="flex items-center justify-start px-4 py-2">
        <img
          src={icon}
          alt="logo"
          className=" drop-shadow-white h-16 w-16 max-w-none object-contain"
        />
        <h1 className="text-nowrap text-[clamp(1.2rem,1vw+1rem,2rem)] font-semibold uppercase text-white drop-shadow-md max-md:hidden">
          e-commerce
        </h1>
      </section>
    </>
  );
}
