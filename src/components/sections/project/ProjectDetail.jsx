import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectLists } from "../../../utlis";
import { Inner, Modal, SectionTitle } from "../../../styledComponents";

const Container = styled(Modal).attrs({ as: "section" })`
  overflow-y: auto;
  max-height: 90vh;
`;
const DetailInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
const Heading = styled.div`
  .skill {
    padding: 6px 20px;
    border: 1px solid var(--bg-light-gray);
    border-radius: 20px;
    background: var(--bg-light-color);
    font: 400 12px/1 "Poppins-Regular";
    cursor: default;
  }
  h2 {
    margin: 40px 0 20px;
  }
  .main-description {
    font: 400 16px/1.5 "Pretendard";
    color: var(--bg-dark-gray);
  }
`;
const MainImgBox = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 30px 30px 0 0;
  background-color: var(--bg-light-gray);
  position: absolute;
  top: 350px;
  left: 0;
`;
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 600px;
`;

const ProjectDetail = ({ layoutId }) => {
  const selectedProject = projectLists.find(
    (project) => project.id === layoutId
  );

  if (!selectedProject) return null;

  const { skill, tools, title, description } = selectedProject;

  return (
    <Container
    // layoutId={layoutId}
    >
      <DetailInner>
        <Heading>
          <span className="skill">{skill}</span>
          <SectionTitle>{title}</SectionTitle>
          <p className="main-description">{description}</p>
        </Heading>
        <MainImgBox
        //  layoutId={`img-box-${layoutId}`}
        ></MainImgBox>
        <TextBox>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi,
            soluta facilis non cum dolorum. Unde ex officiis eligendi eveniet
            magnam culpa nam aperiam, voluptate molestias dolores, est, minus
            iure. Error facilis ad commodi amet, quibusdam minima temporibus
            dolore. Minus earum maxime excepturi. Temporibus, eum nulla.
            Distinctio dicta nesciunt voluptatum cum sit at reiciendis esse,
            molestias modi nemo natus quasi.
          </p>
          <ul className="tech-group">
            <li>
              <h4>Type</h4>
              <span>Responsive</span>
            </li>
            <li>
              <h4>Tools</h4>
              {tools.map((tool, index) => (
                <span key={index}>{tool}</span>
              ))}
            </li>
          </ul>
        </TextBox>
        <div className="img-group">
          <div className="img-box"></div>
          <div className="img-box"></div>
        </div>
      </DetailInner>
    </Container>
  );
};

export default ProjectDetail;
