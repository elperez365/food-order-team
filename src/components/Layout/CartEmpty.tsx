import { FaFaceSadTear } from "react-icons/fa6";

export default function CartEmpty() {
  return (
    <>
      <div className="flex min-h-[300px] items-center justify-center">
        <h1 className="mb-2 text-center text-3xl font-semibold text-faluRed drop-shadow-sm">
          Your Cart Is Empty!
        </h1>
        <FaFaceSadTear />
      </div>
    </>
  );
}
