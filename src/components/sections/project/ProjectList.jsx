import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ViewMoreButton from "../../ViewMoreButton";
import { Inner, SectionTitle } from "../../../styledComponents";
import { projectTabMenu, projectLists } from "../../../utlis";

// Styled
const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.$containerHeight / 1.8}px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  padding-top: 200px;
`;
const ListInner = styled(Inner)`
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const ListMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    li {
      font: 400 18px/1 "Poppins-Regular";
      cursor: pointer;
      transition: color 0.3s;
      &.active {
        color: var(--bg-accent-color);
      }
    }
  }
`;
const ProjectWrapper = styled.div`
  width: 100%;
  ul {
    display: flex;
    gap: 30px;
    transition: transform 0.2s ease-out;
    li {
      width: 430px;
      .img-box {
        width: 430px;
        height: 430px;
        border-radius: 20px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        background-color: var(--bg-light-gray);
      }
      .badge-group {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 40px 0 20px;
        span {
          padding: 6px 20px;
          border: 1px solid var(--bg-light-gray);
          border-radius: 20px;
          color: var(--bg-dark-gray);
          background-color: var(--bg-beige-color);
          font: 400 14px/1 "Poppins-Regular";
          cursor: default;
        }
      }
      h3 {
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      p {
        color: var(--bg-dark-gray);
        line-height: 1.3;
        word-break: keep-all;
      }
    }
  }
`;

const ProjectList = () => {
  gsap.registerPlugin(ScrollTrigger);
  const slideRef = useRef(null);
  const triggerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // ul의 전체 너비 계산: 각 li의 너비(430px) * 항목 수 + gap(30px) * (항목 수 - 1)
    const totalWidth =
      projectLists.length * 430 + (projectLists.length - 1) * 30;
    setContainerHeight(totalWidth);

    const fixedTl = gsap.fromTo(
      slideRef.current,
      { x: 0 },
      {
        x: "-120%",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: ".project-list-container",
          pinSpacing: false,
        },
      }
    );
    return () => fixedTl.kill();
  }, []);

  return (
    <Wrapper $containerHeight={containerHeight}>
      <Container className="project-list-container" ref={triggerRef}>
        <ListInner>
          <SectionTitle>Featured Projects</SectionTitle>
          <ListMenu>
            <ul>
              {projectTabMenu.map((menu, index) => (
                <li
                  key={index}
                  className={menu === "Javascript" ? "active" : ""}
                >
                  {menu}
                </li>
              ))}
            </ul>
            <ViewMoreButton text={"See All Projects"} />
          </ListMenu>
          <ProjectWrapper>
            <ul ref={slideRef}>
              {projectLists.map((list, index) => (
                <li key={index}>
                  <div className="img-box"></div>
                  <div className="badge-group">
                    {list.badges.map((badge, index) => (
                      <span key={index}>{badge}</span>
                    ))}
                  </div>
                  <h3>{list.title}</h3>
                  <p>{list.description}</p>
                </li>
              ))}
            </ul>
          </ProjectWrapper>
        </ListInner>
      </Container>
    </Wrapper>
  );
};

export default ProjectList;
