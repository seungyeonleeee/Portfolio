import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  z-index: 2;
  svg,
  circle {
    stroke: var(--bg-accent-color);
    stroke-width: 2;
  }
`;

const buttonVariants = {
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  hidden: {
    y: 20,
    opacity: 0,
    filter: "blur(5px)",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const TopButton = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [show, setShow] = useState(false);
  const radius = 23;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);

      setShow(currentScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      variants={buttonVariants}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg viewBox="-2 -2 54 54" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset:
              circumference - (circumference * scrollProgress) / 100,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 14,
          }}
          transform="rotate(-90, 25, 25)"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          x="14"
          y="12"
          width="22"
          height="22"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </svg>
    </Container>
  );
};

export default TopButton;
