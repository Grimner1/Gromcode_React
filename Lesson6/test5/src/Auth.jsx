import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      procesingStatus: false,
    };
  }

  handleClickLogin = () => {
    this.setState({ procesingStatus: true });

    setTimeout(() => {
      this.setState({ procesingStatus: false, loginStatus: true });
    }, 2000);
  };

  handleClickLogout = () => {
    this.setState({
      loginStatus: false,
    });
  };

  render() {
    console.log(this.state.loginStatus);
    console.log(this.state.procesingStatus);

    const { loginStatus, procesingStatus } = this.state;

    if (procesingStatus) {
      return <Spinner />;
    }

    if (loginStatus) {
      return <Logout onLogout={this.handleClickLogout} />;
    }

    return <Login onLogin={this.handleClickLogin} />;
  }
}

export default Auth;
