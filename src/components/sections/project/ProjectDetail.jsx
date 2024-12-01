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
  ButtonStyle,
  BadgeStyle,
} from "../../../styledComponents";
import { ArrowIcon } from "../../../components/ArrowIcon";

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
      ${BadgeStyle}
      color: var(--bg-dark-color);
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
    flex-direction: column;
    align-items: center;
    gap: 10px;
    ul {
      width: 220px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      li {
        transition: all 0.3s;
        a {
          ${ButtonStyle}
          color: var(--bg-dark-gray);
          border-color: var(--bg-dark-gray);
          svg {
            transition: fill 0.3s;
            path {
              fill: var(--bg-dark-gray);
            }
          }
          &:hover,
          &:active {
            background: var(--bg-dark-gray);
            color: var(--bg-light-color);
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
            a {
              svg {
                path {
                  fill: var(--bg-light-color);
                }
              }
            }
          }
        }
      }
      &.detail-move-btns-inner {
        li {
          a {
            width: 100%;
            flex: 1;
            padding: 10px 20px;
          }
        }
      }
    }
    .move-page-btn {
      a {
        ${ButtonStyle}
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
              <ul className="detail-move-btns-inner">
                <li>
                  <a>
                    Figma
                    <ArrowIcon />
                  </a>
                </li>
                <li>
                  <a>
                    Github
                    <ArrowIcon />
                  </a>
                </li>
              </ul>
              {/* <ul className="move-github-btn">
                <li>
                  <a>
                    Github
                    <ArrowIcon />
                  </a>
                </li>
              </ul> */}
              <span className="move-page-btn">
                <a>
                  View Web Page
                  <ArrowIcon />
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
