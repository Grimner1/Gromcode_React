import React, { Component } from 'react';

class Toggler extends Component {
  toggleText = e =>
    e.target.textContent === 'On' ? (e.target.textContent = 'Off') : (e.target.textContent = 'On');

  render() {
    return (
      <button className="toggler" onClick={e => this.toggleText(e)}>
        {'Off'}
      </button>
    );
  }
}

export default Toggler;
