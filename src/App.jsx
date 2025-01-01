import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
