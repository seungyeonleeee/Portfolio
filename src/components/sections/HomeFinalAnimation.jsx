import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import {
  AnimationWrapper,
  Inner,
  TextGroup,
  MainElement,
} from "../../styledComponents";
import { titles } from "../../utlis";

// Styled
const HomeInner = styled(Inner)`
  position: relative;
  z-index: 1;
`;

// Variants
const WrapperVariants = {
  start: { opacity: 0, filter: "blur(10px)" },
  end: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: 2, duration: 1 },
  },
};
const FadeInVariants = {
  start: (custom) => ({
    opacity: 0,
    x: custom?.coord?.x || 0,
    y: custom?.coord?.y || 0,
    translateX: custom?.index === 0 ? "-50%" : "0%",
  }),
  end: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    translateX: custom?.index === 0 ? "-50%" : "0%",
    transition: {
      delay: custom?.delay || 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
};
const firstCVariants = {
  initial: { rotate: 0, translateX: "0%" },
  animate: {
    rotate: -30,
    translateX: "-33%",
    transition: { delay: 2.4, duration: 1, type: "tween" },
  },
};
const secondCVariants = {
  initial: { opacity: 0, rotate: 0, translateX: "0%" },
  animate: {
    opacity: 1,
    rotate: 150,
    translateX: "33%",
    transition: { delay: 2.4, duration: 1, type: "tween" },
  },
};

const HomeFinalAnimation = () => {
  return (
    <AnimationWrapper
      variants={WrapperVariants}
      initial="start"
      animate="end"
      exit="exit"
    >
      <HomeInner>
        <MainElement
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            variants={firstCVariants}
            initial="initial"
            animate="animate"
          >
            C
          </motion.span>
          <motion.span
            variants={secondCVariants}
            initial="initial"
            animate="animate"
          >
            C
          </motion.span>
        </MainElement>
        {titles.map((title, index) => (
          <TextGroup
            key={index}
            className="sub-title"
            data-index={index}
            custom={{ coord: { x: 20, y: 0 }, index, delay: index * 0.5 + 0.8 }}
            initial="start"
            animate="end"
            variants={FadeInVariants}
          >
            <h2>{title.keyword}</h2>
            <p>{title.description}</p>
          </TextGroup>
        ))}
      </HomeInner>
    </AnimationWrapper>
  );
};

export default HomeFinalAnimation;
