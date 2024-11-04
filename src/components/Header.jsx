import React from "react";
import styled from "styled-components";
import { Inner } from "../util";

const Container = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const HeaderInner = styled(Inner)`
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  span {
    font: normal 24px/1 "Poppins-Light";
  }
`;
const DesktopMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  font: normal 16px/1 "Poppins-Regular";
`;
const MobileMenu = styled.ul``;

const Header = () => {
  return (
    <Container>
      <HeaderInner as="nav">
        <Logo>
          <img src="/images/logo.svg" alt="logo" />
          <span>eungyeonLee</span>
        </Logo>
        <div>
          <DesktopMenu>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECT</li>
            <li>CONTACT</li>
          </DesktopMenu>
          <MobileMenu></MobileMenu>
        </div>
      </HeaderInner>
    </Container>
  );
};

export default Header;
