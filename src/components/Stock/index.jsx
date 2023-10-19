import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import * as S from "./style";
import { axiosInstance } from "../../axios/index";

const Stock = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
};

  return (
    <>
      <Modal isOpen={modalOpen}>
        <button onClick={closeModal}>취소</button>
      </Modal>
    </>
  );
};

export default Stock;
