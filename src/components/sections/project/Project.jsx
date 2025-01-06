import React from "react";
import styled from "styled-components";
import ProjectProcess from "./ProjectProcess";
import ProjectList from "./ProjectList";
import { wrapper } from "../../../styledComponents";

const Container = styled.section`
  ${wrapper}
  flex-direction: column;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--bg-light-color) 20%,
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
const LineElement = styled.article`
  position: absolute;
  top: -40px;
  right: 0;
  width: 100%;
  max-width: 640px;
  min-width: 300px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Project = () => {
  return (
    <Container id="project">
      <LineElement>
        <svg
          // width="640"
          // height="1791"
          viewBox="0 0 640 1791"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M640.33 1789.5C488.83 1474 2.00053 1382 2 1169C1.99946 953.951 253.5 977.5 373.5 825.046M373.5 825.046C400 769.5 322.992 629.628 276.5 684C217.5 753 323 830.701 373.5 825.046ZM373.5 825.046C457.933 815.591 575.809 765.06 640.33 697.701M321.5 -0.407471C427.155 44.3115 565.848 138.727 640.33 290.5"
            stroke="#FF481F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </LineElement>
      <ProjectProcess />
      <ProjectList />
    </Container>
  );
};

export default Project;
