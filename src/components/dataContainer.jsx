import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { unescapeHtml, shuffle } from "../util/functions";
import { selectChoice } from "../features/catSlice";


const DataContainer = (props) => {
  const {
    category,
    question,
    correct_answer,
    incorrect_answers,
    index,
    selected,
  } = props;
  const dispatch = useDispatch();
  const newArr = [...incorrect_answers, correct_answer];

  useEffect(() => {
    shuffle(newArr);
    
  });

  return (
    <Wrapper>
      <div className="single_question">
        <h5>{`${index + 1}. ${unescapeHtml(question)}`}</h5>
        <div className="choices">
          {newArr.map((item, index) => {
            const alphabet = "abcdefghijklmnopqrstuvwxyz";

            return (
              <div
                onClick={() => {
                  const payloadObj = { item, question };
                  dispatch(selectChoice(payloadObj));
                }}
                key={Math.random()}
                className="single_choice"
              >
                <FaCheckCircle className="fa-check" />
                <p
                  className={`choice ${selected === item ? "selected" : null} `}
                >{`${alphabet[index].toUpperCase()}. ${unescapeHtml(
                  item.toString()
                )}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .single_question {
    width: 600px;
  }
  display: flex;
  width: 90%;
  margin: 1% 5%;
  .single_choice {
    position: relative;
  }
  .fa-check {
    color: green;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 10px;
    width: 30px;
    height: 30px;
    display: none;
  }
  .choice {
    color: white;
    padding: 14px;
    font-weight: 600;
    border-radius: 5px;
    background-color: black;

    transition: all 1s;
  }

  .choice:hover {
    background-color: rgb(145, 132, 244);
  }

  .selected {
    background-color: rgb(145, 132, 244);
  }
`;
export default DataContainer;
