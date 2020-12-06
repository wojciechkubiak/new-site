import React from "react";
import "./About.scss";

const About = props => {
    return (
        <>
        <div className="about-info" id="about" ref={props.aboutRef}>
            <h1 className="about-info-header">{props.t("header.about", { framework: "react-i18next" })}</h1>
            <p className="about-info-content">{props.t("aboutme.content", { framework: "react-i18next" })}</p>
            <div className="projects-mnt" id="projects" ref={props.projectsRef}></div>
        </div>
        </>
    )
}

export default About;