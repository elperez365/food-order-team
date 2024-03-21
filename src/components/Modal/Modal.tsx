import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export default function Modal() {
  const currentView = useAppSelector(
    (state: RootState) => state.modal.value.currentView,
  );
  const isOpen = useAppSelector((state: RootState) => state.modal.value.isOpen);
  const dialog = useRef<HTMLDialogElement>(null!);

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <>
      <dialog ref={dialog}>
        <div>{currentView}</div>
      </dialog>
    </>,
    document.getElementById("modal") as Element,
  );
}
