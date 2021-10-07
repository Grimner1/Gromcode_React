import React from 'react';
import ReactDOM from 'react-dom';

const domRootElem = document.querySelector('#root');

const renderElem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(renderElem, domRootElem);
