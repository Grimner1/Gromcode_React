import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const renderSec = time => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';

  const textColor = seconds % 2 === 0 ? '#000' : '#fff';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

// renderSec(new Date());
setInterval(() => renderSec(new Date()), 1000);
