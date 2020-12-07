import React, { useState, useEffect } from "react";
import "./About.scss";
import ResumePL from "./../../docs/cvpl.pdf";
import ResumeEN from "./../../docs/cven.pdf";

const About = props => {
    const [resume, setResume] = useState(ResumeEN);

    useEffect(() => {
        if(props.lang === "pl") {
            setResume(ResumePL)
        } else {
            setResume(ResumeEN)
        }
    }, [props.lang])

    return (
        <>
        <div className="about-info" id="about" ref={props.aboutRef}>
            <h1 className="about-info-header">{props.t("header.about", { framework: "react-i18next" })}</h1>
            <p className="about-info-content">{props.t("aboutme.content", { framework: "react-i18next" })}
                <a
                    className="about-resume-link"
                    href={resume}
                    download={`WojciechKubiakCV_${props.lang.toUpperCase()}.pdf`}
                >
                    {props.t("here.text", { framework: "react-i18next" })}
                </a>
                .
            </p>
            <div className="projects-mnt" id="projects" ref={props.projectsRef}></div>
        </div>
        </>
    )
}

export default About;