import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TaskWrapper = styled.div`
  padding: 30px;
  border: solid 2px #000;
  display: flex;
  flex-direction: column;
`;

export const DeleteTaskWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
