import React from "react";
import styled, { keyframes } from "styled-components";
import { delay, motion, AnimatePresence } from "framer-motion";
import { wrapper, Inner } from "../../styledComponents";
import { useEffect, useState } from "react";
import HomeIntroAnimation from "./HomeIntroAnimation";
import HomeFinalAnimation from "./HomeFinalAnimation";
import HomeBackAnimation from "./HomeBackAnimation";

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

// Styled
const Container = styled.section`
  height: 100vh;
  position: relative;
  ${wrapper}
`;

const Home = () => {
  const [isIntroEnd, setIsIntroEnd] = useState(false);

  return (
    <Container>
      <HomeBackAnimation />
      <AnimatePresence mode="wait">
        {!isIntroEnd ? (
          <HomeIntroAnimation key="intro" setIsIntroEnd={setIsIntroEnd} />
        ) : (
          <HomeFinalAnimation key="final" />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Home;
