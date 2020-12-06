import './App.css';
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import Name from "./containers/Name/Name";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

const App = props => {
  const { t, i18n } = props;
  const [lang, setLang] = useState("en");
  const [showLangOptions, setShowLangOptions] = useState(false);

  const [style, setStyle] = useState("navbar-item");
  const [aboutStyle, setAboutStyle] = useState("navbar-item");
  const [projectsStyle, setProjectsStyle] = useState("navbar-item");
  const [skillsStyle, setSkillsStyle] = useState("navbar-item");
  const [contactStyle, setContactStyle] = useState("navbar-item");


  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const langHandler = (language) => {
    setLang(language);
    setShowLangOptions(false);
  };

  const showLanguages = () => {
    setShowLangOptions(!showLangOptions);
  }

  const setNavbar = (about, projects, skills, contact) => {
    setNavbarFunc(setAboutStyle, about);
    setNavbarFunc(setProjectsStyle, projects);
    setNavbarFunc(setSkillsStyle, skills);
    setNavbarFunc(setContactStyle, contact);
  }

  const setNavbarFunc = (f, val) => {
    if (val) {
      f("navbar-item navbar-item-active")
    } else {
      f("navbar-item")
    }
  }

  return (
    <div className="App">
      <div className="language">
        <button onClick={() => showLanguages()} className="language-btn-show">{lang.toUpperCase()}</button>
        {showLangOptions && (
          <>
            <button onClick={() => langHandler("pl")} className="language-btn-pick">PL</button>
            <button onClick={() => langHandler("en")} className="language-btn-pick">EN</button>
          </>
        )}
      </div>
      <Name t={t} />
      <About t={t} />
      <Projects t={t} />
      <Skills t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <div className="navbar">
        <a href="#about" onClick={() => setNavbar(true, false, false, false)}><div className={aboutStyle}><div className="navbar-dot"></div></div></a>
        <a href="#projects" onClick={() => setNavbar(false, true, false, false)}><div className={projectsStyle}><div className="navbar-dot"></div></div></a>
        <a href="#skills" onClick={() => setNavbar(false, false, true, false)}><div className={skillsStyle}><div className="navbar-dot"></div></div></a>
        <a href="#contact" onClick={() => setNavbar(false, false, false, true)}><div className={contactStyle}><div className="navbar-dot"></div></div></a>
      </div>
    </div>
  );
}

export default withTranslation("common")(App);
