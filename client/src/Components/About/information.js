import React from 'react';
import me from "../../Assets/images/me50.jpg";

const Information = () => {
    return (
        <div className="wrapper">
            <div className="home col-md px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-3">
                        <div className="profile mx-auto">
                            <img className="avatar border shadow-lg" src={me} alt="It's me!"/>
                        </div>
                    </div>
                    <div className="bio col-lg-9 mx-auto">
                        <p className="fs-5">
                            lorem ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default Information;