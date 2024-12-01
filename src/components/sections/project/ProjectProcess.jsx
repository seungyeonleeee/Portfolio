import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProcessMenu from "./ProcessMenu";
import ProcessImg from "./ProcessImg";
import { SectionTitle, Inner } from "../../../styledComponents";

const Container = styled(Inner)`
  width: 100%;
  padding: 120px 0;
  h2 {
    text-align: center;
  }
`;
const ProcessInner = styled(Inner)`
  flex-direction: column;
  gap: 50px;
`;
const ProcessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  position: relative;
`;

const ProjectProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);

  const onClickMenu = (index) => {
    if (index !== activeIndex) setLastActiveIndex(index);
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const currentIndex = activeIndex === -1 ? lastActiveIndex : activeIndex;

  return (
    <Container>
      <ProcessInner>
        <SectionTitle>Process Work</SectionTitle>
        <ProcessWrapper>
          <ProcessMenu activeIndex={activeIndex} onClickMenu={onClickMenu} />
          <ProcessImg currentIndex={currentIndex} />
        </ProcessWrapper>
      </ProcessInner>
    </Container>
  );
};

export default ProjectProcess;
