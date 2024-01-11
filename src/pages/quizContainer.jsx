import React from "react";
import styled from "styled-components";
import Categories from "../components/categories";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const QuizContainer = () => {
  const navigate = useNavigate();
  const { selected } = useSelector((store) => store.category);

  return (
    <Wrapper>
      <div className="starting-section">
        <p>
          choose one from categories below and see how many questions you can
          <br />
          answer correctly out of 10 questions!
        </p>
        <div className="categories">
          <Categories />
        </div>
        <button
          onClick={() => {
            navigate("/quiz");
          }}
          className="btn start-btn btn-main"
          disabled={!selected ? true : false}
        >
          Start Quiz
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    width: 100%;
    text-align: center;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (max-width: 651px) {
    div {
      font-size: 1rem;
      font-weight: 600;
    }
    .categories {
      width: 100%;
    }
  }

  @media (max-width: 525px) {
    .starting-section p {
      display: none;
    }

    .categories p {
      display: inline;
    }
  }
  .categories {
    width: 80%;
    margin: 0 10%;
  }
  .starting-section {
    margin-top: 5vh;
  }
  button {
    margin-top: 90px;
  }
  .start-btn {
    margin-bottom: 60px;
  }
`;

export default QuizContainer;
