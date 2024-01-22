import React, { useEffect } from "react";
import { getCatItems } from "../features/catSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import Error from "../pages/error";
import DataContainer from "../components/dataContainer";
import { PrimitiveEquality } from "../util/functions";
import Modal from "../components/modal";


const Quiz = () => {
  const dispatch = useDispatch();
  const { selected, isLoading, error, quizResult } = useSelector(
    (store) => store.category
  );
  const category = useSelector((store) => store.category);
  const {isModalOpen} = useSelector(store=>store.category);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      if (category[`data${selected}`]) {
        var epmtArr = [];
        if (PrimitiveEquality(category[`data${selected}`], epmtArr)) {
          dispatch(getCatItems());
        }
        null;
      } else {
        dispatch(getCatItems());
      }
    }, 100);

    return () => {
      clearTimeout(timeoutid);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
 
  if(isModalOpen){
    return <Modal/>
  }

  if (category[`result${selected}`]){
    return <h2>hiu</h2>
  }
    return (
      <main className="section-center">
        {selected === null ? (
          <ErrorWrapper>
            <h2>oops!</h2>
            <h5>no category selected</h5>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn"
            >
              choose one
            </button>
          </ErrorWrapper>
        ) : (
          <MainWrapper>
            {category[`data${selected}`]?.map((item, index) => {
              return (
                <DataContainer
                  index={index}
                  {...item}
                  key={Math.random() * 100 * index}
                />
              );
            })}
            
          </MainWrapper>
        )}
      </main>
    );
};

const ErrorWrapper = styled.div`
  text-align: center;
  button {
    margin-top: 10px;
  }
  @media (max-width: 525px) {
    margin-top: 50px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
 position: relative;
  flex-direction: column;
  justify-content: center;
  margin: 0;


`;

export default Quiz;
