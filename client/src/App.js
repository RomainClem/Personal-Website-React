import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import './App.css';

import Home from './Components/Home';
import Header from "./Containers/Header";
import Footer from './Containers/Footer';
import Wip from "./Components/Wip";
import Projects from "./Components/Projects";
import About from "./Components/About"

/*
TODO:
      - depcheck client + server to remove unused package
 */

class App extends Component {
  render() {
    return (
        <Router>
            <Header/>
            <main className="container-fluid p-0 flex-shrink-0">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/About" component={Wip} />
                    <Route component={Wip} />
                </Switch>
            </main>
            <Footer/>
        </Router>
    )
  }
}

export default App;
