import React from "react";
import styled from "styled-components";
import { wrapper, ImgBoxSmall } from "../../util";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";

const Container = styled.div`
  ${wrapper}
  flex-direction: column;
  gap: 50px;
  background: var(--bg-beige-color);
  span {
    font: 400 16px/1 "Poppins-Regular";
    letter-spacing: 8px;
    color: var(--bg-dark-gray);
  }
`;
const SkillList = styled.div`
  width: 100%;
  .swiper {
    height: 630px;
  }
  .swiper-pagination {
    bottom: 0px;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: var(--bg-dark-gray);
  }
  .swiper-pagination-bullet-active {
    background: var(--bg-accent-color);
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  height: 600px;
  display: flex;
  &:nth-child(even) {
    align-items: flex-end;
  }
`;
const Skill = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 45px;
  border-left: 1px solid var(--bg-light-gray);
  .skill-icon {
    width: 30px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h3 {
    font: 500 24px/1 "Poppins-Medium";
  }
  p {
    line-height: 1.3;
    color: var(--bg-dark-gray);
    /* word-break: keep-all; */
  }
`;

const AboutSkill = () => {
  const skills = [
    {
      icon: "figma",
      title: "Figma",
      img: "",
      description:
        "Figma를 활용해 효율적인 UI/UX 디자인을 구현하며, 팀원들과의 실시간 협업을 통해 디자인 의도를 명확히 전달할 수 있습니다.",
    },
    {
      icon: "html5",
      title: "HTML5",
      img: "",
      description:
        "HTML5를 활용해 구조적이고 의미 있는 웹 페이지를 구현할 수 있습니다. 웹 표준을 준수하여 SEO 최적화와 접근성 높은 마크업을 작성하는 데 주력하고 있습니다.",
    },
    {
      icon: "css3",
      title: "CSS3",
      img: "",
      description:
        "CSS3를 활용해 반응형 웹 디자인과 시각적으로 매력적인 레이아웃을 구현할 수 있습니다.",
    },
    {
      icon: "scss",
      title: "SCSS",
      img: "",
      description:
        "SCSS를 활용해 반응형 웹 디자인과 시각적으로 매력적인 레이아웃을 구현할 수 있습니다.",
    },
    {
      icon: "js",
      title: "Javascript",
      img: "",
      description:
        "JavaScript를 통해 동적인 웹 페이지를 구현하며, 사용자와의 상호작용을 자연스럽게 설계할 수 있습니다.",
    },
    {
      icon: "react",
      title: "React.js",
      img: "",
      description:
        "JavaScript를 통해 동적인 웹 페이지를 구현하며, 사용자와의 상호작용을 자연스럽게 설계할 수 있습니다.",
    },
    {
      icon: "ts",
      title: "Typescript",
      img: "",
      description:
        "JavaScript를 통해 동적인 웹 페이지를 구현하며, 사용자와의 상호작용을 자연스럽게 설계할 수 있습니다.",
    },
    {
      icon: "node-js",
      title: "Node.js",
      img: "",
      description:
        "JavaScript를 통해 동적인 웹 페이지를 구현하며, 사용자와의 상호작용을 자연스럽게 설계할 수 있습니다.",
    },
    {
      icon: "node-js",
      title: "Node.js",
      img: "",
      description:
        "JavaScript를 통해 동적인 웹 페이지를 구현하며, 사용자와의 상호작용을 자연스럽게 설계할 수 있습니다.",
    },
  ];
  return (
    <Container>
      <span>My Skills</span>
      <SkillList>
        <Swiper
          slidesPerView={4}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: true,
          // }}
          pagination={{
            clickable: true,
            // dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {skills?.map((skill, index) => (
            <StyledSwiperSlide key={index}>
              <Skill>
                <div className="skill-icon">
                  <img
                    src={`/images/skills/${skill.icon}.svg`}
                    alt={skill.title}
                  />
                </div>
                <h3>{skill.title}</h3>
                <ImgBoxSmall />
                <p>{skill.description}</p>
              </Skill>
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </SkillList>
    </Container>
  );
};

export default AboutSkill;
