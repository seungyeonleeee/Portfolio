import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { responsiveContext } from "../App";
import { ButtonStyle } from "../styledComponents";
import { ArrowIcon } from "./ArrowIcon";

const Container = styled.button`
  ${ButtonStyle}
  width: ${({ $isMobile }) => ($isMobile ? "auto" : "220px")};
  padding: ${({ $isMobile }) => ($isMobile ? "10px 25px" : "12px 40px")};
`;

const Button = ({ text, setIsAllView }) => {
  const { isMobile } = useContext(responsiveContext);
  return (
    <Container
      $isMobile={isMobile}
      onClick={() => setIsAllView((prev) => !prev)}
    >
      {text}
      <ArrowIcon />
    </Container>
  );
};

export default Button;
