import { useAppSelector } from "../../redux/hooks";

type HistoryItemDetailsProps = {
  id: number;
  price: number;
  quantity: number;
};

export default function HistoryItemDetails({
  id,
  price,
  quantity,
}: HistoryItemDetailsProps) {
  const products = useAppSelector((state) => state.products.value);
  function findProductNameById(productId: string) {
    const productName = products.find(
      (product) => product.id === productId,
    )?.title;
    return productName;
  }

  return (
    <>
      <div className="mb-2 grid grid-cols-[3fr,1fr] gap-4 border-b border-black/30 text-black/90">
        <p>
          {findProductNameById(id.toString())} - ${price}
        </p>
        <p>
          {quantity} - ${price * quantity}
        </p>
      </div>
    </>
  );
}
