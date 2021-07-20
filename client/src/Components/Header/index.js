import React, { Component } from 'react';
import LiNavLink from '../LiNavLink';

import './style.css'

class Header extends Component {
    render() {
        return (
            <div className="container">
                <header className="d-flex flex-shrink justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32">
                            <use xlinkHref="#bootstrap"/>
                        </svg>
                        <span className="fs-4">Simple header</span>
                    </a>
                    <ul className="nav nav-pills">
                        <LiNavLink activeClassName='active' to="/">Home</LiNavLink>
                        <LiNavLink activeClassName='active' to="/">Projects</LiNavLink>
                        <LiNavLink activeClassName='active' to="/">About</LiNavLink>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Header;