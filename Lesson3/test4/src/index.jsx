import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting firstName="Samyel" lastName="Jeckson" birthDate={new Date('2020-12-30')} />,
  rootElement,
);
