import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App.jsx';
import ConnectionStatus from './Connection Status';

const rootElement = document.querySelector('#root');

ReactDOM.render(<ConnectionStatus />, rootElement);