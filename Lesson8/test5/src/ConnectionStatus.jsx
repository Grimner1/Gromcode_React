import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.toggleStatus);

    window.addEventListener('offline', this.toggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.toggleStatus);

    window.removeEventListener('offline', this.toggleStatus);
  }

  toggleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    if (this.state.status) {
      return <div className="status">online</div>;
    }
    return <div className="status status_offline">offline</div>;
  }
}

export default ConnectionStatus;
