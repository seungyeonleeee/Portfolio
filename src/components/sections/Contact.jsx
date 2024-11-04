import React from "react";
import styled from "styled-components";
import { wrapper, Inner } from "../../util";

const Container = styled.section`
  ${wrapper}
  height: 630px;
  position: relative;
  background: var(--bg-beige-color);
  .copyright {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--bg-dark-gray);
    font: normal 12px/1 "Poppins-Regular";
  }
`;
const ContactInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  h5 {
    font: normal 100px/1 "Poppins-Light";
    color: var(--bg-accent-color);
  }
  ul {
    li {
      font: normal 18px/1 "Poppins-Regular";
      margin: 5px 0;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <ContactInner>
        <h5>Please Contact Me</h5>
        <ul>
          <li>syyy0.02@gmail.com</li>
          <li>github.com/seungyeonleeee</li>
        </ul>
        <p className="copyright">© 2024 SeungYeon Lee. All Right Reserved</p>
      </ContactInner>
    </Container>
  );
};

export default Contact;
