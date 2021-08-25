import me from "../../Assets/images/me50.jpg";
import React, {Component} from "react";

class Profile extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="home col-md px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-lg-6">
                            <div className="profile mx-auto">
                                <img className="avatar border shadow-lg" src={me} alt="It's me!"/>
                            </div>
                        </div>
                        <div className="bio col-lg-6 mx-auto">
                            <h2 className="display-6 fw-bold lh-2 mb-3">Hey, I'm a Student Software Engineer - Looking for an Internship</h2>
                            <p className="lead">
                                My name is <b>Romain Cl&eacute;men&ccedil;on</b>.
                                I am a 3<sup>rd</sup> year student for a Bachelor of Science Honours at <a rel="noopener noreferrer" target="_blank" className="home mtu" href="https://www.mtu.ie/">MTU Cork</a>.
                                I also work as a technical customer support specialist for <a rel="noopener noreferrer" target="_blank" className="home stripe" href="https://stripe.com/ie">Stripe</a> to fund my studies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;