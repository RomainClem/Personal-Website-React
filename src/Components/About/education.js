import React from 'react';
const Education = () => {
    return (
        <div className="wrapper py-5">
            <div className="col-md">
                <div className="row flex-lg-row align-items-center">
                    <div className="bio col-lg-9 mx-auto">
                        <div className="blue-bg">
                            <h2 className="m-0 ps-1 text-white">
                                Education
                            </h2>
                        </div>
                        <div className="orange-bg-transparent mt-4">
                            <h4 className="m-0 ps-1 text-white">
                                Munster Technological University
                            </h4>
                        </div>
                        <div className="blue-bg-light-transparent mt-2">
                            <h5 className="m-0 ps-1 text-white fst-italic">
                                Bachelor of Science (Honours) in Software Development
                            </h5>
                        </div>
                        <div className="fs-5 pt-2">
                            <ul>
                                <li className="about-list"><b>1st, 2nd & 3rd Year</b> - First-Class Honours (Cumulative Average <b>89%</b>)</li>
                                <li className="about-list"><b>Courses</b>: Data Structures and Algorithms, SQL & NoSQL, Distributed system, Discrete Maths, Agile methodologies</li>
                                <li className="about-list"><b>Honors</b>: Alejandro de la Flor Trellix Scholarship - 2021</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="orange-bg-transparent mt-2">
                            <div className="m-0 ps-1 date-fit font-monospace text-white text-center">
                                Sep 2019 – Present
                            </div>
                        </div>
                        <div className="blue-bg-light-transparent mt-2">
                            <h4 className="m-0 ps-1 font-monospace text-white text-center">
                                Cork, Ireland
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Education;