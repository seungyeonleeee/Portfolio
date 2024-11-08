import React from "react";
import styled, { keyframes } from "styled-components";
import { delay, motion, AnimatePresence } from "framer-motion";
import { wrapper, Inner } from "../../styledComponents";
import { useEffect, useState } from "react";

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
  position: relative;
  height: 100vh;
  ${wrapper}
`;
const AnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  width: 25%;
  min-width: 300px;
  svg {
    width: 100%;
    height: 100%;
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
  &.titleGroup {
    position: absolute;
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
`;

// Variants
const lineVariants = {
  start: {
    x: -706,
  },
  end: {
    x: 0,
    transition: {
      // delay: 0.5,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
const FadeInVariants = {
  start: (coord) => ({
    opacity: 0,
    x: coord?.x || 0,
    y: coord?.y || 0,
  }),
  end: (sec) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: sec?.delay || 0,
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
      <AnimationWrapper>
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
      </AnimationWrapper>
      {/* <AnimationWrapper>
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
                initial={"start"}
                animate={"end"}
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
            <svg
              width="332"
              height="306"
              viewBox="0 0 332 306"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M150.95 60.4H177.2V272.5C177.2 288.95 173 296.3 161.1 300.5C149.2 304.7 128.9 305.05 98.45 305.05C97.05 297.7 92.5 287.2 88.65 279.85C113.15 280.9 135.55 280.55 142.2 280.2C148.85 279.85 150.95 278.1 150.95 272.15V60.4ZM54.7 1.94998H254.9V25.75H54.7V1.94998ZM246.5 1.94998H253.15L258.75 0.549979L276.95 13.5C250.35 40.45 209.05 67.4 170.9 83.5C167.4 78.25 160.4 70.9 155.85 66.7C189.8 52.7 227.95 27.15 246.5 6.84998V1.94998ZM107.2 101.7H225.5V123.4H107.2V101.7ZM11.3 77.2H89.7V101.35H11.3V77.2ZM100.2 157.35H231.1V179.05H100.2V157.35ZM80.25 214.75H251.4V236.8H80.25V214.75ZM304.25 74.4L324.9 91.55C305.65 113.95 280.1 140.55 260.85 157.7L244.05 143C262.95 125.85 289.2 96.1 304.25 74.4ZM248.6 66.35C260.5 146.15 285.7 218.25 331.2 252.55C324.9 257.8 315.8 267.6 311.25 274.95C263.3 234.35 238.1 158.75 224.45 70.2L248.6 66.35ZM80.25 77.2H85.5L90.4 76.15L106.85 82.45C93.2 170.65 60.65 238.2 20.4 274.6C16.2 269 6.4 259.2 0.45 255.35C39.65 222.1 69.05 160.15 80.25 83.15V77.2Z"
                fill="black"
              />
            </svg>
          </MainElement>
          <TextGroup
            className="titleGroup"
            custom={{ x: -20, y: 0, delay: 0.7 }}
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
      </AnimationWrapper> */}
    </Container>
  );
};

export default Home;
