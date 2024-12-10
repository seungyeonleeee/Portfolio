import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  svg {
    width: 25px;
    height: 25px;
    color: var(--bg-accent-color);
  }
`;

const TopButton = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  // 원의 반지름
  const radius = 45;
  // 원의 둘레 계산
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#3498db"
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (circumference * scrollProgress) / 100
          }
          transform="rotate(-90, 50, 50)"
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="arrow-ap"
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
