import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // let button;
    // const button = this.state.isLoggedIn ? (
    //   <button onClick={this.handleLogout}>Logout</button>
    // ) : (
    //   <button onClick={this.handleLogin}>Login</button>
    // );

    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handleLogout}>Logout</button>;
    // } else button = <button onClick={this.handleLogin}>Login</button>;

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {/* <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleLogout}>Logout</button> */}
          {/* {button} */}
          {this.state.isLoggedIn ? Logout(this.handleLogout) : Login(this.handleLogin)}
        </div>
      </div>
    );
  }
}

export default Auth;
