import React from "react";
import styled from "styled-components";
import ProjectProcess from "./ProjectProcess";
import ProjectList from "./ProjectList";
import { wrapper, Inner } from "../../util";

const Container = styled.section`
  ${wrapper}
  padding: 100px 0;
  background: linear-gradient(
    to bottom,
    var(--bg-light-color) 70%,
    var(--bg-beige-color)
  );
  border-radius: 40px 40px 0 0;
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
