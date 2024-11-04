import React from "react";
import styled from "styled-components";
import { wrapper, ImgBoxLarge, SectionTitle } from "../../util";

const Container = styled.div`
  ${wrapper}
  gap: 100px;
`;
const TextBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h5 {
      font: 400 18px/1 "Poppins-Regular";
      font-size: 18px;
      font-weight: 400;
    }
    p {
      line-height: 1.5;
      &.education {
        color: var(--bg-dark-gray);
      }
    }
  }
`;

const AboutIntro = () => {
  return (
    <Container>
      <ImgBoxLarge />
      <TextBox>
        <li>
          <SectionTitle>
            이 승연 <span> SeungYeon Lee</span>
          </SectionTitle>
          <h5>1998.01.10</h5>
        </li>
        <li>
          <h5>Introduction</h5>
          <p>
            원활한 소통을 중요시하며, 프론트엔드 개발을 통해 <br />
            사람과 사람, 사람과 기술을 연결하는 경험을 추구합니다. <br />
            직관적이고 반응성 좋은 UI로 소통의 가치를 실현하는 개발자가 되고자
            합니다.
          </p>
        </li>
        <li>
          <h5>Education</h5>
          <div>
            <p className="education">
              2024.06 ~ 2024.12 K-Digital Training (KDT) 기업연계 프론트엔드
              개발 수료
            </p>
            <p className="education">
              2023.12 ~ 2024.04 (디지털디자인) UI/UX 웹디자인 & 웹퍼블리셔 수료
            </p>
          </div>
        </li>
      </TextBox>
    </Container>
  );
};

export default AboutIntro;
