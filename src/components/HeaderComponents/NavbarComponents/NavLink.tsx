interface NavLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  numberOf?: number;
}

export default function NavLink({
  numberOf = 0,
  children,
  ...props
}: NavLinkProps) {
  return (
    <>
      <li
        className="cursor-pointer text-3xl text-[clamp(1rem,1vw+1rem,1.5rem)] font-semibold uppercase text-white  drop-shadow-md"
        {...props}
      >
        {children} {numberOf > 0 ? `- (${numberOf})` : ""}
      </li>
    </>
  );
}
