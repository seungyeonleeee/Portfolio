import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { wrapper, Inner } from "../../../styledComponents";
import { SectionTitle } from "../../../styledComponents";
import { projectCategory, projectLists } from "../../../utlis";
import ProjectItem from "./ProjectItem";
import { AnimatePresence } from "framer-motion";

const Container = styled.section`
  ${wrapper}
  width: 90vw;
  height: auto;
  position: relative;
  background: var(--bg-light-color);
  background: #f0f0f0;
  padding: 140px 0;
  margin: 5vw auto;
  z-index: 100;
`;
const AllViewInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border: 1px solid red;
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
    &.active {
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

const ProjectAllView = () => {
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
      <AllViewInner>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectTabMenu>
          {newArr.map((category, index) => (
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
    </Container>
  );
};

export default ProjectAllView;

/*
const projectsData = [
  { id: 1, category: "Design", imageUrl: "/img/dd.jpg" },
  { id: 2, category: "Brand", imageUrl: "/img/dd.jpg" },
  { id: 3, category: "Photos", imageUrl: "/img/image.png" },
  { id: 4, category: "Design", imageUrl: "/img/dd.jpg" },
  { id: 5, category: "Brand", imageUrl: "/img/꼬북이.jfif" },
  { id: 6, category: "Photos", imageUrl: "/img/파이리.jfif" },
  { id: 7, category: "Photos", imageUrl: "/img/dd.jpg" },
];
// Framer Motion Variants
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};
const Project: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData             
      : projectsData.filter((project) => project.category === selectedCategory);
  return (
    <Wrapper>
      <Header>MY Project</Header>
      <FilterContainer>
        {["All", "Design", "Brand", "Photos"].map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      <GridContainer>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              onClick={() => setSelectedProject(project.imageUrl)} // 클릭 시 모달 열기
            >
              <ProjectImage src={project.imageUrl} alt={project.category} />
            </ProjectItem>
          ))}
        </AnimatePresence>
      </GridContainer>
      {selectedProject && (
        <OpenProject
          imageUrl={selectedProject}
          onClose={() => setSelectedProject(null)} // 모달 닫기
        />
      )}
    </Wrapper>
  );
};
export default Project;
*/
