import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import CV from "../../Assets/Romain_Clemencon_CV.pdf";
/*
TODO:
      - Add CV button and update CSS to fit nicely
      - Remove size and preferably control it using CSS
 */


class Icongrid extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="px-4 py-5 text-center">
                    <div className="row ">
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn" href="https://www.linkedin.com/in/romainclemencon/">
                                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn" href="https://github.com/RomainClem">
                                <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                            </a>
                        </div>
                        <div className="icons col">
                            <a rel="noopener noreferrer"  target="_blank" className="btn" href="mailto:romain.clemencon@mycit.ie">
                                <FontAwesomeIcon className="fa-icon" icon={faEnvelope}/>
                            </a>
                        </div>
                        <div className="icons col">
                            <Link to={CV} className="btn" rel="noopener noreferrer"  target="_blank" >
                                <FontAwesomeIcon className="fa-icon" icon={faFilePdf}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Icongrid;
