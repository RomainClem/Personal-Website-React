import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDev, faHtml5, faJava, faJsSquare, faPython} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import CLogo from "../../Assets/images/c-logo.svg";

class Skills extends Component {
    render() {
        return (
            <div className="skills px-4 py-5">
                <div className="wrapper">
                    <h2 className="display-5 fw-bold">Skills</h2>
                    <div className="px-4 py-5">
                        <div className="row row-cols-3 g-4">
                            <div className="col align-items-center">
                                <FontAwesomeIcon className="fa-skills mx-lg-auto" icon={faJava} size="4x"/>
                                <h2>Java</h2>
                                <p>Maven, JavaFX (MVC), JPA, JUnit, JDBC</p>
                            </div>
                            <div className="col align-items-center">
                                <FontAwesomeIcon className="fa-skills mx-lg-auto" icon={faDatabase} size="4x"/>
                                <h2>Databases</h2>
                                <p>MongoDB, SQLite, MySQL, Neo4j (Graph)</p>
                            </div>
                            <div className="col align-items-center">
                                <FontAwesomeIcon className="fa-skills mx-lg-auto" icon={faJsSquare} size="4x"/>
                                <h2>JavaScript</h2>
                                <p>Node.js, Express, React</p>
                            </div>
                            <div className="col align-items-center">
                                <FontAwesomeIcon className="fa-skills mx-lg-auto" icon={faPython} size="4x"/>
                                <h2>Python</h2>
                            </div>
                            <div className="col align-items-center">
                                <FontAwesomeIcon className="fa-skills mx-lg-auto" icon={faHtml5} size="4x"/>
                                <h2>WebDev</h2>
                                <p>HTML5, CSS, Bootstrap</p>
                            </div>
                            <div className="col align-items-center">
                                <img src={CLogo} alt="C programing language Logo" />
                                <h2>C Programing language</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;