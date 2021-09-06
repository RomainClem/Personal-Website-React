import React, {useState} from "react";
import img from "./environmental-website-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse'

const MediaEnvironmentalWebsite = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="card mt-3">
            <div className="row">
                <div className="col-8">
                    <div className="card-body pe-0">
                        <h5 className="card-title">Environmental website <span className="fw-light p-0 m-0 fs-6">November-2019</span></h5>
                        <button className={"btn btn-sm btn-outline-warning " + (open ? 'active' : '')} onClick={() =>{setOpen(!open);props.isoArrange();}} aria-controls="collapse-description" aria-expanded={open}>
                            Description
                        </button>
                        <Collapse in={open}>
                            <div id="collapse-description" className="mt-2 rounded description">
                                First website I have ever made. It was part of my 1st year module about Web Development.
                                This is a pure Html5 website with a single CSS3 file (part of restriction for the assignment).
                            </div>
                        </Collapse>
                        <p className="card-text my-1"><small className="text-muted">HTML5, CSS3, Font Awesome</small></p>
                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/romainclem.github.io">
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            <div className="col-auto pe-0">
                                <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://romainclem.github.io/">
                                    <FontAwesomeIcon icon={faGlobe} /> Website
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <div className="pe-1">
                        <img src={img} onLoad={props.isoArrange()} className={"flex img-fluid rounded shadow "+ (open ? '' : 'media-project')} alt="application home page"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaEnvironmentalWebsite;