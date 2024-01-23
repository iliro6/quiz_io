import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";


const Finalresult = ({ result }) => {
  const { uncompleted, wrongs, checked } = result;
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
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
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
        </ResponsiveContainer>
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
    flex-direction: column;
    flex-direction: column-reverse;
    .result-section-divider {
      width: 90%;
      margin: 0 5%;
    }

    .result-sec {
      width: 90%;
      margin: 2% 5%;
      margin-top: 25px;
    }
    .chart {
      width: 90%;
      margin: 0 5%;
      /* margin-top: 10px; */
    }
  }
`;

export default Finalresult;
