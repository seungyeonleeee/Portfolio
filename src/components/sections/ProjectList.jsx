import React from "react";
import styled from "styled-components";
import ViewMoreButton from "../ViewMoreButton";
import { SectionTitle } from "../../util";

const Container = styled.div`
  width: 100%;
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
  height: 780px;
  position: relative;
  /* overflow: hidden; */
  z-index: 2;
  ul {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    gap: 30px;
    li {
      width: 600px;
      .img-box {
        width: 600px;
        height: 600px;
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
          padding: 5px 20px;
          border: 1px solid var(--bg-light-gray);
          border-radius: 20px;
          color: var(--bg-dark-gray);
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
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      <ListMenu>
        <ul>
          <li className="active">Javascript</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Node.js</li>
        </ul>
        <ViewMoreButton text={"See All Projects"} />
      </ListMenu>
      <ProjectWrapper>
        <ul>
          <li>
            <div className="img-box"></div>
            <div className="badge-group">
              <span>Anime.js</span>
              <span>Fullpage</span>
            </div>
            <h3>Hyndai E&C</h3>
            <p>
              현대건설의 홈페이지를 애니메이션 효과로 생동감을 더하고, 페이지
              전환을 통해 콘텐츠를 자연스럽게 이어가며 커스터마이징 했습니다.
            </p>
          </li>
          <li>
            <div className="img-box"></div>
            <div className="badge-group">
              <span>Anime.js</span>
              <span>Fullpage</span>
            </div>
            <h3>Hyndai E&C</h3>
            <p>
              현대건설의 홈페이지를 애니메이션 효과로 생동감을 더하고, 페이지
              전환을 통해 콘텐츠를 자연스럽게 이어가며 커스터마이징 했습니다.
            </p>
          </li>
          <li>
            <div className="img-box"></div>
            <div className="badge-group">
              <span>Anime.js</span>
              <span>Fullpage</span>
            </div>
            <h3>Hyndai E&C</h3>
            <p>
              현대건설의 홈페이지를 애니메이션 효과로 생동감을 더하고, 페이지
              전환을 통해 콘텐츠를 자연스럽게 이어가며 커스터마이징 했습니다.
            </p>
          </li>
        </ul>
      </ProjectWrapper>
    </Container>
  );
};

export default ProjectList;
