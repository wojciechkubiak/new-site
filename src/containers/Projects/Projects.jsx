import React from "react";
import "./Projects.scss";
import Project from "./../../components/Project/Project"
import ObbSys from "./../../images/1.png";
import OpqnWeb from "./../../images/3.png";

//TODO: Fill projects container
const Projects = props => {
    const projects = [{ img: ObbSys, header: "OBBSYS"}, {img: OpqnWeb, header: "OPQN"}];

    return (
        <div className="projects">
            <div className="projects-header"><h1>PROJECTS</h1></div>
            <Project projectImg={projects}></Project>
            <div ref={props.skillsRef} className="projects-mnt-bt" id="skills"></div>
        </div>
    )
}

export default Projects;