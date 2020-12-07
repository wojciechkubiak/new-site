import React from "react";
import "./Project.scss";

const Project = (props) => {
    return (
        <>
            { props.projectImg.map(element => {
                return (
                    <div className="projects-data">
                        <div className="projects-img-container">
                            <img alt="alt" className="projects-img" src={element.img} />
                        </div>
                        <div className="projects-info">
                            <h2>{element.header}</h2>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Project