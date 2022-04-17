import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


import "./App.css";

import Home from "./Components/Home";
import Header from "./Containers/Header";
import Footer from "./Containers/Footer";
import Projects from "./Components/Projects";
import About from "./Components/About";
import HashHandler from "./Containers/HashHandler";
/*
TODO:
      - depcheck client + server to remove unused package
 */

const App = () => {
  const [refHome, inViewHome] = useInView({threshold: 0.3});
  const [refProject, inViewProject] = useInView({threshold: 0.3});
  const [refAbout, inViewAbout] = useInView({threshold: 0.3});

  return (
    <Router>
      <Header viewers={[inViewHome, inViewProject, inViewAbout]}/>
      <HashHandler />
      <main className="container-fluid p-0 flex-shrink-0">
        <Home observer={refHome} />
        <Projects observer={refProject} />
        <About observer={refAbout} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
