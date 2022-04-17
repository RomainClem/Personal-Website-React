import React, { Component } from 'react';
import IconGrid from "./icongrid";
import Profile from "./profile";
import Skills from "./skills";

/*
TODO:
      - Issue at bottom of home page when the screen width is greater than 1920px and footer isn't pushed to the bottom
 */

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Profile/>
                <IconGrid/>
                <Skills/>
            </div>
        )
    }
}

export default Home;