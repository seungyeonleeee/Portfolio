import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import { wrapper } from "../../../styledComponents";
import { skills } from "../../../utlis";

// Styled
const Container = styled.div`
  ${wrapper}
  flex-direction: column;
  gap: 80px;
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
    height: 500px;
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
  height: 450px;
  display: flex;
  &:nth-child(even) {
    align-items: flex-end;
  }
`;
const Skill = styled.div`
  height: 300px;
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
  return (
    <Container>
      <span>My Skills</span>
      <SkillList>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
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