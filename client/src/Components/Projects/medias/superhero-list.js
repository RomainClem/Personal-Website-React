import React from "react";
import img from "./superhero-list-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const MediaSuperheroList = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Super Hero List <span className="fw-light p-0 m-0 fs-6">November-2019</span></h5>
                        <p className="card-text">My very Project during the first semester of my first year. Learning the fundamentals
                        of programming with Python</p>
                        <p className="card-text"><small className="text-muted">Python</small>
                        </p>
                        <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/super-hero-python-list">
                            <FontAwesomeIcon icon={faGithub} /> Repository
                        </a>
                    </div>
                </div>
                <div className="col-4">
                    <img src={img} className="img-fluid media-project" alt="application home page"/>
                </div>
            </div>
        </div>
    )
}

export default MediaSuperheroList;