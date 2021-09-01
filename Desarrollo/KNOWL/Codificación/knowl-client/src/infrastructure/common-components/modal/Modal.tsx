import React from "react";
import { createPortal } from "react-dom";
import { modalStyles } from "./modal.styles";

interface IModal {
  modalOpen: boolean;
}

const Modal: React.FC<IModal> = ({ modalOpen, children }) => {
  const classes = modalStyles();
  if (!modalOpen) return null;
  return createPortal(
    <div className={classes.modalContainer}>{children}</div>,
    document.body
  );
};

export default Modal;
