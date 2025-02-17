import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { responsiveContext } from "../../../App";
import Button from "../../Button";
import { Inner, SectionTitle, Overlay } from "../../../styledComponents";
import { projectLists } from "../../../utils";
import ProjectItem from "./ProjectItem";
import ProjectAllView from "./ProjectAllView";
import ProjectDetail from "./ProjectDetail";

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
`;
const ListInner = styled(Inner)`
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  button {
  }
`;
const SeeAllButton = styled.div`
  position: relative;
  border-radius: 54px;
  background: var(--bg-accent-color);
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: var(--bg-light-color);
    animation: shiny 5s 3s linear infinite;
  }
  button {
    color: var(--bg-light-color);
    svg {
      path {
        fill: var(--bg-light-color);
      }
    }
    &::before,
    &::after {
      background: var(--bg-light-color);
    }
    &:hover {
      color: var(--bg-accent-color);
      svg {
        path {
          fill: var(--bg-accent-color);
        }
      }
    }
  }
  @keyframes shiny {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(30) rotate(45deg);
      opacity: 0;
    }
  }
`;
const ProjectWrapper = styled.div`
  width: 100%;
  pointer-events: all;
  ul {
    display: flex;
    gap: 30px;
    transition: transform 0.2s ease-out;
    li {
      pointer-events: all;
    }
  }
`;

const ProjectList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isAllView, setIsAllView] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const slideRef = useRef(null);
  const triggerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const { isDesktop, isMobile } = useContext(responsiveContext);

  useEffect(() => {
    const calculateWidth = () => {
      const itemWidth = isDesktop ? 430 : 300;
      const totalWidth = itemWidth * projectLists.length;
      setContainerHeight(totalWidth);

      const fixedTl = gsap.fromTo(
        slideRef.current,
        { x: 0 },
        {
          x: -totalWidth + (isDesktop ? itemWidth * 2 : 0),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${totalWidth - (isDesktop ? 1000 : 800)}px`,
            scrub: 1,
            pin: ".project-list-container",
            pinSpacing: true,
          },
        }
      );
      return () => fixedTl.kill();
    };

    calculateWidth();
  }, [isMobile]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <Wrapper $containerHeight={containerHeight}>
      <Container className="project-list-container" ref={triggerRef}>
        <ListInner>
          <SectionTitle>Featured Projects</SectionTitle>
          <SeeAllButton>
            <Button text={"See All Projects"} setIsAllView={setIsAllView} />
          </SeeAllButton>
          <ProjectWrapper>
            <ul ref={slideRef}>
              {projectLists.map((project) => (
                <ProjectItem
                  key={project.id}
                  {...project}
                  layoutId={project.id}
                  onClick={() => {
                    handleClick(project.id);
                  }}
                />
              ))}
            </ul>
          </ProjectWrapper>
        </ListInner>
      </Container>

      <AnimatePresence>
        {isAllView && <ProjectAllView setIsAllView={setIsAllView} />}
      </AnimatePresence>
      <AnimatePresence>
        {selectedId && (
          <Overlay
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectDetail layoutId={selectedId} isAllView={false} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProjectList;
