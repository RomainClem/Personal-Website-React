import React from "react";
import img from "./personal-website-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const MediaPersonalWebsite = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Personal Website <span className="fw-light p-0 m-0 fs-6">July-2021</span></h5>
                        <p className="card-text">My personal website created with the knowledge I acquired during my 1st and 2nd year at MTU.
                        I also learned how to use React as an additional as an added challenge.</p>
                        <p className="card-text"><small className="text-muted">Node.js, Express, React, Bootstrap</small>
                        </p>
                        <div className="row justify-content-start">
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/personal-website-react">
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://www.romainclemencon.com/">
                                    <FontAwesomeIcon icon={faGlobe} /> Website
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-4">
                    <img src={img} className="img-fluid media-project" alt="application home page"/>
                </div>
            </div>
        </div>
    )
}

export default MediaPersonalWebsite;