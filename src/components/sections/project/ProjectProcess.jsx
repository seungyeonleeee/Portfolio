import React, { useState, useContext } from "react";
import styled from "styled-components";
import { responsiveContext } from "../../../App";
import ProcessMenu from "./ProcessMenu";
import ProcessImg from "./ProcessImg";
import { SectionTitle, Inner } from "../../../styledComponents";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  overflow: hidden;
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
  flex-direction: ${({ $isDesktop, $isTabletOrDesktop }) =>
    $isDesktop || $isTabletOrDesktop ? "row" : "column"};
  justify-content: center;
  align-items: center;
  gap: ${({ $isDesktop }) => ($isDesktop ? "80px" : "40px")};
  position: relative;
`;

const ProjectProcess = () => {
  const { isDesktop, isTabletOrDesktop } = useContext(responsiveContext);
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
        <ProcessWrapper
          $isDesktop={isDesktop}
          $isTabletOrDesktop={isTabletOrDesktop}
        >
          <ProcessMenu activeIndex={activeIndex} onClickMenu={onClickMenu} />
          <ProcessImg currentIndex={currentIndex} />
        </ProcessWrapper>
      </ProcessInner>
    </Container>
  );
};

export default ProjectProcess;
