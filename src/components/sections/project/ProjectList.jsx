import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { responsiveContext } from "../../../App";
import Button from "../../Button";
import { Inner, SectionTitle, Overlay } from "../../../styledComponents";
import { projectCategory, projectLists } from "../../../utlis";
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
`;
const ListTabMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ $isMobile }) => ($isMobile ? "20px" : "40px")};
  margin-bottom: 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 10px;
    column-gap: ${({ $isMobile }) => ($isMobile ? "20px" : "40px")};
    li {
      font-family: "Poppins-Regular";
      font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "18px")};
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
  const [activeCategory, setActiveCategory] = useState("Javascript");
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
            pinSpacing: false,
            onUpdate: (self) => {
              const scrollProgress = self.progress;
              const currentIndex = Math.floor(
                (scrollProgress * totalWidth) / itemWidth
              );
              const currentProject = projectLists[currentIndex];

              if (currentProject) {
                setActiveCategory(currentProject.category);
              }
            },
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
          <ListTabMenu $isMobile={isMobile}>
            <ul>
              {projectCategory.map((category, index) => (
                <li
                  key={index}
                  className={category === activeCategory ? "active" : null}
                >
                  {category}
                </li>
              ))}
            </ul>
            <Button text={"See All Projects"} setIsAllView={setIsAllView} />
          </ListTabMenu>
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
