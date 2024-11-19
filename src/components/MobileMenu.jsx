import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useCycle, useInView } from "framer-motion";
import { navMenus } from "../utlis";

// Styled
const Container = styled(motion.div)`
  button {
    width: 30px;
    height: 30px;
    background-color: #000;
    position: relative;
    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #f00;
      transition: transform 0.3s ease;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 100%;
      }
    }
  }
`;

// Animation Variants
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = window.innerHeight;

  return (
    <Container
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      custom={height}
    >
      <button onClick={() => toggleOpen()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </Container>
  );
};

export default MobileMenu;
