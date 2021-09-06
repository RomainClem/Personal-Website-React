import React, {useState} from "react";
import img from "./shortest-path-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Collapse from 'react-bootstrap/Collapse'

const MediaShortestPath = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="card mt-3">
            <div className="row">
                <div className="col-8">
                    <div className="card-body pe-0">
                        <h5 className="card-title">Shortest path problem <span className="fw-light p-0 m-0 fs-6">April-2021</span></h5>
                        <button className={"btn btn-sm btn-outline-warning " + (open ? 'active' : '')} onClick={() =>{setOpen(!open);props.isoArrange();}} aria-controls="collapse-description" aria-expanded={open}>
                            Description
                        </button>
                        <Collapse in={open}>
                            <div id="collapse-description" className="mt-2 rounded description">
                                Algorithm using a bottom-up dynamic programming approach to find
                                the shortest path between two cells in a matrix of size n.
                            </div>
                        </Collapse>
                        <p className="card-text my-1"><small className="text-muted">Java, Dynamic Programming</small></p>
                        <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/Shortest-Path-Matrix-Fixed-Cost">
                            <FontAwesomeIcon icon={faGithub} /> Repository
                        </a>
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

export default MediaShortestPath;