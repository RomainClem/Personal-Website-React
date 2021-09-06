import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import CV from "../../Assets/Romain_Clemencon_CV.pdf";

class Icongrid extends Component {
    render() {
        return (
            <div className="wrapper icon-wrap">

                    <div className="row px-4 py-5 text-center">
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn px-0" href="https://www.linkedin.com/in/romainclemencon/">
                                <FontAwesomeIcon className="fa-icon pb-1" icon={faLinkedin}/>
                                <p className="mb-0 icon-link rounded">Linkedin</p>
                            </a>
                        </div>
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn px-0" href="https://github.com/RomainClem">
                                <FontAwesomeIcon className="fa-icon pb-1" icon={faGithub}/>
                                <p className="mb-0 icon-link rounded">GitHub</p>
                            </a>
                        </div>
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn px-0" href="mailto:romain.clemencon@mycit.ie">
                                <FontAwesomeIcon className="fa-icon pb-1" icon={faEnvelope}/>
                                <p className="mb-0 icon-link rounded">Email</p>
                            </a>
                        </div>
                        <div className="icons col">
                            <Link to={CV} className="btn px-0" rel="noopener noreferrer"  target="_blank" >
                                <FontAwesomeIcon className="fa-icon pb-1" icon={faFilePdf}/>
                                <p className="mb-0 icon-link rounded">CV</p>
                            </Link>
                        </div>

                </div>
            </div>
        )
    }
}

export default Icongrid;
