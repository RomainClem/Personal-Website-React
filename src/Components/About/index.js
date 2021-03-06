import React from 'react';
import Information from "./information";
import Education from "./education";
import Experience from "./experience";

const About = (props) => {
    return (
        <div className="about pt-5" id='#About' ref={props.observer}>
            <Information/>
            <hr className="wrapper pt-1 w-50 orange-bg" />
            <Education/>
            <hr className="wrapper pt-1 w-50 orange-bg" />
            <Experience/>
        </div>
    )
}


export default About;