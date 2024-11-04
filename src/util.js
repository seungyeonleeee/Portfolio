import styled from "styled-components";

// Layout
export const wrapper = `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Inner = styled.article`
  width: 1330px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Component
export const ImgBoxLarge = styled.div`
  width: 420px;
  height: 550px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--bg-light-gray);
`;
export const ImgBoxSmall = styled.div`
  width: 220px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--bg-light-gray);
`;
export const SectionTitle = styled.h2`
  font-size: 44px;
  font-weight: 500;
  margin-bottom: 20px;
  span {
    font-family: "Poppins-Medium";
  }
`;
