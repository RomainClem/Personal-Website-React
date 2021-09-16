import React from 'react';
import Information from "./information";

const About = () => {
    return (
        <div className="about">
            <div className="blue-bg">
                <div className="wrapper">
                    <div className="p-4">
                        <h2 className="display-6 fw-bold ">About me</h2>
                    </div>
                </div>
            </div>
            <Information/>
        </div>
    )
}


export default About;