import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { responsiveContext } from "../../../App";
import { AnimationWrapper } from "../../../styledComponents";

// Styled
const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg-light-color);
  overflow: hidden;
`;
const Circle = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  border: 1px solid #d4d3d1;
  border-radius: 50%;
  &:nth-child(1) {
    ${({ $isDesktop, $isMobile }) =>
      $isDesktop
        ? `
    width: 600px;
    height: 600px;
    `
        : $isMobile
        ? `
    width: 200px;
    height: 200px;
    `
        : `
    width: 400px;
    height: 400px;
    `}
  }
  &:nth-child(2) {
    ${({ $isDesktop, $isMobile }) =>
      $isDesktop
        ? `
    width: 1200px;
    height: 1200px;
    `
        : $isMobile
        ? `
    width: 400px;
    height: 400px;
    `
        : `
    width: 800px;
    height: 800px;
    `}
  }
  &:nth-child(3) {
    ${({ $isDesktop, $isMobile }) =>
      $isDesktop
        ? `
    width: 1700px;
    height: 1700px;
    `
        : $isMobile
        ? `
    width: 600px;
    height: 600px;
    `
        : `
    width: 1200px;
    height: 1200px;
    `}
  }
`;

const backgroundVariants = {
  start: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.8,
      delayChildren: 0.5,
    },
  },
};
const circleVariants = {
  start: {
    opacity: 0,
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      delay: index * 0.5 + 2.6,
      duration: 1.2,
    },
  }),
  shadow: (index) => ({
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    boxShadow: [
      "0px 0px 0px rgba(232, 232, 232, 0.8)",
      "30px -10px 50px rgba(232, 232, 232, 0.8)",
      "10px 30px 50px rgba(232, 232, 232, 0.8)",
      "-30px 10px 50px rgba(232, 232, 232,0.8)",
      "-10px -30px 50px rgba(232, 232, 232, 0.8)",
      "30px -10px 50px rgba(232, 232, 232,0.8)",
    ],
    transition: {
      delay: index * 0.8,
      duration: 10,
      ease: "easeInOut",
      boxShadow: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        // repeatDelay: 5,
      },
    },
  }),
};

const HomeBackAnimation = () => {
  const [showShadow, setShowShadow] = useState(false);
  const { isDesktop, isMobile } = useContext(responsiveContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShadow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationWrapper>
      <Background
        variants={backgroundVariants}
        initial="start"
        animate="animate"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Circle
            key={index}
            variants={circleVariants}
            initial="start"
            animate={showShadow ? "shadow" : "visible"}
            custom={index}
            $isDesktop={isDesktop}
            $isMobile={isMobile}
          />
        ))}
      </Background>
    </AnimationWrapper>
  );
};

export default HomeBackAnimation;
