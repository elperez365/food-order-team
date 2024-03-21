import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { JSX } from "react";

import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modalSlice";

export default function Modal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element;
}) {
  const dispatch = useAppDispatch();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  function handleClose() {
    dispatch(closeModal());
  }

  return createPortal(
    <>
      <dialog ref={dialog} onClose={handleClose}>
        {children}
      </dialog>
    </>,
    document.getElementById("modal") as Element,
  );
}
