import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootDomEl = document.querySelector('#root');

const titleElement = <h1 className="title">Todo List</h1>;

ReactDOM.render(titleElement, rootDomEl);

// ===========

// I am comment

const func1 = (a, b) => a + b;

func1();
