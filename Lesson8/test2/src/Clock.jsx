import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.date.toLocaleString()}</div>;
  }
}

export default Clock;

{
  /* <div className="clock">
  <div className="clock__location">
      <!-- название города -->
      New York
  </div>
  <div className="clock__time">
      <!-- локальное время в этом городе (с учером переданного смещения) -->
      7:00:51 AM
  </div>
</div> */
}
