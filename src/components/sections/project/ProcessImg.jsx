import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { accordionItems } from "../../../utlis";
import { ImgBoxLarge, ImgBoxSmall } from "../../../styledComponents";

// Styled
const Container = styled.div`
  width: 597px;
  height: 550px;
  position: relative;
  div {
    position: absolute;
    background: url(/images/${(props) => props.$bgimg || ""}) center/cover
      no-repeat;
    transition: background 0.5s;
    &.img-box-small {
      width: 220px;
      height: 160px;
      overflow: hidden;
      border: 2px solid var(--bg-dark-gray);
      border-radius: 10px;
      box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.2);
    }
  }
`;
const ImgBox = styled(ImgBoxLarge)`
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
  border: 3px solid var(--bg-dark-gray);
`;
const ParallaxImgBoxLeft = styled(motion.div)`
  top: 20%;
  left: 0;
`;
const ParallaxImgBoxRight = styled(motion.div)`
  top: 0;
  right: 0;
`;

const ProcessImg = ({ currentIndex }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const leftImgY = useTransform(scrollYProgress, [0, 0.5, 1], [400, 250, -400]);
  const rightImgY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [800, 250, -800]
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
    <Container $bgimg={accordionItems[currentIndex]?.mainImg}>
      <ImgBox />
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
