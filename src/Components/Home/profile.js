import React, {Component} from "react";
import me from "../../Assets/images/me50.jpg";

class Profile extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="home col-md px-4 pt-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 pt-3 pb-5">
                        <div className="col-lg-5">
                            <div className="profile mx-auto">
                                <img className="avatar border shadow-lg" src={me} alt="It's me!"/>
                            </div>
                        </div>
                        <div className="bio col-lg-7 mx-auto">
                            <div className="blue-bg">
                                <h5 className="m-0 ps-1 pt-1 font-monospace text-white">
                                    Hi, my name is
                                </h5>
                            </div>
                            <h2 className="display-6 fw-bold">
                                Romain Cl&eacute;men&ccedil;on
                            </h2>
                            <div className="orange-bg-transparent">
                                <h5 className="m-0 ps-1 pt-1 font-monospace text-white">
                                    and I am a
                                </h5>
                            </div>
                            <h2 className="display-6 fw-bold mb-3">
                                Student Software Engineer
                            </h2>
                            <p className="fs-5">
                                I'm a 4<sup>th</sup> year <b>Software Engineer</b> student doing a Bachelor of Science &#40;Honours&#41; at <a rel="noopener noreferrer" target="_blank" className="home mtu px-1" href="https://www.mtu.ie/">MTU Cork</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;