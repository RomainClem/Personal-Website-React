import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import './App.css';

import Home from './Components/Home';
import Header from "./Containers/Header";
import Footer from './Containers/Footer';
import Projects from "./Components/Projects";
import About from "./Components/About";
import HashHandler from './Containers/HashHandler';
/*
TODO:
      - depcheck client + server to remove unused package
 */

class App extends Component {
  render() {
    return (
        <Router>
            <Header/>
            <HashHandler/>
            <main className="container-fluid p-0 flex-shrink-0">
              <Home/>
              <Projects/>
              <About/>
            </main>
            <Footer/>
        </Router>
    )
  }
}

export default App;
