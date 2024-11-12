import React from "react";
import styled from "styled-components";
import ViewMoreButton from "../ViewMoreButton";
import { SectionTitle } from "../../styledComponents";
import { projectTabMenu, projectLists } from "../../utlis";

const Wrapper = styled.div`
  height: 100vh;
`;
const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1;
`;
const ListMenu = styled.div`
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
  height: 610px;
  position: relative;
  /* overflow: hidden; */
  z-index: 2;
  ul {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    gap: 30px;
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
  return (
    <Wrapper>
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ListMenu>
          <ul>
            {projectTabMenu.map((memu, index) => (
              <li key={index} className={memu === "Javascript" ? "active" : ""}>
                {memu}
              </li>
            ))}
          </ul>
          <ViewMoreButton text={"See All Projects"} />
        </ListMenu>
        <ProjectWrapper>
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
        </ProjectWrapper>
      </Container>
    </Wrapper>
  );
};

export default ProjectList;
