import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next"; 
import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en", 
  resources: {
    en: {
      common: common_en
    },
    pl: {
      common: common_pl
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App i18n={i18next}/>
  </I18nextProvider>,
  document.getElementById('root')
);

reportWebVitals();
