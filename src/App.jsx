import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import ViewMoreButton from "./components/ViewMoreButton";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import LoadingScreen from "./components/sections/LoadingScreen";

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <GlobalStyles />
      {/* <LoadingScreen /> */}
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      {/* {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Project />
          <Contact />
        </>
      )} */}
    </Container>
  );
};

export default App;
