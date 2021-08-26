import React from "react";
import MediaCovid19 from "./medias/covid19";
import MediaBottomUp from "./medias/bottom-up";
import MediaShortestPath from "./medias/shortest-path";
import MediaTwitterBot from "./medias/twitter-bot";
import MediaPersonalWebsite from "./medias/personal-website";
import MediaAuthenticationWebsite from "./medias/authentication-website";
import MediaEnvironmentalWebsite from "./medias/environmental-website";
import MediaAliceWebsite from "./medias/alice-website";
import MediaSuperheroList from "./medias/superhero-list";

const ProjectsMedia = (props) => {
    return (
        <div className="media">
            <div className="filter-item web col-12">
                <MediaPersonalWebsite isoArrange={props.isoArrange} />
            </div>
            <div className="filter-item java col-12">
                <MediaCovid19 />
            </div>
            <div className="filter-item python col-12">
                <MediaTwitterBot />
            </div>
            <div className="filter-item java col-12">
                <MediaBottomUp />
            </div>
            <div className="filter-item java col-12">
                <MediaShortestPath />
            </div>
            <div className="filter-item web col-12">
                <MediaAuthenticationWebsite />
            </div>
            <div className="filter-item web col-12">
                <MediaEnvironmentalWebsite />
            </div>
            <div className="filter-item web col-12">
                <MediaAliceWebsite />
            </div>
            <div className="filter-item python col-12">
                <MediaSuperheroList />
            </div>
        </div>
    )
}

export default ProjectsMedia;