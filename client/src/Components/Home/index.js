import React, { Component } from 'react';
import IconGrid from "./icongrid";
import Profile from "./profile";
import Skills from "./skills";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Profile/>
                <Skills/>
                <IconGrid/>
            </div>
        )
    }
}

export default Home;