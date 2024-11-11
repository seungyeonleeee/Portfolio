import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  AnimationWrapper,
  Inner,
  TextGroup,
  MainElement,
} from "../../styledComponents";

// Styled
const HomeInner = styled(Inner)`
  position: relative;
  z-index: 1;
`;
const LineElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  min-width: 500px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

// Variants
const WrapperVariants = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 5 } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } },
};
const lineVariants = {
  invisible: {
    x: -706,
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.8,
      duration: 1.8,
      ease: "easeOut",
    },
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
      duration: 1.8,
      ease: "easeOut",
    },
  }),
};
const noiseVariants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.9,
  },
  animate: {
    opacity: [0, 0.2, 0.4, 0.8, 1],
    filter: ["blur(10px)", "blur(8px)", "blur(4px)", "blur(2px)", "blur(0px)"],
    scale: [0.9, 0.92, 0.95, 0.98, 1],
    transition: {
      duration: 1.2,
      times: [0, 0.2, 0.4, 0.7, 1],
      ease: "easeOut",
    },
  },
};

const HomeIntroAnimation = ({ setIsIntroEnd }) => {
  return (
    <AnimationWrapper
      variants={WrapperVariants}
      initial="start"
      animate="end"
      exit="exit"
      wait
      onAnimationComplete={() => {
        setIsIntroEnd(true);
      }}
    >
      <LineElement>
        <motion.svg
          viewBox="0 0 706 507"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="reveal-mask">
            <motion.rect
              x="0"
              y="0"
              width="706"
              height="507"
              fill="#fff"
              variants={lineVariants}
              initial="invisible"
              animate="visible"
            />
          </mask>
          <g mask="url(#reveal-mask)">
            <path
              d="M-139.892 -82C-117.669 -46.0125 -60.5082 31.3225 -9.645 52.7621C53.934 79.5616 63.0535 72.3843 98.938 94.1865C128.148 111.933 138.53 134.133 141.276 141.237C145.414 156.061 148.422 189.024 118.513 185.948C98.9775 183.939 99.6709 158.671 111.864 148.185C123.006 138.604 146.282 150.112 167.095 156.673C205.011 168.627 222.663 175.896 242.157 194.16C259.23 210.155 279.456 232.599 292.719 300.49C311.186 395.022 337.827 463.946 420.327 488.5C588.327 538.5 629.403 426 703.403 449.5"
              stroke="#FF481F"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </motion.svg>
      </LineElement>
      <HomeInner>
        <MainElement
          custom={{ delay: 0.3 }}
          initial="start"
          animate="end"
          variants={FadeInVariants}
        >
          <motion.span
            variants={noiseVariants}
            initial="initial"
            animate="animate"
          >
            承
          </motion.span>
        </MainElement>
        <TextGroup
          className="main-title"
          custom={{ coord: { x: -30, y: 0 }, delay: 1 }}
          initial="start"
          animate="end"
          variants={FadeInVariants}
        >
          <h1>
            <span>이을</span> 승
          </h1>
          <p>서로의 이야기를 이어 공감을 쌓아갑니다.</p>
        </TextGroup>
      </HomeInner>
    </AnimationWrapper>
  );
};

export default HomeIntroAnimation;
