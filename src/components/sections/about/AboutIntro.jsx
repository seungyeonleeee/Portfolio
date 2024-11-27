import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { wrapper, ImgBoxLarge, SectionTitle } from "../../../styledComponents";

const Container = styled.div`
  ${wrapper}
  gap: 100px;
`;
const TextBox = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .intro-name {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 10px;
      span {
        font-size: 44px;
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
    y: 40,
    rotate: 30,
  },
  end: {
    opacity: 1,
    y: 20,
    rotate: -10,
    transition: {
      duration: 1,
      ease: "easeInOut",
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
    transition: { duration: 1, ease: "easeOut" },
  },
};

const AboutIntro = ({ isInView }) => {
  return (
    <Container>
      <ImgBoxLarge
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
      >
        <li>
          <div className="intro-name">
            <span>이승연</span>
            <SectionTitle>LeeSeungYeon</SectionTitle>
          </div>
          <h5>1998.01.10</h5>
        </li>
        <li>
          <h5>Introduction</h5>
          <p>
            원활한 소통을 중요시하며, 프론트엔드 개발을 통해 <br />
            사람과 사람, 사람과 기술을 연결하는 경험을 추구합니다. <br />
            직관적이고 반응성 좋은 UI로 소통의 가치를 실현하는 개발자가 되고자
            합니다.
          </p>
        </li>
        <li>
          <h5>Education</h5>
          <div>
            <p className="intro-education">
              2024.06 ~ 2024.12 K-Digital Training (KDT) 기업연계 프론트엔드
              개발 수료
            </p>
            <p className="intro-education">
              2023.12 ~ 2024.04 (디지털디자인) UI/UX 웹디자인 & 웹퍼블리셔 수료
            </p>
          </div>
        </li>
      </TextBox>
    </Container>
  );
};

export default AboutIntro;
