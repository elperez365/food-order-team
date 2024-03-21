import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modalSlice";

import useFetch from "../Hooks/useFetch";
import { getAllOrders } from "../../data/endpoints";

import Button from "../UI/Button";
import HistoryItems from "./HistoryItems";

import { orderHistory } from "../../data/types";
import { setOrders } from "../../redux/slices/ordersSlice";

export default function History() {
  const dispatch = useAppDispatch();
  const { data: orders } = useFetch(getAllOrders, "orders", setOrders);

  return (
    <>
      <section className="min-w-[300px] p-4">
        <h1 className="text-center text-3xl font-semibold">History</h1>
        {orders.value.map((order: orderHistory) => (
          <p>{order.id}</p>
        ))}
        <HistoryItems />
        <Button
          onClick={() => dispatch(closeModal())}
          style="textOnly"
          text="Close"
        />
      </section>
    </>
  );
}
