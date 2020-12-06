import React, {useState, useEffect} from "react";
import "./Skill.scss";

const Skill = (props) => {
    const [desc, setDesc] = useState([]);

    useEffect(() => {
        // const temp = props.skillDescription.split(',')
        // setDesc(temp);
        console.log(props.skillDescription);
    }, []);

    return (
        <>
            <figure>
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