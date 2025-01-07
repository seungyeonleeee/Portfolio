import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { responsiveContext } from "../../../App";
import { wrapper, Inner } from "../../../styledComponents";

// Styled
const Container = styled.section`
  ${wrapper}
  padding: ${({ $isDesktop, $isTabletOrDesktop }) =>
    $isDesktop || $isTabletOrDesktop ? "180px 0 240px" : "120px 0 180px"};
  position: relative;
  background: var(--bg-beige-color);
  overflow: hidden;
  .copyright {
    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--bg-dark-gray);
    font: normal 12px/1 "Poppins-Regular";
  }
`;
const ContactInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  ul {
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font: normal 18px/1 "Poppins-Regular";
      margin: 5px 0;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
const Title = styled.div`
  width: 100%;
  color: var(--bg-accent-color);
  h3 {
    font: 300 100px/1 "Poppins-Light";
    p {
      display: inline-block;
      margin-right: 3%;
    }
    span {
      position: relative;
      display: inline-block;
      margin-right: 5%;
      svg {
        width: auto;
        height: 270px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(100.5%, 5%);
        overflow: visible;
        .contact-title-line {
          stroke-width: 6;
        }
        .contact-title-path {
          stroke-width: 1;
        }
      }
    }
  }
  @media (max-width: 1220px) {
    h3 {
      font-size: 80px;
      span {
        svg {
          height: 200px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    h3 {
      font-size: 75px;
      word-break: keep-all;
      span {
        svg {
          height: 190px;
        }
      }
    }
  }
`;

// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeOut" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, fallback: true });
  const { isDesktop, isTabletOrDesktop, isTablet } =
    useContext(responsiveContext);

  return (
    <Container
      ref={ref}
      id="contact"
      $isDesktop={isDesktop}
      $isTabletOrDesktop={isTabletOrDesktop}
    >
      <ContactInner $isDesktop={isDesktop}>
        <Title $isTabletOrDesktop={isTabletOrDesktop} $isTablet={isTablet}>
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p>Please Contact</p>
            <span>
              M
              <svg
                width="833"
                height="264"
                viewBox="0 0 833 264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3037 233.5C58.3037 233.5 68.8642 206.501 115.304 217.5C216.804 241.539 198.93 218.147 267.804 205C443.304 171.5 584.5 291.5 631.5 252C678.5 212.5 621.79 126.5 667.804 126.5C720 126.5 639.804 252.5 689.304 259C748 266.708 818 80.5 829.5 3"
                  stroke="#FF481F"
                  // stroke-width="6"
                  strokeLinecap="round"
                  className="contact-title-line"
                />
                <path
                  d="M3.9584 222.535L3.95995 222.538C6.26948 226.817 9.46848 230.12 13.5535 232.435C17.3653 234.595 21.6459 235.743 26.3849 235.885C27.2287 235.91 27.9 235.224 27.9 234.4V232.5C27.9 231.667 27.2271 231.012 26.419 230.982C23.0049 230.852 19.843 230.042 16.9272 228.555C13.7491 226.933 11.1835 224.501 9.22873 221.243C7.42121 218.23 6.38554 214.555 6.14184 210.199C6.12695 209.933 6.34248 209.7 6.62775 209.7H51.605C52.3652 209.7 53.0227 209.126 53.0779 208.344C53.1596 207.187 53.2 205.671 53.2 203.8C53.2 199.452 52.1801 195.403 50.1396 191.662C48.0936 187.844 45.093 184.812 41.1517 182.568C37.2625 180.249 32.6722 179.1 27.4 179.1C22.1917 179.1 17.5392 180.251 13.4562 182.564C9.36933 184.812 6.16961 188.083 3.85998 192.363L3.85994 192.363L3.85707 192.368C1.61292 196.652 0.5 201.668 0.5 207.4C0.5 213.134 1.64723 218.184 3.9584 222.535ZM45.1637 193.544L45.1637 193.544L45.1675 193.551C46.9165 196.566 47.7777 200.22 47.7259 204.535C47.7228 204.788 47.5126 205 47.2407 205H6.62814C6.34269 205 6.12743 204.767 6.14261 204.501C6.38756 200.211 7.42185 196.57 9.22685 193.56C11.2493 190.3 13.8153 187.901 16.9236 186.347L16.9236 186.347L16.9272 186.345C20.1209 184.716 23.576 183.9 27.3 183.9C31.0239 183.9 34.479 184.716 37.6727 186.345L37.6727 186.346L37.68 186.349C40.8507 187.902 43.3441 190.295 45.1637 193.544Z"
                  fill="#FF481F"
                  stroke="#FF481F"
                  className="contact-title-path"
                />
              </svg>
            </span>
          </motion.h3>
        </Title>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            syyy0.02@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            github.com/seungyeonleeee
          </li>
        </ul>
        <p className="copyright">© 2024 LeeSeungYeon. All Right Reserved</p>
      </ContactInner>
    </Container>
  );
};

export default Contact;
