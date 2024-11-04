import React, { useState } from "react";
import styled from "styled-components";
import ViewMoreButton from "../ViewMoreButton";
import { SectionTitle, ImgBoxLarge, ImgBoxSmall } from "../../util";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
const ProcessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;
const Accordion = styled.div`
  width: 520px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top: 1px solid var(--bg-light-gray);
      .title {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
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
        width: 100%;
        padding: 0 30px 30px;
        /* overflow: hidden; */
        p {
          font: 400 16px/1.3 "Pretendard";
          color: var(--bg-dark-gray);
        }
      }
      &.active {
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
      }
    }
  }
  button {
  }
`;
const ImgBox = styled.div`
  width: 597px;
  height: 550px;
  position: relative;
  & > div {
    position: absolute;
    &.img-box-large {
      top: 50%;
      left: 53%;
      transform: translate(-50%, -50%);
      border: 3px solid var(--bg-dark-gray);
    }
    &.img-box-small {
      border: 2px solid var(--bg-dark-gray);
      box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.2);
      &.small01 {
        top: 50%;
        left: 0;
      }
      &.small02 {
        top: 5%;
        right: 0;
      }
    }
  }
`;

const ProjectProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Planning",
      content:
        "프로젝트 요구사항을 이해하고 명확한 목표를 설정 했습니다.<br />사용자 페르소나를 설정하고, 주요 기능과 페이지 간의 관계를 설계했습니다.<br />웹사이트의 구조와 콘텐츠 흐름을 정의하여<br />사용자 경험이 원활하도록 계획했습니다.",
      mainImg: "process_planning01.jpg",
      subImg01: "process_planning02.jpg",
      subImg02: "process_planning03.jpg",
    },
    {
      title: "Design",
      content:
        "디자인의 일관성을 유지하기 위해 컴포넌트화 하여 피그마를 작업했습니다.<br />각 페이지에 필요한 UI 요소를 정의하고, 재사용 가능한 디자인 시스템을 구축하여<br />효율적인 디자인 프로세스를 구현했습니다.",
      mainImg: "process_design01.jpg",
      subImg01: "process_design02.jpg",
      subImg02: "process_design03.jpg",
    },
    {
      title: "Development",
      content:
        "주요 기능을 직접 구현하며 사용자 인터랙션을 처리했습니다.<br />DOM을 제어하고 이벤트 핸들링을 통해 동적인 웹 요소들을 구현했습니다.<br />최적화된 코드 작성으로 성능을 고려한 개발을 완료했습니다.",
      mainImg: "process_development01.jpg",
      subImg01: "process_development02.jpg",
      subImg02: "process_development03.jpg",
    },
  ];

  const onClickMenu = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Container>
      <SectionTitle>Process Work</SectionTitle>
      <ProcessWrapper>
        <Accordion>
          <ul>
            {accordionItems.map((item, index) => (
              <li
                key={index}
                onClick={() => onClickMenu(index)}
                className={activeIndex === index ? "active" : null}
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
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="content"
                      initial={{ height: 10, opacity: 0 }}
                      animate={{ height: 120, opacity: 1 }}
                      exit={{ height: 10, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <p>{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          <ViewMoreButton text="Read More" />
        </Accordion>
        <ImgBox>
          <ImgBoxLarge className="img-box-large" />
          <ImgBoxSmall className="img-box-small small01" />
          <ImgBoxSmall className="img-box-small small02" />
        </ImgBox>
      </ProcessWrapper>
    </Container>
  );
};

export default ProjectProcess;
