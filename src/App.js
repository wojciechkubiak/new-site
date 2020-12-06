import './App.css';
import React, { useEffect, useState, useRef } from "react";
import { withTranslation } from "react-i18next";
import Name from "./containers/Name/Name";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

//TODO: Handle buttons active / navbar on scroll position
const App = props => {
  const { t, i18n } = props;
  const [lang, setLang] = useState("en");
  const [showLangOptions, setShowLangOptions] = useState(false);

  const [mainStyle, setMainStyle] = useState("navbar-item");
  const [aboutStyle, setAboutStyle] = useState("navbar-item");
  const [projectsStyle, setProjectsStyle] = useState("navbar-item");
  const [skillsStyle, setSkillsStyle] = useState("navbar-item");
  const [contactStyle, setContactStyle] = useState("navbar-item");

  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (ref, main, about, projects, skills, contact) => {
    ref.current.scrollIntoView();
    setNavbar(main, about, projects, skills, contact);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    setNavbar(true, false, false, false, false);
  }, []);

  const langHandler = (language) => {
    setLang(language);
    setShowLangOptions(false);
  };

  const showLanguages = () => {
    setShowLangOptions(!showLangOptions);
  }

  const setNavbar = (main, about, projects, skills, contact) => {
    setNavbarFunc(setMainStyle, main);
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
    <div className="App" ref={mainRef}>
      <div className="language">
        <button onClick={() => showLanguages()} className="language-btn-show">{lang.toUpperCase()}</button>
        {showLangOptions && (
          <>
            <button onClick={() => langHandler("pl")} className="language-btn-pick">PL</button>
            <button onClick={() => langHandler("en")} className="language-btn-pick">EN</button>
          </>
        )}
      </div>
      <Name mainRef={mainRef} t={t} />
      <About aboutRef={aboutRef} projectsRef={projectsRef} t={t} />
      <Projects skillsRef={skillsRef} t={t} />
      <Skills contactRef={contactRef} t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <div className="navbar">
        <a onClick={() => executeScroll(mainRef, true, false, false, false, false)}><div className={mainStyle}><div className="navbar-dot"></div></div></a>
        <a onClick={() => executeScroll(aboutRef, false, true, false, false, false)}><div className={aboutStyle}><div className="navbar-dot"></div></div></a>
        <a onClick={() => executeScroll(projectsRef, false, false, true, false, false)}><div className={projectsStyle}><div className="navbar-dot"></div></div></a>
        <a onClick={() => executeScroll(skillsRef, false, false, false, true, false)}><div className={skillsStyle}><div className="navbar-dot"></div></div></a>
        <a onClick={() => executeScroll(contactRef, false, false, false, false, true)}><div className={contactStyle}><div className="navbar-dot"></div></div></a>
      </div>
    </div>
  );
}

export default withTranslation("common")(App);
