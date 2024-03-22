type HistoryItemDetailsProps = {
  name: string;
  price: number;
  quantity: number;
};

export default function HistoryItemDetails({
  name,
  price,
  quantity,
}: HistoryItemDetailsProps) {
  return (
    <>
      <div className="mb-2 grid grid-cols-[3fr,1fr] gap-4 border-b border-black/30 text-black/90">
        <p>
          {name} - ${price}
        </p>
        <p>
          {quantity} - ${price * quantity}
        </p>
      </div>
    </>
  );
}
