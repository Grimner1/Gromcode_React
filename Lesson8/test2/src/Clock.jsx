import React, { Component } from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('hh:mm:ss A');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: formatDate(getTimeWithOffset(props.offset)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: formatDate(getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // console.log(this.props.location);
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">{this.state.time}</div>
        </div>
      </>
    );
  }
}

export default Clock;
