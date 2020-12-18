import React, {useState, useEffect, useRef} from "react";
import { isMobile } from 'react-device-detect';
import { gsap } from "gsap";
import Cloud1 from "./../../images/skillcd.png";
import Cloud2 from "./../../images/skillcd2.png";
import Cloud3 from "./../../images/skillcd3.png";
import "./Skill.scss";

const Skill = (props) => {
    let skillRef = useRef(null);
    let figcaptionRef = useRef(null);
    let rand = Math.round(Math.random() * 2);
    let randBoolean = Math.round(Math.random());

    let style1 = {visibility: "hidden", opacity: 0, backgroundImage: `url(${Cloud1})`}
    let style2 = {visibility: "hidden", opacity: 0, backgroundImage: `url(${Cloud2})`}
    let style3 = {visibility: "hidden", opacity: 0, backgroundImage: `url(${Cloud3})`}

    let style = () => {
        switch(rand) {
            case 0:
                return style1
            case 1:
                return style2
            case 2:
                return style3
        }
    }

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
            ).delay(mtp).then(
                () => {if(isMobile) showFigcatpion()}               
                );
        }
    console.log(rand);
    }, [props.animated]);

    const showFigcatpion = () => {
        if(!isMobile) {
            gsap.fromTo(
                figcaptionRef,
                {
                    visibility: "hidden",
                    opacity: 0
                }, 
                {
                    visibility: "visible",
                    duration: 1,
                    opacity: 1
                })
        }
    }

    const hideFigcatpion = () => {
        if(!isMobile) {
            gsap.fromTo(
            figcaptionRef,
            {
                visibility: "visible",
                opacity: 0
            }, 
            {
                visibility: "hidden",
                duration: 1,
                opacity: 0
            })
        }
        }

    return (
        <>
            <figure className="skill-figure" ref={e => skillRef = e}>
                <img src={props.imgSrc}  onMouseOver={() => showFigcatpion()} onMouseOut={() => hideFigcatpion()} className="skill-img"/>
                <figcaption>
                    <h3 onMouseOver={() => showFigcatpion()} onMouseOut={() => hideFigcatpion()}>{props.name}</h3>
                    <div className="skill-desc-container" ref={e => figcaptionRef = e}  style={style()}>
                    <div className="desc-container">
                    {props.skillDescription.map(element => {
                        return <>
                        <p className="skill-desc">{element}</p>
                        <div style={{position: "absolute", borderBottom: "2px solid #696da3", transform: `rotate(${randBoolean ? "-1" : "1"}deg)`, width: "100%"}}></div>
                        <div style={{position: "absolute", borderBottom: "4px solid #696da3", transform: `rotate(${randBoolean ? 0.5 * -1 : 0.5 * 1}deg)`, width: "100%"}}></div>
                        <div style={{position: "absolute", borderBottom: "3px solid #696da3", transform: `rotate(${randBoolean ? 2 * -1 : 2 * 1}deg)`, width: "100%"}}></div>
                        </>
                    })}
                    </div>
                    </div>  
                    <div style={{position: "absolute", height: "10px", width: "100%", bottom: "0px", left: "0px", backgroundColor: " #696da3"}}></div>
                </figcaption>
            </figure>
        </>
    )
}

export default Skill