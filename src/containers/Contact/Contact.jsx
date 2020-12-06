import React, {useState} from "react";
import "./Contact.scss";
import axios from "axios";
import ln from "./../../images/icons/linkedin.png";
import fb from "./../../images/icons/facebook.png";
import git from "./../../images/icons/git.png";

const Contact = props => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const clearData = () => {
        setEmail("");
        setSubject("");
        setContent("");
    }

    const handleSubmit = event => {
        event.preventDefault();
    
        const mail = {
          mail: email,
          subject: subject,
          content: content
        };
    
        axios.post(`https://portolio-email-sender.herokuapp.com/`, { mail })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    return (
        <div className="contact">
           <div className="contact-header">
               <h1>GET IN TOUCH</h1>
               <h3>Are you interested in working with me or just have a question?</h3>
           </div>
           <form className="contact-form" onSubmit={event => handleSubmit(event)}>
                <div className="links-container">
                    <a href="https://www.linkedin.com/in/wojciechkubiakin"><img src={ln}/></a>
                    <a href="https://www.github.com/wojciechkubiak"><img src={git}/></a>
                    <a href="https://www.facebook.com/wojciechkubiakfb"><img src={fb}/></a>
                </div>
                <figure>
                    <h4>Mail</h4>
                    <input type="text" className="contact-mail-mail" onChange={event => setEmail(event.target.value)} type="email" required/>
                </figure>
                <figure>
                    <h4>Subject</h4>    
                    <input type="text" className="contact-mail-subject" onChange={event => setSubject(event.target.value)} type="text" required/>
                </figure>
                <figure>
                    <h4>Message</h4>
                    <textarea type="text" className="contact-mail-content" onChange={event => setContent(event.target.value)}></textarea>
                </figure>
                <button className="submit-contact-form" type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Contact;