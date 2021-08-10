import React, { Component } from 'react';
import Icongrid from "./icongrid";
import Profile from "./profile";
import Skills from "./skills";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Profile/>
                <Skills/>
                <Icongrid/>
            </div>
        )
    }
}

export default Home;