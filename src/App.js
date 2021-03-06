import './App.css';
import React, { useEffect, useState, useRef } from "react";
import { withTranslation } from "react-i18next";
import { isMobile } from 'react-device-detect';
import Name from "./containers/Name/Name";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";
import PolishFlag from "./images/plf.png";
import UKFlag from "./images/enf.png";

const App = props => {
  const { t, i18n } = props;
  const [lang, setLang] = useState("en");
  const [showLangOptions, setShowLangOptions] = useState(false);
  const [showMainBtn, setShowMainBtn] = useState(true);
  const [mainStyle, setMainStyle] = useState("navbar-item");
  const [aboutStyle, setAboutStyle] = useState("navbar-item");
  const [projectsStyle, setProjectsStyle] = useState("navbar-item");
  const [skillsStyle, setSkillsStyle] = useState("navbar-item");
  const [contactStyle, setContactStyle] = useState("navbar-item");
  const [navbarStyle, setNavbarStyle] = useState("navbar");
  const [flag, setFlag] = useState(PolishFlag);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (ref, main, about, projects, skills, contact) => {
    ref.current.scrollIntoView();
    setNavbar(main, about, projects, skills, contact);
  };

  const moveToAbout = () => {
    aboutRef.current.scrollIntoView();
  }

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    setNavbar(true, false, false, false, false);
  }, []);

  const langHandler = () => {
    if (lang === 'en') {
      setFlag(UKFlag);
      setLang('pl');
    } else {
      setFlag(PolishFlag)
      setLang('en');
    }
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

  const navbarDarkHandler = (show) => {
    if(show) {
      setNavbarStyle("navbar navbar-dark")
    } else {
      setNavbarStyle("navbar")
    }
  }

  return (
    <div className="App" ref={mainRef}>
      <div className="language">
        <button onClick={() => langHandler()} className="language-btn-show"><img alt="alt" src={flag} /></button>
      </div>
      <Name mainRef={mainRef}  aboutMoveHandler={moveToAbout} showMainBtn={showMainBtn} setNavbar={setNavbar} t={t} />
      <About aboutRef={aboutRef}  setShowMainBtn={setShowMainBtn} navbarDarkHandler={navbarDarkHandler} t={t} lang={lang} />
      <Projects projectsRef={projectsRef} setNavbar={setNavbar} t={t} />
      <Skills skillsRef={skillsRef} setNavbar={setNavbar} t={t} />
      <Contact  contactRef={contactRef} setNavbar={setNavbar} t={t} />
      <Footer t={t} />
      {!isMobile
        &&
        (
          <div className={navbarStyle}>
            <button onClick={() => executeScroll(mainRef, true, false, false, false, false)}><div className={mainStyle}><div className="navbar-dot"></div></div></button>
            <button onClick={() => executeScroll(projectsRef, false, false, true, false, false)}><div className={projectsStyle}><div className="navbar-dot"></div></div></button>
            <button onClick={() => executeScroll(skillsRef, false, false, false, true, false)}><div className={skillsStyle}><div className="navbar-dot"></div></div></button>
            <button onClick={() => executeScroll(contactRef, false, false, false, false, true)}><div className={contactStyle}><div className="navbar-dot"></div></div></button>
          </div>
        )
      }
    </div>
  );
}

export default withTranslation("common")(App);
