import React, { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import {CgArrowLongDown} from "react-icons/cg";
import { gsap } from "gsap";
import "./Name.scss";

const Name = props => {
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .8,
    });

    let headerRef = useRef(null);

    useEffect(() => {
        if (inView) setAnimated(true);
        if (inView && !isMobile) {
            props.setNavbar(true, false, false, false, false)
        }
    }, [inView]);

    useEffect(() => {
        if (animated) {
            gsap.fromTo(
                headerRef,
                {
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
        <div className="about" ref={ref}>
            <div className="about-header" ref={(e) => (headerRef = e)}>
                <h1>WOJCIECH KUBIAK</h1>     
            </div>
            {isMobile && props.showMainBtn && <button className="about-btn" onClick={() => props.aboutMoveHandler()}><CgArrowLongDown size={54} color="white"/></button>}   
        </div>
    )
}

export default Name;