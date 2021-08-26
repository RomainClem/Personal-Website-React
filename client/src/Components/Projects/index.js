import React, { useRef } from 'react';
import Isotope from "isotope-layout";
import ProjectsMedia from "./projects-media";
import './button.css';
/*
TODO:
      - install isotope-layout
      - Add a few projects and use cleaner github Repos
      - fix col md not nice in smaller width
 */

const Projects = (props) => {
    // init one ref to store the future isotope object
    const isotope = useRef()

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // initialize an Isotope object with configs
    React.useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    React.useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({filter: `*`})
            : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    const handleClick = () => {
        setTimeout( function() {
            isotope.current.arrange()
        }, 350 );
    };

    return (
        <div className="wrapper">
            <div className="row">
                <div className="col-md-4 section-heading text-center px-4 pt-5">
                        <h2 className="display-5 fw-bold">Projects</h2>
                        <div className="btn-group sticky-top pt-2" role="group">
                            <button type="button" className={ "btn iso-button " + ("*"===filterKey ? 'active' : '')} onClick={handleFilterKeyChange('*')}>All</button>
                            <button type="button" className={ "btn iso-button " + ("java"===filterKey ? 'active' : '')} onClick={handleFilterKeyChange('java')}>Java</button>
                            <button type="button" className={ "btn iso-button " + ("web"===filterKey ? 'active' : '')} onClick={handleFilterKeyChange('web')}>Web</button>
                            <button type="button" className={ "btn iso-button " + ("python"===filterKey ? 'active' : '')} onClick={handleFilterKeyChange('python')}>Python</button>
                        </div>
                </div>
                <div className="isotope col-md-8 py-5">
                    <div className="isotope-item filter-container row">
                        <ProjectsMedia isoArrange={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;