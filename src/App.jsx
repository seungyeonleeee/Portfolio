import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import ViewMoreButton from "./components/ViewMoreButton";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import LoadingScreen from "./components/LoadingScreen";

const Container = styled.main`
  overflow-x: hidden;
  background: var(--bg-beige-color);
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      {/* <LoadingScreen /> */}
    </Container>
  );
};

export default App;
