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
  background-clip: padding-box;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--bg-accent-color);
    animation: buttonBackground 2s ease-in-out both infinite;
  }
  @keyframes buttonBackground {
    0% {
      width: 0;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
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
