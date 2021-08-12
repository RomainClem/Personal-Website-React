import React, { Component } from 'react';
import LiNavLink from '../LiNavLink';

/*
TODO:
      - Thinking about making the Home warp faster and avoid it sticking (could use spacer divs)
 */

class Header extends Component {
    render() {
        return (
            <div className="pb-3 bg-dark">
                <div className="wrapper">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-white">
                            <span className="fs-3 fw-bold">Romain Clemencon</span>
                        </a>
                        <ul className="nav nav-pills fs-5">
                            <LiNavLink activeClassName='active' to="/">Home</LiNavLink>
                            <LiNavLink activeClassName='active' to="/Projects">Projects</LiNavLink>
                            <LiNavLink activeClassName='active' to="/About">About</LiNavLink>
                        </ul>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;