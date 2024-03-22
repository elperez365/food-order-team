import icon from "../../assets/icon.png";
export default function Title() {
  return (
    <>
      <section className="flex items-center justify-start gap-4 p-4">
        <img
          src={icon}
          alt="logo"
          className=" drop-shadow-white h-16 w-16 max-w-none object-contain"
        />
        <h1 className="text-nowrap text-[clamp(1.6rem,2vw+1rem,3.75rem)] font-semibold uppercase text-white drop-shadow-md max-md:hidden">
          Re-commerce
        </h1>
      </section>
    </>
  );
}
