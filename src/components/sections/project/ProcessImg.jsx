import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { responsiveContext } from "../../../App";
import { accordionItems } from "../../../utils";
import { ImgBoxLarge } from "../../../styledComponents";

// Styled
const Container = styled.div`
  position: relative;
  width: 95%;
  max-width: 597px;
  height: ${({ $isDesktop }) => ($isDesktop ? "550px" : "500px")};
  div {
    position: absolute;
    transition: background 0.5s;
    &.img-box-small {
      width: ${({ $isDesktop, $isTablet }) =>
        $isDesktop || $isTablet ? "220px" : "180px"};
      height: ${({ $isDesktop, $isTablet }) =>
        $isDesktop || $isTablet ? "160px" : "130px"};
      overflow: hidden;
      border: 2px solid var(--bg-dark-gray);
      border-radius: 10px;
      box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.2);
      @media (max-width: 440px) {
        width: 160px;
        height: 110px;
      }
    }
  }
`;
const ImgBox = styled(ImgBoxLarge)`
  width: 100%;
  max-width: 420px;
  height: 100%;
  max-height: 492px;
  left: ${({ $isDesktop }) => ($isDesktop ? "53%" : "50%")};
  top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid var(--bg-dark-gray);
  background: url(/images/${(props) => props.$bgimg || ""}) center/cover
    no-repeat;
`;
const ParallaxImgBoxLeft = styled(motion.div)`
  top: 20%;
  left: ${({ $isDesktop, $isMobile }) =>
    $isDesktop ? "0" : $isMobile ? "-5%" : "-10%"};
  background: url(/images/${(props) => props.$bgimg || ""}) center/cover
    no-repeat;
`;
const ParallaxImgBoxRight = styled(motion.div)`
  top: 0;
  right: ${({ $isDesktop, $isMobile }) =>
    $isDesktop ? "0" : $isMobile ? "-5%" : "-10%"};
  background: url(/images/${(props) => props.$bgimg || ""}) center/cover
    no-repeat;
`;

const ProcessImg = ({ currentIndex }) => {
  const containerRef = React.useRef(null);
  const { isDesktop, isTabletOrDesktop, isTablet, isMobile } =
    useContext(responsiveContext);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftImgY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 100, -200]);
  const rightImgY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [400, 100, -400]
  );

  const springLeftY = useSpring(leftImgY, {
    stiffness: 100,
    damping: 40,
    mass: 1,
  });
  const springRightY = useSpring(rightImgY, {
    stiffness: 130,
    damping: 40,
    mass: 1,
  });

  return (
    <Container
      ref={containerRef}
      $isDesktop={isDesktop}
      $isTabletOrDesktop={isTabletOrDesktop}
      $isTablet={isTablet}
    >
      <ImgBox
        $bgimg={accordionItems[currentIndex]?.mainImg}
        $isDesktop={isDesktop}
      />
      <ParallaxImgBoxLeft
        className="img-box-small"
        style={{
          y: springLeftY,
        }}
        $isMobile={isMobile}
        $bgimg={accordionItems[currentIndex]?.subImg01}
      />
      <ParallaxImgBoxRight
        className="img-box-small"
        style={{
          y: springRightY,
        }}
        $isMobile={isMobile}
        $bgimg={accordionItems[currentIndex]?.subImg02}
      />
    </Container>
  );
};

export default ProcessImg;
