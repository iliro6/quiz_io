import React from "react";
import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <Wrapper>
        <h3>
          quiz.io<span className="dot">.</span>
        </h3>
        <div className="pfp">
          <FaCircleUser className="user-icon" />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 35px;
  color: black;
  display: flex;
  justify-content: space-between;

  ::first-letter {
    font-size: 3rem;
  }
  .dot {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 3rem;
  }

  .pfp {
    width: 60px;
    height: 60px;

    svg {
      width: 50px;
      height: 50px;
    }

    @media (max-width:880px) {
      svg{
        width:40px ;
        height: 55px;
      }
    }
  }
`;

export default Navbar;
