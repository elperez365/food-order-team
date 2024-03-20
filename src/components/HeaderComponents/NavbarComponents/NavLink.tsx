import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

interface NavLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export default function NavLink({ children, ...props }: NavLinkProps) {
  const cart = useAppSelector((state: RootState) => state.cart);
  return (
    <>
      <li
        className="cursor-pointer p-4 text-3xl text-[clamp(1rem,1vw+1rem,2rem)] font-semibold uppercase text-white  drop-shadow-md"
        {...props}
      >
        {children} - ({cart.value.length})
      </li>
    </>
  );
}
