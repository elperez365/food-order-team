import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { JSX } from "react";

export default function Modal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  return createPortal(
    <>
      <dialog ref={dialog}>{children}</dialog>
    </>,
    document.getElementById("modal") as Element,
  );
}
