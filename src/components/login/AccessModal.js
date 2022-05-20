/* eslint-disable no-self-assign */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { LoginScreen } from "./LoginScreen";
import { SignUpScreen } from "./SignUpScreen";
import { closeModal } from "../../redux/loginSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const AccessModal = () => {
  const modal = useSelector((state) => state.login.modal);
  
  const dispatch = useDispatch();

  function modalOff() {
    dispatch(closeModal());
  }

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={modalOff}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
        <div className="container">
          <div className="row mt-2">
            <div className="col m-2 p-5 border rounded"><LoginScreen /></div>
            <div className="col m-2 p-5 border rounded"><SignUpScreen /></div>
          </div>
          <div className="d-flex mt-2">
            <button className="btn btn-dark" onClick={modalOff}>Close</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
