import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 400px;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PriorityWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  width: 100%;
`;

export const PriorityTag = styled.div`
  padding: 10px;
  border-radius: 4px;
  width: fit-content;
  background: ${({ bgColor }) => bgColor};
  cursor: pointer;
  border: ${({ selected }) =>
    selected ? "solid 2px #fff" : "solid 2px rgb(55, 58, 71)"};
`;
