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
`;
const DetailInner = styled(Inner)`
  &.detail-header-inner {
    justify-content: space-between;
    align-items: flex-end;
    gap: 100px;
  }
  &.detail-content-inner {
    flex-direction: column;
    gap: 60px;
  }
`;
const DetailHeader = styled.div`
  margin-bottom: 100px;
  .detail-header-text {
    .skill {
      padding: 6px 20px;
      border: 1px solid var(--bg-light-gray);
      border-radius: 20px;
      background: var(--bg-light-color);
      font: 400 14px/1 "Poppins-Regular";
      cursor: default;
    }
    h2 {
      margin: 30px 0;
    }
    .main-description {
      font: 400 16px/1.5 "Pretendard";
      color: var(--bg-dark-gray);
    }
  }
  .detail-header-btns {
    display: flex;
    .move-page-btn {
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
    }
  }
`;
const DetailImg = styled(motion.div)`
  width: 100%;
  height: 700px;
  border-radius: 30px 30px 0 0;
  background-color: var(--bg-light-gray);
  box-shadow: 0 -15px 30px rgba(0, 0, 0, 0.1);
`;
const DetailContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 100px;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 30px;
    background: var(--bg-light-color);
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 30px 30px 0 0;
  }
  .detail-content-text {
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
  }
  .detail-content-img {
    width: 100%;
    display: flex;
    gap: 30px;
    div {
      flex: 1;
      height: 600px;
      background: var(--bg-light-gray);
      border-radius: 30px;
    }
  }
`;

const ProjectDetail = ({ layoutId, isAllView }) => {
  const selectedProject = projectLists.find(
    (project) => project.id === layoutId
  );

  if (!selectedProject) return null;

  const { skill, tools, title, description } = selectedProject;

  return (
    <ModalContainer>
      <DetailModal {...(!isAllView && { layoutId: `container-${layoutId}` })}>
        <DetailHeader>
          <DetailInner className="detail-header-inner">
            <div className="detail-header-text">
              <span className="skill">{skill}</span>
              <SectionTitle>{title}</SectionTitle>
              <motion.p>{description}</motion.p>
            </div>
            <div className="detail-header-btns">
              <span className="move-page-btn">
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
              </span>
            </div>
          </DetailInner>
        </DetailHeader>
        <DetailImg></DetailImg>
        <DetailContent>
          <DetailInner className="detail-content-inner">
            <div className="detail-content-text">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                animi, soluta facilis non cum dolorum. Unde ex officiis eligendi
                eveniet magnam culpa nam aperiam, voluptate molestias dolores,
                est, minus iure.
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
            </div>
            <div className="detail-content-img">
              <div className="img-box"></div>
              <div className="img-box"></div>
            </div>
          </DetailInner>
        </DetailContent>
      </DetailModal>
    </ModalContainer>
  );
};

export default ProjectDetail;
