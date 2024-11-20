import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { wrapper } from "../../../styledComponents";
import HomeIntroAnimation from "./HomeIntroAnimation";
import HomeFinalAnimation from "./HomeFinalAnimation";
import HomeBackAnimation from "./HomeBackAnimation";

// Styled
const Container = styled.section`
  height: 100vh;
  position: relative;
  ${wrapper}
  cursor: default;
`;

const Home = () => {
  const [isIntroEnd, setIsIntroEnd] = useState(false);

  return (
    <Container id="home">
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
