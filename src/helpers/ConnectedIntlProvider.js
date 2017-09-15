import React from 'react';
import { render } from 'react-dom';
import { I18n } from 'react-polyglot';
import App from './components/app';

const locale = window.locale || 'en';
const messages = {
  "hello_name": "Hello, %{name}.",
  "num_cars": "%{smart_count} car |||| %{smart_count} cars",
}

render(
  <I18n locale={locale} messages={messages}>
    <App />
  </I18n>,
  document.getElementById('app')
);
