import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { responsiveContext } from "../../../App";
import {
  AnimationWrapper,
  Inner,
  TextGroup,
  MainElement,
} from "../../../styledComponents";
import { titles } from "../../../utils";

// Styled
const HomeInner = styled(Inner)`
  position: relative;
  z-index: 1;
`;

// Variants
const WrapperVariants = {
  start: { opacity: 0, filter: "blur(20px)" },
  end: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1 },
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
    transition: { delay: 2.6, duration: 0.8, type: "tween" },
  },
};
const secondCVariants = {
  initial: { opacity: 0, rotate: 0, translateX: "0%" },
  animate: {
    opacity: 1,
    rotate: 150,
    translateX: "33%",
    transition: { delay: 2.6, duration: 0.8, type: "tween" },
  },
};
const mobileFadeVariants = {
  enter: {
    x: 20,
    translateX: "-50%",
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      duration: 0.7,
    },
  },
  center: {
    x: 0,
    translateX: "-50%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: -20,
    translateX: "-50%",
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      duration: 0.7,
    },
  },
};

const HomeFinalAnimation = () => {
  const { isMobile } = useContext(responsiveContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

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
          transition={{ duration: 1.2 }}
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
        {isMobile ? (
          <AnimatePresence>
            <TextGroup
              key={currentIndex}
              className="sub-title sub-title-mobile"
              data-index={currentIndex}
              variants={mobileFadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h2>{titles[currentIndex].keyword}</h2>
              <p>{titles[currentIndex].description}</p>
            </TextGroup>
          </AnimatePresence>
        ) : (
          titles.map((title, index) => (
            <TextGroup
              key={index}
              className="sub-title sub-title-desktop"
              data-index={index}
              custom={{ coord: { x: 20, y: 0 }, index, delay: index * 0.5 + 1 }}
              initial="start"
              animate="end"
              variants={FadeInVariants}
            >
              <h2>{title.keyword}</h2>
              <p>{title.description}</p>
            </TextGroup>
          ))
        )}
      </HomeInner>
    </AnimationWrapper>
  );
};

export default HomeFinalAnimation;
