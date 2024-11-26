import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.li)`
  width: 430px;
  .img-box {
    width: 430px;
    height: 430px;
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
    background-color: var(--bg-light-gray);
  }
  .tools-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 40px 0 20px;
    span {
      padding: 6px 20px;
      border: 1px solid var(--bg-light-gray);
      border-radius: 20px;
      color: var(--bg-dark-gray);
      background: var(--bg-beige-color);
      font: 400 14px/1 "Poppins-Regular";
      cursor: default;
      letter-spacing: 0;
    }
  }
  h3 {
    font-size: 35px;
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

const ProjectItem = ({
  id,
  skill,
  title,
  description,
  tools,
  projectModalId,
  onClick,
}) => {
  return (
    <Container
      layoutId={projectModalId}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClick}
    >
      <motion.div className="img-box" layoutId={`img-box-${id}`}></motion.div>
      <motion.div className="tools-group" layoutId={`tools-group-${id}`}>
        {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </motion.div>
      <motion.h3 layoutId={`title-${id}`}>{title}</motion.h3>
      <motion.p layoutId={`description-${id}`}>{description}</motion.p>
    </Container>
  );
};

export default ProjectItem;
