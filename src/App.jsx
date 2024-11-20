import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Project from "./components/sections/project/Project";
import Contact from "./components/sections/contact/Contact";
import LoadingScreen from "./components/LoadingScreen";

const Container = styled.main`
  /* position: relative; */
  /* width: 100%;
  height: 100%; */
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
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </Container>
  );
};

export default App;
