import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useCycle, useInView } from "framer-motion";
import { navMenus } from "../utlis";

// Styled
const Trigger = styled.button`
  width: 30px;
  height: 10px;
  position: fixed;
  top: 40px;
  right: 10px;
  transform: translate(-50%, -50%);
  z-index: 4;
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--bg-dark-color);
    border-radius: 5px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 100%;
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        top: 50%;
        transform: rotate(-30deg);
      }
      &:nth-child(2) {
        top: 50%;
        transform: rotate(30deg);
      }
    }
  }
`;
const Container = styled(motion.div)`
  position: fixed;
  width: 80vw;
  height: 100vh;
  top: 0;
  right: 0;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 1000px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;
const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: var(--bg-beige-color);
`;
const Navigation = styled(motion.ul)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5%;
  padding: 8%;
  z-index: 3;
  li {
    a {
      font: normal 2.5rem/1 "Poppins-Medium";
      text-transform: uppercase;
    }
  }
`;

// Animation Variants
const sidebarVariants = {
  open: (height = 1000) => ({
    opacity: 1,
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    opacity: 0,
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    pointerEvents: "none",
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
const overlayVariants = {
  open: {
    opacity: 1,
    width: "100vw",
    height: "100vh",
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "tween",
    },
  },
  closed: {
    opacity: 0,
    width: "0vw",
    height: "0vh",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};
const navVariants = {
  open: {
    pointerEvents: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    pointerEvents: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = window.innerHeight;

  console.log(isOpen);

  return (
    <>
      <Trigger
        onClick={() => toggleOpen()}
        className={isOpen ? "active" : null}
      >
        <span></span>
        <span></span>
      </Trigger>
      <Container
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        custom={height}
        variants={sidebarVariants}
      >
        <Overlay
          variants={overlayVariants}
          animate={isOpen ? "open" : "closed"}
        />
        <Background
          variants={sidebarVariants}
          animate={isOpen ? "open" : "closed"}
        />
        <Navigation variants={navVariants} animate={isOpen ? "open" : "closed"}>
          {navMenus.map((menu, index) => (
            <motion.li key={index} variants={itemVariants}>
              <a href={`#${menu}`}>{menu}</a>
            </motion.li>
          ))}
        </Navigation>
      </Container>
    </>
  );
};

export default MobileMenu;
