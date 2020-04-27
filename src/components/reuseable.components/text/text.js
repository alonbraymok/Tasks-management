import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: ${({ fontFamily }) => fontFamily || "Rubik"};
  font-size: ${({ size }) => size || "15px"};
  color: ${({ color }) => color || "#fff"};
`;

const CommonText = ({ value, size, color, style, fontFamily }) => {
  return (
    <Text
      size={size}
      color={color}
      style={{ ...style }}
      fontFamily={fontFamily}
    >
      {value}
    </Text>
  );
};

export { CommonText };
