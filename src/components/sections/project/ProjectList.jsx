import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../Button";
import { Inner, SectionTitle } from "../../../styledComponents";
import { projectCategory, projectLists } from "../../../utlis";
import ProjectItem from "./ProjectItem";
import ProjectAllView from "./ProjectAllView";
import ProjectDetails from "./ProjectDetails";

// Styled
const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.$containerHeight}px;
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
const ListTabMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  }
`;

const ProjectList = () => {
  const [isAllView, setIsAllView] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const slideRef = useRef(null);
  const triggerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(slideRef?.current.scrollWidth);

    const fixedTl = gsap.fromTo(
      slideRef.current,
      { x: 0 },
      {
        x: -slideRef?.current.scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${slideRef?.current.scrollWidth - 1000}px`,
          scrub: 3,
          pin: ".project-list-container",
          pinSpacing: false,
        },
      }
    );
    return () => fixedTl.kill();
  }, []);

  // console.log(isAllView);

  return (
    <>
      <Wrapper $containerHeight={containerHeight}>
        <Container className="project-list-container" ref={triggerRef}>
          <ListInner>
            <SectionTitle>Featured Projects</SectionTitle>
            <ListTabMenu>
              <ul>
                {projectCategory.map((category, index) => (
                  <li
                    key={index}
                    className={category === "Javascript" ? "active" : null}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <Button text={"See All Projects"} setIsAllView={setIsAllView} />
            </ListTabMenu>
            <ProjectWrapper>
              <ul ref={slideRef}>
                {projectLists.map((list) => (
                  <ProjectItem key={list.id} {...list} />
                ))}
                {/* <AnimatePresence>
                      {list.id && <ProjectDetails {...list} />}
                    </AnimatePresence> */}
              </ul>
            </ProjectWrapper>
          </ListInner>
        </Container>
        <AnimatePresence>
          {isAllView && <ProjectAllView setIsAllView={setIsAllView} />}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default ProjectList;
