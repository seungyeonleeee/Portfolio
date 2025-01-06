import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { responsiveContext } from "../../../App";
import { wrapper, ImgBoxLarge, SectionTitle } from "../../../styledComponents";
import { introData } from "../../../utils";

const Container = styled.div`
  ${wrapper}
  gap: ${({ $isDesktop }) => ($isDesktop ? "100px" : "50px")};
  flex-direction: ${({ $isTablet, $isMobile }) =>
    $isTablet || $isMobile ? "column" : "row"};
  .intro-img {
    max-width: 420px;
    height: ${({ $isMobile }) => ($isMobile ? "400px" : "520px")};
  }
`;
const TextBox = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ $isMobile }) => ($isMobile ? "30px" : "50px")};
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .intro-name {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
      margin-bottom: 10px;
      span {
        font-size: ${({ $isMobile }) => ($isMobile ? "30px" : "44px")};
        font-weight: 500;
        letter-spacing: 0;
      }
      h2 {
        margin-bottom: 0;
      }
    }
    h5 {
      font: 400 18px/1 "Poppins-Regular";
      font-size: 18px;
      font-weight: 400;
    }
    p {
      line-height: 1.5;
      white-space: pre-wrap;
      &.intro-education {
        color: var(--bg-dark-gray);
      }
    }
  }
`;

// Animation Variants
const imgVariants = {
  start: {
    opacity: 0,
    x: 40,
    y: 40,
    rotate: 30,
  },
  end: {
    opacity: 1,
    x: 40,
    y: 20,
    rotate: -10,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
  type: "tween",
};
const textVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutIntro = ({ isInView }) => {
  const { isDesktop, isTablet, isMobile } = useContext(responsiveContext);

  return (
    <Container $isDesktop={isDesktop} $isTablet={isTablet} $isMobile={isMobile}>
      <ImgBoxLarge
        className="intro-img"
        initial="start"
        animate={isInView ? "end" : "start"}
        variants={imgVariants}
      >
        <img src="/images/profile.jpg" alt="profile" />
      </ImgBoxLarge>
      <TextBox
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        $isMobile={isMobile}
      >
        <li>
          <div className="intro-name">
            <span>{introData.name}</span>
            <SectionTitle>{introData.englishName}</SectionTitle>
          </div>
          <h5>{introData.birth}</h5>
        </li>
        <li>
          <h5>Introduction</h5>
          <p>{introData.introduction}</p>
        </li>
        <li>
          <h5>Education</h5>
          <div>
            <p className="intro-education">{introData.education[0]}</p>
            <p className="intro-education">{introData.education[1]}</p>
          </div>
        </li>
      </TextBox>
    </Container>
  );
};

export default AboutIntro;
