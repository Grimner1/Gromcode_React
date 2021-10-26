import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App.jsx';
import User from './User';

const rootElement = document.querySelector('#root');

ReactDOM.render(<User userId={'facebook'} />, rootElement);
