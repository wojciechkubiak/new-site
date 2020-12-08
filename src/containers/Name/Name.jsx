import React, { useEffect, useState} from "react";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import "./Name.scss";

const Name = props => {
    const [animated, setAnimated] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .8,
    });

    useEffect(() => {
        setAnimated(true);
        if(inView && !isMobile) {
            props.setNavbar(true, false, false, false, false)
        }
    }, [inView]);

    useEffect(() => {
        if(animated) {
            // console.log('Anim here');
        }
    }, [animated]);

    return (
        <div className="about" ref={ref}>
            <div className="about-header">
                <h1>WOJCIECH KUBIAK</h1>
            </div>
        </div>
    )
}

export default Name;