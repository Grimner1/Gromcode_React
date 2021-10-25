import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    sotring: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sotring === 'asc' ? 'desc' : 'asc';
    this.setState({
      sotring: newSorting,
    });
  };

  render() {
    let usersList;
    if (this.state.sotring) {
      usersList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sotring === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      usersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sotring || '-'}
        </button>

        <ul className="users">
          {usersList.map(user => (
            <User key={user.name} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
