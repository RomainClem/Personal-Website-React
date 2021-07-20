import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import './App.css';

import Home from './Components/Home';
import Header from "./Components/Header";
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (

        <Router>
            <Header/>
            <main className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/*<Route path="/about" component={About} />*/}
                            {/*<Route path="/contact" component={Contact} />*/}
                            {/*<Route component={NotFound} />*/}
                        </Switch>
                    </div>
                </main>
            <Footer/>
        </Router>
    )
  }
}

export default App;
