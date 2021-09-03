import React from "react";
import img from "./environmental-website-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const MediaEnvironmentalWebsite = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Environmental website <span className="fw-light p-0 m-0 fs-6">November-2019</span></h5>
                        <p className="card-text">First website I have ever made. It was part of my 1st year module about Web Development.
                        This is a pure Html5 website with a single CSS3 file (part of restriction for the assignment).</p>
                        <p className="card-text"><small className="text-muted">HTML5, CSS3, Font Awesome</small>
                        </p>
                        <div className="row justify-content-start">
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/romainclem.github.io">
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://romainclem.github.io/">
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

export default MediaEnvironmentalWebsite;