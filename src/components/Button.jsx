import React from "react";
import styled from "styled-components";
import { ButtonStyle } from "../styledComponents";
import { ArrowIcon } from "./ArrowIcon";

const Container = styled.button`
  ${ButtonStyle}
`;

const Button = ({ text, setIsAllView }) => {
  return (
    <Container onClick={() => setIsAllView((prev) => !prev)}>
      {text}
      <ArrowIcon />
    </Container>
  );
};

export default Button;
