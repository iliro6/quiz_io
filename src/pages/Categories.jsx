import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Categories;
