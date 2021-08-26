import React from 'react';
import MediaPersonalWebsite from "../Projects/medias/personal-website";
import MediaCovid19 from "../Projects/medias/covid19";
import MediaTwitterBot from "../Projects/medias/twitter-bot";

/*
TODO:
      - install isotope-layout
      - Add a few projects and use cleaner github Repos
      - fix col md not nice in smaller width
 */

const About = () => {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col-12">
                    <MediaPersonalWebsite/>
                </div>
                <div className="col-12">
                    <MediaCovid19 />
                </div>
                <div className="python col-12">
                    <MediaTwitterBot />
                </div>
            </div>
        </div>
    )
}


export default About;