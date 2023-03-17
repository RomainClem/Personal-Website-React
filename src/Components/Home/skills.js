import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5, faJava, faJsSquare, faPython, faMixcloud} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faCode} from "@fortawesome/free-solid-svg-icons";
// import CLogo from "../../Assets/images/c-logo.svg";

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
                                    <p>Spring, Maven, JavaFX, JPA, JUnit, JDBC</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faDatabase} size="4x"/>
                                    <h2>Databases</h2>
                                    <p>MongoDB, SQLite, MySQL, Neo4j, T-SQL</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faJsSquare} size="4x"/>
                                    <h2>JavaScript</h2>
                                    <p>Node.js, Express, React, Isotope</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faPython} size="4x"/>
                                    <h2>Python</h2>
                                    <p>Numpy, Pandas, scikit-learn, Flask</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faMixcloud} size="4x"/>
                                    <h2>Cloud</h2>
                                    <p><b>AWS</b>: EC2, ECS, SQS, SES, DynamoDB, RDS, ELB, S3</p>
                                </div>
                                <div className="col col-12 col-sm-4">
                                    <FontAwesomeIcon className="fa-skills " icon={faCode} size="4x"/>
                                    <h2>Other</h2>
                                    <p>C, C#, AWS, Jenkins, Agile, HTML5, CSS, Bootstrap, Stripe, Tailwind</p>
                                </div>
                                {/* <div className="col col-12 col-sm-4">
                                    <img src={CLogo} className="fa-skills mx-lg-auto" alt="C programing language Logo" />
                                    <h2>C Programing</h2>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;