import React, { Component } from "react";
import IconGrid from "./icongrid";
import Profile from "./profile";
import Skills from "./skills";

/*
TODO:
      - Issue at bottom of home page when the screen width is greater than 1920px and footer isn't pushed to the bottom
 */

const Home = (props) => {
    return (
        <div className="home" ref={props.observer}>
            <Profile />
            <IconGrid />
            <Skills />
        </div>
    );
};

export default Home;
