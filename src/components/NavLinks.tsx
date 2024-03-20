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
        <NavLink
          onClick={() => {
            console.log("history");
          }}
        >
          History - ()
        </NavLink>
        <NavLink
          onClick={() => {
            "cart";
          }}
        >
          Cart - ()
        </NavLink>
      </ul>
    </>
  );
}
