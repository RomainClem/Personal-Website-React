import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className="bg-dark fixed-top">
            <div className="wrapper">
                <div className="d-flex flex-wrap justify-content-center py-3">
                    <Route>
                        <Link to="/" className="box d-flex align-items-center mb-3 mb-lg-0 me-md-auto text-decoration-none text-white name">
                            <span className="fs-3 fw-bold">Romain Clemencon</span>
                        </Link>
                    </Route>
                    <ul className="box nav fs-5">
                        <Link className={"nav-link px-2 py-1 text-white " + (props.viewers[0] ? "active": "")} to="/">Home</Link>
                        <Link className={"nav-link px-2 py-1 text-white " + (props.viewers[1] ? "active": "")} to="/#Projects">Projects</Link>
                        <Link className={"nav-link px-2 py-1 text-white " + (props.viewers[2] ? "active": "")} to="/#About">About</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Header;