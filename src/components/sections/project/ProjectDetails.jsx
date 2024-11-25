import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectLists } from "../../../utlis";

const Container = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: auto;
  overflow-y: auto;
  background: var(--bg-light-color);
  padding: 120px 0;
`;

const ProjectDetails = ({ layoutId }) => {
  return <Container layoutId={layoutId}>ProjectDetails{layoutId}</Container>;
};

export default ProjectDetails;
