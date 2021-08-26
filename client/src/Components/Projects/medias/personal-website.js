import React, {useState} from "react";
import img from "./personal-website-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse'

const MediaPersonalWebsite = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="card my-3">
            <div className="row">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Personal Website <span className="fw-light p-0 m-0 fs-6">July-2021</span></h5>
                        <button className={"btn btn-sm btn-outline-warning " + (open ? 'active' : '')} onClick={() =>{setOpen(!open);props.isoArrange();}} aria-controls="example-collapse-text" aria-expanded={open}>
                            Description
                        </button>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="mt-2 border border-2 rounded border-warning ">
                                My personal website created with the knowledge I acquired during my 1st and 2nd year at MTU.
                                    I also learned how to use React as an additional as an added challenge.
                            </div>
                        </Collapse>
                        <p className="card-text my-1"><small className="text-muted">Node.js, Express, React, Bootstrap</small></p>
                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/personal-website-react">
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            <div className="col-auto">
                                <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://www.romainclemencon.com/">
                                    <FontAwesomeIcon icon={faGlobe} /> Website
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={"col-4 d-flex align-items-center "}>
                    <img src={img} className={"flex img-fluid rounded "+ (open ? '' : 'media-project')} alt="application home page"/>
                </div>
            </div>
        </div>
    )
}

export default MediaPersonalWebsite;