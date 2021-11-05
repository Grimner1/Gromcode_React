import React, { Component } from 'react';
import Expand from './Expand';

const title = 'Some title';

class App extends Component {
  state = {
    isShowExpand: false,
  };

  onClick = () => {
    this.setState({
      isShowExpand: !this.state.isShowExpand,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand title={title} onClick={this.onClick} isShow={this.state.isShowExpand}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a className.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
