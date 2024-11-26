import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectLists } from "../../../utlis";
import {
  Inner,
  ModalContainer,
  Modal,
  SectionTitle,
} from "../../../styledComponents";

const DetailModal = styled(Modal)`
  flex-direction: column;
  gap: 150px;
`;
const DetailInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
`;
const TitleArea = styled.div`
  .skill {
    padding: 6px 20px;
    border: 1px solid var(--bg-light-gray);
    border-radius: 20px;
    background: var(--bg-light-color);
    font: 400 14px/1 "Poppins-Regular";
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
const DescriptionArea = styled.div``;
const MainImgBox = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 30px 30px 0 0;
  background-color: var(--bg-light-gray);
  box-shadow: 0 -15px 30px rgba(0, 0, 0, 0.1);
`;
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  h3 {
    font: 500 40px/1 "Poppins-Medium";
  }
  p {
    font: 400 20px/1.5 "Pretendard";
    margin: 30px 0 60px;
  }
  .tech-group {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    li {
      padding: 20px 0;
      h4 {
        font: 500 14px/1 "Poppins-Regular";
        letter-spacing: 0;
        text-transform: uppercase;
        color: var(--bg-dark-gray);
        margin-bottom: 20px;
      }
      .tool-group {
        display: flex;
        gap: 10px;
        span {
          font: 400 18px/1 "Pretendard";
        }
      }
    }
  }
`;
const SubImgBox = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  div {
    flex: 1;
    height: 600px;
    background: var(--bg-light-gray);
    border-radius: 30px;
  }
`;
const MovePageBtn = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 219px;
  border: 1px solid var(--bg-accent-color);
  border-radius: 54px;
  color: var(--bg-accent-color);
  background: var(--bg-light-color);
  transition: all 0.3s;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 15px 40px;
    letter-spacing: 0;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: var(--bg-accent-color);
        transition: all 0.3s;
      }
    }
  }
  &:hover,
  &:active {
    background: var(--bg-accent-color);
    color: var(--bg-light-color);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    svg {
      path {
        fill: var(--bg-light-color);
      }
    }
  }
`;
const ProjectDetail = ({ layoutId }) => {
  const selectedProject = projectLists.find(
    (project) => project.id === layoutId
  );

  if (!selectedProject) return null;

  const { skill, tools, title, description } = selectedProject;

  return (
    <ModalContainer
    // layoutId={layoutId}
    >
      <DetailModal>
        <TitleArea>
          <DetailInner className="heading-inner">
            <span className="skill">{skill}</span>
            <SectionTitle>{title}</SectionTitle>
            <p className="main-description">{description}</p>
          </DetailInner>
        </TitleArea>
        <MainImgBox
        //  layoutId={`img-box-${layoutId}`}
        ></MainImgBox>
        <DescriptionArea>
          <DetailInner>
            <TextBox>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                animi, soluta facilis non cum dolorum. Unde ex officiis eligendi
                eveniet magnam culpa nam aperiam, voluptate molestias dolores,
                est, minus iure. Error facilis ad commodi amet, quibusdam minima
                temporibus dolore. Minus earum maxime excepturi. Temporibus, eum
                nulla. Distinctio dicta nesciunt voluptatum cum sit at
                reiciendis esse, molestias modi nemo natus quasi.
              </p>
              <ul className="tech-group">
                <li>
                  <h4>Type</h4>
                  <span>Responsive</span>
                </li>
                <li>
                  <h4>Tools</h4>
                  <div className="tool-group">
                    {tools.map((tool, index) => (
                      <span key={index}>{tool}</span>
                    ))}
                  </div>
                </li>
                <li>
                  <h4>Type</h4>
                  <span>Responsive</span>
                </li>
                <li>
                  <h4>Type</h4>
                  <span>Responsive</span>
                </li>
              </ul>
            </TextBox>
            <SubImgBox>
              <div className="img-box"></div>
              <div className="img-box"></div>
            </SubImgBox>
          </DetailInner>
        </DescriptionArea>
        <MovePageBtn>
          <a>
            View Web Page
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0V9.00075H11.002V1.70557L0.705589 12L0 11.2922L10.2944 0.99975H2.99301V0H12Z" />
            </svg>
          </a>
        </MovePageBtn>
      </DetailModal>
    </ModalContainer>
  );
};

export default ProjectDetail;
