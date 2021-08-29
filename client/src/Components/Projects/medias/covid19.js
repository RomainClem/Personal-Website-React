import React from "react";
import img from "./covid19-home.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const MediaCovid19 = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Covid GUI w/ DataBase <span className="fw-light p-0 m-0 fs-6">May-2021</span></h5>
                        <p className="card-text">Academic project to apply our learning of JavaFx.
                        We had to use the Model-View-Controller convention. I also chose to use and learn Maven as part of this project.</p>
                        <p className="card-text"><small className="text-muted">Java, JavaFX, Maven, JPA, JUnit, JDBC</small>
                        </p>
                        <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/Covid-GUI-DB-Maven-JPA">
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

export default MediaCovid19;