import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import './App.css';

import Home from './Components/Home';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Wip from "./Components/Wip";

class App extends Component {
  render() {
    return (

        <Router>
            <Header/>
            <main className="flex-shrink-0">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Wip} />
                    <Route path="/about" component={Wip} />
                    <Route component={Wip} />
                </Switch>
            </main>
            <Footer/>
        </Router>
    )
  }
}

export default App;
