import React, { Component } from 'react';
import LiNavLink from '../LiNavLink';
import { Link, Route } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="pb-3 bg-dark">
                <div className="wrapper">
                    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <Route>
                            <Link to="/" className="box d-flex align-items-center mb-3 mb-lg-0 me-md-auto text-decoration-none text-white">
                                <span className="fs-3 fw-bold">Romain Clemencon</span>
                            </Link>
                        </Route>
                        <ul className="box nav fs-5">
                            <LiNavLink exact activeClassName='active' to="/">Home</LiNavLink>
                            <LiNavLink exact activeClassName='active' to="/Projects">Projects</LiNavLink>
                            <LiNavLink exact activeClassName='active' to="/About">About</LiNavLink>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;