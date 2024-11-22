import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 219px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px 40px;
  border: 1px solid var(--bg-accent-color);
  border-radius: 54px;
  color: var(--bg-accent-color);
  background: var(--bg-light-color);
  transition: all 0.3s;
  svg {
    width: 12px;
    height: 12px;
    path {
      fill: var(--bg-accent-color);
      transition: all 0.3s;
    }
  }
  &:hover,
  &:active {
    background: var(--bg-accent-color);
    color: var(--bg-light-color);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    svg {
      path {
        fill: var(--bg-light-color);
      }
    }
  }
`;

const Button = ({ text, setIsAllView }) => {
  return (
    <Container onClick={() => setIsAllView(true)}>
      {text}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0V9.00075H11.002V1.70557L0.705589 12L0 11.2922L10.2944 0.99975H2.99301V0H12Z" />
      </svg>
    </Container>
  );
};

export default Button;
