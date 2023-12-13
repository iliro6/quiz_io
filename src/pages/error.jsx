import React from "react";
import styled from "styled-components";
import { MdOutlineError } from "react-icons/md";
import crossWall from "../assets/cross.png";
import {  useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="section-center">
      <img src={crossWall} alt="cross-wall" />
      <main>
        <h1>404</h1>
        <h3>Error</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn"
        >
          get back
        </button>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    top: 0;
    width: 80%;

    position: absolute;
    z-index: -100;
  }
  main {
    background-color: rgba(236, 233, 233, 0.5);
    display: inline-block;
    padding: 3rem;
    text-align: center;
    border-radius: 3px;
    backdrop-filter: blur(30px);
    overflow: hidden;
    position: absolute;
    top: 250px;
  }
  button {
    background-color: red;
  }
  button:hover {
    background-color: #6f0000;
  }
`;

export default Error;
