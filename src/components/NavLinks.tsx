import NavLink from "./NavLink";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <>
      <ul
        className={`${className ? className + " " : ""} items-center justify-center p-4`}
      >
        <NavLink>History - ()</NavLink>
        <NavLink>Cart - ()</NavLink>
      </ul>
    </>
  );
}
