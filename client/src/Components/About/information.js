import React from 'react';
import roger from "../../Assets/images/Roger.jpeg";

const Information = () => {
    return (
        <div className="wrapper">
            <div className="home col-md px-4 py-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">

                    <div className="bio col-lg-9 mx-auto">
                        <div className="blue-bg">
                            <h5 className="m-0 ps-1 font-monospace text-white">
                                Who am I?
                            </h5>
                        </div>
                        <p className="fs-5">
                            Hello, my name is <b>Romain Cl&eacute;men&ccedil;on</b> and I am a 3rd year student software engineer for a Bachelor
                            of Science Honours at <a rel="noopener noreferrer" target="_blank" className="home mtu" href="https://www.mtu.ie/">MTU Cork</a> in Ireland.
                            I also work as a technical customer support specialist for <a rel="noopener noreferrer" target="_blank" className="home stripe" href="https://stripe.com/">Stripe</a>.

                            <br/>
                            <br/>
                            I am an enthusiastic and self-motivated person and always give my best to exceed people’s expectations.
                            I strive in challenging environments and have a proven track record thus far for delivering work and college results through effective problem-solving, communication, and collaboration.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="profile mx-auto">
                            <img className="avatar border shadow-lg" src={roger} alt="It's me!"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default Information;