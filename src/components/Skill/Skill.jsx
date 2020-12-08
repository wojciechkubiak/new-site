import React, {useState, useEffect, useRef} from "react";
import { gsap } from "gsap";
import "./Skill.scss";

const Skill = (props) => {
    let skillRef = useRef(null);

    useEffect(() => {
        if(props.animated) {
            let mtp = (props.id + 1) * 0.3;
           
            gsap.fromTo(
                skillRef,
                {
                    opacity: 0
                }, 
                {
                    duration: 1,
                    opacity: 1
                }
            ).delay(mtp);
        }
    }, [props.animated]);

    return (
        <>
            <figure className="skill-figure" ref={e => skillRef = e}>
                <img src={props.imgSrc} className="skill-img"/>
                <figcaption>
                    <h3>{props.name}</h3>
                    {props.skillDescription.map(element => {
                        return <p className="skill-desc">{element}</p>
                    })}
                </figcaption>
            </figure>
        </>
    )
}

export default Skill