import React from "react";
import styled from "styled-components";
import { CommonText } from "../text/text";

const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  width: 260px;
  height: 46px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #e2e8f9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CommonButton = ({ onClick, title }) => {
  return (
    <Wrapper onClick={onClick}>
      <CommonText size={"15px"} value={title} />
    </Wrapper>
  );
};

export { CommonButton };
