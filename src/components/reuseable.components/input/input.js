import styled from "styled-components";
import React from "react";

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  border: solid 2px #b2b5d1;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 500;
  color: #b2b5d1;
  ::placeholder {
    font-family: Rubik;
    font-size: 15px;
    font-weight: 500;
    color: #b2b5d1;
  }
`;
export function CommonInput({ placeholder, value, onChange }) {
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
}
