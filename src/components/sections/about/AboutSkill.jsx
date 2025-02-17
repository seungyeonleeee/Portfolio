import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import { responsiveContext } from "../../../App";
import { wrapper } from "../../../styledComponents";
import { skills } from "../../../utils";

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
const SkillList = styled(motion.div)`
  width: 100%;
  .swiper {
    height: ${({ $isMobile }) => ($isMobile ? "350px" : "500px")};
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
  height: ${({ $isMobile }) => ($isMobile ? "300px" : "450px")};
  display: flex;
  &:nth-child(even) {
    align-items: flex-end;
  }
`;
const Skill = styled.div`
  height: ${({ $isMobile }) => ($isMobile ? "150px" : "300px")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ $isMobile }) => ($isMobile ? "center" : "flex-start")};
  gap: 50px;
  padding: ${({ $isDesktop }) => ($isDesktop ? "0 45px" : "0 20px")};
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
    font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "24px")};
  }
  p {
    line-height: 1.3;
    color: var(--bg-dark-gray);
    font-size: ${({ $isTablet }) => ($isTablet ? "14px" : "16px")};
  }
`;

const AboutSkill = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDesktop, isTablet, isMobile } = useContext(responsiveContext);

  return (
    <Container>
      <span>My Skills</span>
      <SkillList
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        $isMobile={isMobile}
      >
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {skills?.map((skill, index) => (
            <StyledSwiperSlide key={index} $isMobile={isMobile}>
              <Skill
                $isDesktop={isDesktop}
                $isTablet={isTablet}
                $isMobile={isMobile}
              >
                <div className="skill-icon">
                  <img
                    src={`/images/skills/${skill.icon}.svg`}
                    alt={skill.title}
                  />
                </div>
                <h3>{skill.title}</h3>
                {isMobile ? null : <p>{skill.description}</p>}
              </Skill>
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </SkillList>
    </Container>
  );
};

export default AboutSkill;
