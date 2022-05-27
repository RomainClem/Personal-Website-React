import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5, faJava, faJsSquare, faPython} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import CLogo from "../../Assets/images/c-logo.svg";

class Skills extends Component {
    render() {
        return (
            <div className="orange-bg-light-transparent anti-skew-y">
                <div className="blue-bg-light-transparent skew-y">
                    <div className="wrapper">
                        <div className="px-4 py-5 text-center">
                            <div className="row g-4">
                                <div className="col-md-12">
                                    <h2 className="display-5 fw-bold">Skills</h2>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faJava} size="4x"/>
                                    <h2>Java</h2>
                                    <p>Maven, JavaFX (MVC), JPA, JUnit, JDBC</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faDatabase} size="4x"/>
                                    <h2>Databases</h2>
                                    <p>MongoDB, SQLite, MySQL, Neo4j (Graph)</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faJsSquare} size="4x"/>
                                    <h2>JavaScript</h2>
                                    <p>Node.js, Express, React, Isotope</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faPython} size="4x"/>
                                    <h2>Python</h2>
                                    <p>Numpy, Pandas, scikit-learn</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faHtml5} size="4x"/>
                                    <h2>WebDev</h2>
                                    <p>HTML5, CSS, Bootstrap, Stripe</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <img src={CLogo} className="fa-skills mx-lg-auto" alt="C programing language Logo" />
                                    <h2>C Programing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;