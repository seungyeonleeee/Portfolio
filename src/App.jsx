import React, { useState, useEffect, useRef } from "react";
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
  /* overflow-x: hidden; */
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <GlobalStyles />
      {/* <LoadingScreen /> */}
      <Header />
      <Home />
      <About />
      <Project />
      <Contact ref={contactRef} isVisible={isContactVisible} />
    </Container>
  );
};

export default App;
