import React, { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import "./About.scss";
import { gsap } from "gsap";

import ResumePL from "./../../docs/cvpl.pdf";
import ResumeEN from "./../../docs/cven.pdf";

const About = props => {
    const [resume, setResume] = useState(ResumeEN);
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .5,
    });

    let aboutHeaderRef = useRef(null);
    let aboutContentRef = useRef(null);

    useEffect(() => {
        if (inView) setAnimated(true);
        if (inView && isMobile) props.setShowMainBtn(false);
        if (!isMobile) props.navbarDarkHandler(inView);
    }, [inView]);

    useEffect(() => {
        if (animated) {
            gsap.fromTo(
                aboutHeaderRef,
                {
                    opacity: 0
                },
                {
                    duration: 1,
                    opacity: 1
                }
            );

            gsap.fromTo(
                aboutContentRef,
                {
                    opacity: 0
                },
                {
                    duration: 1.5,
                    opacity: 1
                }
            )
        }
    }, [animated]);

    useEffect(() => {
        if (props.lang === "pl") {
            setResume(ResumePL)
        } else {
            setResume(ResumeEN)
        }
    }, [props.lang])

    return (
        <>
            <div className="about-info" id="about" ref={ref} >
                <div ref={props.aboutRef}>
                    {/* TODO: header flashing if scrolled fast - turn off anim? */}
                <h1 className="about-info-header" ref={e => aboutHeaderRef = e}>{props.t("header.about", { framework: "react-i18next" })}</h1>
                <p className="about-info-content" ref={e => aboutContentRef = e}>{props.t("aboutme.content", { framework: "react-i18next" })}
                    <a
                        className="about-resume-link"
                        href={resume}
                        download={`WojciechKubiakCV_${props.lang.toUpperCase()}.pdf`}
                    >
                        {props.t("here.text", { framework: "react-i18next" })}
                    </a>
                .
                </p>
                <div className="projects-mnt" id="projects"></div>
                </div>               
            </div>
        </>
    )
}

export default About;