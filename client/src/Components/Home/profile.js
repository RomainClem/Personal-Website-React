import me from "../../Assets/images/me50.jpg";
import React, {Component} from "react";

class Profile extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="Home col-md px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img className="avatar mx-lg-auto img-fluid border shadow-lg mb-4" src={me} alt="It's me!"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-6 fw-bold lh-2 mb-3">Hey, I'm a Student Software Engineer - Looking for an Internship</h2>
                            <p className="lead">
                                My name is <b>Romain Cl&eacute;men&ccedil;on</b>.
                                I am a 3<sup>rd</sup> year student for a Bachelor of Science Honours at <a rel="noreferrer" target="_blank" className="home mtu" href="https://www.mtu.ie/">MTU Cork</a>.
                                I also work as a technical customer support specialist for <a rel="noreferrer" target="_blank" className="home stripe" href="https://stripe.com/ie">Stripe</a> to fund my studies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;