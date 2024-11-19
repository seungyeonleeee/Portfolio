import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navMenus } from "../utlis";

// Styled
const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  a {
    position: relative;
    text-transform: uppercase;
    font: normal 16px/1 "Poppins-Medium";
    letter-spacing: 1px;
    transition: color 0.3s ease;
    &:hover {
      color: var(--bg-accent-color);
    }
    &.active {
      color: var(--bg-accent-color);
    }
  }
`;
const MenuLine = styled(motion.div)`
  position: absolute;
  bottom: -2px;
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
          <a
            href={`#${menu}`}
            className={activeSection === menu ? "active" : ""}
          >
            {menu}
            {activeSection === menu ? <MenuLine layoutId="line" /> : null}
          </a>
        </li>
      ))}
    </Container>
  );
};

export default DesktopMenu;
