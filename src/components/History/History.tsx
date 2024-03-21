import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modalSlice";

import Button from "../UI/Button";
import HistoryItems from "./HistoryItems";

export default function History() {
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="bg-red-500">
        <h1>History</h1>
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
