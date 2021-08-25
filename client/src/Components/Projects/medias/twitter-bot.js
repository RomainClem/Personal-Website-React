import React from "react";
import img from "./twitter-bot-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const MediaTwitterBot = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Twitter Bot <span className="fw-light p-0 m-0 fs-6">April-2021</span></h5>
                        <p className="card-text">A very simple script to mess around and learn how to use the twitter API with Tweepy.</p>
                        <p className="card-text"><small className="text-muted">Python, tweepy</small>
                        </p>
                        <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/badTwitterBot">
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

export default MediaTwitterBot;