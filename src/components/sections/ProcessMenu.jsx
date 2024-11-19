import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ViewMoreButton from "../ViewMoreButton";
import { accordionItems } from "../../utlis";

const Container = styled.div`
  width: 520px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Accordion = styled.ul`
  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid var(--bg-light-gray);
    position: relative;
    transition: border-color 0.3s;
    .title {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
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
        span {
          color: var(--bg-dark-gray);
        }
        h4 {
          color: var(--bg-dark-color);
          transition: color 0.3s;
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
    }
    .content {
      overflow: hidden;
      margin-top: 100px;
      padding: 0px 30px 30px;
      transform-origin: top;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s;
      p {
        white-space: pre-wrap;
        font: 400 16px/1.3 "Pretendard";
        color: var(--bg-dark-gray);
      }
    }
    &.active {
      border-top: 1px solid var(--bg-dark-gray);
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
  return (
    <Container>
      <Accordion>
        {accordionItems.map((item, index) => (
          <motion.li
            key={index}
            onClick={() => onClickMenu(index)}
            className={activeIndex === index ? "active" : null}
            animate={{
              height: activeIndex === index ? 215 : 100,
            }}
          >
            <div className="title">
              <div className="title-inner">
                <span>{index + 1} /</span>
                <h4>{item.title}</h4>
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
      <ViewMoreButton text="Read More" />
    </Container>
  );
};

export default ProcessMenu;
