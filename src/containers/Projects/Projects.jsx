import React, {useRef, useEffect, useState} from "react";
import "./Projects.scss";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import { gsap } from "gsap";
import ObbSys from "./../../images/1.png";
import OpqnWeb from "./../../images/3.png";

//TODO: Fill projects container
const Projects = props => {
    const projects = [{ img: ObbSys, header: "OBBSYS"}, {img: OpqnWeb, header: "OPQN"}];
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .6,
    });

    let projectsHeader = useRef(null);
    let projectsFirst = useRef(null);
    let projectsSecond = useRef(null);

    let t1 = gsap.timeline();

    useEffect(() => {
        if(inView) setAnimated(true);
        if(inView && !isMobile) {
            props.setNavbar(false, false, true, false, false)
        }
    }, [inView]);

    useEffect(() => {
        if(animated) {
            gsap.fromTo(
                projectsHeader,
                {
                    opacity: 0
                }, 
                {
                    duration: 2,
                    opacity: 1
                }
            )

            t1.fromTo(
                projectsFirst,
                {
                    opacity: 0,
                    bottom: -100
                }, 
                {
                    duration: 1,
                    bottom: 0,
                    opacity: 1
                }
            ).fromTo(
                projectsSecond,
                {
                    opacity: 0,
                    bottom: -100
                }, 
                {
                    duration: 1,
                    bottom: 0,
                    opacity: 1
                }
            )
        }
    }, [animated]);

    return (
        <div className="projects" ref={ref}>
            <div className="projects-header" ref={e => projectsHeader = e}><h1>{props.t("header.projects", { framework: "react-i18next" })}</h1></div>
            <div className="projects-data" ref={e => projectsFirst = e}>
                <div className="projects-img-container">
                    <img alt="alt" className="projects-img" src={projects[0].img} />
                </div>
                <div className="projects-info">
                    <h2>{projects[0].header}</h2>
                </div>
            </div>
            <div className="projects-data" ref={e => projectsSecond = e}>
                <div className="projects-img-container">
                    <img alt="alt" className="projects-img" src={projects[1].img} />
                </div>
                <div className="projects-info">
                    <h2>{projects[1].header}</h2>
                </div>
            </div>
            <div ref={props.skillsRef} className="projects-mnt-bt" id="skills"></div>
        </div>
    )
}

export default Projects;