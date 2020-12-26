import React, { useRef, useEffect, useState } from "react";
import "./Projects.scss";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import { gsap } from "gsap";
import {AiOutlineInfoCircle} from "react-icons/ai";
import ObbSys from "./../../images/1.png";
import OpqnWeb from "./../../images/3.png";
import Javascript from "./../../images/skills/js-white.webp";
import SQL from "./../../images/skills/sql-white.png";
import NodeJS from "./../../images/skills/node-white.webp";
import ReactJS from "./../../images/skills/react-white.webp";
import Typescript from "./../../images/skills/ts-white.webp";
import SubinfoBg1 from "./../../images/projinfo.png";
import SubinfoBg2 from "./../../images/projinfo2.png";
import Git from "./../../images/git.png"

const Projects = props => {
    const [showFirstInfo, setShowFirstInfo] = useState(false);
    const [showSecondInfo, setShowSecondInfo] = useState(false);

    const projects = [{ 
        img: ObbSys, header: "OBBSYS", body: props.t("projects.obbsysAbout", { framework: "react-i18next" }),
        technologiesUsed: [Javascript, ReactJS, NodeJS, SQL]
    }, { 
        img: OpqnWeb, header: "FITTRACKER", body: props.t("projects.fittrackerAbout", { framework: "react-i18next" }),
        technologiesUsed: [Typescript, ReactJS, NodeJS, SQL]
    }];
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .3,
    });

    const showHandler = (f,) => f(true);
    const hideHandler = (f) => f(false);

    let projectsHeader = useRef(null);
    let projectsFirst = useRef(null);
    let projectsSecond = useRef(null);
    let subinfo = useRef(null);
    let t1 = gsap.timeline();

    useEffect(() => {
        if (inView) setAnimated(true);
        if (inView && !isMobile) {
            props.setNavbar(false, false, true, false, false)
        }
    }, [inView]);

    useEffect(() => {
        if (animated) {
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
            ).fromTo(
                subinfo, {
                    opacity: 0
                },
                {
                    duration: 1,
                    opacity: 1
                }
            )
        }
    }, [animated]);

    return (
        <div className="projects" ref={ref}>
            <div className="projects-header" ref={e => projectsHeader = e}><h1>{props.t("header.projects", { framework: "react-i18next" })}</h1></div>
            <div className="projects-data-container">
                <div className="projects-data" ref={e => projectsFirst = e}>
                    <div className="projects-img-container">
                        {showFirstInfo && (
                            <div className="projects-over-info">
                                {showFirstInfo && (<button style={{position: "absolute", height: "25px", width: "25px", outline: "none", right: "5px", top: "5px", backgroundColor: "transparent", border: "none", color: "rgba(255, 255, 255, .8)", zIndex: "2000"}} onClick={() => hideHandler(setShowFirstInfo)}>X</button>)}
                                <div className="projects-over-info-git">
                                <a href="https://github.com/wojciechkubiak/opqn-web"><img src={Git} alt="git"/></a>
                                </div>
                                <div className="projects-over-info-tech">
                                    <img src={Javascript}/>
                                    <img src={ReactJS}/>
                                    <img src={NodeJS}/>
                                    <img src={SQL}/>
                                </div>
                            </div>
                        )}
                        <span className="helper"></span><img alt="alt" className="projects-img" src={projects[0].img} />
                    </div>
                    <div className="projects-info">
                        <h2>{projects[0].header}<AiOutlineInfoCircle onClick={() => showHandler(setShowFirstInfo)}/></h2>
                        <p>{projects[0].body}</p>
                    </div>
                </div>
                <div className="projects-data" ref={e => projectsSecond = e}>
                <div className="projects-img-container">
                        {showSecondInfo && (
                            <div className="projects-over-info">
                                {showSecondInfo && (<button style={{position: "absolute", height: "25px", width: "25px", outline: "none", right: "5px", top: "5px", backgroundColor: "transparent", border: "none", color: "rgba(255, 255, 255, .8)", zIndex: "2000"}} onClick={() => hideHandler(setShowSecondInfo)}>X</button>)}
                                <div className="projects-over-info-git">
                                <a href="https://github.com/wojciechkubiak/obb-web"><img src={Git} alt="git"/></a>
                                </div>
                                <div className="projects-over-info-tech">
                                    <img src={Typescript}/>
                                    <img src={ReactJS}/>
                                    <img src={NodeJS}/>
                                    <img src={SQL}/>
                                </div>
                            </div>
                        )}
                        <span className="helper"></span><img alt="alt" className="projects-img" src={projects[1].img} />
                    </div>
                    <div className="projects-info" 
                    >
                        <h2>{projects[1].header}<AiOutlineInfoCircle onClick={() => showHandler(setShowSecondInfo)}/></h2>
                        <p>{projects[1].body}</p>
                    </div>
                </div>
            </div>
            <h2 className="projects-subheader" ref={e => subinfo = e}>... {props.t("subinfo.content", { framework: "react-i18next" })}</h2>
            <div ref={props.skillsRef} className="projects-mnt-bt" id="skills"></div>
        </div>
    )
}

export default Projects;