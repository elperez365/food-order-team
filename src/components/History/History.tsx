import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modalSlice";

import Button from "../UI/Button";
import HistoryItems from "./HistoryItems";

export default function History() {
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="min-w-[300px] p-4">
        <h1 className="text-center text-3xl font-semibold">History</h1>
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
