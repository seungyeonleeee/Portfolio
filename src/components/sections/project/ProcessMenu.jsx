import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { responsiveContext } from "../../../App";
import { accordionItems } from "../../../utils";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: ${({ $isDesktop }) => ($isDesktop ? "550px" : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Accordion = styled.ul`
  li {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    position: relative;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    transition: border-color 0.3s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 1px;
    }
    &::before {
      width: 100%;
      background: var(--bg-light-gray);
    }
    &::after {
      width: 0;
      background: var(--bg-dark-gray);
      transition: all 0.6s;
    }
    .title {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${({ $isMobile }) => ($isMobile ? "0 10px" : "0 30px")};
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      cursor: pointer;
      .title-inner {
        display: flex;
        align-items: center;
        gap: 30px;
        font: 500 24px/1 "Poppins-Medium";
        font-size: ${({ $isMobile }) => ($isMobile ? "20px" : "24px")};
        span {
          color: var(--bg-dark-gray);
        }
        h4 {
          height: 30px;
          position: relative;
          color: var(--bg-dark-color);
          transition: all 0.6s;
          &::before {
            content: attr(data-menu);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            color: var(--bg-accent-color);
            overflow: hidden;
            transition: all 0.6s;
          }
        }
      }
      .title-arrow {
        width: 20px;
        height: 20px;
        svg {
          width: 100%;
          height: 100%;
          stroke: var(--bg-dark-gray);
          transition: transform 0.3s;
        }
      }
      &:hover {
        .title-inner {
          h4 {
            color: transparent;
            &::before {
              height: 100%;
            }
          }
        }
      }
    }
    .content {
      width: 100%;
      overflow: hidden;
      margin-top: 100px;
      padding: ${({ $isMobile }) =>
        $isMobile ? "0px 10px 30px" : "0px 30px 30px"};
      transform-origin: top;
      opacity: 0;
      pointer-events: none;
      border-radius: 0 0 20px 20px;
      overflow: hidden;
      transition: all 0.3s;
      p {
        white-space: pre-wrap;
        word-break: keep-all;
        font: 400 16px/1.3 "Pretendard";
        color: var(--bg-dark-gray);
      }
    }
    &.active {
      &::after {
        width: 100%;
      }
      .title {
        .title-inner {
          h4 {
            color: var(--bg-accent-color);
          }
        }
        .title-arrow {
          svg {
            transform: rotate(180deg);
            stroke: var(--bg-dark-color);
          }
        }
      }
      .content {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`;

const ProcessMenu = ({ activeIndex, onClickMenu }) => {
  const [contentHeight, setContentHeight] = useState({});
  const { isDesktop, isTabletOrDesktop, isMobile } =
    useContext(responsiveContext);

  const updateContentHeights = () => {
    accordionItems.forEach((_, index) => {
      const content = document.querySelector(
        `li:nth-child(${index + 1}) .content`
      );
      if (content) {
        setContentHeight((prev) => ({
          ...prev,
          [index]: content.scrollHeight + 100,
        }));
      }
    });
  };

  useEffect(() => {
    updateContentHeights();

    window.addEventListener("resize", updateContentHeights);

    return () => window.removeEventListener("resize", updateContentHeights);
  }, []);

  return (
    <Container $isDesktop={isDesktop}>
      <Accordion $isMobile={isMobile}>
        {accordionItems.map((item, index) => (
          <motion.li
            key={index}
            onClick={() => onClickMenu(index)}
            className={activeIndex === index ? "active" : null}
            animate={{
              height: activeIndex === index ? contentHeight[index] || 215 : 100,
            }}
          >
            <div className="title">
              <div className="title-inner">
                <span>{index + 1} /</span>
                <h4 data-menu={item.title}>{item.title}</h4>
              </div>
              <div className="title-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="content">
              <p>{item.content}</p>
            </div>
          </motion.li>
        ))}
      </Accordion>
    </Container>
  );
};

export default ProcessMenu;
