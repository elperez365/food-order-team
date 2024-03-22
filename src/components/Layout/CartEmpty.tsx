import { FaFaceSadTear } from "react-icons/fa6";

export default function CartEmpty() {
  return (
    <>
      <div className="flex min-h-[300px] flex-col items-center justify-center">
        <h1 className="mb-2 text-center text-3xl font-semibold text-amber-500/75 drop-shadow-sm">
          Your Cart Is Empty!
        </h1>
        <FaFaceSadTear className="text-6xl text-amber-500/75 shadow-white drop-shadow-md" />
      </div>
    </>
  );
}
