import './App.css';
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import Name from "./containers/Name/Name";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";
import Contact from "./containers/Contact/Contact";

const App = props => {
  const { t, i18n } = props;
  const [lang, setLang] = useState("en");
  const [showLangOptions, setShowLangOptions] = useState(false);

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
    console.log(showLangOptions);
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
    </div>
  );
}

export default withTranslation("common")(App);
