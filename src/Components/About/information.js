import React from 'react';
import roger from "../../Assets/images/Roger.jpg";

const Information = () => {
    return (
        <div className="wrapper py-5">
            <div className="col-md">
                <div className="row flex-lg-row align-items-center">
                    <div className="bio col-md-9 mx-auto">
                        <div className="blue-bg">
                            <h2 className="m-0 ps-1 text-white">
                                About me
                            </h2>
                        </div>
                        <div className="fs-5 pt-2">
                            <p>
                                Hello, my name is <b>Romain Cl&eacute;men&ccedil;on</b>. I am an enthusiastic and self-motivated person and always give my best to exceed people’s expectations.
                                I strive in challenging environments and have a proven track record thus far for delivering work and college results through effective problem-solving, communication, and collaboration.
                            </p>
                            <p>
                                I am also always looking forward to learning something new.
                                I believe there can be several solution to any given problem, which is particularly relevant in the ever changing field of technology.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="profile mx-auto">
                            <img className="avatar border shadow-lg" src={roger} alt="It's me!"/>
                            <p className="lead text-center fs-6">Roger my faithful sidekick</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default Information;