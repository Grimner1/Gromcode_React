import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => {
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
    console.log(this.state.isLoggedIn);
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {/* <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleLogout}>Logout</button> */}
          {/* {button} */}
          {/* {this.state.isLoggedIn ? Logout(this.handleLogout) : Login(this.handleLogin)} */}
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogoutClick} />
          ) : (
            <Login onLogin={this.handleLoginClick} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;

// this.state.isLoggedIn ? (<button onClick={this.handleLogout}>Logout</button>) : (<button onClick={this.handleLogin}>Login</button>);
