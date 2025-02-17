import React, { useRef, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useInView } from "framer-motion";
import { responsiveContext } from "../../../App";
import AboutIntro from "./AboutIntro";
import AboutSkill from "./AboutSkill";
import { wrapper, Inner } from "../../../styledComponents";

// Animation
const upper = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-80px);
  }
`;
const upperMobile = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-40px);
  }
`;

// Styled
const Container = styled.section`
  position: relative;
`;
const UpperElement = styled.div`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "80px" : "120px")};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 40px 40px 0 0;
  background: var(--bg-beige-color);
  animation: ${({ $isMobile }) => ($isMobile ? upperMobile : upper)} 0.8s 8.5s
    linear both;
`;
const ContentContainer = styled.div`
  ${wrapper}
  position: relative;
  padding: 140px 0;
  background-color: var(--bg-beige-color);
  border-radius: 40px 40px 0 0;
  overflow-x: hidden;
`;
const AboutInner = styled(Inner)`
  position: relative;
  flex-direction: column;
  gap: 50px;
`;
const LineElement = styled.article`
  width: ${({ $isDesktop, $isTabletOrDesktop, $isTablet }) =>
    $isDesktop ? "40%" : $isTabletOrDesktop || $isTablet ? "60%" : "100%"};
  position: absolute;
  top: 8%;
  left: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`;

// Animation Variants
const pathVariants = {
  hidden: { strokeDashoffset: -2000 },
  visible: {
    strokeDashoffset: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });
  const { isDesktop, isTabletOrDesktop, isTablet, isMobile } =
    useContext(responsiveContext);

  return (
    <Container>
      <UpperElement $isMobile={isMobile} />
      <ContentContainer ref={ref} id="about" $isMobile={isMobile}>
        <LineElement
          $isDesktop={isDesktop}
          $isTabletOrDesktop={isTabletOrDesktop}
          $isTablet={isTablet}
        >
          <svg
            width="976"
            height="972"
            viewBox="0 0 976 972"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M974 970C693.191 970 422.364 715 463.205 499.5C486.705 375.5 427.205 326.029 395.705 291.5C395.705 291.5 329.205 219.5 274.205 243.5C246.705 255.5 227.101 305.382 268.342 326.029C331.205 357.5 345.785 279.432 341.856 243.5C338.202 225.992 323.107 152.872 258.004 105.922C207.5 69.5 115.58 70.0646 57.3369 42C37.7872 32.58 17.0121 17.2916 0 2"
              stroke="#FF481F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="3000"
              strokeDashoffset="3000"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={pathVariants}
            />
          </svg>
        </LineElement>
        <AboutInner>
          <AboutIntro isInView={isInView} />
          <AboutSkill isInView={isInView} />
        </AboutInner>
      </ContentContainer>
    </Container>
  );
};

export default About;
