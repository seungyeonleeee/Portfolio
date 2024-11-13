import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ViewMoreButton from "../ViewMoreButton";
import { Inner, SectionTitle } from "../../styledComponents";
import { projectTabMenu, projectLists } from "../../utlis";

const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: sticky;
  top: 10%;
`;

const ListInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ListMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 50px;
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
  top: 18%;
  left: 0;
  width: 100%;
  height: 800px;
  overflow-x: hidden;
`;

const Projects = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: calc(50% - 1330px / 2);
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
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
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

const ProjectList = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => setIsInView(entry.isIntersecting),
  //     { threshold: 0.1 }
  //   );

  //   if (containerRef.current) {
  //     observer.observe(containerRef.current);
  //   }

  //   return () => {
  //     if (containerRef.current) {
  //       observer.unobserve(containerRef.current);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView) {
        const scrollY = window.scrollY;
        const offset = (scrollY - containerRef.current.offsetTop) * -0.5;
        setTranslateX(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <Wrapper>
      <Container ref={containerRef}>
        <ListInner>
          <SectionTitle>Featured Projects</SectionTitle>
          <ListMenu>
            <ul>
              {projectTabMenu.map((menu, index) => (
                <li
                  key={index}
                  className={menu === "Javascript" ? "active" : ""}
                >
                  {menu}
                </li>
              ))}
            </ul>
            <ViewMoreButton text={"See All Projects"} />
          </ListMenu>
          <ProjectWrapper>
            {/* <Projects translateX={translateX}>
              <ul>
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
              </ul>
            </Projects> */}
          </ProjectWrapper>
        </ListInner>
      </Container>
    </Wrapper>
  );
};

export default ProjectList;
