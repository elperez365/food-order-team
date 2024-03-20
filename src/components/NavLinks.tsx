type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <>
      <ul
        className={`${className ? className + " " : ""} items-center justify-center p-4 text-3xl font-semibold uppercase text-white drop-shadow-md [&>*]:cursor-pointer [&>*]:p-4`}
      >
        <li>History - ()</li>
        <li>Cart - ()</li>
      </ul>
    </>
  );
}
