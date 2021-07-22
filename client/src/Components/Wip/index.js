import React, { Component } from 'react'
import monkey from '../../Assets/images/monkey.gif'

class Wip extends Component {
    render() {
        return (
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Work In Progress</h1>
                <div className="overflow-hidden">
                    <div className="container px-5">
                        <img src={monkey} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"/>
                    </div>
                </div>
                <p className="lead mb-4">Credit to Amanda Cassingham-Bardwell <a href="https://dribbble.com/shots/4055310-Monkey-on-Typewriter">@dribbble</a></p>
            </div>
        )
    }
}

export default Wip;