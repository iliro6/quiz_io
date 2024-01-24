import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { restartTheQuiz } from "../features/catSlice";

const Finalresult = ({ result }) => {
  const { uncompleted, wrongs, checked } = result;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data01 = [
    { name: "uncompleted", value: uncompleted },
    { name: "correct", value: checked },
    { name: "incorrect", value: wrongs },
  ];
  return (
    <Wrapper>
      <div className="result-section-divider">
        <div className="result-sec correct-section">
          <h4>correct Answers : {checked}/10</h4>
        </div>
        <div className="result-sec correct-section">
          <h4>incorrect Answers : {wrongs}/10</h4>
        </div>
        <div className="result-sec correct-section">
          <h4>uncompleted questions: {uncompleted}/10</h4>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => dispatch(restartTheQuiz())}>
            do it again
          </button>

          <button className="btn" onClick={() => navigate("/")}>
            go to home
          </button>
        </div>
      </div>
      <div className="chart">
        <PieChart className="piechart" width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#000000"
            label
          />

          <Tooltip />
        </PieChart>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  width: 90%;
  margin: 0 5%;
  .result-section-divider {
    width: 45%;
  }
  .result-sec {
    border: 3px solid black;
    padding: 14px;
    margin-top: 10px;
  }
  .chart {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-65px);
  }

  .btn-container {
    display: flex;
    justify-content: center;
  }
  button {
    border-radius: 5px;
    background-color: black;
    width: 100%;
    margin: 2% 0.25%;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }

  @media (min-width: 1150px) {
    width: 90%;
    margin: 0 10%;
    .result-section-divider {
      width: 35%;
    }
    .chart {
      width: 35%;
    }
  }
  @media (max-width: 670px) {
    border: 3px solid black;
    flex-direction: column;
    flex-direction: column-reverse;
    .result-section-divider {
      width: 90%;
      margin: 0 5%;
    }

    .result-sec {
      width: 90%;
      margin: 2% 5%;
      margin-top: -10px;
      margin-bottom: 30px;
    }
    .chart {
      width: 90%;
      margin: 0 5%;
      transform: translateY(0px);
      margin-top: -80px;
    }
    button {
      border-radius: 5px;
      background-color: black;
      width: 90%;
      font-size: 0.75rem;
      margin: 2% 5%;
    }
  }
`;

export default Finalresult;
