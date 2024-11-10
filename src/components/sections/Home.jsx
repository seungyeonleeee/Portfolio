import React from "react";
import styled, { keyframes } from "styled-components";
import { delay, motion, AnimatePresence } from "framer-motion";
import { wrapper, Inner } from "../../styledComponents";
import { useEffect, useState } from "react";
import { titles } from "../../utlis";

// Animation
const shadow = keyframes`
  0% {
    box-shadow: 0px 0px 0px transparent;
  }
  100% {
   box-shadow: 30px -10px 100px rgba(240, 239, 238, 0.8);
  }
`;
// rgba(240, 239, 238, 0.8)
// Style
const Container = styled.section`
  height: 100vh;
  ${wrapper}
`;
const AnimationWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${wrapper}
`;
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
const HomeInner = styled(Inner)`
  position: relative;
  z-index: 1;
`;
const MainElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font: 300 300px/1 "Poppins-Light";
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: absolute;
  }
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
const TextGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  &.main-title {
    top: 20%;
    left: 10%;
    h1 {
      font-size: 70px;
      span {
        color: var(--bg-accent-color);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
      }
    }
    p {
      font-size: 22px;
    }
  }
  &.sub-title {
    text-align: center;
    h2 {
      font: 300 50px/1 "Poppins-Light";
      &::first-letter {
        color: var(--bg-accent-color);
      }
    }
    p {
      font-size: 18px;
      color: var(--bg-dark-gray);
      white-space: pre-wrap;
    }
    &[data-index="0"] {
      top: 20%;
      left: 50%;
    }
    &[data-index="1"] {
      top: 65%;
      left: 10%;
    }
    &[data-index="2"] {
      top: 65%;
      right: 10%;
    }
  }
`;

// Variants
const WrapperVariants = {
  start: { opacity: 0 },
  end: { opacity: 1 },
  exit: { opacity: 0 },
};
const lineVariants = {
  invisible: {
    x: -706,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
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
      duration: 1,
      ease: "easeOut",
    },
  }),
};
const backgroundVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 1,
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
  visible: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    boxShadow: "0px 0px 0px rgba(240, 239, 238, 0)",
    transition: {
      duration: 1,
    },
  },
  shadow: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    boxShadow: "30px -10px 100px rgba(240, 239, 238, 0.8)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      boxShadow: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
};

// 새로운 애니메이션 variants 추가
const firstCVariants = {
  initial: { rotate: 0, translateX: "0%" },
  animate: {
    rotate: -30,
    translateX: "-33%",
    transition: { delay: 2.2, duration: 0.8, type: "tween" },
  },
};

const secondCVariants = {
  initial: { opacity: 1, rotate: 0, translateX: "0%" },
  animate: {
    rotate: 150,
    translateX: "33%",
    transition: { delay: 2.2, duration: 0.8, type: "tween" },
  },
};

// 새로운 variants 추가
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

const Home = () => {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShadow(true);
    }, 2000); // Circle이 나타난 후 2초 뒤에 그림자 효과 시작

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {/* <AnimationWrapper>
        <Background variants={backgroundVariants} initial="start" animate="end">
          {[1, 2, 3].map((circle, index) => (
            <Circle
              key={index}
              variants={circleVariants}
              initial="start"
              animate={showShadow ? "shadow" : "visible"}
              transition={{
                duration: 1,
                delay: index * 0.5,
              }}
            />
          ))}
        </Background>
      </AnimationWrapper> */}
      <AnimatePresence>
        <AnimationWrapper
          variants={WrapperVariants}
          initial="start"
          animate="end"
          exit="exit"
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
              custom={{ x: 0, y: 20, delay: 0.3 }}
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
              custom={{ x: -20, y: 0, delay: 1 }}
              initial="start"
              animate="end"
              variants={FadeInVariants}
            >
              <motion.h1
                variants={noiseVariants}
                initial="initial"
                animate="animate"
              >
                <span>이을</span> 승
              </motion.h1>
              <p>서로의 이야기를 이어 공감을 쌓아갑니다.</p>
            </TextGroup>
          </HomeInner>
        </AnimationWrapper>
      </AnimatePresence>
      {/* <AnimationWrapper>
        <HomeInner>
          <MainElement>
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
              custom={{ coord: { x: 20, y: 0 }, index, delay: index * 0.5 }}
              initial="start"
              animate="end"
              variants={FadeInVariants}
            >
              <h2>{title.keyword}</h2>
              <p>{title.description}</p>
            </TextGroup>
          ))}
        </HomeInner>
      </AnimationWrapper> */}
    </Container>
  );
};

export default Home;
