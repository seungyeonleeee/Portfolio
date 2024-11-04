import React from "react";
import styled from "styled-components";
import ProjectProcess from "./ProjectProcess";
import ProjectList from "./ProjectList";
import { wrapper, Inner } from "../../util";

const Container = styled.section`
  ${wrapper}
  position: relative;
  padding: 100px 0;
  background: linear-gradient(
    to bottom,
    var(--bg-light-color) 70%,
    var(--bg-beige-color)
  );
  &::before {
    content: "";
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 40px 40px 0 0;
    background: var(--bg-light-color);
  }
`;
const ProjectInner = styled(Inner)`
  flex-direction: column;
  gap: 100px;
`;

const Project = () => {
  return (
    <Container>
      <ProjectInner>
        <ProjectProcess />
        <ProjectList />
      </ProjectInner>
    </Container>
  );
};

export default Project;
