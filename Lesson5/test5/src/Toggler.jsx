import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'Off',
    };
  }

  toggleText = () => {
    this.setState({
      isActive:
        this.state.isActive === 'On' ? (this.state.isActive = 'Off') : (this.state.isActive = 'On'),
    });
  };

  render() {
    return (
      <button className="toggler" onClick={e => this.toggleText(e)}>
        {this.state.isActive}
      </button>
    );
  }
}

export default Toggler;
