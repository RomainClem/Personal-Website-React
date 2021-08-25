import React from "react";
import img from "./authentication-website-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const MediaAuthenticationWebsite = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Authentication website <span className="fw-light p-0 m-0 fs-6">November-2020</span></h5>
                        <p className="card-text">Authentication website made without Passport. Initially I wanted to use cookies for session authentication.
                            But due to lack of time, LocalStorage was use instead.</p>
                        <p className="card-text"><small className="text-muted">Node.js, Express, React, Bootstrap</small>
                        </p>
                        <div className="row justify-content-start">
                            <div className="col-md-auto">
                                <a className="col btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/personal-website-react">
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            <div className="col-md-auto">
                                <button className="col btn btn-outline-primary my-1 mr-1 btn-sm" disabled>
                                    <FontAwesomeIcon icon={faGlobe} /> Website
                                </button>
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

export default MediaAuthenticationWebsite;