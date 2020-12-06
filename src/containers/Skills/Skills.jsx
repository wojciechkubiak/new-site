import React from "react";
import "./Skills.scss";
import Skill from "./../../components/Skill/Skill";
import Angular from "./../../images/skills/white_empty_angular.png";
import CSS from "./../../images/skills/white_empty_css.webp";
import HTML5 from "./../../images/skills/white_empty_html.webp";
import Javascript from "./../../images/skills/white_empty_js.webp";
import SQL from "./../../images/skills/white_empty_sql.webp";
import NodeJS from "./../../images/skills/white_empty_nodejs.webp";
import ReactJS from "./../../images/skills/white_empty_react.webp";
import Typescript from "./../../images/skills/white_empty_typescript.webp";


const Skills = props => {
    const skills = [{
        name: "JAVASCRIPT",
        skill: Javascript,
        skillDesc: props.t("javascript.desc", { framework: "react-i18next" })
    }, {
        name: "REACTJS",
        skill: ReactJS,
        skillDesc: props.t("reactjs.desc", { framework: "react-i18next" })
    }, {
        name: "NODEJS",
        skill: NodeJS,
        skillDesc: props.t("nodejs.desc", { framework: "react-i18next" })
    }, {
        name: "ANGULAR",
        skill: Angular,
        skillDesc: props.t("javascript.desc", { framework: "react-i18next" })
    }, {
        name: "TYPESCRIPT",
        skill: Typescript,
        skillDesc: props.t("typescript.desc", { framework: "react-i18next" })
    }, {
        name: "SQL",
        skill: SQL,
        skillDesc: props.t("postgres.desc", { framework: "react-i18next" })
    }, {
        name: "HTML5",
        skill: HTML5,
        skillDesc: props.t("html.desc", { framework: "react-i18next" })
    }, {
        name: "CSS",
        skill: CSS,
        skillDesc: props.t("css.desc", { framework: "react-i18next" })
    }];

    return (
        <div className="skills">
            <div className="skills-header"><h1>SKILLS</h1></div>
            <div className="skills-container">
                {
                    skills.map(element => {
                        return (
                            <>
                            <Skill key={element.skill} name={element.name} imgSrc={element.skill} skillDescription={element.skillDesc.split(',')} />
                            </>
                        )
                    })
                }
            </div>
            <div className="skills-mnt" id="contact"></div>
        </div>
    )
}

export default Skills;