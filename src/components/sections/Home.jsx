import React from "react";
import styled, { keyframes } from "styled-components";
import { delay, motion, AnimatePresence } from "framer-motion";
import { wrapper, Inner } from "../../styledComponents";
import { useEffect, useState } from "react";
import HomeIntroAnimation from "./HomeIntroAnimation";
import HomeFinalAnimation from "./HomeFinalAnimation";
import HomeBackAnimation from "./HomeBackAnimation";

// Styled
const Container = styled.section`
  height: 100vh;
  position: relative;
  /* top: 0;
  left: 0; */
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
