import { useRef } from "react";
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

  // useEffect(() => {
  //   if (isOpen) {
  //     dialog.current?.showModal();
  //   } else {
  //     dialog.current?.close();
  //   }
  // }, [isOpen]);
  const display = isOpen ? "flex" : "none";
  const ModalStyle: React.CSSProperties = {
    display: display,
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: "10000",
    justifyContent: "center",
    alignItems: "center",
  };

  function handleClose() {
    dispatch(closeModal());
  }

  return createPortal(
    <>
      <div style={ModalStyle}>
        <dialog
          ref={dialog}
          onClose={handleClose}
          open={isOpen}
          className="rounded-md p-4 backdrop:bg-black/50"
        >
          {children}
        </dialog>
      </div>
    </>,
    document.getElementById("modal") as Element,
  );
}
