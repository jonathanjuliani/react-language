import React from 'react';
import ReactDOM from 'react-dom';
import { I18n } from 'react-polyglot';
import App from './App';
import LocaleMessages from './locale/localeMessages.json';
import registerServiceWorker from './registerServiceWorker';

const locale = window.locale || 'br';
const messages = LocaleMessages[locale];

changeLanguage(lng) {
  this.locale = lng;
  this.messages = LocaleMessages[locale];
};

ReactDOM.render(
  <I18n locale={locale} messages={messages}>
    <App method={changeLanguage}/>
  </I18n>,
  document.getElementById('root')
);
registerServiceWorker();
