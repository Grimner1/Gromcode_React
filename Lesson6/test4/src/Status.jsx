import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <>{this.props.isOnline ? <Online /> : <Offline />}</>;
  }
}

export default Status;
