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
  }
  .tools-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: ${({ $isMobile }) => ($isMobile ? "20px 0 10px" : "40px 0 20px")};
    span {
      ${BadgeStyle}
    }
  }
  h3 {
    font-size: ${({ $isDesktop }) => ($isDesktop ? "35px" : "25px")};
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    color: var(--bg-dark-gray);
    line-height: 1.3;
    word-break: keep-all;
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

const ProjectItem = ({ id, title, description, tools, onClick, isAllView }) => {
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
      <div className="img-box"></div>
      <div className="tools-group">
        {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
};

export default ProjectItem;
