import React, { useState, useContext } from "react";
import styled from "styled-components";
import { responsiveContext } from "../../../App";
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
  width: 100%;
  display: flex;
  flex-direction: ${({ $isTablet }) => ($isTablet ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: ${({ $isDesktop }) => ($isDesktop ? "80px" : "40px")};
  position: relative;
`;

const ProjectProcess = () => {
  const { isDesktop, isTablet } = useContext(responsiveContext);
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
        <ProcessWrapper $isDesktop={isDesktop} $isTablet={isTablet}>
          <ProcessMenu activeIndex={activeIndex} onClickMenu={onClickMenu} />
          <ProcessImg currentIndex={currentIndex} />
        </ProcessWrapper>
      </ProcessInner>
    </Container>
  );
};

export default ProjectProcess;
