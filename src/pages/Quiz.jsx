import React, { useEffect } from "react";
import { getCatItems, updateLocalStorage } from "../features/catSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import Error from "../pages/error";
import DataContainer from "../components/dataContainer";

const Quiz = () => {
  const dispatch = useDispatch();
  const { selected, isLoading, error } = useSelector((store) => store.category);
  const category = useSelector((store) => store.category);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      let dataTemp = `data${selected}`;

      
        dispatch(getCatItems());
      
    }, 0);
    return () => {
      clearTimeout(timeoutid);
    };
  }, []);



  if (isLoading) {
    return <Loading />;
  }

  if(error){
    return <Error error_type={'fetching'}/>
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
        category[`data${selected}`]?.map((item, index) => {
          return <DataContainer  index={index} {...item} key={Math.random() * 100 * index} />;
        })
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

export default Quiz;
