import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const isOpen = true;

export default function Modal() {
  const dialog = useRef<HTMLDialogElement>(null!);

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);

  return createPortal(
    <>
      <dialog ref={dialog}>
        <div>
          <p>Sono Una Modale</p>
        </div>
      </dialog>
    </>,
    document.getElementById("modal") as Element,
  );
}
