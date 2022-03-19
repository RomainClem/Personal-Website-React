import React from "react";
import ProjectCard from "./project-card";
import projectsJson from "./projects.json";

const ProjectsMedia = (props) => {
    return (
        <ul className="media ">
            {projectsJson.projects.map((data, key) => {
                return (
                    <li className={"filter-item " + data.type} key={key}>
                    <ProjectCard isoArrange={props.isoArrange} elements={data} />
                </li>
                )
            })}
        </ul>
    )
}

export default ProjectsMedia;