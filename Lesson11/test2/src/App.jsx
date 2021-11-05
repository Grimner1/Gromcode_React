import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDIalog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDIalog}>
          Show dialog
        </button>
        <Dialog title="some title" isOpen={this.state.isOpen} onClose={this.hideDialog}>
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
