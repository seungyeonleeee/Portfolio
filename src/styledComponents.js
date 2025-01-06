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
  @media screen and (max-width: 1330px) {
    width: 100%;
    padding: 0 15px;
  }
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
  letter-spacing: 0;
  border: 1px solid var(--bg-accent-color);
  border-radius: 54px;
  padding: 12px 40px;
  color: var(--bg-accent-color);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  svg {
    width: 12px;
    height: 12px;
    path {
      fill: var(--bg-accent-color);
      transition: all 0.3s;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--bg-accent-color);
    z-index: -1;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: var(--bg-light-color);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    svg {
      path {
        fill: var(--bg-light-color);
      }
    }
    &::before {
      width: 100%;
    }
  }
`;
export const BadgeStyle = `
  padding: 6px 20px;
  border: 1px solid var(--bg-light-gray);
  border-radius: 20px;
  color: var(--bg-dark-gray);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
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
  z-index: 3;
`;
export const Modal = styled(motion.div)`
  ${wrapper}
  width: ${({ $isDesktop }) => ($isDesktop ? "60vw" : "92vw")};
  height: auto;
  position: relative;
  padding: 120px 0;
  margin: 5vw auto;
  background: var(--bg-light-color);
  border-radius: 20px;
  z-index: 3;
  button {
    position: absolute;
    top: ${({ $isMobile }) => ($isMobile ? "20px" : "50px")};
    right: ${({ $isMobile }) => ($isMobile ? "20px" : "50px")};
  }
`;
export const ImgBoxLarge = styled(motion.div)`
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
export const SectionTitle = styled.h2`
  font-family: "Poppins-Medium";
  font-size: 44px;
  font-weight: 500;
  letter-spacing: 0;
  @media screen and (max-width: 840px) {
    font-size: 30px;
  }
`;
export const MainElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: absolute;
    font-family: "Poppins-Light";
    font-size: 300px;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 1330px) {
      font-size: 230px;
    }
    @media screen and (max-width: 740px) {
      font-size: 150px;
    }
  }
`;
export const TextGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  z-index: 2;
  &.main-title {
    top: 20%;
    left: 10%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 100px rgba(255, 255, 255, 1);
    border-radius: 20px;
    h1 {
      font-size: 70px;
      @media screen and (max-width: 1000px) {
        font-size: 40px;
      }
      span {
        color: var(--bg-accent-color);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
      }
    }
    p {
      font-size: 22px;
      @media screen and (max-width: 1000px) {
        font-size: 18px;
      }
    }
  }
  &.sub-title {
    text-align: center;
    h2 {
      font: 300 50px/1 "Poppins-Light";
      &::first-letter {
        color: var(--bg-accent-color);
      }
      @media screen and (max-width: 1000px) {
        font: 300 30px/1 "Poppins-Light";
      }
    }
    p {
      font-size: 18px;
      line-height: 1.3;
      color: var(--bg-dark-gray);
      white-space: pre-wrap;
      @media screen and (max-width: 1100px) {
        font-size: 16px;
      }
    }
    &.sub-title-desktop {
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
      @media screen and (max-width: 1100px) {
        gap: 10px;
        &[data-index="0"] {
          width: 100%;
          top: 20%;
          left: 50%;
        }
        &[data-index="1"] {
          top: 65%;
          left: 5%;
          text-align: start;
        }
        &[data-index="2"] {
          top: 75%;
          right: 5%;
          text-align: end;
        }
      }
    }
    &.sub-title-mobile {
      width: 100%;
      top: 70%;
      left: 50%;
      @media screen and (max-width: 1100px) {
        gap: 10px;
      }
    }
  }
`;
