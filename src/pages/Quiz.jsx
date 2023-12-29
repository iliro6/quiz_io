import React, { useEffect } from "react";
import { getCatItems } from "../features/catSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();

  const { selected } = useSelector((store) => store.category);
  const category = useSelector((store) => store.category);
  const navigate = useNavigate();
  useEffect(() => {
    if (selected === "" || category[`data${selected}`]) {
      null;
    } else {
      dispatch(getCatItems());
    }
  }, []);

  return (
    <main className="section-center">
      {selected === "" ? (
        <Wrapper>
          <h2>oops!</h2>
          <h5>no category selected</h5>
          <button onClick={()=>{
            navigate('/');
          }} className="btn">choose one</button>
        </Wrapper>
      ) : null}
    </main>
  );
};

const Wrapper = styled.div`
 text-align: center;
  button{
    margin-top: 10px;
    border-radius: 10px;
  }
`

export default Quiz;
