import React from "react";
import styled from "styled-components";
import { MdOutlineError } from "react-icons/md";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Error = ({error_type}) => {
  const navigate = useNavigate();
  return (
    <Wrapper className="section-center">
      <main>
        <h1>404</h1>
        <div className="icon-container">
          <h3>Error</h3>
           <div className="line-1"></div>
           <div className="line-2"></div>
          <VscDebugDisconnect className="icon" />
        </div>
        <button
          onClick={() => {
            if(error_type==='fetching'){
              navigate(0)
            }
            navigate("/");
          }}
          className="btn"
        >
          {error_type==='fetching' ? 'refresh':'get back'}
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
  

  .icon {
    width: 45px;
    height: 45px;
  }
  .icon-container {
    position: relative;
  }

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
    border: 2px solid black;
  }
  button {
    background-color: red;
  
  }
  .line-1 {
    width: 105px;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 83px;
    left: -47px;
  }
  .line-2 {
    width: 110px;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 47px;
    left: 93px;
  }
  button:hover {
    background-color: #6f0000;
  }

  @media (max-width: 800px) {
    
    .line-1 {
      width: 105px;
      height: 2px;
      background-color: black;
      position: absolute;
      top: 81px;
      left: -47px;
    }
    
    main{
      margin-top: -45px;
    }

    .line-2 {
      width: 110px;
      height: 2px;
      background-color: black;
      position: absolute;
      top: 45px;
      left: 93px;
    }
  }
`;

export default Error;
