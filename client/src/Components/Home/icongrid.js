import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class Icongrid extends Component {
    render() {
        return (
            <div className="container px-4 py-5">
                <div className="row row-cols-3 g-4">
                    <div className="col d-flex align-items-center">
                        <a target="_blank" className="btn mx-lg-auto" href="https://www.linkedin.com/in/romain-clemencon-85b1b6195/"><FontAwesomeIcon className="fa-icon" icon={faLinkedin} size="9x"/></a>
                    </div>
                    <div className="col d-flex align-items-center">
                        <a target="_blank" className="btn mx-lg-auto" href="https://github.com/RomainClem"><FontAwesomeIcon className="fa-icon" icon={faGithub} size="9x"/></a>
                    </div>
                    <div className="col d-flex align-items-center">
                        <a target="_blank" className="btn mx-lg-auto" href="mailto:romain.clemencon@mycit.ie"><FontAwesomeIcon className="fa-icon" icon={faEnvelope} size="9x"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Icongrid;
