import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.li)`
  width: 430px;
  .img-box {
    width: 430px;
    height: 430px;
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
    background-color: var(--bg-light-gray);
  }
  .badge-group {
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
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

const ProjectItem = ({ id, skill, title, description, tools }) => {
  return (
    <Container
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="img-box"></div>
      <div className="badge-group">
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
