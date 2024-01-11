import React, { useEffect } from "react";
import { getCatItems, updateLocalStorage } from "../features/catSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import DataContainer from "../components/dataContainer";

const Quiz = () => {
  const dispatch = useDispatch();
  const { selected, isLoading } = useSelector((store) => store.category);
  const category = useSelector((store) => store.category);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      dispatch(getCatItems());
    }, 1000);
    return () => {
      clearTimeout(timeoutid)
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="section-center">
      {selected === "" ? (
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
          return <DataContainer {...item} key={Math.random() * 100 * index} />;
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
