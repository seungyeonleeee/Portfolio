import styled from "styled-components";
import { motion } from "framer-motion";

// Layout
export const wrapper = `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Inner = styled.article`
  width: 1330px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AnimationWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${wrapper}
`;

// Components
export const ImgBoxLarge = styled(motion.div)`
  width: 420px;
  height: 550px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -230deg,
      transparent 80%,
      rgba(143, 140, 133, 0.5)
    );
  }
`;
export const ImgBoxSmall = styled.div`
  width: 220px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--bg-light-gray);
`;
export const SectionTitle = styled.h2`
  font-family: "Poppins-Medium";
  font-size: 44px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const MainElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font: 300 300px/1 "Poppins-Light";
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;
export const TextGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  &.main-title {
    top: 20%;
    left: 10%;
    h1 {
      font-size: 70px;
      span {
        color: var(--bg-accent-color);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
      }
    }
    p {
      font-size: 22px;
    }
  }
  &.sub-title {
    text-align: center;
    h2 {
      font: 300 50px/1 "Poppins-Light";
      &::first-letter {
        color: var(--bg-accent-color);
      }
    }
    p {
      font-size: 18px;
      color: var(--bg-dark-gray);
      white-space: pre-wrap;
    }
    &[data-index="0"] {
      top: 20%;
      left: 50%;
    }
    &[data-index="1"] {
      top: 65%;
      left: 10%;
    }
    &[data-index="2"] {
      top: 65%;
      right: 10%;
    }
  }
`;
