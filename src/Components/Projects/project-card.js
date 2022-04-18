import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse';


const ProjectCard = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="card mt-3">
            <div className="row">
                <div className="col-8">
                    <div className="card-body pe-0">
                        <h5 className="card-title">{props.elements.title} <span className="fw-light p-0 m-0 fs-6">{props.elements.date}</span></h5>
                        <button className={"btn btn-sm btn-outline-warning " + (open ? 'active' : '')} onClick={() => { setOpen(!open); props.isoArrange(); }} aria-controls="collapse-description" aria-expanded={open}>
                            Description
                        </button>
                        <Collapse in={open}>
                            <div id="collapse-description" className="mt-2 rounded description ps-1">
                                {props.elements.desc}
                            </div>
                        </Collapse>
                        <p className="card-text my-1"><small className="text-muted">{props.elements.skills}</small></p>

                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href={props.elements.repo}>
                                    <FontAwesomeIcon icon={faGithub} /> Repository
                                </a>
                            </div>
                            {props.elements.website.active && (
                                <div className="col-auto pe-0">
                                    <a className={"btn btn-outline-primary my-1 mr-1 btn-sm " + ((props.elements.website.disabled) ? 'disabled' : '')} rel="noopener noreferrer"
                                        target="_blank" href={props.elements.website.url} >
                                        <FontAwesomeIcon icon={faGlobe} /> Website
                                    </a>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <div className="pe-1">
                        <img src={require("./images/" + props.elements.img)} onLoad={props.isoArrange()} className={"flex img-fluid rounded shadow " + (open ? '' : 'media-project')} alt="application home page" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard;