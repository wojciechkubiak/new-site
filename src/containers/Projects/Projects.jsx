import React, {useRef, useEffect, useState} from "react";
import "./Projects.scss";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import Project from "./../../components/Project/Project"
import ObbSys from "./../../images/1.png";
import OpqnWeb from "./../../images/3.png";

//TODO: Fill projects container
const Projects = props => {
    const projects = [{ img: ObbSys, header: "OBBSYS"}, {img: OpqnWeb, header: "OPQN"}];
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .8,
    });

    useEffect(() => {
        setAnimated(true);
        if(inView && !isMobile) {
            props.setNavbar(false, false, true, false, false)
        }
    }, [inView]);

    useEffect(() => {
        if(animated) {
            // console.log('Anim here');
        }
    }, [animated]);

    return (
        <div className="projects" ref={ref}>
            <div className="projects-header"><h1>PROJECTS</h1></div>
            <Project projectImg={projects}></Project>
            <div ref={props.skillsRef} className="projects-mnt-bt" id="skills"></div>
        </div>
    )
}

export default Projects;