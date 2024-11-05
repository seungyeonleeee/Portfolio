import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { accordionItems } from "../../utls";
import { ImgBoxLarge, ImgBoxSmall } from "../../styledComponents";

const Container = styled.div`
  width: 597px;
  height: 550px;
  position: relative;
  & > div {
    position: absolute;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    transition: background-image 0.5s;
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
const ParallaxImgBox01 = styled(motion.div)`
  top: 50%;
  left: 0;
`;
const ParallaxImgBox02 = styled(motion.div)`
  top: 5%;
  right: 0;
`;

const ProcessImg = ({ currentIndex }) => {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [1800, 3500], [-200, 200]);

  const foregroundY = useTransform(scrollY, [1800, 3500], [-200, 400]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest >= 1800 && latest <= 3500) {
        console.log("Parallax active:", latest);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <Container>
      <ImgBox
        style={{
          backgroundImage: `url(/images/${
            accordionItems[currentIndex]?.mainImg || ""
          })`,
        }}
      />
      <ParallaxImgBox01
        className="img-box-small"
        style={{
          backgroundImage: `url(/images/${
            accordionItems[currentIndex]?.subImg01 || ""
          })`,
          y: backgroundY,
        }}
        animate={{
          y: backgroundY,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
      />
      <ParallaxImgBox02
        className="img-box-small"
        style={{
          backgroundImage: `url(/images/${
            accordionItems[currentIndex]?.subImg02 || ""
          })`,
          y: foregroundY,
        }}
        animate={{
          y: foregroundY,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
      />
    </Container>
  );
};

export default ProcessImg;
