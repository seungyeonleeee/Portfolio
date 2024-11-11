import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimationWrapper } from "../../styledComponents";

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
  border: 1px solid #f1eee9;
  border-radius: 50%;

  &:nth-child(1) {
    width: 600px;
    height: 600px;
  }
  &:nth-child(2) {
    width: 1200px;
    height: 1200px;
  }
  &:nth-child(3) {
    width: 1700px;
    height: 1700px;
  }
`;

const backgroundVariants = {
  start: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.6,
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 1,
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
    boxShadow: "0px 0px 0px rgba(240, 239, 238, 0)",
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    boxShadow: "0px 0px 0px rgba(240, 239, 238, 0)",
    transition: {
      delay: 3.8 + index * 0.8,
      duration: 1.2,
    },
  }),
  shadow: (index) => ({
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    boxShadow: "30px -10px 100px rgba(240, 239, 238, 0.8)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      boxShadow: {
        // delay: 3.6,
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 7,
      },
    },
  }),
};

const HomeBackAnimation = () => {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShadow(true);
    }, 2000); // Circle이 나타난 후 2초 뒤에 그림자 효과 시작

    return () => clearTimeout(timer);
  }, []);

  // transition={{
  //   duration: 1,
  //   delay: index * 0.8 + 1,
  //   boxShadow: {
  //     delay: index * 0.8 + 3.6,
  //     duration: 1.5,
  //     ease: "easeInOut",
  //     repeat: Infinity,
  //     repeatType: "reverse",
  //   },
  // }}

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
            index={index}
          />
        ))}
      </Background>
    </AnimationWrapper>
  );
};

export default HomeBackAnimation;
