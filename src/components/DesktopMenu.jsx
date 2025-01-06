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
    text-transform: uppercase;
    text-align: center;
    font: normal 16px/30px "Poppins-Medium";
    letter-spacing: 1px;
    cursor: pointer;
    span {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
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
      }
      a {
        top: 0;
      }
    }
  }
`;
const MenuLine = styled(motion.div)`
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--bg-accent-color);
`;

const DesktopMenu = ({ activeSection }) => {
  return (
    <Container>
      {navMenus.map((menu, index) => (
        <li key={index}>
          <span className={activeSection === menu ? "active" : ""}>{menu}</span>
          <a href={`#${menu}`}>
            {menu}
            {activeSection === menu ? <MenuLine layoutId="line" /> : null}
          </a>
        </li>
      ))}
    </Container>
  );
};

export default DesktopMenu;
