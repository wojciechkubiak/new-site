import React, { useState, useEffect, useRef } from "react";
import {FaRegHeart} from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import "./Contact.scss";
import axios from "axios";
import { gsap } from "gsap";
import ln from "./../../images/icons/linkedin.png";
import fb from "./../../images/icons/facebook.png";
import git from "./../../images/icons/git.png";
import bgSend from "./../../images/icons/send.png";
import bgLoad from "./../../images/icons/load.png";

//TODO: Fix CORS
const Contact = props => {
    const [showSend, setShowSend] = useState(true);
    const [send, setSend] = useState(false);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [animated, setAnimated] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const { ref, inView, entry } = useInView({
        threshold: .5,
    });

    const styleSend = { backgroundImage: `url(${bgSend})` };
    const styleLoad = { backgroundImage: `url(${bgLoad})` };

    let contactHeader = useRef(null);
    let contactSubHeader = useRef(null);
    let contactForm = useRef(null);

    useEffect(() => {
        if (inView) setAnimated(true);
        if (inView && !isMobile) {
            props.setNavbar(false, false, false, false, true);
        }
    }, [inView]);


    useEffect(() => {
        if (animated) {
            gsap.fromTo(
                contactHeader,
                {
                    opacity: 0
                },
                {
                    duration: 1,
                    opacity: 1
                }
            );

            gsap.fromTo(
                contactSubHeader,
                {
                    opacity: 0
                },
                {
                    duration: 4,
                    opacity: 1
                }
            )

            gsap.fromTo(
                contactForm,
                {
                    opacity: 0,
                    bottom: -100
                },
                {
                    duration: 1,
                    bottom: 0,
                    opacity: 1
                }
            )
        }
    }, [animated]);

    const clearData = () => {
        setEmail("");
        setSubject("");
        setContent("");
    }

    const handleSubmit = event => {
        event.preventDefault();
        setInputDisabled(true);
        setShowSend(false);

        const mail = {
            mail: email,
            subject: subject,
            content: content
        };

        console.log(mail);

        axios.post(`https://portolio-email-sender.herokuapp.com/`, { mail })
            .then(res => {
                console.log(res);
                console.log(res.data);
                clearData();
                setInputDisabled(false);
                setShowSend(true);
                setSend(true);
            }).catch(error => {
                console.log(error);
                setInputDisabled(false);
            })
    }

    return (
        <div className="contact" ref={ref}>
            <div className="contact-header">
                <h1 className="contact-header-text" ref={e => contactHeader = e}>{props.t("contact.box", { framework: "react-i18next" })}</h1>
                <h3 className="contact-subheader-text"ref={e => contactSubHeader = e}>{props.t("contact.firstLine", { framework: "react-i18next" })}</h3>
            </div>
            <form className="contact-form" ref={e => contactForm = e} onSubmit={event => handleSubmit(event)}>
                {!send &&
                <>
                <div className="links-container">
                    <a href="https://www.linkedin.com/in/wojciechkubiakin"><img src={ln} /></a>
                    <a href="https://www.github.com/wojciechkubiak"><img src={git} /></a>
                    <a href="https://www.facebook.com/wojciechkubiakfb"><img src={fb} /></a>
                </div>
                <figure>
                    <h4>{props.t("contact.mail", { framework: "react-i18next" })}</h4>
                    <input type="text" className="contact-mail-mail" onChange={event => setEmail(event.target.value)} type="email" value={email} disabled={inputDisabled || send} required />
                </figure>
                <figure>
                    <h4>{props.t("contact.subject", { framework: "react-i18next" })}</h4>
                    <input type="text" className="contact-mail-subject" onChange={event => setSubject(event.target.value)} type="text" value={subject} disabled={inputDisabled || send} required />
                </figure>
                <figure>
                    <h4>{props.t("contact.message", { framework: "react-i18next" })}</h4>
                    <textarea type="text" className="contact-mail-content" onChange={event => setContent(event.target.value)} value={content} disabled={inputDisabled || send} required></textarea>
                </figure>
                </>
                }
                
                {!send && <button className={showSend ? "submit-contact-form" : "load-contact-form"} type="submit"></button>   }  
                {send && 
                <>
                    <h1 className="send-info">{props.t("contact.success", { framework: "react-i18next" })} <FaRegHeart/></h1>
                    <h3 className="send-info-sub">{props.t("contact.subsuccess", { framework: "react-i18next" })}</h3>
                </>
                }
            </form>
        </div>
    )
}

export default Contact;