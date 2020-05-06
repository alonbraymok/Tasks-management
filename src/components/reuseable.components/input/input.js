import styled from "styled-components";
import React from "react";

export const LoginWrapper = styled.div`
  height: 45px;
  border-radius: 7px;
  background-color: #f1f2f7;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Input = styled.input`
  font-family: Rubik;
  font-size: 20px;
  width: 200px;
  /* font-weight: bold; */
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
export function CommonInput({ placeholder, value, onChange, style }) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...style }}
    />
  );
}
