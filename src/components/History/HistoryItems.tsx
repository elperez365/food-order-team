import HistoryItem from "./HistoryItem";

import { order } from "../../data/types";

type HistoryItemsProps = {
  orders: order[];
};

export default function HistoryItems({ orders }: HistoryItemsProps) {
  return (
    <>
      {orders.map((order) => (
        <HistoryItem key={order.id} {...order} />
      ))}
    </>
  );
}
