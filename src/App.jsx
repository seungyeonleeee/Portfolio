import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Project from "./components/sections/project/Project";
import Contact from "./components/sections/contact/Contact";
import LoadingScreen from "./components/LoadingScreen";
import ProjectAllView from "./components/sections/project/ProjectAllView";
import TopButton from "./components/TopButton";

export const responsiveContext = createContext();

const Container = styled.main`
  /* position: relative; */
  /* width: 100%;
  height: 100%; */
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1330px) and (max-width: 1920px)",
  });
  const isTabletOrDesktop = useMediaQuery({
    query: "(max-width: 1330px) and (min-width: 1000px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1000px) and (min-width: 740px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <responsiveContext.Provider
      value={{
        isDesktop,
        isTabletOrDesktop,
        isTablet,
        isMobile,
      }}
    >
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
        <TopButton />
      </Container>
    </responsiveContext.Provider>
  );
};

export default App;
