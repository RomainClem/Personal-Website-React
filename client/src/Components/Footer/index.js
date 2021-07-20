import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <span className="text-muted">&copy;&nbsp;<Link to='/author'>Romain Clemencon</Link> 2021</span>
                </div>
            </footer>
        )
    }
}

export default Footer;