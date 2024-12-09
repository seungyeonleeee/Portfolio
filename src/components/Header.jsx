import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { responsiveContext } from "../App";
import { navMenus } from "../utlis";
import { Inner } from "../styledComponents";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

// Styled
const Container = styled(motion.header)`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "60px" : "80px")};
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
  a {
    display: flex;
    color: #000;
    svg {
      width: ${({ $isTablet, $isMobile }) =>
        $isTablet || $isMobile ? "20px" : "23px"};
      height: ${({ $isTablet, $isMobile }) =>
        $isTablet || $isMobile ? "20px" : "23px"};
      path {
        fill: ${({ $isTablet, $isMobile }) =>
          $isTablet || $isMobile
            ? "var(--bg-accent-color)"
            : "var(--bg-dark-color)"};
        transition: fill 0.3s;
      }
    }
    ${({ $isTablet, $isMobile }) =>
      !$isTablet &&
      !$isMobile &&
      `
      &:hover {
        svg {
          path {
            fill: var(--bg-accent-color);
          }
        }
      }
      `}
    span {
      font-family: "Poppins-Light";
      font-size: ${({ $isTablet, $isMobile }) =>
        $isTablet || $isMobile ? "20px" : "24px"};
    }
  }
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
  const { isTablet, isMobile } = useContext(responsiveContext);

  useEffect(() => {
    // Header Visible Animation
    const animationTimer = setTimeout(() => {
      navAnimation.start("visible").then(() => navAnimation.start("top"));
    }, 8500);

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
    <Container
      variants={navVariants}
      animate={navAnimation}
      initial="initial"
      $isMobile={isMobile}
    >
      <HeaderInner as="nav">
        <Logo $isTablet={isTablet} $isMobile={isMobile}>
          <a href="/">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.283203 8.43082C0.283203 6.89337 0.619054 5.52011 1.29076 4.31104C1.96246 3.08705 2.88045 2.13921 4.04474 1.4675C5.20902 0.780876 6.50764 0.437561 7.94061 0.437561C9.68703 0.437561 11.1797 0.855509 12.4186 1.69141C13.336 2.29204 14.0695 3.07644 14.6193 4.04461C14.9199 4.57381 14.5004 5.18426 13.8918 5.18426C13.5417 5.18426 13.2311 4.97153 13.0649 4.66341C12.6259 3.84926 12.0223 3.19444 11.2543 2.69896C10.3438 2.10189 9.23923 1.80336 7.94061 1.80336C6.79125 1.80336 5.75384 2.07204 4.82839 2.6094C3.91786 3.14676 3.20138 3.92295 2.67894 4.93797C2.15651 5.93806 1.89529 7.10234 1.89529 8.43082C1.89529 9.7593 2.15651 10.9236 2.67894 11.9237C3.20138 12.9238 3.91786 13.6925 4.82839 14.2298C5.75384 14.7672 6.79125 15.0359 7.94061 15.0359C9.23923 15.0359 10.3438 14.7448 11.2543 14.1627C12.0216 13.6677 12.6247 13.0188 13.0636 12.216C13.2307 11.9105 13.54 11.6998 13.8882 11.6998C14.4976 11.6998 14.9166 12.312 14.6129 12.8403C14.0638 13.7953 13.3324 14.5719 12.4186 15.1702C11.1648 15.9912 9.67211 16.4017 7.94061 16.4017C6.50764 16.4017 5.20902 16.0658 4.04474 15.3941C2.88045 14.7075 1.96246 13.7597 1.29076 12.5506C0.619055 11.3415 0.283203 9.96827 0.283203 8.43082Z"
                fill="currentColor"
              />
              <path
                d="M23.1367 15.2129C23.1367 16.7503 22.8009 18.1236 22.1292 19.3327C21.4575 20.5567 20.5395 21.5045 19.3752 22.1762C18.2109 22.8628 16.9123 23.2061 15.4793 23.2061C13.7329 23.2061 12.2402 22.7882 11.0013 21.9523C10.084 21.3517 9.35039 20.5673 8.80058 19.5991C8.50006 19.0699 8.91953 18.4595 9.52812 18.4595C9.87819 18.4595 10.1888 18.6722 10.355 18.9803C10.7941 19.7944 11.3976 20.4493 12.1656 20.9447C13.0761 21.5418 14.1807 21.8404 15.4793 21.8404C16.6287 21.8404 17.6661 21.5717 18.5915 21.0343C19.5021 20.4969 20.2185 19.7208 20.741 18.7057C21.2634 17.7057 21.5246 16.5414 21.5246 15.2129C21.5246 13.8844 21.2634 12.7201 20.741 11.72C20.2185 10.7199 19.5021 9.95122 18.5915 9.41386C17.6661 8.8765 16.6287 8.60782 15.4793 8.60782C14.1807 8.60782 13.0761 8.89889 12.1656 9.48103C11.3983 9.97603 10.7952 10.6249 10.3563 11.4277C10.1892 11.7332 9.87992 11.9439 9.5317 11.9439C8.92231 11.9439 8.50331 11.3317 8.80706 10.8034C9.35614 9.84841 10.0876 9.07176 11.0013 8.47348C12.2551 7.65251 13.7478 7.24202 15.4793 7.24202C16.9123 7.24202 18.2109 7.57788 19.3752 8.24958C20.5395 8.93621 21.4575 9.88405 22.1292 11.0931C22.8009 12.3022 23.1367 13.6754 23.1367 15.2129Z"
                fill="currentColor"
              />
            </svg>
            <span>eungyeonLee</span>
          </a>
        </Logo>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <DesktopMenu activeSection={activeSection} />
        )}
      </HeaderInner>
    </Container>
  );
};

export default Header;
