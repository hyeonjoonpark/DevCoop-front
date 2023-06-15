import React from "react";
import * as _ from "./style";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <_.ModalOverlay>
      <_.ModalContent>
        {children}
      </_.ModalContent>
    </_.ModalOverlay>
  );
};

export default Modal;
