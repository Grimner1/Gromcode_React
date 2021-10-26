import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.toggle}>Toggle</button>
          <div className="clock">
            {this.state.visible && <Clock location={'SanVyverna'} offset={16} />}
          </div>
        </div>
        <div>
          <button onClick={this.toggle}>Toggle</button>
          <div className="clock">
            {this.state.visible && <Clock location={'VasHamsfetr'} offset={14} />}
          </div>
        </div>
        <div>
          <button onClick={this.toggle}>Toggle</button>
          <div className="clock">
            {this.state.visible && <Clock location={'LastCity'} offset={2} />}
          </div>
        </div>
      </>
    );
  }
}

export default App;
