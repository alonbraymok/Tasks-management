import React from "react";
import styled from "styled-components";
import { CommonText } from "../text/text";

const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  background: rgb(255, 163, 53);
  background: linear-gradient(
    74deg,
    rgba(255, 163, 53, 1) 0%,
    rgba(212, 132, 43, 0.7693452380952381) 37%,
    rgba(186, 81, 3, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CommonButton = ({ onClick, title }) => {
  return (
    <Wrapper onClick={onClick}>
      <CommonText size={"25px"} value={title} />
    </Wrapper>
  );
};

export { CommonButton };
