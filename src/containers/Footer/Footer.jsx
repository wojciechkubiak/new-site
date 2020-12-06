import React from "react";
import "./Footer.scss";

const Footer = (props) => <div className="footer"><p>{props.t("footer.text", { framework: "react-i18next" })} Wojciech Kubiak</p></div>

export default Footer;