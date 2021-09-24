import React from 'react';
import Information from "./information";
import Education from "./education";
import Experience from "./experience";

const About = () => {
    return (
        <div className="about">
            <Information/>
            <hr className="wrapper pt-1 w-50 orange-bg" />
            <Education/>
            <hr className="wrapper pt-1 w-50 orange-bg" />
            <Experience/>
        </div>
    )
}


export default About;