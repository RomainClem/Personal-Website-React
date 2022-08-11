import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import CV from "../../Assets/Romain_Clemencon_CV.pdf";

class IconGrid extends Component {
    render() {
        return (
            <div className="wrapper icon-wrap">
                    <div className="row px-4 pb-5 mb-3 text-center">
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn border-transparent px-0" href="https://www.linkedin.com/in/romainclemencon/">
                                <FontAwesomeIcon className="fa-icon" icon={faLinkedin}/>
                            </a>
                        </div>
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn border-transparent px-0" href="https://github.com/RomainClem">
                                <FontAwesomeIcon className="fa-icon" icon={faGithub}/>
                            </a>
                        </div>
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn border-transparent px-0" href="mailto:romain.clemencon@mycit.ie">
                                <FontAwesomeIcon className="fa-icon" icon={faEnvelope}/>
                            </a>
                        </div>
                        <div className="icons col d-flex align-items-center justify-content-center">
                            <Link to={CV} className="btn border-transparent px-0" rel="noopener noreferrer"  target="_blank" >
                                <div className="mx-auto icon-link d-flex align-items-center justify-content-center">
                                    CV
                                </div>
                            </Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default IconGrid;
