import styled from "styled-components";

export const TaskContainer = styled.div`
  /* box-shadow: 0 -5px 35px 0 rgba(78, 115, 155, 0.26); */
  background-color: #f1f2f7;
  display: flex;
  width: 350px;
  flex-direction: column;
  padding: 20px;
`;

export const TaskWrapper = styled.div`
  border-radius: 7px;
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 20px;
`;
export const TextWrapper = styled.div`
  margin: 10px 0;
`;

export const PriorityTag = styled.div`
  padding: 10px;
  border-radius: 4px;
  width: fit-content;
  background: ${({ color }) => color};
`;

export const DescriptionArea = styled.textarea`
  width: 100%;
  height: 120px;
  border: 2px solid #cccccc;
  border-radius: 4px;
  resize: none;
  padding: 5px;
  background-position: bottom right;
  background-repeat: no-repeat;
  outline: none;
`;
