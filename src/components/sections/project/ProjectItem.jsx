import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { responsiveContext } from "../../../App";
import { BadgeStyle } from "../../../styledComponents";

const Container = styled(motion.li)`
  width: 430px;
  cursor: pointer;
  .img-box {
    width: ${({ $isDesktop }) => ($isDesktop ? "430px" : "300px")};
    height: ${({ $isDesktop }) => ($isDesktop ? "430px" : "300px")};
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
    background-color: var(--bg-light-gray);
    overflow: hidden;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      z-index: 1;
      transition: all 0.3s;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      filter: grayscale(100%);
      transition: filter 0.3s;
    }
  }
  .tools-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: ${({ $isDesktop, $isMobile }) =>
      $isDesktop ? "40px 0 20px" : $isMobile ? "20px 0 10px" : "30px 0 10px"};
    span {
      ${BadgeStyle}
    }
  }
  h3 {
    font-size: ${({ $isDesktop }) => ($isDesktop ? "35px" : "25px")};
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 10px;
    color: var(--bg-dark-color);
    transition: color 0.3s;
  }
  p {
    color: var(--bg-dark-gray);
    line-height: 1.3;
    word-break: keep-all;
  }
  &:hover {
    .img-box {
      &::after {
        height: 0;
      }
      img {
        filter: grayscale(0);
      }
    }
    h3 {
      color: var(--bg-accent-color);
    }
  }
`;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const ProjectItem = ({
  id,
  title,
  description,
  category,
  main_img,
  onClick,
  isAllView,
}) => {
  const { isDesktop, isMobile } = useContext(responsiveContext);

  return (
    <Container
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClick}
      {...(isAllView && { layout: "position" })}
      {...(!isAllView && { layoutId: `container-${id}` })}
      $isDesktop={isDesktop}
      $isMobile={isMobile}
    >
      <div className="img-box">
        <img src={`/images/projects/${main_img}`} alt={title} />
      </div>
      <div className="tools-group">
        <span>{category}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
};

export default ProjectItem;
