import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useInView } from "framer-motion";
import ViewMoreButton from "../ViewMoreButton";
import { Inner, SectionTitle } from "../../styledComponents";
import { projectTabMenu, projectLists } from "../../utlis";

// Styled
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ListInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

const ListMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    li {
      font: 400 18px/1 "Poppins-Regular";
      cursor: pointer;
      transition: color 0.3s;
      &.active {
        color: var(--bg-accent-color);
      }
    }
  }
`;

const ProjectWrapper = styled.div`
  position: absolute;
  top: 17%;
  left: 0;
  width: 100%;
  height: 800px;
  overflow-x: hidden;
  ul {
    display: flex;
    gap: 30px;
    /* transform: ${({ translateX }) => `translateX(${translateX}px)`}; */
    transition: transform 0.2s ease-out;
    li {
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
          background-color: var(--bg-beige-color);
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
    }
  }
`;

// Animation Variants
const slideVariants = {
  start: { x: 0 },
  end: (scroll) => ({ x: -scroll / 3 }),
};

const ProjectList = () => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    scrollY.on("change", () => setScroll(scrollY.get()));
    setIsFixed(isInView);
  }, [scrollY, isInView]);

  // console.log(isInView);

  return (
    <Container
      ref={ref}
      style={{
        position: isFixed ? "sticky" : "static",
        top: isFixed ? "0" : "auto",
      }}
    >
      <ListInner>
        <SectionTitle>Featured Projects</SectionTitle>
        <ListMenu>
          <ul>
            {projectTabMenu.map((menu, index) => (
              <li key={index} className={menu === "Javascript" ? "active" : ""}>
                {menu}
              </li>
            ))}
          </ul>
          <ViewMoreButton text={"See All Projects"} />
        </ListMenu>
        <ProjectWrapper>
          <motion.ul
            variants={slideVariants}
            initial="start"
            animate="end"
            custom={scroll}
          >
            {projectLists.map((list, index) => (
              <li key={index}>
                <div className="img-box"></div>
                <div className="badge-group">
                  {list.badges.map((badge, index) => (
                    <span key={index}>{badge}</span>
                  ))}
                </div>
                <h3>{list.title}</h3>
                <p>{list.description}</p>
              </li>
            ))}
          </motion.ul>
        </ProjectWrapper>
      </ListInner>
    </Container>
  );
};

export default ProjectList;
