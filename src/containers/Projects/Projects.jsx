import React from "react";
import "./Projects.scss";

//TODO: Fill projects container
const Projects = props => {
    return (
        <div className="projects">
            <div className="projects-header"><h1>PROJECTS</h1></div>
            <div ref={props.skillsRef} className="projects-mnt-bt" id="skills"></div>
        </div>
    )
}

export default Projects;