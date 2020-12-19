import React from "react";
import "./Footer.scss";

const Footer = (props) => 
    <div className="footer">
    <div className="footer-container">
        <p>{props.t("footer.text", { framework: "react-i18next" })} Wojciech Kubiak</p>
    </div>
    </div>

export default Footer;