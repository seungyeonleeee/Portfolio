import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { responsiveContext } from "../../../App";
import { projectLists } from "../../../utils";
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
  width: 100%;
  max-width: 1000px;
  padding: 0 4%;
  &.detail-header-inner {
    justify-content: space-between;
    align-items: ${({ $isMobile }) => ($isMobile ? "center" : "flex-end")};
    flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
    gap: ${({ $isMobile }) => ($isMobile ? "30px" : "100px")};
  }
  &.detail-content-inner {
    flex-direction: column;
    gap: 60px;
  }
`;
const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "50px" : "100px")};
  .detail-header-text {
    text-align: ${({ $isMobile }) => ($isMobile ? "center" : "left")};
    .category {
      ${BadgeStyle}
      color: var(--bg-dark-color);
    }
    h2 {
      margin: 30px 0;
    }
    p {
      font: 400 17px/1.5 "Pretendard";
      word-break: keep-all;
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
        width: 100%;
        a {
          ${ButtonStyle}
          color: var(--bg-dark-gray);
          border-color: var(--bg-dark-gray);
          svg {
            path {
              fill: var(--bg-dark-gray);
            }
          }
          &::before,
          &::after {
            background: var(--bg-dark-gray);
          }
          &:hover,
          &:active {
            color: var(--bg-light-color);
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
          }
        }
      }
      &.detail-move-btns-inner {
        li {
          a {
            width: 100%;
            flex: 1;
            padding: 12px 20px;
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
  height: ${({ $isTablet, $isMobile }) =>
    $isTablet ? "500px" : $isMobile ? "300px" : "800px"};
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.04);
  background: url(/images/projects/${(props) => props.$bgimg || ""}) center
    top/cover no-repeat;
`;
const DetailContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 50px;
  background: var(--bg-light-color);
  box-shadow: 0 -15px 30px rgba(0, 0, 0, 0.2);
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
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 120px;
    background: var(--bg-light-color);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    border-radius: 0 0 30px 30px;
  }
  .detail-content-text {
    width: 100%;
    text-align: ${({ $isMobile }) => ($isMobile ? "center" : "left")};
    h2 {
      color: var(--bg-light-gray);
    }
    p {
      font: ${({ $isMobile }) => ($isMobile ? "400 16px/1.5" : "400 18px/1.5")}
        "Pretendard";
      margin: 30px 0 60px;
      word-break: keep-all;
    }
    .tech-group {
      width: ${({ $isDesktop }) => ($isDesktop ? "80%" : "100%")};
      min-width: 350px;
      display: grid;
      grid-template-columns: ${({ $isMobile }) =>
        $isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
      column-gap: 30px;
      text-align: left;
      li {
        padding: 20px 0;
        h4 {
          font: 500 14px/1 "Poppins-Regular";
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--bg-dark-gray);
          margin-bottom: 15px;
        }
        .content-group {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          span::after {
            content: "|";
            margin-left: 5px;
            color: var(--bg-light-gray);
          }
          span:last-child::after {
            content: "";
          }
        }
        span {
          font: 400 16px/1 "Poppins-Regular";
        }
      }
    }
  }
  .detail-content-img {
    width: 100%;
    display: flex;
    flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
    gap: 20px;
    div {
      width: 100%;
      height: ${({ $isMobile }) => ($isMobile ? "300px" : "500px")};
      background: var(--bg-light-gray);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
      border-radius: 30px;
      overflow: hidden;
      position: relative;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const ProjectDetail = ({ layoutId, isAllView }) => {
  const { isDesktop, isTablet, isMobile } = useContext(responsiveContext);

  const selectedProject = projectLists.find(
    (project) => project.id === layoutId
  );

  if (!selectedProject) return null;

  const {
    category,
    tech_group,
    title,
    description,
    detail_description,
    link,
    github_url,
    figma_url,
    main_img,
    sub_img01,
    sub_img02,
  } = selectedProject;

  return (
    <ModalContainer>
      <DetailModal
        {...(!isAllView && { layoutId: `container-${layoutId}` })}
        $isDesktop={isDesktop}
      >
        <DetailHeader $isMobile={isMobile}>
          <DetailInner className="detail-header-inner" $isMobile={isMobile}>
            <div className="detail-header-text">
              <span className="category">{category}</span>
              <SectionTitle>{title}</SectionTitle>
              <p>{description}</p>
            </div>
            <div className="detail-header-btns">
              <ul className="detail-move-btns-inner">
                {github_url && (
                  <li>
                    <a href={github_url} target="_blank">
                      Github
                      <ArrowIcon />
                    </a>
                  </li>
                )}
                {figma_url && (
                  <li>
                    <a href={figma_url} target="_blank">
                      Figma
                      <ArrowIcon />
                    </a>
                  </li>
                )}
              </ul>
              <span className="move-page-btn">
                <a href={link} target="_blank">
                  View Web Page
                  <ArrowIcon />
                </a>
              </span>
            </div>
          </DetailInner>
        </DetailHeader>
        <DetailImg
          $isTablet={isTablet}
          $isMobile={isMobile}
          $bgimg={main_img}
        />
        <DetailContent $isDesktop={isDesktop} $isMobile={isMobile}>
          <DetailInner className="detail-content-inner">
            <div className="detail-content-text">
              <SectionTitle>Description</SectionTitle>
              <p>{detail_description}</p>
              <ul className="tech-group">
                {tech_group.map((tech, index) => (
                  <li key={index}>
                    <h4>{tech.title}</h4>
                    {Array.isArray(tech.content) ? (
                      <div className="content-group">
                        {tech.content.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>
                    ) : (
                      <span>{tech.content}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-content-img">
              {sub_img01 && (
                <div className="img-box">
                  <img
                    src={`/images/projects/${sub_img01}`}
                    alt={`${title}-subImg01`}
                  />
                </div>
              )}
              {sub_img02 && (
                <div className="img-box">
                  <img
                    src={`/images/projects/${sub_img02}`}
                    alt={`${title}-subImg02`}
                  />
                </div>
              )}
            </div>
          </DetailInner>
        </DetailContent>
      </DetailModal>
    </ModalContainer>
  );
};

export default ProjectDetail;
