import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeModal,setupResult } from "../features/catSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal-container">
        <h3>Are you sure ?</h3>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
                dispatch(closeModal());
              dispatch(setupResult());
            }}
          >
            Yes
          </button>
          <button onClick={()=> dispatch(closeModal())} className="btn">No</button>
        </div>
      </div>
      <div className="filter-layout"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    margin-bottom: 100px;
  }

  .btn-container button {
    /* padding: 20px; */
    font-size: 0.85rem;
    border-radius: 5px;
    margin: 10px;
    padding: 14px 44px;
  }
`;

export default Modal;
