import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Inner } from "../styledComponents";

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
const DesktopMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  a {
    position: relative;
    font: normal 16px/1 "Poppins-Medium";
    letter-spacing: 1px;
    transition: color 0.3s ease;
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
const MobileMenu = styled.ul``;

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

    // Scroll Event Handler
    const handleScroll = () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }

      const sections = ["home", "about", "project", "contact"];
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element?.getBoundingClientRect().top >= -800 &&
          element?.getBoundingClientRect().top <= 400
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Scroll Event Listener
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
        <div>
          <DesktopMenu>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
              >
                HOME
                {activeSection === "home" ? <MenuLine layoutId="line" /> : null}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                ABOUT
                {activeSection === "about" ? (
                  <MenuLine layoutId="line" />
                ) : null}
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={activeSection === "project" ? "active" : ""}
              >
                PROJECT
                {activeSection === "project" ? (
                  <MenuLine layoutId="line" />
                ) : null}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                CONTACT
                {activeSection === "contact" ? (
                  <MenuLine layoutId="line" />
                ) : null}
              </a>
            </li>
          </DesktopMenu>
          <MobileMenu></MobileMenu>
        </div>
      </HeaderInner>
    </Container>
  );
};

export default Header;
