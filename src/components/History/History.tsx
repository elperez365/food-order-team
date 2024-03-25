import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modalSlice";

import useFetch from "../Hooks/useFetch";
import { getAllOrders } from "../../data/endpoints";

import Button from "../UI/Button";
import HistoryItems from "./HistoryItems";

import { setOrders } from "../../redux/slices/ordersSlice";

export default function History() {
  const dispatch = useAppDispatch();
  const { data: orders } = useFetch(getAllOrders, "orders", setOrders);

  return (
    <>
      <section className="min-w-[300px] p-4">
        <h1 className="mb-4 text-center text-3xl font-semibold">History</h1>
        <div className="max-h-[500px] overflow-y-auto">
          <HistoryItems orders={orders.value} />
        </div>
        <Button
          onClick={() => dispatch(closeModal())}
          style="textOnly"
          text="Close"
        />
      </section>
    </>
  );
}
