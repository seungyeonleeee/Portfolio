import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Inner, Overlay, Modal, SectionTitle } from "../../../styledComponents";
import { projectCategory, projectLists } from "../../../utlis";
import ProjectItem from "./ProjectItem";
import Button from "../../Button";

const Container = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow-y: auto;
  z-index: 2;
`;
const AllViewInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
const ProjectTabMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  li {
    font: normal 18px/1em "Poppins-Regular";
    color: var(--bg-dark-gray);
    cursor: pointer;
    transition: color 0.3s ease;
    &.active,
    &:hover {
      color: var(--bg-accent-color);
    }
  }
`;
const ProjectListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 60px;
  li {
    width: 100%;
    .img-box {
      width: 100%;
      height: 400px;
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
const OverlayVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const ProjectAllView = ({ setIsAllView }) => {
  const newArr = ["All", ...projectCategory];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filteredProjects =
      selectedCategory === "All"
        ? projectLists
        : projectLists.filter((project) => project.skill === selectedCategory);
    setFilteredProjects(filteredProjects);
  }, [selectedCategory]);

  return (
    <Container>
      <Overlay
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={OverlayVariants}
        onClick={() => setIsAllView(false)}
      />
      <Modal
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
      >
        <AllViewInner>
          <SectionTitle>Featured Projects</SectionTitle>
          <ProjectTabMenu>
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
          <ProjectListWrapper>
            <AnimatePresence>
              {filteredProjects.map((list) => (
                <ProjectItem key={list.id} {...list} />
              ))}
            </AnimatePresence>
          </ProjectListWrapper>
        </AllViewInner>
        <Button text={"Close"} setIsAllView={setIsAllView} />
      </Modal>
    </Container>
  );
};

export default ProjectAllView;
