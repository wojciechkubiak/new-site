import React from "react";
import "./About.scss";

const About = props => {
    return (
        <>
        <div className="about-info">
            <h1 className="about-info-header">{props.t("header.about", { framework: "react-i18next" })}</h1>
            <p className="about-info-content">{props.t("aboutme.content", { framework: "react-i18next" })}</p>
            <div className="projects-mnt"></div>
        </div>
        </>
    )
}

export default About;