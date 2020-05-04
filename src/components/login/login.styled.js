import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 45px;
  border-radius: 7px;
  background-color: #f1f2f7;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const LoginInput = styled.input`
  font-family: Rubik;
  font-size: 12px;
  width: 200px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #b2b5d1;
  border: none;
  outline: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

export const LoginButton = styled.div`
  border: solid 2px #fff;
  padding: 0 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
`;
