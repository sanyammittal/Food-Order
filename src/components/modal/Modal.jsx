import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
export default function Modal({ children, open, size }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`${classes.dialog} ${size}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
