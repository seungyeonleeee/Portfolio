import styled from "styled-components";
import { motion } from "framer-motion";

// Common Layout
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
export const ButtonStyle = `
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px 40px;
  letter-spacing: 0;
  border: 1px solid var(--bg-accent-color);
  border-radius: 54px;
  color: var(--bg-accent-color);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s;
  svg {
    width: 12px;
    height: 12px;
    path {
      fill: var(--bg-accent-color);
      transition: all 0.3s;
    }
  }
  &:hover,
  &:active {
    background: var(--bg-accent-color);
    color: var(--bg-light-color);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    svg {
      path {
        fill: var(--bg-light-color);
      }
    }
  }
`;
export const BadgeStyle = `
  padding: 6px 20px;
  border: 1px solid var(--bg-light-gray);
  border-radius: 20px;
  color: var(--bg-dark-gray);
  font: 500 14px/1 "Poppins-Medium";
  letter-spacing: 0;
  text-align: center;
  cursor: default;
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  cursor: pointer;
  z-index: 3;
`;
export const ModalContainer = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow-y: auto;
  z-index: 2;
`;
export const Modal = styled(motion.div)`
  ${wrapper}
  width: 80vw;
  height: auto;
  position: relative;
  padding: 120px 0;
  margin: 5vw auto;
  background: var(--bg-light-color);
  border-radius: 20px;
  overflow: hidden;
  z-index: 3;
  button {
    position: absolute;
    top: 50px;
    right: 50px;
  }
`;
export const ImgBoxLarge = styled(motion.div)`
  width: 420px;
  height: 550px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transform-origin: left bottom;
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
  letter-spacing: 0;
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
  z-index: 1;
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
      top: 15%;
      left: 50%;
    }
    &[data-index="1"] {
      top: 70%;
      left: 10%;
    }
    &[data-index="2"] {
      top: 70%;
      right: 10%;
    }
  }
`;
