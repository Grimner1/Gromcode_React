import React, { Component } from 'react';

class Expand extends Component {
  render() {
    const { isShow, children, onClick, title } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onClick}>
            {isShow ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />}
          </button>
        </div>
        <div className="expand__content">{isShow && children}</div>
      </div>
    );
  }
}

export default Expand;
