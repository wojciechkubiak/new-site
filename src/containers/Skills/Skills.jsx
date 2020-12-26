import React, { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import { gsap } from 'gsap';
import "./Skills.scss";
import Skill from "./../../components/Skill/Skill";
import Python from "./../../images/skills/py-white.png";
import CSS from "./../../images/skills/css-white.webp";
import HTML5 from "./../../images/skills/html-white.webp";
import Javascript from "./../../images/skills/js-white.webp";
import SQL from "./../../images/skills/sql-white.png";
import NodeJS from "./../../images/skills/node-white.webp";
import ReactJS from "./../../images/skills/react-white.webp";
import Typescript from "./../../images/skills/ts-white.webp";


const Skills = props => {
    const skills = [{
        name: "JAVASCRIPT",
        skill: Javascript,
        skillDesc: props.t("javascript.desc", { framework: "react-i18next" }),
    }, {
        name: "REACTJS",
        skill: ReactJS,
        skillDesc: props.t("reactjs.desc", { framework: "react-i18next" }),
    }, {
        name: "NODEJS",
        skill: NodeJS,
        skillDesc: props.t("nodejs.desc", { framework: "react-i18next" }),
    }, {
        name: "TYPESCRIPT",
        skill: Typescript,
        skillDesc: props.t("typescript.desc", { framework: "react-i18next" }),
    }, {
        name: "PYTHON",
        skill: Python,
        skillDesc: props.t("python.desc", { framework: "react-i18next" }),
    }, {
        name: "SQL",
        skill: SQL,
        skillDesc: props.t("postgres.desc", { framework: "react-i18next" }),
    }, {
        name: "HTML5",
        skill: HTML5,
        skillDesc: props.t("html.desc", { framework: "react-i18next" }),
    }, {
        name: "CSS",
        skill: CSS,
        skillDesc: props.t("css.desc", { framework: "react-i18next" }),
    }];
    const [threshold, setThreshold] = useState(0.1)
    const refs = [];
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: threshold,
    });

    useEffect(() => {
        if(inView) setAnimated(true);
        if(inView && !isMobile) {
            props.setNavbar(false, false, false, true, false)
        }
    }, [inView]);

    useEffect(() => {
        if(isMobile) {
            setThreshold(0.1)
        }
    }, [])

    return (
        <div className="skills" ref={ref}>
            <div className="skills-header"><h1>{props.t("header.skills", { framework: "react-i18next" })}</h1></div>
            <div className="skills-container">
                {
                    skills.map((element, key) => {
                        return (
                            <>
                                <Skill id={key} key={element.skill} animated={animated} name={element.name} imgSrc={element.skill} skillDescription={element.skillDesc.split(',')} />
                            </>
                        )
                    })
                }
            </div>
            <div className="skills-mnt" id="contact" ref={props.contactRef}></div>
        </div>
    )
}

export default Skills;