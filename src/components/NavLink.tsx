interface NavLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: string;
}

export default function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <>
      <li
        className="cursor-pointer p-4 text-3xl text-[clamp(1rem,1vw+1rem,2rem)] font-semibold uppercase text-white  drop-shadow-md"
        {...props}
      >
        {children}
      </li>
    </>
  );
}
