import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      //   usersList: this.props.users,
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    // const usersList = this.filter(this.state.value);
    // console.log(usersList);
    // this.setState({ usersList: this.filter(this.state.value) });
  };

  filter = element => {
    const usersLi = this.props.users;
    const inputValue = element.toLocaleLowerCase();
    // console.log(inputValue);
    return usersLi.filter(({ name }) => {
      const userName = name.toLocaleLowerCase();
      return userName.includes(inputValue);
    });
  };

  render() {
    // const usersList = this.state.usersList;
    const usersList = this.filter(this.state.value);
    const id = () => Math.random();
    const count = this.filter(this.state.value).length;
    // console.log(count);
    // console.log(this.state.usersList);
    // console.log(this.filter(this.state.value));

    return (
      <div>
        {<Filter filterText={this.state.value} count={count} onChange={this.handleChange} />}
        {/* <div className="filter">
          <span className="filter__count">{count}</span>
          <input
            type="text"
            className="filter__input"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div> */}
        <ul className="users">
          {usersList.map(user => (
            <User key={id()} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
