import React from "react";
import styled from "styled-components";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { SelectItem, updateUrl,getCatItems } from "../features/catSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Categories = () => {
  const { categories, selected } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {categories.map((item, index) => {
        return (
          <article
            onClick={() => {
              dispatch(SelectItem(item.id));
               dispatch(updateUrl(item.id));
              
            }}
            style={{ backgroundColor: item.color }}
            key={item.id}
          >
            <button>
              {item.selected ? (
                <IoIosRadioButtonOn className="select" />
              ) : (
                <IoIosRadioButtonOff className="select" />
              )}
            </button>
            {item.icon}
            <h4>{item.category}</h4>
            <p>{item.desc}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -40px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  width: 100%;
  /* box-sizing: content-box; */

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 651px) {
    grid-gap: 10px;
  }

  @media (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }

  svg {
    width: 60px;
    height: 60px;
  }

  p {
    font-size: 1rem;
  }
  h4 {
    font-size: 1.5rem;
  }

  article {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin: 10px;

    margin-top: 40px;

    height: 85%;
    padding: 20px 25px;
    color: aliceblue;
    position: relative;
    transition: all 500ms;
  }

  button {
    border: none;

    color: white;
  }

  .select {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  article:hover {
    outline: 3px solid white;
    outline-offset: -5px;
  }
`;

export default Categories;
