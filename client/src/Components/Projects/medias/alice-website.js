import React from "react";
import img from "./alice-website-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const MediaAliceWebsite = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">JavaScript game <span className="fw-light p-0 m-0 fs-6">December-2019</span></h5>
                        <p className="card-text">First time with vanilla JavaScript.
                            This is a JavaScript game project with an Alice in Wonderland theme.
                            </p>
                        <p className="card-text"><small className="text-muted">HTML5, CSS3, JavaScript (vanilla)</small>
                        </p>
                        <div className="row justify-content-start">
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/alicejs.github.io">
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://romainclem.github.io/alicejs.github.io/">
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

export default MediaAliceWebsite;