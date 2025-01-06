import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { responsiveContext } from "../../../App";
import {
  Inner,
  Overlay,
  ModalContainer,
  Modal,
  SectionTitle,
} from "../../../styledComponents";
import { projectCategory, projectLists } from "../../../utils";
import ProjectItem from "./ProjectItem";
import Button from "../../Button";
import ProjectDetail from "./ProjectDetail";

const AllViewInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  @media screen and (max-width: 1700px) {
    width: 100%;
    padding: 0 4%;
    gap: 20px;
  }
`;
const ProjectTabMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 10px;
  row-gap: 5px;
  padding: 15px 0;
  position: sticky;
  top: 0;
  background: var(--bg-light-color);
  z-index: 1;
  li {
    font-family: "Poppins-Regular";
    font-size: ${({ $isMobile }) => ($isMobile ? "15px" : "18px")};
    color: var(--bg-dark-gray);
    cursor: pointer;
    transition: color 0.3s ease;
    &.active,
    &:hover {
      color: var(--bg-accent-color);
    }
    &::after {
      content: "|";
      margin-left: 10px;
      color: var(--bg-light-gray);
    }
    &:last-child::after {
      content: "";
    }
  }
`;
const ProjectListWrapper = styled.ul`
  display: grid;
  grid-template-columns: ${({ $isTablet, $isMobile }) =>
    $isTablet
      ? "repeat(2, 1fr)"
      : $isMobile
      ? "repeat(1, 1fr)"
      : "repeat(3, 1fr)"};
  column-gap: 30px;
  row-gap: 60px;
  li {
    width: 100%;
    .img-box {
      width: 100%;
      height: ${({ $isTabletOrDesktop, $isMobile }) =>
        $isTabletOrDesktop || $isMobile ? "350px" : "400px"};
      background: var(--bg-dark-gray);
    }
    .badge-group {
      margin: 30px 0 20px;
      span {
        color: var(--bg-dark-color);
        background: var(--bg-light-color);
      }
    }
  }
`;

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 },
  },
};

const ProjectAllView = ({ setIsAllView }) => {
  const newArr = ["All", ...projectCategory];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const { isTabletOrDesktop, isTablet, isMobile } =
    useContext(responsiveContext);

  useEffect(() => {
    const filteredProjects =
      selectedCategory === "All"
        ? projectLists
        : projectLists.filter(
            (project) => project.category === selectedCategory
          );
    setFilteredProjects(filteredProjects);
  }, [selectedCategory]);

  return (
    <ModalContainer className="all-view-modal-container">
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsAllView(false)}
      />
      <Modal
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        $isMobile={isMobile}
      >
        <AllViewInner>
          <SectionTitle>Featured Projects</SectionTitle>
          <ProjectTabMenu $isMobile={isMobile}>
            {newArr.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active" : null}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ProjectTabMenu>
          <ProjectListWrapper
            $isTabletOrDesktop={isTabletOrDesktop}
            $isTablet={isTablet}
            $isMobile={isMobile}
          >
            <AnimatePresence>
              {filteredProjects.map((list) => (
                <ProjectItem
                  key={list.id}
                  {...list}
                  isAllView={true}
                  onClick={() => setSelectedId(list.id)}
                />
              ))}
            </AnimatePresence>
          </ProjectListWrapper>
        </AllViewInner>
        <Button text={"Close"} setIsAllView={setIsAllView} />
      </Modal>
      <AnimatePresence>
        {selectedId && (
          <Overlay
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectDetail layoutId={selectedId} isAllView={true} />
          </Overlay>
        )}
      </AnimatePresence>
    </ModalContainer>
  );
};

export default ProjectAllView;
