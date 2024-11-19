import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { navMenus } from "../utlis";
import { Inner } from "../styledComponents";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

// Styled
const Container = styled(motion.header)`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const HeaderInner = styled(Inner)`
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  span {
    font: normal 24px/1 "Poppins-Light";
  }
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

// Animation Variants
const navVariants = {
  initial: {
    opacity: 0,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  top: {
    opacity: 1,
    y: 0,
    background: "rgba(255, 255, 255, 0)",
    backdropFilter: "blur(0px)",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0)",
    transition: { duration: 0.3, ease: "linear" },
  },
  scroll: {
    opacity: 1,
    y: 0,
    background: "rgba(255, 255, 255, .2)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "linear" },
  },
};

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    // Header Visible Animation
    const animationTimer = setTimeout(() => {
      navAnimation.start("visible").then(() => navAnimation.start("top"));
    }, 8000);

    // Scroll Event
    const handleScroll = () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }

      requestAnimationFrame(() => {
        const isBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100;

        if (isBottom) {
          setActiveSection("contact");
          return;
        }

        const viewportCenter = window.innerHeight / 2;
        for (const menu of navMenus) {
          const element = document.getElementById(menu);
          if (!element) return;

          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            setActiveSection(menu);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    scrollY.on("change", handleScroll);

    // Cleanup
    return () => {
      clearTimeout(animationTimer);
      window.removeEventListener("scroll", handleScroll);
      scrollY.clearListeners();
    };
  }, [navAnimation, scrollY]);

  return (
    <Container variants={navVariants} animate={navAnimation} initial="initial">
      <HeaderInner as="nav">
        <Logo>
          <img src="/images/logo.svg" alt="logo" />
          <span>eungyeonLee</span>
        </Logo>
        <MenuContainer>
          <DesktopMenu activeSection={activeSection} />
          <MobileMenu />
        </MenuContainer>
      </HeaderInner>
    </Container>
  );
};

export default Header;
