import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { responsiveContext } from "../../../App";
import { accordionItems } from "../../../utlis";
import { ImgBoxLarge } from "../../../styledComponents";

// Styled
const Container = styled.div`
  position: relative;
  width: ${({ $isDesktop }) => ($isDesktop ? "597px" : "40%")};
  height: ${({ $isDesktop }) => ($isDesktop ? "550px" : "500px")};
  div {
    position: absolute;
    background: url(/images/${(props) => props.$bgimg || ""}) center/cover
      no-repeat;
    transition: background 0.5s;
    &.img-box-small {
      width: ${({ $isDesktop }) => ($isDesktop ? "220px" : "180px")};
      height: ${({ $isDesktop }) => ($isDesktop ? "160px" : "130px")};
      overflow: hidden;
      border: 2px solid var(--bg-dark-gray);
      border-radius: 10px;
      box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.2);
    }
  }
`;
const ImgBox = styled(ImgBoxLarge)`
  width: ${({ $isDesktop }) => ($isDesktop ? "420px" : "100%")};
  left: ${({ $isDesktop }) => ($isDesktop ? "53%" : "50%")};
  top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid var(--bg-dark-gray);
`;
const ParallaxImgBoxLeft = styled(motion.div)`
  top: 20%;
  left: ${({ $isDesktop }) => ($isDesktop ? "0" : "-10%")};
`;
const ParallaxImgBoxRight = styled(motion.div)`
  top: 0;
  right: ${({ $isDesktop }) => ($isDesktop ? "0" : "-10%")};
`;

const ProcessImg = ({ currentIndex }) => {
  const containerRef = React.useRef(null);
  const { isDesktop } = useContext(responsiveContext);

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
      $bgimg={accordionItems[currentIndex]?.mainImg}
    >
      <ImgBox $isDesktop={isDesktop} />
      <ParallaxImgBoxLeft
        className="img-box-small"
        style={{
          y: springLeftY,
        }}
      />
      <ParallaxImgBoxRight
        className="img-box-small"
        style={{
          y: springRightY,
        }}
      />
    </Container>
  );
};

export default ProcessImg;
