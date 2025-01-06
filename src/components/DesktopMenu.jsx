import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navMenus } from "../utils";

// Styled
const Container = styled.ul`
  display: flex;
  align-items: center;
  li {
    width: 110px;
    height: 30px;
    position: relative;
    overflow: hidden;
    /* span {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform-origin: top;
      transform: translatey(0) rotatex(0deg);
      transition: all 0.3s ease;
      &.active {
        color: var(--bg-accent-color);
      }
    }
    a {
      position: absolute;
      width: 100%;
      height: 100%;
      top: -100%;
      left: 0;
      transition: all 0.3s ease;
      color: var(--bg-accent-color);
      z-index: 1;
    }
    &:hover {
      span {
        top: 100%;
        transform: translatey(100%) rotatex(90deg);
      }
      a {
        top: 0;
      }
    } */
    a {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease;
      visibility: hidden;
      font: normal 16px/30px "Poppins-Medium";
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      z-index: 1;
      &::before,
      &::after {
        visibility: visible;
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: 0.5s;
      }
      &::before {
        color: var(--bg-accent-color);
        transform-origin: bottom;
        transform: translatey(-100%) rotatex(90deg);
      }
      &::after {
        color: var(--bg-dark-color);
        transform-origin: top;
        transform: translatey(0) rotatex(0deg);
      }
      &:hover {
        &::before {
          transform: translatey(0) rotatex(0deg);
        }
        &::after {
          transform: translatey(100%) rotatex(90deg);
        }
      }
      &.active {
        &::after {
          color: var(--bg-accent-color);
        }
      }
    }
  }
`;
const MenuLine = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--bg-accent-color);
  z-index: 5;
`;

const DesktopMenu = ({ activeSection }) => {
  return (
    <Container>
      {navMenus.map((menu, index) => (
        <li key={index}>
          <a
            href={`#${menu}`}
            data-text={menu}
            className={activeSection === menu ? "active" : ""}
          >
            {menu}
          </a>
          {activeSection === menu ? <MenuLine layoutId="line" /> : null}
        </li>
      ))}
    </Container>
  );
};

export default DesktopMenu;
