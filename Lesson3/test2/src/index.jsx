import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import SearchField from './Search';
import './search.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<SearchField name="Bob" />, rootElement);
